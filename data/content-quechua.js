const CONT_Q={
  oraciones:{title:"Oraciones reales",color:"#2dd4bf",pieces:[
    {type:"Familia",title:"La familia en los Andes",sub:"Vínculos familiares",lines:[
      {q:"Mamay sumaqta mikhunta wayk'un.",s:"Mi madre cocina la comida hermosamente."},
      {q:"Taytay urqup patanpi llamkaqmi.",s:"Mi padre trabaja en la cima de la montaña."},
      {q:"Ñañay wakakunata michiqmi purin.",s:"Mi hermana va a pastorear las vacas."},
      {q:"Wawqey pukllachkanmi.",s:"Mi hermano está jugando."},
      {q:"Familiypi kusiymi tiyakun.",s:"La alegría habita en mi familia."}
    ],notes:[{t:"-y posesivo",d:"Mamay=mi madre. Taytay=mi padre. Ñañay=mi hermana."},{t:"-mi evidencial",d:"Llamkaqmi=trabaja (lo sé de primera mano)."},{t:"Wayk'uy",d:"Cocinar."}]},
    {type:"Naturaleza",title:"La Pachamama habla",sub:"La madre tierra y el cosmos",lines:[
      {q:"Pachamama kawsaqmi, mana wañunchu.",s:"La Madre Tierra está viva, no muere."},
      {q:"Inti llaqsimuqtin, urququna q'espirinku.",s:"Cuando el sol sale, las montañas brillan."},
      {q:"Wayra sinchi phukumun tutapi.",s:"El viento sopla fuerte en la noche."},
      {q:"Yaku purispa tukuy kawsaqkunata mikhuchiwan.",s:"El agua fluyendo alimenta a todos los seres vivos."},
      {q:"Allpa mikhuchiwan, kawsayta qowan.",s:"La tierra nos alimenta, nos da vida."}
    ],notes:[{t:"-qtin cuando",d:"Llaqsimuqtin=cuando sale."},{t:"Mana...chu",d:"Mana wañunchu=no muere."},{t:"Q'espiriy",d:"Brillar."}]},
    {type:"Emociones",title:"El corazón quechua",sub:"Sentimientos y estados internos",lines:[
      {q:"Sunquy kusisqam, qanta rikusqayrayku.",s:"Mi corazón está alegre por haberte visto."},
      {q:"Llakiywan hunt'asqam kachkani.",s:"Estoy lleno de tristeza."},
      {q:"Munakuymi unay kawsaypim kachkan.",s:"El amor existe desde tiempos antiguos."},
      {q:"Manchakuni tuta ch'isita.",s:"Tengo miedo en la noche oscura."},
      {q:"Kusikuymi aswan kallpata quwan.",s:"La alegría da más fuerza."}
    ],notes:[{t:"Sunquy",d:"Mi corazón / mi interior emocional."},{t:"-rayku causa",d:"Qanta rikusqayrayku=por haberte visto."},{t:"Manchakuy",d:"Tener miedo."}]},
    {type:"Vida diaria",title:"Un día en los Andes",sub:"Actividades cotidianas",lines:[
      {q:"Tutamanta hatariytawan, yakuta upyani.",s:"Apenas al despertar, tomo agua."},
      {q:"Chakrata llamkanaypaq purinimi.",s:"Voy a trabajar en el campo."},
      {q:"Mikhunata mikhuspa, rimayku.",s:"Comiendo la comida, conversamos."},
      {q:"Sapa p'unchay qillqani yachayniyta.",s:"Cada día escribo lo que aprendo."},
      {q:"Tutapi puñuytawan rikch'arini.",s:"Por la noche duermo y luego me despierto."}
    ],notes:[{t:"-ytawan apenas",d:"Hatariytawan=apenas al despertar."},{t:"-spa gerundio",d:"Mikhuspa=comiendo."},{t:"Llamkay",d:"Trabajar."}]},
    {type:"Animales",title:"Animales sagrados",sub:"La fauna andina",lines:[
      {q:"Llamaqa ñanpi sinchita purin.",s:"La llama camina fuerte por el camino."},
      {q:"Kondorm qaqa patanpi samaykun.",s:"El cóndor descansa en la cima de la peña."},
      {q:"Puma tutapi orqopi purin, mana manchakuspa.",s:"El puma camina de noche en el cerro sin miedo."},
      {q:"Challwakunam yakupi kusiywan phawakun.",s:"Los peces nadan felices en el agua."},
      {q:"Llamap millmanmi p'achata ruwanku.",s:"Con la lana de llama hacen ropa."}
    ],notes:[{t:"Llama",d:"Animal sagrado de los Andes, símbolo de la vida andina."},{t:"Kondor",d:"Ave sagrada, mensajero entre el mundo de los vivos y los dioses."},{t:"-m evidencial",d:"Hechos de primera vista."}]},
    {type:"Comida",title:"Sabores de la Pachamama",sub:"Alimentación andina",lines:[
      {q:"Papata challwawan wayk'uspa mikhuymi.",s:"Como cocinando papa con pescado."},
      {q:"Saraqa Pachamamam qowan kay allpapi.",s:"El maíz es un regalo de la Pachamama en esta tierra."},
      {q:"Aqhata ruwayta yachani taytayrayku.",s:"Sé preparar chicha gracias a mi padre."},
      {q:"Ch'uñuqa suyuniykipim hunt'a.",s:"El chuño abunda en nuestra región."},
      {q:"Mikhunata maqt'aspa kusiywan mikhukuni.",s:"Agradeciendo la comida, como con alegría."}
    ],notes:[{t:"Ch'uño",d:"Papa deshidratada, alimento andino ancestral."},{t:"Aqha",d:"Chicha, bebida sagrada de maíz."},{t:"Sara",d:"El maíz."}]},
    {type:"Saludos",title:"Rimanakusun",sub:"Conversaciones del día",lines:[
      {q:"Allinllachu kanki, taytáy?",s:"¿Cómo estás, señor?"},
      {q:"Allinmi kachkani, yusulpayki.",s:"Estoy bien, gracias."},
      {q:"Maytam riyta munankiri?",s:"¿A dónde quieres ir?"},
      {q:"Chakraman riyta munani.",s:"Quiero ir al campo."},
      {q:"Paqarinkama, yayáy.",s:"Hasta mañana, señor."}
    ],notes:[{t:"Allinllachu",d:"¿Estás bien? — saludo cotidiano."},{t:"Yusulpayki",d:"Gracias (del español 'Dios le pague')."},{t:"Paqarinkama",d:"Hasta mañana."}]},
    {type:"Artesanía",title:"Manos que crean",sub:"Tejido y arte andino",lines:[
      {q:"Mamayqa sumaqta awaspa takikun.",s:"Mi madre canta tejiendo hermoso."},
      {q:"Tullpukunaqa Pachamamam qowan.",s:"Los colores los da la Pachamama."},
      {q:"Chumbim familiy kawsayninta willakun.",s:"La faja cuenta la historia de mi familia."},
      {q:"Makiywan ruwasqam, sunqoywan rurasqa.",s:"Hecho con mis manos, hecho con mi corazón."},
      {q:"Kay p'achaka yuyaymi, munakuymi, kawsaymin.",s:"Esta ropa es recuerdo, es amor, es vida."}
    ],notes:[{t:"Away",d:"Tejer."},{t:"Chumbi",d:"Faja tejida con diseños simbólicos."},{t:"Tullpu",d:"Color, tinte natural."}]},
    {type:"Chakra",title:"La vida en el campo",sub:"Trabajo en la tierra",lines:[
      {q:"Hallp'ayta tarpuniku sapa wata.",s:"Sembramos la tierra cada año."},
      {q:"Allpam riccharisqa kaypi.",s:"La tierra está despierta aquí."},
      {q:"Chakrapi llamkayqa sunqoy kusisqa.",s:"Trabajar en el campo alegra mi corazón."},
      {q:"Hallp'a samiyninwan mikhuchiwan.",s:"La tierra con su benevolencia nos alimenta."},
      {q:"Tarpuqmi kawsayniyku, pallaqmi kusiyku.",s:"Sembrar es nuestra vida, cosechar es nuestra alegría."}
    ],notes:[{t:"Chakra",d:"Campo, parcela agrícola."},{t:"Tarpuy",d:"Sembrar."},{t:"Palliy",d:"Cosechar, recoger."}]},
    {type:"Música",title:"Takiy kay pacha",sub:"Música y danza andina",lines:[
      {q:"Pinkilluwan takini, urqukunaman rimani.",s:"Toco la flauta, hablo hacia las montañas."},
      {q:"Tususpa, kawsayta yupaychani.",s:"Bailando, celebro la vida."},
      {q:"Takiyqa sunqo rimaymin.",s:"La música es el hablar del corazón."},
      {q:"Qina takiyninwan wayra rimakun.",s:"Con el sonido de la quena el viento habla."},
      {q:"Sapa p'unchay takini kusiyrayku.",s:"Cada día canto por alegría."}
    ],notes:[{t:"Pinkillo",d:"Flauta andina de caña."},{t:"Qina",d:"Quena, flauta de los Andes."},{t:"Tusuy",d:"Bailar."}]},
    {type:"Amor",title:"Munakuy",sub:"El amor en las palabras",lines:[
      {q:"Qanta munakuyki, sunqoypi kachkanki.",s:"Te amo, estás en mi corazón."},
      {q:"Ñawikikunam intip k'ancharisqan hina.",s:"Tus ojos son como la luz del sol."},
      {q:"Rinaytam munani qanwan wiñaypa.",s:"Quiero caminar contigo para siempre."},
      {q:"Munakuyqa mana tukukunchu.",s:"El amor no termina."},
      {q:"Huk sunqolla kachkanchis.",s:"Somos un solo corazón."}
    ],notes:[{t:"Munakuy",d:"Amar, querer."},{t:"Wiñaypa",d:"Para siempre, eternamente."},{t:"Huk sunqo",d:"Un solo corazón: unidad profunda andina."}]},
    {type:"Pacha",title:"Los tiempos del año",sub:"Estaciones y cosmos",lines:[
      {q:"Poqoy pachapin tarpuniku.",s:"En tiempo de lluvias sembramos."},
      {q:"Ch'aki pachapin pallakunchis.",s:"En tiempo seco cosechamos."},
      {q:"Inti chayamuqtin, allpa kusikun.",s:"Cuando llega el sol, la tierra se alegra."},
      {q:"Tuta ch'isita, chaskakuna q'espirin.",s:"En la noche oscura, las estrellas brillan."},
      {q:"Pacha puriq, mana sayaychu.",s:"El tiempo camina, no se detiene."}
    ],notes:[{t:"Poqoy pacha",d:"Tiempo de lluvias, época de crecimiento."},{t:"Ch'aki pacha",d:"Tiempo seco, época de cosecha."},{t:"Chasca",d:"Estrella."}]}
  ]},
  poesia:{title:"Poesía Quechua",color:"#a78bfa",pieces:[
    {type:"Poema tradicional",title:"Orqo Sonqo",sub:"Corazón de Montaña",poem:true,lines:[
      {q:"Urquy, urquy, hatun urquy,",s:"Montaña, montaña, gran montaña,"},
      {q:"imaynám sunqoyki?",s:"¿cómo está tu corazón?"},
      {q:"Puyuwan p'ampasqa,",s:"Cubierta de nubes,"},
      {q:"riti churarasqa,",s:"vestida de nieve,"},
      {q:"Manam qanchu wañunki,",s:"Tú no mueres,"},
      {q:"kawsaqmi kachkanki.",s:"estás vivo."}
    ],notes:[{t:"Imaynám",d:"¿Cómo está...?"},{t:"Kawsay/Wañuy",d:"Vivir/morir."}]},
    {type:"Poema moderno",title:"Yakum Rimarin",sub:"El agua habla",poem:true,lines:[
      {q:"Yakum rimarin urqumanta,",s:"El agua habla desde la montaña,"},
      {q:"'ama qonqawaychu!'",s:"'¡no me olvides!'"},
      {q:"Ichaqa yaku mana saykusqachu,",s:"Pero el agua no se cansa,"},
      {q:"sapa p'unchay phawamun,",s:"cada día corre,"},
      {q:"kawsayta aparimun.",s:"trayendo vida."}
    ],notes:[{t:"Ama...chu",d:"Prohibición: ¡No me olvides!"},{t:"Ichaqa",d:"Pero, sin embargo."}]},
    {type:"Harawy",title:"Kusikuymi",sub:"Soy feliz",poem:true,lines:[
      {q:"Kusikuymi, kusikuymi,",s:"Soy feliz, soy feliz,"},
      {q:"kay allpapi kawsasqayrayku.",s:"por vivir en esta tierra."},
      {q:"Intim q'allariq,",s:"El sol que brilla,"},
      {q:"paykuna sunqoypi tiyakun.",s:"ellos viven en mi corazón."},
      {q:"Mana imam llakichiwanchu",s:"Nada me entristece"},
      {q:"kay sumaq pachapi.",s:"en este mundo hermoso."}
    ],notes:[{t:"-sqa+rayku",d:"Kawsasqayrayku=por vivir aquí."},{t:"Tiyakuy",d:"Habitar."}]},
    {type:"Harawy",title:"Killa Rimarin",sub:"La luna habla",poem:true,lines:[
      {q:"Killam tutapi k'ancharin,",s:"La luna brilla de noche,"},
      {q:"qori hina llusq'an.",s:"brillante como el oro."},
      {q:"Warmikunam killata rimankiku:",s:"Las mujeres le hablan a la luna:"},
      {q:"'Tayta Killa, yanapayku!'",s:"'¡Madre Luna, ayúdanos!'"},
      {q:"Killam uyarikun,",s:"La luna escucha,"},
      {q:"puyuwan q'ipisqa purín.",s:"y camina envuelta en nubes."}
    ],notes:[{t:"Killa",d:"Luna — figura femenina en la cosmología andina."},{t:"Q'ipiy",d:"Cargar a la espalda, envolver."}]},
    {type:"Poema",title:"Wayra Takiy",sub:"Canto del viento",poem:true,lines:[
      {q:"Wayram phukumun urqumanta,",s:"El viento sopla desde la montaña,"},
      {q:"rumi-rumi siqarispa.",s:"subiendo entre piedra y piedra."},
      {q:"Wayraqa mana saykuqchu,",s:"El viento no se cansa,"},
      {q:"ñan-ñan purin.",s:"camina camino a camino."},
      {q:"Wayram rimawanki:",s:"El viento te habla:"},
      {q:"'Kawsakuy, kawsakuy!'",s:"'¡Vive, vive!'"}
    ],notes:[{t:"Phukuy",d:"Soplar."},{t:"Siqariy",d:"Subir, ascender."},{t:"Repetición",d:"Rumi-rumi, ñan-ñan — la repetición en quechua intensifica."}]},
    {type:"Harawy",title:"Sara Harawy",sub:"Canto al maíz sagrado",poem:true,lines:[
      {q:"Sara, sara, qori sara,",s:"Maíz, maíz, maíz de oro,"},
      {q:"Pachamamam munasqan.",s:"lo que la Madre Tierra ama."},
      {q:"Wiñariy, wiñariy,",s:"Crece, crece,"},
      {q:"inti q'anchiyninwan.",s:"con la luz del sol."},
      {q:"Warmi, qarim",s:"La mujer y el hombre"},
      {q:"sarata muyuykunku.",s:"rodean al maíz."},
      {q:"Sarapin kawsanchis.",s:"En el maíz vivimos."}
    ],notes:[{t:"Sara",d:"Maíz, alimento sagrado de los Andes."},{t:"Muyuy",d:"Rodear, girar — referencia a los rituales."}]},
    {type:"Poema",title:"Ñan",sub:"El camino",poem:true,lines:[
      {q:"Ñanmi taytanchis,",s:"El camino es nuestro padre,"},
      {q:"ñanmi mamanchis.",s:"el camino es nuestra madre."},
      {q:"Ñanpi purispa yachani,",s:"Caminando por el camino aprendo,"},
      {q:"ñanpi purispa kawsani.",s:"caminando por el camino vivo."},
      {q:"Mana ñan tukurichu,",s:"El camino no termina,"},
      {q:"wiñaypim rin.",s:"va para siempre."}
    ],notes:[{t:"Ñan",d:"Camino — también el camino de la vida en sentido filosófico."},{t:"Wiñaypim",d:"Para siempre."}]},
    {type:"Harawy",title:"Pachamama Hukaylliy",sub:"Alabanza a la Madre Tierra",poem:true,lines:[
      {q:"Pachamama, Pachamama,",s:"Pachamama, Pachamama,"},
      {q:"qanta yupaychani.",s:"te celebro."},
      {q:"Allpaykim mikhuchiwan,",s:"Tu tierra me alimenta,"},
      {q:"yakuyki kawsachiwan.",s:"tu agua me da vida."},
      {q:"Mana qanqa tukukunki,",s:"Tú no terminas,"},
      {q:"wiñaypim kawsanki.",s:"vives para siempre."},
      {q:"Yupaychasqayki.",s:"Eres honrada."}
    ],notes:[{t:"Hukaylliy",d:"Alabanza, canto de agradecimiento."},{t:"Yupaychay",d:"Honrar, celebrar, agradecer."}]}
  ]},
  leyendas:{title:"Leyendas Quechuas",color:"#f59e0b",pieces:[
    {type:"Leyenda",title:"Manco Qhapaq",sub:"El primer Inca",legend:true,lines:[
      {q:"Ñawpa pacha, Intiqa churinkunata kamachirqa:",s:"En tiempos antiguos, el Sol ordenó a sus hijos:"},
      {q:"'Ripuychis, runakunata yachachichis!'",s:"'¡Id y enseñad a la gente!'"},
      {q:"Manco Qhapaqmi llaqsan wayqenkunawan rikurirqa,",s:"Manco Qhapaq apareció con sus hermanos,"},
      {q:"Titiqaqa qochamantam lluqsirqaku.",s:"emergieron del lago Titicaca."},
      {q:"Qori toppawan allpata tinqarirqa,",s:"Con una vara de oro tocó la tierra,"},
      {q:"chaypi Qusquta ruwarqaku.",s:"y allí fundaron el Cusco."},
      {q:"Paymantam Inka llaqta wiñarqa,",s:"De él creció el pueblo Inca,"},
      {q:"Tawantinsuyu sutiyuq.",s:"llamado Tawantinsuyu."}
    ],notes:[{t:"Ñawpa pacha",d:"En tiempos antiguos, en el pasado remoto"},{t:"Qori toppa",d:"Vara de oro, cetro del Inca"},{t:"-rqa-",d:"Marca de tiempo pasado"}]},
    {type:"Cuento",title:"Achkay",sub:"La bruja de la montaña",legend:true,lines:[
      {q:"Huk ñawpa pachapi, urqopi achkay tiyarqa.",s:"En tiempos lejanos, en la montaña vivía una bruja."},
      {q:"Achkayqa runata mikhuq karqa.",s:"La achkay se comía a las personas."},
      {q:"Huk sipas warmiqa mana manchakuqchu karqa.",s:"Una joven muchacha no tenía miedo."},
      {q:"Achkaytam tapurqa: '¿Imatam munankiri?'",s:"Le preguntó a la bruja: '¿Qué quieres?'"},
      {q:"'Kuyayta munani,' nerqa achkay.",s:"'Quiero amor,' dijo la bruja."},
      {q:"Sipasqa achkayta kuyarqa,",s:"La joven amó a la bruja,"},
      {q:"chaysi achkay runa tukorqa.",s:"y entonces la bruja se convirtió en persona."}
    ],notes:[{t:"Achkay",d:"Bruja/ogro en la tradición andina"},{t:"Sipas",d:"Joven mujer, doncella"},{t:"-q karqa",d:"Imperfecto habitual: 'solía hacer'"}]},
    {type:"Mito",title:"Inti Raymi",sub:"La fiesta del Sol",legend:true,lines:[
      {q:"Sapa wata, Inti Raymim tiyakun.",s:"Cada año se celebra el Inti Raymi."},
      {q:"Intiqa wiñay kawsan, mana wañunchu.",s:"El Sol vive eternamente, no muere."},
      {q:"Inkakunam Intita yuyarirqaku,",s:"Los Incas recordaban al Sol,"},
      {q:"mihuyta, aqata qorqaku.",s:"le ofrendaban comida y chicha."},
      {q:"'Taytay Inti, k'ancharimuway!'",s:"'¡Padre Sol, ilumíname!'"},
      {q:"nerqaku tukuy runakuna.",s:"decían todos."},
      {q:"Kunampis, Qusqupi,",s:"Hoy también, en el Cusco,"},
      {q:"Inti Raymi kusisqam kachkan.",s:"el Inti Raymi está lleno de alegría."}
    ],notes:[{t:"Sapa wata",d:"Cada año"},{t:"Wiñay",d:"Eternamente, siempre"},{t:"Aqha",d:"Chicha, bebida sagrada andina"}]},
    {type:"Leyenda",title:"Qori Challwa",sub:"El pez de oro",legend:true,lines:[
      {q:"Titiqaqa qochapin huk qori challwa kawsarqa.",s:"En el lago Titicaca vivía un pez de oro."},
      {q:"Sapa tutam qori k'anchiywan lluqsirqa.",s:"Cada noche salía con luz dorada."},
      {q:"Huk wawacha challwata rikorqa",s:"Un niño vio al pez"},
      {q:"noqa munasqayki ninata.",s:"y le dijo 'te quiero'."},
      {q:"Challwaqa wawacha maqtaman tukorqa,",s:"El pez se convirtió en muchacho,"},
      {q:"paykunam ayllu tukorqaku.",s:"y se hicieron familia."},
      {q:"Ninsi qocha pachakamapin",s:"Dicen que aún en las profundidades del lago"},
      {q:"paykunam puriykachanku.",s:"ellos siguen caminando."}
    ],notes:[{t:"Challwa",d:"Pez"},{t:"Noqa munasqayki",d:"Te quiero (yo te amo)"},{t:"Ninsi",d:"Dicen que..., según dicen"}]},
    {type:"Leyenda",title:"Puma Orqo",sub:"El cerro del puma",legend:true,lines:[
      {q:"Ñawpa pachapi huk hatun puma urqopi kawsarqa.",s:"En tiempos antiguos un gran puma vivía en el cerro."},
      {q:"Tukuy llaqtakuna manchakurqaku.",s:"Todos los pueblos le tenían miedo."},
      {q:"Huk wayna maqtam pumarihuan rimarirqa.",s:"Un joven habló con el puma."},
      {q:"'Imatam munankiri, puma tayta?'",s:"'¿Qué quieres, señor puma?'"},
      {q:"'Aylluyta maskhani,' nerqa puma.",s:"'Busco mi familia,' dijo el puma."},
      {q:"Wayna maqtam pumata yanaparqa,",s:"El joven ayudó al puma,"},
      {q:"paymi aylluyta tarirqa.",s:"y él encontró a su familia."},
      {q:"Puma orqom sutin kachkan kunankama.",s:"El cerro del puma sigue con ese nombre hasta hoy."}
    ],notes:[{t:"Puma",d:"León de montaña, animal sagrado andino"},{t:"Wayna maqta",d:"Joven, muchacho"},{t:"Maskay",d:"Buscar"}]},
    {type:"Fábula",title:"Atuq Achachi",sub:"El zorro astuto",legend:true,lines:[
      {q:"Huk atuqmi achachim karqa, yuyayniyuq.",s:"Había un zorro muy sabio y astuto."},
      {q:"Sapa p'unchay mikhuyta maskharqa.",s:"Cada día buscaba qué comer."},
      {q:"Huk urpim qorinta wayqopi saqirqa.",s:"Una paloma dejó su comida en el barranco."},
      {q:"Atuqmi urpita rimarirqa:",s:"El zorro le habló a la paloma:"},
      {q:"'Sumaqta takiykuy, urpicha!'",s:"'¡Canta hermoso, palomita!'"},
      {q:"Urpiqa takiyta qallarirqa,",s:"La paloma empezó a cantar,"},
      {q:"qorinmi urmurqa.",s:"y su comida cayó."},
      {q:"Atuqmi qorita mikhorqa, asikuspan.",s:"El zorro comió la comida, riéndose."}
    ],notes:[{t:"Atuq",d:"Zorro (animal pícaro en la tradición andina)"},{t:"Urpi",d:"Paloma"},{t:"Takiy",d:"Cantar"}]},
    {type:"Mito",title:"Ukuku",sub:"El hijo del oso y la mujer",legend:true,lines:[
      {q:"Ukukuqa ukukuwan warmiwan churin karqa.",s:"El Ukuku era hijo de un oso y una mujer."},
      {q:"Mana runa, mana ukuku kikillanchu.",s:"No era persona ni tampoco era solo oso."},
      {q:"Iskay sunqoyuqmi karqa.",s:"Tenía dos corazones."},
      {q:"Ukukuqa urqokunapi purerqa,",s:"El Ukuku caminaba por las montañas,"},
      {q:"ichaqa llaqtakunatam yanapakurqa.",s:"pero ayudaba a los pueblos."},
      {q:"Inti Raymipim Ukuku rikurikun,",s:"En el Inti Raymi el Ukuku aparece,"},
      {q:"ritita urayk'uspan,",s:"bajando desde las nieves,"},
      {q:"millma p'achawan pisqo rikchasqa.",s:"disfrazado de ave con su ropa de lana."}
    ],notes:[{t:"Ukuku",d:"Ser mítico andino, mitad oso mitad hombre"},{t:"Iskay sunqo",d:"Dos corazones, dualidad andina"},{t:"Riti",d:"Nieve, glaciar"}]},
    {type:"Cuento",title:"Sirenita del Lago",sub:"La sirena del Titicaca",legend:true,lines:[
      {q:"Titiqaqa qochapin huk sirena kawsarqa.",s:"En el lago Titicaca vivía una sirena."},
      {q:"Chay sirenaqa sumaqta takiq karqa.",s:"Esa sirena cantaba hermoso."},
      {q:"Takiyninwan qochaqa kusikurqa,",s:"Con su canto el lago se alegraba,"},
      {q:"challwakunam tusurqaku.",s:"y los peces bailaban."},
      {q:"Huk runa sirenata munakurqa,",s:"Un hombre se enamoró de la sirena,"},
      {q:"qochamanta lluqsimunantas mañakurqa.",s:"y le pidió que saliera del lago."},
      {q:"Sirenaqa nerqa: 'Mana atinichu,",s:"La sirena dijo: 'No puedo,"},
      {q:"qocham sunqoy, qocham kawsayni.'",s:"el lago es mi corazón, el lago es mi vida.'"}
    ],notes:[{t:"Sirena",d:"Ser mítico de los lagos andinos"},{t:"Munakuy",d:"Enamorarse, amar"},{t:"Sunqo",d:"Corazón, esencia"}]},
    {type:"Mito",title:"Viracocha",sub:"El dios creador",legend:true,lines:[
      {q:"Ñawpa pachapi, Viracocham tukuyta ruwarqa.",s:"En tiempos antiguos, Viracocha creó todo."},
      {q:"Qochamantam lluqsirqa, hatun yachayninwan.",s:"Salió del lago con su gran sabiduría."},
      {q:"Runata, allpata, intita kamachirqa.",s:"Creó a la gente, la tierra, el sol."},
      {q:"'Kawsaychis,' nirqa, 'aylluykichiswan.'",s:"Dijo: 'Vivid con vuestra comunidad.'"},
      {q:"Viracocham tukuy pachata yacharqa.",s:"Viracocha conocía todo el universo."},
      {q:"Sumaq uyayuq, hatun uyanwan rikurirqa.",s:"De apariencia hermosa, apareció con gran rostro."},
      {q:"Chaymantam inti, killa, chaskakuna kawsanku.",s:"De él viven el sol, la luna y las estrellas."}
    ],notes:[{t:"Viracocha",d:"Dios creador supremo en la cosmología andina"},{t:"Kamachiy",d:"Crear, ordenar"},{t:"Pacha",d:"Mundo, universo, tiempo"}]},
    {type:"Leyenda",title:"Supay",sub:"El espíritu de las sombras",legend:true,lines:[
      {q:"Supayqa uku pachapi kawsan.",s:"El Supay vive en el mundo interior."},
      {q:"Mana allin, mana mana allinchu.",s:"No es bueno ni es malo."},
      {q:"Runakunam Supaywan rimanku,",s:"Las personas hablan con el Supay,"},
      {q:"sumaq wayk'uta qospa.",s:"dándole buena comida."},
      {q:"Supayqa urqokunapi purin tutapi,",s:"El Supay camina por los cerros de noche,"},
      {q:"mana rikunachu, ichaqa uyarinsi.",s:"no se ve, pero se escucha."},
      {q:"Ama Supaywan kutiriykuychu.",s:"No te enfrentes al Supay."}
    ],notes:[{t:"Supay",d:"Espíritu andino — no es el 'diablo' cristiano, sino una fuerza dual"},{t:"Uku pacha",d:"Mundo interior, el inframundo andino"},{t:"Uyariy",d:"Escuchar, oír"}]},
    {type:"Mito",title:"Qoyllur Riti",sub:"La estrella de la nieve",legend:true,lines:[
      {q:"Ñawpa pachapi huk waynám urqopi puñurqa.",s:"En tiempos antiguos un joven durmió en el cerro."},
      {q:"Mosqonpiñam huk sipas warmi rikurirqa.",s:"En su sueño apareció una muchacha."},
      {q:"'Noqam Qoyllur Riti,' nirqa, 'chaskam kachkani.'",s:"'Soy Qoyllur Riti', dijo, 'soy una estrella.'"},
      {q:"Waynám payta munakurqa, qoyllurman tukorqa.",s:"El joven la amó, se convirtió en estrella."},
      {q:"Sapa wata Sinakaram urqoman",s:"Cada año al cerro Sinakara"},
      {q:"waynakuna, sipaskuna rin.",s:"van jóvenes y doncellas."},
      {q:"Qoyllurta yuyarispa,",s:"Recordando a la estrella,"},
      {q:"Inti Raymi huknin kachkan.",s:"es parte del Inti Raymi."}
    ],notes:[{t:"Qoyllur Riti",d:"'Estrella de Nieve' — festividad andina en el Ausangate"},{t:"Mosqoy",d:"Sueño, soñar"},{t:"Chasca",d:"Estrella"}]}
  ]},
  ensayos:{title:"Textos cortos",color:"#fb7185",pieces:[
    {type:"Filosofía",title:"Sumaq Kausay",sub:"El Buen Vivir",essay:true,paras:[
      {q:"Sumaq Kausay nisqaqa mana qolqellachu. Kay rimaymi nin: allinpi kawsakuy, Pachamamawan tinkuykuspa, runakunawan kusikuykuspa.",s:"El llamado Sumaq Kausay no es solo riqueza material. Dice: vivir bien, conectándose con la Madre Tierra y alegrándose con la gente."},
      {q:"Andino runakunapaqmi, kawsayqa mana sapanchu. Aylluwan, sach'akunawan, wakakunawan, intiwanpis kawsanku.",s:"Para el hombre andino la vida no es solitaria. Viven con la comunidad, los árboles, los animales y el sol."}
    ],notes:[{t:"Ayllu",d:"Comunidad familiar extendida."},{t:"-nisqa",d:"Lo llamado / nominalizador."}]},
    {type:"Historia",title:"Tawantinsuyu",sub:"El Imperio de las Cuatro Regiones",essay:true,paras:[
      {q:"Tawantinsuyuqa tawa suyukunam karqa: Chinchaysuyu, Antisuyu, Qollasuyu, Kuntisuyu.",s:"El Tawantinsuyu era cuatro regiones: Chinchaysuyu, Antisuyu, Qollasuyu, Kuntisuyu."},
      {q:"Quipukunawanmi willakuyta qillqarqaku. Quipuqa waskakuna, tullpukunawan hunt'asqa.",s:"Registraban información con quipus. El quipu son cuerdas con colores."}
    ],notes:[{t:"Tawa+suyu",d:"Cuatro regiones."},{t:"-rqa-",d:"Pasado: karqa=era/fue."}]},
    {type:"Filosofía",title:"La Chakana",sub:"La cruz andina",essay:true,paras:[
      {q:"Chakanaqa andino yuyaypa sunqonmin. Tawa suyu, tawa pacha, tawa simi — tukuypi tawa.",s:"La Chakana es el corazón del pensamiento andino. Cuatro regiones, cuatro tiempos, cuatro palabras — en todo está el cuatro."},
      {q:"Chakana nisqaqa 'chaka' (puente) + 'hana' (arriba). Hanaq pachawan kay pachata tinkichiwan.",s:"Chakana significa 'puente' más 'arriba'. Une el mundo de arriba con este mundo."}
    ],notes:[{t:"Chakana",d:"Cruz escalonada andina — símbolo del cosmos."},{t:"Tinkiy",d:"Unir, conectar dos mundos."}]},
    {type:"Filosofía",title:"Ayni",sub:"La reciprocidad andina",essay:true,paras:[
      {q:"Ayni nisqaqa: noqa qoyki, qan qowanki. Kay ruway mana qolqewan rurasqachu — sunqowan rurasqa.",s:"El Ayni es: yo te doy, tú me das. Esta práctica no está hecha con dinero — está hecha con el corazón."},
      {q:"Chakrapi, wasi ruwaypi, tarpuypi — ayni kachkan. Tukuy ayllu huñukun, llankunku kusiywan.",s:"En el campo, en la construcción de casas, en la siembra — existe el ayni. Toda la comunidad se reúne y trabaja con alegría."}
    ],notes:[{t:"Ayni",d:"Sistema de reciprocidad: trabajo colectivo y ayuda mutua."},{t:"Ayllu",d:"Comunidad andina extendida, base de la organización social."}]},
    {type:"Historia",title:"El Quipu",sub:"Escritura en nudos",essay:true,paras:[
      {q:"Quipuqa waskakuna kanchanakusqan. Mana qillqasqachu — watasqan. Tullpukuna, waskakunam willakuyta apanku.",s:"El quipu son cuerdas enlazadas. No escrito — anudado. Los colores y cuerdas cargan el mensaje."},
      {q:"Quipukamayoqkuna quiputa riqsinku allinmi. Willakuyta, yupaykunata, pachata — tukuyta watasqapi rikuyta atinku.",s:"Los quipukamayoq conocen bien el quipu. Mensajes, números, tiempos — todo pueden ver en los nudos."}
    ],notes:[{t:"Quipu",d:"Sistema de registro andino con nudos y colores."},{t:"Quipukamayoq",d:"Especialista en lectura de quipus."}]},
    {type:"Cultura",title:"Música andina",sub:"Sonidos del alma",essay:true,paras:[
      {q:"Andino takiyqa mana k'itasqa tiyanchu. Pinkillu, qina, tinya, charan — kay kallapinku takiyninku.",s:"La música andina no existe sin sus instrumentos. Flauta, quena, tambor, charango — en ellos vive su sonido."},
      {q:"Takiykunam Pachamamata, Intita, Killata rimankiku. Mana sapa takiychu — ayllu takikun, muyurikuspa.",s:"Las canciones hablan a la Pachamama, al Sol, a la Luna. No es música solitaria — la comunidad canta, girando."}
    ],notes:[{t:"Tinya",d:"Tambor andino pequeño."},{t:"Charan",d:"Charango, instrumento de cuerdas hecho con caparazón de quirquincho."},{t:"Muyuriy",d:"Girar, rodear — movimiento ritual."}]}
  ]}
};
