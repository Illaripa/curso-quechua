// ============================================================
// COMPLETAR ORACIONES — Fill in the blank
// ============================================================
var compData = [];
var compIndex = 0;
var compScore = 0;
var compAnswered = false;
var compLang = 'q';
var compGroup = 0; // 0 = all

// Progress stored in localStorage
function compGetProgress() {
  try { return JSON.parse(localStorage.getItem('yachay_comp_v1') || '{}'); }
  catch(e) { return {}; }
}

function compSaveGroupResult(g, correct, total) {
  var p = compGetProgress();
  if (!p[g]) p[g] = { played: 0, correct: 0, total: total };
  p[g].played += total;
  p[g].correct += correct;
  p[g].total = total;
  p[g].pct = Math.round(p[g].correct / p[g].played * 100);
  p[g].last = new Date().toISOString().slice(0,10);
  localStorage.setItem('yachay_comp_v1', JSON.stringify(p));
}

function startCompletar(lang) {
  compLang = lang;
  compGroup = 0;
  var titles = {q:'◈ Completar Quechua', r2:'✎ Completar Avanzado', a:'◈ Completar Aymara', en:'◈ Completar English', fr:'◈ Completar Français'};
  document.getElementById('completarTitle').textContent = titles[lang] || '◈ Completar';
  loadCompletar();
  showScreen('completar');
}

function loadCompletar() {
  var isEN = compLang === 'en';
  var isFR = compLang === 'fr';
  var minG = compLang === 'q' ? 1 : compLang === 'r2' ? 11 : (isEN || isFR) ? 1 : 9;
  var maxG = compLang === 'q' ? 8 : compLang === 'r2' ? 15 : (isEN || isFR) ? 3 : 10;
  var baseData = isEN ? COMPLETAR_EN : isFR ? COMPLETAR_FR : COMPLETAR_Q;
  var source = baseData.filter(function(x) {
    if (compGroup === 0) return x.g >= minG && x.g <= maxG;
    return x.g === compGroup;
  });
  shuffleArray(source);
  compData = source;
  compIndex = 0;
  compScore = 0;
  compAnswered = false;
  renderCompGroups();
  renderComp();
}

function selectCompGroup(g) {
  compGroup = g;
  loadCompletar();
}

function renderCompGroups() {
  var minG = compLang === 'q' ? 1 : compLang === 'r2' ? 11 : 9;
  var maxG = compLang === 'q' ? 8 : compLang === 'r2' ? 15 : 10;
  var progress = compGetProgress();
  var html = '<button class="comp-pill' + (compGroup === 0 ? ' comp-pill--active' : '') + '" onclick="selectCompGroup(0)">Todos</button>';
  for (var g = minG; g <= maxG; g++) {
    var p = progress[g];
    var dot = '';
    if (p && p.pct !== undefined) {
      var color = p.pct >= 80 ? 'var(--teal)' : p.pct >= 50 ? 'var(--gold)' : '#d44';
      dot = '<span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:' + color + ';margin-left:4px;vertical-align:middle"></span>';
    }
    html += '<button class="comp-pill' + (compGroup === g ? ' comp-pill--active' : '') + '" onclick="selectCompGroup(' + g + ')">G' + g + dot + '</button>';
  }
  document.getElementById('compGroups').innerHTML = html;
}

function renderComp() {
  var total = compData.length;
  if (total === 0) {
    document.getElementById('compBody').innerHTML = '<div style="text-align:center;padding:40px;color:var(--muted)">Sin ejercicios en este grupo.</div>';
    return;
  }

  document.getElementById('compCount').textContent = (compIndex + 1) + '/' + total;
  document.getElementById('compProgress').style.width = ((compIndex / total) * 100) + '%';
  document.getElementById('compScoreVal').textContent = compScore;

  if (compIndex >= total) {
    // Save progress for the active group(s)
    var groupsPlayed = compGroup === 0 ? 'all' : compGroup;
    if (compGroup !== 0) {
      compSaveGroupResult(compGroup, compScore, total);
    } else {
      // Save per-group from played data
      var perGroup = {};
      compData.forEach(function(q, i) {
        if (!perGroup[q.g]) perGroup[q.g] = { total: 0 };
        perGroup[q.g].total++;
      });
      // We don't have per-group scores in "all" mode — just update played
      Object.keys(perGroup).forEach(function(g) {
        var p = compGetProgress();
        if (!p[g]) p[g] = { played: 0, correct: 0 };
        p[g].played += perGroup[g].total;
        localStorage.setItem('yachay_comp_v1', JSON.stringify(p));
      });
    }
    showCompletarResult(total);
    return;
  }

  var q = compData[compIndex];
  compAnswered = false;

  var sentence = q.q.replace('____', '<span class="comp-blank">____</span>');

  var optHtml = '';
  q.opts.forEach(function(opt, i) {
    optHtml += '<button class="quiz-option" id="compOpt' + i + '" onclick="answerComp(' + i + ')">' + opt + '</button>';
  });

  document.getElementById('compBody').innerHTML =
    '<div class="comp-card">' +
      '<div class="quiz-prompt">Completa la oración</div>' +
      '<div class="comp-sentence">' + sentence + '</div>' +
      '<div class="quiz-options">' + optHtml + '</div>' +
      '<div id="compFeedback" class="comp-feedback" style="display:none">' +
        '<div class="comp-translation">' + q.s + '</div>' +
        '<div class="quiz-explanation">' + (q.note || '') + '</div>' +
      '</div>' +
    '</div>' +
    '<button class="btn-main" style="background:var(--gold);color:#fff;margin-top:8px" id="compNextBtn" disabled onclick="nextComp()">SIGUIENTE →</button>';
}

function answerComp(selected) {
  if (compAnswered) return;
  compAnswered = true;
  var q = compData[compIndex];
  var correctIdx = q.opts.indexOf(q.ans);

  document.querySelectorAll('#compBody .quiz-option').forEach(function(btn, j) {
    if (j === correctIdx) btn.classList.add('correct');
    else if (j === selected) btn.classList.add('wrong');
    else btn.classList.add('dimmed');
  });

  if (selected === correctIdx) {
    compScore++;
    document.getElementById('compScoreVal').textContent = compScore;
  }

  document.getElementById('compFeedback').style.display = 'block';
  document.getElementById('compNextBtn').disabled = false;
}

function nextComp() {
  compIndex++;
  renderComp();
}

function showCompletarResult(total) {
  var pct = total > 0 ? Math.round(compScore / total * 100) : 0;
  var symbol = pct >= 80 ? '◆' : pct >= 50 ? '◉' : '◈';
  var msg = pct >= 80 ? '¡Excelente!' : pct >= 50 ? 'Buen trabajo' : 'Sigue practicando';
  var sub = pct >= 80 ? 'Dominaste la sección.' : pct >= 50 ? 'Vas por buen camino.' : 'La práctica hace al maestro.';
  document.getElementById('resultEmoji').textContent = symbol;
  document.getElementById('resultMessage').textContent = msg;
  document.getElementById('resultSub').textContent = sub;
  document.getElementById('resultCorrect').textContent = compScore + '/' + total;
  document.getElementById('resultPercent').textContent = pct + '%';
  document.getElementById('resultRepeat').onclick = function() { startCompletar(compLang); };
  showScreen('result');
}
