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
  // Keep original order, no shuffle
  deck = data.filter(function(x) { return !saved[x.q]; });
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
  applyCardFilter();
}

function applyCardFilter() {
  var data = cardLang === 'q' ? VERBOS_Q : cardLang === 'p' ? PALABRAS_Q : VERBOS_A;
  var saved = JSON.parse(localStorage.getItem('yachay_v5_' + cardLang) || '{}');
  deck = data.filter(function(x) {
    return !saved[x.q] && activeCategories.indexOf(x.cat) >= 0;
  });
  cardIndex = 0;
  cardFlipped = false;
  renderCard();
  document.getElementById('filterPanel').classList.remove('active');
}

function getUniqueCategories(data) {
  var seen = {};
  var cats = [];
  data.forEach(function(x) {
    if (!seen[x.cat]) { seen[x.cat] = true; cats.push(x.cat); }
  });
  return cats;
}

function shuffleArray(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
  }
}

function renderCard() {
  var countEl = document.getElementById('cardsCount');
  var data = cardLang === 'q' ? VERBOS_Q : cardLang === 'p' ? PALABRAS_Q : VERBOS_A;
  var total = data.length;
  var learnedCount = Object.keys(JSON.parse(localStorage.getItem('yachay_v5_' + cardLang) || '{}')).length;
  countEl.textContent = (cardIndex + 1) + ' / ' + deck.length + (learnedCount > 0 ? ' (' + learnedCount + ' aprendidas)' : '');
  document.getElementById('cardsProgress').style.width = (total > 0 ? (learnedCount / total * 100) : 0) + '%';

  // Update nav arrows visibility
  var prevBtn = document.getElementById('cardPrev');
  var nextBtn = document.getElementById('cardNext');
  if (prevBtn) prevBtn.style.opacity = cardIndex > 0 ? '1' : '0.25';
  if (nextBtn) nextBtn.style.opacity = cardIndex < deck.length - 1 ? '1' : '0.25';

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
    '<div class="card-tap-hint">Toca para voltear</div>';

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

  document.getElementById('cardBack').innerHTML = window._buildCardBack('pres');

  // Tense tab clicks
  document.getElementById('cardBack').addEventListener('click', function(e) {
    var tab = e.target.closest('.tense-tab');
    if (tab) {
      document.getElementById('cardBack').innerHTML = window._buildCardBack(tab.getAttribute('data-tid'));
    }
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

// Swipe RIGHT = next card
function nextCard() {
  if (deck.length === 0) return;
  if (cardIndex < deck.length - 1) {
    slideAndDo(-1, function() {
      cardIndex++;
      cardFlipped = false;
      renderCard();
    });
  }
}

// Swipe LEFT = previous card
function prevCard() {
  if (deck.length === 0) return;
  if (cardIndex > 0) {
    slideAndDo(1, function() {
      cardIndex--;
      cardFlipped = false;
      renderCard();
    });
  }
}

// Mark as learned — separate action via button
function learnCard() {
  if (cardIndex >= deck.length) return;
  var verb = deck[cardIndex];
  var saved = JSON.parse(localStorage.getItem('yachay_v5_' + cardLang) || '{}');
  saved[verb.q] = 1;
  localStorage.setItem('yachay_v5_' + cardLang, JSON.stringify(saved));
  showToast('Aprendido!', 'var(--green)');
  deck.splice(cardIndex, 1);
  if (cardIndex >= deck.length) cardIndex = Math.max(0, deck.length - 1);
  cardFlipped = false;
  renderCard();
}

// View learned cards
function viewLearned() {
  var saved = JSON.parse(localStorage.getItem('yachay_v5_' + cardLang) || '{}');
  var data = cardLang === 'q' ? VERBOS_Q : cardLang === 'p' ? PALABRAS_Q : VERBOS_A;
  var learned = data.filter(function(x) { return saved[x.q]; });

  if (learned.length === 0) {
    showToast('No tienes fichas aprendidas aun', 'var(--gold)');
    return;
  }

  // Show learned cards in the deck temporarily
  deck = learned;
  cardIndex = 0;
  cardFlipped = false;
  showToast(learned.length + ' fichas aprendidas', 'var(--green)');
  renderCard();
}

function skipCard() {
  nextCard();
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
      // SWIPE: navigate cards like real cards
      if (dx < 0) nextCard();   // swipe left = next
      else prevCard();          // swipe right = previous
    } else if (moved < 20) {
      // TAP: flip card
      flipCard();
    }
  });
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
  applyCardFilter();
}

// Keyboard navigation for flashcards
document.addEventListener('keydown', function(e) {
  var cardsScreen = document.getElementById('cards');
  if (!cardsScreen || !cardsScreen.classList.contains('active')) return;
  if (e.key === 'ArrowRight') { nextCard(); e.preventDefault(); }
  else if (e.key === 'ArrowLeft') { prevCard(); e.preventDefault(); }
  else if (e.key === ' ') { flipCard(); e.preventDefault(); }
  else if (e.key === 'Enter') { learnCard(); e.preventDefault(); }
});
