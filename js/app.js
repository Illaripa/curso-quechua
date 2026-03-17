let currentLang = 'q'; // 'q' = Quechua, 'a' = Aymara

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

function showScreen(id) {
  document.querySelectorAll('.screen, .screen--full, .screen--morning').forEach(function(s) {
    s.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
  if (id === 'm2') { setupMorning('m2'); renderMorningElements(); }
  window.scrollTo(0, 0);
}

// ============================================================
// LANGUAGE SWITCHING
// ============================================================
function setLang(lang) {
  currentLang = lang;
  document.getElementById('langTabQ').className = 'lang-tab' + (lang === 'q' ? ' active' : '');
  document.getElementById('langTabA').className = 'lang-tab lang-tab--aymara' + (lang === 'a' ? ' active' : '');
  renderHomeBody();
}

// ============================================================
// HOME MENU
// ============================================================
function renderHomeBody() {
  var isQ = currentLang === 'q';
  var items = isQ ? [
    {i:'\u25C8', t:'Bienvenida del d\u00EDa', d:'Frase positiva de hoy en Quechua', fn:"showScreen('m2')"},
    {i:'\u25C7', t:'Oraciones reales', d:'Familia, naturaleza, emociones, vida diaria', fn:"openReader('oraciones')"},
    {i:'\u274B', t:'Poes\u00EDa Quechua', d:'Poemas tradicionales l\u00EDnea a l\u00EDnea', fn:"openReader('poesia')"},
    {i:'\u25A4', t:'Textos cortos', d:'Filosof\u00EDa andina y cosmovisi\u00F3n', fn:"openReader('ensayos')"},
    {i:'\u26A1', t:'Verbos -- Referencia', d:'120+ verbos con conjugaciones completas', fn:"openRef('verbos')"},
    {i:'\u25CE', t:'Sufijos -- Referencia', d:'35+ sufijos con reglas y ejemplos', fn:"openRef('sufijos')"},
    {i:'\u25A3', t:'Fichas -- Desliza y aprende', d:'Stories de verbos -- Voltea -- Aprendido', fn:"openCards('q')"},
    {i:'\u25C9', t:'Quiz Quechua', d:'Traduce oraciones completas', fn:"startQuiz('q')"},
    {i:'\u25C6', t:'Tutor IA', d:'Pregunta, corrige oraciones, conversa', fn:"openChat('q')"}
  ] : [
    {i:'\u2248', t:'Oraciones en Aymara', d:'Familia, naturaleza, saludos, vida diaria', fn:"openReader('aymara_or')"},
    {i:'\u274B', t:'Poes\u00EDa Aymara', d:'Poemas de la cultura Aymara', fn:"openReader('aymara_po')"},
    {i:'\u26A1', t:'Verbos Aymara -- Referencia', d:'50+ verbos con conjugaciones completas', fn:"openRef('aymara_verbos')"},
    {i:'\u25CE', t:'Sufijos Aymara', d:'Sufijos y part\u00EDculas esenciales', fn:"openRef('aymara_sufijos')"},
    {i:'\u25A3', t:'Fichas Aymara', d:'Aprende verbos deslizando', fn:"openCards('a')"},
    {i:'\u25A4', t:'Fichas Vocabulario', d:'Familia, naturaleza, n\u00FAmeros y m\u00E1s', fn:"openCards('p')"},
    {i:'\u25C9', t:'Quiz Aymara', d:'Practica traduciendo oraciones', fn:"startQuiz('a')"},
    {i:'\u25C6', t:'Tutor IA -- Aymara', d:'Practica con inteligencia artificial', fn:"openChat('a')"}
  ];

  document.getElementById('homeBody').innerHTML =
    '<p class="section-label" style="margin-top:4px">' +
    (isQ ? 'Lengua de los Incas -- Cusco' : 'Lengua del Lago Titicaca -- Bolivia & Per\u00FA') + '</p>' +
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
  document.getElementById('morning').classList.add('active');
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
  }
});
