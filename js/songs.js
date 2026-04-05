var songsData = null;
var songsLang = 'q';
var songsView = 'list'; // 'list' or 'detail'

function openSongs(lang) {
  songsLang = lang;
  songsData = lang === 'q' ? CANCIONES_Q : CANCIONES_A;
  songsView = 'list';
  document.getElementById('songsTitle').textContent = lang === 'q' ? 'Canciones Quechua' : 'Canciones Aymara';
  document.getElementById('songsNav').style.display = 'none';
  renderSongList();
  showScreen('songs');
}

function renderSongList() {
  var color = songsLang === 'q' ? '#c47d1a' : '#1a8a7a';
  var html = '';
  songsData.forEach(function(song, i) {
    html += '<button onclick="openSongDetail(' + i + ')" style="' +
      'display:flex;align-items:center;gap:14px;width:100%;text-align:left;' +
      'background:var(--card);border:1px solid var(--bdr);border-radius:14px;' +
      'padding:14px 16px;margin-bottom:10px;cursor:pointer;min-height:64px;' +
      '-webkit-tap-highlight-color:rgba(0,0,0,0.06);transition:opacity 0.15s,transform 0.15s;" ' +
      'onmousedown="this.style.opacity=\'0.7\';this.style.transform=\'scale(0.98)\'" ' +
      'onmouseup="this.style.opacity=\'\';this.style.transform=\'\'" ' +
      'ontouchstart="this.style.opacity=\'0.7\';this.style.transform=\'scale(0.98)\'" ' +
      'ontouchend="this.style.opacity=\'\';this.style.transform=\'\'">';
    html += '<div style="width:44px;height:44px;border-radius:50%;background:' + color + '22;' +
      'display:flex;align-items:center;justify-content:center;flex-shrink:0;' +
      'font-size:20px;">&#9834;</div>';
    html += '<div style="flex:1;min-width:0">';
    html += '<div style="font-weight:700;font-size:15px;color:var(--txt);margin-bottom:2px">' + song.title + '</div>';
    html += '<div style="font-size:14px;color:var(--muted)">' + song.artist + ' &middot; ' + song.genre + '</div>';
    html += '</div>';
    html += '<div style="color:var(--muted);font-size:18px;">&#8250;</div>';
    html += '</button>';
  });
  document.getElementById('songsBody').innerHTML = html;
  document.getElementById('songsBody').scrollTop = 0;
  document.getElementById('songsProgress').style.cssText = 'width:100%;background:' + color;
  document.getElementById('songsNum').textContent = songsData.length + ' canciones';
}

function openSongDetail(index) {
  songsView = 'detail';
  var song = songsData[index];
  var color = songsLang === 'q' ? '#c47d1a' : '#1a8a7a';
  var langKey = songsLang === 'q' ? 'q' : 'a';

  document.getElementById('songsNav').style.display = 'block';

  var html = '';

  // Header
  html += '<div style="text-align:center;padding:16px 0 8px">';
  html += '<div style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:' + color + ';margin-bottom:6px">' + song.genre + '</div>';
  html += '<div style="font-family:Lora,serif;font-size:22px;font-weight:700;color:var(--txt);margin-bottom:4px">' + song.title + '</div>';
  html += '<div style="font-size:13px;color:var(--muted)">' + song.artist + '</div>';
  html += '</div>';

  // YouTube
  html += '<div style="text-align:center;margin:12px 0 20px">';
  html += '<a href="https://www.youtube.com/watch?v=' + song.youtube_id + '" target="_blank" rel="noopener" ';
  html += 'style="display:inline-flex;align-items:center;gap:8px;padding:12px 22px;border-radius:50px;';
  html += 'background:#ff0000;color:#fff;text-decoration:none;font-size:14px;font-weight:700;min-height:44px;">';
  html += '&#9654; Ver en YouTube</a>';
  html += '</div>';

  // Transcribir
  html += '<div style="text-align:center;margin-bottom:16px">';
  html += '<button onclick="transcribeSong(\'' + song.youtube_id + '\')" id="transcribeBtn" ';
  html += 'style="display:inline-flex;align-items:center;gap:8px;padding:12px 22px;border-radius:50px;';
  html += 'border:1px solid var(--bdr);background:var(--card);font-size:14px;font-weight:700;cursor:pointer;min-height:44px">';
  html += '&#9881; Transcribir con IA</button>';
  html += '<div id="transcribeResult" style="margin-top:12px;font-size:13px;color:var(--muted)"></div>';
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
    html += '<div class="grammar-title">&#9670; Vocabulario</div>';
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

function transcribeSong(youtubeId) {
  var btn = document.getElementById('transcribeBtn');
  var result = document.getElementById('transcribeResult');
  btn.disabled = true;
  btn.textContent = '⏳ Transcribiendo...';
  result.textContent = 'Esto puede tardar 30-60 segundos...';

  fetch('/api/transcribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ youtube_id: youtubeId, lang: songsLang })
  })
  .then(function(r) { return r.json(); })
  .then(function(data) {
    if (data.error) {
      result.textContent = 'Error: ' + data.error;
      btn.disabled = false;
      btn.textContent = '⚙ Transcribir con IA';
    } else {
      btn.style.display = 'none';
      result.style.cssText = 'margin-top:12px;background:var(--card);border-radius:12px;padding:14px;border:1px solid var(--bdr);text-align:left;white-space:pre-wrap;font-size:14px;color:var(--txt)';
      result.textContent = data.text;
    }
  })
  .catch(function(err) {
    result.textContent = 'Error de conexión: ' + err.message;
    btn.disabled = false;
    btn.textContent = '⚙ Transcribir con IA';
  });
}

function songsBack() {
  if (songsView === 'detail') {
    songsView = 'list';
    document.getElementById('songsNav').style.display = 'none';
    renderSongList();
  } else {
    goHome();
  }
}
