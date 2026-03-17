var chatHistory = [];
var chatLang = 'q';
var tutorMsgCount = 0;
var tutorCorrCount = 0;
var tutorLevel = 'A1';
var tutorGoals = [];
var tutorSessionLog = [];

var CHAT_SYSTEM_PROMPTS = {
  q: "Eres un hablante nativo de Quechua Cusco-Collao. REGLA PRINCIPAL: Responde PRIMERO en Quechua, luego pon la traduccion en español entre parentesis. Ejemplo: Imaynallan? (Como estas?) Allinmi kani. (Estoy bien.) Nuqaqa kusisqam kani qamta rikususpa. (Me alegro de verte.) FORMATO: Cada oracion primero en Quechua, luego (traduccion). Maximo 3-4 oraciones. SIEMPRE termina con una pregunta en Quechua para que el estudiante responda. Si el estudiante escribe en Quechua, responde MAS en Quechua y menos traduccion. Progresivamente usa mas Quechua puro. Tono: natural, directo, como un amigo. No exageres con cariño. Si hay errores: FEEDBACK: [correccion breve]. Sin listas, sin bullets, sin negritas, sin asteriscos.",
  a: "Eres un hablante nativo de Aymara boliviano-peruano. REGLA PRINCIPAL: Responde PRIMERO en Aymara, luego pon la traduccion en español entre parentesis. Ejemplo: Kamisaraki? (Como estas?) Walikiwa. (Estoy bien.) Formato: Cada oracion primero en Aymara, luego (traduccion). Maximo 3-4 oraciones. SIEMPRE termina con una pregunta en Aymara para que el estudiante responda. Si el estudiante escribe en Aymara, responde MAS en Aymara y menos traduccion. Progresivamente usa mas Aymara puro. Tono: natural, directo, como un amigo. No exageres con cariño. Si hay errores: FEEDBACK: [correccion breve]. Sin listas, sin bullets, sin negritas, sin asteriscos."
};

var CHAT_SUGGESTIONS = {
  q: ['Ensename a saludar', 'Quiero pedir comida en Quechua', 'Como presento a mi familia?', 'Hagamos un dialogo', 'Quiero decir te quiero', 'Ensename numeros', 'Corrigeme: Noqa purini llaqta', 'Como hablo de la naturaleza?'],
  a: ['Ensename a saludar en Aymara', 'Como me presento?', 'Quiero hablar de mi familia', 'Hagamos un dialogo', 'Ensename numeros', 'Como hablo de Pachamama?', 'Quiero pedir algo', 'Corrigeme: Naya sarawa markaru']
};

