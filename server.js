import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createHmac, timingSafeEqual } from 'crypto';
import { exec } from 'child_process';
import dotenv from 'dotenv';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use('/webhook', express.raw({ type: '*/*' }));
app.use(express.json({ limit: '1mb' }));
app.use(express.static(__dirname));

// Simple in-memory rate limiter
const _rl = new Map();
function rateLimit(ip, max, windowMs) {
  const now = Date.now();
  // Purga entradas vencidas cuando el Map crece (evita fuga de memoria)
  if (_rl.size > 1000) {
    for (const [k, v] of _rl) if (now > v.reset) _rl.delete(k);
  }
  const entry = _rl.get(ip) || { n: 0, reset: now + windowMs };
  if (now > entry.reset) { entry.n = 0; entry.reset = now + windowMs; }
  entry.n++;
  _rl.set(ip, entry);
  return entry.n > max;
}

// Invoca un handler async capturando cualquier error (Express 4 no lo hace solo)
async function callHandler(file, req, res) {
  try {
    const mod = await import(file);
    await mod.default(req, res);
  } catch (e) {
    console.error('Handler error en', file, e);
    if (!res.headersSent) res.status(500).json({ error: 'Error interno' });
  }
}

// Comparación de contraseña en tiempo constante
function safeEqual(a, b) {
  const ba = Buffer.from(String(a)), bb = Buffer.from(String(b));
  if (ba.length !== bb.length) return false;
  return timingSafeEqual(ba, bb);
}

// Admin auth middleware
function requireAdmin(req, res, next) {
  const pwd = req.headers['x-admin-password'] || '';
  if (!process.env.ADMIN_PASSWORD || !safeEqual(pwd, process.env.ADMIN_PASSWORD))
    return res.status(401).json({ error: 'Unauthorized' });
  next();
}

// GitHub webhook — timing-safe signature check
app.post('/webhook', (req, res) => {
  const sig = req.headers['x-hub-signature-256'] || '';
  const hmac = 'sha256=' + createHmac('sha256', process.env.WEBHOOK_SECRET).update(req.body).digest('hex');
  try {
    const a = Buffer.from(sig), b = Buffer.from(hmac);
    if (a.length !== b.length || !timingSafeEqual(a, b)) return res.status(401).send('Unauthorized');
  } catch { return res.status(401).send('Unauthorized'); }
  res.status(200).send('OK');
  exec('/opt/deploy-quechua.sh >> /var/log/deploy-quechua.log 2>&1');
});

// Public API
app.get('/api/songs', (req, res) => callHandler('./api/songs.js', req, res));

app.post('/api/chat', (req, res) => {
  const ip = req.ip || req.socket.remoteAddress || 'unknown';
  if (rateLimit(ip, 30, 60_000)) return res.status(429).json({ error: 'Demasiadas peticiones. Espera un minuto.' });
  return callHandler('./api/chat.js', req, res);
});

app.post('/api/tts', (req, res) => {
  const ip = req.ip || req.socket.remoteAddress || 'unknown';
  if (rateLimit('tts:' + ip, 20, 60_000)) return res.status(429).json({ error: 'Límite de TTS alcanzado.' });
  return callHandler('./api/tts.js', req, res);
});

// Admin API — all routes require password
const adminRoutes = ['auth', 'upload', 'process', 'presign', 'ytdl', 'save-song'];
for (const route of adminRoutes) {
  app.all(`/api/admin/${route}`, requireAdmin, (req, res) => callHandler(`./api/admin/${route}.js`, req, res));
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Servidor corriendo en puerto ' + PORT));
