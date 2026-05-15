import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3 = new S3Client({
  region: 'auto',
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY
  }
});

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { filename, contentType, folder } = req.body || {};
  if (!filename) return res.status(400).json({ error: 'Falta filename' });

  const key = `${folder || 'uploads'}/${Date.now()}-${filename}`;

  const url = await getSignedUrl(
    s3,
    new PutObjectCommand({ Bucket: process.env.R2_BUCKET, Key: key, ContentType: contentType || 'application/octet-stream' }),
    { expiresIn: 300 }
  );

  return res.status(200).json({ url, key });
}
