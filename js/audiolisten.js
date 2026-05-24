var alLang = 'q';
var alData = [];
var alIndex = 0;
var alScore = 0;
var alAnswered = false;

var AL_LANG_CODES = {q: 'es-PE', a: 'es-BO', en: 'en-US', fr: 'fr-FR'};

function buildAlData(lang) {
  var words;
  if (lang === 'en') {
    words = (typeof PALABRAS_EN !== 'undefined' ? PALABRAS_EN : []).slice();
  } else if (lang === 'fr') {
    words = (typeof PALABRAS_FR !== 'undefined' ? PALABRAS_FR : []).slice();
  } else if (lang === 'a') {
    words = (typeof VERBOS_A !== 'undefined' ? VERBOS_A : []).slice();
  } else {
    words = (typeof VERBOS_Q !== 'undefined' ? VERBOS_Q : []).slice();
  }
  return words.filter(function(w) { return w.q && w.s; });
}

function buildAlBodyHtml() {
  return '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">' +
    '<span style="font-size:13px;color:var(--muted)">Puntos</span>' +
    '<span id="alScore" style="font-size:18px;font-weight:700;color:#c47d1a">0</span></div>' +
    '<div id="alQuestion"></div>';
}

function startAudioListen(lang) {
  if (!window.speechSynthesis) {
    showToast('Tu navegador no soporta síntesis de voz', '#e55');
    return;
  }
  alLang = lang;
  var allWords = buildAlData(lang);
  if (allWords.length < 4) {
    showToast('No hay suficientes palabras para este ejercicio', 'var(--gold)');
    return;
  }
  shuffleArray(allWords);
  alData = allWords.slice(0, 20);
  alIndex = 0;
  alScore = 0;
  alAnswered = false;
  var titles = {q:'Escuchar — Quechua', a:'Escuchar — Aymara', en:'Escuchar — English', fr:'Escuchar — Français'};
  document.getElementById('alTitle').textContent = titles[lang] || 'Escuchar y elegir';
  // Restore body structure (may have been replaced by result screen)
  document.getElementById('alBody').innerHTML = buildAlBodyHtml();
  renderAlQuestion();
  showScreen('audiolisten');
}

function renderAlQuestion() {
  var total = alData.length;
  document.getElementById('alCount').textContent = (alIndex + 1) + '/' + total;
  document.getElementById('alProgress').style.width = ((alIndex / total) * 100) + '%';
  document.getElementById('alScore').textContent = alScore;

  if (alIndex >= total) { showAlResult(); return; }

  alAnswered = false;
  var correct = alData[alIndex];
  var allWords = buildAlData(alLang);

  var distractors = allWords.filter(function(w) { return w.q !== correct.q && w.s !== correct.s; });
  shuffleArray(distractors);
  var opts = [correct].concat(distractors.slice(0, 3));
  shuffleArray(opts);

  var html = '<div style="text-align:center;padding:20px 0 16px">' +
    '<div style="font-size:13px;color:var(--muted);margin-bottom:16px">Escucha la palabra y elige la traducción correcta en español</div>' +
    '<button class="al-play-btn" onclick="speakAlWord()">' +
    '<span style="font-size:32px">🔊</span>' +
    '<div style="font-size:13px;margin-top:6px;font-weight:600">Escuchar</div>' +
    '</button></div>' +
    '<div id="alOptions" class="al-options">';

  opts.forEach(function(opt, i) {
    var isCorrect = opt.q === correct.q ? '1' : '0';
    html += '<button class="al-option" data-correct="' + isCorrect + '" data-idx="' + i + '" onclick="answerAl(' + i + ')">' +
      escapeHtml(opt.s) + '</button>';
  });

  html += '</div>' +
    '<div id="alFeedback" class="al-feedback"></div>' +
    '<div id="alNote" class="al-note" style="display:none"></div>' +
    '<button id="alNextBtn" style="display:none;width:100%;margin-top:16px;padding:15px;border-radius:12px;background:#c47d1a;color:#fff;border:none;font-size:15px;font-weight:700;cursor:pointer;min-height:52px" onclick="alNext()">Siguiente →</button>';

  document.getElementById('alQuestion').innerHTML = html;
  setTimeout(function() { speakAlWord(); }, 400);
}

function speakAlWord() {
  if (!window.speechSynthesis) return;
  var word = alData[alIndex];
  var utterance = new SpeechSynthesisUtterance(word.q);
  utterance.lang = AL_LANG_CODES[alLang] || 'es-PE';
  utterance.rate = 0.85;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function answerAl(optIdx) {
  if (alAnswered) return;
  alAnswered = true;

  var opts = document.querySelectorAll('.al-option');
  var clickedBtn = opts[optIdx];
  var isCorrect = clickedBtn && clickedBtn.getAttribute('data-correct') === '1';

  if (isCorrect) {
    alScore++;
    document.getElementById('alScore').textContent = alScore;
  }

  opts.forEach(function(btn) {
    if (btn.getAttribute('data-correct') === '1') {
      btn.className = 'al-option correct';
    } else if (btn === clickedBtn && !isCorrect) {
      btn.className = 'al-option wrong';
    }
    btn.disabled = true;
  });

  var correctWord = alData[alIndex];
  var fb = document.getElementById('alFeedback');
  if (isCorrect) {
    fb.textContent = '✓ Correcto';
    fb.className = 'al-feedback correct';
  } else {
    fb.textContent = '✗ Era: ' + correctWord.s;
    fb.className = 'al-feedback wrong';
  }

  if (correctWord.note) {
    var noteEl = document.getElementById('alNote');
    noteEl.textContent = correctWord.note;
    noteEl.style.display = 'block';
  }
  document.getElementById('alNextBtn').style.display = 'block';
}

function alNext() {
  alIndex++;
  renderAlQuestion();
}

function showAlResult() {
  var total = alData.length;
  var pct = Math.round(alScore / total * 100);
  document.getElementById('alBody').innerHTML =
    '<div style="text-align:center;padding:40px 20px">' +
    '<div style="font-size:48px;margin-bottom:12px">' + (pct >= 70 ? '🎉' : '💪') + '</div>' +
    '<div style="font-size:28px;font-weight:700;margin-bottom:8px">' + alScore + '/' + total + '</div>' +
    '<div style="font-size:16px;color:var(--muted);margin-bottom:32px">' + pct + '% correcto</div>' +
    '<button style="width:100%;padding:16px;border-radius:12px;background:#c47d1a;color:#fff;border:none;font-size:16px;font-weight:700;cursor:pointer;min-height:52px;margin-bottom:12px" onclick="startAudioListen(\'' + alLang + '\')">Repetir</button>' +
    '<button style="width:100%;padding:14px;border-radius:12px;border:1px solid var(--bdr);background:var(--card);font-size:15px;font-weight:700;cursor:pointer;min-height:52px" onclick="goHome()">Inicio</button>' +
    '</div>';
}
