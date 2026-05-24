const PALABRAS_Q=[
  {cat:"Familia",q:"Mama",s:"Madre",col:"#fed7aa",note:"La madre, también tierra madre",img:"mother love",ex:[
    {t:"Pasado",q:"Mamay wasipi karqan.",s:"Mi madre estaba en casa."},
    {t:"Presente",q:"Mamay mikhushani.",s:"Mi madre está cocinando."},
    {t:"Futuro",q:"Mamay paqarin hamunqa.",s:"Mi madre vendrá mañana."}
  ]},
  {cat:"Familia",q:"Tayta",s:"Padre",col:"#fed7aa",img:"father family",ex:[
    {t:"Pasado",q:"Taytay chakrapi llank'arqan.",s:"Mi padre trabajó en el campo."},
    {t:"Presente",q:"Taytay wasipi kashan.",s:"Mi padre está en casa."},
    {t:"Futuro",q:"Taytay paqarin rinqa.",s:"Mi padre irá mañana."}
  ]},
  {cat:"Familia",q:"Wawa",s:"Bebé / hijo/a pequeño",col:"#fed7aa",note:"Bebé o niño pequeño",img:"child joy",ex:[
    {t:"Pasado",q:"Waway puñurqan.",s:"Mi bebé durmió."},
    {t:"Presente",q:"Waway waqashani.",s:"Mi bebé está llorando."},
    {t:"Futuro",q:"Waway hatun rinqa.",s:"Mi bebé crecerá grande."}
  ]},
  {cat:"Familia",q:"Ñaña",s:"Hermana (dicho por mujer)",col:"#fed7aa",img:"sisters family",ex:[
    {t:"Pasado",q:"Ñañay qhatuman rirqan.",s:"Mi hermana fue al mercado."},
    {t:"Presente",q:"Ñañay takishani.",s:"Mi hermana está cantando."},
    {t:"Futuro",q:"Ñañay paqarin hamunqa.",s:"Mi hermana vendrá mañana."}
  ]},
  {cat:"Familia",q:"Tura",s:"Hermano (dicho por mujer)",col:"#fed7aa",img:"brothers family",ex:[
    {t:"Pasado",q:"Turay chakrapi llank'arqan.",s:"Mi hermano trabajó en el campo."},
    {t:"Presente",q:"Turay wasipi kashan.",s:"Mi hermano está en casa."},
    {t:"Futuro",q:"Turay rinqa llaqtaman.",s:"Mi hermano irá al pueblo."}
  ]},
  {cat:"Familia",q:"Wawqi",s:"Hermano (dicho por hombre)",col:"#fed7aa",img:"brothers family",ex:[
    {t:"Pasado",q:"Wawqiy kallpachakurqan.",s:"Mi hermano se esforzó."},
    {t:"Presente",q:"Wawqiy wasipi kashan.",s:"Mi hermano está en casa."},
    {t:"Futuro",q:"Wawqiy ñoqawan hamunqa.",s:"Mi hermano vendrá conmigo."}
  ]},
  {cat:"Familia",q:"Pani",s:"Hermana (dicho por hombre)",col:"#fed7aa",img:"sisters family",ex:[
    {t:"Pasado",q:"Paniy llaqtapi karqan.",s:"Mi hermana estaba en el pueblo."},
    {t:"Presente",q:"Paniy takishani sumaqta.",s:"Mi hermana canta bonito."},
    {t:"Futuro",q:"Paniy ripunqa.",s:"Mi hermana se irá."}
  ]},
  {cat:"Familia",q:"Awki",s:"Abuelo / anciano",col:"#fed7aa",img:"grandfather elderly",ex:[
    {t:"Pasado",q:"Awkiy ñawpaq pachapi kawsarqan.",s:"Mi abuelo vivió en tiempos antiguos."},
    {t:"Presente",q:"Awkiy rimashani yachayninmanta.",s:"Mi abuelo habla de su sabiduría."},
    {t:"Futuro",q:"Awkiy willawanqa.",s:"Mi abuelo me contará."}
  ]},
  {cat:"Familia",q:"Quya",s:"Abuela / reina",col:"#fed7aa",img:"grandmother elderly",ex:[
    {t:"Pasado",q:"Quyay sumaq mikhuta ruwarqan.",s:"Mi abuela preparó comida rica."},
    {t:"Presente",q:"Quyay awashani.",s:"Mi abuela está tejiendo."},
    {t:"Futuro",q:"Quyay yachachiwanqa.",s:"Mi abuela me enseñará."}
  ]},
  {cat:"Familia",q:"Kaka",s:"Tío (hermano de madre)",col:"#fed7aa",img:"mother love",ex:[
    {t:"Pasado",q:"Kakay wayqiman rirqan.",s:"Mi tío fue al río."},
    {t:"Presente",q:"Kakay llank'ashani chakrapi.",s:"Mi tío trabaja en el campo."},
    {t:"Futuro",q:"Kakay yanapawanqa.",s:"Mi tío me ayudará."}
  ]},
  {cat:"Familia",q:"Ipa",s:"Tía (hermana de padre)",col:"#fed7aa",img:"father family",ex:[
    {t:"Pasado",q:"Ipay mikhuta apamuqarqan.",s:"Mi tía trajo comida."},
    {t:"Presente",q:"Ipay wasipi kashan.",s:"Mi tía está en casa."},
    {t:"Futuro",q:"Ipay paqarin hamunqa.",s:"Mi tía vendrá mañana."}
  ]},
  {cat:"Familia",q:"Churi",s:"Hijo (dicho por hombre)",col:"#fed7aa",img:"family andean",ex:[
    {t:"Pasado",q:"Churiy yachaqwasipi karqan.",s:"Mi hijo estaba en la escuela."},
    {t:"Presente",q:"Churiy yachakushani.",s:"Mi hijo está aprendiendo."},
    {t:"Futuro",q:"Churiy hatun yachaqninmi kanqa.",s:"Mi hijo será gran sabio."}
  ]},
  {cat:"Familia",q:"Ususi",s:"Hija (dicho por hombre)",col:"#fed7aa",img:"family andean",ex:[
    {t:"Pasado",q:"Ususiy pukllarqan.",s:"Mi hija jugó."},
    {t:"Presente",q:"Ususiy takishani.",s:"Mi hija está cantando."},
    {t:"Futuro",q:"Ususiy sumaqmi kanqa.",s:"Mi hija será hermosa."}
  ]},
  {cat:"Cuerpo",q:"Uma",s:"Cabeza",col:"#fca5a5",img:"thinking head",ex:[
    {t:"Pasado",q:"Umay nanasharqan.",s:"Me dolía la cabeza."},
    {t:"Presente",q:"Umay nanashani.",s:"Me duele la cabeza."},
    {t:"Futuro",q:"Umay allin kanqa.",s:"Mi cabeza estará bien."}
  ]},
  {cat:"Cuerpo",q:"Ñawi",s:"Ojo / cara / semilla",col:"#fca5a5",note:"Ñawi tiene múltiples significados según contexto",img:"eye vision",ex:[
    {t:"Pasado",q:"Ñawiymi waqarqan.",s:"Mis ojos lloraron."},
    {t:"Presente",q:"Ñawiymi rikushani intita.",s:"Mis ojos ven el sol."},
    {t:"Futuro",q:"Ñawiymi rikuwanqa sumaqta.",s:"Mis ojos verán cosas hermosas."}
  ]},
  {cat:"Cuerpo",q:"Rinri",s:"Oreja",col:"#fca5a5",img:"listening ear",ex:[
    {t:"Pasado",q:"Rinriy uyarirqan takita.",s:"Mi oreja escuchó el canto."},
    {t:"Presente",q:"Rinriy uyarishani.",s:"Mi oreja está escuchando."},
    {t:"Futuro",q:"Rinriy uyarinqa sumaq rimaykunata.",s:"Mi oreja escuchará palabras hermosas."}
  ]},
  {cat:"Cuerpo",q:"Sinqa",s:"Nariz",col:"#fca5a5",img:"face portrait",ex:[
    {t:"Pasado",q:"Sinqay t'ikap mukhunta uyarirqan.",s:"Mi nariz olió el perfume de la flor."},
    {t:"Presente",q:"Sinqay allin kashan.",s:"Mi nariz está bien."},
    {t:"Futuro",q:"Sinqay sumaq mukhuta uyarinqa.",s:"Mi nariz olerá aroma agradable."}
  ]},
  {cat:"Cuerpo",q:"Simi",s:"Boca / lengua / idioma",col:"#fca5a5",note:"Quechua simi = boca del quechua",img:"mouth face",ex:[
    {t:"Pasado",q:"Simiy rimasarqan cheqaqta.",s:"Mi boca habló la verdad."},
    {t:"Presente",q:"Simiy rimashani quechuapi.",s:"Mi boca habla en quechua."},
    {t:"Futuro",q:"Simiy takiqa.",s:"Mi boca cantará."}
  ]},
  {cat:"Cuerpo",q:"Qallu",s:"Lengua (dentro de boca)",col:"#fca5a5",img:"mouth face",ex:[
    {t:"Pasado",q:"Qalluy mikhuta maskarqan.",s:"Mi lengua buscó la comida."},
    {t:"Presente",q:"Qalluy quechuata rimashani.",s:"Mi lengua habla quechua."},
    {t:"Futuro",q:"Qalluy rinqa yachakuqqa.",s:"Mi lengua aprenderá más."}
  ]},
  {cat:"Cuerpo",q:"Kunka",s:"Cuello / garganta",col:"#fca5a5",img:"body wellness",ex:[
    {t:"Pasado",q:"Kunkay nanasharqan.",s:"Me dolía el cuello."},
    {t:"Presente",q:"Kunkay allin kashan.",s:"Mi cuello está bien."},
    {t:"Futuro",q:"Kunkay allin kanqa.",s:"Mi cuello estará bien."}
  ]},
  {cat:"Cuerpo",q:"Makiy",s:"Mano / brazo",col:"#fca5a5",img:"hands",ex:[
    {t:"Pasado",q:"Makiy llank'arqan wasipi.",s:"Mis manos trabajaron en casa."},
    {t:"Presente",q:"Makiy llank'ashani.",s:"Mis manos trabajan."},
    {t:"Futuro",q:"Makiy sumaqta ruwanqa.",s:"Mis manos harán cosas hermosas."}
  ]},
  {cat:"Cuerpo",q:"Chakiy",s:"Pie / pierna",col:"#fca5a5",img:"foot walking",ex:[
    {t:"Pasado",q:"Chakiy ñanpi purirqan.",s:"Mis pies caminaron por el camino."},
    {t:"Presente",q:"Chakiy purihani.",s:"Mis pies caminan."},
    {t:"Futuro",q:"Chakiy urquman purinqa.",s:"Mis pies caminarán a la montaña."}
  ]},
  {cat:"Cuerpo",q:"Sonqo",s:"Corazón / mente / alma",col:"#fca5a5",note:"El sonqo es asiento de los sentimientos",img:"heart",ex:[
    {t:"Pasado",q:"Sonqoy kushirisharqan.",s:"Mi corazón estaba alegre."},
    {t:"Presente",q:"Sonqoy kushirishani.",s:"Mi corazón está alegre."},
    {t:"Futuro",q:"Sonqoy allinta purinqa.",s:"Mi corazón viajará bien."}
  ]},
  {cat:"Cuerpo",q:"Kiru",s:"Diente / muela",col:"#fca5a5",img:"body wellness",ex:[
    {t:"Pasado",q:"Kiruymi nanasharqan.",s:"Me dolían los dientes."},
    {t:"Presente",q:"Kiruymi allin kashan.",s:"Mis dientes están bien."},
    {t:"Futuro",q:"Kiruymi allin kanqa.",s:"Mis dientes estarán bien."}
  ]},
  {cat:"Cuerpo",q:"Wiksay",s:"Estómago / vientre",col:"#fca5a5",img:"wellness body",ex:[
    {t:"Pasado",q:"Wiksay yarqasharqan.",s:"Mi estómago tenía hambre."},
    {t:"Presente",q:"Wiksay mikhushani.",s:"Mi estómago está comiendo."},
    {t:"Futuro",q:"Wiksay satiqa.",s:"Mi estómago se saciará."}
  ]},
  {cat:"Naturaleza",q:"Pacha",s:"Tierra / mundo / tiempo / universo",col:"#4ade80",note:"Concepto andino fundamental: espacio-tiempo",img:"earth soil hands",ex:[
    {t:"Pasado",q:"Pacha sumaqmi karqan.",s:"El mundo era hermoso."},
    {t:"Presente",q:"Pachapi kawsashani.",s:"Vivo en este mundo."},
    {t:"Futuro",q:"Pacha allin kanqa.",s:"El mundo estará bien."}
  ]},
  {cat:"Naturaleza",q:"Inti",s:"Sol",col:"#4ade80",img:"sunshine bright",ex:[
    {t:"Pasado",q:"Inti llipyarqan sinchi.",s:"El sol brilló fuerte."},
    {t:"Presente",q:"Inti llipyashani.",s:"El sol está brillando."},
    {t:"Futuro",q:"Inti paqarin llipyanqa.",s:"El sol brillará mañana."}
  ]},
  {cat:"Naturaleza",q:"Killa",s:"Luna / mes",col:"#4ade80",img:"moon night sky",ex:[
    {t:"Pasado",q:"Killa tutapi kuyurqan.",s:"La luna se movió en la noche."},
    {t:"Presente",q:"Killa llipyashani tutapi.",s:"La luna brilla en la noche."},
    {t:"Futuro",q:"Killa phutuqninqa.",s:"La luna crecerá."}
  ]},
  {cat:"Naturaleza",q:"Quyllur",s:"Estrella",col:"#4ade80",img:"stars night",ex:[
    {t:"Pasado",q:"Quyllurkunam tutapi llipyarqan.",s:"Las estrellas brillaron en la noche."},
    {t:"Presente",q:"Quyllurkunam llipyashani.",s:"Las estrellas están brillando."},
    {t:"Futuro",q:"Quyllurkunam paqarin rikunqaku.",s:"Las estrellas se verán mañana."}
  ]},
  {cat:"Naturaleza",q:"Wayra",s:"Viento / aire",col:"#4ade80",img:"wind nature",ex:[
    {t:"Pasado",q:"Wayra sinchi phukarqan.",s:"El viento sopló fuerte."},
    {t:"Presente",q:"Wayra phukashani.",s:"El viento está soplando."},
    {t:"Futuro",q:"Wayra phukanqa.",s:"El viento soplará."}
  ]},
  {cat:"Naturaleza",q:"Yaku",s:"Agua",col:"#4ade80",img:"water river",ex:[
    {t:"Pasado",q:"Yakupi tarirqani.",s:"Encontré agua."},
    {t:"Presente",q:"Yakuta upyashani.",s:"Estoy bebiendo agua."},
    {t:"Futuro",q:"Yakuta maskasaq.",s:"Buscaré agua."}
  ]},
  {cat:"Naturaleza",q:"Nina",s:"Fuego",col:"#4ade80",img:"fire flame",ex:[
    {t:"Pasado",q:"Nina rupharqan tutapi.",s:"El fuego ardió en la noche."},
    {t:"Presente",q:"Nina ruphashani wasipi.",s:"El fuego arde en casa."},
    {t:"Futuro",q:"Ninata ruphachisaq.",s:"Encenderé el fuego."}
  ]},
  {cat:"Naturaleza",q:"Allpa",s:"Tierra / suelo",col:"#4ade80",img:"earth soil hands",ex:[
    {t:"Pasado",q:"Allpapi papata tarpurqani.",s:"Sembré papa en la tierra."},
    {t:"Presente",q:"Allpa allin kashan.",s:"La tierra está bien."},
    {t:"Futuro",q:"Allpapi tarpusaq.",s:"Sembraré en la tierra."}
  ]},
  {cat:"Naturaleza",q:"Urqu",s:"Cerro / montaña",col:"#4ade80",img:"mountain andean",ex:[
    {t:"Pasado",q:"Urquman rirqani.",s:"Fui a la montaña."},
    {t:"Presente",q:"Urqu hatun kashan.",s:"La montaña es grande."},
    {t:"Futuro",q:"Urquman risaq.",s:"Iré a la montaña."}
  ]},
  {cat:"Naturaleza",q:"Mayu",s:"Río",col:"#4ade80",img:"river flowing",ex:[
    {t:"Pasado",q:"Mayupi challwata hapirqani.",s:"Pesqué en el río."},
    {t:"Presente",q:"Mayu purihani.",s:"El río corre."},
    {t:"Futuro",q:"Mayupi pujllasaq.",s:"Jugaré en el río."}
  ]},
  {cat:"Naturaleza",q:"Qucha",s:"Lago / mar",col:"#4ade80",img:"mountain lake",ex:[
    {t:"Pasado",q:"Quchapin challwata tarirqani.",s:"Encontré pez en el lago."},
    {t:"Presente",q:"Qucha hatun kashan.",s:"El lago es grande."},
    {t:"Futuro",q:"Quchaman risaq.",s:"Iré al lago."}
  ]},
  {cat:"Naturaleza",q:"Rumi",s:"Piedra / roca",col:"#4ade80",img:"foot walking",ex:[
    {t:"Pasado",q:"Rumita hapirqani.",s:"Agarré una piedra."},
    {t:"Presente",q:"Rumi hatun kashan.",s:"La piedra es grande."},
    {t:"Futuro",q:"Rumita maskasaq.",s:"Buscaré una piedra."}
  ]},
  {cat:"Naturaleza",q:"Sach'a",s:"Árbol",col:"#4ade80",img:"tree forest",ex:[
    {t:"Pasado",q:"Sach'a hatun karqan.",s:"El árbol era grande."},
    {t:"Presente",q:"Sach'a wiñashani.",s:"El árbol está creciendo."},
    {t:"Futuro",q:"Sach'a hatun kanqa.",s:"El árbol será grande."}
  ]},
  {cat:"Naturaleza",q:"T'ika",s:"Flor",col:"#4ade80",img:"flowers blooming",ex:[
    {t:"Pasado",q:"T'ika sisian karqan.",s:"La flor estaba floreciendo."},
    {t:"Presente",q:"T'ika sumaq kashan.",s:"La flor es hermosa."},
    {t:"Futuro",q:"T'ika sisanqa.",s:"La flor florecerá."}
  ]},
  {cat:"Naturaleza",q:"Qura",s:"Hierba / planta",col:"#4ade80",img:"plants green",ex:[
    {t:"Pasado",q:"Qurata hapirqani.",s:"Cogí la hierba."},
    {t:"Presente",q:"Qura wiñashani.",s:"La hierba está creciendo."},
    {t:"Futuro",q:"Qurata upyasaq.",s:"Tomaré la hierba."}
  ]},
  {cat:"Naturaleza",q:"Para",s:"Lluvia",col:"#4ade80",img:"rain drops",ex:[
    {t:"Pasado",q:"Para paramurqan tutapi.",s:"Llovió en la noche."},
    {t:"Presente",q:"Para paramushani.",s:"Está lloviendo."},
    {t:"Futuro",q:"Para paqarin paramunqa.",s:"Lloverá mañana."}
  ]},
  {cat:"Naturaleza",q:"Qasa",s:"Helada / escarcha",col:"#4ade80",img:"nature andean",ex:[
    {t:"Pasado",q:"Qasa tuta kasharqan.",s:"Hubo helada en la noche."},
    {t:"Presente",q:"Qasa kashan.",s:"Hay helada."},
    {t:"Futuro",q:"Qasa kanqa tutapi.",s:"Habrá helada en la noche."}
  ]},
  {cat:"Animales",q:"Llama",s:"Llama",col:"#d9f99d",note:"Animal sagrado de los Andes",img:"llama andes",ex:[
    {t:"Pasado",q:"Llama urqupi puririqarqan.",s:"La llama caminaba por la montaña."},
    {t:"Presente",q:"Llama chakrapi kashan.",s:"La llama está en el campo."},
    {t:"Futuro",q:"Llamata purichinqa.",s:"Hará caminar a la llama."}
  ]},
  {cat:"Animales",q:"Alpaka",s:"Alpaca",col:"#d9f99d",img:"alpaca wool",ex:[
    {t:"Pasado",q:"Alpaka quraman rirqan.",s:"La alpaca fue a la hierba."},
    {t:"Presente",q:"Alpaka mikhushani.",s:"La alpaca está comiendo."},
    {t:"Futuro",q:"Alpaka michisqam kanqa.",s:"La alpaca será pastada."}
  ]},
  {cat:"Animales",q:"Wik'uña",s:"Vicuña",col:"#d9f99d",img:"animals nature",ex:[
    {t:"Pasado",q:"Wik'uña urqumanta rikurqan.",s:"La vicuña apareció desde la montaña."},
    {t:"Presente",q:"Wik'uña wayrahinam purihani.",s:"La vicuña corre como el viento."},
    {t:"Futuro",q:"Wik'uñata rikunqaku.",s:"Verán la vicuña."}
  ]},
  {cat:"Animales",q:"Kuntur",s:"Cóndor",col:"#d9f99d",note:"Ave sagrada, mensajera del Apu",img:"condor bird flying",ex:[
    {t:"Pasado",q:"Kuntur hatun urqumanta phawamurqan.",s:"El cóndor voló desde la gran montaña."},
    {t:"Presente",q:"Kuntur phawashani hananpi.",s:"El cóndor vuela en el cielo."},
    {t:"Futuro",q:"Kuntur phawanqa.",s:"El cóndor volará."}
  ]},
  {cat:"Animales",q:"Puma",s:"Puma / leopardo",col:"#d9f99d",img:"puma wild cat",ex:[
    {t:"Pasado",q:"Puma urqumanta hamurqan.",s:"El puma vino de la montaña."},
    {t:"Presente",q:"Puma purihani tutapi.",s:"El puma camina en la noche."},
    {t:"Futuro",q:"Puma rikurqanqa urqupi.",s:"El puma aparecerá en la montaña."}
  ]},
  {cat:"Animales",q:"Atoc",s:"Zorro",col:"#d9f99d",img:"fox animal",ex:[
    {t:"Pasado",q:"Atoc chakraman hamurqan.",s:"El zorro vino al campo."},
    {t:"Presente",q:"Atoc purihani tutapi.",s:"El zorro camina en la noche."},
    {t:"Futuro",q:"Atoc rinqa.",s:"El zorro se irá."}
  ]},
  {cat:"Animales",q:"Challwa",s:"Pez",col:"#d9f99d",img:"fish water",ex:[
    {t:"Pasado",q:"Challwata hapirqani mayupi.",s:"Pesqué en el río."},
    {t:"Presente",q:"Challwa mayupi kashan.",s:"El pez está en el río."},
    {t:"Futuro",q:"Challwata hapinqaku.",s:"Atraparán el pez."}
  ]},
  {cat:"Animales",q:"Pisqu",s:"Pájaro",col:"#d9f99d",img:"bird nature",ex:[
    {t:"Pasado",q:"Pisqu takisharqan paqariq.",s:"El pájaro cantaba al amanecer."},
    {t:"Presente",q:"Pisqu takishani.",s:"El pájaro está cantando."},
    {t:"Futuro",q:"Pisqu phawanqa.",s:"El pájaro volará."}
  ]},
  {cat:"Animales",q:"Waman",s:"Halcón",col:"#d9f99d",img:"animals nature",ex:[
    {t:"Pasado",q:"Waman phawasharqan hananpi.",s:"El halcón volaba en el cielo."},
    {t:"Presente",q:"Waman maskashani mikhuta.",s:"El halcón busca comida."},
    {t:"Futuro",q:"Waman phawanqa.",s:"El halcón volará."}
  ]},
  {cat:"Animales",q:"Allqu",s:"Perro",col:"#d9f99d",img:"dog pet",ex:[
    {t:"Pasado",q:"Allquy wasiyta qawasharqan.",s:"Mi perro cuidaba mi casa."},
    {t:"Presente",q:"Allquy qawashani.",s:"Mi perro está vigilando."},
    {t:"Futuro",q:"Allquy qawanqa.",s:"Mi perro vigilará."}
  ]},
  {cat:"Animales",q:"Michi",s:"Gato",col:"#d9f99d",img:"cat animal",ex:[
    {t:"Pasado",q:"Michy pukllarqan.",s:"Mi gato jugó."},
    {t:"Presente",q:"Michy puñushani.",s:"Mi gato está durmiendo."},
    {t:"Futuro",q:"Michy mikhunqa.",s:"Mi gato comerá."}
  ]},
  {cat:"Comida",q:"Papa",s:"Papa / patata",col:"#86efac",note:"Originaria de los Andes",img:"potato food",ex:[
    {t:"Pasado",q:"Papata tarpurqani allpapi.",s:"Sembré papa en la tierra."},
    {t:"Presente",q:"Papata mikhushani.",s:"Estoy comiendo papa."},
    {t:"Futuro",q:"Papata tarpusaq.",s:"Sembraré papa."}
  ]},
  {cat:"Comida",q:"Chunu",s:"Chuño (papa deshidratada)",col:"#86efac",note:"Técnica ancestral de conservación",img:"food traditional andean",ex:[
    {t:"Pasado",q:"Chunuta ruwarqani.",s:"Hice chuño."},
    {t:"Presente",q:"Chunuta mikhushani.",s:"Estoy comiendo chuño."},
    {t:"Futuro",q:"Chunuta ruwasaq.",s:"Haré chuño."}
  ]},
  {cat:"Comida",q:"Sara",s:"Maíz",col:"#86efac",img:"corn maize",ex:[
    {t:"Pasado",q:"Sarata tarpurqani.",s:"Sembré maíz."},
    {t:"Presente",q:"Sara wiñashani.",s:"El maíz está creciendo."},
    {t:"Futuro",q:"Sarata pallasaq.",s:"Cosecharé el maíz."}
  ]},
  {cat:"Comida",q:"Quinua",s:"Quinoa",col:"#86efac",img:"food traditional andean",ex:[
    {t:"Pasado",q:"Quinuata mikhurqani.",s:"Comí quinoa."},
    {t:"Presente",q:"Quinuata ruwashani.",s:"Estoy preparando quinoa."},
    {t:"Futuro",q:"Quinuata tarpusaq.",s:"Sembraré quinoa."}
  ]},
  {cat:"Comida",q:"Kiwicha",s:"Amaranto andino",col:"#86efac",img:"food traditional andean",ex:[
    {t:"Pasado",q:"Kiwichata tarpurqani.",s:"Sembré amaranto."},
    {t:"Presente",q:"Kiwicha wiñashani.",s:"El amaranto está creciendo."},
    {t:"Futuro",q:"Kiwichata pallasaq.",s:"Cosecharé el amaranto."}
  ]},
  {cat:"Comida",q:"Chuqllu",s:"Choclo / maíz tierno",col:"#86efac",img:"corn maize",ex:[
    {t:"Pasado",q:"Chuqlluta pallasharqani.",s:"Estaba cosechando choclo."},
    {t:"Presente",q:"Chuqlluta mikhushani.",s:"Estoy comiendo choclo."},
    {t:"Futuro",q:"Chuqlluta pallasaq.",s:"Cosecharé el choclo."}
  ]},
  {cat:"Comida",q:"Oca",s:"Oca (tubérculo andino)",col:"#86efac",img:"food traditional andean",ex:[
    {t:"Pasado",q:"Ocata tarpurqani.",s:"Sembré oca."},
    {t:"Presente",q:"Ocata mikhushani.",s:"Estoy comiendo oca."},
    {t:"Futuro",q:"Ocata ruwasaq.",s:"Prepararé oca."}
  ]},
  {cat:"Comida",q:"Kañiwa",s:"Cañihua (cereal andino)",col:"#86efac",img:"food traditional andean",ex:[
    {t:"Pasado",q:"Kañiwata tarpurqani.",s:"Sembré cañihua."},
    {t:"Presente",q:"Kañiwa wiñashani.",s:"La cañihua está creciendo."},
    {t:"Futuro",q:"Kañiwata pallasaq.",s:"Cosecharé la cañihua."}
  ]},
  {cat:"Comida",q:"Chicha",s:"Chicha (bebida fermentada de maíz)",col:"#86efac",img:"corn maize",ex:[
    {t:"Pasado",q:"Chichata upyarqani.",s:"Bebí chicha."},
    {t:"Presente",q:"Chichata upyashani.",s:"Estoy bebiendo chicha."},
    {t:"Futuro",q:"Chichata ruwasaq.",s:"Haré chicha."}
  ]},
  {cat:"Comida",q:"Kanka",s:"Carne asada",col:"#86efac",img:"meat food",ex:[
    {t:"Pasado",q:"Kankata mikhurqani.",s:"Comí carne asada."},
    {t:"Presente",q:"Kankata ruwashani.",s:"Estoy asando carne."},
    {t:"Futuro",q:"Kankata ruwasaq.",s:"Asaré carne."}
  ]},
  {cat:"Colores",q:"Puka",s:"Rojo",col:"#fecaca",img:"red vibrant",ex:[
    {t:"Pasado",q:"T'ika puka karqan.",s:"La flor era roja."},
    {t:"Presente",q:"T'ika puka kashan.",s:"La flor es roja."},
    {t:"Futuro",q:"T'ika puka kanqa.",s:"La flor será roja."}
  ]},
  {cat:"Colores",q:"Q'umir",s:"Verde",col:"#fecaca",img:"green nature",ex:[
    {t:"Pasado",q:"Chakra q'umir karqan.",s:"El campo era verde."},
    {t:"Presente",q:"Qura q'umir kashan.",s:"La hierba es verde."},
    {t:"Futuro",q:"Chakra q'umir kanqa.",s:"El campo será verde."}
  ]},
  {cat:"Colores",q:"Anqas",s:"Azul",col:"#fecaca",img:"blue sky",ex:[
    {t:"Pasado",q:"Hanaq pacha anqas karqan.",s:"El cielo era azul."},
    {t:"Presente",q:"Hanaq pacha anqas kashan.",s:"El cielo es azul."},
    {t:"Futuro",q:"Hanaq pacha anqas kanqa.",s:"El cielo será azul."}
  ]},
  {cat:"Colores",q:"Q'illu",s:"Amarillo",col:"#fecaca",img:"yellow sunshine",ex:[
    {t:"Pasado",q:"Sara q'illu karqan.",s:"El maíz era amarillo."},
    {t:"Presente",q:"T'ika q'illu kashan.",s:"La flor es amarilla."},
    {t:"Futuro",q:"Sara q'illu kanqa.",s:"El maíz será amarillo."}
  ]},
  {cat:"Colores",q:"Yuraq",s:"Blanco",col:"#fecaca",img:"white snow",ex:[
    {t:"Pasado",q:"Qasa yuraq karqan.",s:"La helada era blanca."},
    {t:"Presente",q:"Urqu yuraq kashan.",s:"La montaña es blanca."},
    {t:"Futuro",q:"Para yuraq kanqa.",s:"La nieve será blanca."}
  ]},
  {cat:"Colores",q:"Yana",s:"Negro",col:"#fecaca",img:"black night",ex:[
    {t:"Pasado",q:"Tuta yana karqan.",s:"La noche era negra."},
    {t:"Presente",q:"Tuta yana kashan.",s:"La noche es negra."},
    {t:"Futuro",q:"Phayu yana kanqa.",s:"La nube será negra."}
  ]},
  {cat:"Colores",q:"Oqe",s:"Gris",col:"#fecaca",img:"andean culture",ex:[
    {t:"Pasado",q:"Rumi oqe karqan.",s:"La piedra era gris."},
    {t:"Presente",q:"Rumi oqe kashan.",s:"La piedra es gris."},
    {t:"Futuro",q:"Phayu oqe kanqa.",s:"La nube será gris."}
  ]},
  {cat:"Colores",q:"Ankhu puka",s:"Naranja",col:"#fecaca",img:"andean culture",ex:[
    {t:"Pasado",q:"T'ika ankhu puka karqan.",s:"La flor era naranja."},
    {t:"Presente",q:"T'ika ankhu puka kashan.",s:"La flor es naranja."},
    {t:"Futuro",q:"Inti ankhu puka rikurinqa.",s:"El sol se verá naranja."}
  ]},
  {cat:"Números",q:"Huk",s:"Uno (1)",col:"#e0e7ff",img:"andean culture",ex:[
    {t:"Pasado",q:"Huk wasipi karqani.",s:"Estuve en una casa."},
    {t:"Presente",q:"Huk wawallam kan.",s:"Hay solo un bebé."},
    {t:"Futuro",q:"Huk llamata rantimusaq.",s:"Compraré una llama."}
  ]},
  {cat:"Números",q:"Iskay",s:"Dos (2)",col:"#e0e7ff",img:"andean culture",ex:[
    {t:"Pasado",q:"Iskay makiywanmi llank'arqani.",s:"Trabajé con mis dos manos."},
    {t:"Presente",q:"Iskay wawakuna pukllan.",s:"Dos niños están jugando."},
    {t:"Futuro",q:"Iskay pachakta purisaq.",s:"Caminaré dos días."}
  ]},
  {cat:"Números",q:"Kinsa",s:"Tres (3)",col:"#e0e7ff",img:"andean culture",ex:[
    {t:"Pasado",q:"Kinsa papata mikurqani.",s:"Comí tres papas."},
    {t:"Presente",q:"Kinsa t'ika kashan.",s:"Hay tres flores."},
    {t:"Futuro",q:"Kinsa llaqtaman risaq.",s:"Iré a tres pueblos."}
  ]},
  {cat:"Números",q:"Tawa",s:"Cuatro (4)",col:"#e0e7ff",img:"andean culture",ex:[
    {t:"Pasado",q:"Tawa watapin kawsarqani llaqtapi.",s:"Viví cuatro años en el pueblo."},
    {t:"Presente",q:"Tawa urqukuna kashan.",s:"Hay cuatro cerros."},
    {t:"Futuro",q:"Tawa killatan purisaq.",s:"Caminaré cuatro meses."}
  ]},
  {cat:"Números",q:"Pichqa",s:"Cinco (5)",col:"#e0e7ff",img:"andean culture",ex:[
    {t:"Pasado",q:"Pichqa challwata hapirqani.",s:"Atrapé cinco peces."},
    {t:"Presente",q:"Pichqa wawakunam kashan.",s:"Hay cinco niños."},
    {t:"Futuro",q:"Pichqa t'ikatan apamusaq.",s:"Traeré cinco flores."}
  ]},
  {cat:"Números",q:"Suqta",s:"Seis (6)",col:"#e0e7ff",img:"andean culture",ex:[
    {t:"Pasado",q:"Suqta llamata hapirqani.",s:"Cogí seis llamas."},
    {t:"Presente",q:"Suqta waynakunam kashan.",s:"Hay seis jóvenes."},
    {t:"Futuro",q:"Suqta pacha purisaq.",s:"Caminaré seis días."}
  ]},
  {cat:"Números",q:"Qanchis",s:"Siete (7)",col:"#e0e7ff",img:"andean culture",ex:[
    {t:"Pasado",q:"Qanchis inti phukarqan.",s:"Soplaron siete vientos."},
    {t:"Presente",q:"Qanchis quyllurkuna kashan.",s:"Hay siete estrellas."},
    {t:"Futuro",q:"Qanchis wata suyasaq.",s:"Esperaré siete años."}
  ]},
  {cat:"Números",q:"Pusaq",s:"Ocho (8)",col:"#e0e7ff",img:"andean culture",ex:[
    {t:"Pasado",q:"Pusaq papata tarpurqani.",s:"Sembré ocho papas."},
    {t:"Presente",q:"Pusaq pisqukuna takishani.",s:"Ocho pájaros están cantando."},
    {t:"Futuro",q:"Pusaq killatan suyasaq.",s:"Esperaré ocho meses."}
  ]},
  {cat:"Números",q:"Isqon",s:"Nueve (9)",col:"#e0e7ff",img:"andean culture",ex:[
    {t:"Pasado",q:"Isqon watapin hatun karqani.",s:"A los nueve años era grande."},
    {t:"Presente",q:"Isqon pachakuna kashan.",s:"Hay nueve días."},
    {t:"Futuro",q:"Isqon killatan llamata michisaq.",s:"Pastearé la llama nueve meses."}
  ]},
  {cat:"Números",q:"Chunka",s:"Diez (10)",col:"#e0e7ff",img:"andean culture",ex:[
    {t:"Pasado",q:"Chunka papata tarpurqani.",s:"Sembré diez papas."},
    {t:"Presente",q:"Chunka t'ikakuna kashan.",s:"Hay diez flores."},
    {t:"Futuro",q:"Chunka llamata michisaq.",s:"Pastearé diez llamas."}
  ]},
  {cat:"Números",q:"Pachak",s:"Cien (100)",col:"#e0e7ff",img:"andean culture",ex:[
    {t:"Pasado",q:"Pachak watapin hatun llaqtam karqan.",s:"Hace cien años era un gran pueblo."},
    {t:"Presente",q:"Pachak waynakunam llank'ashani.",s:"Cien jóvenes están trabajando."},
    {t:"Futuro",q:"Pachak llamata michisaq.",s:"Pastearé cien llamas."}
  ]},
  {cat:"Números",q:"Waranqa",s:"Mil (1000)",col:"#e0e7ff",img:"andean culture",ex:[
    {t:"Pasado",q:"Waranqa watapin hatun imperiomin karqan.",s:"Hace mil años había un gran imperio."},
    {t:"Presente",q:"Waranqa runakuna llaqtapi kashan.",s:"Mil personas están en el pueblo."},
    {t:"Futuro",q:"Waranqa t'ikam sisanqa.",s:"Mil flores florecerán."}
  ]},
  {cat:"Casa",q:"Wasi",s:"Casa / hogar",col:"#93c5fd",img:"home traditional andean",ex:[
    {t:"Pasado",q:"Wasiy sumaq karqan.",s:"Mi casa era hermosa."},
    {t:"Presente",q:"Wasiy allim kashan.",s:"Mi casa está bien."},
    {t:"Futuro",q:"Wasiy hatun kanqa.",s:"Mi casa será grande."}
  ]},
  {cat:"Casa",q:"Punku",s:"Puerta",col:"#93c5fd",img:"andean culture",ex:[
    {t:"Pasado",q:"Punku kicharqasharqan.",s:"La puerta estaba abierta."},
    {t:"Presente",q:"Punku wichq'asqa kashan.",s:"La puerta está cerrada."},
    {t:"Futuro",q:"Punkuta kicharsaq.",s:"Abriré la puerta."}
  ]},
  {cat:"Casa",q:"Kancha",s:"Recinto / patio cercado",col:"#93c5fd",note:"Kancha = espacio sagrado delimitado",img:"andean culture",ex:[
    {t:"Pasado",q:"Kanchapin kawsarqani.",s:"Viví en el recinto."},
    {t:"Presente",q:"Kancha hatun kashan.",s:"El recinto es grande."},
    {t:"Futuro",q:"Kanchapin pukllanqaku.",s:"Jugarán en el recinto."}
  ]},
  {cat:"Casa",q:"Llaqta",s:"Pueblo / ciudad",col:"#93c5fd",img:"andean culture",ex:[
    {t:"Pasado",q:"Llaqtapi watakunata kawsarqani.",s:"Viví años en el pueblo."},
    {t:"Presente",q:"Llaqtay hatun kashan.",s:"Mi pueblo es grande."},
    {t:"Futuro",q:"Llaqtaman risaq.",s:"Iré al pueblo."}
  ]},
  {cat:"Casa",q:"Ayllu",s:"Comunidad familiar / clan",col:"#93c5fd",note:"Unidad social andina fundamental",img:"andean culture",ex:[
    {t:"Pasado",q:"Aylluy llank'arqan tantanakuspa.",s:"Mi comunidad trabajó reunida."},
    {t:"Presente",q:"Aylluy kashan wasipi.",s:"Mi familia está en casa."},
    {t:"Futuro",q:"Aylluywan purisaq.",s:"Caminaré con mi comunidad."}
  ]},
  {cat:"Casa",q:"Chakra",s:"Campo cultivado / chacra",col:"#93c5fd",img:"andean culture",ex:[
    {t:"Pasado",q:"Chakrapi llank'arqani.",s:"Trabajé en el campo."},
    {t:"Presente",q:"Chakra wiñashani.",s:"El campo está creciendo."},
    {t:"Futuro",q:"Chakrapi tarpusaq.",s:"Sembraré en el campo."}
  ]},
  {cat:"Casa",q:"Ñan",s:"Camino / sendero",col:"#93c5fd",note:"El Qhapaq Ñan es el gran camino inca",img:"path trail mountain",ex:[
    {t:"Pasado",q:"Ñanpi purirqani.",s:"Caminé por el sendero."},
    {t:"Presente",q:"Ñan hatun kashan.",s:"El camino es grande."},
    {t:"Futuro",q:"Ñanpi risaq.",s:"Iré por el camino."}
  ]},
  {cat:"Casa",q:"Chaka",s:"Puente",col:"#93c5fd",img:"andean culture",ex:[
    {t:"Pasado",q:"Chakap uqharqani mayuta.",s:"Crucé el río por el puente."},
    {t:"Presente",q:"Chaka hatun kashan.",s:"El puente es grande."},
    {t:"Futuro",q:"Chakata purisaq.",s:"Cruzaré el puente."}
  ]},
  {cat:"Tiempo",q:"Kunan",s:"Ahora / hoy",col:"#fbbf24",img:"sky andean",ex:[
    {t:"Pasado",q:"Kunanqa wasipi kasharqani.",s:"Hoy estaba en casa."},
    {t:"Presente",q:"Kunan llank'ashani.",s:"Ahora estoy trabajando."},
    {t:"Futuro",q:"Kunanmanta rinqa.",s:"Desde ahora se irá."}
  ]},
  {cat:"Tiempo",q:"Qayna",s:"Ayer / pasado",col:"#fbbf24",img:"sky andean",ex:[
    {t:"Pasado",q:"Qayna para paramurqan.",s:"Ayer llovió."},
    {t:"Presente",q:"Qayna mikhusqayta yuyashani.",s:"Recuerdo lo que comí ayer."},
    {t:"Futuro",q:"Qayna ruwasqayta willasaq.",s:"Contaré lo que hice ayer."}
  ]},
  {cat:"Tiempo",q:"Paqarin",s:"Mañana (el día de mañana)",col:"#fbbf24",img:"daytime sunny",ex:[
    {t:"Pasado",q:"Paqarin hamunqa nisharqan.",s:"Había dicho que vendría mañana."},
    {t:"Presente",q:"Paqarin risqayta yuyashani.",s:"Pienso en mi viaje de mañana."},
    {t:"Futuro",q:"Paqarin chakraman risaq.",s:"Mañana iré al campo."}
  ]},
  {cat:"Tiempo",q:"Wata",s:"Año",col:"#fbbf24",img:"sky andean",ex:[
    {t:"Pasado",q:"Watapin hatun karqani.",s:"Hace un año era grande."},
    {t:"Presente",q:"Kay wata sumaqmi.",s:"Este año es hermoso."},
    {t:"Futuro",q:"Hamuq watapin risaq.",s:"El año que viene me iré."}
  ]},
  {cat:"Tiempo",q:"Killa",s:"Mes / luna",col:"#fbbf24",img:"moon night sky",ex:[
    {t:"Pasado",q:"Killa phutuq karqan.",s:"La luna estaba llena."},
    {t:"Presente",q:"Kay killa sumaqmi.",s:"Este mes es hermoso."},
    {t:"Futuro",q:"Hamuq killapin risaq.",s:"El próximo mes me iré."}
  ]},
  {cat:"Tiempo",q:"P'unchay",s:"Día",col:"#fbbf24",img:"daytime sunny",ex:[
    {t:"Pasado",q:"P'unchay sumaq karqan.",s:"El día era hermoso."},
    {t:"Presente",q:"Kay p'unchay sumaqmi.",s:"Este día es hermoso."},
    {t:"Futuro",q:"Hamuq p'unchaypin llank'asaq.",s:"El próximo día trabajaré."}
  ]},
  {cat:"Tiempo",q:"Tuta",s:"Noche",col:"#fbbf24",img:"night stars dark",ex:[
    {t:"Pasado",q:"Tuta quyllurkuna llipyarqan.",s:"En la noche brillaron las estrellas."},
    {t:"Presente",q:"Tuta kashan.",s:"Es de noche."},
    {t:"Futuro",q:"Tuta puñusaq.",s:"En la noche dormiré."}
  ]},
  {cat:"Andino",q:"Pachamama",s:"Madre Tierra",col:"#c7d2fe",note:"Divinidad de la tierra en el mundo andino",img:"mother love",ex:[
    {t:"Pasado",q:"Pachamaman pagarikurqani.",s:"Le ofrendé a la Pachamama."},
    {t:"Presente",q:"Pachamaman yupaychashani.",s:"Agradezco a la Pachamama."},
    {t:"Futuro",q:"Pachamaman pagarisaq.",s:"Le ofrendaré a la Pachamama."}
  ]},
  {cat:"Andino",q:"Apu",s:"Espíritu de montaña sagrada",col:"#c7d2fe",note:"Entidad protectora que habita los cerros",img:"mountain andean",ex:[
    {t:"Pasado",q:"Apumanmi mañakurqani.",s:"Le pedí al Apu."},
    {t:"Presente",q:"Apuman rimashani.",s:"Le hablo al Apu."},
    {t:"Futuro",q:"Apuman mañakusaq.",s:"Le pediré al Apu."}
  ]},
  {cat:"Andino",q:"Sumaq Kawsay",s:"Buen vivir / vida en plenitud",col:"#c7d2fe",note:"Filosofía andina de vida en armonía",img:"life nature vibrant",ex:[
    {t:"Pasado",q:"Sumaq Kawsaypi kawsarqani.",s:"Viví en el buen vivir."},
    {t:"Presente",q:"Sumaq Kawsayta maskashani.",s:"Busco el buen vivir."},
    {t:"Futuro",q:"Sumaq Kawsaypi kawsasaq.",s:"Viviré en el buen vivir."}
  ]},
  {cat:"Andino",q:"Ayni",s:"Reciprocidad / trabajo comunitario",col:"#c7d2fe",note:"Principio andino: te doy lo que me diste",img:"work hands labor",ex:[
    {t:"Pasado",q:"Ayniwanmi chakrapi llank'arqani.",s:"Trabajé en el campo con reciprocidad."},
    {t:"Presente",q:"Aynipi llank'ashani.",s:"Trabajo en ayni."},
    {t:"Futuro",q:"Aynita ruwasaq.",s:"Haré ayni."}
  ]},
  {cat:"Andino",q:"Minka",s:"Trabajo comunal colectivo",col:"#c7d2fe",note:"Todos trabajan juntos por el bien común",img:"work hands labor",ex:[
    {t:"Pasado",q:"Minkapin llank'arqanikuq.",s:"Trabajamos juntos en minka."},
    {t:"Presente",q:"Minkapin llank'ashani.",s:"Trabajo en minka."},
    {t:"Futuro",q:"Minkata ruwasaq.",s:"Haré minka."}
  ]},
  {cat:"Andino",q:"Hanan Pacha",s:"Mundo de arriba / cielo",col:"#c7d2fe",img:"sky clouds blue",ex:[
    {t:"Pasado",q:"Hanan Pachamanta quyllurkuna llipyarqan.",s:"Del Hanan Pacha brillaron las estrellas."},
    {t:"Presente",q:"Hanan Pacha hatun kashan.",s:"El mundo de arriba es grande."},
    {t:"Futuro",q:"Hanan Pachaman risaq.",s:"Iré al mundo de arriba."}
  ]},
  {cat:"Andino",q:"Kay Pacha",s:"Este mundo / mundo presente",col:"#c7d2fe",img:"andean culture",ex:[
    {t:"Pasado",q:"Kay Pachapin kawsarqani.",s:"Viví en este mundo."},
    {t:"Presente",q:"Kay Pachapin kawsashani.",s:"Vivo en este mundo."},
    {t:"Futuro",q:"Kay Pachapin kawsasaq.",s:"Viviré en este mundo."}
  ]},
  {cat:"Andino",q:"Uku Pacha",s:"Mundo de abajo / inframundo",col:"#c7d2fe",img:"valley low",ex:[
    {t:"Pasado",q:"Uku Pachapi kawsarqanku.",s:"Vivieron en el inframundo."},
    {t:"Presente",q:"Uku Pacha kaq kashan.",s:"El inframundo existe."},
    {t:"Futuro",q:"Uku Pachaman rinqanku.",s:"Irán al inframundo."}
  ]},
  {cat:"Andino",q:"Yachaq",s:"Sabio / el que sabe",col:"#c7d2fe",img:"andean culture",ex:[
    {t:"Pasado",q:"Yachaq rimawanmi.",s:"El sabio me habló."},
    {t:"Presente",q:"Yachaq yachachishani.",s:"El sabio está enseñando."},
    {t:"Futuro",q:"Yachaqman risaq.",s:"Iré donde el sabio."}
  ]},
  {cat:"Andino",q:"Hampiq",s:"Curandero / sanador",col:"#c7d2fe",img:"andean culture",ex:[
    {t:"Pasado",q:"Hampiq hampiwarqan.",s:"El curandero me curó."},
    {t:"Presente",q:"Hampiq hampishani.",s:"El curandero está curando."},
    {t:"Futuro",q:"Hampiqman risaq.",s:"Iré donde el curandero."}
  ]},
  {cat:"Andino",q:"Sami",s:"Gracia / buena energía / suerte",col:"#c7d2fe",img:"andean culture",ex:[
    {t:"Pasado",q:"Sami hamuwanmi.",s:"La buena energía vino a mí."},
    {t:"Presente",q:"Samiy kashan.",s:"Tengo buena energía."},
    {t:"Futuro",q:"Sami hamunqa.",s:"La gracia vendrá."}
  ]},
  {cat:"Andino",q:"Kuyay",s:"Amor / afecto profundo",col:"#c7d2fe",note:"Amor que conecta al ser con todo",img:"love heart",ex:[
    {t:"Pasado",q:"Kuyaywan kawsarqani.",s:"Viví con amor."},
    {t:"Presente",q:"Kuyaywanmi kawsashani.",s:"Vivo con amor."},
    {t:"Futuro",q:"Kuyayta qosaq.",s:"Daré amor."}
  ]},
  {cat:"Andino",q:"Qhapaq",s:"Poderoso / noble / generoso",col:"#c7d2fe",note:"Qhapaq Inka = el gran gobernante",img:"andean culture",ex:[
    {t:"Pasado",q:"Qhapaq Inqa hatun karqan.",s:"El noble Inca era grande."},
    {t:"Presente",q:"Qhapaq runa kashan.",s:"Es una persona noble."},
    {t:"Futuro",q:"Qhapaqmi kanqa.",s:"Será noble."}
  ]},
  {cat:"Andino",q:"Inti Raymi",s:"Fiesta del Sol (solsticio de junio)",col:"#c7d2fe",img:"sunshine bright",ex:[
    {t:"Pasado",q:"Inti Raymipin takisharqanikuq.",s:"Cantábamos en el Inti Raymi."},
    {t:"Presente",q:"Inti Raymi hamushan.",s:"El Inti Raymi se acerca."},
    {t:"Futuro",q:"Inti Raymipin taquisaq.",s:"Bailaré en el Inti Raymi."}
  ]}
];
