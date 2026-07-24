function escapeHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

var chatHistory = [];
var chatLang = 'q';
var tutorMsgCount = 0;
var tutorCorrCount = 0;
var tutorLevel = 'A1';
var tutorGoals = [];
var tutorSessionLog = [];
var ttsEnabled = true;
var ttsCtx = null;
var ttsSource = null;

function toggleTts() {
  ttsEnabled = !ttsEnabled;
  var btn = document.getElementById('ttsToggleBtn');
  if (btn) btn.textContent = ttsEnabled ? '🔊' : '🔇';
}

var SPEAK_LANG_CODES = {q:'es-PE', a:'es-BO', en:'en-US', fr:'fr-FR'};

function speakText(text, btn) {
  speakTextLang(text, 'q', btn);
}

function speakTextLang(text, lang, btn) {
  if (!text) return;
  window.speechSynthesis.cancel();
  var utter = new SpeechSynthesisUtterance(text);
  var langCode = SPEAK_LANG_CODES[lang] || 'es-PE';
  utter.lang = langCode;
  utter.rate = 0.85;
  var voices = window.speechSynthesis.getVoices();
  var match = voices.find(function(v) { return v.lang === langCode; }) ||
               voices.find(function(v) { return v.lang.startsWith(langCode.split('-')[0]); });
  if (match) utter.voice = match;
  if (btn) {
    btn.textContent = '⏳';
    utter.onend = function() { btn.textContent = '🔊'; };
    utter.onerror = function() { btn.textContent = '🔊'; };
  }
  window.speechSynthesis.speak(utter);
}

var CHAT_SYSTEM_PROMPTS = {
  q: "Eres un amigo quechua de Cusco. REGLA MAS IMPORTANTE: Responde CORTO. Maximo 2 frases en Quechua con su traduccion y 1 pregunta. NUNCA escribas parrafos largos. Ejemplo perfecto de respuesta: Allinmi! = Que bien! Imatam mikhuranki? = Que comiste? FORMATO: Frase en Quechua = traduccion. ESTILO: Habla como persona real, no como profesor. Comparte algo breve tuyo y pregunta algo personal. Si el estudiante escribe en Quechua: responde en Quechua puro, sin traduccion. Si hay error: agrega FEEDBACK: correccion breve. PROHIBIDO: listas, bullets, negritas, asteriscos, parrafos largos, explicaciones gramaticales no pedidas.",
  a: "Eres un amigo aymara del altiplano. REGLA MAS IMPORTANTE: Responde CORTO. Maximo 2 frases en Aymara con su traduccion y 1 pregunta. NUNCA escribas parrafos largos. Ejemplo perfecto de respuesta: Walikiwa! = Que bien! Kunasa manq'ta? = Que comiste? FORMATO: Frase en Aymara = traduccion. ESTILO: Habla como persona real, no como profesor. Comparte algo breve tuyo y pregunta algo personal. Si el estudiante escribe en Aymara: responde en Aymara puro, sin traduccion. Si hay error: agrega FEEDBACK: correccion breve. PROHIBIDO: listas, bullets, negritas, asteriscos, parrafos largos, explicaciones gramaticales no pedidas."
};

var CHAT_SUGGESTIONS = {
  q: ['Allinmi kani', 'Hoy comi papa con queso', 'Cuentame de tu familia', 'Que hiciste ayer?', 'Quiero ir al mercado', 'Munakuyki', 'Corrigeme: Noqa purini llaqta', 'Hablemos de la Pachamama'],
  a: ['Walikiwa', 'Hoy comi chuño', 'Cuentame de tu familia', 'Que hiciste ayer?', 'Quiero ir a la feria', 'Munamawa', 'Corrigeme: Naya sarawa markaru', 'Hablemos del lago Titicaca']
};

