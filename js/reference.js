var refKey = '';
var refTabIndex = 0;
var refSearchTerm = '';
var refItemsCache = [];

function openRef(key) {
  refKey = key;
  refTabIndex = 0;
  refSearchTerm = '';
  document.getElementById('refInput').value = '';
  document.getElementById('refTitle').textContent =
    key === 'verbos' ? 'Verbos Quechua' :
    key === 'sufijos' ? 'Sufijos Quechua' :
    key === 'aymara_verbos' ? 'Verbos Aymara' :
    key === 'palabras' ? 'Vocabulario' : 'Sufijos Aymara';

  var data = getRefData();
  var cats = getUniqueCategories(data);
  document.getElementById('refTabs').innerHTML = cats.map(function(c, i) {
    return '<button class="ref-tab' + (i === 0 ? ' active' : '') + '" onclick="setRefTab(' + i + ')" id="refTabBtn' + i + '">' + c + '</button>';
  }).join('');
  document.getElementById('refCount').textContent = data.length + ' items';
  renderRef();
  showScreen('reference');
}

function getRefData() {
  if (refKey === 'verbos') return VERBOS_Q;
  if (refKey === 'sufijos') return SUFIJOS_Q;
  if (refKey === 'aymara_verbos') return VERBOS_A;
  if (refKey === 'palabras') return PALABRAS_Q;
  return SUFIJOS_A;
}

function getUniqueCategories(data) {
  var seen = {};
  var result = [];
  data.forEach(function(x) {
    if (!seen[x.cat]) { seen[x.cat] = true; result.push(x.cat); }
  });
  return result;
}

function setRefTab(index) {
  refTabIndex = index;
  document.querySelectorAll('.ref-tab').forEach(function(t, j) {
    t.className = 'ref-tab' + (j === index ? ' active' : '');
  });
  renderRef();
}

function filterRef() {
  refSearchTerm = document.getElementById('refInput').value.toLowerCase();
  renderRef();
}

function renderRef() {
  refItemsCache = [];
  var data = getRefData();
  var cats = getUniqueCategories(data);
  var items;

  if (refSearchTerm) {
    items = data.filter(function(x) {
      return x.q.toLowerCase().indexOf(refSearchTerm) >= 0 ||
             x.s.toLowerCase().indexOf(refSearchTerm) >= 0;
    });
  } else {
    items = data.filter(function(x) { return x.cat === cats[refTabIndex]; });
  }

  var html = '';
  if (refSearchTerm) {
    var byCategory = {};
    items.forEach(function(x) {
      if (!byCategory[x.cat]) byCategory[x.cat] = [];
      byCategory[x.cat].push(x);
    });
    Object.keys(byCategory).forEach(function(cat) {
      html += '<div class="ref-category-header">' + cat + '</div>';
      byCategory[cat].forEach(function(x) { html += buildRefItemHTML(x); });
    });
  } else {
    items.forEach(function(x) { html += buildRefItemHTML(x); });
  }

  document.getElementById('refList').innerHTML = html || '<div style="padding:30px;text-align:center;color:var(--muted)">Sin resultados</div>';
}

function buildRefItemHTML(item) {
  var isVerb = refKey === 'verbos' || refKey === 'aymara_verbos';
  var idx = refItemsCache.push(item) - 1;
  return '<div class="ref-item" onclick="openDetail(' + idx + ')">' +
    '<div style="flex:1"><div class="ref-item-quechua">' + item.q + '</div>' +
    '<div class="ref-item-spanish">' + item.s + '</div></div>' +
    (isVerb ? '<div class="ref-tag" style="background:' + item.col + '22;color:' + item.col + '">' + item.cat + '</div>' : '') +
    '</div>';
}

function openDetail(idx) {
  var item = refItemsCache[idx];
  var isVerb = refKey === 'verbos' || refKey === 'aymara_verbos';
  var isAy = refKey === 'aymara_verbos' || refKey === 'aymara_sufijos';

  document.getElementById('detailHeader').innerHTML =
    '<div class="detail-word" style="color:' + (isVerb ? item.col : 'var(--violet)') + '">' + item.q + '</div>' +
    '<div class="detail-meaning">' + item.s + '</div>' +
    (item.uso ? '<div style="font-size:13px;color:var(--muted);margin-top:4px">' + item.uso + '</div>' : '');

  var body = '';

  // Conjugation table for verbs
  if (isVerb && item.c) {
    var labels = isAy
      ? [['Naya (yo)', item.c.yo], ['Juma (t\u00FA)', item.c.tu], ['Jupa (\u00E9l/ella)', item.c.el], ['Nanaka (nos.excl)', item.c.nos], ['Jiwasa (nos.incl)', item.c.nex], ['Jumana (uds)', item.c.uds], ['Jupanaka (ellos)', item.c.ell]]
      : [['Nuqam (yo)', item.c.yo], ['Qam (t\u00FA)', item.c.tu], ['Pay (\u00E9l/ella)', item.c.el], ['Nuqanchik (nos.incl)', item.c.nos], ['Nuqayku (nos.excl)', item.c.nex], ['Qamkuna (uds)', item.c.uds], ['Paykuna (ellos)', item.c.ell]];
    body += '<div class="detail-section"><div class="detail-section-title">Conjugaci\u00F3n</div><table class="conj-table">';
    labels.forEach(function(pair) {
      body += '<tr><td>' + pair[0] + '</td><td>' + (pair[1] || '\u2014') + '</td></tr>';
    });
    body += '</table></div>';
  }

  // Examples
  if (item.ex && item.ex.length) {
    body += '<div class="detail-section"><div class="detail-section-title">Ejemplos</div>';
    item.ex.forEach(function(e) {
      body += '<div class="example-box"><div class="example-quechua">' + e.q + '</div><div class="example-spanish">' + e.s + '</div></div>';
    });
    body += '</div>';
  }

  // Notes
  if (item.note) {
    body += '<div class="detail-section"><div class="detail-section-title">Nota</div><div class="note-box">' + item.note + '</div></div>';
  }

  document.getElementById('detailBody').innerHTML = body;
  document.getElementById('detailPanel').classList.add('active');
}

function closeDetail() {
  document.getElementById('detailPanel').classList.remove('active');
}
