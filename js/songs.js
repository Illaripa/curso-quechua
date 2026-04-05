var songsData = null;
var songsIndex = 0;
var songsLang = 'q';

function openSongs(lang) {
  songsLang = lang;
  songsData = lang === 'q' ? CANCIONES_Q : CANCIONES_A;
  songsIndex = 0;
  document.getElementById('songsTitle').textContent = lang === 'q' ? 'Canciones Quechua' : 'Canciones Aymara';
  renderSong();
  showScreen('songs');
}

function renderSong() {
  var song = songsData[songsIndex];
  var total = songsData.length;
  var color = songsLang === 'q' ? '#c47d1a' : '#1a8a7a';

  document.getElementById('songsPrev').disabled = songsIndex === 0;
  document.getElementById('songsNext').disabled = songsIndex === total - 1;
  document.getElementById('songsNum').textContent = (songsIndex + 1) + ' / ' + total;
  document.getElementById('songsProgress').style.cssText =
    'width:' + (((songsIndex + 1) / total) * 100) + '%;background:' + color;

  var langKey = songsLang === 'q' ? 'q' : 'a';

  var html = '';

  // Header de la canción
  html += '<div style="text-align:center;padding:16px 0 8px">';
  html += '<div style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:' + color + ';margin-bottom:6px">' + song.genre + '</div>';
  html += '<div style="font-family:Lora,serif;font-size:22px;font-weight:700;color:var(--txt);margin-bottom:4px">' + song.title + '</div>';
  html += '<div style="font-size:13px;color:var(--muted)">' + song.artist + '</div>';
  html += '</div>';

  // Botón de YouTube
  html += '<div style="text-align:center;margin:12px 0 20px">';
  html += '<a href="https://www.youtube.com/watch?v=' + song.youtube_id + '" target="_blank" rel="noopener" ';
  html += 'style="display:inline-flex;align-items:center;gap:8px;padding:10px 20px;border-radius:50px;';
  html += 'background:#ff0000;color:#fff;text-decoration:none;font-size:13px;font-weight:700;">';
  html += '&#9654; Ver en YouTube</a>';
  html += '</div>';

  // Letra
  html += '<div style="background:var(--card);border-radius:16px;padding:16px;margin-bottom:16px;border:1px solid rgba(0,0,0,0.07)">';
  html += '<div style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:' + color + ';margin-bottom:12px">&#9834; Letra</div>';

  song.lines.forEach(function(l) {
    html += '<div style="margin-bottom:10px">';
    html += '<div style="font-family:Lora,serif;font-size:15px;color:var(--txt);font-style:italic;line-height:1.4">' + (l[langKey] || l.q || l.a) + '</div>';
    html += '<div style="font-size:13px;color:var(--muted);margin-top:2px;line-height:1.4">' + l.s + '</div>';
    html += '</div>';
  });

  html += '</div>';

  // Vocabulario
  if (song.notes && song.notes.length) {
    html += '<div class="grammar-box" style="margin-bottom:24px">';
    html += '<div class="grammar-title">&#9670; Vocabulario de la canción</div>';
    song.notes.forEach(function(n) {
      html += '<div style="display:flex;gap:8px;margin-bottom:6px;align-items:baseline">';
      html += '<div style="font-weight:700;color:' + color + ';min-width:90px;font-size:13px">' + n.t + '</div>';
      html += '<div style="font-size:13px;color:var(--muted)">' + n.d + '</div>';
      html += '</div>';
    });
    html += '</div>';
  }

  document.getElementById('songsBody').innerHTML = html;
  document.getElementById('songsBody').scrollTop = 0;
}

function prevSong() {
  if (songsIndex > 0) { songsIndex--; renderSong(); }
}

function nextSong() {
  if (songsData && songsIndex < songsData.length - 1) { songsIndex++; renderSong(); }
}