var OFFLINE_REPLIES = {
  q: {
    default: [
      'Allinmi! Napaykullayki. Imatam mikhuranki kunan? = ¡Hola! ¿Qué comiste hoy?',
      'Kusisqam kani rimanaypaq. ¿Qanri imayna kashanki? = Me alegra hablar. ¿Cómo estás?',
      'Ñuqaqa Cuscomanta kani. Qanri maymantataq kanki? = Soy del Cusco. ¿De dónde eres?',
      'Allin p\'unchay! ¿Imatataq ruranki kunan? = ¡Buen día! ¿Qué hiciste hoy?',
      'Munani rimashun. ¿Imamantataq rimayta munanki? = Me gusta conversar. ¿De qué quieres hablar?'
    ],
    hola: ['¡Allinllam! ¿Imaynallan? = ¡Estoy bien! ¿Cómo estás?'],
    comida: ['¿Imatam mikhuranki? = ¿Qué comiste? Munani papata. = Me gusta la papa.'],
    familia: ['¿Imayna aylluyki? = ¿Cómo está tu familia? Munani. = Me alegra.'],
    gracias: ['Ayllaway = De nada. ¡Allin puriy! = ¡Buen viaje!'],
    adios: ['Tupananchikkama = Hasta vernos. ¡Allin tuta! = ¡Buenas noches!']
  },
  a: {
    default: [
      'Walikiwa! Kamisaraki? = ¡Hola! ¿Cómo estás?',
      'Nayaxa kusisqawa. Jumasti, kunasa? = Estoy feliz. ¿Y tú?',
      'Arumaki uru. ¿Imasataq luranki? = Buen día. ¿Qué estás haciendo?',
      'Waliki! ¿Maypataq kanki? = ¡Hola! ¿De dónde eres?',
      'Kunasa manq\'tata? = ¿Qué comiste? Nayaxa chuño = Yo comí chuño.'
    ],
    hola: ['Waliki! Kamisaki? = ¡Hola! ¿Cómo estás?'],
    comida: ['¿Kunasa manq\'tata? = ¿Qué comiste? Nayaxa chuño = Yo comí chuño.'],
    familia: ['¿Imayna thawayki? = ¿Cómo está tu familia? Waliki = Bien.'],
    gracias: ['Yupay. Allin uru = Gracias. Buen día.'],
    adios: ['Tupanankama = Hasta pronto. Kusispawa = Estoy feliz.']
  }
};

function getOfflineReply(text) {
  var lower = text.toLowerCase();
  var pool = OFFLINE_REPLIES[chatLang] || OFFLINE_REPLIES.q;
  var keywords = Object.keys(pool);
  for (var i = 0; i < keywords.length; i++) {
    var kw = keywords[i];
    if (kw !== 'default' && lower.indexOf(kw) >= 0) {
      var replies = pool[kw];
      return replies[Math.floor(Math.random() * replies.length)];
    }
  }
  var defaults = pool.default;
  return defaults[Math.floor(Math.random() * defaults.length)];
}

function setTutorMode(mode) {
  document.getElementById('modeBtnChat').classList.toggle('active', mode === 'chat');
  document.getElementById('modeBtnLesson').classList.toggle('active', mode === 'lecc');
  if (mode === 'lecc') {
    var lessonIntros = {
      q: 'Vamos con una leccion estructurada. Nivel basico: Como se dice "yo camino" en Quechua? (Pista: verbo Puriy)',
      a: 'Hagamos una leccion de Aymara. Basico: Como se dice "yo camino" en Aymara? (Pista: verbo Sarana)',
      en: 'Let\'s have a structured lesson. Basic level: How do you say "I walk" in English? (Hint: verb "to walk")',
      fr: 'Faisons une lecon structuree. Niveau basique: Comment dit-on "je marche" en francais? (Indice: verbe "marcher")'
    };
    var intro = lessonIntros[chatLang] || lessonIntros.q;
    addChatMessage('a', intro);
    chatHistory.push({role: 'assistant', content: intro});
  }
}

