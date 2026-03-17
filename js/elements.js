var currentElement = null;

function renderMorningElements() {
  var html = ELEMENTS.map(function(el) {
    return '<div class="morning-element" onclick="openElement(\'' + el.id + '\')">' +
      '<span class="morning-element-symbol">' + el.sym + '</span>' +
      '<div class="morning-element-quechua">' + el.q + '</div>' +
      '<div class="morning-element-spanish">' + el.s.split(' — ')[0] + '</div></div>';
  }).join('');
  var containers = document.querySelectorAll('#morningElements, #m2Elements');
  containers.forEach(function(c) { if (c) c.innerHTML = html; });
}

function openElement(id) {
  var el = ELEMENTS.find(function(e) { return e.id === id; });
  if (!el) return;
  currentElement = el;
  document.getElementById('elementTitle').textContent = el.q + ' — ' + el.s.split(' — ')[0];
  showRandomPrayer();
  showScreen('elementPrayer');
}

function showRandomPrayer() {
  if (!currentElement) return;
  var prayers = currentElement.prayers;
  var p = prayers[Math.floor(Math.random() * prayers.length)];
  document.getElementById('elementPrayerBody').innerHTML =
    '<div class="prayer-symbol">' + currentElement.sym + '</div>' +
    '<div class="prayer-name">' + currentElement.q + '</div>' +
    '<div class="prayer-meaning">' + currentElement.s + '</div>' +
    '<div class="prayer-text-q">' + p.q + '</div>' +
    '<div class="prayer-text-s">' + p.s + '</div>' +
    '<button class="prayer-next-btn" onclick="nextPrayer()">Otra oración &#8635;</button>' +
    '<div class="prayer-note" style="margin-top:16px">Toca para recibir otra oración</div>';
}

function nextPrayer() { showRandomPrayer(); }
