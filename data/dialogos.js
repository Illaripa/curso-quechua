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
  },
  // === Diálogos extendidos ===
  {
    id:'de1', book:'Vocab', color:'#e91e63',
    title:'Wañuy Wayta',
    subtitle:'En el mercado · At the market',
    context:'Kusi compra verduras en el mercado de su pueblo.',
    speakers:{Kusi:'#e91e63', Tia:'#2eadb5'},
    lines:[
      {s:'Kusi', q:'¡Imaynallam taytáy!', t:'¡Buenos días, señor!'},
      {s:'Tia', q:'¡Allinllam p\'inchay!', t:'¡Buenos días, hija!'},
      {s:'Kusi', q:'¿Ataw kintan papata?', t:'¿Cuánto cuesta la papa?'},
      {s:'Tia', q:'Pichqa solllata.', t:'Cinco soles.'},
      {s:'Kusi', q:'¿Ukchata kachkanchu?', t:'¿Está fresca?'},
      {s:'Tia', q:'Chaym kachkan, hamut\'a.', t:'Sí, está fresca, mira.'},
      {s:'Kusi', q:'Munani kinsa kiluta.', t:'Quiero tres kilos.'},
      {s:'Tia', q:'Ayllaway, chaypas mikhuyta.', t:'De nada, que aproveche.'}
    ],
    note:'-ta: sufijo de objeto directo (papata = la papa). -chu: marca de pregunta afirmativa (kachkanchu = ¿está?). Ataw/kintan = cuánto.'
  },
  {
    id:'de2', book:'Vocab', color:'#ff9800',
    title:'Ñan Taqiy',
    subtitle:'Pidiendo direcciones · Asking directions',
    context:'Un viajero pregunta cómo llegar al pueblo de Quispicanchi.',
    speakers:{Viajero:'#ff9800', Pasto:'#4caf50'},
    lines:[
      {s:'Viajero', q:'Buenos días, taytáy.', t:'Buenos días, señor.'},
      {s:'Pasto', q:'¡Allinllam!', t:'¡Estoy bien!'},
      {s:'Viajero', q:'¿Maypin kachkan Quispicanchi?', t:'¿Dónde está Quispicanchi?'},
      {s:'Pasto', q:'Chayta qhaway, ch\'iqan ñanpi yaykuy.', t:'Mira eso, entra por el camino angosto.'},
      {s:'Viajero', q:'¿Watuk kashan?', t:'¿Está lejos?'},
      {s:'Pasto', q:'Mana, ch\'iqalla watuq kashan.', t:'No, está cerca.'},
      {s:'Viajero', q:'Sulpayki, taytáy.', t:'Gracias, señor.'},
      {s:'Pasto', q:'Allin puriy.', t:'Buen viaje.'}
    ],
    note:'-pi: locativo (maypin = dónde). ch\'iqan = angosto/estrecho. watuq = lejos.'
  },
  {
    id:'de3', book:'Vocab', color:'#9c27b0',
    title:'Yachay Wasin',
    subtitle:'En la escuela · At school',
    context:'La maestra Ana enseña a los niños vocabulario en quechua.',
    speakers:{Ana:'#9c27b0', Wawa:'#00bcd4'},
    lines:[
      {s:'Ana', q:'¡Imaynallan, wawakuna!', t:'¡Buenos días, niños!'},
      {s:'Wawa', q:'¡Imaynallan mamáy!', t:'¡Buenos días, maestra!'},
      {s:'Ana', q:'¿Mayqitaq kay?', t:'¿Qué es esto?'},
      {s:'Wawa', q:'Intiymi!', t:'¡Es el sol!'},
      {s:'Ana', q:'Allinmi! ¿Imaynataq wasiymi?', t:'¡Muy bien! ¿Cómo se dice casa?'},
      {s:'Wawa', q:'Wasiymi!', t:'¡Casa!'},
      {s:'Ana', q:'¡Yupaychayki, wawallay!', t:'¡Gracias, niño!'},
      {s:'Wawa', q:'Munani yachayta.', t:'Quiero aprender.'}
    ],
    note:'-kuna: sufijo de plural (wawakuna = niños). -taq: sufijo interrogativo (mayqitaq = cuál). -llay: diminutivo afectuoso (wawallay = niño querido).'
  },
  {
    id:'de4', book:'Vocab', color:'#795548',
    title:'Chakra Takuy',
    subtitle:'En el campo · Farming',
    context:'Tayta Inti prepara la tierra para sembrar papas con su hijo.',
    speakers:{Inti:'#795548', Hijo:'#2196f3'},
    lines:[
      {s:'Inti', q:'Waway, hamuy chakra takunaypaq.', t:'Hijo, ven a ayudar a preparar la chacra.'},
      {s:'Hijo', q:'Ari, taytáy. Maytataq munanki?', t:'Sí, padre. ¿Qué quieres que haga?'},
      {s:'Inti', q:'Allpata rakiy, papa ch\'uta paq.', t:'Separa la tierra, para las semillas de papa.'},
      {s:'Hijo', q:'¿Chaypas tarpunki?', t:'¿Y luego siembras?'},
      {s:'Inti', q:'Chaym. Tamya hamunmi.', t:'Sí. Va a venir la lluvia.'},
      {s:'Hijo', q:'Allinmi, tarpuyta munani.', t:'Perfecto, quiero sembrar.'},
      {s:'Inti', q:'Yanapaway, waway.', t:'Ayúdame, hijo.'},
      {s:'Hijo', q:'Ari, taytáy. Kusisqam kani.', t:'Sí, padre. Estoy feliz.'}
    ],
    note:'-paq: sufijo de propósito (takunaypaq = para ayudar). ch\'uta = semilla. tamya = lluvia.'
  },
  {
    id:'de5', book:'Vocab', color:'#e91e63',
    title:'Wayk\'uy',
    subtitle:'Cocinando juntos · Cooking together',
    context:'Mamá Qawa y su hija preparan pachamanca.',
    speakers:{Qawa:'#e91e63', Hija:'#4caf50'},
    lines:[
      {s:'Qawa', q:'Wawallay, hamuy wayk\'unaypaq.', t:'Hija, ven a cocinar.'},
      {s:'Hija', q:'Ari, mama. ¿Taqtaq wayk\'unki?', t:'Sí, mamá. ¿Qué vas a cocinar?'},
      {s:'Qawa', q:'Pachamancta wayk\'unantsa.', t:'Vamos a hacer pachamanca.'},
      {s:'Hija', q:'Munani! ¿Maytataq munanki?', t:'¡Me encanta! ¿Qué necesitas?'},
      {s:'Qawa', q:'Papata cecchay, yanapasaway.', t:'Pela las papas, ayúdame.'},
      {s:'Hija', q:'Chaym, mamallay. ¿Ukchata munanki?', t:'Sí, mamita. ¿Quieres fresca?'},
      {s:'Qawa', q:'Chaym. Wayk\'uyta riqsini.', t:'Sí. Sé cocinar.'},
      {s:'Hija', q:'Munani wayk\'uyta yachayta.', t:'Quiero aprender a cocinar.'}
    ],
    note:'-antsa: sufijo inclusivo (wayk\'unantsa = vamos a cocinar). -llay: diminutivo. cecchar = pelar.'
  },
  {
    id:'de6', book:'Vocab', color:'#ff5722',
    title:'Wisñituq',
    subtitle:'Invitación a fiesta · Party invitation',
    context:'Killa invita a su amiga Qawa a una fiesta en el pueblo.',
    speakers:{Killa:'#ff5722', Qawa:'#673ab7'},
    lines:[
      {s:'Killa', q:'¡Qawa, imaynallan!', t:'¡Qawa, qué tal!'},
      {s:'Qawa', q:'¡Allinllam Killa!', t:'¡Estoy bien, Killa!'},
      {s:'Killa', q:'Urman kachkan tampu.', t:'Hay fiesta en el pueblo.'},
      {s:'Qawa', q:'¿Punchawqtaq?', t:'¿Qué día?'},
      {s:'Killa', q:'Kawarqan punchawpi, tuta.', t:'El sábado por la noche.'},
      {s:'Qawa', q:'Allinmi, munani hamuyta.', t:'Perfecto, quiero ir.'},
      {s:'Killa', q:'Sayk\'usqa hamuy.', t:'Ven temprano.'},
      {s:'Qawa', q:'Chaym, tupananchikkama.', t:'Sí, hasta vernos.'}
    ],
    note:'-taq: interrogativo (punchawqtaq = ¿qué día?). kawarqan = sábado. sayk\'usq = temprano.'
  },
  {
    id:'de7', book:'Vocab', color:'#009688',
    title:'Tinkuy Llaqtapi',
    subtitle:'Visitando un pueblo · Visiting a town',
    context:'Gabriela visita el pueblo de su abuela en los Andes.',
    speakers:{Gabriela:'#009688', Abuela:'#e91e63'},
    lines:[
      {s:'Gabriela', q:'¡Mama, imaynallan!', t:'¡Abuela, qué tal!'},
      {s:'Abuela', q:'¡Añaschayki! ¡Hamurqanki!', t:'¡Sorpresa! ¡Viniste!'},
      {s:'Gabriela', q:'Munani qhawayta llaqtata.', t:'Quiero ver el pueblo.'},
      {s:'Abuela', q:'Allinmi, ñan taqunki.', t:'Perfecto, vamos a caminar.'},
      {s:'Gabriela', q:'¿Maypin kachkan tamya?', t:'¿Dónde está la plaza?'},
      {s:'Abuela', q:'Chaypi kachkan, punchawpi.', t:'Está allí, en la plaza.'},
      {s:'Gabriela', q:'Hatunmi llaqta!', t:'¡El pueblo es grande!'},
      {s:'Abuela', q:'Kusisqam kani, wawallay.', t:'Estoy feliz, nieta.'}
    ],
    note:'-ki: posesivo de segunda persona. -sqa: participio pasado (kusisqam = estoy feliz). añaschayki = sorpresa.'
  },
  {
    id:'de8', book:'Vocab', color:'#f44336',
    title:'Yanapay',
    subtitle:'En el hospital · At the hospital',
    context:'Kusi lleva a su hijo enfermo al hospital del pueblo.',
    speakers:{Kusi:'#f44336', Doctor:'#2196f3'},
    lines:[
      {s:'Kusi', q:'Taytáy, waway wañuchkan.', t:'Doctor, mi hijo está enfermo.'},
      {s:'Doctor', q:'¿Imaynataq ñak\'ariykanki?', t:'¿Cómo se siente?'},
      {s:'Kusi', q:'Ñawiypi waqllanmi.', t:'Lloraba con los ojos.'},
      {s:'Doctor', q:'Ñawiykita qhawakuni.', t:'Déjame examinarte.'},
      {s:'Kusi', q:'Allinlláytay, taytáy.', t:'Está bien, doctor.'},
      {s:'Doctor', q:'Mana hatunmi. Kaymi munanki.', t:'No es grave. Toma esto.'},
      {s:'Kusi', q:'Sulpayki, taytáy.', t:'Gracias, doctor.'},
      {s:'Doctor', q:'Allin ruray. Wañuyta kawsay.', t:'Hazlo bien. Es para la salud.'}
    ],
    note:'-ypi: locativo (ñawiypi = en los ojos). -llan: solo. ñak\'ariy = sentirse enfermo. wañuy = salud.'
  },
  {
    id:'de9', book:'Vocab', color:'#3f51b5',
    title:'Tayta chaw Wawa',
    subtitle:'Padre e hijo · Father and son',
    context:'Un padre enseña a su hijo a pescar en el río.',
    speakers:{Tayta:'#3f51b5', Hijo:'#ff9800'},
    lines:[
      {s:'Tayta', q:'Waway, hamuy yakuñanpaq.', t:'Hijo, ven a pescar.'},
      {s:'Hijo', q:'Munani! ¿Maypitaq munanki?', t:'¡Quiero! ¿A dónde vamos?'},
      {s:'Tayta', q:'Mayu chaypi kachkan.', t:'El río está allá.'},
      {s:'Hijo', q:'¿Asllataq kashanki?', t:'¿Vamos solos?'},
      {s:'Tayta', q:'Mana, mamáytaq hamunki.', t:'No, mamá viene también.'},
      {s:'Hijo', q:'Allinmi, kusisqam kani.', t:'Perfecto, estoy feliz.'},
      {s:'Tayta', q:'Yakuqta qhaway, chaymi rikuchiy.', t:'Mira el agua, eso es la corriente.'},
      {s:'Hijo', q:'Yachani, taytáy.', t:'Entiendo, padre.'}
    ],
    note:'-ñan: propósito (yakuñanpaq = para pescar). -sllataq: solo. -mi: evidencia directa.'
  },
  {
    id:'de10', book:'Vocab', color:'#00bcd4',
    title:'Rantinay',
    subtitle:'En la tienda · At the store',
    context:'Qawa compra ropa nueva para la fiesta del pueblo.',
    speakers:{Qawa:'#00bcd4', Tenda:'#e91e63'},
    lines:[
      {s:'Qawa', q:'Imaynallan, taytáy.', t:'Buenos días, señor.'},
      {s:'Tenda', q:'¡Allinllam! ¿Maytaq munanki?', t:'¡Estoy bien! ¿Qué quieres?'},
      {s:'Qawa', q:'Munani k\'uspita.', t:'Quiero una camisa.'},
      {s:'Tenda', q:'¿Mayqin k\'uspi munanki?', t:'¿Qué camisa quieres?'},
      {s:'Qawa', q:'Puka k\'uspita.', t:'Una camisa roja.'},
      {s:'Tenda', q:'Chaymi, kaypi kachkan.', t:'Mira, aquí está.'},
      {s:'Qawa', q:'¿Ataw kintan?', t:'¿Cuánto cuesta?'},
      {s:'Tenda', q:'Willa solllata.', t:'Veinte soles.'}
    ],
    note:'-taq: interrogativo (maytaq = cuál). k\'uspi = camisa. willa = veinte.'
  },
  {
    id:'de11', book:'Vocab', color:'#8bc34a',
    title:'Punchaw Paqarin',
    subtitle:'Planes para mañana · Making plans',
    context:'Killa y Gabriela planean qué hacer mañana.',
    speakers:{Killa:'#8bc34a', Gabriela:'#ff5722'},
    lines:[
      {s:'Killa', q:'Gabriela, ¿maytaq ruranki paqarin?', t:'Gabriela, ¿qué harás mañana?'},
      {s:'Gabriela', q:'Munani yaykuyta chakrañanpaq.', t:'Quiero ir a trabajar en la chacra.'},
      {s:'Killa', q:'Chaym, ñuqapas munani.', t:'Sí, yo también quiero.'},
      {s:'Gabriela', q:'¿Huktaq hamunki?', t:'¿Vienes sola?'},
      {s:'Killa', q:'Mana, taytáytaq hamunki.', t:'No, mi padre viene también.'},
      {s:'Gabriela', q:'Allinmi, kawsananchu?', t:'Perfecto, ¿nos vemos?'},
      {s:'Killa', q:'Tupananchikkama sayk\'usqanpi.', t:'Hasta vernos, temprano.'},
      {s:'Gabriela', q:'Chaym, allin puriy.', t:'Sí, buen viaje.'}
    ],
    note:'-taq: interrogativo. -ñan: propósito. paqarin = mañana. sayk\'usqanpi = tempranito.'
  },
  {
    id:'de12', book:'Vocab', color:'#ff9800',
    title:'Ñawin',
    subtitle:'Recordando el pasado · Remembering the past',
    context:'Dos abuelos recuerdan cómo era la vida antes.',
    speakers:{Mamá:'#ff9800', Tayta:'#795548'},
    lines:[
      {s:'Mamá', q:'¿Yuyarankichu punchaw mayñataq?', t:'¿Recuerdas aquellos días?'},
      {s:'Tayta', q:'Ari, yuyarani. Allin kachkalla.', t:'Sí, recuerdo. Era bonito.'},
      {s:'Mamá', q:'¿Maypi kachkallakunki?', t:'¿Dónde vivíamos?'},
      {s:'Tayta', q:'Qusqupi kachkani, wasiñanpi.', t:'Vivía en Cusco, en mi casa.'},
      {s:'Mamá', q:'¿Imaynataq kachkalla?', t:'¿Cómo era?'},
      {s:'Tayta', q:'Rurasiqkuna kachkallakun.', t:'Los campesinos eran así.'},
      {s:'Mamá', q:'Kusisqalla kachkani.', t:'Éramos felices.'},
      {s:'Tayta', q:'Chaym, mana hatunmi rikuy.', t:'Sí, no había tanto que ver.'}
    ],
    note:'-lla: pasado (kachkalla = era). -kuna: plural. yuyaray = recordar. rurasiq = campesino.'
  },
  {
    id:'de13', book:'Vocab', color:'#2196f3',
    title:'Yaku Takiy',
    subtitle:'En el río · At the river',
    context:'Los niños juegan y cantan junto al río.',
    speakers:{Mara:'#2196f3', Jhon:'#4caf50'},
    lines:[
      {s:'Mara', q:'¡Jhon, hamuy yakuñanpaq!', t:'¡Jhon, ven a jugar en el agua!'},
      {s:'Jhon', q:'Munani! ¿Ukchata kachkanchu?', t:'¡Quiero! ¿Está fría?'},
      {s:'Mara', q:'Chaym, ukchata kachkan.', t:'Sí, está fría.'},
      {s:'Jhon', q:'Allinmi, takuyta takunki.', t:'Perfecto, cantemos.'},
      {s:'Mara', q:'Takiy! Yaku takiy!', t:'¡Canta! ¡Canción del agua!'},
      {s:'Jhon', q:'Kusisqam kani, takini.', t:'Estoy feliz, cantando.'},
      {s:'Mara', q:'Maypas takuy.', t:'El río también canta.'},
      {s:'Jhon', q:'Yaku kusikunmi.', t:'El agua se alegra.'}
    ],
    note:'-kun: tercera persona plural. takuy = cantar. ukchata = frío.'
  },
  {
    id:'de14', book:'Vocab', color:'#9c27b0',
    title:'Ch\'aska',
    subtitle:'En la ceremonia · At a ceremony',
    context:'Un paqo realiza una ofrenda a la Pachamama.',
    speakers:{Paqo:'#9c27b0', Comunero:'#ff9800'},
    lines:[
      {s:'Paqo', q:'Hamuy, kawsanchikpaq.', t:'Ven, para nuestra vida.'},
      {s:'Comunero', q:'Allinmi, taytáy.', t:'Bien, padre.'},
      {s:'Paqo', q:'Chayta qhaway, Pachamamata.', t:'Mira eso, a la Pachamama.'},
      {s:'Comunero', q:'¡Añay, Pachamama!', t:'¡Gracias, Pachamama!'},
      {s:'Paqo', q:'Ayllu kachkayta munani.', t:'Quiero que la comunidad viva.'},
      {s:'Comunero', q:'Kusisqam kani, taytáy.', t:'Estoy feliz, padre.'},
      {s:'Paqo', q:'Chaym, ayni kachkan.', t:'Sí, hay reciprocidad.'},
      {s:'Comunero', q:'Añay, Paqo. Tupananchikkama.', t:'Gracias, Paqo. Hasta vernos.'}
    ],
    note:'-ta: objeto directo. kawsay = vida. ayni = reciprocidad. paqo = sacerdote andino.'
  },
  {
    id:'de15', book:'Vocab', color:'#607d8b',
    title:'Ñuqachkaykuna',
    subtitle:'Dos amigos viejos · Two old friends',
    context:'Inti y Waman se reencuentran después de mucho tiempo.',
    speakers:{Inti:'#607d8b', Waman:'#e91e63'},
    lines:[
      {s:'Inti', q:'¡Waman, imaynallan!', t:'¡Waman, qué tal!'},
      {s:'Waman', q:'¡Añaschayki! ¿Kutimurqankichu?', t:'¡Sorpresa! ¿Regresaste?'},
      {s:'Inti', q:'Chaym, kutimurqani.', t:'Sí, regresé.'},
      {s:'Waman', q:'¿Maypi kachkarqanki?', t:'¿Dónde estabas?'},
      {s:'Inti', q:'Lima pi kachkani.', t:'Estaba en Lima.'},
      {s:'Waman', q:'¿Imaynataq kachkalla?', t:'¿Cómo era allá?'},
      {s:'Inti', q:'Mana kusisqalla. Llaqtapi kusisqalla.', t:'No era feliz. En el pueblo sí.'},
      {s:'Waman', q:'Chaym, llaqta kusikun.', t:'Sí, el pueblo alegra.'}
    ],
    note:'-rqan: pasado. -pi: locativo. añaschayki = sorpresa.'
  },
  {
    id:'de16', book:'Vocab', color:'#00897b',
    title:'Ñuqallapash',
    subtitle:'En la cocina · In the kitchen',
    context:'Mamá Qawa enseña a su hija a hacer chuño.',
    speakers:{Qawa:'#00897b', Hija:'#ff9800'},
    lines:[
      {s:'Qawa', q:'Wawallay, hamuy chuño ruraypaq.', t:'Hija, ven a hacer chuño.'},
      {s:'Hija', q:'Ari, mama. ¿Imaynataq ruranki?', t:'Sí, mamá. ¿Cómo lo haces?'},
      {s:'Qawa', q:'Papata intipi phuchchanki.', t:'Secas la papa al sol.'},
      {s:'Hija', q:'¿Kutichiyta munanki?', t:'¿La vuelves?'},
      {s:'Qawa', q:'Chaym, kutichini tuta.', t:'Sí, la vuelvo por la noche.'},
      {s:'Hija', q:'¿Tutapi?', t:'¿De noche?'},
      {s:'Qawa', q:'Chaym, tuta kutichini.', t:'Sí, de noche la vuelvo.'},
      {s:'Hija', q:'Yachani, mama. Sulpayki.', t:'Entiendo, mamá. Gracias.'}
    ],
    note:'-paq: propósito. phuchchay = secar. kutichiy = voltear. tutapi = de noche.'
  },
  {
    id:'de17', book:'Vocab', color:'#ff5722',
    title:'Wañuchisqa',
    subtitle:'En la clínica · At the clinic',
    context:'Kusi lleva a su abuela al centro de salud.',
    speakers:{Kusi:'#ff5722', Abuela:'#9c27b0', Doctor:'#2196f3'},
    lines:[
      {s:'Kusi', q:'Taytáy, mamáy qhawañan.', t:'Doctor, mi abuela está débil.'},
      {s:'Abuela', q:'Mana hatunmi, wawallay.', t:'No es grave, nieta.'},
      {s:'Doctor', q:'¿Imaynataq ñak\'ariykanki, mamáy?', t:'¿Cómo se siente, señora?'},
      {s:'Abuela', q:'Ñawiypi rikchariy kashan.', t:'Tengo mareo en los ojos.'},
      {s:'Doctor', q:'Allinmi, kaymi munanki.', t:'Bien, toma esto.'},
      {s:'Kusi', q:'¿Ataw watuq kashan?', t:'¿Está lejos la clínica?'},
      {s:'Doctor', q:'Mana, ch\'iqalla.', t:'No, está cerca.'},
      {s:'Abuela', q:'Sulpayki, taytáy.', t:'Gracias, doctor.'}
    ],
    note:'-ñan: propósito. ñak\'ariy = sentirse enfermo. rikchariy = mareo.'
  }
];