function setTutorMode(mode) {
  document.getElementById('modeBtnChat').classList.toggle('active', mode === 'chat');
  document.getElementById('modeBtnLesson').classList.toggle('active', mode === 'lecc');
  if (mode === 'lecc') {
    var intro = chatLang === 'q'
      ? 'Vamos con una leccion estructurada. Nivel basico: Como se dice "yo camino" en Quechua? (Pista: verbo Puriy)'
      : 'Hagamos una leccion de Aymara. Basico: Como se dice "yo camino" en Aymara? (Pista: verbo Sarana)';
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
      html = '<div class="tutor-fb-item tutor-fb-ok">' + fbText + '</div>';
    } else {
      var lines = fbText.split(/[.!\n]/).filter(function(l) { return l.trim(); });
      html = lines.map(function(l) {
        var t = l.trim();
        if (!t) return '';
        var cls = (t.indexOf('bien') >= 0 || t.indexOf('OK') >= 0 || t.indexOf('correcto') >= 0) ? 'tutor-fb-ok' :
          (t.indexOf('error') >= 0 || t.indexOf('incorrecto') >= 0) ? 'tutor-fb-warn' : 'tutor-fb-tip';
        return '<div class="tutor-fb-item ' + cls + '">' + t + '</div>';
      }).join('');
      tutorCorrCount++;
    }
    fbDiv.innerHTML = html || '<div class="tutor-fb-item tutor-fb-tip">' + fbText + '</div>';
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
    return '<li class="tutor-goal-item"><input type="checkbox" id="goal' + i + '" onchange="toggleGoal(' + i + ')"><label for="goal' + i + '" style="font-size:12px;cursor:pointer">' + g + '</label></li>';
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
  div.innerHTML = '<div class="bubble">' + text.replace(/\n/g, '<br>') + '</div>';
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function openChat(lang) {
  chatLang = lang;
  chatHistory = [];
  tutorMsgCount = 0;
  tutorCorrCount = 0;
  tutorLevel = 'A1';
  tutorGoals = [];
  tutorSessionLog = [];

  document.getElementById('chatTitle').textContent = lang === 'q' ? '\u25C6 Tutor IA -- Quechua' : '\u25C6 Tutor IA -- Aymara';
  document.getElementById('chatMessages').innerHTML = '';
  document.getElementById('chatSuggestions').innerHTML = CHAT_SUGGESTIONS[lang].map(function(s) {
    return '<button class="chip" onclick="sendChip(\'' + s.replace(/'/g, "\\'") + '\')">' + s + '</button>';
  }).join('');
  document.getElementById('tutorFeedback').innerHTML = '<div class="tutor-fb-empty">Escribe algo para recibir feedback...</div>';
  document.getElementById('tutorLevel').textContent = 'A1 -- Principiante';
  document.getElementById('tutorProgressBar').style.width = '5%';
  document.getElementById('tutorStats').textContent = '0 mensajes -- 0 correcciones';
  document.getElementById('tutorDiary').innerHTML = '<div class="tutor-diary-empty">La sesion no ha comenzado aun...</div>';
  document.getElementById('modeBtnChat').classList.add('active');
  document.getElementById('modeBtnLesson').classList.remove('active');
  renderGoals();

  var banner = document.getElementById('apiBanner');
  if (banner) {
    if (getApiKey()) { banner.classList.remove('show'); }
    else { banner.classList.add('show'); }
  }

  var hour = new Date().getHours();
  var timeQ = hour < 12 ? "Allin p'unchay" : hour < 18 ? "Allin ch'isi" : "Allin tuta";
  var timeA = hour < 12 ? "Aski urukipana" : hour < 18 ? "Aski jayp'ukipana" : "Aski arumakipana";
  var greetingsQ = [
    timeQ + '! Imaynallan? (Como estas?) Imatataq yachakuyta munanki kunan? (Que quieres aprender hoy?)',
    timeQ + '! Allinchu kashanki? (Estas bien?) Rimashunchis runasimita. (Hablemos Quechua.) Imamanta rimasunchis? (De que hablamos?)',
    timeQ + '! Haykumuy. (Entra nomas.) Kunanqa Quechuata rimashun. (Hoy hablemos Quechua.) Imaynallan? (Como estas?)',
  ];
  var greetingsA = [
    timeA + '! Kamisaraki? (Como estas?) Kunawrasatï yatiqañani? (Que aprendemos hoy?)',
    timeA + '! Walikicha? (Estas bien?) Aymarat parlañani. (Hablemos Aymara.) Kunsa munsta yatiqaña? (Que quieres aprender?)',
    timeA + '! Mantañani. (Entremos.) Jichhaxa Aymarat parlañani. (Hoy hablemos Aymara.) Kamisaraki? (Como estas?)',
  ];
  var greeting = lang === 'q'
    ? greetingsQ[Math.floor(Math.random() * greetingsQ.length)]
    : greetingsA[Math.floor(Math.random() * greetingsA.length)];

  addChatMessage('a', greeting);
  chatHistory.push({role: 'assistant', content: greeting});
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
    if (!getApiKey()) {
      removeTypingIndicator();
      var b = document.getElementById('apiBanner'); if (b) b.classList.add('show');
      addChatMessage('a', 'Primero ingresa tu API key arriba. Es gratis en openrouter.ai');
      document.getElementById('sendBtn').disabled = false;
      return;
    }

    var provider = localStorage.getItem('yachay_provider') || 'openrouter';
    var apiKey = getApiKey();
    var response, data;

    if (provider === 'anthropic') {
      response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true'
        },
        body: JSON.stringify({
          model: 'claude-3-haiku-20240307',
          max_tokens: 400,
          system: CHAT_SYSTEM_PROMPTS[chatLang],
          messages: chatHistory
        })
      });

      data = await response.json();

      if (!response.ok) {
        removeTypingIndicator();
        if (response.status === 401) {
          document.getElementById('apiBanner').classList.add('show');
          addChatMessage('a', 'API key invalida. Ingresa una key valida arriba.');
        } else {
          addChatMessage('a', 'Error API (' + response.status + '): ' + (data.error && data.error.message || JSON.stringify(data).slice(0, 200)));
        }
        document.getElementById('sendBtn').disabled = false;
        return;
      }
      data = {content: [{text: data.content && data.content[0] && data.content[0].text || ''}]};

    } else {
      // OpenRouter with fallback models
      var orMsgs = [{role: 'user', content: '[INSTRUCCIONES] ' + CHAT_SYSTEM_PROMPTS[chatLang] + ' [/INSTRUCCIONES]'}, {role: 'assistant', content: 'Entendido, soy tu tutor.'}].concat(chatHistory.slice(-8));
      var models = [
        'google/gemma-3-27b-it:free',
        'google/gemma-3n-e4b-it:free',
        'qwen/qwen3-4b:free',
        'mistralai/mistral-small-3.1-24b-instruct:free',
        'deepseek/deepseek-chat-v3-0324:free'
      ];
      var success = false;

      for (var i = 0; i < models.length; i++) {
        response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + apiKey,
            'HTTP-Referer': 'https://illaripa.github.io/curso-quechua/',
            'X-Title': 'Yachay Tutor'
          },
          body: JSON.stringify({
            model: models[i],
            max_tokens: 400,
            messages: orMsgs
          })
        });
        data = await response.json();
        if (response.ok && data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) {
          success = true;
          break;
        }
      }

      if (!success) {
        removeTypingIndicator();
        if (response.status === 401) {
          document.getElementById('apiBanner').classList.add('show');
          addChatMessage('a', 'API key invalida. Registrate gratis en openrouter.ai');
        } else {
          addChatMessage('a', 'Todos los modelos free estan ocupados. Intenta de nuevo en unos segundos.');
        }
        document.getElementById('sendBtn').disabled = false;
        return;
      }
      data = {content: [{text: data.choices[0].message.content || ''}]};
    }

    var fullReply = data.content[0].text || '';
    if (!fullReply) {
      removeTypingIndicator();
      addChatMessage('a', 'Sin respuesta de la API.');
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

    // Extract TRADUCE challenge and show as chip
    var sugDiv = document.getElementById('chatSuggestions');
    var traduceMatch = fullReply.match(/TRADUCE:\s*(.+?)(?=FEEDBACK:|NIVEL:|OBJETIVO:|PRACTICA:|$)/s);
    if (traduceMatch) {
      var challenge = traduceMatch[1].trim().split('\n')[0].trim();
      if (challenge.length > 2) {
        sugDiv.innerHTML = '<button class="chip" onclick="sendChip(\'' + challenge.replace(/'/g, "\\'") + '\')">' + challenge + '</button>';
      }
    } else {
      // Fallback: show follow-up suggestions
      var followUps = chatLang === 'q'
        ? ['Otra frase', 'No entendi', 'Mas dificil', 'Cambiemos de tema']
        : ['Otra frase', 'No entendi', 'Mas dificil', 'Cambiemos de tema'];
      sugDiv.innerHTML = followUps.map(function(s) {
        return '<button class="chip" onclick="sendChip(\'' + s + '\')">' + s + '</button>';
      }).join('');
    }

  } catch (error) {
    removeTypingIndicator();
    addChatMessage('a', 'Error de red: ' + error.message + '. Verifica tu conexion e intenta de nuevo.');
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
