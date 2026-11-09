// ============================================================
// HOY — juego diario de completar (pantalla de inicio Q/A)
// 10 oraciones por sesión, de TODAS las del banco: primero las
// falladas, luego nuevas del grupo actual, luego repaso.
// Fallada → vuelve 3 posiciones más tarde (máx. 2 veces).
// ≥80% a la primera → sube al siguiente grupo que exista.
// ============================================================
var HOY_SESSION = 10, HOY_GAP = 3, HOY_MAX_RETRY = 2;
var hoyHinted = {};
var hoyCombo = 0, hoyBestCombo = 0, hoyMissed = [], hoyAuto = null;

// ---------- sonido + vibración (cortos, se pueden apagar) ----------
var hoyAC = null;
function hoySoundOn() { try { return localStorage.getItem('yachay_sonido') !== '0'; } catch (e) { return true; } }
function hoyToggleSound() {
  try { localStorage.setItem('yachay_sonido', hoySoundOn() ? '0' : '1'); } catch (e) {}
  var b = document.querySelector('#hoyLevel .hoy-snd');
  if (b) { b.textContent = hoySoundOn() ? '🔊' : '🔇'; b.setAttribute('aria-pressed', hoySoundOn() ? 'true' : 'false'); }
}
function hoyBeep(ok) {
  if (navigator.vibrate) try { navigator.vibrate(ok ? 12 : [30, 40, 30]); } catch (e) {}
  if (!hoySoundOn()) return;
  try {
    hoyAC = hoyAC || new (window.AudioContext || window.webkitAudioContext)();
    var notes = ok ? [660, 880 + Math.min(hoyCombo, 6) * 40] : [220, 180], t = hoyAC.currentTime;
    notes.forEach(function (f, i) {
      var o = hoyAC.createOscillator(), g = hoyAC.createGain();
      o.type = ok ? 'triangle' : 'sine'; o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, t + i * 0.09);
      g.gain.exponentialRampToValueAtTime(0.18, t + i * 0.09 + 0.015);
      g.gain.exponentialRampToValueAtTime(0.0001, t + i * 0.09 + 0.16);
      o.connect(g); g.connect(hoyAC.destination); o.start(t + i * 0.09); o.stop(t + i * 0.09 + 0.18);
    });
  } catch (e) {}
}

// teclado: 1-4 eligen, Enter/espacio = siguiente
document.addEventListener('keydown', function (e) {
  var scr = document.getElementById('hoy');
  if (!scr || !scr.classList.contains('active') || e.metaKey || e.ctrlKey || e.altKey) return;
  if (document.activeElement && document.activeElement.id === 'hoyInput') return;
  var opts = document.querySelectorAll('#hoyStage .hoy-opts button:not(:disabled)');
  var n = parseInt(e.key, 10);
  if (n >= 1 && n <= opts.length) { e.preventDefault(); opts[n - 1].click(); return; }
  var next = document.getElementById('hoyNext');
  if ((e.key === 'Enter' || e.key === ' ') && next && next.classList.contains('show') && document.activeElement !== next) { e.preventDefault(); next.click(); }
});
var hoyLang = 'q', hoyTheme = 'todo', hoySt, hoyQueue, hoyTotal, hoyDone, hoyRight, hoyFirst, hoyTries;