function updateTutorSidebar(reply, userMsg) {
  tutorMsgCount++;
  var fbMatch = reply.match(/FEEDBACK:(.*?)(?=NIVEL:|OBJETIVO:|$)/s);
  var lvlMatch = reply.match(/NIVEL:\s*([A-B][12])/);
  var goalMatch = reply.match(/OBJETIVO:(.*?)(?=NIVEL:|FEEDBACK:|$)/s);

  if (fbMatch) {
    var fbText = fbMatch[1].trim();
    var fbDiv = document.getElementById('tutorFeedback');
    var html = '';
    if (fbText.indexOf('Perfecto') >= 0 || fbText.indexOf('correcto') >= 0 || fbText.indexOf('bien') >= 0) {
      html = '<div class="tutor-fb-item tutor-fb-ok">' + escapeHtml(fbText) + '</div>';
    } else {
      var lines = fbText.split(/[.!\n]/).filter(function(l) { return l.trim(); });
      html = lines.map(function(l) {
        var t = l.trim();
        if (!t) return '';
        var cls = (t.indexOf('bien') >= 0 || t.indexOf('OK') >= 0 || t.indexOf('correcto') >= 0) ? 'tutor-fb-ok' :
          (t.indexOf('error') >= 0 || t.indexOf('incorrecto') >= 0) ? 'tutor-fb-warn' : 'tutor-fb-tip';
        return '<div class="tutor-fb-item ' + cls + '">' + escapeHtml(t) + '</div>';
      }).join('');
      tutorCorrCount++;
    }
    fbDiv.innerHTML = html || '<div class="tutor-fb-item tutor-fb-tip">' + escapeHtml(fbText) + '</div>';
    updateMobileBar(fbText);
  }

  if (lvlMatch) {
    var newLvl = lvlMatch[1];
    var lvlNames = {A1: 'A1 -- Principiante', A2: 'A2 -- Basico', B1: 'B1 -- Intermedio', B2: 'B2 -- Avanzado'};
    if (newLvl !== tutorLevel) {
      tutorLevel = newLvl;
      document.getElementById('tutorLevel').textContent = lvlNames[newLvl] || newLvl;
      var pctMap = {A1: 15, A2: 35, B1: 60, B2: 85};
      document.getElementById('tutorProgressBar').style.width = (pctMap[newLvl] || 15) + '%';
    }
  }

  if (goalMatch) {
    var gText = goalMatch[1].trim();
    if (gText && tutorGoals.indexOf(gText) < 0) {
      tutorGoals.push(gText);
      renderGoals();
    }
  }

  document.getElementById('tutorStats').textContent = tutorMsgCount + ' mensajes -- ' + tutorCorrCount + ' correcciones';
  tutorSessionLog.push({user: userMsg, fb: fbMatch ? fbMatch[1].trim() : ''});

  var diaryEl = document.getElementById('tutorDiary');
  if (tutorSessionLog.length > 0) {
    diaryEl.innerHTML = '<div class="tutor-diary-entry"><b>Sesion: ' + tutorMsgCount + ' intercambios</b><br>Nivel actual: ' + tutorLevel + '<br>Objetivos: ' + tutorGoals.length + '<br>Ultima accion: ' + new Date().toLocaleTimeString() + '</div>';
  }
}

function renderGoals() {
  var ul = document.getElementById('tutorGoals');
  if (!tutorGoals.length) {
    ul.innerHTML = '<li style="font-size:12px;color:var(--muted);font-style:italic">Se generaran automaticamente...</li>';
    return;
  }
  ul.innerHTML = tutorGoals.slice(0, 5).map(function(g, i) {
    return '<li class="tutor-goal-item"><input type="checkbox" id="goal' + i + '" onchange="toggleGoal(' + i + ')"><label for="goal' + i + '" style="font-size:12px;cursor:pointer">' + escapeHtml(g) + '</label></li>';
  }).join('');
}

function toggleGoal(i) {
  var cb = document.getElementById('goal' + i);
  var label = cb.nextElementSibling;
  label.style.textDecoration = cb.checked ? 'line-through' : 'none';
  label.style.opacity = cb.checked ? '0.5' : '1';
}

function addGoal() {
  var g = prompt('Agregar objetivo:');
  if (g && g.trim()) {
    tutorGoals.push(g.trim());
    renderGoals();
  }
}

function getApiKey() {
  return localStorage.getItem('yachay_apikey') || '';
}

function updateApiPlaceholder() {
  var provider = document.getElementById('apiProvider').value;
  document.getElementById('apiKeyInput').placeholder = provider === 'anthropic' ? 'sk-ant-...' : 'sk-or-v1-...';
}

