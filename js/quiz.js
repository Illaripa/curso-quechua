var quizData = [];
var quizIndex = 0;
var quizScore = 0;
var quizAnswered = false;
var quizLang = 'q';

function startQuiz(lang) {
  quizLang = lang;
  document.getElementById('quizTitle').textContent = lang === 'q' ? '\u25C9 Quiz Quechua' : '\u25C9 Quiz Aymara';
  var source = lang === 'q' ? QUIZ_Q.slice() : QUIZ_A.slice();
  shuffleArray(source);
  quizData = source;
  quizIndex = 0;
  quizScore = 0;
  quizAnswered = false;
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

  document.getElementById('resultEmoji').textContent = symbol;
  document.getElementById('resultMessage').textContent = message;
  document.getElementById('resultSub').textContent = sub;
  document.getElementById('resultCorrect').textContent = quizScore + '/' + quizData.length;
  document.getElementById('resultPercent').textContent = pct + '%';
  document.getElementById('resultRepeat').onclick = function() { startQuiz(quizLang); };
  showScreen('result');
}
