const CONT_Q={
  oraciones:{title:"Oraciones reales",color:"#2dd4bf",pieces:[
    {type:"Familia",title:"La familia en los Andes",sub:"V\u00EDnculos familiares",lines:[
      {q:"Mamay sumaqta mikhunta wayk'un.",s:"Mi madre cocina la comida hermosamente."},
      {q:"Taytay urqup patanpi llamkaqmi.",s:"Mi padre trabaja en la cima de la monta\u00F1a."},
      {q:"\u00D1a\u00F1ay wakakunata michiqmi purin.",s:"Mi hermana va a pastorear las vacas."},
      {q:"Wawqey pukllachkanmi.",s:"Mi hermano est\u00E1 jugando."},
      {q:"Familiypi kusiymi tiyakun.",s:"La alegr\u00EDa habita en mi familia."}
    ],notes:[{t:"-y posesivo",d:"Mamay=mi madre. Taytay=mi padre. \u00D1a\u00F1ay=mi hermana."},{t:"-mi evidencial",d:"Llamkaqmi=trabaja (lo s\u00E9 de primera mano)."},{t:"Wayk'uy",d:"Cocinar."}]},
    {type:"Naturaleza",title:"La Pachamama habla",sub:"La madre tierra y el cosmos",lines:[
      {q:"Pachamama kawsaqmi, mana wa\u00F1unchu.",s:"La Madre Tierra est\u00E1 viva, no muere."},
      {q:"Inti llaqsimuqtin, urququna q'espirinku.",s:"Cuando el sol sale, las monta\u00F1as brillan."},
      {q:"Wayra sinchi phukumun tutapi.",s:"El viento sopla fuerte en la noche."},
      {q:"Yaku purispa tukuy kawsaqkunata mikhuchiwan.",s:"El agua fluyendo alimenta a todos los seres vivos."},
      {q:"Allpa mikhuchiwan, kawsayta qowan.",s:"La tierra nos alimenta, nos da vida."}
    ],notes:[{t:"-qtin cuando",d:"Llaqsimuqtin=cuando sale."},{t:"Mana...chu",d:"Mana wa\u00F1unchu=no muere."},{t:"Q'espiriy",d:"Brillar."}]},
    {type:"Emociones",title:"El coraz\u00F3n quechua",sub:"Sentimientos y estados internos",lines:[
      {q:"Sunquy kusisqam, qanta rikusqayrayku.",s:"Mi coraz\u00F3n est\u00E1 alegre por haberte visto."},
      {q:"Llakiywan hunt'asqam kachkani.",s:"Estoy lleno de tristeza."},
      {q:"Munakuymi unay kawsaypim kachkan.",s:"El amor existe desde tiempos antiguos."},
      {q:"Manchakuni tuta ch'isita.",s:"Tengo miedo en la noche oscura."},
      {q:"Kusikuymi aswan kallpata quwan.",s:"La alegr\u00EDa da m\u00E1s fuerza."}
    ],notes:[{t:"Sunquy",d:"Mi coraz\u00F3n / mi interior emocional."},{t:"-rayku causa",d:"Qanta rikusqayrayku=por haberte visto."},{t:"Manchakuy",d:"Tener miedo."}]},
    {type:"Vida diaria",title:"Un d\u00EDa en los Andes",sub:"Actividades cotidianas",lines:[
      {q:"Tutamanta hatariytawan, yakuta upyani.",s:"Apenas al despertar, tomo agua."},
      {q:"Chakrata llamkanaypaq purinimi.",s:"Voy a trabajar en el campo."},
      {q:"Mikhunata mikhuspa, rimayku.",s:"Comiendo la comida, conversamos."},
      {q:"Sapa p'unchay qillqani yachayniyta.",s:"Cada d\u00EDa escribo lo que aprendo."},
      {q:"Tutapi pu\u00F1uytawan rikch'arini.",s:"Por la noche duermo y luego me despierto."}
    ],notes:[{t:"-ytawan apenas",d:"Hatariytawan=apenas al despertar."},{t:"-spa gerundio",d:"Mikhuspa=comiendo."},{t:"Llamkay",d:"Trabajar."}]}
  ]},
  poesia:{title:"Poes\u00EDa Quechua",color:"#a78bfa",pieces:[
    {type:"Poema tradicional",title:"Orqo Sonqo",sub:"Coraz\u00F3n de Monta\u00F1a",poem:true,lines:[
      {q:"Urquy, urquy, hatun urquy,",s:"Monta\u00F1a, monta\u00F1a, gran monta\u00F1a,"},
      {q:"imayn\u00E1m sunqoyki?",s:"\u00BFc\u00F3mo est\u00E1 tu coraz\u00F3n?"},
      {q:"Puyuwan p'ampasqa,",s:"Cubierta de nubes,"},
      {q:"riti churarasqa,",s:"vestida de nieve,"},
      {q:"Manam qanchu wa\u00F1unki,",s:"T\u00FA no mueres,"},
      {q:"kawsaqmi kachkanki.",s:"est\u00E1s vivo."}
    ],notes:[{t:"Imayn\u00E1m",d:"\u00BFC\u00F3mo est\u00E1...?"},{t:"Kawsay/Wa\u00F1uy",d:"Vivir/morir."}]},
    {type:"Poema moderno",title:"Yakum Rimarin",sub:"El agua habla",poem:true,lines:[
      {q:"Yakum rimarin urqumanta,",s:"El agua habla desde la monta\u00F1a,"},
      {q:"'ama qonqawaychu!'",s:"'\u00A1no me olvides!'"},
      {q:"Ichaqa yaku mana saykusqachu,",s:"Pero el agua no se cansa,"},
      {q:"sapa p'unchay phawamun,",s:"cada d\u00EDa corre,"},
      {q:"kawsayta aparimun.",s:"trayendo vida."}
    ],notes:[{t:"Ama...chu",d:"Prohibici\u00F3n: \u00A1No me olvides!"},{t:"Ichaqa",d:"Pero, sin embargo."}]},
    {type:"Harawy",title:"Kusikuymi",sub:"Soy feliz",poem:true,lines:[
      {q:"Kusikuymi, kusikuymi,",s:"Soy feliz, soy feliz,"},
      {q:"kay allpapi kawsasqayrayku.",s:"por vivir en esta tierra."},
      {q:"Intim q'allariq,",s:"El sol que brilla,"},
      {q:"paykuna sunqoypi tiyakun.",s:"ellos viven en mi coraz\u00F3n."},
      {q:"Mana imam llakichiwanchu",s:"Nada me entristece"},
      {q:"kay sumaq pachapi.",s:"en este mundo hermoso."}
    ],notes:[{t:"-sqa+rayku",d:"Kawsasqayrayku=por vivir aqu\u00ED."},{t:"Tiyakuy",d:"Habitar."}]}
  ]},
  ensayos:{title:"Textos cortos",color:"#fb7185",pieces:[
    {type:"Filosof\u00EDa",title:"Sumaq Kausay",sub:"El Buen Vivir",essay:true,paras:[
      {q:"Sumaq Kausay nisqaqa mana qolqellachu. Kay rimaymi nin: allinpi kawsakuy, Pachamamawan tinkuykuspa, runakunawan kusikuykuspa.",s:"El llamado Sumaq Kausay no es solo riqueza material. Dice: vivir bien, conect\u00E1ndose con la Madre Tierra y alegr\u00E1ndose con la gente."},
      {q:"Andino runakunapaqmi, kawsayqa mana sapanchu. Aylluwan, sach'akunawan, wakakunawan, intiwanpis kawsanku.",s:"Para el hombre andino la vida no es solitaria. Viven con la comunidad, los \u00E1rboles, los animales y el sol."}
    ],notes:[{t:"Ayllu",d:"Comunidad familiar extendida."},{t:"-nisqa",d:"Lo llamado / nominalizador."}]},
    {type:"Historia",title:"Tawantinsuyu",sub:"El Imperio de las Cuatro Regiones",essay:true,paras:[
      {q:"Tawantinsuyuqa tawa suyukunam karqa: Chinchaysuyu, Antisuyu, Qollasuyu, Kuntisuyu.",s:"El Tawantinsuyu era cuatro regiones: Chinchaysuyu, Antisuyu, Qollasuyu, Kuntisuyu."},
      {q:"Quipukunawanmi willakuyta qillqarqaku. Quipuqa waskakuna, tullpukunawan hunt'asqa.",s:"Registraban informaci\u00F3n con quipus. El quipu son cuerdas con colores."}
    ],notes:[{t:"Tawa+suyu",d:"Cuatro regiones."},{t:"-rqa-",d:"Pasado: karqa=era/fue."}]}
  ]}
};
