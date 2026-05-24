// ============================================================
// RIMANAKUY — Diálogos interactivos
// ============================================================
var dialIdx = 0;
var dialShowAll = false;

function startDialogos() {
  dialIdx = 0;
  dialShowAll = false;
  showScreen('dialogos');
  renderDialogoList();
  renderDialogo();
}

function selectDialogo(i) {
  dialIdx = i;
  dialShowAll = false;
  renderDialogoList();
  renderDialogo();
  var body = document.querySelector('#dialogos .content-body');
  if (body) body.scrollTop = 0;
}

function renderDialogoList() {
  var html = '';
  DIALOGOS.forEach(function(d, i) {
    var active = i === dialIdx;
    html += '<button class="comp-pill' + (active ? ' comp-pill--active' : '') + '"' +
            (active ? ' style="background:' + d.color + ';border-color:' + d.color + ';color:#fff"' : '') +
            ' onclick="selectDialogo(' + i + ')">' + d.book + '</button>';
  });
  document.getElementById('dialList').innerHTML = html;
}

function renderDialogo() {
  var d = DIALOGOS[dialIdx];
  var total = DIALOGOS.length;
  document.getElementById('dialProgress').style.width = ((dialIdx + 1) / total * 100) + '%';
  document.getElementById('dialCount').textContent = (dialIdx + 1) + '/' + total;

  var speakerKeys = Object.keys(d.speakers);
  var html = '';

  // Header
  html += '<div class="dial-header">' +
    '<div class="dial-title">' + d.title + '</div>' +
    '<div class="dial-subtitle">' + d.subtitle + '</div>' +
    '<div class="dial-context">' + d.context + '</div>' +
    '</div>';

  // Lines
  html += '<div class="dial-lines">';
  d.lines.forEach(function(line, i) {
    var isRight = speakerKeys.indexOf(line.s) % 2 === 1;
    var color = d.speakers[line.s] || d.color;
    var initial = line.s.charAt(0).toUpperCase();
    html += '<div class="dial-line' + (isRight ? ' dial-line--right' : '') + '">';
    if (!isRight) html += '<div class="dial-avatar" style="background:' + color + '">' + initial + '</div>';
    html += '<div class="dial-bubble-wrap">' +
      '<div class="dial-speaker" style="color:' + color + '">' + line.s + '</div>' +
      '<div class="dial-bubble" style="border-left:3px solid ' + color + '" onclick="toggleDialTrans(' + i + ')">' +
      '<span class="dial-quechua">' + line.q + '</span>' +
      '<span class="dial-trans" id="dialTrans' + i + '" style="display:' + (dialShowAll ? 'block' : 'none') + '">' + line.t + '</span>' +
      '</div>' +
      '</div>';
    if (isRight) html += '<div class="dial-avatar" style="background:' + color + '">' + initial + '</div>';
    html += '</div>';
  });
  html += '</div>';

  // Grammar note
  if (d.note) {
    html += '<div class="dial-note">' +
      '<span class="dial-note-label">Tarpuynin</span> ' + d.note +
      '</div>';
  }

  document.getElementById('dialBody').innerHTML = html;
  document.getElementById('dialShowAllBtn').textContent = dialShowAll ? 'Ocultar traducción' : 'Ver traducción';
}

function toggleDialTrans(i) {
  var el = document.getElementById('dialTrans' + i);
  if (el) el.style.display = (el.style.display === 'none' || el.style.display === '') ? 'block' : 'none';
}

function toggleDialShowAll() {
  dialShowAll = !dialShowAll;
  var d = DIALOGOS[dialIdx];
  d.lines.forEach(function(_, i) {
    var el = document.getElementById('dialTrans' + i);
    if (el) el.style.display = dialShowAll ? 'block' : 'none';
  });
  document.getElementById('dialShowAllBtn').textContent = dialShowAll ? 'Ocultar traducción' : 'Ver traducción';
}

function prevDialogo() {
  if (dialIdx > 0) selectDialogo(dialIdx - 1);
}

function nextDialogo() {
  if (dialIdx < DIALOGOS.length - 1) selectDialogo(dialIdx + 1);
}
