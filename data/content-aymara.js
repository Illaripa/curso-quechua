const CONT_A={
  aymara_or:{title:"Oraciones en Aymara",color:"#2dd4bf",pieces:[
    {level:1,type:"Primeras palabras",title:"Aka yatiqañanaka",sub:"Las primeras palabras Aymara",isAy:true,lines:[
      {q:"Jisa.",s:"Sí."},
      {q:"Janiwa.",s:"No."},
      {q:"Waliki.",s:"Está bien."},
      {q:"Kunas sutimax?",s:"¿Cómo te llamas?"},
      {q:"Sutimax Maria.",s:"Me llamo María."},
      {q:"Yuspagara.",s:"Gracias."},
      {q:"Jakisiñkama.",s:"Hasta luego."}
    ],notes:[{t:"Jisa / Janiwa",d:"Sí / No — las palabras más básicas del Aymara."},{t:"Waliki",d:"Está bien, bien."},{t:"Yuspagara",d:"Gracias (del español 'Dios le pague')."}]},
    {level:1,type:"Saludos",title:"Saludar en Aymara",sub:"Primeras palabras esenciales",isAy:true,lines:[
      {q:"Kamisaraki?",s:"¿Cómo estás? (saludo principal)"},
      {q:"Waliki, yuspagarapxita.",s:"Bien, gracias."},
      {q:"Jumaxa kamisaraki?",s:"¿Y tú cómo estás?"},
      {q:"Suma arumani.",s:"Buenas noches."},
      {q:"Jakisiñkama.",s:"Hasta luego (hasta que nos veamos)."}
    ],notes:[{t:"Kamisaraki",d:"Saludo universal Aymara. Literalmente: ¿cómo es que estás?"},{t:"Waliki",d:"Bien / está bien."},{t:"Jakisiñkama",d:"Despedida: jakañа=vivir, -kama=hasta."}]},
    {level:2,type:"Familia",title:"La familia Aymara",sub:"Vínculos familiares",isAy:true,lines:[
      {q:"Nayax jilata muntha.",s:"Yo quiero a mi hermano mayor."},
      {q:"Mamax manq'a lurañataki utjitu.",s:"Mi madre está para hacer comida."},
      {q:"Tatax chakana lurarakitu.",s:"Mi padre sigue trabajando en el campo."},
      {q:"Kullakax yatiqañ utana sartitu.",s:"Mi hermana menor fue a la escuela."},
      {q:"Ayllun suma kawkiskiwa.",s:"Mi familia vive bien."}
    ],notes:[{t:"Naya/Juma/Jupa",d:"Yo/Tú/Él en Aymara."},{t:"Jilata/Kullaka",d:"Hermano mayor / Hermana menor."},{t:"-taki",d:"Para / con el propósito de."}]},
    {level:2,type:"Naturaleza",title:"La Pachamama en Aymara",sub:"Tierra, agua y cosmos",isAy:true,lines:[
      {q:"Pachamamax wali sumawa.",s:"La Madre Tierra es muy hermosa."},
      {q:"Inti lluksitu, pacha qhananchitu.",s:"El sol sale, ilumina el mundo."},
      {q:"Jallu jallu, uma jallu.",s:"Lluvia, lluvia, agua de lluvia."},
      {q:"Achachilax urqun sarantitu.",s:"El espíritu anciano camina por la montaña."},
      {q:"Qutax wali jach'awa.",s:"El lago es muy grande."}
    ],notes:[{t:"Pachamama",d:"Madre Tierra (compartido con Quechua)."},{t:"Achachila",d:"Espíritu ancestral / abuelo sagrado."},{t:"Quta",d:"Lago (especialmente el Titicaca)."}]},
    {level:3,type:"Vida diaria",title:"Un día Aymara",sub:"Actividades del cotidiano",isAy:true,lines:[
      {q:"Arumana jilatharakitwa.",s:"Me desperté temprano en la mañana."},
      {q:"Manq'ata manq'itu.",s:"Comí comida."},
      {q:"Yatiqañ utana yatiqtha.",s:"Aprendí en la escuela."},
      {q:"Ch'amakana puñitu.",s:"Dormí de noche."},
      {q:"Sapa aruma wali walikisktha.",s:"Cada noche estoy muy bien."}
    ],notes:[{t:"Aruma",d:"Noche / mañana temprano (amanecer)."},{t:"Manq'ay",d:"Comer (en Aymara)."},{t:"Yatiqañ uta",d:"Escuela (casa de aprender)."}]}
  ]},
  aymara_po:{title:"Poesía Aymara",color:"#a78bfa",pieces:[
    {level:1,type:"Harawy Aymara",title:"Suma Uraqin",sub:"En la bella tierra",poem:true,isAy:true,lines:[
      {q:"Suma uraqin kawkisktha,",s:"Vivo en la bella tierra,"},
      {q:"achachilana samintapi.",s:"en la bendición de los ancestros."},
      {q:"Inti lluksirix qhanacharitu,",s:"El sol que sale ilumina,"},
      {q:"nayax wali kusistha.",s:"yo estoy muy alegre."},
      {q:"Jakañax sumawa,",s:"La vida es hermosa,"},
      {q:"Pachamaman munthapiniwa.",s:"siempre amo a la Pachamama."}
    ],notes:[{t:"Suma",d:"Hermoso/a / bueno/a."},{t:"Kawkiy",d:"Vivir / habitar."},{t:"Munthapiniwa",d:"Siempre la amo (forma enfática)."}]},
    {level:2,type:"Poema tradicional",title:"Quta Mama",sub:"Madre Lago",poem:true,isAy:true,lines:[
      {q:"Quta mama, jach'a quta,",s:"Madre lago, gran lago,"},
      {q:"kamisatsa uñstuta?",s:"¿de dónde apareciste?"},
      {q:"Achachilanakatx juttha,",s:"Vine de los espíritus ancestrales,"},
      {q:"pacha taypin tiyatha.",s:"habito en el centro del mundo."},
      {q:"Mara maranx kawkisktha,",s:"Año tras año vivo,"},
      {q:"mana tukuyañampi.",s:"sin fin."}
    ],notes:[{t:"Quta",d:"Lago (el Titicaca)."},{t:"Pacha taypina",d:"Centro del mundo / del tiempo."},{t:"Mara",d:"Año."}]}
  ]},
  leyendas_a:{title:"Leyendas Aymaras",color:"#f59e0b",pieces:[
    {level:1,type:"Cuento",title:"Kiwi Kiwi",sub:"El pájaro mensajero",legend:true,isAy:true,lines:[
      {q:"Huk kiwi kiwi jallu apawayxatayna.",s:"Un kiwi kiwi traía la lluvia."},
      {q:"Pachamamax patak munatayna.",s:"La Pachamama lo quería mucho."},
      {q:"Sapa jallu pacha kiwi kiwix phawatayna,",s:"Cada vez que llovía el kiwi kiwi volaba,"},
      {q:"jach'a qutanx yapu ullaraski.",s:"y los campos junto al gran lago florecían."},
      {q:"Huk uru jallu thuqitayna,",s:"Un día la lluvia se detuvo,"},
      {q:"kiwi kiwix waqatayna.",s:"y el kiwi kiwi lloró."},
      {q:"Pachamamax uywasañataki,",s:"Para cuidar a la Pachamama,"},
      {q:"jallu kutitayna.",s:"la lluvia regresó."}
    ],notes:[{t:"Kiwi kiwi",d:"Ave andina del altiplano"},{t:"Yapu",d:"Campo cultivado, chacra"},{t:"Thuqiy",d:"Detenerse, parar"}]},
    {level:2,type:"Leyenda",title:"Titi Puma",sub:"El gato del lago",legend:true,isAy:true,lines:[
      {q:"Titiqaqa sutinxa titi pumampiwa.",s:"El nombre Titicaca viene del gato puma."},
      {q:"Nayra pachax huk jach'a titi kawkaski.",s:"En tiempos antiguos vivía un gran gato."},
      {q:"Aka titix qutax uñnaqirina.",s:"Este gato vigilaba el lago."},
      {q:"Sapa jutir jalluwa quta chuyma yatxataski.",s:"Cada tormenta que llegaba, el lago le contaba sus secretos."},
      {q:"Titix quta uraqi yatiyirina,",s:"El gato enseñaba los secretos de la tierra del lago,"},
      {q:"jaqinakanx yatxatayatayna.",s:"y lo enseñó a la gente."},
      {q:"Kuntur titimpiw phawatayna janqharu,",s:"El cóndor y el gato volaron juntos hacia arriba,"},
      {q:"qutax sutiparuw sartatayna.",s:"y el lago quedó con ese nombre."}
    ],notes:[{t:"Titi",d:"Gato de los Andes, felino sagrado"},{t:"Quta chuyma",d:"Secreto del lago, corazón del lago"},{t:"Janqharu",d:"Hacia arriba, al cielo"}]},
    {level:2,type:"Leyenda",title:"Mama Quta",sub:"La madre del lago",legend:true,isAy:true,lines:[
      {q:"Titiqaqa qutax Mama Qutas uywatayna.",s:"El lago Titicaca era cuidado por la Madre Lago."},
      {q:"Mama Qutax jach'a warmisawa,",s:"La Madre Lago era una gran mujer,"},
      {q:"quta ukharurakiw sartatayna.",s:"y vivía dentro del lago."},
      {q:"Jayphux jaqinakaruw yanapaski,",s:"En tiempo de hambre ayudaba a la gente,"},
      {q:"challwanakaw apatayna.",s:"y les traía peces."},
      {q:"'Janix jan wali lurañaxa,' satayna.",s:"'No hagan el mal,' decía."},
      {q:"Suma lurir jaqinakarux,",s:"A los que hacían el bien,"},
      {q:"quta yakuw sum yatichatayna.",s:"el agua del lago les enseñaba bien."}
    ],notes:[{t:"Mama Quta",d:"Madre Lago, divinidad femenina del Titicaca"},{t:"Jayphu",d:"Hambre, escasez"},{t:"Challwa",d:"Pez, pescado"}]},
    {level:2,type:"Fábula",title:"Paja Brava",sub:"El viento y la paja",legend:true,isAy:true,lines:[
      {q:"Jach'a wayra phuqtatayna altiplanoruwa.",s:"Un gran viento sopló sobre el altiplano."},
      {q:"Tukuy qhuñanakax icxatayna.",s:"Todas las plantas se doblaron."},
      {q:"Ichu phak'ax icxataynati?",s:"¿Acaso la paja brava también se dobló?"},
      {q:"Janikiwa, ichu phak'ax sarantatayna.",s:"No, la paja brava siguió de pie."},
      {q:"Wayra tapuyi: '¿Kunasa sarantaski?'",s:"El viento preguntó: '¿Por qué sigues de pie?'"},
      {q:"Ichu nerqi: 'Uraqi chuymaruw mantitha.',",s:"La paja respondió: 'Entré al corazón de la tierra.'"},
      {q:"Jakañax maynist ichukiwa,",s:"La vida es como la paja brava,"},
      {q:"uraqi chuymaruwa mantañapawa.",s:"hay que entrar al corazón de la tierra."}
    ],notes:[{t:"Ichu phak'a",d:"Paja brava, planta resistente del altiplano"},{t:"Uraqi chuyma",d:"Corazón de la tierra, profundidad"},{t:"Sarantañа",d:"Seguir de pie, continuar"}]},
    {level:3,type:"Leyenda",title:"Iskay Punchunaka",sub:"Las dos estrellas",legend:true,isAy:true,lines:[
      {q:"Alaxpacha ururunakanx iskaynix qhana.",s:"En el cielo nocturno brillaban dos estrellas."},
      {q:"Sapallakirakiw qhanantaski,",s:"Brillaban solos cada uno,"},
      {q:"jan tinkipxatayna.",s:"y no se encontraban."},
      {q:"Pachamamax tinkiyatayna:",s:"La Pachamama los unió:"},
      {q:"'Tantachisimkpana,' satatayna.",s:"'Acercaos,' les dijo."},
      {q:"Iskaynix tantatatayna,",s:"Los dos se juntaron,"},
      {q:"jach'a qhanwa luratayna.",s:"e hicieron una gran luz."},
      {q:"Aka qhanax Titiqaqan uñjasiwa,",s:"Esta luz se ve en el Titicaca,"},
      {q:"yaku ukharurakiwa qhantaski.",s:"y brilla también dentro del agua."}
    ],notes:[{t:"Alaxpacha",d:"Cielo, el mundo de arriba"},{t:"Ururu",d:"Noche, nocturno"},{t:"Tantachiy",d:"Unir, juntar, acercar"}]},
    {level:3,type:"Mito",title:"Tunupa",sub:"El volcán sagrado",legend:true,isAy:true,lines:[
      {q:"Nayra pacha, Tunupax jach'a awtiyiri karni.",s:"En tiempos antiguos, Tunupa era un gran predicador."},
      {q:"Payx Tata Intinakaw churipa karni.",s:"Él era hijo del Padre Sol."},
      {q:"Tunupax suma sarnaqiri karni,",s:"Tunupa era un buen caminante,"},
      {q:"markanakanx jach'a yatiyiña yatxataski.",s:"enseñaba grandes sabidurías en los pueblos."},
      {q:"Aka uraqin jach'a llanthu luratayna,",s:"En esta tierra hubo una gran oscuridad,"},
      {q:"Tunupax k'anchantataynaraki.",s:"y Tunupa la iluminó."},
      {q:"Kuntur janq'u phullux apatayna,",s:"El cóndor de plumas blancas lo llevó,"},
      {q:"Titiqaqa qutanx jaytatayna.",s:"y lo dejó en el lago Titicaca."}
    ],notes:[{t:"Nayra pacha",d:"En tiempos antiguos"},{t:"Awtiyiri",d:"Predicador, el que enseña"},{t:"Kuntur",d:"Cóndor, ave sagrada andina"}]},
    {level:3,type:"Mito",title:"Wiracocha",sub:"El creador del mundo",legend:true,isAy:true,lines:[
      {q:"Nayra pachax lup'i anqaxs karni,",s:"En el principio solo había oscuridad,"},
      {q:"Wiracochain aka pacha lurataynaraki.",s:"y Wiracocha creó este mundo."},
      {q:"Jaqix, uywax, sux'ax lurataynaraki,",s:"Creó a las personas, los animales, las plantas,"},
      {q:"Titiqaqanx qalltatayna.",s:"comenzando desde el Titicaca."},
      {q:"'Kawkiy, kawkiy!' sanatayna,",s:"'¡Vivid, vivid!' dijo,"},
      {q:"jaqix sarnaqatayna.",s:"y la gente comenzó a caminar."},
      {q:"Wiracochain jach'a qutampi arunakaratayna,",s:"Wiracocha habló con el gran lago,"},
      {q:"kuntur apatayna umankiriru.",s:"y el cóndor lo llevó al horizonte."}
    ],notes:[{t:"Wiracocha",d:"Dios creador en la cosmovisión andina"},{t:"Lup'i anqax",d:"Oscuridad total, antes de la creación"},{t:"Umankiri",d:"El horizonte, donde el cielo toca la tierra"}]},
    {level:3,type:"Leyenda",title:"Chullpas",sub:"Las torres de los antiguos",legend:true,isAy:true,lines:[
      {q:"Nayra jaqix Intimpi thuqintawaytapxarini.",s:"La gente antigua vivía antes de que hubiera Sol."},
      {q:"Payanakax chullpanakax ukharurakiw sartapxarini.",s:"Ellos construyeron las torres chullpas para vivir."},
      {q:"Jach'a Inti lluqsitatayna,",s:"Cuando el gran Sol apareció,"},
      {q:"nayra jaqix jan walt'awirixatayna.",s:"la gente antigua no pudo resistirlo."},
      {q:"Chullpanakax uk'amakipiniw sartata,",s:"Las chullpas quedaron de pie,"},
      {q:"nayra pacharuw yatichiri.",s:"enseñando sobre los tiempos antiguos."},
      {q:"Kunturinakax chullpankir phawapxarakiwa,",s:"Los cóndores aún vuelan sobre las chullpas,"},
      {q:"nayra jaqinakan uñjasañataki.",s:"para ver a la gente de antes."}
    ],notes:[{t:"Chullpa",d:"Torre funeraria de piedra del período preinca"},{t:"Nayra jaqix",d:"La gente antigua, los antepasados"},{t:"Walt'awiri",d:"El que puede resistir / soportar"}]}
  ]}
};