// Temas: "todo" = curso progresivo; el resto sale de completar-extra.js / futuro.js
var HOY_THEME_NAMES = { todo: 'Básico', dialogos: 'Diálogos', canciones: 'Canciones', futuro: 'Futuro' };
function hoyBank(lang, theme) {
  var src;
  if (theme === 'todo') {
    // aymara: verbos de F. Layme, Gramática Aymara (2011) — rehecho 2026-11-09
    src = lang === 'a' ? (typeof COMPLETAR_A !== 'undefined' ? COMPLETAR_A : []) : (typeof COMPLETAR_Q !== 'undefined' ? COMPLETAR_Q : []);
  } else if (theme === 'futuro') {
    src = lang === 'a' ? (typeof FUTURO_A !== 'undefined' ? FUTURO_A : [])
                       : (typeof FUTURO_Q !== 'undefined' ? FUTURO_Q : []);
  } else {
    src = (typeof COMPLETAR_EXTRA !== 'undefined' && COMPLETAR_EXTRA[lang] && COMPLETAR_EXTRA[lang][theme]) || [];
  }
  return src.map(function (x) { return theme === 'todo' ? x : Object.assign({ t: theme }, x); })
    .filter(function (x) { return x.q.indexOf('____') !== -1 && x.opts.indexOf(x.ans) !== -1; });
}
function hoyThemes(lang) {
  return Object.keys(HOY_THEME_NAMES).filter(function (t) { return hoyBank(lang, t).length > 0; });
}
function hoyKey(x) { return (x.t || '') + x.q + '|' + x.ans; }
function hoyShuffle(a) { return a.map(function (v) { return [Math.random(), v]; }).sort(function (x, y) { return x[0] - y[0]; }).map(function (v) { return v[1]; }); }
function hoyEsc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
function hoyStoreKey() { return 'yachay_hoy_' + hoyLang + '_' + hoyTheme; }
function hoyLoadState() {
  var st;
  try { st = JSON.parse(localStorage.getItem(hoyStoreKey())); } catch (e) {}
  st = st || { group: 0, seen: {}, failed: [] };
  st.known = st.known || {};
  return st;
}
function hoySaveState() { try { localStorage.setItem(hoyStoreKey(), JSON.stringify(hoySt)); } catch (e) {} }

// ---------- racha diaria (una sesión terminada = día cumplido) ----------
function hoyDay(d) { d = d || new Date(); return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(); }
function hoyStreak() {
  var r; try { r = JSON.parse(localStorage.getItem('yachay_racha')); } catch (e) {}
  r = r || { n: 0, last: '' };
  var y = new Date(); y.setDate(y.getDate() - 1);
  if (r.last !== hoyDay() && r.last !== hoyDay(y)) r.n = 0;   // se cortó
  return r;
}
function hoyStreakUp() {
  var r = hoyStreak();
  if (r.last !== hoyDay()) { r.n++; r.last = hoyDay(); }
  try { localStorage.setItem('yachay_racha', JSON.stringify(r)); } catch (e) {}
  return r.n;
}
function hoyStreakHtml() {
  var r = hoyStreak();
  return r.n ? '🔥 ' + r.n + (r.n === 1 ? ' día' : ' días') + (r.last === hoyDay() ? '' : ' · ¡hoy toca!') : '';
}

function startHoy(lang) {
  hoyLang = lang === 'a' ? 'a' : 'q';
  var list = hoyThemes(hoyLang);
  if (list.indexOf(hoyTheme) === -1) hoyTheme = list[0] || 'todo';
  hoyRenderChrome();
  hoyBuild();
  showScreen('hoy');
}

function hoySetLang(lang) {
  currentLang = lang;
  try { localStorage.setItem('yachay_lang', lang); } catch (e) {}
  startHoy(lang);
}
function hoySetTheme(theme) { clearTimeout(hoyAuto); hoyTheme = theme; hoyRenderChrome(); hoyBuild(); }

function hoyRenderChrome() {
  document.getElementById('hoyTq').classList.toggle('on', hoyLang === 'q');
  document.getElementById('hoyTa').classList.toggle('on', hoyLang === 'a');
  var themes = document.getElementById('hoyThemes'), list = hoyThemes(hoyLang);
  if (list.length < 2) { themes.innerHTML = ''; return; }
  themes.innerHTML = list.map(function (t) {
    return '<button class="hoy-chip' + (hoyTheme === t ? ' on' : '') + '" onclick="hoySetTheme(\'' + t + '\')">' +
      (hoyLang === 'a' && t === 'todo' ? 'Verbos' : HOY_THEME_NAMES[t]) + ' <small>' + hoyBank(hoyLang, t).length + '</small></button>';
  }).join('');
}

