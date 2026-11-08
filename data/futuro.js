// ============================================================
// FUTURO — oraciones para completar (tema "Futuro")
// Quechua sureño (Cusco-Collao) y Aymara (La Paz).
// ESTADO: pendiente de revisión por Illaripa / hablante nativo.
// Formato igual que oraciones-completar.js: g = grupo, q con "____".
// ============================================================

const FUTURO_Q = [
// ─── Grupo 1 · yo (-saq) / tú (-nki) / él-ella (-nqa) ───────────────
{g:1,lv:3,q:"Paqarin nuqa wasiyman ____.",s:"Mañana iré a mi casa.",ans:"risaq",opts:["risaq","rinki","rinqa","rirqani"],note:"ri- = ir · -saq = yo (futuro) · wasi-y-man = a mi casa"},
{g:1,lv:3,q:"Qam paqarin ____.",s:"Tú vendrás mañana.",ans:"hamunki",opts:["hamunki","hamusaq","hamunqa","hamurqanki"],note:"hamu- = venir · -nki = tú (futuro, igual que el presente: el tiempo lo da paqarin)"},
{g:1,lv:3,q:"Pay minchha ____.",s:"Él/ella llegará pasado mañana.",ans:"chayamunqa",opts:["chayamunqa","chayamusaq","chayamunki","chayamurqan"],note:"chaya-mu- = llegar (hacia aquí) · -nqa = él/ella (futuro) · minchha = pasado mañana"},
{g:1,lv:3,q:"Nuqa tutamanta tantata ____.",s:"Por la mañana comeré pan.",ans:"mikhusaq",opts:["mikhusaq","mikhunki","mikhunqa","mikhuni"],note:"mikhu- = comer · -saq = yo (futuro) · tutamanta = por la mañana, temprano"},
{g:1,lv:3,q:"Qam runasimita ____.",s:"Tú aprenderás quechua.",ans:"yachanki",opts:["yachanki","yachasaq","yachanqa","yacharqanki"],note:"yacha- = saber, aprender · -nki = tú · runasimi = quechua"},
{g:1,lv:3,q:"Mamay paqarin ____.",s:"Mi madre cocinará mañana.",ans:"wayk'unqa",opts:["wayk'unqa","wayk'usaq","wayk'unki","wayk'urqan"],note:"wayk'u- = cocinar · -nqa = él/ella (futuro) · mama-y = mi madre"},
{g:1,lv:3,q:"Nuqa Pachamamaman haywarikuyta ____.",s:"Haré una ofrenda a la Pachamama.",ans:"ruwasaq",opts:["ruwasaq","ruwanki","ruwanqa","ruwarqani"],note:"ruwa- = hacer · -saq = yo (futuro) · haywarikuy = ofrenda · Pachamama-man = a la Pachamama"},
{g:1,lv:3,q:"Qam takita ____.",s:"Tú cantarás una canción.",ans:"takinki",opts:["takinki","takisaq","takinqa","takini"],note:"taki- = cantar · taki = canción · -nki = tú"},
{g:1,lv:3,q:"Pay qhichwa simita ____.",s:"Él/ella hablará quechua.",ans:"rimanqa",opts:["rimanqa","rimasaq","rimanki","riman"],note:"rima- = hablar · -nqa = él/ella (futuro) · riman = habla (presente)"},
{g:1,lv:3,q:"Nuqa qanta ____.",s:"Te esperaré.",ans:"suyasqayki",opts:["suyasqayki","suyasaq","suyanki","suyanqa"],note:"suya- = esperar · -sqayki = yo a ti (futuro) · qan-ta = a ti"},

// ─── Grupo 2 · nosotros (-sunchik / -saqku), ustedes (-nkichik), ellos (-nqaku)
{g:2,lv:4,q:"Paqarin llapanchik Qusqoman ____.",s:"Mañana todos (nosotros) iremos a Cusco.",ans:"risunchik",opts:["risunchik","risaqku","rinkichik","rinqaku"],note:"-sunchik = nosotros incluyendo a quien escucha · llapanchik = todos nosotros"},
{g:2,lv:4,q:"Ñuqayku wawqeywan chakrata ____.",s:"Mi hermano y yo (sin ti) trabajaremos la chacra.",ans:"llamk'asaqku",opts:["llamk'asaqku","llamk'asunchik","llamk'ankichik","llamk'anqaku"],note:"ñuqayku = nosotros SIN el que escucha → -saqku · llamk'a- = trabajar · chakra = campo"},
{g:2,lv:4,q:"Qamkuna paqarin ____.",s:"Ustedes vendrán mañana.",ans:"hamunkichik",opts:["hamunkichik","hamusunchik","hamunqaku","hamusaqku"],note:"qamkuna = ustedes · hamu- = venir · -nkichik = ustedes (futuro)"},
{g:2,lv:4,q:"Paykuna hatun raymipi ____.",s:"Ellos bailarán en la gran fiesta.",ans:"tusunqaku",opts:["tusunqaku","tusunkichik","tusunchik","tususaq"],note:"tusu- = bailar · -nqaku = ellos (futuro) · hatun raymi = gran fiesta"},
{g:2,lv:4,q:"Kunan tuta Inti Raymita ____.",s:"Esta noche celebraremos el Inti Raymi (todos).",ans:"raymichasunchik",opts:["raymichasunchik","raymichasaq","raymichanqa","raymichanki"],note:"raymicha- = celebrar · -sunchik = nosotros (todos) · kunan tuta = esta noche"},
{g:2,lv:4,q:"Paykuna apukunaman ____.",s:"Ellos subirán a las montañas sagradas.",ans:"wichanqaku",opts:["wichanqaku","wichasaqku","wichanki","wichasunchik"],note:"wicha- = subir · apu-kuna-man = a los apus (montañas sagradas) · -nqaku = ellos"},
{g:2,lv:4,q:"Qamkuna runasimita allinta ____.",s:"Ustedes hablarán bien el quechua.",ans:"rimankichik",opts:["rimankichik","rimanqaku","rimasunchik","rimasaq"],note:"allin-ta = bien · rima- = hablar · -nkichik = ustedes"},
{g:2,lv:4,q:"Ñuqanchik kuska ____.",s:"Juntos (nosotros) comeremos.",ans:"mikhusunchik",opts:["mikhusunchik","mikhusaqku","mikhunqaku","mikhunkichik"],note:"kuska = juntos · ñuqanchik = nosotros (todos) → -sunchik"},

// ─── Grupo 3 · futuro con tiempo, negación y pregunta ──────────────
{g:3,lv:5,q:"Hamuq watapi Perú suyuman ____.",s:"El próximo año viajaré a Perú.",ans:"risaq",opts:["risaq","rirqani","rini","rinqa"],note:"hamuq wata = el año que viene · -pi = en · suyu = país, región"},
{g:3,lv:5,q:"Paqarin mana ____chu.",s:"Mañana no lloverá.",ans:"paranqa",opts:["paranqa","parasaq","paran","pararqan"],note:"para- = llover · mana ... -chu = negación · paranqachu = ¿lloverá? / no lloverá"},
{g:3,lv:5,q:"¿Qam paqarin ____chu?",s:"¿Vendrás mañana?",ans:"hamunki",opts:["hamunki","hamusaq","hamunqa","hamurqanki"],note:"-chu al final = pregunta sí/no · hamunkichu = ¿vendrás?"},
{g:3,lv:5,q:"Nuqa mana qunqasaqchu, ____ yuyarisqayki.",s:"No (te) olvidaré, siempre te recordaré.",ans:"wiñaypaq",opts:["wiñaypaq","qayna","kunan","manaraq"],note:"wiñaypaq = para siempre · yuyari- = recordar · -sqayki = yo a ti (futuro)"},
{g:3,lv:5,q:"Inti lluqsimuqtin, ____.",s:"Cuando salga el sol, rezaremos (todos).",ans:"mañakusunchik",opts:["mañakusunchik","mañakurqanchik","mañakuni","mañakunqa"],note:"inti lluqsimu-qtin = cuando salga el sol · mañaku- = pedir, rezar · -sunchik = nosotros"},
{g:3,lv:5,q:"¿Imata ____ paqarin?",s:"¿Qué harás mañana?",ans:"ruwanki",opts:["ruwanki","ruwasaq","ruwanqa","ruwarqanki"],note:"ima-ta = qué (objeto) · ruwa- = hacer · -nki = tú"},
{g:3,lv:5,q:"Mana ____chu, kaypi qhipakusaq.",s:"No me iré, me quedaré aquí.",ans:"risaq",opts:["risaq","rinki","rinqa","rini"],note:"mana risaqchu = no iré · kay-pi = aquí · qhipaku- = quedarse · -saq = yo"},
{g:3,lv:5,q:"Wawakuna hatunyaspa ____.",s:"Los niños, al crecer, aprenderán.",ans:"yachanqaku",opts:["yachanqaku","yachasaqku","yachankichik","yachasunchik"],note:"wawa-kuna = niños · hatunya-spa = creciendo · -nqaku = ellos (futuro)"}
];

