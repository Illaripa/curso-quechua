// Genera data/completar-extra.js a partir de textos reales de la app:
// diálogos (quechua) y letras de canciones con traducción (quechua y aymara).
// Uso: node tools/gen-completar.cjs
const fs = require('fs');
const path = require('path');
const DATA = path.join(__dirname, '..', 'data');

function load(file) {
  const src = fs.readFileSync(path.join(DATA, file), 'utf8');
  const names = [...src.matchAll(/^(?:const|var|let)\s+([A-Z_0-9]+)/gm)].map(m => m[1]);
  return new Function(src + ';return {' + names.join(',') + '}')();
}

// aleatorio con semilla: el mismo archivo da siempre las mismas oraciones
let seed = 20261108;
const rnd = () => (seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648;
const shuffle = a => a.map(v => [rnd(), v]).sort((x, y) => x[0] - y[0]).map(v => v[1]);

const PUNCT = /^[¡¿"“«(]+|[.,;:!?"”»)…]+$/g;
const clean = w => w.replace(PUNCT, '');
const norm = w => clean(w).toLowerCase();

function groupFor(words) {
  const n = words.length;
  return n <= 4 ? 1 : n <= 6 ? 2 : n <= 9 ? 3 : 4;
}

function build(lines, stop) {
  // lines: [{text, trans, src}]
  const pool = new Map();
  lines.forEach(l => l.text.split(/\s+/).forEach(w => {
    const c = clean(w);
    // solo palabras en minúscula: evita nombres propios como distractores
    if (c.length >= 4 && !stop.has(c.toLowerCase()) && c === c.toLowerCase()) pool.set(c, c);
  }));
  const vocab = [...pool.values()];
  const out = [];
  const seen = new Set();
  for (const l of lines) {
    const words = l.text.trim().split(/\s+/);
    if (words.length < 2 || words.length > 14 || !l.trans) continue;
    const cands = words
      .map((w, i) => ({ w, i, c: clean(w) }))
      .filter(x => x.c.length >= 4 && !stop.has(x.c.toLowerCase()) && !(x.i > 0 && /^[A-ZÁÉÍÓÚÑ]/.test(x.c)));
    for (const pick of shuffle(cands).slice(0, 2)) {
      const ans = pick.c;
      const inLine = new Set(words.map(norm));
      const end = ans.toLowerCase().slice(-2);
      const near = shuffle(vocab.filter(v => v.toLowerCase() !== ans.toLowerCase() && !inLine.has(v.toLowerCase()) && v.toLowerCase().endsWith(end)));
      const far = shuffle(vocab.filter(v => v.toLowerCase() !== ans.toLowerCase() && !inLine.has(v.toLowerCase())));
      const opts = [];
      for (const v of near.concat(far)) {
        if (opts.length === 3) break;
        if (!opts.some(o => o.toLowerCase() === v.toLowerCase())) opts.push(v);
      }
      if (opts.length < 3) continue;
      const cap = /^[A-ZÁÉÍÓÚÑ]/.test(ans);
      for (let k = 0; k < opts.length; k++) if (cap) opts[k] = opts[k][0].toUpperCase() + opts[k].slice(1);
      const q = words.map((w, i) => (i === pick.i ? w.replace(ans, '____') : w)).join(' ');
      const key = q + '|' + ans;
      if (seen.has(key)) continue;
      seen.add(key);
      out.push({ g: groupFor(words), lv: 3, q, s: l.trans, ans, opts: shuffle([ans, ...opts]), note: l.text + ' · ' + l.src });
    }
  }
  return out;
}

const D = [...load('dialogos.js').DIALOGOS, ...load('dialogos-extended.js').DIALOGOS_EXT];
const speakers = new Set(D.flatMap(d => Object.keys(d.speakers || {})).map(s => s.toLowerCase()));
const dialogLines = D.flatMap(d => d.lines.map(l => ({ text: l.q, trans: l.t, src: 'diálogo «' + d.title + '»' })));
const songsQ = load('songs-quechua.js').CANCIONES_Q.flatMap(s => s.lines.map(l => ({ text: l.q || '', trans: l.s, src: 'canción «' + s.title + '»' })));
const songsA = load('songs-aymara.js').CANCIONES_A.flatMap(s => s.lines.map(l => ({ text: l.a || '', trans: l.s, src: 'canción «' + s.title + '»' })));

const EXTRA = {
  q: { dialogos: build(dialogLines, speakers), canciones: build(songsQ, new Set()) },
  a: { canciones: build(songsA, new Set()) }
};
const header = '// GENERADO por tools/gen-completar.cjs — no editar a mano.\n// Fuente: diálogos y letras de canciones de la app (textos reales con traducción).\n';
fs.writeFileSync(path.join(DATA, 'completar-extra.js'), header + 'const COMPLETAR_EXTRA = ' + JSON.stringify(EXTRA) + ';\n');
for (const l in EXTRA) for (const t in EXTRA[l]) console.log(l, t, EXTRA[l][t].length);