function hoyBuild() {
  hoySt = hoyLoadState();
  var all = hoyBank(hoyLang, hoyTheme);
  var groups = all.map(function (x) { return x.g; }).sort(function (a, b) { return a - b; });
  if (!groups.length) { document.getElementById('hoyStage').innerHTML = '<p class="hoy-s">Todavía no hay oraciones aquí.</p>'; return; }
  if (groups.indexOf(hoySt.group) === -1) hoySt.group = groups.filter(function (g) { return g >= hoySt.group; })[0] || groups[0];
  var isFailed = function (x) { return hoySt.failed.indexOf(hoyKey(x)) !== -1; };
  var failed = hoyShuffle(all.filter(isFailed)).slice(0, 4);
  var fresh = hoyShuffle(all.filter(function (x) { return x.g === hoySt.group && !hoySt.seen[hoyKey(x)] && !isFailed(x); }));
  var review = hoyShuffle(all.filter(function (x) { return hoySt.seen[hoyKey(x)] && !isFailed(x) && x.g <= hoySt.group; }));
  var pick = failed.concat(fresh.slice(0, HOY_SESSION - failed.length - 1));
  review.forEach(function (x) { if (pick.length < HOY_SESSION && pick.indexOf(x) === -1) pick.push(x); });
  hoyShuffle(all.filter(function (x) { return x.g === hoySt.group; })).forEach(function (x) { if (pick.length < HOY_SESSION && pick.indexOf(x) === -1) pick.push(x); });
  hoyQueue = hoyShuffle(pick);
  hoyTotal = hoyQueue.length; hoyDone = 0; hoyRight = 0; hoyFirst = {}; hoyTries = {}; hoyHinted = {};
  hoyCombo = 0; hoyBestCombo = 0; hoyMissed = [];
  hoyShow();
}

// el hueco y la puntuación que lo sigue van juntos (no queda un "." suelto en otra línea)
function hoyGapHtml(rest) {
  var m = rest.match(/^[.,;:!?¿¡)]+/), punct = m ? m[0] : '';
  return '<span class="hoy-nw"><span class="hoy-gap" id="hoyGap">&nbsp;</span>' + hoyEsc(punct) + '</span>' + hoyEsc(rest.slice(punct.length));
}

function hoyGroupName(g) {
  if (hoyLang === 'a' && hoyTheme === 'todo') return ['', 'Presente', 'Futuro', 'Pasado'][g] || 'Grupo ' + g;
  return 'Grupo ' + g;
}
function hoyMetaRender() {
  document.getElementById('hoyBar').style.width = (hoyDone / hoyTotal * 100) + '%';
  document.getElementById('hoyCount').textContent = Math.min(hoyDone + 1, hoyTotal) + ' / ' + hoyTotal;
  document.getElementById('hoyLevel').innerHTML =
    (hoyCombo >= 2 ? '<b class="hoy-combo">×' + hoyCombo + ' seguidas</b> · ' : '') +
    hoyEsc((hoyStreakHtml() ? hoyStreakHtml() + ' · ' : '') + hoyGroupName(hoySt.group)) +
    ' <button class="hoy-snd" onclick="hoyToggleSound()" aria-label="Sonido" aria-pressed="' + hoySoundOn() + '">' + (hoySoundOn() ? '🔊' : '🔇') + '</button>';
}

// tocar la tarjeta (leer la nota) para el auto-avance
function hoyHold() {
  clearTimeout(hoyAuto);
  var n = document.getElementById('hoyNext'); if (n) n.classList.remove('auto');
}

function hoyShow() {
  clearTimeout(hoyAuto);
  hoyMetaRender();
  if (!hoyQueue.length) return hoyFinish();
  var x = hoyQueue[0];
  // escribir solo respuestas de una palabra, ya acertadas antes, y no en reintentos
  var write = hoySt.known[hoyKey(x)] && !hoyTries[hoyKey(x)] && !/\s/.test(x.ans);
  hoyRender(x, write);
}

