var deck = [];
var cardIndex = 0;
var cardFlipped = false;
var cardLang = 'q';
var allCategories = [];
var activeCategories = [];
var touchStartX = 0;
var touchStartY = 0;
var isDragging = false;

function openCards(lang) {
  cardLang = lang;
  cardFlipped = false;
  var data = lang === 'q' ? VERBOS_Q : lang === 'p' ? PALABRAS_Q : VERBOS_A;
  var cats = getUniqueCategories(data);
  activeCategories = cats.slice();
  var saved = JSON.parse(localStorage.getItem('yachay_v5_' + lang) || '{}');
  deck = data.filter(function(x) { return !saved[x.q]; });
  shuffleArray(deck);
  cardIndex = 0;
  setupCardFilters(lang);
  renderCard();
  showScreen('cards');
}

function setupCardFilters(lang) {
  var data = lang === 'q' ? VERBOS_Q : lang === 'p' ? PALABRAS_Q : VERBOS_A;
  var cats = getUniqueCategories(data);
  allCategories = cats;
  document.getElementById('filterTags').innerHTML = cats.map(function(c) {
    return '<button class="filter-tag active" id="filterTag_' + c.replace(/\s/g, '_') + '" onclick="toggleCategory(\'' + c + '\')">' + c + '</button>';
  }).join('');
}

function toggleCategory(cat) {
  var idx = activeCategories.indexOf(cat);
  if (idx >= 0) { activeCategories.splice(idx, 1); }
  else { activeCategories.push(cat); }
  document.getElementById('filterTag_' + cat.replace(/\s/g, '_')).className =
    'filter-tag' + (activeCategories.indexOf(cat) >= 0 ? ' active' : '');
}

function openFilter() {
  document.getElementById('filterPanel').classList.add('active');
}

function closeFilterPanel(event) {
  if (event.target === document.getElementById('filterPanel')) {
    document.getElementById('filterPanel').classList.remove('active');
  }
}

function applyFilter() {
  document.getElementById('filterPanel').classList.remove('active');
  var data = cardLang === 'q' ? VERBOS_Q : cardLang === 'p' ? PALABRAS_Q : VERBOS_A;
  var saved = JSON.parse(localStorage.getItem('yachay_v5_' + cardLang) || '{}');
  deck = data.filter(function(x) {
    return activeCategories.indexOf(x.cat) >= 0 && !saved[x.q];
  });
  shuffleArray(deck);
  cardIndex = 0;
  cardFlipped = false;
  renderCard();
}

function shuffleArray(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

function renderCard() {
  var totalData = cardLang === 'q' ? VERBOS_Q : cardLang === 'p' ? PALABRAS_Q : VERBOS_A;
  var total = totalData.length;
  var savedCount = Object.keys(JSON.parse(localStorage.getItem('yachay_v5_' + cardLang) || '{}')).length;
  document.getElementById('cardsProgress').style.width = (savedCount / total * 100) + '%';
  document.getElementById('cardsCount').textContent = deck.length + ' restantes';

  if (deck.length === 0 || cardIndex >= deck.length) {
    showEmptyDeck();
    return;
  }

  var verb = deck[cardIndex];
  var fc = document.getElementById('flashcard');
  fc.className = 'flashcard';
  cardFlipped = false;
  document.getElementById('cardWrap').style.display = '';
  document.getElementById('cardEmpty').classList.remove('active');
  document.getElementById('cardActions').style.display = 'flex';

  var isAy = cardLang === 'a';

  // Front face
  document.getElementById('cardFront').innerHTML =
    '<div class="card-category-pos"><div class="card-cat-pill" style="background:' + verb.col + '22;color:' + verb.col + '">' + verb.cat + '</div></div>' +
    '<div class="card-verb">' + verb.q + '</div>' +
    '<div class="card-meaning">' + verb.s + '</div>' +
    '<div class="card-tap-hint">Toca para ver conjugaci\u00F3n</div>';

  // Back face with tense tabs
  var pronounLabels = isAy
    ? ['Naya', 'Juma', 'Jupa', 'Nanaka', 'Jiwasa', 'Jumana', 'Jupanaka']
    : ['Nuqam', 'Qam', 'Pay', 'Nuqanchik', 'Nuqayku', 'Qamkuna', 'Paykuna'];
  var pronounKeys = ['yo', 'tu', 'el', 'nos', 'nex', 'uds', 'ellos'];
  var tenses = [
    {id: 'pres', label: 'Presente', data: verb.c || {}},
    {id: 'past', label: 'Pasado', data: verb.p || verb.c || {}},
    {id: 'fut', label: 'Futuro', data: verb.f || verb.c || {}}
  ];

  function buildConjGrid(tenseData) {
    var grid = '<div class="conj-grid">';
    pronounLabels.forEach(function(label, i) {
      var key = pronounKeys[i];
      grid += '<div class="conj-cell"><div class="conj-cell-label">' + label + '</div>' +
        '<div class="conj-cell-word" style="color:' + verb.col + '">' + (tenseData[key] || '\u2014') + '</div></div>';
    });
    grid += '</div>';
    return grid;
  }

  window._buildCardBack = function(tenseId) {
    var tense = tenses.find(function(t) { return t.id === tenseId; }) || tenses[0];
    var back = '<div class="card-back-verb">' + verb.q + '</div>' +
      '<div class="card-back-meaning">' + verb.s + '</div>';
    back += '<div class="tense-tabs">';
    tenses.forEach(function(t) {
      back += '<button class="tense-tab' + (t.id === tenseId ? ' active' : '') + '" data-tid="' + t.id + '">' + t.label + '</button>';
    });
    back += '</div>';
    back += buildConjGrid(tense.data);

    var examples = verb.ejs || null;
    if (examples && examples.length) {
      back += '<div class="card-examples-label">Oraciones de uso</div>';
      examples.forEach(function(e) {
        back += '<div class="card-example-item"><div class="card-example-quechua">' + (e.q || '') + '</div>' +
          '<div class="card-example-spanish">' + (e.s || '') + '</div>';
        if (e.suf) back += '<div class="card-example-suffix">*' + e.suf + '</div>';
        back += '</div>';
      });
    }
    if (verb.note) back += '<div class="card-note">*' + verb.note + '</div>';
    return back;
  };

  window.switchTense = function(tenseId) {
    var backEl = document.getElementById('cardBack');
    backEl.innerHTML = window._buildCardBack(tenseId);
    backEl.querySelectorAll('.tense-tab').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        switchTense(btn.dataset.tid);
      });
    });
  };

  var backEl = document.getElementById('cardBack');
  backEl.innerHTML = window._buildCardBack('pres');
  backEl.querySelectorAll('.tense-tab').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      switchTense(btn.dataset.tid);
    });
  });

  setupSwipe();
}

