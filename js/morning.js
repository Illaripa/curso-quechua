function setupMorning(target) {
  var days = ['Domingo','Lunes','Martes','Mi\u00E9rcoles','Jueves','Viernes','S\u00E1bado'];
  var months = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
  var now = new Date();
  var dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
  var msg = MSGS[dayOfYear % MSGS.length];
  var dateStr = days[now.getDay()] + ', ' + now.getDate() + ' de ' + months[now.getMonth()];
  var hour = now.getHours();
  var greeting = hour < 12 ? "Allin p'unchay" : hour < 18 ? "Allin ch'isi" : "Allin tuta";

  if (target === 'morning') {
    document.getElementById('morningDate').textContent = dateStr;
    document.getElementById('morningGreeting').textContent = greeting + ' \u00B7 ' + msg.g;
    document.getElementById('morningSymbol').textContent = msg.sun;
    document.getElementById('morningQuote').innerHTML =
      '<div class="morning-quechua">' + msg.q + '</div>' +
      '<div class="morning-spanish">' + msg.s + '</div>';
    document.getElementById('morningWord').innerHTML =
      '<div class="morning-word-label">\u25C8 Palabra del d\u00EDa</div>' +
      '<div class="morning-word-quechua">' + msg.w.q + '</div>' +
      '<div class="morning-word-spanish">' + msg.w.s + '</div>';
  } else {
    var elementsHTML = '<div id="m2Elements" style="display:flex;gap:8px;margin-top:16px;flex-wrap:wrap"></div>';

    document.getElementById('m2Body').innerHTML =
      '<div style="text-align:center;padding:6px 0 20px">' +
      '<div style="font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-bottom:4px">' + dateStr + '</div>' +
      '<div style="font-size:44px;margin:10px 0">' + msg.sun + '</div>' +
      '<div style="font-size:13px;color:var(--muted);font-style:italic">' + msg.g + '</div></div>' +
      '<div style="background:rgba(255,255,255,.6);border:1px solid rgba(196,125,26,.15);border-radius:18px;padding:20px 18px;margin-bottom:13px">' +
      '<div class="morning-quechua">' + msg.q + '</div><div class="morning-spanish">' + msg.s + '</div></div>' +
      '<div class="morning-word" style="animation:none">' +
      '<div class="morning-word-label">\u25C8 Palabra del d\u00EDa</div>' +
      '<div class="morning-word-quechua">' + msg.w.q + '</div>' +
      '<div class="morning-word-spanish">' + msg.w.s + '</div></div>' + elementsHTML;
  }
}
