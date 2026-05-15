import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import OpenAI from 'openai';

export const config = { maxDuration: 120 };

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

  const { key, lang } = req.body || {};
  if (!key) return res.status(400).json({ error: 'Falta key' });

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  // Download file from R2
  const obj = await s3.send(new GetObjectCommand({ Bucket: process.env.R2_BUCKET, Key: key }));
  const chunks = [];
  for await (const chunk of obj.Body) chunks.push(chunk);
  const buffer = Buffer.concat(chunks);

  const filename = key.split('/').pop();
  const file = new File([buffer], filename, { type: 'audio/mpeg' });

  // Transcribe with Whisper
  const langCode = lang === 'a' ? 'ay' : 'qu';
  const transcription = await openai.audio.transcriptions.create({
    file,
    model: 'whisper-1',
    language: langCode,
    response_format: 'verbose_json',
    timestamp_granularities: ['segment']
  });

  // Translate each segment to Spanish
  const segments = transcription.segments || [];
  const translated = [];
  for (const seg of segments) {
    const resp = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: `Eres un traductor experto de ${lang === 'a' ? 'Aymara' : 'Quechua'} al español. Traduce literalmente preservando el sentido poético.` },
        { role: 'user', content: seg.text }
      ],
      max_tokens: 200
    });
    translated.push({
      start: seg.start,
      end: seg.end,
      original: seg.text.trim(),
      spanish: resp.choices[0].message.content.trim()
    });
  }

  return res.status(200).json({ segments: translated });
}