function showEmptyDeck() {
  document.getElementById('cardWrap').style.display = 'none';
  document.getElementById('cardEmpty').classList.add('active');
  document.getElementById('cardActions').style.display = 'none';
}

function flipCard() {
  var fc = document.getElementById('flashcard');
  cardFlipped = !cardFlipped;
  fc.className = 'flashcard' + (cardFlipped ? ' flipped' : '');
}

function slideAndDo(direction, callback) {
  var fc = document.getElementById('flashcard');
  fc.style.transition = 'transform 0.25s ease-in, opacity 0.25s';
  fc.style.transform = 'translateX(' + (direction * 300) + 'px) rotate(' + (direction * 10) + 'deg)';
  fc.style.opacity = '0';
  setTimeout(function() {
    callback();
    fc.style.transition = 'none';
    fc.style.transform = 'scale(0.9) translateY(20px)';
    fc.style.opacity = '0';
    setTimeout(function() {
      fc.style.transition = 'transform 0.25s ease-out, opacity 0.25s';
      fc.style.transform = '';
      fc.style.opacity = '1';
    }, 30);
  }, 250);
}

function learnCard() {
  if (cardIndex >= deck.length) return;
  slideAndDo(1, function() {
    var verb = deck[cardIndex];
    var saved = JSON.parse(localStorage.getItem('yachay_v5_' + cardLang) || '{}');
    saved[verb.q] = 1;
    localStorage.setItem('yachay_v5_' + cardLang, JSON.stringify(saved));
    showToast('Aprendido!', 'var(--green)');
    deck.splice(cardIndex, 1);
    if (cardIndex >= deck.length) cardIndex = Math.max(0, deck.length - 1);
    cardFlipped = false;
    renderCard();
  });
}

function skipCard() {
  if (cardIndex >= deck.length) return;
  slideAndDo(-1, function() {
    var verb = deck.splice(cardIndex, 1)[0];
    deck.push(verb);
    if (cardIndex >= deck.length) cardIndex = 0;
    cardFlipped = false;
    renderCard();
  });
}

function resetDeck() {
  localStorage.removeItem('yachay_v5_' + cardLang);
  openCards(cardLang);
}

function showToast(message, color) {
  var toast = document.getElementById('toast');
  toast.textContent = message;
  toast.style.background = color || 'var(--card)';
  toast.style.color = '#fff';
  toast.classList.add('active');
  setTimeout(function() { toast.classList.remove('active'); }, 1800);
}

var _swipeSetup = false;
function setupSwipe() {
  if (_swipeSetup) return;
  _swipeSetup = true;
  var fc = document.getElementById('flashcard');
  var sx = 0, sy = 0, st = 0, moved = 0;

  fc.addEventListener('touchstart', function(e) {
    sx = e.touches[0].clientX;
    sy = e.touches[0].clientY;
    st = Date.now();
    moved = 0;
  }, {passive: true});

  fc.addEventListener('touchmove', function(e) {
    var dx = e.touches[0].clientX - sx;
    var dy = e.touches[0].clientY - sy;
    moved = Math.abs(dx);
    if (Math.abs(dx) > Math.abs(dy) && moved > 25) {
      var flip = cardFlipped ? 'rotateY(180deg) ' : '';
      fc.style.transform = flip + 'translateX(' + dx + 'px) rotate(' + (dx * 0.03) + 'deg)';
      document.getElementById('swipeRight').style.opacity = dx > 50 ? '1' : '0';
      document.getElementById('swipeLeft').style.opacity = dx < -50 ? '1' : '0';
    }
  }, {passive: true});

  fc.addEventListener('touchend', function(e) {
    var dx = e.changedTouches[0].clientX - sx;
    fc.style.transform = cardFlipped ? 'rotateY(180deg)' : '';
    document.getElementById('swipeRight').style.opacity = '0';
    document.getElementById('swipeLeft').style.opacity = '0';

    if (moved > 80) {
      // SWIPE: change card
      if (dx > 0) learnCard();
      else skipCard();
    } else if (moved < 20) {
      // TAP: flip card
      flipCard();
    }
  });
}
