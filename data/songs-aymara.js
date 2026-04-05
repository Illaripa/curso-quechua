const CANCIONES_A = [
  {
    title: "Kullakita",
    artist: "Awatiñas",
    genre: "Música andina boliviana",
    youtube_id: "FY6qFaN8npI",
    lines: [
      { a: "Jilatanak, kullakitanak",       s: "Hermanos míos, hermanas mías" },
      { a: "Mapita sartasiñani",            s: "Levantémonos de una vez" },
      { a: "Masuma jach'a urutaki",         s: "Para ese gran día que nos espera" },
      { a: "Kullakitanaka jilatanak",       s: "Hermanas y hermanos míos" },
      { a: "Tajpachan sartasiñani",         s: "Levantémonos todos" },
      { a: "Janarunakasat armasimti",       s: "No te olvides de tu voz" },
      { a: "Jiwas aymar markasata",         s: "Por la causa de nuestro pueblo" },
      { a: "Mapita sartasiñani",            s: "Levantémonos de una vez" },
      { a: "Masuma jach'a urutaki",         s: "Para ese gran día que nos espera" }
    ],
    notes: [
      { t: "Jilata", d: "Hermano" },
      { t: "Kullaka", d: "Hermana" },
      { t: "Sartaña", d: "Levantarse" },
      { t: "Jach'a", d: "Grande" }
    ]
  },
  {
    title: "Mayata Tunkaru",
    artist: "Awatiñas",
    genre: "Canción de carnaval",
    youtube_id: "RZ4o0_Uj8fw",
    lines: [
      { a: "Maya, paya, kimsa, pusi, phisqa", s: "Uno, dos, tres, cuatro, cinco" },
      { a: "Suxta, paqallqu, kimsaqallqu, llatunka, tunka", s: "Seis, siete, ocho, nueve, diez" },
      { a: "Ukjam sasina kirkiñani, qulilita", s: "Diciendo así, sigamos el ritmo, linda" },
      { a: "Aka jach'a anat urunxa kusisiñani", s: "Vamos a alegrarnos en este día de carnaval" },
      { a: "Aka jach'a anat urunxa thuqt'asiñani", s: "Vamos a bailar en este día de carnaval" },
      { a: "Maya, paya, kimsa, pusi, phisqa", s: "Uno, dos, tres, cuatro, cinco" },
      { a: "Suxta, paqallqu, kimsaqallqu, llatunka, tunka", s: "Seis, siete, ocho, nueve, diez" }
    ],
    notes: [
      { t: "Maya", d: "Uno" },
      { t: "Paya", d: "Dos" },
      { t: "Kimsa", d: "Tres" },
      { t: "Tunka", d: "Diez" },
      { t: "Thuqt'aña", d: "Bailar" },
      { t: "Kusisiña", d: "Alegrarse" }
    ]
  },
  {
    title: "Imillita",
    artist: "Awatiñas",
    genre: "Huayno aymara",
    youtube_id: "8MViEXbL6v4",
    lines: [
      { a: "Ay imillita janiw jachatati",   s: "Ay jovencita, no llores" },
      { a: "Jumat saraqtwa askisatakiway",  s: "Por ti me voy, es por tu bien" },
      { a: "Chuymampi jilata",              s: "Con toda el alma, hermano/a" },
      { a: "Ay imillita janiw jachatati",   s: "Ay jovencita, no llores" },
      { a: "Jumat saraqtwa askisatakiway",  s: "Por ti me voy, es por tu bien" },
      { a: "Ay imillita chuymax ususkiway", s: "Ay jovencita, mi corazón te extraña" },
      { a: "Sumaskaniwa nayaj kutiniskaw",  s: "Estoy bien, yo volveré" }
    ],
    notes: [
      { t: "Imilla", d: "Jovencita, muchacha" },
      { t: "Jachaña", d: "Llorar" },
      { t: "Chuyma", d: "Corazón, alma" },
      { t: "Kutiniña", d: "Regresar" }
    ]
  },
  {
    title: "Ukhamampi Munataxa",
    artist: "Los Kjarkas",
    genre: "Música folklórica boliviana",
    youtube_id: "qQOAB9cl8-w",
    lines: [
      { a: "Jupax qulilajapuninwa",         s: "Ella era para mí la cosa más hermosa" },
      { a: "Jupax chuymajankapuninwa",      s: "Ella estaba muy dentro de mi corazón" },
      { a: "Janipuniw jutxaniti",           s: "Nunca más volverá a mí" },
      { a: "Ukhamampi munataxa",            s: "Alguien a quien quiera así" },
      { a: "Llakitapuniw uñjasta",          s: "Siempre me veo triste" },
      { a: "Jachañakiw munasitu",           s: "Solamente tengo ganas de llorar" },
      { a: "Jichaway sarawayxiwa",          s: "Ahora ya se ha ido" },
      { a: "Atitu jak'aru sarxi",           s: "Se ha ido cerca de Dios" },
      { a: "Janipuniw jutxaniti",           s: "Nunca más volverá a mí" },
      { a: "Ukhamampi munataxa",            s: "Alguien a quien quiera así" }
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
    youtube_id: "pKD7MHMno-Q",
    lines: [
      { a: "Jumataki, quli panqarita",      s: "Para ti, linda florecita" },
      { a: "Suyasktamxa suma urunaka",      s: "Aguardan días maravillosos" },
      { a: "Jumamp nayampo, nina nayra",    s: "Tú conmigo, ojos de fuego" },
      { a: "Ma suma thaki lurt'asiñami",    s: "Un buen camino forjaremos" },
      { a: "Pa maraxiw, suma imillita",     s: "Ya son dos años, buena jovencita" },
      { a: "Ma kutimpis khitirus munkati",  s: "No amaré a nadie nuevamente" },
      { a: "Sumat sumat sarnaqasiña",       s: "Debemos andar comprendiéndonos" },
      { a: "Amtasimay, quli nina nayra",    s: "Recuérdalo, ojos de fuego" },
      { a: "Quli panqarita qulilita",       s: "Linda florecita bonita" },
      { a: "Muytasa, muytasa",              s: "Girando, girando" }
    ],
    notes: [
      { t: "Panqara", d: "Flor" },
      { t: "Quli", d: "Bonita, linda" },
      { t: "Nina nayra", d: "Ojos de fuego" },
      { t: "Thaki", d: "Camino" }
    ]
  },
  {
    title: "Achanqara Panqarita",
    artist: "Tradicional aymara",
    genre: "Canción tradicional",
    youtube_id: "Kf3eAwVmkbw",
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
    title: "Tunkata Pa Tunkaru",
    artist: "Awatiñas",
    genre: "Folk aymara / Música andina",
    youtube_id: "TY67_bv-eX0",
    lines: [
      { a: "Suma qoli nayra",                          s: "Querida de ojos tiernos" },
      { a: "Suma marka aymara",                        s: "Querido pueblo aymara" },
      { a: "Tunka mayani, tunka payani",               s: "Once, doce" },
      { a: "Tunka kimsani, tunka pusini",              s: "Trece, catorce" },
      { a: "Tunka pishqani, jan arjmasimti",           s: "Quince, no te olvides" },
      { a: "Tunka suxtani, tunka paqallqoni",          s: "Dieciséis, diecisiete" },
      { a: "Tunka kimsaqallqoni, tunka llatunqani",    s: "Dieciocho, diecinueve" },
      { a: "Pa tunka, jan phinqasimti",                s: "Veinte, no te avergüences" }
    ],
    notes: [
      { t: "Tunka", d: "Diez" },
      { t: "Tunka maya", d: "Once (diez más uno)" },
      { t: "Pa tunka", d: "Veinte (dos decenas)" },
      { t: "Jan arjmasiña", d: "No olvidarse" }
    ]
  },
  {
    title: "Urphila",
    artist: "Awatiñas",
    genre: "Folk aymara / Música andina",
    youtube_id: "NjonuxXAEmo",
    lines: [
      { a: "Kunatakisa Urphila",          s: "¿Por qué, palomita?" },
      { a: "Jumax muspayista",            s: "Tú me has sorprendido" },
      { a: "Munsmawa sasista",            s: "Me dijiste 'te quiero'" },
      { a: "Jichhax jaytjawayista",       s: "Ahora me has dejado" },
      { a: "Chuymajax llakisiskiwa",      s: "Mi corazón está sufriendo" },
      { a: "Jichhax jaqtawayista",        s: "Ahora me has echado" },
      { a: "Jiwañax kawkinkaraki",        s: "¿Dónde encontraré la muerte?" },
      { a: "Kunatakis jaytjawayista",     s: "¿Por qué me has dejado?" }
    ],
    notes: [
      { t: "Urphila", d: "Palomita" },
      { t: "Munaña", d: "Querer, amar" },
      { t: "Chuyma", d: "Corazón" },
      { t: "Llakisiña", d: "Sufrir, estar triste" }
    ]
  },
  {
    title: "Jacha Uru",
    artist: "Savia Andina",
    genre: "Folk aymara / Música andina boliviana",
    youtube_id: "Q1UTH5od9YA",
    lines: [
      { a: "Uka jacha uru jutaskiway",             s: "Ese gran día está llegando" },
      { a: "Amuya sipxañani jutaskiway",           s: "Recordémoslo, está llegando" },
      { a: "Taspacha llakinacasti tukusiniu",       s: "Debemos unirnos para acabar el dolor" },
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
    title: "Wiraxucha",
    artist: "Awatiñas",
    genre: "Folk aymara / Música andina",
    youtube_id: "nc53oDCXrvk",
    lines: [
      { a: "Llaki puritu taykita",         s: "Penas me llevo en el corazón" },
      { a: "Yanapt'itay Wiraxucha",        s: "Ayúdame, Wiraxucha" },
      { a: "Jisk'anakax jachasipkiwa",     s: "Los niños están llorando" },
      { a: "Thayaw luritu sasina",         s: "De frío y de angustia" },
      { a: "T'ant'a churita sasina",       s: "De hambre y de pena" },
      { a: "Jisk'anakax jachasipkiwa",     s: "Los niños están llorando" },
      { a: "Yanapt'itay Wiraxucha",        s: "Ayúdame, Wiraxucha" }
    ],
    notes: [
      { t: "Wiraxucha", d: "Dios creador en la cosmovisión andina" },
      { t: "Jisk'a", d: "Pequeño, niño" },
      { t: "Jachaña", d: "Llorar" },
      { t: "T'ant'a", d: "Pan" }
    ]
  },
  {
    title: "Jichhapi Jichhanexa",
    artist: "Awatiñas",
    genre: "Folk aymara / Música andina",
    youtube_id: "zFihy4W36E8",
    lines: [
      { a: "Tatanaka, mamanaka",                       s: "Padres y madres" },
      { a: "Uka jach'a uru purinxiwa",                 s: "Ese gran día ha llegado" },
      { a: "Jichhapi jichhanixa",                      s: "Ahora es cuando" },
      { a: "Saytasipxañani wali amuyumpi",             s: "Levantémonos con buen pensamiento" },
      { a: "Llakisiñ jachañas tukusxaniwa",            s: "El llanto y el dolor ya acabaron" },
      { a: "Waynanak, tawaqunak",                      s: "Jóvenes y muchachas" },
      { a: "Sartasipxañani wali amuyumpi",             s: "Levantémonos con buen pensamiento" },
      { a: "Uka jach'a uru purinxiwa",                 s: "Ese gran día ha llegado" },
      { a: "Saytasipxañani inti jalsuntasa",           s: "Firmes, mirando al horizonte donde sale el sol" },
      { a: "Qullasuyu uraqi",                          s: "¡Tierra de Qullasuyu!" }
    ],
    notes: [
      { t: "Jichhapi", d: "Ahora mismo" },
      { t: "Waynak", d: "Jóvenes" },
      { t: "Tawaque", d: "Muchacha joven" },
      { t: "Qullasuyu", d: "Nombre ancestral de Bolivia" }
    ]
  }
];
