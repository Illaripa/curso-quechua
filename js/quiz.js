var quizData = [];
var quizIndex = 0;
var quizScore = 0;
var quizAnswered = false;
var quizLang = 'q';
var quizWrongThisRound = {};

function startQuiz(lang) {
  quizLang = lang;
  var qTitles = {q:'\u25C9 Quiz Quechua', a:'\u25C9 Quiz Aymara', en:'\u25C9 Quiz English', fr:'\u25C9 Quiz Fran\u00E7ais'};
  document.getElementById('quizTitle').textContent = qTitles[lang] || '\u25C9 Quiz';
  var source = lang === 'q' ? QUIZ_Q.concat(QUIZ_Q_EXT || []) : lang === 'a' ? QUIZ_A.concat(QUIZ_A_EXT || []) : lang === 'en' ? QUIZ_EN.slice() : QUIZ_FR.slice();

  // Adaptive: load wrong answers and duplicate them for more frequency
  var wrongKey = 'yachay_quiz_wrong_' + lang;
  var wrongMap = JSON.parse(localStorage.getItem(wrongKey) || '{}');
  var augmented = source.slice();
  source.forEach(function(q) {
    if (wrongMap[q.q]) {
      var weight = Math.min(wrongMap[q.q], 3);
      for (var w = 0; w < weight; w++) augmented.push(Object.assign({}, q));
    }
  });
  shuffleArray(augmented);

  quizData = augmented;
  quizIndex = 0;
  quizScore = 0;
  quizAnswered = false;
  quizWrongThisRound = {};
  document.getElementById('quizScore').textContent = '0';
  renderQuizQuestion();
  showScreen('quiz');
}

function renderQuizQuestion() {
  var total = quizData.length;
  document.getElementById('quizCount').textContent = (quizIndex + 1) + '/' + total;
  document.getElementById('quizProgress').style.width = ((quizIndex / total) * 100) + '%';

  if (quizIndex >= total) {
    showQuizResult();
    return;
  }

  var q = quizData[quizIndex];
  quizAnswered = false;
  var html = '<div class="quiz-card">' +
    '<div class="quiz-prompt">Traduce al espa\u00F1ol</div>' +
    '<div class="quiz-sentence">' + q.q + '</div>' +
    '<div class="quiz-options">';

  q.o.forEach(function(opt, i) {
    html += '<button class="quiz-option" id="quizOpt' + i + '" onclick="answerQuiz(' + i + ')">' + opt + '</button>';
  });

  html += '</div><div id="quizExplanation"></div></div>' +
    '<button class="btn-main" style="background:var(--gold);color:#fff" id="quizNext" disabled onclick="nextQuizQuestion()">SIGUIENTE \u2192</button>';

  document.getElementById('quizBody').innerHTML = html;
}

function answerQuiz(selected) {
  if (quizAnswered) return;
  quizAnswered = true;
  var q = quizData[quizIndex];

  document.querySelectorAll('.quiz-option').forEach(function(opt, j) {
    if (j === q.a) {
      opt.classList.add('correct');
    } else if (j === selected && selected !== q.a) {
      opt.classList.add('wrong');
    } else {
      opt.classList.add('dimmed');
    }
  });

  if (selected === q.a) {
    quizScore++;
    document.getElementById('quizScore').textContent = quizScore;
    // Remove from wrong list if previously wrong
    var wrongKeyR = 'yachay_quiz_wrong_' + quizLang;
    var wrongR = JSON.parse(localStorage.getItem(wrongKeyR) || '{}');
    if (wrongR[q.q]) { delete wrongR[q.q]; localStorage.setItem(wrongKeyR, JSON.stringify(wrongR)); }
  } else {
    // Track wrong answer
    var wrongKey = 'yachay_quiz_wrong_' + quizLang;
    var wrong = JSON.parse(localStorage.getItem(wrongKey) || '{}');
    wrong[q.q] = (wrong[q.q] || 0) + 1;
    localStorage.setItem(wrongKey, JSON.stringify(wrong));
    quizWrongThisRound[q.q] = true;
  }

  document.getElementById('quizExplanation').innerHTML =
    '<div class="quiz-explanation">' + q.note + '</div>';
  document.getElementById('quizNext').disabled = false;
}

function nextQuizQuestion() {
  quizIndex++;
  renderQuizQuestion();
}

function showQuizResult() {
  var pct = Math.round(quizScore / quizData.length * 100);
  var symbol = pct >= 80 ? '\u2726' : pct >= 50 ? '\u25C9' : '\u25A4';
  var message = pct >= 80 ? 'Excelente!' : pct >= 50 ? 'Buen trabajo' : 'Sigue practicando';
  var sub = pct >= 80 ? 'Dominaste el quiz!' : pct >= 50 ? 'Vas por buen camino.' : 'La pr\u00E1ctica hace al maestro.';

  var key = 'yachay_quiz_' + quizLang;
  var prev = JSON.parse(localStorage.getItem(key) || '{"best":0,"total":0}');
  prev.total++;
  if (pct > prev.best) prev.best = pct;
  localStorage.setItem(key, JSON.stringify(prev));

  // If great score, clear wrong answers for this language
  if (pct >= 80) {
    localStorage.removeItem('yachay_quiz_wrong_' + quizLang);
  }

  document.getElementById('resultEmoji').textContent = symbol;
  document.getElementById('resultMessage').textContent = message;
  document.getElementById('resultSub').textContent = sub;
  document.getElementById('resultCorrect').textContent = quizScore + '/' + quizData.length;
  document.getElementById('resultPercent').textContent = pct + '%';
  document.getElementById('resultRepeat').onclick = function() { startQuiz(quizLang); };
  showScreen('result');
}
