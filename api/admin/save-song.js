import { readFile, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DB = join(__dirname, '../../data/songs-uploaded.json');

async function loadDB() {
  try { return JSON.parse(await readFile(DB, 'utf8')); } catch { return []; }
}

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(await loadDB());
  }

  if (req.method === 'DELETE') {
    const { id } = req.body || {};
    const songs = (await loadDB()).filter(s => s.id !== id);
    await writeFile(DB, JSON.stringify(songs, null, 2));
    return res.status(200).json({ ok: true });
  }

  if (req.method !== 'POST') return res.status(405).end();

  const { title, artist, genre, youtube_url, lang, segments } = req.body || {};
  if (!title || !segments) return res.status(400).json({ error: 'Faltan datos' });

  const langKey = lang === 'a' ? 'a' : 'q';
  const ytMatch = (youtube_url || '').match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);

  const song = {
    id: Date.now().toString(),
    title,
    artist: artist || 'Desconocido',
    genre: genre || 'Tradicional',
    youtube_id: ytMatch ? ytMatch[1] : '',
    lang: langKey,
    lines: segments.map(s => ({ [langKey]: s.text, s: s.translation || '' })),
    notes: []
  };

  const songs = await loadDB();
  songs.push(song);
  await writeFile(DB, JSON.stringify(songs, null, 2));
  return res.status(200).json({ ok: true, song });
}