function hoyRender(x, write) {
  var parts = x.q.split('____');
  var answer = write
    ? '<form class="hoy-write" id="hoyWrite" autocomplete="off">' +
        '<input id="hoyInput" type="text" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Escribe la palabra que falta" placeholder="Escribe la palabra">' +
        '<button type="submit">Comprobar</button></form>' +
      '<button class="hoy-hint" id="hoyHint" type="button">Ver opciones</button>'
    : '<div class="hoy-opts">' + hoyShuffle(x.opts).map(function (o) { return '<button>' + hoyEsc(o) + '</button>'; }).join('') + '</div>';
  document.getElementById('hoyStage').innerHTML =
    '<p class="hoy-q">' + hoyEsc(parts[0]) + hoyGapHtml(parts[1] || '') + '</p>' +
    '<p class="hoy-s">“' + hoyEsc(x.s) + '”</p>' + answer +
    '<div class="hoy-note" id="hoyNote" aria-live="polite"><b>' + hoyEsc(x.ans) + '</b> · ' + hoyEsc(x.note) + '</div>' +
    '<button class="hoy-next" id="hoyNext">Siguiente →</button>';
  if (write) {
    var inp = document.getElementById('hoyInput');
    document.getElementById('hoyWrite').onsubmit = function (e) {
      e.preventDefault();
      if (!inp.value.trim()) return inp.focus();
      var a = hoyNorm(inp.value), b = hoyNorm(x.ans);
      var ok = a === b || (b.length >= 5 && hoyDist(a, b) === 1);   // un despiste de una letra vale
      inp.disabled = true; this.querySelector('button').disabled = true;
      inp.classList.add(ok ? 'ok' : 'bad');
      document.getElementById('hoyHint').style.display = 'none';
      hoyResolve(ok, x);
    };
    document.getElementById('hoyHint').onclick = function () { hoyHinted[hoyKey(x)] = 1; hoyRender(x, false); };
    try { inp.focus({ preventScroll: true }); } catch (e) {}
  } else {
    document.querySelectorAll('#hoyStage .hoy-opts button').forEach(function (b) { b.onclick = function () { hoyAnswer(b, x); }; });
    var st = document.getElementById('hoyStage');
    if (st.contains(document.activeElement) || document.activeElement === document.body) try { st.focus({ preventScroll: true }); } catch (e) {}
  }
}

function hoyDist(a, b) {
  var d = [], i, j;
  for (i = 0; i <= a.length; i++) d[i] = [i];
  for (j = 1; j <= b.length; j++) d[0][j] = j;
  for (i = 1; i <= a.length; i++) for (j = 1; j <= b.length; j++)
    d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[a.length][b.length];
}

