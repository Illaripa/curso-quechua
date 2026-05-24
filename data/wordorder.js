const WORDORDER_Q = [
  {level:1, es:"Yo me llamo María.", ans:["Nuqam","sutiymi","María"], note:"Nuqam = yo (énfasis). -ymi = mi nombre es."},
  {level:1, es:"¿Cómo estás?", ans:["Imaynallan","kashanki"], note:"Imaynallan = cómo. kashanki = estás (tú)."},
  {level:1, es:"Está bien.", ans:["Allinmi"], note:"Allin = bien. -mi marca certeza personal."},
  {level:1, es:"Gracias.", ans:["Yusulpayki"], note:"Frase completa de agradecimiento, lit. 'te doy gracias'."},
  {level:2, es:"Quiero agua.", ans:["Yakuta","munani"], note:"Yaku = agua. -ta = objeto directo. munani = quiero (yo)."},
  {level:2, es:"El sol es grande.", ans:["Inti","hatunmi"], note:"Inti = sol. hatun = grande. -mi = certeza."},
  {level:2, es:"Yo camino despacio.", ans:["Nuqa","allillantan","purini"], note:"allillantan = despacio (adverbio). purini = camino."},
  {level:3, es:"El niño come papa.", ans:["Wawa","papata","mikhushan"], note:"Wawa = niño. -ta = objeto. mikhushan = está comiendo."},
  {level:3, es:"Mi madre vive en Cusco.", ans:["Mamaymi","Qusqupi","tiyakushan"], note:"-ymi = mi madre. -pi = en (locativo). tiyakushan = vive."},
  {level:3, es:"¿Dónde está tu casa?", ans:["Maypin","wasiyki","kashan"], note:"Maypin = dónde. -yki = tu. kashan = está."}
];

const WORDORDER_A = [
  {level:1, es:"¿Cómo te llamas?", ans:["Kunas","sutimax"], note:"Kunas = cómo/qué. sutimax = tu nombre."},
  {level:1, es:"Está bien.", ans:["Waliki"], note:"Waliki = está bien / de acuerdo."},
  {level:1, es:"Gracias.", ans:["Yuspagara"], note:"Yuspagara = gracias (Aymara coloquial)."},
  {level:1, es:"Buenos días.", ans:["Iqi","arüru"], note:"Iqi = buen/buena. arüru = amanecer / mañana."},
  {level:2, es:"Quiero agua.", ans:["Umata","muntha"], note:"Uma = agua. -ta = objeto. muntha = quiero (yo)."},
  {level:2, es:"El lago es grande.", ans:["Quta","jach'ami"], note:"Quta = lago. jach'a = grande. -mi = certeza."},
  {level:2, es:"Yo vivo aquí.", ans:["Naya","akanwa","jistatha"], note:"Naya = yo. akana = aquí. jistatha = vivo."},
  {level:3, es:"El niño come papa.", ans:["Yuqalla","chuñuta","manq'atayna"], note:"Yuqalla = niño. chuñu = chuño (papa deshidratada). -tayna = pasado."},
  {level:3, es:"Mi madre vive en el altiplano.", ans:["Mamamasa","jalq'ataxa","jistatayna"], note:"-masa = mi. jalq'ata = altiplano."},
  {level:3, es:"¿Dónde está tu casa?", ans:["Kawkins","utama","utjaspa"], note:"Kawkins = dónde. utama = tu casa. utjaspa = está."}
];

const WORDORDER_EN = [
  {level:1, es:"Buenos días.", ans:["Good","morning"], note:"Good morning = Buenos días. También: Good afternoon / Good evening."},
  {level:1, es:"¿Cómo te llamas?", ans:["What","is","your","name"], note:"What is your name? = ¿Cómo te llamas? Más formal que 'What's your name?'."},
  {level:1, es:"Me llamo Ana.", ans:["My","name","is","Ana"], note:"My name is... = Me llamo... Estructura básica de presentación."},
  {level:1, es:"Gracias.", ans:["Thank","you"], note:"Thank you = Gracias. 'Thanks' es más informal."},
  {level:2, es:"Tengo hambre.", ans:["I","am","hungry"], note:"I am hungry = Tengo hambre. Lit. 'Estoy hambriento/a'. El inglés usa 'to be' donde el español usa 'tener'."},
  {level:2, es:"¿Dónde está el baño?", ans:["Where","is","the","bathroom"], note:"Where is the bathroom? Alternativa: 'restroom' en EE.UU., 'toilet' en Reino Unido."},
  {level:2, es:"Quiero un café.", ans:["I","would","like","a","coffee"], note:"I would like = quisiera (cortés). Más educado que 'I want'."},
  {level:3, es:"Ayer fui al mercado.", ans:["Yesterday","I","went","to","the","market"], note:"Went = fui (pasado irregular de 'go'). Yesterday siempre va al inicio."},
  {level:3, es:"¿Cuánto cuesta esto?", ans:["How","much","does","this","cost"], note:"How much does this cost? Does = auxiliar del presente simple."},
  {level:3, es:"Si tuviera tiempo, viajaría.", ans:["If","I","had","time","I","would","travel"], note:"Condicional tipo 2: If + pasado simple + would + infinitivo."}
];

const WORDORDER_FR = [
  {level:1, es:"Buenos días.", ans:["Bonjour"], note:"Bonjour = buenos días / hola (formal). Bonsoir = buenas noches."},
  {level:1, es:"¿Cómo te llamas?", ans:["Comment","tu","t'appelles"], note:"Comment tu t'appelles? = ¿Cómo te llamas? Formal: Comment vous appelez-vous?"},
  {level:1, es:"Me llamo Ana.", ans:["Je","m'appelle","Ana"], note:"Je m'appelle = me llamo. Lit. 'yo me llamo'. Verbo réfléchi: s'appeler."},
  {level:1, es:"Gracias.", ans:["Merci"], note:"Merci = gracias. Merci beaucoup = muchas gracias."},
  {level:2, es:"Tengo hambre.", ans:["J'ai","faim"], note:"J'ai faim = tengo hambre. Lit. 'Tengo el hambre'. El francés usa 'avoir' (tener) con emociones físicas."},
  {level:2, es:"¿Dónde está el baño?", ans:["Où","sont","les","toilettes"], note:"Où sont les toilettes? = ¿Dónde están los baños? 'Les toilettes' es siempre plural en francés."},
  {level:2, es:"Quiero un café.", ans:["Je","voudrais","un","café"], note:"Je voudrais = quisiera (cortés). Más educado que 'je veux' (quiero)."},
  {level:3, es:"Ayer fui al mercado.", ans:["Hier","je","suis","allé","au","marché"], note:"Suis allé = fui (passé composé). Los verbos de movimiento usan être como auxiliar."},
  {level:3, es:"¿Cuánto cuesta esto?", ans:["Combien","ça","coûte"], note:"Combien ça coûte? = ¿Cuánto cuesta? Informal. Formal: Combien cela coûte-t-il?"},
  {level:3, es:"Si tuviera tiempo, viajaría.", ans:["Si","j'avais","du","temps","je","voyagerais"], note:"Conditionnel: Si + imparfait + conditionnel présent."}
];
