import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { execFile } from 'child_process';
import { readFile, unlink, mkdtemp } from 'fs/promises';
import { tmpdir } from 'os';
import { join } from 'path';

const s3 = new S3Client({
  region: 'auto',
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY
  }
});

function run(cmd, args) {
  return new Promise((resolve, reject) => {
    execFile(cmd, args, { maxBuffer: 100 * 1024 * 1024 }, (err, stdout, stderr) => {
      if (err) reject(new Error(stderr || err.message));
      else resolve(stdout);
    });
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { url } = req.body || {};
  if (!url) return res.status(400).json({ error: 'Falta URL' });

  const YOUTUBE = /^https?:\/\/(www\.)?(youtube\.com\/watch|youtu\.be\/|youtube\.com\/shorts\/)/;
  if (!YOUTUBE.test(url)) return res.status(400).json({ error: 'Solo se permiten URLs de YouTube' });

  const tmpDir = await mkdtemp(join(tmpdir(), 'ytdl-'));
  const outTemplate = join(tmpDir, '%(title)s.%(ext)s');

  try {
    await run('yt-dlp', [
      '-x', '--audio-format', 'mp3',
      '--audio-quality', '0',
      '-o', outTemplate,
      '--no-playlist',
      '--js-runtimes', 'node',
      url
    ]);

    const { readdir } = await import('fs/promises');
    const files = await readdir(tmpDir);
    if (!files.length) throw new Error('No se descargó ningún archivo');

    const filename = files[0];
    const filepath = join(tmpDir, filename);
    const buffer = await readFile(filepath);

    const key = `audio/${Date.now()}-${filename.replace(/[^a-zA-Z0-9._\-]/g, '_')}`;
    await s3.send(new PutObjectCommand({
      Bucket: process.env.R2_BUCKET,
      Key: key,
      Body: buffer,
      ContentType: 'audio/mpeg'
    }));

    await unlink(filepath);

    return res.status(200).json({ ok: true, key, filename });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
