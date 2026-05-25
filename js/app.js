let currentLang = localStorage.getItem('yachay_lang') || null;
let uiLang = 'es';

// ============================================================
// UI TRANSLATIONS
// ============================================================
var UI = {
  es: {
    'morning.btn': 'Comenzar a aprender',
    'home.title': 'Yachay — Aprende',
    'home.subtitle': 'Quechua & Aymara — Lenguas de los Andes',
    'm2.title': 'Saludo del día',
    'ref.search': 'Buscar…',
    'detail.close': '← Volver',
    'cards.empty.title': '¡Lo aprendiste todo!',
    'cards.empty.text': 'Dominaste todos los verbos.',
    'cards.reset': 'Reiniciar',
    'cards.learned': 'Aprendido',
    'cards.mark': '✓ Marcar como aprendido',
    'cards.flip': 'Voltear',
    'cards.swipe.next': 'Siguiente',
    'cards.swipe.prev': 'Anterior',
    'filter.title': 'Filtrar por categoría',
    'filter.apply': 'Aplicar',
    'quiz.score': 'Puntaje',
    'result.correct': 'correctas',
    'result.score': 'puntaje',
    'result.repeat': 'REPETIR QUIZ',
    'result.home': 'INICIO',
    'chat.title': '◆ Tutor IA',
    'chat.api.title': '⚙ Configurar Tutor IA',
    'chat.api.desc': 'La clave se guarda en tu navegador.',
    'chat.api.save': 'Guardar',
    'chat.api.saved': '✓ Configuración guardada',
    'chat.placeholder': 'Escribe en español o en la lengua…',
    'chat.level': '▙ Nivel',
    'chat.level.a1': 'A1 — Principiante',
    'chat.stats': '0 mensajes — 0 correcciones',
    'chat.feedback.title': '◎ Último feedback',
    'chat.feedback.empty': 'Escribe algo para recibir feedback…',
    'chat.goals.title': '◉ Objetivos',
    'chat.goals.add': '+ Agregar objetivo',
    'chat.diary.title': '▶ Diario de sesión',
    'chat.diary.empty': 'La sesión no ha comenzado aún…',
    'songs.back': '← Volver a la lista',
    'transcriptor.title': '⚙ Transcribir canción',
    'transcriptor.label': 'Pega el link de YouTube',
    'transcriptor.btn': '⚙ Transcribir con IA',
    'transcriptor.result.label': 'Letra transcrita',
    'transcriptor.copy': '✓ Copiar texto',
    'menu.q.section': 'Lengua de los Incas — Cusco',
    'menu.q.morning': 'Saludo del día',        'menu.q.morning.d': 'Frase positiva del día en Quechua',
    'menu.q.oraciones': 'Frases reales',       'menu.q.oraciones.d': 'Familia, naturaleza, emociones, vida cotidiana',
    'menu.q.poesia': 'Poesía Quechua',         'menu.q.poesia.d': 'Poemas tradicionales línea por línea',
    'menu.q.textos': 'Textos cortos',          'menu.q.textos.d': 'Filosofía andina y cosmovisión',
    'menu.q.verbos': 'Verbos — Referencia',    'menu.q.verbos.d': '120+ verbos con conjugaciones completas',
    'menu.q.sufijos': 'Sufijos — Referencia',  'menu.q.sufijos.d': '35+ sufijos con reglas y ejemplos',
    'menu.q.fichas': 'Fichas — Desliza y aprende', 'menu.q.fichas.d': 'Historias de verbos — Voltear — Aprendido',
    'menu.q.quiz': 'Quiz Quechua',             'menu.q.quiz.d': 'Traduce frases completas',
    'menu.q.completar': 'Completar oraciones', 'menu.q.completar.d': 'Elige la palabra que falta — 10 grupos, dificultad progresiva',
    'menu.q.dialogos': 'Rimanakuy · Diálogos', 'menu.q.dialogos.d': 'Diálogos reales de los libros Rimanakusun — toca cada línea para ver la traducción',
    'menu.q.completar2': 'Completar avanzado', 'menu.q.completar2.d': 'Saludos, ubicación y verbos transitivos — Rimanakusun 1 y 2',
    'menu.q.leyendas': 'Leyendas Quechuas',    'menu.q.leyendas.d': 'Cuentos y mitos andinos con audio',
    'menu.q.songs': 'Canciones Quechua',       'menu.q.songs.d': 'Letra, traducción y video de YouTube',
    'menu.q.transcriptor': 'Transcribir canción', 'menu.q.transcriptor.d': 'Pega un link de YouTube y transcribe la letra con IA',
    'menu.q.tutor': 'Tutor IA',                'menu.q.tutor.d': 'Preguntas, correcciones, conversación',
    'menu.a.section': 'Lengua del Lago Titicaca — Bolivia & Perú',
    'menu.a.oraciones': 'Frases Aymara',       'menu.a.oraciones.d': 'Familia, naturaleza, saludos, vida cotidiana',
    'menu.a.poesia': 'Poesía Aymara',          'menu.a.poesia.d': 'Poemas de la cultura Aymara',
    'menu.a.verbos': 'Verbos Aymara — Referencia', 'menu.a.verbos.d': '50+ verbos con conjugaciones completas',
    'menu.a.sufijos': 'Sufijos Aymara',        'menu.a.sufijos.d': 'Sufijos y partículas esenciales',
    'menu.a.fichas': 'Fichas Aymara',          'menu.a.fichas.d': 'Aprende verbos deslizando',
    'menu.a.vocab': 'Fichas de vocabulario',   'menu.a.vocab.d': 'Familia, naturaleza, números y más',
    'menu.a.quiz': 'Quiz Aymara',              'menu.a.quiz.d': 'Practica traduciendo frases',
    'menu.a.leyendas': 'Leyendas Aymaras',      'menu.a.leyendas.d': 'Cuentos y mitos del altiplano con audio',
    'menu.a.songs': 'Canciones Aymara',        'menu.a.songs.d': 'Letra, traducción y video de YouTube',
    'menu.a.transcriptor': 'Transcribir canción', 'menu.a.transcriptor.d': 'Pega un link de YouTube y transcribe la letra con IA',
    'menu.a.tutor': 'Tutor IA — Aymara',       'menu.a.tutor.d': 'Practica con inteligencia artificial',
  },
  en: {
    'morning.btn': 'Start learning',
    'home.title': 'Yachay — Learn',
    'home.subtitle': 'Quechua & Aymara — Languages of the Andes',
    'm2.title': 'Daily greeting',
    'ref.search': 'Search…',
    'detail.close': '← Back',
    'cards.empty.title': 'You learned it all!',
    'cards.empty.text': 'You mastered all the verbs.',
    'cards.reset': 'Restart',
    'cards.learned': 'Learned',
    'cards.mark': '✓ Mark as learned',
    'cards.flip': 'Flip',
    'cards.swipe.next': 'Next',
    'cards.swipe.prev': 'Previous',
    'filter.title': 'Filter by category',
    'filter.apply': 'Apply',
    'quiz.score': 'Score',
    'result.correct': 'correct',
    'result.score': 'score',
    'result.repeat': 'REPEAT QUIZ',
    'result.home': 'GO HOME',
    'chat.title': '◆ AI Tutor',
    'chat.api.title': '⚙ Configure AI Tutor',
    'chat.api.desc': 'Choose provider. <b>OpenRouter</b> is FREE (openrouter.ai → Get API Key). Anthropic requires credits (console.anthropic.com). Key is saved in your browser.',
    'chat.api.save': 'Save',
    'chat.api.saved': '✓ Configuration saved',
    'chat.placeholder': 'Write in English or in the language…',
    'chat.level': '▙ Level',
    'chat.level.a1': 'A1 — Beginner',
    'chat.stats': '0 messages — 0 corrections',
    'chat.feedback.title': '◎ Last feedback',
    'chat.feedback.empty': 'Write something to receive grammar feedback…',
    'chat.goals.title': '◉ Goals',
    'chat.goals.add': '+ Add goal',
    'chat.diary.title': '▶ Session diary',
    'chat.diary.empty': 'Session not started yet…',
    'songs.back': '← Back to list',
    'transcriptor.title': '⚙ Transcribe Song',
    'transcriptor.label': 'Paste YouTube link',
    'transcriptor.btn': '⚙ Transcribe with AI',
    'transcriptor.result.label': 'Transcribed lyrics',
    'transcriptor.copy': '✓ Copy text',
    'menu.q.section': 'Language of the Incas — Cusco',
    'menu.q.morning': 'Daily greeting',       'menu.q.morning.d': "Today's positive phrase in Quechua",
    'menu.q.oraciones': 'Real sentences',     'menu.q.oraciones.d': 'Family, nature, emotions, daily life',
    'menu.q.poesia': 'Quechua poetry',        'menu.q.poesia.d': 'Traditional poems line by line',
    'menu.q.textos': 'Short texts',           'menu.q.textos.d': 'Andean philosophy and worldview',
    'menu.q.verbos': 'Verbs — Reference','menu.q.verbos.d': '120+ verbs with full conjugations',
    'menu.q.sufijos': 'Suffixes — Reference', 'menu.q.sufijos.d': '35+ suffixes with rules and examples',
    'menu.q.fichas': 'Flashcards — Swipe & learn', 'menu.q.fichas.d': 'Verb stories — Flip — Learned',
    'menu.q.quiz': 'Quechua Quiz',            'menu.q.quiz.d': 'Translate full sentences',
    'menu.q.completar': 'Fill in the blank', 'menu.q.completar.d': 'Choose the missing word — 10 groups, progressive difficulty',
    'menu.q.dialogos': 'Rimanakuy · Dialogues', 'menu.q.dialogos.d': 'Real book dialogues — tap each line to reveal the translation',
    'menu.q.completar2': 'Fill in the blank II', 'menu.q.completar2.d': 'Greetings, location, transitive verbs — Rimanakusun 1 & 2',
    'menu.q.songs': 'Quechua Songs',          'menu.q.songs.d': 'Lyrics, translation and YouTube link',
    'menu.q.transcriptor': 'Transcribe song', 'menu.q.transcriptor.d': 'Paste a YouTube link and transcribe lyrics with AI',
    'menu.q.tutor': 'AI Tutor',               'menu.q.tutor.d': 'Ask questions, correct sentences, converse',
    'menu.a.section': 'Language of Lake Titicaca — Bolivia & Peru',
    'menu.a.oraciones': 'Aymara sentences',   'menu.a.oraciones.d': 'Family, nature, greetings, daily life',
    'menu.a.poesia': 'Aymara poetry',         'menu.a.poesia.d': 'Poems from Aymara culture',
    'menu.a.verbos': 'Aymara verbs — Reference', 'menu.a.verbos.d': '50+ verbs with full conjugations',
    'menu.a.sufijos': 'Aymara suffixes',      'menu.a.sufijos.d': 'Essential suffixes and particles',
    'menu.a.fichas': 'Aymara flashcards',     'menu.a.fichas.d': 'Learn verbs by swiping',
    'menu.a.vocab': 'Vocabulary cards',       'menu.a.vocab.d': 'Family, nature, numbers and more',
    'menu.a.quiz': 'Aymara Quiz',             'menu.a.quiz.d': 'Practice translating sentences',
    'menu.a.songs': 'Aymara songs',           'menu.a.songs.d': 'Lyrics, translation and YouTube link',
    'menu.a.transcriptor': 'Transcribe song', 'menu.a.transcriptor.d': 'Paste a YouTube link and transcribe lyrics with AI',
    'menu.a.tutor': 'AI Tutor — Aymara', 'menu.a.tutor.d': 'Practice with artificial intelligence',
  },
  fr: {
    'morning.btn': 'Commencer à apprendre',
    'home.title': 'Yachay — Apprendre',
    'home.subtitle': 'Quechua & Aymara — Langues des Andes',
    'm2.title': 'Salutation du jour',
    'ref.search': 'Rechercher…',
    'detail.close': '← Retour',
    'cards.empty.title': 'Vous avez tout appris !',
    'cards.empty.text': 'Vous avez maîtrisé tous les verbes.',
    'cards.reset': 'Recommencer',
    'cards.learned': 'Appris',
    'cards.mark': '✓ Marquer comme appris',
    'cards.flip': 'Retourner',
    'cards.swipe.next': 'Suivant',
    'cards.swipe.prev': 'Précédent',
    'filter.title': 'Filtrer par catégorie',
    'filter.apply': 'Appliquer',
    'quiz.score': 'Score',
    'result.correct': 'correctes',
    'result.score': 'score',
    'result.repeat': 'RÉPÉTER LE QUIZ',
    'result.home': 'ACCUEIL',
    'chat.title': '◆ Tuteur IA',
    'chat.api.title': '⚙ Configurer le Tuteur IA',
    'chat.api.desc': 'Choisissez le fournisseur. <b>OpenRouter</b> est GRATUIT (openrouter.ai → Get API Key). Anthropic nécessite des crédits. La clé est sauvegardée dans votre navigateur.',
    'chat.api.save': 'Enregistrer',
    'chat.api.saved': '✓ Configuration enregistrée',
    'chat.placeholder': 'Écrivez en français ou dans la langue…',
    'chat.level': '▙ Niveau',
    'chat.level.a1': 'A1 — Débutant',
    'chat.stats': '0 messages — 0 corrections',
    'chat.feedback.title': '◎ Dernier feedback',
    'chat.feedback.empty': 'Écrivez quelque chose pour recevoir un feedback grammatical…',
    'chat.goals.title': '◉ Objectifs',
    'chat.goals.add': '+ Ajouter un objectif',
    'chat.diary.title': '▶ Journal de session',
    'chat.diary.empty': "La session n'a pas encore commencé…",
    'songs.back': '← Retour à la liste',
    'transcriptor.title': '⚙ Transcrire une chanson',
    'transcriptor.label': 'Coller le lien YouTube',
    'transcriptor.btn': '⚙ Transcrire avec IA',
    'transcriptor.result.label': 'Paroles transcrites',
    'transcriptor.copy': '✓ Copier le texte',
    'menu.q.section': 'Langue des Incas — Cusco',
    'menu.q.morning': 'Salutation du jour',      'menu.q.morning.d': 'Phrase positive du jour en Quechua',
    'menu.q.oraciones': 'Phrases réelles',  'menu.q.oraciones.d': 'Famille, nature, émotions, vie quotidienne',
    'menu.q.poesia': 'Poésie Quechua',      'menu.q.poesia.d': 'Poèmes traditionnels ligne par ligne',
    'menu.q.textos': 'Textes courts',            'menu.q.textos.d': 'Philosophie andine et cosmovision',
    'menu.q.verbos': 'Verbes — Référence', 'menu.q.verbos.d': '120+ verbes avec conjugaisons complètes',
    'menu.q.sufijos': 'Suffixes — Référence', 'menu.q.sufijos.d': '35+ suffixes avec règles et exemples',
    'menu.q.fichas': 'Fiches — Glisser & apprendre', 'menu.q.fichas.d': 'Histoires de verbes — Retourner — Appris',
    'menu.q.quiz': 'Quiz Quechua',               'menu.q.quiz.d': 'Traduire des phrases complètes',
    'menu.q.completar': 'Compléter les phrases', 'menu.q.completar.d': 'Choisissez le mot manquant — 10 groupes, difficulté progressive',
    'menu.q.dialogos': 'Rimanakuy · Dialogues', 'menu.q.dialogos.d': 'Vrais dialogues du livre — touchez chaque ligne pour voir la traduction',
    'menu.q.completar2': 'Compléter II', 'menu.q.completar2.d': 'Salutations, localisation, verbes transitifs — Rimanakusun 1 & 2',
    'menu.q.songs': 'Chansons Quechua',          'menu.q.songs.d': 'Paroles, traduction et lien YouTube',
    'menu.q.transcriptor': 'Transcrire une chanson', 'menu.q.transcriptor.d': 'Collez un lien YouTube et transcrivez les paroles avec IA',
    'menu.q.tutor': 'Tuteur IA',                 'menu.q.tutor.d': 'Questions, corrections, conversation',
    'menu.a.section': 'Langue du Lac Titicaca — Bolivie & Pérou',
    'menu.a.oraciones': 'Phrases Aymara',        'menu.a.oraciones.d': 'Famille, nature, salutations, vie quotidienne',
    'menu.a.poesia': 'Poésie Aymara',       'menu.a.poesia.d': 'Poèmes de la culture Aymara',
    'menu.a.verbos': 'Verbes Aymara — Référence', 'menu.a.verbos.d': '50+ verbes avec conjugaisons complètes',
    'menu.a.sufijos': 'Suffixes Aymara',         'menu.a.sufijos.d': 'Suffixes et particules essentiels',
    'menu.a.fichas': 'Fiches Aymara',            'menu.a.fichas.d': 'Apprendre des verbes en glissant',
    'menu.a.vocab': 'Fiches vocabulaire',        'menu.a.vocab.d': 'Famille, nature, nombres et plus',
    'menu.a.quiz': 'Quiz Aymara',                'menu.a.quiz.d': 'Pratiquer la traduction de phrases',
    'menu.a.songs': 'Chansons Aymara',           'menu.a.songs.d': 'Paroles, traduction et lien YouTube',
    'menu.a.transcriptor': 'Transcrire une chanson', 'menu.a.transcriptor.d': 'Collez un lien YouTube et transcrivez les paroles avec IA',
    'menu.a.tutor': 'Tuteur IA — Aymara',  'menu.a.tutor.d': "Pratiquez avec l'intelligence artificielle",
  }
};

