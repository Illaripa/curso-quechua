import ytdl from '@distube/ytdl-core';
import OpenAI from 'openai';

export const config = {
  maxDuration: 60
};

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  var body = req.body;
  if (!body || !body.youtube_id) {
    return res.status(400).json({ error: 'Falta youtube_id' });
  }

  var apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'OPENAI_API_KEY no configurada en Vercel' });
  }

  try {
    var url = 'https://www.youtube.com/watch?v=' + body.youtube_id;

    // Download audio from YouTube (lowest quality = smallest file)
    var stream = ytdl(url, { filter: 'audioonly', quality: 'lowestaudio' });
    var chunks = [];
    for await (var chunk of stream) {
      chunks.push(chunk);
    }
    var audioBuffer = Buffer.concat(chunks);

    // Send to OpenAI Whisper
    var openai = new OpenAI({ apiKey });
    var file = new File([audioBuffer], 'audio.mp4', { type: 'audio/mp4' });

    var langCode = body.lang === 'a' ? 'ay' : 'qu';
    var transcription = await openai.audio.transcriptions.create({
      file: file,
      model: 'whisper-1',
      language: langCode,
      response_format: 'text'
    });

    return res.status(200).json({ text: transcription });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
