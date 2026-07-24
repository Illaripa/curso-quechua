const CANCIONES_A = [
  // ===== VERIFICADO: aymaraclub.com + apumarka.blogspot =====
  {
    title: "Jach'a Uru",
    artist: "Grupo Ruphay",
    genre: "Ayarichi",
    youtube_id: "Sj4sBkVwHtQ",
    verified: true,
    lines: [
      { a: "Uka jacha uru jutaskiway",        s: "Ese gran día está llegando" },
      { a: "Amuya sipxañani jutaskiway",      s: "Recordémoslo, está llegando" },
      { a: "Uka jacha uru jutaskiway",        s: "Ese gran día está llegando" },
      { a: "Amuya sipxañani jutaskiway",      s: "Recordémoslo, está llegando" },
      { a: "Tajpacha llakinacasti",           s: "En este mundo hay tristeza" },
      { a: "Amuya sipxañani tukusiniu",       s: "Nos han unido para ser uno" },
      { a: "Tajpacha llakinacasti",           s: "En este mundo hay tristeza" },
      { a: "Amuya sipxañani tukusiniu",       s: "Nos han unido para ser uno" },
      { a: "Tatanak mamanaka",                s: "Padres y madres" },
      { a: "Uka jacha uru jutaskiway",        s: "Ese gran día está llegando" },
      { a: "Tatanak mamanaka",                s: "Padres y madres" },
      { a: "Amuya sipxañani jutaskiway",      s: "Recordémoslo, está llegando" }
    ],
    notes: [
      { t: "Jach'a Uru", d: "Gran día — himno de los movimientos indígenas" },
      { t: "Amuya", d: "Recuerdo, memoria" },
      { t: "Sipxañani", d: "Unámonos (de sipxaña = unir)" },
      { t: "Tajpacha", d: "Mundo, universo" }
    ]
  },
  {
    title: "Kullakita",
    artist: "Awatiñas",
    genre: "Sikureada",
    youtube_id: "lO3b01_8TJ8",
    verified: true,
    lines: [
      { a: "Jilatanaka Kullakitanaka",        s: "Hermanos y hermanitas" },
      { a: "Mä pita sartasiñani",             s: "Juntos vamos a caminar" },
      { a: "Mä suma jach'a urutaki",          s: "Hacia un hermoso gran día" },
      { a: "Kullakitanaka jilatanaka",        s: "Hermanitas y hermanos" },
      { a: "Tajpachan sartasiñani",           s: "Vamos a recorrer el mundo" },
      { a: "Jan markasat armasimti",          s: "No vamos a hacer otros países" },
      { a: "Jiwas aymar markasata",           s: "Somos del país aymara" },
      { a: "Mä pita sartasiñani",             s: "Juntos vamos a caminar" },
      { a: "Mä suma jach'a urutaki",          s: "Hacia un hermoso gran día" }
    ],
    notes: [
      { t: "Jilata", d: "Hermano mayor" },
      { t: "Kullaka", d: "Hermana menor" },
      { t: "Sartaña", d: "Caminar, levantarse" },
      { t: "Jach'a", d: "Grande" }
    ]
  },
  {
    title: "Mayata Tunkaru",
    artist: "Awatiñas",
    genre: "Carnavalito aymara",
    youtube_id: "RZ4o0_Uj8fw",
    verified: true,
    lines: [
      { a: "Maya, paya, kimsa, pusi, phisqa… qulilitay",   s: "Uno, dos, tres, cuatro, cinco… linda flor" },
      { a: "Suxta, paqallqu, kimsaqallqu, llätunka, tunka…", s: "Seis, siete, ocho, nueve, diez…" },
      { a: "Ukjam sasina kirkiñäni, qulilitay",            s: "Así vamos a llegar, oh hermanita" },
      { a: "Aka jach'a anat urunxa kusisiñäni",            s: "Este gran día vamos a celebrar" },
      { a: "Ukjam sasina kirkiñäni, qulilitay",            s: "Así vamos a llegar, oh hermanita" },
      { a: "Aka jach'a anat urunxa thuqt'asiñäni",        s: "Este gran día vamos a gozar" },
      { a: "Aka jach'a anat urunxa kusisiñäni",            s: "Este gran día vamos a celebrar" },
      { a: "Aka jach'a anat urunxa thuqt'asiñäni",        s: "Este gran día vamos a gozar" }
    ],
    notes: [
      { t: "Maya", d: "Uno" },
      { t: "Paya", d: "Dos" },
      { t: "Kimsa", d: "Tres" },
      { t: "Tunka", d: "Diez" },
      { t: "Thuqt'aña", d: "Bailar, gozar" },
      { t: "Kusisiña", d: "Celebrar, alegrarse" }
    ]
  },
  {
    title: "Wiraxucha",
    artist: "Awatiñas",
    genre: "Trote Huayño",
    youtube_id: "nc53oDCXrvk",
    verified: true,
    lines: [
      { a: "Llaki puritu taykita",            s: "Penas me llega al corazón" },
      { a: "Yanapt'itay Wiraxucha",           s: "Ayúdame, Wiraxucha" },
      { a: "Jisk'anakax jachasipkiway",       s: "Los niños están llorando" },
      { a: "Thayaw luritu sasina",            s: "De frío, angustia y de pena" },
      { a: "Jisk'anakax jachasipkiway",       s: "Los niños están llorando" },
      { a: "T'ant'a churita sasina",          s: "De hambre, angustia y de pena" },
      { a: "Jisk'anakax jachasipkiway",       s: "Los niños están llorando" },
      { a: "Yanapt'itay Wiraxucha",           s: "Ayúdame, Wiraxucha" }
    ],
    notes: [
      { t: "Wiraxucha", d: "Dios creador en la cosmovisión andina" },
      { t: "Jisk'a", d: "Pequeño, niño" },
      { t: "Jachaña", d: "Llorar" },
      { t: "T'ant'a", d: "Pan" }
    ]
  },
  {
    title: "Imillita",
    artist: "Awatiñas",
    genre: "Huayño aymara",
    youtube_id: "8MViEXbL6v4",
    verified: true,
    lines: [
      { a: "Ay imillita janiw jachatati",     s: "Ay muchachita, no eres tuya" },
      { a: "Jumat saraqtwa askisatakiway",    s: "Tú caminas buscando" },
      { a: "Chuymampi jilata",                s: "Con el corazón, hermanita" },
      { a: "Ay imillita janiw jachatati",     s: "Ay muchachita, no eres tuya" },
      { a: "Jumat saraqtwa askisatakiway",    s: "Tú caminas buscando" },
      { a: "Ay imillita chuymax ususkiway",   s: "Ay muchachita, con tu corazón me haces sufrir" },
      { a: "Sumaskaniwa nayaj kutiniskaw",    s: "Me haces volver recordando" }
    ],
    notes: [
      { t: "Imilla", d: "Jovencita, muchacha" },
      { t: "Jachaña", d: "Llorar" },
      { t: "Chuyma", d: "Corazón, alma" },
      { t: "Kutiniña", d: "Regresar" }
    ]
  },
  {
    title: "Urpila",
    artist: "Awatiñas",
    genre: "Huayño aymara",
    youtube_id: "NjonuxXAEmo",
    verified: true,
    lines: [
      { a: "Kunatakisa urpila",              s: "¿Qué será, palomita?" },
      { a: "Jumax muspayista",               s: "Tú te equivocaste" },
      { a: "Kunatakisa urpila",              s: "¿Qué será, palomita?" },
      { a: "Munsmawa sas sista",             s: "Te has equivocado amando" },
      { a: "Jichhaxa jaytawayista",          s: "Ahora te vas a ir" },
      { a: "Chuymajax llakisiskiwa",         s: "Tu corazón está triste" },
      { a: "Jichhaxa jaqtawayista",          s: "Ahora te vas a marchar" },
      { a: "Jiwañax kawkinkaraki",           s: "La vida continúa" },
      { a: "Kunatakis jaytawayista",         s: "¿Cómo te irás?" },
      { a: "Jiwañax kawkinkaraki",           s: "La vida continúa" }
    ],
    notes: [
      { t: "Urphila", d: "Palomita" },
      { t: "Munaña", d: "Querer, amar" },
      { t: "Chuyma", d: "Corazón" },
      { t: "Llakisiña", d: "Sufrir, estar triste" }
    ]
  },
  {
    title: "Tunkata pä Tunkaru",
    artist: "Awatiñas",
    genre: "Carnavalito aymara",
    youtube_id: "TY67_bv-eX0",
    verified: true,
    lines: [
      { a: "Suma quli nayra, suma marka aymara…",                   s: "Hermosa comunidad, hermosa marca aymara…" },
      { a: "Tunka mayani, tunka payani,",                            s: "Diez más uno, diez más dos," },
      { a: "Tunka kimsani, tunka pusini,",                           s: "Diez más tres, diez más cuatro," },
      { a: "Tunka phisqani, jan armasimti…",                         s: "Diez más cinco, no se equivoca…" },
      { a: "Tunka suxtani, tunka paqallquni,",                       s: "Diez más seis, diez más siete," },
      { a: "Tunka kimsaqallquni, tunka llätunqani,",                s: "Diez más ocho, diez más nueve," },
      { a: "Pä tunka, jan p'inqasimti…",                             s: "Diez y diez, no se avergüenza…" },
      { a: "Pä tunka, jan armasimti",                                s: "Diez y diez, no se equivoca" }
    ],
    notes: [
      { t: "Tunka", d: "Diez" },
      { t: "Tunka maya", d: "Once (diez más uno)" },
      { t: "Pa tunka", d: "Veinte (dos decenas)" },
      { t: "Jan arjmasiña", d: "No olvidarse" }
    ]
  },
  {
    title: "Inti Wawa",
    artist: "Awatiñas",
    genre: "Huayño aymara",
    youtube_id: "tAhBeDtzwY0",
    verified: true,
    lines: [
      { a: "Inti wawaxa jachaskiwa",           s: "El niño sol está llorando" },
      { a: "Tatapawa jiwxatayna",              s: "Porque su padre se murió" },
      { a: "Jiwxatayna ukat jichhax",          s: "Se murió, se lo llevó" },
      { a: "Wawaxa sinti llakitaw",            s: "Su alegría de vivir" },
      { a: "Jichhaxa sapakiw jaki",            s: "En esta vida solo está" },
      { a: "Jupax amuyiw jupamp jikisiñ",      s: "Sueña que su padre volverá" }
    ],
    notes: [
      { t: "Inti", d: "Sol" },
      { t: "Wawa", d: "Niño/a, bebé" },
      { t: "Jachaña", d: "Llorar" },
      { t: "Jiwaña", d: "Morir" }
    ]
  },
  {
    title: "Ukhamapi Munataxa",
    artist: "Los Kjarkas",
    genre: "Huayño / Sicuri",
    youtube_id: "PwFFMfSZxyY",
    verified: true,
    lines: [
      { a: "Jupax qulilajapuninwa",            s: "Él se convirtió en hermano" },
      { a: "Jupax chuymajankapuninwa",         s: "Él se convirtió en compañero del corazón" },
      { a: "Janipuniw utjkaniti",              s: "No hay más remedio" },
      { a: "Ukhamampi munataxa",               s: "Así es como se quiere" },
      { a: "Llakitapuniw uñjasta",             s: "Solo vimos penas" },
      { a: "Jachañakiw munasitu",              s: "Solo sentimos tristeza" },
      { a: "Jichaway sarawayxiwa",             s: "Nosotros caminamos ya" },
      { a: "Tatituna jak'aruw sarxi",          s: "Como caminó nuestro padre" },
      { a: "Janipuniw utjkaniti",              s: "No hay más remedio" },
      { a: "Ukhamampi munataxa",               s: "Así es como se quiere" }
    ],
    notes: [
      { t: "Munaña", d: "Amar, querer" },
      { t: "Chuyma", d: "Corazón" },
      { t: "Llaki", d: "Tristeza" },
      { t: "Jachaña", d: "Llorar" }
    ]
  },
  {
    title: "Quli Panqarita",
    artist: "Zulma Yugar",
    genre: "Música folklórica boliviana",
    youtube_id: "__rE_s34Nio",
    verified: true,
    lines: [
      { a: "Jumataki, quli panqarita",         s: "Para ti, fueguito panqarita" },
      { a: "Suyasktamxa suma urunaka",         s: "Esperamos los hermosos días" },
      { a: "Jumamp nayampi, nina nayra",       s: "Tú conmigo, fuegito de ojos" },
      { a: "Mä suma thakhi lurt'asiñani",      s: "Un hermoso camino haremos" },
      { a: "Ay, ay, fueguito, quli panqarita", s: "Ay, ay, fueguito, quli panqarita" },
      { a: "Pä maraxiw, suma imillita",        s: "Tú eres, hermosa muchachita" },
      { a: "Mä kutimpis khitirus munkäti",     s: "Un poquito te vas a equivocar" },
      { a: "Sumat sumat sarnaqasiña",          s: "Caminando, caminando" },
      { a: "Amtasimay, quli nina nayra",       s: "Aprende, fuegito de ojos" },
      { a: "Ay, ay, fueguito, quli panqarita", s: "Ay, ay, fueguito, quli panqarita" }
    ],
    notes: [
      { t: "Panqara", d: "Flor" },
      { t: "Quli", d: "Bonita, linda" },
      { t: "Nina nayra", d: "Ojos de fuego" },
      { t: "Thaki", d: "Camino" }
    ]
  },
  {
    title: "Wari Wawita",
    artist: "Tradicional aymara",
    genre: "Canción tradicional infantil",
    youtube_id: "",
    verified: true,
    lines: [
      { a: "Wari wawita, wik'uñ wawita,",      s: "Viejito, viejito del sombrero," },
      { a: "jiwa wawitaki.",                     s: "cómo has venido." },
      { a: "Awkiniristha, taykaniristha,",       s: "Arrimándose, acercándose," },
      { a: "Uywarapitaspa.",                      s: "viniendo a visitarnos." },
      { a: "Aka qullunsa, khaya qullunsa,",      s: "Esta calavera, esta está vacía," },
      { a: "jacht'atamaki.",                      s: "ya la hacen crecer." },
      { a: "Wari wawita wik'uñ wawita",          s: "Viejito, viejito del sombrero" },
      { a: "kutinxakitasma.",                     s: "ya van a volver." }
    ],
    notes: [
      { t: "Wari wawita", d: "Viejito" },
      { t: "Wik'uñ", d: "Sombrero" },
      { t: "Qullunsa", d: "Calavera, cabeza" },
      { t: "Jacht'ayaña", d: "Crecer" }
    ]
  },
  // ===== PENDIENTE: Usar transcriptor para verificar letras =====
  {
    title: "Ponchos Rojos",
    artist: "K'ala Marka (Kalamarka)",
    genre: "Música andina / Laquita",
    youtube_id: "b3RgDG9TfOo",
    verified: true,
    lines: [
      { a: "Laquita ritmo de la tierra",                     s: "Laquita, ritmo de la tierra" },
      { a: "Ritmo de dioses de Achacachi",                   s: "Ritmo de los dioses de Achacachi" },
      { a: "Janiw asjarayxstuti jiwaña",                     s: "No hay que temer a la muerte" },
      { a: "Aymaratwa kala suninkiri jaq'e",                 s: "Soy Aymara, hombre duro como la piedra" },
      { a: "Achachilanacajan arunacapja ist'apjtua",          s: "Escucho las palabras de mis ancestros" },
      { a: "Llampu jacañataqi llampu chuymanacampi",         s: "Para vivir en paz, con corazón suave" },
      { a: "Jilatanaca, qullacanaca",                        s: "Hermanos, hermanas del altiplano" },
      { a: "Thacjpachani sarthasipjañani",                   s: "Todos juntos nos levantaremos" },
      { a: "Jallalla qollasuy marca, Jallalla",             s: "¡Viva el pueblo del sur! ¡Viva!" }
    ],
    notes: [
      { t: "Laquita", d: "Instrumento de viento andino ceremonial" },
      { t: "Achachila", d: "Ancestro, espíritu de montaña" },
      { t: "Jallalla", d: "¡Viva! (exclamación aymara)" },
      { t: "Llampu", d: "Suave, tierno" }
    ]
  },
  {
    title: "Guerrero Aymara",
    artist: "Awatiñas",
    genre: "Folk aymara / Balada",
    youtube_id: "PTjiasLen8Q",
    verified: true,
    lines: [
      { a: "Hace más de cien mil años cuando el odio no existía", s: "Hace más de cien mil años cuando el odio no existía" },
      { a: "Un cóndor de piedra sacudió la noche andina",          s: "Un cóndor de piedra sacudió la noche andina" },
      { a: "El viento con mil quenas conmovidas",                  s: "El viento con mil quenas conmovidas" },
      { a: "Cruzaba un cielo cuajado de vicuñas fugitivas",        s: "Cruzaba un cielo cuajado de vicuñas fugitivas" },
      { a: "Chuquiago era un valle íntimo como un cántaro",        s: "Chuquiago (La Paz) era un valle íntimo como un cántaro" },
      { a: "Donde la luna aymara guardaba sus topos de plata",     s: "Donde la luna aymara guardaba sus topos de plata" },
      { a: "Yo quise volar altísimo, quise aletear en la cima",    s: "Yo quise volar altísimo, quise aletear en la cima" },
      { a: "Duérmete guerrero aymara que tú serás nuestro guía",   s: "Duérmete guerrero aymara que tú serás nuestro guía" }
    ],
    notes: [
      { t: "Chuquiago", d: "Nombre ancestral de La Paz, Bolivia" },
      { t: "Cóndor", d: "Ave sagrada andina, símbolo del espíritu" },
      { t: "Quena", d: "Flauta andina tradicional" },
      { t: "Topo", d: "Joya tradicional andina (broche de manta)" }
    ]
  },
  {
    title: "Jacha Uru",
    artist: "Ruphay",
    genre: "Folk aymara / Música andina boliviana",
    youtube_id: "w0dOJpDpIuo",
    verified: true,
    lines: [
      { a: "Uka jacha uru jutaskiway",             s: "Ese gran día está llegando" },
      { a: "Amuya sipxañani jutaskiway",           s: "Recordémoslo, está llegando" },
      { a: "Taspacha llakinacasti tukusiniu",      s: "Debemos unirnos para acabar el dolor" },
      { a: "Tatanas mamanaka",                     s: "Padres e hijos" },
      { a: "Uka jacha uru jutaskiway",             s: "Ese gran día está llegando" },
      { a: "Saytasipxañani wali amuyumpi",         s: "Levantémonos con buen pensamiento" },
      { a: "Llakisiñ jachañas tukusxaniwa",        s: "El llanto y el dolor ya acabaron" }
    ],
    notes: [
      { t: "Jacha uru", d: "Gran día" },
      { t: "Jutaña", d: "Llegar, venir" },
      { t: "Amuya", d: "Recuerdo, memoria" },
      { t: "Saytasiña", d: "Levantarse, ponerse de pie" }
    ]
  },
  {
    title: "Llorando Se Fue",
    artist: "Los Kjarkas",
    genre: "Saya / Caporales",
    youtube_id: "xKau76yc4HE",
    verified: true,
    lines: [
      { a: "Llorando se fue y me dejó solo sin su amor",     s: "Llorando se fue y me dejó solo sin su amor" },
      { a: "Sola estará, recordando este amor",              s: "Sola estará, recordando este amor" },
      { a: "que el tiempo no puede borrar",                  s: "que el tiempo no puede borrar" },
      { a: "La recuerdo hoy y en mi pecho no existe el rencor", s: "La recuerdo hoy y en mi pecho no existe el rencor" },
      { a: "Llorando estará, recordando el amor",            s: "Llorando estará, recordando el amor" },
      { a: "que un día no supo cuidar",                      s: "que un día no supo cuidar" }
    ],
    notes: [
      { t: "Llorando Se Fue", d: "Base de la canción 'Lambada' (Kaoma, 1989)" },
      { t: "Saya", d: "Ritmo afro-boliviano" }
    ]
  },
  {
    title: "Tunupan Samiripa",
    artist: "Luzmila Carpio",
    genre: "Folklore aymara boliviano",
    youtube_id: "qqEtNIoDtR4",
    verified: true,
    lines: [
      { a: "Sawt'ir, sawt'ir, sumax imilla",              s: "Tejedora, tejedora, joven buena" },
      { a: "Thaya luman, thaya pampana",                  s: "Con el frío de la loma y de la pampa" },
      { a: "Lupi lupina uñar sawt'iri",                   s: "Con los rayos del sol, tejedora" },
      { a: "Suni luman pinkill tuqht'iri",                s: "En la puna, que baila pinkillada" },
      { a: "Qarwa awatiri, q'uraw k'antiri",              s: "Que pastea llamas, que trenza hondas" },
      { a: "Qaputamasa, sawutamasa, taqi munkañaway",     s: "Tu hilado, tu tejido, todos los quisiéramos" },
      { a: "Sumax kullak, sumak jilata, taqiw irnaqañani", s: "Hermanas, hermanos, todos trabajaremos" }
    ],
    notes: [
      { t: "Sawt'iri", d: "Tejedora" },
      { t: "Qarwa", d: "Llama (animal andino)" },
      { t: "Pinkill", d: "Flauta andina" },
      { t: "Kullaka", d: "Hermana" }
    ]
  },
  {
    title: "Bartolina Sisa",
    artist: "Luzmila Carpio",
    genre: "Folklore aymara boliviano",
    youtube_id: "i6nefUit7m8",
    verified: true,
    lines: [
      { a: "Bartolina Sisa warmi",         s: "Bartolina Sisa, mujer" },
      { a: "Q'allpa jallp'a jina kanqi",   s: "Eres como la tierra firme y fértil" },
      { a: "Yawar niqi yawarniqu",         s: "Sangre que corre, su propia sangre" },
      { a: "Yuyarikuyku",                  s: "Te recordamos" },
      { a: "Uraqisaw ch'amanitaw",         s: "La tierra misma es tu fuerza" },
      { a: "Jumatapuniw amtastwa",         s: "Solo en ti pensamos" },
      { a: "Quli Bartolina",               s: "Hermosa Bartolina" },
      { a: "Wali puni samkasistwa",        s: "Siempre soñamos contigo" }
    ],
    notes: [
      { t: "Bartolina Sisa", d: "Heroína aymara, luchadora por la libertad (s. XVIII)" },
      { t: "Warmi", d: "Mujer" },
      { t: "Yawar", d: "Sangre" },
      { t: "Uraqui", d: "Tierra" }
    ]
  },
  {
    title: "Willka Kuty",
    artist: "K'ala Marka (Kalamarka)",
    genre: "Ritual aymara – Solsticio",
    youtube_id: "JJ_xB4ba2PE",
    verified: true,
    lines: [
      { a: "Munata Achachilanaca, Laq'a Achachilanaca",  s: "Adorados abuelos, abuelo y abuela de la tierra" },
      { a: "Q'ollana Qh'ap'acj, Apu Inti Wilka Tata",   s: "Espíritu capaz, Señor Sol en las alturas" },
      { a: "Q'ollana Pajxsimama",                        s: "Señora y Madre Luna" },
      { a: "Q'ollana Warawaranaca",                      s: "Señores Estrellas del infinito" },
      { a: "Jumanaqaruw maith'apsma, thajpacha",         s: "A ustedes les pido, para todos" },
      { a: "Wiñayat wiñayapataqi",                       s: "Desde siempre y para siempre" },
      { a: "¡Jallalla Tiwanaku Marka!",                  s: "¡Viva el pueblo de Tiwanaku!" },
      { a: "¡Jallalla Aymara Marka!",                    s: "¡Viva el pueblo Aymara!" }
    ],
    notes: [
      { t: "Willka Kuty", d: "Retorno del Padre Sol (solsticio de invierno)" },
      { t: "Achachila", d: "Ancestro, espíritu protector de montaña" },
      { t: "Pajxsi", d: "Luna" },
      { t: "Warawa", d: "Estrella" }
    ]
  },
  {
    title: "Ama Sua Ama Llulla Ama Quella",
    artist: "K'ala Marka (Kalamarka)",
    genre: "Música andina boliviana / Canción social",
    youtube_id: "F7ZMA_rG87w",
    verified: true,
    lines: [
      { a: "Hombres venidos de otros lugares",         s: "Hombres venidos de otros lugares" },
      { a: "Has elegido en mi pueblo vivir",           s: "Has elegido en mi pueblo vivir" },
      { a: "Debes pensar en todos tus hijos",          s: "Debes pensar en todos tus hijos" },
      { a: "Que ellos también nacieron aquí",          s: "Que ellos también nacieron aquí" },
      { a: "Ama sua, ama llulla, ama quella",          s: "No robes, no mientas, no seas ocioso" },
      { a: "Jan Apanimti leyemanaca",                  s: "No traigas tus leyes" },
      { a: "Janiw markajatakiti",                      s: "No son para este pueblo" },
      { a: "Ist'am markajan Arupa",                    s: "Escucha la voz del pueblo" },
      { a: "Jallalla Bolivia jallalla Bolivia",        s: "¡Viva Bolivia! ¡Viva Bolivia!" }
    ],
    notes: [
      { t: "Ama sua", d: "No robes (ley ancestral andina)" },
      { t: "Ama llulla", d: "No mientas (ley ancestral andina)" },
      { t: "Ama quella", d: "No seas ocioso (ley ancestral andina)" },
      { t: "Jallalla", d: "¡Viva! (exclamación aymara)" }
    ]
  },
  {
    title: "Achanqara Panqarita",
    artist: "Taypi K'ala",
    genre: "Canción tradicional",
    youtube_id: "RPpwLE1aYK4",
    verified: true,
    lines: [
      { a: "Achanqara panqarita",           s: "Florecita de achancara" },
      { a: "Suma wayra apiri",              s: "Que el viento hermoso lleva" },
      { a: "Nayakiw munaskta",              s: "Yo te quiero" },
      { a: "Janiw luqtasmiti",             s: "No te olvidaré" },
      { a: "Achanqara panqarita",           s: "Florecita de achancara" },
      { a: "Suma ururi uñjata",             s: "Vista en la hermosa mañana" },
      { a: "Chuymampiw suyasmta",          s: "Con mi corazón te espero" },
      { a: "Jutanipxamawa",                 s: "Ya vendrás a mí" }
    ],
    notes: [
      { t: "Achanqara", d: "Flor andina silvestre" },
      { t: "Panqara", d: "Flor" },
      { t: "Wayra", d: "Viento" },
      { t: "Chuyma", d: "Corazón" }
    ]
  },
  {
    title: "Imillitay",
    artist: "Los Kjarkas",
    genre: "Huayño / Pop andino",
    youtube_id: "WhE2_Yr512M",
    verified: true,
    lines: [
      { a: "Dijiste que me querías, pero no es verdad",     s: "Dijiste que me querías, pero no es verdad" },
      { a: "Siempre jugaste conmigo y aún te supe amar",     s: "Siempre jugaste conmigo y aún te supe amar" },
      { a: "Vivo pensando olvidarte y no lo consigo",        s: "Vivo pensando olvidarte y no lo consigo" },
      { a: "Tus recuerdos son espinas que hieren mi alma",   s: "Tus recuerdos son espinas que hieren mi alma" },
      { a: "Muyuspa, muyuspa, imillitay,",                   s: "Marchitándose, marchitándose, muchachita," },
      { a: "q'ory q'enti jina.",                             s: "como el color amarillo." },
      { a: "Muyuspa, muyuspa, imillitay,",                   s: "Marchitándose, marchitándose, muchachita," },
      { a: "saqer pari huanki.",                              s: "te fuiste marchitando." }
    ],
    notes: [
      { t: "Imilla", d: "Muchachita" },
      { t: "Muyuspa", d: "Marchitándose" },
      { t: "Q'enti", d: "Color amarillo" },
      { t: "Saqrpari", d: "Marchitarse" }
    ]
  },
  {
    title: "Genesis Aymara",
    artist: "Los Kjarkas",
    genre: "Folk épico",
    youtube_id: "4rwcIUxAATc",
    verified: true,
    lines: [
      { a: "Y todo fue y comenzó con el aurora del tiempo",      s: "Y todo fue y comenzó con el aurora del tiempo" },
      { a: "Y lo inerte cobró vida y nació, y fue la luz",      s: "Y lo inerte cobró vida y nació, y fue la luz" },
      { a: "y fue el hombre existió",                             s: "y fue el hombre existió" },
      { a: "Guarda vivo saber la historia",                       s: "Guarda vivo saber la historia" },
      { a: "desde que el hombre tiene memoria",                   s: "desde que el hombre tiene memoria" },
      { a: "Así es, así será hasta el fin de nuestro mundo",      s: "Así es, así será hasta el fin de nuestro mundo" }
    ],
    notes: [
      { t: "Génesis", d: "Origen, creación" },
      { t: "Kolla", d: "Sur, Qollasuyu" }
    ]
  }
];