// escribir: no importan mayúsculas, tildes ni el tipo de apóstrofo
function hoyNorm(s) {
  return String(s).trim().toLowerCase().replace(/[’‘´`]/g, "'").normalize('NFD').replace(/[\u0300-\u0302\u0304-\u036f]/g, '').replace(/[.,;:!?¿¡"]/g, '');
}

function hoyAnswer(btn, x) {
  var ok = btn.textContent === x.ans;
  document.querySelectorAll('#hoyStage .hoy-opts button').forEach(function (b) {
    b.disabled = true; if (b.textContent === x.ans) b.classList.add('ok');
  });
  if (!ok) btn.classList.add('bad');
  hoyResolve(ok, x);
}

function hoyResolve(ok, x) {
  var k = hoyKey(x);
  var gap = document.getElementById('hoyGap');
  gap.textContent = x.ans; gap.classList.add(ok ? 'fill-ok' : 'fill-bad');
  var clean = ok && !hoyTries[k] && !hoyHinted[k];
  hoyCombo = clean ? hoyCombo + 1 : 0;
  if (hoyCombo > hoyBestCombo) hoyBestCombo = hoyCombo;
  if (!ok && !hoyMissed.some(function (m) { return hoyKey(m) === k; })) hoyMissed.push(x);
  hoyBeep(ok);
  document.getElementById('hoyNote').classList.add('show');
  hoySt.seen[k] = 1;
  hoyQueue.shift();
  if (!(k in hoyFirst)) { hoyFirst[k] = ok; if (ok) hoyRight++; }
  if (ok && !hoyTries[k] && !hoyHinted[k]) hoySt.known[k] = 1;      // a la primera → la próxima vez, escribir
  if (!ok) delete hoySt.known[k];                  // fallada → vuelve a opciones
  if (ok) {
    hoyDone++;
    hoySt.failed = hoySt.failed.filter(function (f) { return f !== k; });
  } else {
    if (hoySt.failed.indexOf(k) === -1) hoySt.failed.push(k);
    hoyTries[k] = (hoyTries[k] || 0) + 1;
    if (hoyTries[k] <= HOY_MAX_RETRY) hoyQueue.splice(Math.min(HOY_GAP, hoyQueue.length), 0, x);
    else hoyDone++;
  }
  hoySaveState();
  hoyMetaRender();
  document.getElementById('hoyCount').textContent = Math.min(hoyDone + 1, hoyTotal) + ' / ' + hoyTotal;
  var n = document.getElementById('hoyNext');
  n.classList.add('show'); n.onclick = hoyShow;
  try { n.focus({ preventScroll: true }); } catch (e) { n.focus(); }
  // acierto → sigue solo (la barra del botón muestra el tiempo); fallo → esperas tú
  var calm = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (ok && !calm) {
    n.classList.add('auto');
    hoyAuto = setTimeout(function () {
      if (document.getElementById('hoy').classList.contains('active')) hoyShow();
    }, 2500);
  }
}

function hoyFinish() {
  hoyCombo = 0; hoyMetaRender();
  document.getElementById('hoyBar').style.width = '100%';
  var pct = Math.round(hoyRight / hoyTotal * 100);
  var next = hoyBank(hoyLang, hoyTheme).map(function (x) { return x.g; })
    .filter(function (g) { return g > hoySt.group; }).sort(function (a, b) { return a - b; })[0];
  var streak = hoyStreakUp();
  var msg = 'Las falladas volverán pronto.';
  if (pct >= 80 && next) { hoySt.group = next; msg = hoyLang === 'a' && hoyTheme === 'todo' ? '¡Pasas a: ' + hoyGroupName(next) + '!' : '¡Subes al grupo ' + next + '! Oraciones un poco más largas.'; }
  hoySaveState();
  document.getElementById('hoyStage').innerHTML =
    '<div class="hoy-end"><p class="hoy-big">' + hoyRight + '/' + hoyTotal + '</p>' +
    '<p>Acertadas a la primera · ' + msg + '</p>' +
    '<p class="hoy-streak">🔥 ' + streak + (streak === 1 ? ' día seguido' : ' días seguidos') +
      (hoyBestCombo >= 3 ? ' · mejor serie ×' + hoyBestCombo : '') + '</p>' +
    (hoyMissed.length ? '<div class="hoy-review"><p class="hoy-review-t">Para repasar</p>' + hoyMissed.map(function (m) {
      var pp = m.q.split('____');
      return '<p class="hoy-review-i">' + hoyEsc(pp[0]) + '<b>' + hoyEsc(m.ans) + '</b>' + hoyEsc(pp[1] || '') +
        '<span>' + hoyEsc(m.s) + '</span></p>';
    }).join('') + '</div>' : '') +
    '<div class="hoy-row"><button class="hoy-a" onclick="hoyBuild()">10 más</button>' +
    '<button class="hoy-b" onclick="hoyBye()">Listo por hoy</button></div></div>';
  if (pct >= 80) hoyConfetti();
}

function hoyConfetti() {
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var box = document.createElement('div'), cols = ['#F97316', '#FFB627', '#34C08A', '#0F7A50', '#FF8A1F'];
  box.className = 'hoy-confetti'; box.setAttribute('aria-hidden', 'true');
  for (var i = 0; i < 40; i++) {
    var c = document.createElement('i');
    c.style.left = Math.random() * 100 + '%';
    c.style.background = cols[i % cols.length];
    c.style.animationDelay = Math.random() * 0.4 + 's';
    c.style.setProperty('--dx', (Math.random() * 120 - 60) + 'px');
    c.style.setProperty('--r', (Math.random() * 720 - 360) + 'deg');
    box.appendChild(c);
  }
  document.getElementById('hoyStage').appendChild(box);
  setTimeout(function () { box.remove(); }, 2600);
}

function hoyBye() {
  clearTimeout(hoyAuto);
  document.getElementById('hoyStage').innerHTML =
    '<div class="hoy-end"><p class="hoy-big">' + (hoyLang === 'q' ? 'Sulpayki' : 'Yuspagara') + '</p><p>Hasta mañana.</p>' +
    '<div class="hoy-row"><button class="hoy-b" onclick="goHome()">Ver el menú</button></div></div>';
}
