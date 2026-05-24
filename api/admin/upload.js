import { S3Client, PutObjectCommand, ListObjectsV2Command, DeleteObjectCommand } from '@aws-sdk/client-s3';

const s3 = new S3Client({
  region: 'auto',
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY
  }
});

async function readRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', c => chunks.push(c));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

const ALLOWED_PREFIXES = ['audio/', 'songs/', 'uploads/'];
function safeKey(key) {
  if (!key || typeof key !== 'string') return false;
  return ALLOWED_PREFIXES.some(p => key.startsWith(p)) && !key.includes('..');
}

export default async function handler(req, res) {
  const { action, folder, filename } = req.query;

  if (req.method === 'GET' && action === 'list') {
    const result = await s3.send(new ListObjectsV2Command({
      Bucket: process.env.R2_BUCKET,
      Prefix: folder ? folder + '/' : ''
    }));
    return res.status(200).json({ files: (result.Contents || []).map(f => ({ key: f.Key, size: f.Size, date: f.LastModified })) });
  }

  if (req.method === 'DELETE') {
    const body = await readRawBody(req);
    const { key } = JSON.parse(body.toString());
    if (!safeKey(key)) return res.status(400).json({ error: 'Key no permitida' });
    await s3.send(new DeleteObjectCommand({ Bucket: process.env.R2_BUCKET, Key: key }));
    return res.status(200).json({ ok: true });
  }

  if (req.method === 'POST') {
    const contentType = req.headers['content-type'] || 'application/octet-stream';
    const safeFilename = (filename || 'file').replace(/[^a-zA-Z0-9._\-]/g, '_');
    const key = `${folder || 'uploads'}/${Date.now()}-${safeFilename}`;

    const body = await readRawBody(req);

    await s3.send(new PutObjectCommand({
      Bucket: process.env.R2_BUCKET,
      Key: key,
      Body: body,
      ContentType: contentType
    }));

    return res.status(200).json({ ok: true, key });
  }

  return res.status(405).end();
}
