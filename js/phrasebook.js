var pbKey = '';
var pbTabIndex = 0;
var pbLevel = 'basic';
var pbSearchTerm = '';

function openPhrasebook(key) {
  pbKey = key;
  pbTabIndex = 0;
  pbLevel = 'basic';
  pbSearchTerm = '';
  document.getElementById('pbInput').value = '';

  var data = key === 'aymara' ? (typeof PHRASEBOOK_EXT !== 'undefined' ? mergePhrasebookData() : PHRASEBOOK_DATA) : PHRASEBOOK_DATA;
  var cats = Object.keys(data);

  document.getElementById('pbTitle').textContent = 'Phrasebook 1000+';
  document.getElementById('pbCount').textContent = countAllPhrases(data) + ' frases';

  document.getElementById('pbTabs').innerHTML = cats.map(function(c, i) {
    return '<button class="ref-tab' + (i === 0 ? ' active' : '') + '" onclick="setPhrasebookTab(' + i + ')" id="pbTab' + i + '">' + (data[c].icon || '') + ' ' + c + '</button>';
  }).join('');

  renderPhrasebook();
  showScreen('phrasebook');
}

function mergePhrasebookData() {
  var merged = {};
  for (var k in PHRASEBOOK_DATA) merged[k] = PHRASEBOOK_DATA[k];
  if (typeof PHRASEBOOK_EXT !== 'undefined') {
    for (var k in PHRASEBOOK_EXT) merged[k] = PHRASEBOOK_EXT[k];
  }
  return merged;
}

function countAllPhrases(data) {
  var total = 0;
  for (var c in data) {
    for (var l in data[c]) {
      if (Array.isArray(data[c][l])) total += data[c][l].length;
    }
  }
  return total;
}

function setPhrasebookTab(index) {
  pbTabIndex = index;
  pbLevel = 'basic';
  pbSearchTerm = '';
  document.getElementById('pbInput').value = '';
  document.querySelectorAll('#pbTabs .ref-tab').forEach(function(t, j) {
    t.className = 'ref-tab' + (j === index ? ' active' : '');
  });
  renderPhrasebook();
}

function setPhrasebookLevel(level) {
  pbLevel = level;
  document.querySelectorAll('#pbList .pb-level-btn').forEach(function(btn) {
    btn.className = 'pb-level-btn' + (btn.dataset.level === level ? ' active' : '');
  });
  renderPhrasebook();
}

function filterPhrasebook() {
  pbSearchTerm = document.getElementById('pbInput').value.toLowerCase();
  renderPhrasebook();
}

function renderPhrasebook() {
  var data = typeof PHRASEBOOK_EXT !== 'undefined' ? mergePhrasebookData() : PHRASEBOOK_DATA;
  var cats = Object.keys(data);
  var catName = cats[pbTabIndex];
  var catData = data[catName];
  if (!catData) return;

  var phrases = [];
  if (pbSearchTerm) {
    for (var c in data) {
      for (var l in data[c]) {
        if (Array.isArray(data[c][l])) {
          data[c][l].forEach(function(p) {
            if (p.q.toLowerCase().indexOf(pbSearchTerm) >= 0 ||
                p.s.toLowerCase().indexOf(pbSearchTerm) >= 0 ||
                (p.a && p.a.toLowerCase().indexOf(pbSearchTerm) >= 0)) {
              phrases.push({p: p, cat: c, level: l});
            }
          });
        }
      }
    }
  } else {
    var levels = ['basic', 'intermediate', 'advanced'];
    var levelNames = {basic: 'Básico', intermediate: 'Intermedio', advanced: 'Avanzado'};
    var html = '<div class="pb-level-bar">';
    levels.forEach(function(l) {
      html += '<button class="pb-level-btn' + (pbLevel === l ? ' active' : '') + '" data-level="' + l + '" onclick="setPhrasebookLevel(\'' + l + '\')">' + levelNames[l] + '</button>';
    });
    html += '</div>';

    if (catData[pbLevel] && catData[pbLevel].length) {
      html += '<div class="ref-category-header">' + catData.icon + ' ' + catName + ' — ' + levelNames[pbLevel] + '</div>';
      catData[pbLevel].forEach(function(p) {
        html += buildPhraseItemHTML(p);
      });
    } else {
      html += '<div style="padding:30px;text-align:center;color:var(--muted)">Sin frases en este nivel</div>';
    }
    document.getElementById('pbList').innerHTML = html;
    return;
  }

  if (phrases.length) {
    var byCat = {};
    phrases.forEach(function(item) {
      if (!byCat[item.cat]) byCat[item.cat] = [];
      byCat[item.cat].push(item);
    });
    var html2 = '';
    for (var c in byCat) {
      html2 += '<div class="ref-category-header">' + (data[c] ? data[c].icon + ' ' : '') + c + ' (' + byCat[c].length + ')</div>';
      byCat[c].forEach(function(item) {
        html2 += buildPhraseItemHTML(item.p);
      });
    }
    document.getElementById('pbList').innerHTML = html2;
  } else {
    document.getElementById('pbList').innerHTML = '<div style="padding:30px;text-align:center;color:var(--muted)">Sin resultados</div>';
  }
}

function buildPhraseItemHTML(p) {
  return '<div class="ref-item" style="flex-direction:column;align-items:flex-start;gap:4px">' +
    '<div class="ref-item-quechua" style="font-size:19px">' + p.q + '</div>' +
    '<div class="ref-item-spanish" style="font-size:17px">' + p.s + '</div>' +
    (p.a ? '<div style="font-size:14px;color:var(--gold);opacity:0.7">' + p.a + '</div>' : '') +
    '</div>';
}
