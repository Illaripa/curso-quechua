const DIALOGOS_EXT = [
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
    note:'-pi: locativo (maypin = dónde). -k: sufijo de pregunta. ch\'iqan = angosto/estrecho. watuq = lejos.'
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
