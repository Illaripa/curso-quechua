var woLang = 'q';
var woData = [];
var woIndex = 0;
var woScore = 0;
var woAnswered = false;
var woSelected = [];  // array of words placed in slots (null = empty)
var woBank = [];      // remaining words in bank

function startWordOrder(lang) {
  woLang = lang;
  var src = lang === 'a' ? WORDORDER_A : lang === 'en' ? WORDORDER_EN : lang === 'fr' ? WORDORDER_FR : WORDORDER_Q;
  woData = src.slice().sort(function(a, b) { return (a.level || 1) - (b.level || 1); });
  woIndex = 0;
  woScore = 0;
  woAnswered = false;
  var titles = {q:'Ordenar — Quechua', a:'Ordenar — Aymara', en:'Ordenar — English', fr:'Ordenar — Français'};
  document.getElementById('woTitle').textContent = titles[lang] || 'Ordenar palabras';
  renderWoQuestion();
  showScreen('wordorder');
}

function initWoState() {
  var q = woData[woIndex];
  woSelected = new Array(q.ans.length).fill(null);
  woBank = q.ans.slice();
  shuffleArray(woBank);
}

function renderWoQuestion() {
  var total = woData.length;
  document.getElementById('woCount').textContent = (woIndex + 1) + '/' + total;
  document.getElementById('woProgress').style.width = ((woIndex / total) * 100) + '%';
  document.getElementById('woScore').textContent = woScore;

  if (woIndex >= total) { showWoResult(); return; }

  woAnswered = false;
  document.getElementById('woPrompt').textContent = woData[woIndex].es;
  document.getElementById('woFeedback').textContent = '';
  document.getElementById('woFeedback').className = 'wo-feedback';
  document.getElementById('woNote').style.display = 'none';
  document.getElementById('woNextBtn').style.display = 'none';
  initWoState();
  renderWoState();
}

function renderWoState() {
  var q = woData[woIndex];
  var slotsHtml = '';
  for (var i = 0; i < q.ans.length; i++) {
    if (woSelected[i] !== null) {
      slotsHtml += '<button class="wo-slot filled" onclick="removeSlotWord(' + i + ')">' + woSelected[i] + '</button>';
    } else {
      slotsHtml += '<span class="wo-slot empty"></span>';
    }
  }
  document.getElementById('woSlots').innerHTML = slotsHtml;

  var bankHtml = '';
  woBank.forEach(function(w, i) {
    bankHtml += '<button class="wo-word" onclick="selectWordBtn(' + i + ')">' + escapeHtml(w) + '</button>';
  });
  document.getElementById('woBank').innerHTML = bankHtml;
}

function selectWordBtn(bankIdx) {
  if (woAnswered) return;
  var word = woBank[bankIdx];
  // Place into first empty slot
  for (var i = 0; i < woSelected.length; i++) {
    if (woSelected[i] === null) {
      woSelected[i] = word;
      woBank.splice(bankIdx, 1);
      break;
    }
  }
  renderWoState();
  if (woSelected.indexOf(null) === -1) checkWoAnswer();
}

function removeSlotWord(slotIdx) {
  if (woAnswered) return;
  var word = woSelected[slotIdx];
  if (!word) return;
  woSelected[slotIdx] = null;
  woBank.push(word);
  renderWoState();
}

function checkWoAnswer() {
  var q = woData[woIndex];
  var correct = true;
  for (var i = 0; i < q.ans.length; i++) {
    if ((woSelected[i] || '').toLowerCase() !== (q.ans[i] || '').toLowerCase()) {
      correct = false;
      break;
    }
  }
  woAnswered = true;

  var fb = document.getElementById('woFeedback');
  if (correct) {
    woScore++;
    fb.textContent = '✓ Correcto';
    fb.className = 'wo-feedback correct';
    document.getElementById('woScore').textContent = woScore;
  } else {
    fb.textContent = '✗ Correcto: ' + q.ans.join(' ');
    fb.className = 'wo-feedback wrong';
    for (var j = 0; j < q.ans.length; j++) woSelected[j] = q.ans[j];
    woBank = [];
    renderWoState();
  }

  if (q.note) {
    var noteEl = document.getElementById('woNote');
    noteEl.textContent = q.note;
    noteEl.style.display = 'block';
  }
  document.getElementById('woNextBtn').style.display = 'block';
}

function woNext() {
  woIndex++;
  renderWoQuestion();
}

function showWoResult() {
  var total = woData.length;
  var pct = Math.round(woScore / total * 100);
  document.getElementById('woBody').innerHTML =
    '<div style="text-align:center;padding:40px 20px">' +
    '<div style="font-size:48px;margin-bottom:12px">' + (pct >= 70 ? '🎉' : '💪') + '</div>' +
    '<div style="font-size:28px;font-weight:700;margin-bottom:8px">' + woScore + '/' + total + '</div>' +
    '<div style="font-size:16px;color:var(--muted);margin-bottom:32px">' + pct + '% correcto</div>' +
    '<button style="width:100%;padding:16px;border-radius:12px;background:#c47d1a;color:#fff;border:none;font-size:16px;font-weight:700;cursor:pointer;min-height:52px;margin-bottom:12px" onclick="startWordOrder(\'' + woLang + '\')">Repetir</button>' +
    '<button style="width:100%;padding:14px;border-radius:12px;border:1px solid var(--bdr);background:var(--card);font-size:15px;font-weight:700;cursor:pointer;min-height:52px" onclick="goHome()">Inicio</button>' +
    '</div>';
}
