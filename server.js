import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createHmac } from 'crypto';
import { exec } from 'child_process';
import dotenv from 'dotenv';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use('/webhook', express.raw({ type: '*/*' }));
app.use(express.json());
app.use(express.static(__dirname));

// GitHub webhook
app.post('/webhook', (req, res) => {
  const sig = req.headers['x-hub-signature-256'] || '';
  const hmac = 'sha256=' + createHmac('sha256', process.env.WEBHOOK_SECRET).update(req.body).digest('hex');
  if (sig !== hmac) return res.status(401).send('Unauthorized');
  res.status(200).send('OK');
  exec('/opt/deploy-quechua.sh >> /var/log/deploy-quechua.log 2>&1');
});

// Public API
app.get('/api/songs', async (req, res) => {
  const mod = await import('./api/songs.js');
  return mod.default(req, res);
});

app.post('/api/chat', async (req, res) => {
  const mod = await import('./api/chat.js');
  return mod.default(req, res);
});

app.post('/api/tts', async (req, res) => {
  const mod = await import('./api/tts.js');
  return mod.default(req, res);
});

// Admin API
const adminRoutes = ['auth', 'upload', 'process', 'presign', 'ytdl', 'save-song'];
for (const route of adminRoutes) {
  app.all(`/api/admin/${route}`, async (req, res) => {
    const mod = await import(`./api/admin/${route}.js`);
    return mod.default(req, res);
  });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Servidor corriendo en puerto ' + PORT));
