import { readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DB = join(__dirname, '../data/songs-uploaded.json');

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end();
  const lang = req.query.lang || 'q';
  try {
    const all = JSON.parse(await readFile(DB, 'utf8'));
    return res.status(200).json(all.filter(s => s.lang === lang));
  } catch {
    return res.status(200).json([]);
  }
}
