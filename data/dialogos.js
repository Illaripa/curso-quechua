// Rimanakuy — Diálogos interactivos
// Fuente: Rimanakusun 1 & 2 (PUCP / Fondo Editorial)
const DIALOGOS = [
  {
    id:'d1', book:'R1·1', color:'#2eadb5',
    title:'Napaykunapaq',
    subtitle:'Saludos · Greeting each other',
    context:'Mayu conoce a Sara en la calle y la saluda.',
    speakers:{Mayu:'#2eadb5', Sara:'#c8a000'},
    lines:[
      {s:'Mayu', q:'¿Allinllachu, mamáy?',      t:'¿Estás bien?'},
      {s:'Sara', q:'¡Allinllam taytáy!',         t:'¡Estoy bien!'},
      {s:'Mayu', q:'¿Pitaq kanki?',              t:'¿Quién eres?'},
      {s:'Sara', q:'Saram kani. ¿Qamrí?',        t:'Soy Sara. ¿Y tú?'},
      {s:'Mayu', q:'Mayum kani.',                t:'Soy Mayu.'}
    ],
    note:'-m / -mi: sufijo de evidencia directa. Indica que el hablante afirma algo que sabe con certeza. Saram kani = "Soy Sara (de verdad)".'
  },
  {
    id:'d2', book:'R1·2', color:'#8b5cf6',
    title:'Raqikunapaq',
    subtitle:'Despedidas · Saying goodbye',
    context:'Sara y Mayu se encuentran de casualidad, conversan y luego se despiden.',
    speakers:{Mayu:'#2eadb5', Sara:'#c8a000'},
    lines:[
      {s:'Mayu', q:'Sara, ¿maytataq richkanki?',  t:'Sara, ¿adónde vas?'},
      {s:'Sara', q:'Pukllaqmi richkani.',          t:'Voy a jugar.'},
      {s:'Mayu', q:'Allinlláyá.',                 t:'Qué bien.'},
      {s:'Sara', q:'Qampas allinlláyá.',           t:'Tú también, qué bien.'},
      {s:'Mayu', q:'¡Paqarinkama Sara!',           t:'¡Hasta mañana Sara!'},
      {s:'Sara', q:'¡Paqarinkama Mayu!',           t:'¡Hasta mañana Mayu!'}
    ],
    note:'-q indica propósito o destino: pukllaqmi richkani = "voy A jugar". Otras despedidas: ¡Tupananchikkama! (hasta vernos), ¡Huk punchawkama! (hasta mañana).'
  },
  {
    id:'d3', book:'R1·3', color:'#059669',
    title:'Formal · Informal',
    subtitle:'Presentaciones · Meeting people',
    context:'Dos formas de presentarse: formal (con personas mayores) e informal (entre amigos).',
    speakers:{A:'#059669', B:'#c8a000'},
    lines:[
      {s:'A', q:'¡Imaynallam mamáy!',            t:'¡Buenos días, señora!'},
      {s:'B', q:'¡Allinllam taytáy!',             t:'¡Estoy bien, señor!'},
      {s:'A', q:'¿Mayqintaq kachkanki?',          t:'¿Quién es usted? (formal)'},
      {s:'B', q:'Rogeliom kachkani mamáy.',        t:'Soy Rogelia, señora.'},
      {s:'A', q:'¡Allinllachu!',                  t:'¿Cómo estás? (informal)'},
      {s:'B', q:'¡Allinllam!',                    t:'¡Estoy bien!'},
      {s:'A', q:'¿Pitaq kanki?',                  t:'¿Quién eres? (informal)'},
      {s:'B', q:'Anam kani. ¿Qamrí?',             t:'Soy Ana. ¿Y tú?'}
    ],
    note:'Formal: ¿Mayqintaq kachkanki? — ¿Quién es usted? Informal: ¿Pitaq kanki? — ¿Quién eres? · mamáy / taytáy = señora / señor (términos respetuosos de afecto).'
  },
  {
    id:'d4', book:'R2·1', color:'#f59e0b',
    title:'¿Maypitaq kachkan?',
    subtitle:'Ubicación · Where is it?',
    context:'Túpac y Rogelia buscan el teléfono celular perdido por toda la casa.',
    speakers:{Rogelia:'#e91e63', Túpac:'#2eadb5'},
    lines:[
      {s:'Rogelia', q:'Túpac, ¿maypitaq chillikuyki kachkan?',    t:'Túpac, ¿dónde está tu teléfono?'},
      {s:'Túpac',  q:'Chuspaypim kachkan.',                       t:'Está en mi bolsillo.'},
      {s:'Rogelia', q:'Ya, ¿maypitaq chuspayki kachkan?',         t:'Sí, ¿y dónde está tu bolsillo?'},
      {s:'Túpac',  q:'Chay hamparapa sikinpim.',                   t:'Está debajo de esa silla.'},
      {s:'Rogelia', q:'Manataq kaypiqakanchu.',                    t:'No está aquí.'},
      {s:'Túpac',  q:'Chaynaqa televisorpa waqtanpim kachkan.',    t:'Entonces debe estar al lado del televisor.'},
      {s:'Rogelia', q:'Manam kanchu.',                             t:'No está.'},
      {s:'Túpac',  q:'Ichapas punkupa qipanpi.',                   t:'Quizás está detrás de la puerta.'},
      {s:'Rogelia', q:'An, chaypim kachkan. Rikurquni.',           t:'¡Sí, ahí está! Lo encontré.'}
    ],
    note:'-pi es el sufijo locativo: wasipi (en la casa). Posiciones: uku (dentro), hawa (fuera/sobre), ñawpa (delante), qipa (detrás), alliq (derecha), ichuq (izquierda), chawpi (centro), pata (encima), chimpa (al frente), waqta (al lado), siki (debajo).'
  },
  {
    id:'d5', book:'R2·2', color:'#6366f1',
    title:'¿Imatataq rurachkanki?',
    subtitle:'Actividades · What are you doing?',
    context:'William llama por teléfono a su hermana Rogelia para saber qué hace la familia.',
    speakers:{William:'#6366f1', Rogelia:'#e91e63'},
    lines:[
      {s:'William', q:'¡Panichalláy, ¿imaynallam kachkanki?',     t:'Hermanita, ¿cómo estás?'},
      {s:'Rogelia', q:'Allinllam kachkani, turicháy.',              t:'Estoy bien, hermanito.'},
      {s:'William', q:'¿Imatataq rurachkanki?',                     t:'¿Qué estás haciendo?'},
      {s:'Rogelia', q:'Ñuqaqa samachkanim; pisipasqam kachkani.',   t:'Estoy descansando; estoy cansada.'},
      {s:'William', q:'¿Imatataq taytanchik Ernesto rurachkan?',    t:'¿Qué está haciendo nuestro papá Ernesto?'},
      {s:'Rogelia', q:'Payqa puñuchkanmi.',                         t:'Él está durmiendo.'},
      {s:'William', q:'¿Imatataq wawaykikuna rurachkanku?',         t:'¿Qué están haciendo tus hijos?'},
      {s:'Rogelia', q:'Paykunaqa quchapim tuytuchkanku.',            t:'Ellos están nadando en la piscina.'},
      {s:'William', q:'Kusa, chayna minchakama panicháy.',           t:'Bien, hasta mañana hermanita.'},
      {s:'Rogelia', q:'Minchakama, turicháy.',                       t:'Hasta mañana, hermanito.'}
    ],
    note:'-chka indica aspecto progresivo (gerundio): samachkani (estoy descansando), puñuchkan (está durmiendo), tuytuchkanku (están nadando). Conjugación: -ni / -nki / -n / -nku.'
  },
  {
    id:'d6', book:'R2·3', color:'#dc2626',
    title:'Qaliwarmi',
    subtitle:'En el restaurante · Cooking verbs',
    context:'Sara visita el restaurante del chef Lu-Chu y pregunta qué están cocinando.',
    speakers:{Sara:'#c8a000', 'Lu-Chu':'#dc2626'},
    lines:[
      {s:'Sara',   q:'Tayta Lu-Chu, ¿kaychu tullpa wasiyki?',      t:'Tayta Lu-Chu, ¿es este tu restaurante?'},
      {s:'Lu-Chu', q:'Arí. Kaypim miski mikuykunata yanuniku.',     t:'Sí. Aquí cocinamos comida rica.'},
      {s:'Sara',   q:'Ah... Kunan, ¿imatataq Roberto rurachkan?',   t:'Ahora, ¿qué está haciendo Roberto?'},
      {s:'Lu-Chu', q:'Payqa runtutam tiqtichkan.',                   t:'Él está friendo huevos.'},
      {s:'Sara',   q:'¿Almari, imatataq rurachkan?',                t:'¿Y Alma, qué está haciendo?'},
      {s:'Lu-Chu', q:'Payqa chuñutam pasichkan.',                    t:'Ella está cociendo chuño.'},
      {s:'Sara',   q:'¿Ladyrí?',                                   t:'¿Y Lady?'},
      {s:'Lu-Chu', q:'Payqa quwitam kanchachkan.',                   t:'Ella está asando cuy.'},
      {s:'Sara',   q:'¿Feliperi?',                                  t:'¿Y Felipe?'},
      {s:'Lu-Chu', q:'Payqa maranpi saratam kutachkan.',             t:'Él está moliendo maíz en el batán.'}
    ],
    note:'-ta es el sufijo de objeto directo: runtuta tiqtichkan (está friendo EL huevo). Verbos de cocina: tiqtiy (freír), pasiy (cocer en agua), watyay (hornear), hamkay (tostar), kankay (asar), kutay (moler).'
  },
  {
    id:'d7', book:'R2·4', color:'#ea7c17',
    title:'Pachamanka',
    subtitle:'Verbos en grupo · Family activities',
    context:'Mayu llama a Brian desde Michigan; Brian está con su familia preparando una pachamanka.',
    speakers:{Mayu:'#2eadb5', Brian:'#ea7c17'},
    lines:[
      {s:'Mayu',  q:'¿Maypitaq kachkanki?',                        t:'¿Dónde estás?'},
      {s:'Brian', q:'Michiganpim, aylluywanmi kachkani.',           t:'En Michigan, estoy con mi familia.'},
      {s:'Mayu',  q:'¿Pikunawantaq chaypi kachkanki?',             t:'¿Con quiénes estás allí?'},
      {s:'Brian', q:'Taytamamaywan, paniykunawan wawqiykunawanpas.',t:'Con mis padres, hermanas y hermanos.'},
      {s:'Mayu',  q:'¿Imatataq rurachkankichik?',                   t:'¿Qué están haciendo ustedes?'},
      {s:'Brian', q:'Ñuqaykuqa pachamankatam rurachkaniku.',        t:'Estamos haciendo una pachamanka.'},
      {s:'Mayu',  q:'¡Añallaw! ¿Imatataq upyachkankichik?',        t:'¡Qué rico! ¿Qué están bebiendo?'},
      {s:'Brian', q:'Cervezatam, wakinqa vinotam waqtachkanku.',    t:'Cerveza, algunos están sirviendo vino.'},
      {s:'Mayu',  q:'¿Warmakunarí?',                               t:'¿Y los niños?'},
      {s:'Brian', q:'Paykunaqa yakullatam utaq gaseosat am upyachkanku.',t:'Ellos beben solo agua o gaseosa.'}
    ],
    note:'-kichik = 2ª persona plural: rurachkankichik (ustedes están haciendo). -iku = 1ª plural exclusiva: rurachkaniku (nosotros estamos haciendo). -wan = con: taytamaywan (con mis padres).'
  }
];