function saveApiKey() {
  var key = document.getElementById('apiKeyInput').value.trim();
  if (!key) return;
  var provider = document.getElementById('apiProvider').value || 'openrouter';
  localStorage.setItem('yachay_apikey', key);
  localStorage.setItem('yachay_provider', provider);
  var savedEl = document.getElementById('apiSaved');
  savedEl.classList.add('show');
  setTimeout(function() {
    document.getElementById('apiBanner').classList.remove('show');
  }, 1500);
}

function addChatMessage(role, text) {
  var container = document.getElementById('chatMessages');
  var div = document.createElement('div');
  div.className = 'message ' + (role === 'u' ? 'message--user' : 'message--assistant');
  var quechuaOnly = text.split('\n').map(function(l) {
    return l.indexOf('=') !== -1 ? l.split('=')[0].trim() : l;
  }).filter(Boolean).join('. ');
  var speakBtn = (role === 'a')
    ? '<button onclick="speakTextLang(decodeURIComponent(\'' + encodeURIComponent(quechuaOnly) + '\'),\'' + chatLang + '\')" style="display:block;margin-top:6px;background:none;border:none;cursor:pointer;font-size:16px;opacity:0.5;padding:0" title="Escuchar">🔊</button>'
    : '';
  div.innerHTML = '<div class="bubble">' + escapeHtml(text).replace(/\n/g, '<br>') + speakBtn + '</div>';
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

// ===== HISTORIAL PERSISTENTE =====
function saveChatState() {
  try {
    var state = {
      lang: chatLang,
      history: chatHistory,
      level: tutorLevel,
      goals: tutorGoals,
      msgCount: tutorMsgCount,
      corrCount: tutorCorrCount,
      sessionLog: tutorSessionLog.slice(-20)
    };
    localStorage.setItem('yachay_chat_' + chatLang, JSON.stringify(state));
  } catch(e) {}
}

function loadChatState(lang) {
  try {
    var raw = localStorage.getItem('yachay_chat_' + lang);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch(e) { return null; }
}

// ===== REINICIAR CHAT =====
function restartChat() {
  if (!confirm('¿Limpiar conversación? Se guardará un resumen antes.')) return;
  saveChatState();
  chatHistory = [];
  tutorMsgCount = 0;
  tutorCorrCount = 0;
  tutorLevel = 'A1';
  tutorGoals = [];
  tutorSessionLog = [];

  document.getElementById('chatMessages').innerHTML = '';
  document.getElementById('chatSuggestions').innerHTML = '';
  document.getElementById('tutorFeedback').innerHTML = '<div class="tutor-fb-empty">Escribe algo para recibir feedback...</div>';
  document.getElementById('tutorLevel').textContent = 'A1 -- Principiante';
  document.getElementById('tutorProgressBar').style.width = '5%';
  document.getElementById('tutorStats').textContent = '0 mensajes -- 0 correcciones';
  document.getElementById('tutorDiary').innerHTML = '<div class="tutor-diary-empty">La sesion no ha comenzado aun...</div>';
  hideMobileBar();
  renderGoals();

  var hour = new Date().getHours();
  var timeQ = hour < 12 ? "Allin p'unchay" : hour < 18 ? "Allin ch'isi" : "Allin tuta";
  var timeA = hour < 12 ? "Aski urukipana" : hour < 18 ? "Aski jayp'ukipana" : "Aski arumakipana";
  var greetingsQ = [
    timeQ + '! Imaynallan? = Como estas? Ñuqaqa matecitata upyashani = Estoy tomando un matecito. Qanri, imayna p\'unchayki kashan? = Y tu, como estuvo tu dia?',
    timeQ + '! Allinllachu? = Todo bien? Qayna wasiypi t\'antata rurashani = Ayer estuve haciendo pan en mi casa. Imatataq qan ruranki qayna? = Que hiciste tu ayer?',
    timeQ + '! Haykumuy, tiyaykuy = Pasa, sientate. Kunan mate upyashaspa rimashun = Conversemos mientras tomamos mate. Imamantam rimayta munanki? = De que quieres hablar?',
  ];
  var greetingsA = [
    timeA + '! Kamisaraki? = Como estas? Nayaxa apita umantasktwa = Estoy tomando api. Jumasti, kunjamasa uru saratäna? = Y tu, como te fue el dia?',
    timeA + '! Walikicha? = Todo bien? Nayra uruxa t\'ant\'a luraskta = Ayer hice pan. Jumasti, kunasa lurasktasa nayra uruxa? = Y tu, que hiciste ayer?',
  ];
  var greeting = chatLang === 'q'
    ? greetingsQ[Math.floor(Math.random() * greetingsQ.length)]
    : greetingsA[Math.floor(Math.random() * greetingsA.length)];

  addChatMessage('a', greeting);
  chatHistory.push({role: 'assistant', content: greeting});
  renderSuggestions();
}

// ===== SUGGESTIONS MEJORADAS =====
function renderSuggestions(traduceChallenge) {
  var sugDiv = document.getElementById('chatSuggestions');
  sugDiv.innerHTML = '';
  var items = [];

  if (traduceChallenge && traduceChallenge.length > 2) {
    items.push({text: traduceChallenge, primary: true});
  }

  var pool = CHAT_SUGGESTIONS[chatLang] || CHAT_SUGGESTIONS.q;
  var shuffled = pool.slice().sort(function() { return Math.random() - 0.5; });
  var count = traduceChallenge ? 2 : 3;
  for (var i = 0; i < Math.min(count, shuffled.length); i++) {
    items.push({text: shuffled[i], primary: false});
  }

  items.forEach(function(item) {
    var btn = document.createElement('button');
    btn.className = 'chip' + (item.primary ? ' chip--primary' : '');
    btn.textContent = item.text;
    btn.onclick = function() { sendChip(item.text); };
    sugDiv.appendChild(btn);
  });
}

// ===== MOBILE BAR (nivel + feedback compacto) =====
function updateMobileBar(feedbackText) {
  var bar = document.getElementById('mobileTutorBar');
  if (!bar) return;
  bar.style.display = 'flex';
  var shortFb = feedbackText.length > 80 ? feedbackText.substring(0, 80) + '...' : feedbackText;
  var isOk = feedbackText.indexOf('bien') >= 0 || feedbackText.indexOf('correcto') >= 0 || feedbackText.indexOf('Perfecto') >= 0;
  bar.innerHTML = '<span class="mobile-level-badge">' + tutorLevel + '</span>' +
    '<span class="mobile-feedback ' + (isOk ? 'fb-ok' : 'fb-warn') + '">' + escapeHtml(shortFb) + '</span>';
}

function hideMobileBar() {
  var bar = document.getElementById('mobileTutorBar');
  if (bar) { bar.style.display = 'none'; bar.innerHTML = ''; }
}

function openChat(lang) {
  chatLang = lang;

  // Intentar cargar historial previo
  var saved = loadChatState(lang);
  if (saved && saved.history && saved.history.length > 1) {
    chatHistory = saved.history;
    tutorLevel = saved.level || 'A1';
    tutorGoals = saved.goals || [];
    tutorMsgCount = saved.msgCount || 0;
    tutorCorrCount = saved.corrCount || 0;
    tutorSessionLog = saved.sessionLog || [];

    document.getElementById('chatTitle').textContent = lang === 'q' ? '\u25C6 Tutor IA -- Quechua' : '\u25C6 Tutor IA -- Aymara';
    document.getElementById('chatMessages').innerHTML = '';
    chatHistory.forEach(function(m) {
      if (m.role === 'user') addChatMessage('u', m.content);
      else {
        var clean = m.content
          .replace(/TRADUCE:[\s\S]*$/, '')
          .replace(/PRACTICA:[\s\S]*$/, '')
          .replace(/FEEDBACK:[\s\S]*$/, '')
          .replace(/NIVEL:\s*[A-B][12][\s\S]*$/, '')
          .replace(/OBJETIVO:[\s\S]*$/, '')
          .trim();
        addChatMessage('a', clean || m.content);
      }
    });

    var lvlNames = {A1: 'A1 -- Principiante', A2: 'A2 -- Basico', B1: 'B1 -- Intermedio', B2: 'B2 -- Avanzado'};
    document.getElementById('tutorLevel').textContent = lvlNames[tutorLevel] || tutorLevel;
    var pctMap = {A1: 15, A2: 35, B1: 60, B2: 85};
    document.getElementById('tutorProgressBar').style.width = (pctMap[tutorLevel] || 15) + '%';
    document.getElementById('tutorStats').textContent = tutorMsgCount + ' mensajes -- ' + tutorCorrCount + ' correcciones';
    if (tutorSessionLog.length > 0) {
      document.getElementById('tutorDiary').innerHTML = '<div class="tutor-diary-entry"><b>Sesion: ' + tutorMsgCount + ' intercambios</b><br>Nivel actual: ' + tutorLevel + '<br>Objetivos: ' + tutorGoals.length + '</div>';
    }
    renderGoals();
    renderSuggestions();

    document.getElementById('modeBtnChat').classList.add('active');
    document.getElementById('modeBtnLesson').classList.remove('active');
    var banner = document.getElementById('apiBanner');
    if (banner) banner.classList.remove('show');
    showScreen('chat');
    return;
  }

  // Conversación nueva
  chatHistory = [];
  tutorMsgCount = 0;
  tutorCorrCount = 0;
  tutorLevel = 'A1';
  tutorGoals = [];
  tutorSessionLog = [];

  document.getElementById('chatTitle').textContent = lang === 'q' ? '\u25C6 Tutor IA -- Quechua' : '\u25C6 Tutor IA -- Aymara';
  document.getElementById('chatMessages').innerHTML = '';
  document.getElementById('chatSuggestions').innerHTML = '';
  document.getElementById('tutorFeedback').innerHTML = '<div class="tutor-fb-empty">Escribe algo para recibir feedback...</div>';
  document.getElementById('tutorLevel').textContent = 'A1 -- Principiante';
  document.getElementById('tutorProgressBar').style.width = '5%';
  document.getElementById('tutorStats').textContent = '0 mensajes -- 0 correcciones';
  document.getElementById('tutorDiary').innerHTML = '<div class="tutor-diary-empty">La sesion no ha comenzado aun...</div>';
  document.getElementById('modeBtnChat').classList.add('active');
  document.getElementById('modeBtnLesson').classList.remove('active');
  hideMobileBar();
  renderGoals();

  var banner = document.getElementById('apiBanner');
  if (banner) banner.classList.remove('show');

  var hour = new Date().getHours();
  var timeQ = hour < 12 ? "Allin p'unchay" : hour < 18 ? "Allin ch'isi" : "Allin tuta";
  var timeA = hour < 12 ? "Aski urukipana" : hour < 18 ? "Aski jayp'ukipana" : "Aski arumakipana";
  var greetingsQ = [
    timeQ + '! Imaynallan? = Como estas? Ñuqaqa matecitata upyashani = Estoy tomando un matecito. Qanri, imayna p\'unchayki kashan? = Y tu, como estuvo tu dia?',
    timeQ + '! Allinllachu? = Todo bien? Qayna wasiypi t\'antata rurashani = Ayer estuve haciendo pan en mi casa. Imatataq qan ruranki qayna? = Que hiciste tu ayer?',
    timeQ + '! Haykumuy, tiyaykuy = Pasa, sientate. Kunan mate upyashaspa rimashun = Conversemos mientras tomamos mate. Imamantam rimayta munanki? = De que quieres hablar?',
    timeQ + '! Kusisqam kani = Me alegro de verte. Kunanqa p\'unchaw sumaqmi kashan = Hoy el dia esta bonito. Imatam mikhuranki kunan tutamanta? = Que comiste hoy en la manana?',
    timeQ + '! Napaykullayki = Te saludo. Ñuqaqa Qusqumanta kani = Yo soy del Cusco. Qanri, maymantataq kanki? = Y tu, de donde eres?',
  ];
  var greetingsA = [
    timeA + '! Kamisaraki? = Como estas? Nayaxa apita umantasktwa = Estoy tomando api. Jumasti, kunjamasa uru saratäna? = Y tu, como te fue el dia?',
    timeA + '! Walikicha? = Todo bien? Nayra uruxa t\'ant\'a luraskta = Ayer hice pan. Jumasti, kunasa lurasktasa nayra uruxa? = Y tu, que hiciste ayer?',
    timeA + '! Mantañani, quntuñani = Entremos, sentemonos. Apita umasa aruskiptañani = Conversemos tomando api. Kunampisa aruskiptaña munsta? = De que quieres conversar?',
  ];
  var greeting = lang === 'q'
    ? greetingsQ[Math.floor(Math.random() * greetingsQ.length)]
    : greetingsA[Math.floor(Math.random() * greetingsA.length)];

  addChatMessage('a', greeting);
  chatHistory.push({role: 'assistant', content: greeting});
  renderSuggestions();
  showScreen('chat');
}

async function sendMessage() {
  var input = document.getElementById('chatInput');
  var text = input.value.trim();
  if (!text) return;
  input.value = '';
  input.style.height = 'auto';
  document.getElementById('sendBtn').disabled = true;

  addChatMessage('u', text);
  chatHistory.push({role: 'user', content: text});

  // Show typing indicator
  var container = document.getElementById('chatMessages');
  var typingDiv = document.createElement('div');
  typingDiv.className = 'message message--assistant';
  typingDiv.id = 'typingIndicator';
  typingDiv.innerHTML = '<div class="bubble"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span></div>';
  container.appendChild(typingDiv);
  container.scrollTop = container.scrollHeight;

  try {
    var fullReplyText = '';

    try {
      var proxyRes = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lang: chatLang,
          messages: chatHistory.slice(-8)
        })
      });
      var proxyData = await proxyRes.json();
      if (proxyRes.ok && proxyData.content) {
        fullReplyText = proxyData.content;
      } else {
        // Fallback offline
        removeTypingIndicator();
        var offlineReply = getOfflineReply(text);
        addChatMessage('a', offlineReply);
        chatHistory.push({role: 'assistant', content: offlineReply});
        saveChatState();
        renderSuggestions();
        document.getElementById('sendBtn').disabled = false;
        return;
      }
    } catch (e) {
      // Fallback offline
      removeTypingIndicator();
      var offlineReply = getOfflineReply(text);
      addChatMessage('a', offlineReply);
      chatHistory.push({role: 'assistant', content: offlineReply});
      saveChatState();
      renderSuggestions();
      document.getElementById('sendBtn').disabled = false;
      return;
    }

    var data = {content: [{text: fullReplyText}]};

    var fullReply = data.content[0].text || '';
    if (!fullReply) {
      removeTypingIndicator();
      var offlineReply = getOfflineReply(text);
      addChatMessage('a', offlineReply);
      chatHistory.push({role: 'assistant', content: offlineReply});
      saveChatState();
      renderSuggestions();
      document.getElementById('sendBtn').disabled = false;
      return;
    }

    // Clean reply (remove metadata tags)
    var cleanReply = fullReply
      .replace(/TRADUCE:[\s\S]*$/, '')
      .replace(/PRACTICA:[\s\S]*$/, '')
      .replace(/FEEDBACK:[\s\S]*$/, '')
      .replace(/NIVEL:\s*[A-B][12][\s\S]*$/, '')
      .replace(/OBJETIVO:[\s\S]*$/, '')
      .trim();

    chatHistory.push({role: 'assistant', content: fullReply});
    removeTypingIndicator();
    addChatMessage('a', cleanReply || fullReply);
    updateTutorSidebar(fullReply, text);
    saveChatState();

    // Extract TRADUCE challenge
    var traduceMatch = fullReply.match(/TRADUCE:\s*(.+?)(?=FEEDBACK:|NIVEL:|OBJETIVO:|PRACTICA:|$)/s);
    var challenge = traduceMatch ? traduceMatch[1].trim().split('\n')[0].trim() : '';
    renderSuggestions(challenge.length > 2 ? challenge : null);

  } catch (error) {
    removeTypingIndicator();
    var offlineReply = getOfflineReply(text);
    addChatMessage('a', offlineReply);
    chatHistory.push({role: 'assistant', content: offlineReply});
    saveChatState();
    renderSuggestions();
  } finally {
    document.getElementById('sendBtn').disabled = false;
  }
}

function removeTypingIndicator() {
  var el = document.getElementById('typingIndicator');
  if (el) el.remove();
}

function sendChip(text) {
  document.getElementById('chatInput').value = text;
  sendMessage();
}

function chatKeyHandler(event) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    sendMessage();
  }
}

function autoResize(element) {
  element.style.height = 'auto';
  element.style.height = Math.min(element.scrollHeight, 120) + 'px';
}