const FUTURO_A = [
// ─── Grupo 1 · yo (-ä) / tú (-äta) / él-ella (-ani) ────────────────
{g:1,lv:3,q:"Qharürux naya utajar ____.",s:"Mañana iré a mi casa.",ans:"sarä",opts:["sarä","saräta","sarani","saraktha"],note:"sara- = ir · -ä = yo (futuro) · saraktha = voy (presente) · qharürux = mañana"},
{g:1,lv:3,q:"Juma qharürux ____.",s:"Tú vendrás mañana.",ans:"jutäta",opts:["jutäta","jutä","jutani","jutta"],note:"jut- = venir · -äta = tú (futuro) · jutta = vienes (presente)"},
{g:1,lv:3,q:"Jupa qharürux ____.",s:"Él/ella vendrá mañana.",ans:"jutani",opts:["jutani","jutä","jutäta","juti"],note:"-ani = él/ella (futuro) · juti = viene (presente)"},
{g:1,lv:3,q:"Naya t'ant'a ____.",s:"Comeré pan.",ans:"manq'ä",opts:["manq'ä","manq'äta","manq'ani","manq'tha"],note:"manq'a- = comer · -ä = yo (futuro) · t'ant'a = pan"},
{g:1,lv:3,q:"Juma aymar aru ____.",s:"Tú aprenderás aymara.",ans:"yatiqäta",opts:["yatiqäta","yatiqä","yatiqani","yatiqta"],note:"yatiqa- = aprender · -äta = tú (futuro) · aymar aru = idioma aymara"},
{g:1,lv:3,q:"Taykajax qharürux ____.",s:"Mi madre cocinará mañana.",ans:"phayani",opts:["phayani","phayä","phayäta","phayi"],note:"phaya- = cocinar · -ani = él/ella (futuro) · tayka-ja-x = mi madre (tema)"},
{g:1,lv:3,q:"Naya Pachamamaru waxt'a ____.",s:"Daré una ofrenda a la Pachamama.",ans:"churä",opts:["churä","churäta","churani","churtha"],note:"chura- = dar · waxt'a = ofrenda · Pachamama-ru = a la Pachamama · -ä = yo"},
{g:1,lv:3,q:"Juma mä q'uchu ____.",s:"Tú cantarás una canción.",ans:"q'uchüta",opts:["q'uchüta","q'uchü","q'uchuni","q'uchuta"],note:"q'uchu- = cantar · mä = un/una · -äta → -üta tras u (armonía con la vocal anterior)"},
{g:1,lv:3,q:"Jupa aymar aru ____.",s:"Él/ella hablará aymara.",ans:"arsuni",opts:["arsuni","arsü","arsüta","arsu"],note:"arsu- = hablar · -ni = él/ella (futuro) · arsu = habla (presente)"},

// ─── Grupo 2 · nosotros (-añani incl. / -pxä excl.), ustedes, ellos (-pxani)
{g:2,lv:4,q:"Jiwasax qharürux Chuqiyapur ____.",s:"Mañana todos (nosotros) iremos a La Paz.",ans:"sarañani",opts:["sarañani","sarapxä","sarapxäta","sarapxani"],note:"jiwasa = nosotros incluyendo a quien escucha → -añani · Chuqiyapu = La Paz"},
{g:2,lv:4,q:"Nanakax yapu ____.",s:"Nosotros (sin ti) trabajaremos la chacra.",ans:"irnaqapxä",opts:["irnaqapxä","irnaqañani","irnaqapxäta","irnaqapxani"],note:"nanaka = nosotros SIN el que escucha → -px- (plural) + -ä · irnaqa- = trabajar · yapu = chacra"},
{g:2,lv:4,q:"Jumanakax qharürux ____.",s:"Ustedes vendrán mañana.",ans:"jutapxäta",opts:["jutapxäta","jutapxä","jutapxani","jutañani"],note:"jumanaka = ustedes · -px- = plural · -äta = tú → ustedes (futuro)"},
{g:2,lv:4,q:"Jupanakax jach'a phistan ____.",s:"Ellos bailarán en la gran fiesta.",ans:"thuqhupxani",opts:["thuqhupxani","thuqhupxä","thuqhuñani","thuqhupxäta"],note:"thuqhu- = bailar · -px-ani = ellos (futuro) · jach'a = grande · phista-n = en la fiesta"},
{g:2,lv:4,q:"Jiwasax mayacht'asis ____.",s:"Juntos (todos) comeremos.",ans:"manq'añani",opts:["manq'añani","manq'apxä","manq'apxani","manq'äta"],note:"mayacht'asis = juntos, unidos · -añani = nosotros (todos)"},
{g:2,lv:4,q:"Jupanakax achachilanakar ____.",s:"Ellos subirán a las montañas sagradas.",ans:"makhatapxani",opts:["makhatapxani","makhatapxä","makhatañani","makhatäta"],note:"makhata- = subir · achachila-naka-r = a los achachilas (montañas sagradas, abuelos)"},
{g:2,lv:4,q:"Jumanakax aymar aru suma ____.",s:"Ustedes hablarán bien el aymara.",ans:"arsupxäta",opts:["arsupxäta","arsupxani","arsuñani","arsü"],note:"suma = bien, bonito · arsu- = hablar · -px-äta = ustedes (futuro)"},

// ─── Grupo 3 · futuro con tiempo, negación y pregunta ──────────────
{g:3,lv:5,q:"Jutiri marax Perú markar ____.",s:"El próximo año viajaré a Perú.",ans:"sarä",opts:["sarä","sarta","saraktha","sarani"],note:"jutiri mara = el año que viene · marka = pueblo, país · -r = hacia"},
{g:3,lv:5,q:"Qharürux janiw jallux ____ti.",s:"Mañana no lloverá.",ans:"purkani",opts:["purkani","purkä","purkäta","purki"],note:"jallu = lluvia · purka- = caer (la lluvia) · janiw ... -ti = negación"},
{g:3,lv:5,q:"¿Juma qharürux ____ti?",s:"¿Vendrás mañana?",ans:"jutäta",opts:["jutäta","jutä","jutani","jutañani"],note:"-ti al final = pregunta sí/no · jutätati = ¿vendrás?"},
{g:3,lv:5,q:"¿Kuns qharürux ____?",s:"¿Qué harás mañana?",ans:"luräta",opts:["luräta","lurä","lurani","lurañani"],note:"kuns = qué · lura- = hacer · -äta = tú (futuro)"},
{g:3,lv:5,q:"Janiw saräti, akan ____.",s:"No me iré, me quedaré aquí.",ans:"qhiparä",opts:["qhiparä","qhiparäta","qhiparani","qhipartha"],note:"janiw saräti = no iré · aka-n = aquí · qhipara- = quedarse · -ä = yo"},
{g:3,lv:5,q:"Inti mistuni ukjax ____.",s:"Cuando salga el sol, rezaremos (todos).",ans:"mayisiñani",opts:["mayisiñani","mayisï","mayisini","mayisipxäta"],note:"inti mistu- = salir el sol · ukjax = entonces, cuando · mayisi- = rezar, pedir · -ñani = nosotros (todos)"}
];
