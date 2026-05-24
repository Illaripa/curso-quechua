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
  },
  {
    id:'d8', book:'R1·4', color:'#0d9488',
    title:'Chay warmiqa pitataq?',
    subtitle:'Preguntar por personas · Who is that?',
    context:'Lucía llega a casa de Rosa y ve fotos en la pared. Pregunta por cada persona.',
    speakers:{Lucía:'#0d9488', Rosa:'#8b5cf6'},
    lines:[
      {s:'Lucía', q:'Chay warmiqa pitataq?',               t:'¿Quién es esa mujer?'},
      {s:'Rosa',  q:'Payqa mamáymi.',                       t:'Es mi mamá.'},
      {s:'Lucía', q:'¿Maypitaq kawsachkan?',               t:'¿Dónde vive?'},
      {s:'Rosa',  q:'Cuscopin kawsan.',                     t:'Vive en Cusco.'},
      {s:'Lucía', q:'¿Chay runaqa pitataq?',               t:'¿Y ese hombre, quién es?'},
      {s:'Rosa',  q:'Payqa taitáymi, Limapim kawsan.',      t:'Es mi papá, vive en Lima.'},
      {s:'Lucía', q:'¿Qanri, maypitaq kawsanki?',          t:'¿Y tú, dónde vives?'},
      {s:'Rosa',  q:'Ñuqaqa kaypin kawsani, Arequipapi.',  t:'Yo vivo aquí, en Arequipa.'}
    ],
    note:'pit- interrogativo: pitaq = quién. maypit- = dónde (con sufijo locativo -pi). -m/-mi = validador evidencial (información de primera mano).'
  },
  {
    id:'d9', book:'R1·5', color:'#7c3aed',
    title:'Imanasqataq?',
    subtitle:'Saludos y estado · Greetings',
    context:'Amigos se encuentran en el mercado y se preguntan cómo están.',
    speakers:{Carlos:'#7c3aed', Lidia:'#059669'},
    lines:[
      {s:'Carlos', q:'Imanasqataq, Lidia?',                t:'¿Cómo estás, Lidia?'},
      {s:'Lidia',  q:'Allinmi kachkani, qanrí?',            t:'Estoy bien, ¿y tú?'},
      {s:'Carlos', q:'Ñuqapis allinmi. ¿Maymanta?',        t:'Yo también estoy bien. ¿De dónde vienes?'},
      {s:'Lidia',  q:'Qhatum qhatumanta hamurani.',         t:'Vengo del mercado grande.'},
      {s:'Carlos', q:'¿Imatam rantirqanki?',               t:'¿Qué compraste?'},
      {s:'Lidia',  q:'Papata, sarata, kinuatawan.',         t:'Papa, maíz y quinua.'},
      {s:'Carlos', q:'¿Manachu kiwicha rantirqanki?',      t:'¿No compraste kiwicha?'},
      {s:'Lidia',  q:'Mana, tukukuqtinmi tukurqan.',       t:'No, ya se había acabado.'}
    ],
    note:'Imanasqa = ¿cómo estás? (lit. ¿qué te ha pasado?). -rqanki = pasado de 2ª persona: rantirqanki (tú compraste). -wan = y (enumeración): saratawan (y maíz).'
  },
  {
    id:'d10', book:'R2·5', color:'#b45309',
    title:'Llank\'ay',
    subtitle:'Trabajo y ocupaciones · Work',
    context:'Pedro y Ana se encuentran después de mucho tiempo. Se preguntan por sus trabajos.',
    speakers:{Pedro:'#b45309', Ana:'#2563eb'},
    lines:[
      {s:'Pedro', q:'¿Imastataq llank\'anki kunan?',        t:'¿En qué trabajas ahora?'},
      {s:'Ana',   q:'Yachachiqmi kani, iskuylapi.',         t:'Soy profesora, en la escuela.'},
      {s:'Pedro', q:'¿Imastataq yachachinki?',             t:'¿Qué enseñas?'},
      {s:'Ana',   q:'Runasimitam yachachini, wawaqunaman.', t:'Enseño quechua, a los niños.'},
      {s:'Pedro', q:'¡Allinmi! ¿Qanrí, maypitaq llank\'anki?', t:'¡Qué bueno! ¿Y tú, dónde trabajas?'},
      {s:'Pedro', q:'Chakrapi llank\'ani, tarpuqmi kani.',  t:'Trabajo en el campo, soy agricultor.'},
      {s:'Ana',   q:'¿Imatam tarpunki?',                   t:'¿Qué siembras?'},
      {s:'Pedro', q:'Papata, sarata, habastawan.',          t:'Papa, maíz y habas.'}
    ],
    note:'-mi kani = soy (verbo ser con validador): yachachiqmi kani (soy profesora, lo sé de primera mano). tarpuq = el que siembra → sustantivo agentivo.'
  },
  {
    id:'d11', book:'R2·6', color:'#dc2626',
    title:'Punchaw ruraykuna',
    subtitle:'Rutina diaria · Daily routine',
    context:'Julia le cuenta a su amiga cómo es un día típico suyo.',
    speakers:{Julia:'#dc2626', Amiga:'#0891b2'},
    lines:[
      {s:'Amiga', q:'¿Imastataq ruwanki paqarin?',          t:'¿Qué haces por la mañana?'},
      {s:'Julia', q:'Sapa paqarin, intiq llaqsimuqtinmi hatarichkani.', t:'Cada mañana me levanto cuando sale el sol.'},
      {s:'Amiga', q:'¿Manachu chiriqa?',                    t:'¿No hace frío?'},
      {s:'Julia', q:'Arí, chirim, ichaqa sumaqmi.',         t:'Sí, hace frío, pero es hermoso.'},
      {s:'Amiga', q:'¿Hinapiñataq?',                        t:'¿Y luego?'},
      {s:'Julia', q:'Unu apay, cocina ruway, ayllu michiy.', t:'Traigo agua, cocino, cuido la familia.'},
      {s:'Amiga', q:'¿Tutapiñataq?',                        t:'¿Y por la noche?'},
      {s:'Julia', q:'Ninata rawrachispa, takiyku rímayku.',  t:'Encendemos fuego y cantamos, conversamos.'}
    ],
    note:'sapa = cada: sapa paqarin (cada mañana). -spa = gerundio: rawrachispa (encendiendo). -yku = 1ª plural exclusiva: takiyku (nosotros cantamos, sin incluir al oyente).'
  },
  {
    id:'d12', book:'R1·6', color:'#059669',
    title:'Chay imastataq?',
    subtitle:'Identificar objetos · What is this?',
    context:'Un turista visita un mercado andino y pregunta por los productos que ve.',
    speakers:{Turista:'#059669', Vendedora:'#d97706'},
    lines:[
      {s:'Turista',   q:'Chay imastataq?',                  t:'¿Qué es eso?'},
      {s:'Vendedora', q:'Chayqa chuñum.',                   t:'Eso es chuño (papa deshidratada).'},
      {s:'Turista',   q:'¿Imaynatataq ruwanku chayqa?',     t:'¿Cómo lo hacen?'},
      {s:'Vendedora', q:'Chiripipim papata sayaychanku, chay qhipam ch\'aqchinku.', t:'En el frío de la noche secan la papa y después la exprimen.'},
      {s:'Turista',   q:'¿Kay laqa munapunichu?',           t:'¿Y este otro también es bueno?'},
      {s:'Vendedora', q:'Arí, kayqa kiwicha, hatun kallpayuqmi.', t:'Sí, esto es kiwicha, tiene mucha fuerza.'},
      {s:'Turista',   q:'¿Haykapim?',                       t:'¿Cuánto cuesta?'},
      {s:'Vendedora', q:'Iskay solespim chunka gramuta.',   t:'Diez gramos por dos soles.'}
    ],
    note:'Chayqa = eso (con tópico -qa). -tataq = interrogativo de identificación: imastataq (¿qué exactamente?). kayqa = esto (kay + qa). haykap- = ¿cuánto cuesta?'
  },
  {
    id:'d13', book:'R2·7', color:'#6366f1',
    title:'Millay chisi',
    subtitle:'Tiempo y clima · Weather',
    context:'Mariana llama por teléfono a su tía que vive en la sierra.',
    speakers:{Mariana:'#6366f1', Tía:'#e11d48'},
    lines:[
      {s:'Mariana', q:'¿Ima pacha chaypiqa?',               t:'¿Qué tiempo hace allá?'},
      {s:'Tía',     q:'Paranmi, parayachkanmi.',             t:'Está lloviendo, está lloviendo mucho.'},
      {s:'Mariana', q:'¿Chirichu?',                         t:'¿Hace frío?'},
      {s:'Tía',     q:'Arí, chakriyuqkunaqa llakishanaqllanmi.', t:'Sí, los que tienen chacra están muy preocupados.'},
      {s:'Mariana', q:'¿Inti lloqsinanpiñachu?',            t:'¿Ya va a salir el sol?'},
      {s:'Tía',     q:'Mana yachanichu, paqarim rikurisonqa.', t:'No sé, mañana veremos.'},
      {s:'Mariana', q:'¿Chakraykiqa allinchu?',             t:'¿Tu chacra está bien?'},
      {s:'Tía',     q:'Ari, papay wiñarichkanñam, Pachamamata yupaychani.', t:'Sí, mi papa ya está creciendo, agradezco a la Pachamama.'}
    ],
    note:'pacha = tiempo/clima. Para- = llover: parayachkan (está lloviendo con intensidad). -nqa = futuro: rikurisonqa (aparecerá). Yupaychay = agradecer, honrar.'
  },
  {
    id:'d14', book:'R2·8', color:'#0f766e',
    title:'Qhipa p\'unchaw',
    subtitle:'Planes y futuro · Future plans',
    context:'Dos jóvenes planifican qué van a hacer el fin de semana.',
    speakers:{Marco:'#0f766e', Vera:'#9333ea'},
    lines:[
      {s:'Marco', q:'¿Qhipa p\'unchawqa imatataq ruranki?',  t:'¿Qué vas a hacer el fin de semana?'},
      {s:'Vera',  q:'Mamayta watukuyman, Pisacpi kawsan.',   t:'Voy a visitar a mi mamá, vive en Pisac.'},
      {s:'Marco', q:'¿Imaynatataq rinki, buspim?',          t:'¿Cómo vas a ir, en bus?'},
      {s:'Vera',  q:'Arí, inti lloqsimuytawan rinqaykum.',  t:'Sí, me iré al amanecer.'},
      {s:'Marco', q:'¿Ñuqawanmi rinki?',                    t:'¿Vas conmigo?'},
      {s:'Vera',  q:'Arí ripuñanchik, allintam.',           t:'Sí, podemos irnos juntos, está bien.'},
      {s:'Marco', q:'¿Hayk\'aqtaq kutimunki?',              t:'¿Cuándo vas a volver?'},
      {s:'Vera',  q:'P\'unchaw tiqramuytawan kutimunqaykum.', t:'Vuelvo al anochecer.'}
    ],
    note:'-man = condicional/deseo: watukuyman (voy a visitar, quisiera visitar). -nqayki = futuro 1ª pers.: rinqaykum (me iré). haykaq = cuándo. tiqramuy = anochecer.'
  }
];
