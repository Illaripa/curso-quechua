var songsData = null;
var songsLang = 'q';
var songsView = 'list';
var karaokePlayer = null;
var karaokeInterval = null;

function stopKaraoke() {
  if (karaokeInterval) { clearInterval(karaokeInterval); karaokeInterval = null; }
  if (karaokePlayer) { try { karaokePlayer.destroy(); } catch(e){} karaokePlayer = null; }
}

function loadYouTubeAPI() {
  return new Promise(function(resolve) {
    if (window.YT && window.YT.Player) { resolve(); return; }
    if (window._ytAPILoading) { window._ytAPIQueue = window._ytAPIQueue || []; window._ytAPIQueue.push(resolve); return; }
    window._ytAPILoading = true;
    window._ytAPIQueue = [resolve];
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(tag);
    window.onYouTubeIframeAPIReady = function() {
      (window._ytAPIQueue || []).forEach(function(fn) { fn(); });
      window._ytAPIQueue = [];
    };
  });
}

async function openSongs(lang) {
  songsLang = lang;
  songsView = 'list';
  document.getElementById('songsTitle').textContent = lang === 'q' ? 'Canciones Quechua' : 'Canciones Aymara';
  document.getElementById('songsNav').style.display = 'none';
  document.getElementById('songsBody').innerHTML = '<p style="color:var(--muted);text-align:center;padding:20px">Cargando...</p>';
  showScreen('songs');

  const staticSongs = lang === 'q' ? CANCIONES_Q : CANCIONES_A;
  try {
    const r = await fetch('/api/songs?lang=' + lang);
    const uploaded = r.ok ? await r.json() : [];
    songsData = [...staticSongs, ...uploaded];
  } catch {
    songsData = staticSongs;
  }
  renderSongList();
}

function renderSongList() {
  const color = songsLang === 'q' ? '#c47d1a' : '#1a8a7a';
  const html = songsData.map((song, i) => `
    <button onclick="openSongDetail(${i})" style="display:flex;align-items:center;gap:14px;width:100%;text-align:left;background:var(--card);border:1px solid var(--bdr);border-radius:14px;padding:14px 16px;margin-bottom:10px;cursor:pointer;min-height:64px;-webkit-tap-highlight-color:rgba(0,0,0,0.06);transition:opacity 0.15s,transform 0.15s;"
      onmousedown="this.style.opacity='0.7';this.style.transform='scale(0.98)'"
      onmouseup="this.style.opacity='';this.style.transform=''"
      ontouchstart="this.style.opacity='0.7';this.style.transform='scale(0.98)'"
      ontouchend="this.style.opacity='';this.style.transform=''">
      <div style="width:44px;height:44px;border-radius:50%;background:${color}22;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:20px;">&#9834;</div>
      <div style="flex:1;min-width:0">
        <div style="font-weight:700;font-size:16px;color:var(--txt);margin-bottom:2px">${song.title}</div>
        <div style="font-size:15px;color:var(--muted)">${song.artist} &middot; ${song.genre} &middot; ${(song.lines||[]).length} lín.</div>
      </div>
      <div style="color:var(--muted);font-size:18px;">&#8250;</div>
    </button>`).join('');

  document.getElementById('songsBody').innerHTML = html;
  document.getElementById('songsBody').scrollTop = 0;
  document.getElementById('songsProgress').style.cssText = `width:100%;background:${color}`;
  document.getElementById('songsNum').textContent = `${songsData.length} canciones`;
}