function u(key) {
  return (UI[uiLang] && UI[uiLang][key]) ? UI[uiLang][key] : key;
}

function setUiLang(lang) {
  uiLang = lang;
  document.getElementById('uiTabEN').className = 'ui-tab' + (lang === 'en' ? ' ui-tab--active' : '');
  document.getElementById('uiTabFR').className = 'ui-tab' + (lang === 'fr' ? ' ui-tab--active' : '');
  applyUiTranslations();
  renderHomeBody();
}

function applyUiTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    var attr = el.getAttribute('data-i18n-attr');
    if (attr) {
      el.setAttribute(attr, u(key));
    } else {
      el.innerHTML = u(key);
    }
  });
}

// ============================================================
// NAVIGATION
// ============================================================
function goHome() {
  document.querySelectorAll('.screen, .screen--full, .screen--morning').forEach(function(s) {
    s.classList.remove('active');
  });
  document.getElementById('home').classList.add('active');
  renderHomeBody();
  window.scrollTo(0, 0);
}

function goDashboard() {
  currentLang = null;
  localStorage.removeItem('yachay_lang');
  goHome();
}

function showScreen(id) {
  document.querySelectorAll('.screen, .screen--full, .screen--morning').forEach(function(s) {
    s.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
  if (id === 'm2') { setupMorning('m2'); renderMorningElements(); }
  window.scrollTo(0, 0);
}

// ============================================================
// CONTENT LANGUAGE SWITCHING (Quechua / Aymara)
// ============================================================
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('yachay_lang', lang);
  renderHomeBody();
}

function showLangDashboard() {
  currentLang = null;
  renderHomeBody();
}

// ============================================================
// HOME MENU
// ============================================================
function renderDashboard() {
  var langs = [
    {code:'q',  flag:'🇵🇪', name:'Runasimi',   sub:'Quechua · Andes', cls:'lang-card--q'},
    {code:'a',  flag:'🇧🇴', name:'Aymar aru',  sub:'Aymara · Altiplano', cls:'lang-card--a'},
    {code:'en', flag:'🇬🇧', name:'English',    sub:'Inglés · Spiritual', cls:'lang-card--en'},
    {code:'fr', flag:'🇫🇷', name:'Français',   sub:'Francés · Sagesse', cls:'lang-card--fr'}
  ];
  var html = '<div class="lang-dashboard">' +
    '<p class="dashboard-eyebrow">Elige tu idioma</p>' +
    '<div class="dashboard-grid">';
  langs.forEach(function(l) {
    html += '<button class="lang-card ' + l.cls + '" onclick="setLang(\'' + l.code + '\')">' +
      '<span class="lang-card-flag">' + l.flag + '</span>' +
      '<div class="lang-card-name">' + l.name + '</div>' +
      '<div class="lang-card-sub">' + l.sub + '</div>' +
      '</button>';
  });
  html += '</div></div>';
  document.getElementById('homeBody').innerHTML = html;
}

function renderHomeBody() {
  if (!currentLang) { renderDashboard(); return; }
  var lang = currentLang;
  var items;
  var sectionLabel;

  if (lang === 'q') {
    sectionLabel = u('menu.q.section');
    items = [
      {i:'◈', t:u('menu.q.morning'),    d:u('menu.q.morning.d'),    fn:"showScreen('m2')"},
      {i:'◇', t:u('menu.q.oraciones'),  d:u('menu.q.oraciones.d'),  fn:"openReader('oraciones')"},
      {i:'❋', t:u('menu.q.poesia'),     d:u('menu.q.poesia.d'),     fn:"openReader('poesia')"},
      {i:'▤', t:u('menu.q.textos'),     d:u('menu.q.textos.d'),     fn:"openReader('ensayos')"},
      {i:'⚡', t:u('menu.q.verbos'),     d:u('menu.q.verbos.d'),     fn:"openRef('verbos')"},
      {i:'◎', t:u('menu.q.sufijos'),    d:u('menu.q.sufijos.d'),    fn:"openRef('sufijos')"},
      {i:'▣', t:u('menu.q.fichas'),     d:u('menu.q.fichas.d'),     fn:"openCards('q')"},
      {i:'◉', t:u('menu.q.quiz'),       d:u('menu.q.quiz.d'),       fn:"startQuiz('q')"},
      {i:'✏', t:u('menu.q.completar'),  d:u('menu.q.completar.d'),  fn:"startCompletar('q')"},
      {i:'✎', t:u('menu.q.completar2'), d:u('menu.q.completar2.d'), fn:"startCompletar('r2')"},
      {i:'◈', t:u('menu.q.dialogos'),   d:u('menu.q.dialogos.d'),   fn:"startDialogos()"},
      {i:'📖', t:u('menu.q.leyendas'),   d:u('menu.q.leyendas.d'),   fn:"openReader('leyendas')"},
      {i:'♫', t:u('menu.q.songs'),      d:u('menu.q.songs.d'),      fn:"openSongs('q')"},
      {i:'◉', t:'Ordenar palabras',     d:'Forma oraciones en el orden correcto', fn:"startWordOrder('q')"},
      {i:'🔊', t:'Escuchar y elegir',   d:'Escucha la palabra y elige la traducción', fn:"startAudioListen('q')"},
      {i:'◆', t:u('menu.q.tutor'),      d:u('menu.q.tutor.d'),      fn:"openChat('q')"}
    ];
  } else if (lang === 'a') {
    sectionLabel = u('menu.a.section');
    items = [
      {i:'≈', t:u('menu.a.oraciones'),  d:u('menu.a.oraciones.d'),  fn:"openReader('aymara_or')"},
      {i:'❋', t:u('menu.a.poesia'),     d:u('menu.a.poesia.d'),     fn:"openReader('aymara_po')"},
      {i:'⚡', t:u('menu.a.verbos'),     d:u('menu.a.verbos.d'),     fn:"openRef('aymara_verbos')"},
      {i:'◎', t:u('menu.a.sufijos'),    d:u('menu.a.sufijos.d'),    fn:"openRef('aymara_sufijos')"},
      {i:'▣', t:u('menu.a.fichas'),     d:u('menu.a.fichas.d'),     fn:"openCards('a')"},
      {i:'▤', t:u('menu.a.vocab'),      d:u('menu.a.vocab.d'),      fn:"openCards('p')"},
      {i:'◉', t:u('menu.a.quiz'),       d:u('menu.a.quiz.d'),       fn:"startQuiz('a')"},
      {i:'✏', t:'Completar oraciones', d:'Direcciones y frases — elige la palabra correcta', fn:"startCompletar('a')"},
      {i:'📖', t:u('menu.a.leyendas'),   d:u('menu.a.leyendas.d'),   fn:"openReader('leyendas_a')"},
      {i:'♫', t:u('menu.a.songs'),      d:u('menu.a.songs.d'),      fn:"openSongs('a')"},
      {i:'◉', t:'Ordenar palabras',     d:'Forma oraciones en el orden correcto', fn:"startWordOrder('a')"},
      {i:'🔊', t:'Escuchar y elegir',   d:'Escucha la palabra y elige la traducción', fn:"startAudioListen('a')"},
      {i:'◆', t:u('menu.a.tutor'),      d:u('menu.a.tutor.d'),      fn:"openChat('a')"}
    ];
  } else if (lang === 'en') {
    sectionLabel = 'Inglés — English';
    items = [
      {i:'◇', t:'Frases en inglés',      d:'Familia, naturaleza, emociones, vida cotidiana', fn:"openReader('en_or')"},
      {i:'❋', t:'Poesía en inglés',      d:'Poemas clásicos y canciones línea por línea',   fn:"openReader('en_po')"},
      {i:'📖', t:'Cuentos en inglés',     d:'Fábulas y cuentos clásicos con traducción',      fn:"openReader('en_le')"},
      {i:'▤', t:'Textos en inglés',      d:'Ensayos cortos sobre temas actuales',            fn:"openReader('en_es')"},
      {i:'▣', t:'Fichas de vocabulario', d:'100 palabras esenciales — Voltear y aprender',   fn:"openCards('en')"},
      {i:'◉', t:'Quiz de inglés',        d:'Traduce palabras y frases al español',            fn:"startQuiz('en')"},
      {i:'✏', t:'Completar oraciones',   d:'Elige la palabra que falta en inglés',            fn:"startCompletar('en')"},
      {i:'◉', t:'Ordenar palabras',      d:'Forma oraciones en inglés en el orden correcto', fn:"startWordOrder('en')"},
      {i:'🔊', t:'Escuchar y elegir',    d:'Escucha la palabra en inglés y elige la traducción', fn:"startAudioListen('en')"},
      {i:'◆', t:'Tutor IA — Inglés',    d:'Practica inglés con inteligencia artificial',    fn:"openChat('en')"}
    ];
  } else {
    sectionLabel = 'Francés — Français';
    items = [
      {i:'◇', t:'Frases en francés',     d:'Familia, naturaleza, emociones, vida cotidiana', fn:"openReader('fr_or')"},
      {i:'❋', t:'Poesía en francés',     d:'Poemas clásicos y canciones línea por línea',   fn:"openReader('fr_po')"},
      {i:'📖', t:'Cuentos en francés',    d:'Fábulas y cuentos clásicos con traducción',      fn:"openReader('fr_le')"},
      {i:'▤', t:'Textos en francés',     d:'Ensayos cortos sobre cultura y gastronomía',     fn:"openReader('fr_es')"},
      {i:'▣', t:'Fichas de vocabulario', d:'100 palabras esenciales — Voltear y aprender',   fn:"openCards('fr')"},
      {i:'◉', t:'Quiz de francés',       d:'Traduce palabras y frases al español',            fn:"startQuiz('fr')"},
      {i:'✏', t:'Completar oraciones',   d:'Elige la palabra que falta en francés',           fn:"startCompletar('fr')"},
      {i:'◉', t:'Ordenar palabras',      d:'Forma oraciones en francés en el orden correcto', fn:"startWordOrder('fr')"},
      {i:'🔊', t:'Escuchar y elegir',    d:'Escucha la palabra en francés y elige la traducción', fn:"startAudioListen('fr')"},
      {i:'◆', t:'Tutor IA — Francés',   d:'Practica francés con inteligencia artificial',   fn:"openChat('fr')"}
    ];
  }

  var langColors = {q:'var(--gold)', a:'var(--teal)', en:'#3b82f6', fr:'#8b5cf6'};
  var langColor = langColors[lang] || 'var(--gold)';

  document.getElementById('homeBody').innerHTML =
    '<button class="back-to-dashboard" onclick="showLangDashboard()">&#8592; Idiomas</button>' +
    '<p class="section-label" style="margin-top:4px;border-left:3px solid ' + langColor + ';padding-left:8px">' + sectionLabel + '</p>' +
    items.map(function(x) {
      return '<button class="menu-card" onclick="' + x.fn + '">' +
        '<span class="menu-icon">' + x.i + '</span>' +
        '<div class="menu-text"><div class="menu-title">' + x.t + '</div>' +
        '<div class="menu-desc">' + x.d + '</div></div></button>';
    }).join('');
}

renderHomeBody();

// ============================================================
// INITIALIZATION
// ============================================================
setupMorning('morning');
renderMorningElements();

window.addEventListener('load', function() {
  applyUiTranslations();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
  }
  // Siempre empieza en el dashboard, saltando la pantalla matutina
  currentLang = null;
  goHome();
});
