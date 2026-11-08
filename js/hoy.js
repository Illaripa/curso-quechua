// ============================================================
// HOY — juego diario de completar (pantalla de inicio Q/A)
// 10 oraciones por sesión, de TODAS las del banco: primero las
// falladas, luego nuevas del grupo actual, luego repaso.
// Fallada → vuelve 3 posiciones más tarde (máx. 2 veces).
// ≥80% a la primera → sube al siguiente grupo que exista.
// ============================================================
var HOY_SESSION = 10, HOY_GAP = 3, HOY_MAX_RETRY = 2;
var hoyLang = 'q', hoyTheme = 'todo', hoySt, hoyQueue, hoyTotal, hoyDone, hoyRight, hoyFirst, hoyTries;

// Temas: "todo" = curso progresivo; el resto sale de completar-extra.js / futuro.js
var HOY_THEME_NAMES = { todo: 'Básico', dialogos: 'Diálogos', canciones: 'Canciones', futuro: 'Futuro' };
function hoyBank(lang, theme) {
  var src;
  if (theme === 'todo') {
    src = lang === 'a' ? (typeof COMPLETAR_A !== 'undefined' ? COMPLETAR_A : [])
                       : (typeof COMPLETAR_Q !== 'undefined' ? COMPLETAR_Q : []);
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
  try { return JSON.parse(localStorage.getItem(hoyStoreKey())) || { group: 0, seen: {}, failed: [] }; }
  catch (e) { return { group: 0, seen: {}, failed: [] }; }
}
function hoySaveState() { try { localStorage.setItem(hoyStoreKey(), JSON.stringify(hoySt)); } catch (e) {} }

function startHoy(lang) {
  hoyLang = lang === 'a' ? 'a' : 'q';
  if (hoyThemes(hoyLang).indexOf(hoyTheme) === -1) hoyTheme = 'todo';
  hoyRenderChrome();
  hoyBuild();
  showScreen('hoy');
}

function hoySetLang(lang) {
  currentLang = lang;
  try { localStorage.setItem('yachay_lang', lang); } catch (e) {}
  startHoy(lang);
}
function hoySetTheme(theme) { hoyTheme = theme; hoyRenderChrome(); hoyBuild(); }

function hoyRenderChrome() {
  document.getElementById('hoyTq').classList.toggle('on', hoyLang === 'q');
  document.getElementById('hoyTa').classList.toggle('on', hoyLang === 'a');
  var themes = document.getElementById('hoyThemes'), list = hoyThemes(hoyLang);
  if (list.length < 2) { themes.innerHTML = ''; return; }
  themes.innerHTML = list.map(function (t) {
    return '<button class="hoy-chip' + (hoyTheme === t ? ' on' : '') + '" onclick="hoySetTheme(\'' + t + '\')">' +
      HOY_THEME_NAMES[t] + ' <small>' + hoyBank(hoyLang, t).length + '</small></button>';
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
  hoyTotal = hoyQueue.length; hoyDone = 0; hoyRight = 0; hoyFirst = {}; hoyTries = {};
  hoyShow();
}

// el hueco y la puntuación que lo sigue van juntos (no queda un "." suelto en otra línea)
function hoyGapHtml(rest) {
  var m = rest.match(/^[.,;:!?¿¡)]+/), punct = m ? m[0] : '';
  return '<span class="hoy-nw"><span class="hoy-gap" id="hoyGap">&nbsp;</span>' + hoyEsc(punct) + '</span>' + hoyEsc(rest.slice(punct.length));
}

function hoyShow() {
  document.getElementById('hoyBar').style.width = (hoyDone / hoyTotal * 100) + '%';
  document.getElementById('hoyCount').textContent = Math.min(hoyDone + 1, hoyTotal) + ' / ' + hoyTotal;
  document.getElementById('hoyLevel').textContent = 'Grupo ' + hoySt.group;
  if (!hoyQueue.length) return hoyFinish();
  var x = hoyQueue[0], parts = x.q.split('____');
  document.getElementById('hoyStage').innerHTML =
    '<p class="hoy-q">' + hoyEsc(parts[0]) + hoyGapHtml(parts[1] || '') + '</p>' +
    '<p class="hoy-s">“' + hoyEsc(x.s) + '”</p>' +
    '<div class="hoy-opts">' + hoyShuffle(x.opts).map(function (o) { return '<button>' + hoyEsc(o) + '</button>'; }).join('') + '</div>' +
    '<div class="hoy-note" id="hoyNote" aria-live="polite"><b>' + hoyEsc(x.ans) + '</b> · ' + hoyEsc(x.note) + '</div>' +
    '<button class="hoy-next" id="hoyNext">Siguiente →</button>';
  document.querySelectorAll('#hoyStage .hoy-opts button').forEach(function (b) { b.onclick = function () { hoyAnswer(b, x); }; });
}

function hoyAnswer(btn, x) {
  var ok = btn.textContent === x.ans, k = hoyKey(x);
  document.querySelectorAll('#hoyStage .hoy-opts button').forEach(function (b) {
    b.disabled = true; if (b.textContent === x.ans) b.classList.add('ok');
  });
  if (!ok) btn.classList.add('bad');
  document.getElementById('hoyGap').textContent = x.ans;
  document.getElementById('hoyNote').classList.add('show');
  hoySt.seen[k] = 1;
  hoyQueue.shift();
  if (!(k in hoyFirst)) { hoyFirst[k] = ok; if (ok) hoyRight++; }
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
  var n = document.getElementById('hoyNext');
  n.classList.add('show'); n.focus(); n.onclick = hoyShow;
}

function hoyFinish() {
  document.getElementById('hoyBar').style.width = '100%';
  var pct = Math.round(hoyRight / hoyTotal * 100);
  var next = hoyBank(hoyLang, hoyTheme).map(function (x) { return x.g; })
    .filter(function (g) { return g > hoySt.group; }).sort(function (a, b) { return a - b; })[0];
  var msg = 'Las falladas volverán pronto.';
  if (pct >= 80 && next) { hoySt.group = next; msg = '¡Subes al grupo ' + next + '! Oraciones un poco más largas.'; }
  hoySaveState();
  document.getElementById('hoyStage').innerHTML =
    '<div class="hoy-end"><p class="hoy-big">' + hoyRight + '/' + hoyTotal + '</p>' +
    '<p>Acertadas a la primera · ' + msg + '</p>' +
    '<div class="hoy-row"><button class="hoy-a" onclick="hoyBuild()">10 más</button>' +
    '<button class="hoy-b" onclick="hoyBye()">Listo por hoy</button></div></div>';
}

function hoyBye() {
  document.getElementById('hoyStage').innerHTML =
    '<div class="hoy-end"><p class="hoy-big">' + (hoyLang === 'q' ? 'Sulpayki' : 'Yuspagara') + '</p><p>Hasta mañana.</p>' +
    '<div class="hoy-row"><button class="hoy-b" onclick="goHome()">Ver el menú</button></div></div>';
}