function openSongDetail(index) {
  stopKaraoke();
  songsView = 'detail';
  const song = songsData[index];
  const color = songsLang === 'q' ? '#c47d1a' : '#1a8a7a';
  const langKey = songsLang;
  const hasTimestamps = (song.lines || []).some(function(l) { return l.start != null; });

  document.getElementById('songsNav').style.display = 'block';

  const ytSection = song.youtube_id
    ? `<div id="ytPlayerWrap" style="margin:0 0 20px;border-radius:14px;overflow:hidden;aspect-ratio:16/9;background:#000;width:100%"></div>`
    : '';

  const lines = (song.lines || []).map(function(l, i) { return `
    <div id="lyric-${i}" style="display:flex;align-items:flex-start;gap:8px;margin-bottom:10px;padding:8px 10px;border-radius:8px;border-left:3px solid transparent;transition:background 0.2s,border-color 0.2s">
      <span style="font-size:12px;color:var(--muted);min-width:18px;padding-top:4px;font-weight:600">${i + 1}</span>
      <div style="flex:1">
        <div style="font-family:Lora,serif;font-size:21px;color:var(--txt);font-style:italic;line-height:1.4">${l[langKey] || l.q || l.a || ''}</div>
        <div style="font-size:17px;color:var(--muted);margin-top:2px;line-height:1.4">${l.s || ''}</div>
      </div>
      <button onclick="speakTextLang(decodeURIComponent('${encodeURIComponent(l[langKey] || l.q || l.a || '')}'),'${songsLang}',this)" style="background:none;border:none;cursor:pointer;font-size:16px;opacity:0.4;padding:4px;flex-shrink:0" title="Escuchar">🔊</button>
    </div>`; }).join('');

  const notes = (song.notes && song.notes.length)
    ? `<div class="grammar-box" style="margin-bottom:24px">
        <div class="grammar-title">&#9670; Vocabulario</div>
        ${song.notes.map(function(n) { return `
          <div style="display:flex;gap:8px;margin-bottom:6px;align-items:baseline">
            <div style="font-weight:700;color:${color};min-width:90px;font-size:16px">${n.t}</div>
            <div style="font-size:16px;color:var(--muted)">${n.d}</div>
          </div>`; }).join('')}
       </div>`
    : '';

  document.getElementById('songsBody').innerHTML = `
    <div style="text-align:center;padding:16px 0 8px">
      <div style="font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${color};margin-bottom:6px">${song.genre}</div>
      <div style="font-family:Lora,serif;font-size:24px;font-weight:700;color:var(--txt);margin-bottom:4px">${song.title}</div>
      <div style="font-size:16px;color:var(--muted)">${song.artist}</div>
    </div>
    ${ytSection}
    <div style="background:var(--card);border-radius:16px;padding:16px;margin-bottom:16px;border:1px solid rgba(0,0,0,0.07)">
      <div style="font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${color};margin-bottom:12px">&#9834; Letra</div>
      ${lines}
    </div>
    ${notes}`;

  document.getElementById('songsBody').scrollTop = 0;

  if (song.youtube_id) {
    loadYouTubeAPI().then(function() {
      var wrap = document.getElementById('ytPlayerWrap');
      if (!wrap) return;
      karaokePlayer = new YT.Player(wrap, {
        videoId: song.youtube_id,
        playerVars: { rel: 0, modestbranding: 1, playsinline: 1 },
        events: {
          onReady: function() {
            // Auto-generate timestamps if none exist
            if (!hasTimestamps && song.lines && song.lines.length) {
              try {
                var dur = karaokePlayer.getDuration();
                if (dur > 0) {
                  var gap = dur / song.lines.length;
                  song.lines.forEach(function(l, i) {
                    l.start = i * gap;
                    l.end = (i + 1) * gap;
                  });
                  hasTimestamps = true;
                }
              } catch(e) {}
            }
            if (!hasTimestamps) return;
            karaokeInterval = setInterval(function() {
              if (!karaokePlayer || typeof karaokePlayer.getCurrentTime !== 'function') return;
              var t = karaokePlayer.getCurrentTime();
              (song.lines || []).forEach(function(l, i) {
                var el = document.getElementById('lyric-' + i);
                if (!el) return;
                var active = l.start != null && t >= l.start && (l.end == null || t < l.end);
                el.style.background = active ? color + '22' : '';
                el.style.borderLeftColor = active ? color : 'transparent';
                if (active) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
              });
            }, 200);
          }
        }
      });
    });
  }
}

var transcriptorLang = 'q';

function openTranscriptor() {
  showScreen('transcriptor');
}

function setTranscriptorLang(lang) {
  transcriptorLang = lang;
  const gold = '#c47d1a', teal = '#1a8a7a';
  const color = lang === 'q' ? gold : teal;
  document.getElementById('tLangQ').style.cssText = `flex:1;padding:12px;border-radius:10px;border:2px solid ${lang==='q'?gold:'var(--bdr)'};background:${lang==='q'?gold:'var(--card)'};color:${lang==='q'?'#fff':'var(--txt)'};font-weight:700;font-size:14px;cursor:pointer`;
  document.getElementById('tLangA').style.cssText = `flex:1;padding:12px;border-radius:10px;border:2px solid ${lang==='a'?teal:'var(--bdr)'};background:${lang==='a'?teal:'var(--card)'};color:${lang==='a'?'#fff':'var(--txt)'};font-weight:700;font-size:14px;cursor:pointer`;
  document.getElementById('transcriptorBtn').style.background = color;
}

function runTranscriptor() {
  const url = document.getElementById('transcriptorUrl').value.trim();
  if (!url) { alert('Pega un link de YouTube primero'); return; }
  const match = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (!match) { alert('Link de YouTube no válido'); return; }

  const btn = document.getElementById('transcriptorBtn');
  const status = document.getElementById('transcriptorStatus');
  const result = document.getElementById('transcriptorResult');

  btn.disabled = true;
  btn.textContent = '⏳ Transcribiendo...';
  status.textContent = 'Descargando audio y transcribiendo... puede tardar 30-60 segundos.';
  result.style.display = 'none';

  fetch('/api/transcribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ youtube_id: match[1], lang: transcriptorLang })
  })
  .then(r => r.json())
  .then(data => {
    btn.disabled = false;
    btn.textContent = '⚙ Transcribir con IA';
    if (data.error) {
      status.textContent = 'Error: ' + data.error;
    } else {
      status.textContent = '✓ Listo';
      document.getElementById('transcriptorText').value = data.text;
      result.style.display = 'block';
    }
  })
  .catch(err => {
    btn.disabled = false;
    btn.textContent = '⚙ Transcribir con IA';
    status.textContent = 'Error: ' + err.message;
  });
}

function copyTranscription() {
  var text = document.getElementById('transcriptorText').value;
  navigator.clipboard.writeText(text).then(function() {
    var btns = document.querySelectorAll('[onclick="copyTranscription()"]');
    btns.forEach(function(b) { b.textContent = '✓ Copiado!'; });
    setTimeout(function() { btns.forEach(function(b) { b.textContent = '✓ Copiar texto'; }); }, 2000);
  });
}

function songsBack() {
  stopKaraoke();
  if (songsView === 'detail') {
    songsView = 'list';
    document.getElementById('songsNav').style.display = 'none';
    renderSongList();
  } else {
    goHome();
  }
}
