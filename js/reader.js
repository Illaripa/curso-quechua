var readerData = null;
var readerIndex = 0;
var readerMode = 'parallel';

function openReader(key) {
  var src = key.startsWith('aymara') ? CONT_A : CONT_Q;
  readerData = src[key];
  readerIndex = 0;
  readerMode = 'parallel';
  document.getElementById('readerTitle').textContent = readerData.title;
  renderPiece();
  showScreen('reader');
}

function renderPiece() {
  var piece = readerData.pieces[readerIndex];
  var total = readerData.pieces.length;
  document.getElementById('readerPrev').disabled = readerIndex === 0;
  document.getElementById('readerNext').disabled = readerIndex === total - 1;
  document.getElementById('readerProgress').style.cssText =
    'width:' + (((readerIndex + 1) / total) * 100) + '%;background:' + readerData.color;

  var isAy = piece.isAy;
  var lineClass = isAy ? 'quechua-line aymara' : 'quechua-line';
  var html = '<div class="piece-type" style="background:' + readerData.color + '22;color:' + readerData.color + '">' + piece.type + '</div>';
  html += '<h2 class="piece-title">' + piece.title + '</h2><p class="piece-subtitle">' + piece.sub + '</p>';

  // Toggle buttons for non-essay content
  if (!piece.essay) {
    html += '<div class="toggle-row">';
    var modes = [
      {m: 'parallel', l: 'Ambos'},
      {m: 'qonly', l: 'Solo ' + (isAy ? 'Aymara' : 'Quechua')},
      {m: 'sonly', l: 'Solo Espa\u00F1ol'}
    ];
    modes.forEach(function(mode) {
      var isActive = readerMode === mode.m;
      var style = isActive ? 'background:' + readerData.color + '22;color:' + readerData.color + ';border-color:' + readerData.color : '';
      html += '<button class="toggle-btn' + (isActive ? ' active' : '') + '" style="' + style + '" onclick="setReaderMode(\'' + mode.m + '\')">' + mode.l + '</button>';
    });
    html += '</div>';
  }

  // Content
  if (piece.poem) {
    html += '<div class="' + readerMode + ' poem" style="text-align:center;padding:10px 0">';
    piece.lines.forEach(function(l) {
      html += '<div class="' + lineClass + '" style="text-align:center">' + l.q + '</div>' +
        '<div class="spanish-line">' + l.s + '</div>';
    });
    html += '</div>';
  } else if (piece.essay) {
    piece.paras.forEach(function(p) {
      html += '<div class="essay-quechua">' + p.q + '</div><div class="essay-spanish">' + p.s + '</div>';
    });
  } else {
    html += '<div class="' + readerMode + '">';
    piece.lines.forEach(function(l) {
      html += '<div class="' + lineClass + '">' + l.q + '</div><div class="spanish-line">' + l.s + '</div>';
    });
    html += '</div>';
  }

  // Grammar notes
  if (piece.notes) {
    html += '<div class="grammar-box"><div class="grammar-title">\u25A4 Gram\u00E1tica</div>';
    piece.notes.forEach(function(n) {
      html += '<div class="grammar-term">' + n.t + '</div><div class="grammar-def">' + n.d + '</div>';
    });
    html += '</div>';
  }

  // Navigation buttons
  html += '<div style="display:flex;gap:8px;margin-top:22px">' +
    '<button style="flex:1;padding:13px;border-radius:11px;background:var(--card);border:1px solid var(--bdr);color:var(--txt);font-size:14px;font-weight:700;cursor:pointer" ' +
    (readerIndex === 0 ? 'disabled' : 'onclick="prevPiece()"') + '>\u2190 Anterior</button>' +
    '<button style="flex:1;padding:13px;border-radius:11px;background:' + readerData.color + ';color:#000;border:none;font-size:14px;font-weight:700;cursor:pointer" ' +
    (readerIndex === total - 1 ? 'disabled' : 'onclick="nextPiece()"') + '>Siguiente \u2192</button></div>';

  document.getElementById('readerBody').innerHTML = html;
  document.getElementById('readerBody').scrollTop = 0;
}

function setReaderMode(mode) {
  readerMode = mode;
  renderPiece();
}

function prevPiece() {
  if (readerIndex > 0) { readerIndex--; renderPiece(); }
}

function nextPiece() {
  if (readerIndex < readerData.pieces.length - 1) { readerIndex++; renderPiece(); }
}
