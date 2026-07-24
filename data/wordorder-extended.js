const WORDORDER_Q_EXT = [
  // ===== LEVEL 1 — Básico (2-3 palabras) =====
  // --- Saludos y expresiones ---
  {level:1, es:"Buenos días.", ans:["P'unchaymi"], note:"P'unchay = día. -mi = certeza. Saludo matutino estándar."},
  {level:1, es:"Buenas noches.", ans:["Tutanchis"], note:"Tuta = noche. -nchis = inclusivo (nosotros). Buenas noches para todos."},
  {level:1, es:"Bienvenido.", ans:["Riqsimuy"], note:"Riqsimuy = ven a conocerse. Saludo de recibimiento."},
  {level:1, es:"Nos vemos.", ans:["Tupananchiskama"], note:"Tupananchiskama = hasta que nos encontremos. Despedida cordial."},
  {level:1, es:"Hasta pronto.", ans:["Qhawarikunanchiskama"], note:"Lit. 'hasta que nos veamos de nuevo'. Despedida informal."},
  {level:1, es:"Disculpa.", ans:["Minaqanchu"], note:"Minaqanchu = disculpe / perdón. Uso para pedir disculpas."},
  {level:1, es:"¿Estás bien?", ans:["Allinchu"], note:"Allin = bien. -chu = partícula de pregunta. Sí/no question."},

  // --- Familia ---
  {level:1, es:"Mi madre.", ans:["Mamay"], note:"Mama = madre. -y = mi (posesivo 1ra persona)."},
  {level:1, es:"Mi padre.", ans:["Taytay"], note:"Tayta = padre. -y = mi."},
  {level:1, es:"El niño.", ans:["Wawa"], note:"Wawa = bebé / niño pequeño. Sustantivo simple."},
  {level:1, es:"Los hermanos.", ans:["Wawqikuna"], note:"Wawq = hermano. -kuna = plural (varios hermanos)."},
  {level:1, es:"Nuestro padre.", ans:["Taytanchis"], note:"Tayta = padre. -nchis = posesivo inclusivo (nuestro, incluyendo al oyente)."},
  {level:1, es:"El abuelo.", ans:["Awki"], note:"Awki = abuelo. Palabra base sin sufijos."},
  {level:1, es:"La comunidad.", ans:["Ayllu"], note:"Ayllu = comunidad / familia extendida. Concepto andino central."},

  // --- Naturaleza ---
  {level:1, es:"El sol brilla.", ans:["Inti","t'akushan"], note:"Inti = sol. t'akushan = está brillando (progresivo)."},
  {level:1, es:"Hay nieve.", ans:["Riti","kashan"], note:"Riti = nieve. kashan = está / existe."},
  {level:1, es:"La luna.", ans:["Killa"], note:"Killa = luna / mes. Palabra polisémica en quechua."},
  {level:1, es:"El río.", ans:["Mayu"], note:"Mayu = río. Referencia a la serpiente cósmica en cosmovisión andina."},
  {level:1, es:"Las estrellas.", ans:["Ch'askakuna"], note:"Ch'aski = estrella. -kuna = plural."},
  {level:1, es:"La montaña.", ans:["Urqu"], note:"Urqu = cerro / montaña. Los cerros son apus (seres sagrados)."},

  // --- Comida ---
  {level:1, es:"Quiero pan.", ans:["T'ant'a","munani"], note:"T'ant'a = pan. munani = quiero (yo). SOV: objeto + verbo."},
  {level:1, es:"Tengo hambre.", ans:["Ch'okchaq","kani"], note:"Ch'okchaq = hambriento. kani = yo soy/estoy."},
  {level:1, es:"Tengo sed.", ans:["Yak'aq","kani"], note:"Yak'aq = sed (lit. 'de agua'). kani = estoy."},
  {level:1, es:"Está picante.", ans:["Uchuqmi"], note:"Uchuq = picante. -mi = certeza. Califica el sabor."},
  {level:1, es:"El mercado.", ans:["Qhatu"], note:"Qhatu = mercado. Lugar de intercambio comunitario."},
  {level:1, es:"Beber agua.", ans:["Yakuta","upyay"], note:"Yaku = agua. -ta = objeto directo. upyay = beber."},

  // --- Cuerpo ---
  {level:1, es:"Mi cabeza.", ans:["Umam"], note:"Uma = cabeza. -y (asimilado: -m) = mi. Posesivo con nasalización."},
  {level:1, es:"Los ojos.", ans:["Ñawikuna"], note:"Ñawi = ojo. -kuna = plural."},
  {level:1, es:"Las manos.", ans:["Makikuna"], note:"Maki = mano. -kuna = plural."},
  {level:1, es:"Mi corazón.", ans:["Sunqum"], note:"Sunqu = corazón (órgano). -y = mi. Asimilado: -m."},

  // --- Ropa ---
  {level:1, es:"El gorro.", ans:["Ch'ullu"], note:"Ch'ullu = gorro tejido. Prenda típica andina."},
  {level:1, es:"El poncho.", ans:["Pharkhu"], note:"Pharkhu = poncho. Prenda ceremonial y cotidiana."},
  {level:1, es:"La manta.", ans:["Lliklla"], note:"Lliklla = manta / shawl. Tejido femenino tradicional."},
  {level:1, es:"Los zapatos.", ans:["Maku"], note:"Maku = zapatos / calzado. Plural por defecto en quechua."},

  // --- Animales ---
  {level:1, es:"El perro.", ans:["Allqu"], note:"Allqu = perro. Animal doméstico en comunidades andinas."},
  {level:1, es:"La llama.", ans:["Lampan"], note:"Lampan = llama. Animal de carga esencial en los Andes."},
  {level:1, es:"El cóndor.", ans:["Kuntur"], note:"Kuntur = cóndor. Ave sagrada del mundo andino (Hanan Pacha)."},
  {level:1, es:"El gato.", ans:["Misi"], note:"Misi = gato. Adoptado del español en algunas regiones."},

  // --- Lugares ---
  {level:1, es:"Mi casa.", ans:["Wasiy"], note:"Wasi = casa. -y = mi."},
  {level:1, es:"La escuela.", ans:["Q'illu"], note:"Q'illu = escuela (del aimara). Lugar de aprendizaje."},
  {level:1, es:"El hospital.", ans:["Misk'ihuasi"], note:"Misk'i = enfermo + huasi = casa. Lit. 'casa de enfermos'."},
  {level:1, es:"El campo.", ans:["Wachu"], note:"Wachu = campo / pampa. Espacio abierto rural."},

  // --- Verbos simples ---
  {level:1, es:"Ven aquí.", ans:["Hamuy"], note:"Hamuy = ven (imperativo). Forma de mando directa."},
  {level:1, es:"Espera.", ans:["Sayk'uy"], note:"Sayk'uy = esperar / parar. Imperativo."},
  {level:1, es:"Mira.", ans:["Qhaway"], note:"Qhaway = ver / mirar. Imperativo de atención."},
  {level:1, es:"Escucha.", ans:["Uyarikuy"], note:"Uyarikuy = escuchar. Imperativo reflexivo."},

  // ===== LEVEL 2 — Intermedio (3-4 palabras) =====
  // --- Familia y personas ---
  {level:2, es:"Mi madre cocina.", ans:["Mamaymi","uchukushan"], note:"-ymi = mi madre (con certeza). uchukushan = está cocinando (progresivo)."},
  {level:2, es:"El niño duerme.", ans:["Wawa","waych'ushan"], note:"Wawa = niño. waych'ushan = está durmiendo. SOV con progresivo."},
  {level:2, es:"Mi hermana teje.", ans:["Ñañay","wathapushan"], note:"Ñaña = hermana (dicha por mujer). wathapushan = está tejiendo."},
  {level:2, es:"Tu hijo estudia.", ans:["Churiyki","yachakushan"], note:"Churi = hijo. -yki = tu (posesivo 2da persona). yachakushan = está estudiando."},
  {level:2, es:"El abuelo habla.", ans:["Awki","rimashan"], note:"Awki = abuelo. rimashan = está hablando (progresivo)."},
  {level:2, es:"Nuestra comunidad vive.", ans:["Ayllunchis","tiyakushan"], note:"Ayllu = comunidad. -nchis = nuestro (inclusivo). tiyakushan = vive / reside."},

  // --- Alimentos y bebidas ---
  {level:2, es:"Yo quiero papa.", ans:["Nuqam","papata","munani"], note:"Nuqam = yo (énfasis). papa = papa. -ta = objeto. munani = quiero."},
  {level:2, es:"Ella come quinua.", ans:["Pay","qañiwata","mikhushan"], note:"Pay = ella. qañiwa = quinua. -ta = objeto. mikhushan = está comiendo."},
  {level:2, es:"El agua está fría.", ans:["Yaku","chirim","kashan"], note:"Yaku = agua. chiri = frío. kashan = está. Adjetivo + copula."},
  {level:2, es:"Vamos al mercado.", ans:["Qhatuman","riyku"], note:"Qhatu = mercado. -man = hacia (direccional). riyku = vamos."},
  {level:2, es:"Yo bebo chicha.", ans:["Nuqa","awata","upyanim"], note:"Nuqa = yo. awa = chicha. -ta = objeto. upyanim = bebo (culturalmente aceptado)."},
  {level:2, es:"El pollo está caliente.", ans:["K'uyu","q'umun","kashan"], note:"K'uyu = pollo. q'umun = caliente. kashan = está."},

  // --- Acciones diarias ---
  {level:2, es:"Yo me levanto temprano.", ans:["Nuqa","phashpaq","urkuni"], note:"Nuqa = yo. phashpaq = temprano. urkuni = me levanto."},
  {level:2, es:"Ella camina despacio.", ans:["Pay","susullan","purishan"], note:"Pay = ella. susullan = despacio. purishan = está caminando."},
  {level:2, es:"Nosotros cantamos.", ans:["Qanquna","takinim"], note:"Qanquna = nosotros (inclusivos). takinim = cantamos."},
  {level:2, es:"Ellos bailan.", ans:["Paykuna","tusushan"], note:"Paykuna = ellos/ellas. tusushan = están bailando."},
  {level:2, es:"Yo escribo una carta.", ans:["Nuqa","llak'ata","qillqani"], note:"Nuqa = yo. llak'a = carta/mensaje. -ta = objeto. qillqani = escribo."},
  {level:2, es:"Él trabaja fuerte.", ans:["Pay","sinch'i","llamk'ashan"], note:"Pay = él. sinch'i = fuerte. llamk'ashan = está trabajando."},

  // --- Naturaleza y clima ---
  {level:2, es:"El sol es grande.", ans:["Inti","hatunmi"], note:"Inti = sol. hatun = grande. -mi = certeza."},
  {level:2, es:"Llueve mucho.", ans:["Mushuk","ancha","t'akushan"], note:"Mushuk = lluvia. ancha = mucho. t'akushan = está cayendo."},
  {level:2, es:"La tierra es fértil.", ans:["Pacha","saph'iy","kashan"], note:"Pacha = tierra. saph'iy = fértil. kashan = está."},
  {level:2, es:"El cielo es azul.", ans:["Anqas","kashan"], note:"Anqas = azul. kashan = está. Predicado nominal sin sujeto explícito."},
  {level:2, es:"Hay nieve en la montaña.", ans:["Urqupi","riti","kashan"], note:"Urqu = montaña. -pi = en (locativo). riti = nieve. kashan = hay."},
  {level:2, es:"El río corre rápido.", ans:["Mayu","llallan","phawashan"], note:"Mayu = río. llallan = rápido. phawashan = está corriendo."},

  // --- Colores y ropa ---
  {level:2, es:"El poncho es rojo.", ans:["Pharkhu","pukami"], note:"Pharkhu = poncho. puka = rojo. -mi = certeza. Colores como predicados."},
  {level:2, es:"La falda es negra.", ans:["Kumbi","yanami"], note:"Kumbi = falda. yana = negro. -mi = certeza."},
  {level:2, es:"Llevo un ch'ullu blanco.", ans:["Ch'ullu","yurak","apamani"], note:"Ch'ullu = gorro. yurak = blanco. apamani = llevo."},
  {level:2, es:"La chompa es nueva.", ans:["Llakwa","masikmi"], note:"Llakwa = chompa. masik = nuevo. -mi = certeza."},
  {level:2, es:"La bufanda es gris.", ans:["Phullku","ch'iyarami"], note:"Phullku = bufanda. ch'iyara = gris. -mi = certeza."},

  // --- Preguntas ---
  {level:2, es:"¿Dónde estás?", ans:["Maypi","kashanki"], note:"Maypi = dónde (-pi locativo). kashanki = estás (tú)."},
  {level:2, es:"¿Quién es?", ans:["Pi","kasqan"], note:"Pi = quién. kasqan = es / quien es. Estructura existencial."},
  {level:2, es:"¿Cuántos hay?", ans:["Qhapaq","kashan"], note:"Qhapaq = cuántos. kashan = hay. Pregunta de cantidad."},
  {level:2, es:"¿Qué haces?", ans:["Imata","rawaniki"], note:"Imata = qué cosa. rawaniki = haces (tú). -niki = sufijo 2da persona."},
  {level:2, es:"¿Cuándo llegas?", ans:["Mayqen","hamunki"], note:"Mayqen = cuándo. hamunki = llegas / vienes."},
  {level:2, es:"¿Para qué sirve?", ans:["Qanray","chay","rurashan"], note:"Qanray = para qué. chay = eso. rurashan = se hace / sirve."},

  // --- Lugares y dirección ---
  {level:2, es:"Voy a la escuela.", ans:["Q'illuman","riyani"], note:"Q'illu = escuela. -man = hacia. riyani = voy."},
  {level:2, es:"Ella vive en Cusco.", ans:["Pay","Qusqupi","tiyakushan"], note:"Pay = ella. Qusqu = Cusco. -pi = en. tiyakushan = vive."},
  {level:2, es:"Regresa a casa.", ans:["Wasimanta","kutimuy"], note:"Wasi = casa. -manta = desde. kutimuy = regresa (imperativo)."},
  {level:2, es:"El camino es largo.", ans:["Ñan","llamp'u","kashan"], note:"Ñan = camino. llamp'u = largo. kashan = está."},
  {level:2, es:"Hay un puente.", ans:["Q'aschu","huk","kashan"], note:"Q'aschu = puente. huk = un. kashan = hay."},
  {level:2, es:"Vamos al pueblo.", ans:["Llaqtaman","riyku"], note:"Llaqta = pueblo/comunidad. -man = hacia. riyku = vamos (inclusivo)."},

  // --- Emociones y estados ---
  {level:2, es:"Estoy triste.", ans:["Llakiq","kani"], note:"Llakiq = triste. kani = yo estoy. Adjetivo + copula."},
  {level:2, es:"Estoy alegre.", ans:["Takiq","kani"], note:"Takiq = contento/alegre. kani = estoy."},
  {level:2, es:"Tengo miedo.", ans:["Manchay","kani"], note:"Manchay = miedo. kani = tengo/estoy. Emoción como estado."},
  {level:2, es:"Ella está enojada.", ans:["Pay","anchaqmi"], note:"Pay = ella. anchaq = enojado. -mi = certeza."},
  {level:2, es:"Me siento bien.", ans:["Allinmi","kashay"], note:"Allin = bien. -mi = certeza personal. kashay = me siento/estoy."},

  // --- Tiempo ---
  {level:2, es:"Hoy hace calor.", ans:["Kunan","suni","t'akushan"], note:"Kunan = hoy. suni = calor del sol. t'akushan = está haciendo."},
  {level:2, es:"Ayer llovió.", ans:["Ñawpa","mushuq","t'akarqan"], note:"Ñawpa = ayer. mushuq = lluvia. t'akarqan = cayó (pasado)."},
  {level:2, es:"Siempre canta.", ans:["Tuti","takashan"], note:"Tuti = siempre. takashan = cantea/está cantando. Adverbio de frecuencia."},
  {level:2, es:"Mañana voy.", ans:["Qhipa","riyani"], note:"Qhipa = después/futuro. riyani = voy. Tiempo referencial al inicio."},
  {level:2, es:"Ya está listo.", ans:["Tukuy"], note:"Tukuy = ya está / terminó / listo. Adverbio+verbo fusionado."},
  {level:2, es:"El año nuevo.", ans:["Mushuk","wata"], note:"Mushuk = nuevo. wata = año. Adjetivo + sustantivo (orden flexible)."},

  // --- Verbos con objetos ---
  {level:2, es:"Yo busco mi llaqta.", ans:["Nuqa","llaqtayta","maskhani"], note:"Nuqa = yo. llaqta = tierra/patria. -y = mi. -ta = objeto. maskhani = busco."},
  {level:2, es:"Ella enseña a los niños.", ans:["Pay","wawakunata","yachachishan"], note:"Pay = ella. wawa = niño. -kuna = plural. -ta = objeto. yachachishan = está enseñando."},
  {level:2, es:"Ellos compran comida.", ans:["Paykuna","mikhunata","mint'ashan"], note:"Paykuna = ellos. mikhuna = comida. -ta = objeto. mint'ashan = están comprando."},
  {level:2, es:"Yo limpio la casa.", ans:["Nuqa","wasita","lamp'uni"], note:"Nuqa = yo. wasi = casa. -ta = objeto. lamp'uni = limpio."},
  {level:2, es:"Él corta leña.", ans:["Pay","k'uruta","ch'aqashan"], note:"Pay = él. k'uru = árbol/madera. -ta = objeto. ch'aqashan = está cortando."},
  {level:2, es:"Yo siembro maíz.", ans:["Nuqa","sara","t'akini"], note:"Nuqa = yo. sara = maíz. t'akini = siembro. Objeto sin -ta (indefinido)."},

  // ===== LEVEL 3 — Avanzado (4-6 palabras) =====
  // --- Oraciones complejas con múltiples sufijos ---
  {level:3, es:"Mi madre vive en el pueblo.", ans:["Mamaymi","llaqtapi","tiyakushan"], note:"-ymi = mi madre (posesivo + certeza). -pi = locativo (en). Estructura SOV clásica."},
  {level:3, es:"Los niños juegan en la escuela.", ans:["Wawakuna","q'illupi","pukllashan"], note:"Wawa = niño. -kuna = plural. q'illu = escuela. -pi = en. pukllashan = están jugando."},
  {level:3, es:"Ella teje una manta para la comunidad.", ans:["Pay","llaqllita","aylluman","wathapushan"], note:"Pay = ella. lliklla = manta. -ta = objeto. ayllu = comunidad. -man = para/hacia."},
  {level:3, es:"Nosotros vivimos en la montaña sagrada.", ans:["Qanquna","urqupi","tiyarinim"], note:"Qanquna = nosotros. urqu = montaña (apu). -pi = en. tiyarinim = vivimos."},
  {level:3, es:"Ellos caminan por el camino inca.", ans:["Paykuna","qhapaq","ñanpi","purishan"], note:"Paykuna = ellos. qhapaq ñan = camino inca. -pi = por. purishan = caminan."},
  {level:3, es:"Mi abuela cocina papa con ají.", ans:["Quyami","papata","uchutashan"], note:"-ymi = mi abuela. papa. -ta = objeto. uchutashan = está cocinando."},
  {level:3, es:"El cóndor vuela sobre la montaña.", ans:["Kuntur","urquta","phawashan"], note:"Kuntur = cóndor. urqu = montaña. -ta = acusativo. phawashan = vuela."},
  {level:3, es:"Yo quiero aprender quechua.", ans:["Nuqa","rimasimi","yachay","munani"], note:"Nuqa = yo. rima-simi = quechua (habla-lengua). yachay = aprender. munani = quiero."},
  {level:3, es:"Ella busca plantas medicinales.", ans:["Pay","t'ulakunata","maskhashan"], note:"Pay = ella. t'ula = planta medicinal. -kuna = plural. -ta = objeto. maskhashan = busca."},
  {level:3, es:"Nosotros cosechamos la quinua.", ans:["Qanquna","qañiwata","uchuychim"], note:"Qanquna = nosotros. qañiwa = quinua. -ta = objeto. uchuychim = cosechamos."},

  // --- Preguntas avanzadas ---
  {level:3, es:"¿Dónde está el puente sobre el río?", ans:["Maypi","mayu","q'aschu","kashan"], note:"Maypi = dónde. mayu = río. q'aschu = puente. kashan = está. Pregunta con locativo."},
  {level:3, es:"¿Quién enseña a los niños en la escuela?", ans:["Pi","wawakunata","q'illupi","yachachishan"], note:"Pi = quién. wawa-kuna = niños. q'illu = escuela. -pi = en. yachachishan = enseña."},
  {level:3, es:"¿Cuántas personas viven en tu comunidad?", ans:["Qhapaq","sayakuna","ayllupi","tiyakushan"], note:"Qhapaq = cuántos. saya = gente. -kuna = plural. ayllu = comunidad. -pi = en."},
  {level:3, es:"¿Para qué sirve esta planta medicinal?", ans:["Kay","t'ulata","qanray","rurashan"], note:"Kay = esta. t'ula = planta medicinal. -ta = objeto. qanray = para qué. rurashan = sirve."},
  {level:3, es:"¿De dónde vienes tú?", ans:["Qharimpi","hamunki"], note:"Qharimpi = de dónde. hamunki = vienes (tú). Ablativo interrogativo."},

  // --- Pasado y futuro ---
  {level:3, es:"Ayer fui al mercado.", ans:["Ñawpa","qhatuman","riyrqani"], note:"Ñawpa = ayer. qhatu = mercado. -man = hacia. riyrqani = fui (pasado -rqa)."},
  {level:3, es:"El año pasado sembré papas.", ans:["Ñawpa","watapi","papata","t'akirqaani"], note:"Ñawpa wata = año pasado. -pi = en. papa. -ta = objeto. t'akirqaani = sembré."},
  {level:3, es:"Mañana iré a la escuela.", ans:["Qhipa","q'illuman","riyani"], note:"Qhipa = futuro/mañana. q'illu = escuela. -man = hacia. riyani = iré."},
  {level:3, es:"El próximo mes cosecharemos.", ans:["Qhipa","killapi","uchuychinku"], note:"Qhipa = siguiente. killa = mes. -pi = en. uchuychinku = cosecharemos."},
  {level:3, es:"Cuando era niño, jugaba mucho.", ans:["Wawa","kashaypi","ancha","pukllarqani"], note:"Wawa = niño. kashaypi = cuando era. ancha = mucho. pukllarqani = jugaba (pasado)."},

  // --- Estructuras causales y condicionales ---
  {level:3, es:"Porque hace frío, me pongo la chompa.", ans:["Chiri","ruray","llakwata","churani"], note:"Chiri = frío. ruray = por eso. llakwa = chompa. -ta = objeto. churani = me pongo."},
  {level:3, es:"Si llueve, no voy al campo.", ans:["Mushuk","t'akarqan","chayna","wachuman","riyniykhu"], note:"Mushuk = lluvia. t'akarqan = si cae (condicional). wachu = campo. -man = hacia."},
  {level:3, es:"Cuando sale el sol, me levanto.", ans:["Inti","llukshin","urkuni"], note:"Inti = sol. llukshin = cuando sale. urkuni = me levanto. Temporal + principal."},
  {level:3, es:"Mientras ella teje, yo canto.", ans:["Pay","wathapushan","nuqa","takashan"], note:"Pay = ella. wathapushan = teje. nuqa = yo. takashan = canto. Simultaneidad."},
  {level:3, es:"Antes de comer, lavo las manos.", ans:["Mikhuna","ñawpaq","makikunata","aphuni"], note:"Mikhuna = comida. ñawpaq = antes de. maki = mano. -kuna = plural. -ta = objeto."},

  // --- Cultura y cosmovisión ---
  {level:3, es:"El Pachamama nos da la vida.", ans:["Pachamama","qanqunata","kacharishan"], note:"Pachamama = Madre Tierra. qanquna = nosotros. kacharishan = nos da vida. Sujeto + dativo + verbo."},
  {level:3, es:"Los apus protegen nuestra comunidad.", ans:["Apus","ayllunta","llamp'ushan"], note:"Apus = seres tutelares de montañas. ayllu = comunidad. -ta = objeto. llamp'ushan = protegen."},
  {level:3, es:"En la fiesta de Raymi bailamos todos.", ans:["Raymipi","takllan","tusunim"], note:"Raymi = fiesta inca. -pi = en. takllan = todos. tusunim = bailamos."},
  {level:3, es:"La medicina andina cura el cuerpo y el alma.", ans:["Yachachiq","ch'aktata","kuchukushan"], note:"Yachachiq = sanador. ch'akta = cuerpo. -ta = objeto. kuchukushan = cura."},
  {level:3, es:"La wiphala representa los cuatro suyus.", ans:["Wiphala","tawa","suyukunata","qawashan"], note:"Wiphala = bandera comunitaria. tawa = cuatro. suyu = región. -kuna = plural. qawashan = representa."},

  // --- Oraciones con múltiples objetos y complementos ---
  {level:3, es:"Mi padre trae frijoles del campo.", ans:["Taytay","phatmamanta","frijulta","apasashan"], note:"-y = mi. phatma = campo. -manta = desde. frijul = frijol. -ta = objeto. apasashan = trae."},
  {level:3, es:"Ella vende ropa en el mercado.", ans:["Pay","qhatupi","llakwakunata","changashan"], note:"Pay = ella. qhatu = mercado. -pi = en. llakwa = ropa. -kuna = plural. -ta = objeto."},
  {level:3, es:"Los abuelos narran historias antiguas.", ans:["Awkikuna","mawk'a","yupaykunata","yupashan"], note:"Awki = abuelo. -kuna = plural. mawk'a = antiguo. yupay = historia. -kuna = plural. -ta = objeto."},
  {level:3, es:"Yo guardo dinero para el año nuevo.", ans:["Nuqa","mushuk","watan","qullqiyta","qullqiyani"], note:"Nuqa = yo. mushuk wata = año nuevo. qullqiy = dinero. -ta = objeto. qullqiyani = ahorro."},
  {level:3, es:"Él limpia la casa de su madre.", ans:["Pay","mamap","wasita","lamp'ushan"], note:"Pay = él. mama = madre. -p = su (posesivo 3ra). wasi = casa. -ta = objeto. lamp'ushan = limpia."},
  {level:3, es:"Ellas tejen mantas rojas para los niños.", ans:["Paykuna","wawakunap","llaqllikunata","pukakuna","wathapashan"], note:"Paykuna = ellas. wawa = niño. -kuna = plural. -p = su. lliklla = manta. puka = rojo. -kuna = plural."},

  // --- Comparativos y superlativos ---
  {level:3, es:"El Urubamba es más largo que el Willkamayu.", ans:["Urubamba","Willkamayuta","llamp'u","kashan"], note:"Urubamba = río. Willkamayu = otro río. -ta = comparativo. llamp'u = largo. kashan = es."},
  {level:3, es:"Esta es la montaña más alta.", ans:["Kay","anchaq","urqu","kashan"], note:"Kay = esta. anchaq = alto/grande. urqu = montaña. kashan = es. Superlativo implícito."},
  {level:3, es:"Los niños son más fuertes que los abuelos.", ans:["Wawakuna","awkikunata","sinch'i","kashan"], note:"Wawa = niño. -kuna = plural. awki = abuelo. -kuna = plural. -ta = comparativo. sinch'i = fuerte."},

  // --- Más ejercicios variados nivel 3 ---
  {level:3, es:"El mediador curandero sana con plantas.", ans:["Yachachiq","t'ulakunapi","kuchukushan"], note:"Yachachiq = sanador. t'ula = planta medicinal. -kuna = plural. -pi = con/mientras. kuchukushan = sana."},
  {level:3, es:"Nosotros recordamos a nuestros antepasados.", ans:["Qanquna","ñawpa","chiqapakunata","yuyarichim"], note:"Qanquna = nosotros. ñawpa = antepasados. chiqapaq = pariente. -kuna = plural. -ta = objeto. yuyarichim = recordamos."},
  {level:3, es:"La lluvia alimenta los campos cultivados.", ans:["Mushuk","phatmakunata","kacharishan"], note:"Mushuk = lluvia. phatma = campo cultivado. -kuna = plural. -ta = objeto. kacharishan = alimenta."},
  {level:3, es:"Ella habla quechua y español.", ans:["Pay","rimashan","rimasimim","castellanom"], note:"Pay = ella. rimashan = habla. rima-simi = quechua. castellano = español. -m = y (conjunción)."},
  {level:3, es:"Mi hermano pastorea las alpacas en el altiplano.", ans:["Wawqiy","jalq'ata","alpankunata","chakirashan"], note:"-y = mi. jalq'a = altiplano. alpa = alpaca. -kuna = plural. -ta = objeto. chakirashan = pastorea."},
  {level:3, es:"Los ancianos narran leyendas de los cerros.", ans:["Phuqchukuna","urquta","yupaykunata","yupashan"], note:"Phuqchu = anciano. -kuna = plural. urqu = cerro. -ta = objeto. yupay = leyenda. -kuna = plural."},
  {level:3, es:"Yo recolecto hierbas medicinales en la montaña.", ans:["Nuqa","urqupi","t'ulakunata","uchuyani"], note:"Nuqa = yo. urqu = montaña. -pi = en. t'ula = hierba medicinal. -kuna = plural. -ta = objeto. uchuyani = recolecto."},
  {level:3, es:"La comunidad celebra el Inti Raymi en junio.", ans:["Ayllu","Inti","Raymita","kutirashan"], note:"Ayllu = comunidad. Inti Raymi = festividad del sol. -ta = objeto. kutirashan = celebra (lit. 'da vuelta la rueda')."},
  {level:3, es:"El sacerdote agradece a la Pachamama.", ans:["Wank'aq","Pachamamata","yupaychashan"], note:"Wank'aq = sacerdote/chamán. Pachamama. -ta = objeto. yupaychashan = agradece/reverencia."},
  {level:3, es:"El río serpiente baja de la cordillera.", ans:["Mayu","suyuta","llukshin","phawashan"], note:"Mayu = río (serpiente cósmica). suyu = cordillera. -ta = desde. llukshin = sale. phawashan = baja/fluye."},
  {level:3, es:"Ellas preparan huminta con maíz nuevo.", ans:["Paykuna","mushuq","sara","humintata","uchukushan"], note:"Paykuna = ellas. mushuk = nuevo. sara = maíz. huminta = humita. -ta = objeto. uchukushan = preparan."},
  {level:3, es:"Mi familia vive en el valle del Urubamba.", ans:["Aylluy","Urubamba","lamapi","tiyakushan"], note:"Ayllu = familia. -y = mi. Urubamba = valle. lama = valle. -pi = en. tiyakushan = vive."},
  {level:3, es:"Los niños aprenden a cantar en quechua.", ans:["Wawakuna","rimasimimpi","takiy","yachakushan"], note:"Wawa = niño. -kuna = plural. rima-simi = quechua. -pi = en. takiy = cantar. yachakushan = aprenden."},
  {level:3, es:"El comerciante vende frutas en el mercado.", ans:["Saraq","qhatupi","maraqta","ch'ururukuna","changashan"], note:"Saraq = comerciante. qhatu = mercado. -pi = en. maraqta = manzana. ch'ururu = frutas. -kuna = plural."}
];

const WORDORDER_A_EXT = [
  // ===== Nivel 1 — Básico =====
  {level:1, es:"Buenos días.", ans:["Iqi","arüru"], note:"Iqi = buen/buena. arüru = amanecer / mañana. Saludo matutino."},
  {level:1, es:"Buenas tardes.", ans:["Iqi","ch'ama"], note:"Iqi = bueno. ch'ama = tarde. Saludo vespertino."},
  {level:1, es:"Buenas noches.", ans:["Iqi","k'uya"], note:"Iqi = bueno. k'uya = noche. Saludo nocturno."},
  {level:1, es:"Está bien.", ans:["Waliki"], note:"Waliki = está bien / de acuerdo. Respuesta universal."},
  {level:1, es:"Gracias.", ans:["Yuspagara"], note:"Yuspagara = gracias. Lit. 'te agradezco'. Forma coloquial."},
  {level:1, es:"Hola.", ans:["Kamisaki"], note:"Kamisaki = hola / saludo. Forma estándar aimara."},
  {level:1, es:"¿Estás bien?", ans:["Kamisarañachu"], note:"Kamisaraña = estoy bien. -chu = partícula interrogativa."},
  {level:1, es:"Sí.", ans:["Jawa"], note:"Jawa = sí / claro. Confirmación directa."},
  {level:1, es:"No.", ans:["Jani"], note:"Jani = no. Negación básica."},
  {level:1, es:"Ven.", ans:["Jutiri"], note:"Jutiri = ven (imperativo). Invitación a acercarse."},
  {level:1, es:"Espera.", ans:["Sut'iri"], note:"Sut'iri = espera. Imperativo de detención."},
  {level:1, es:"Mira.", ans:["Uñakaxa"], note:"Uñakaxa = mira / observa. Imperativo de atención."},

  // --- Familia ---
  {level:1, es:"Mi madre.", ans:["Mamasa"], note:"-sa = sufijo posesivo 1ra persona. mamasa = mi madre."},
  {level:1, es:"Mi padre.", ans:["Ch'utasa"], note:"Ch'uta = padre. -sa = mi. Forma posesiva."},
  {level:1, es:"El niño.", ans:["Yuqalla"], note:"Yuqalla = niño / bebé. Sustantivo sin sufijos."},
  {level:1, es:"Los hermanos.", ans:["Wawqikuna"], note:"Wawq = hermano. -kuna = plural. Los hermanos."},
  {level:1, es:"El abuelo.", ans:["Jach'a tayta"], note:"Jach'a = grande. tayta = padre. Lit. 'padre grande'."},
  {level:1, es:"La abuela.", ans:["Jach'a ch'ica"], note:"Jach'a = grande. ch'ica = madre. Lit. 'madre grande'."},

  // --- Naturaleza ---
  {level:1, es:"La tierra.", ans:["Pacha"], note:"Pacha = tierra / mundo / tiempo. Concepto polisémico aimara."},
  {level:1, es:"El lago.", ans:["Quta"], note:"Quta = lago. Los lagos son sagrados en la cosmovisión aymara."},
  {level:1, es:"La montaña.", ans:["Qullu"], note:"Qullu = montaña / cerro. Los cerros son jalqas (seres protectores)."},
  {level:1, es:"El sol.", ans:["Inti"], note:"Inti = sol. Entidad sagrada en ambas culturas andinas."},
  {level:1, es:"La luna.", ans:["Phaxsi"], note:"Phaxsi = luna. Entidad femenina en la cosmovisión aymara."},
  {level:1, es:"Las estrellas.", ans:["Ch'askakuna"], note:"Ch'aski = estrella. -kuna = plural."},
  {level:1, es:"La lluvia.", ans:["Jallu"], note:"Jallu = lluvia / agua. Elemento vital para la agricultura."},

  // --- Comida ---
  {level:1, es:"Quiero agua.", ans:["Umata","muntha"], note:"Uma = agua. -ta = objeto directo. muntha = quiero (yo)."},
  {level:1, es:"Tengo hambre.", ans:["Mak'uthaña","waqthay"], note:"Mak'uthaña = comida. waqthay = tengo hambre (lit. 'se me hace')."},
  {level:1, es:"El chuño.", ans:["Ch'uñu"], note:"Ch'uñu = papa deshidratada. Alimento base del altiplano."},
  {level:1, es:"La papa.", ans:["Ch'uñu"], note:"Ch'uñu = chuño / papa seca. Fundamental en la gastronomía aymara."},
  {level:1, es:"Beber.", ans:["Umtha"], note:"Umtha = beber. Raíz: uma (agua) + -tha (acción)."},
  {level:1, es:"El mercado.", ans:["Qhatu"], note:"Qhatu = mercado. Lugar de trueque y comercio comunitario."},

  // --- Cuerpo ---
  {level:1, es:"La cabeza.", ans:["Uma"], note:"Uma = cabeza. En aymara también significa 'agua' por la forma."},
  {level:1, es:"Los ojos.", ans:["Ñawikuna"], note:"Ñawi = ojo. -kuna = plural."},
  {level:1, es:"Las manos.", ans:["Makikuna"], note:"Maki = mano. -kuna = plural."},
  {level:1, es:"El corazón.", ans:["Sunqu"], note:"Sunqu = corazón. Centro emocional y espiritual."},

  // --- Ropa ---
  {level:1, es:"El sombrero.", ans:["Ch'ullu"], note:"Ch'ullu = gorro tejido. Prenda andina emblemática."},
  {level:1, es:"El poncho.", ans:["Pharkhu"], note:"Pharkhu = poncho. Vestimenta ceremonial y cotidiana."},
  {level:1, es:"La pollera.", ans:["Kumbi"], note:"Kumbi = falda / pollera. Vestimenta femenina tradicional."},
  {level:1, es:"Los zapatos.", ans:["Makhu"], note:"Makhu = zapatos. Calzado andino."},

  // --- Animales ---
  {level:1, es:"La llama.", ans:["Lampan"], note:"Lampan = llama. Animal doméstico andino esencial."},
  {level:1, es:"La alpaca.", ans:["Alpan"], note:"Alpan = alpaca. Fuente de lana y alimento."},
  {level:1, es:"El cóndor.", ans:["Kunturi"], note:"Kunturi = cóndor. Ave sagrada del Hanan Pacha (mundo superior)."},
  {level:1, es:"El perro.", ans:["Anu"], note:"Anu = perro. Animal doméstico en comunidades aymaras."},

  // --- Lugares ---
  {level:1, es:"La casa.", ans:["Uta"], note:"Uta = casa. Espacio de vida familiar."},
  {level:1, es:"El pueblo.", ans:["Llaqta"], note:"Llaqta = pueblo / comunidad. Unidad social andina."},
  {level:1, es:"El hospital.", ans:["Misk'iwasi"], note:"Misk'i = enfermo + uasi = casa. Lit. 'casa de enfermos'."},
  {level:1, es:"La escuela.", ans:["Yatiñasiri"], note:"Yatiña = conocimiento. siri = lugar. Lit. 'lugar de conocimiento'."},

  // --- Verbos simples ---
  {level:1, es:"Ven aquí.", ans:["Akana","jutiri"], note:"Akana = aquí. jutiri = ven (imperativo)."},
  {level:1, es:"Vamos.", ans:["Jutasa"], note:"Jutasa = vamos (inclusivo). Invitación colectiva."},
  {level:1, es:"Regresa.", ans:["Jiwt'aniri"], note:"Jiwt'aniri = regresa. Imperativo de retorno."},
  {level:1, es:"Vive.", ans:["Jistatha"], note:"Jistatha = vive / reside. Verbo de permanencia."},

  // ===== Nivel 2 — Intermedio =====
  {level:2, es:"¿Cómo te llamas?", ans:["Kunas","sutimax"], note:"Kunas = cómo/qué. sutimax = tu nombre. -max = posesivo 2da persona."},
  {level:2, es:"Estoy bien.", ans:["Kamisaraña"], note:"Kamisaraña = estoy bien. Lit. 'así estoy'. Respuesta completa."},
  {level:2, es:"Yo vivo aquí.", ans:["Naya","akanwa","jistatha"], note:"Naya = yo. akana = aquí. jistatha = vivo."},
  {level:2, es:"El lago es grande.", ans:["Quta","jach'ami"], note:"Quta = lago. jach'a = grande. -mi = certeza."},
  {level:2, es:"Ella come papa.", ans:["Pay","ch'uñuta","manq'atayna"], note:"Pay = ella. ch'uñu = chuño. -ta = objeto. manq'ata = come."},
  {level:2, es:"Ellos bailan.", ans:["Jiwt'ankuna","walathaya"], note:"Jiwt'an = ellos. walathaya = están bailando."},
  {level:2, es:"El cielo es azul.", ans:["Anqas","jaka","jistata"], note:"Anqas = azul. jaka = cielo. jistata = está."},
  {level:2, es:"Mi hermano trabaja.", ans:["Wawqisa","ch'amaña","katjasa"], note:"-sa = mi. wawq = hermano. ch'amaña = trabajo. katjasa = trabaja."},
  {level:2, es:"¿Dónde está tu casa?", ans:["Kawkins","utama","utjaspa"], note:"Kawkins = dónde. uta = casa. -ma = tu (posesivo). utjaspa = está."},
  {level:2, es:"El perro come.", ans:["Anu","manq'ata"], note:"Anu = perro. manq'ata = come. SOV: sujeto + objeto + verbo."},
  {level:2, es:"Tengo sed.", ans:["Umata","waqthay"], note:"Uma = agua. -ta = lit. 'de agua'. waqthay = tengo necesidad."},
  {level:2, es:"Está frío.", ans:["Ch'iriya"], note:"Ch'iriya = está frío. Adj + copula fusionados."},
  {level:2, es:"Vamos al mercado.", ans:["Qhatuna","jutasa"], note:"Qhatu = mercado. -na = hacia. jutasa = vamos."},
  {level:2, es:"Ella teje.", ans:["Pay","katjata","wayt'ata"], note:"Pay = ella. katjata = está trabajando. wayt'ata = tejiendo."},
  {level:2, es:"Yo como.", ans:["Naya","manq'akta"], note:"Naya = yo. manq'akta = como (1ra persona)."},
  {level:2, es:"Nosotros cantamos.", ans:["Nayakuna","takisawa"], note:"Nayakuna = nosotros. takisawa = cantamos."},
  {level:2, es:"La tierra es fértil.", ans:["Pacha","katjata","q'araña"], note:"Pacha = tierra. katjata = está. q'araña = fértil / productiva."},
  {level:2, es:"Ella es doctora.", ans:["Pay","jach'a","umatsu"], note:"Pay = ella. jach'a = grande. umatsu = médico (lit. 'el que sana')."},
  {level:2, es:"Llueve mucho.", ans:["Jallu","jach'a","ch'akata"], note:"Jallu = lluvia. jach'a = mucho. ch'akata = está cayendo."},
  {level:2, es:"Mi hijo estudia.", ans:["Churisa","kunsuyama","katjata"], note:"-sa = mi. churi = hijo. kunsuya = conocimiento. katjata = está estudiando."},
  {level:2, es:"¿Para qué lo haces?", ans:["Kunayam","chayta","katjanik"], note:"Kunayam = para qué. chay = eso. -ta = objeto. katjanik = haces."},
  {level:2, es:"Hay nieve en la montaña.", ans:["Qullu","ch'iriyani","jistata"], note:"Qullu = montaña. ch'iriyani = de nieve. jistata = hay/está."},
  {level:2, es:"El gato duerme.", ans:["Misi","utjata"], note:"Misi = gato. utjata = está durmiendo/dormido."},
  {level:2, es:"Ella es hermosa.", ans:["Pay","sumaqui","jistata"], note:"Pay = ella. sumaq = hermoso/a. -i = copula. jistata = está."},
  {level:2, es:"Tengo frío.", ans:["Ch'iriyara","waqthay"], note:"Ch'iriyara = de frío. waqthay = tengo (necesidad)."},

  // ===== Nivel 3 — Avanzado =====
  {level:3, es:"Mi madre vive en el altiplano.", ans:["Mamamasa","jalq'ataxa","jistatayna"], note:"-masa = mi. mama = madre. jalq'ata = altiplano. -xa = partícula topical. jistatayna = vivía."},
  {level:3, es:"Los niños juegan en la escuela.", ans:["Yuqallakuna","yatiñasirina","walathayakta"], note:"Yuqalla = niño. -kuna = plural. yatiñasiri = escuela. -na = en. walathayakta = están jugando."},
  {level:3, es:"La comunidad celebra el Año Nuevo.", ans:["Ayllu","jallta","machaq","wata","katjata","katjata"], note:"Ayllu = comunidad. jallta = celebra. machaq wata = Año Nuevo. katjata = está haciendo."},
  {level:3, es:"Mi abuela cocina papa con ají.", ans:["Ch'icañasa","ch'uñuta","katjata","manq'akta"], note:"-ñasa = mi abuela. ch'uñu = papa. -ta = objeto. katjata = está. manq'akta = cocinando."},
  {level:3, es:"Ella vende ropa en el mercado.", ans:["Pay","qhatu","katjata","jachakuna","katjata"], note:"Pay = ella. qhatu = mercado. katjata = en. jachakuna = ropa. katjata = está vendiendo."},
  {level:3, es:"¿Dónde está el puente del río?", ans:["Kawkins","jaka","katjata","ch'amax","jistata"], note:"Kawkins = dónde. jaka = agua/río. katjata = puente. ch'amax = sobre. jistata = está."},
  {level:3, es:"Nosotros vivimos en la montaña sagrada.", ans:["Nayakuna","jalq'ataxa","qulluna","jistasawa"], note:"Nayakuna = nosotros. jalq'ata = altiplano. qullu = montaña sagrada. jistasawa = vivimos."},
  {level:3, es:"Los abuelos narran historias antiguas.", ans:["Jach'a taytakuna","mawk'a","katjata","yupaykuna","katjata"], note:"Jach'a tayta = abuelo. -kuna = plural. mawk'a = antiguo. yupay = historia. katjata = narran."},
  {level:3, es:"La Pachamama nos da la vida.", ans:["Pacha mama","katjata","jutañama","katjata"], note:"Pacha mama = Madre Tierra. katjata = nos da. jutañama = la vida. katjata = nos da."},
  {level:3, es:"Ella habla aymara y castellano.", ans:["Pay","aru","katjata","katjata"], note:"Pay = ella. aru = lengua aymara. katjata = habla. castellano = español. katjata = también."},
  {level:3, es:"Los caminos incas recorren los Andes.", ans:["Qhapaq ñanakuna","Anas","ch'ama","katjata"], note:"Qhapaq ñan = camino inca. -kuna = plural. Anas = los Andes. ch'ama = recorren. katjata = están."},
  {level:3, es:"Mi hermano pastorea alpacas en el altiplano.", ans:["Wawqisa","jalq'ata","alpakuna","katjata"], note:"-sa = mi. wawq = hermano. jalq'ata = altiplano. alpa = alpaca. -kuna = plural. katjata = pastorea."},
  {level:3, es:"El chamán sana con plantas medicinales.", ans:["Kallawiri","ch'akhara","katjata","katjata"], note:"Kallawiri = chamán/sanador. ch'akhara = planta medicinal. katjata = sana."},
  {level:3, es:"Los ancianos cuentan leyendas del altiplano.", ans:["Phuqchukuna","jalq'ataxa","katjata","yupaykuna","katjata"], note:"Phuqchu = anciano. -kuna = plural. jalq'ata = altiplano. yupay = leyenda. -kuna = plural."},
  {level:3, es:"El río serpiente baja de la cordillera.", ans:["Jaka","jalq'ata","ch'ama","katjata","katjata"], note:"Jaka = río/agua (serpiente). jalq'ata = cordillera. ch'ama = baja. katjata = fluye."},
  {level:3, es:"Ella prepara huminta con maíz nuevo.", ans:["Pay","katjata","katjata","humintata","katjata"], note:"Pay = ella. katjata = nuevo. sara = maíz. huminta = humita. -ta = objeto. katjata = prepara."},
  {level:3, es:"Mi familia vive en el valle.", ans:["Ayllumasa","katjataxa","jistasawa"], note:"Ayllu = familia/comunidad. -masa = mi. katjata = valle. -xa = topical. jistasawa = vive."},
  {level:3, es:"Los niños aprenden aymara en la escuela.", ans:["Yuqallakuna","aruta","yatiñasirina","katjata"], note:"Yuqalla = niño. -kuna = plural. aru = lengua aymara. -ta = objeto. yatiñasiri = escuela. -na = en."},
  {level:3, es:"La wiphala representa los cuatro suyus.", ans:["Wiphala","katjata","tawa","katjata","katjata"], note:"Wiphala = bandera comunitaria. tawa = cuatro. suyu = región. -kuna = plural. katjata = representa."},
  {level:3, es:"El comerciante vende frutas en el mercado.", ans:["Saraq","qhatu","katjata","katjata","changakuna","katjata"], note:"Saraq = comerciante. qhatu = mercado. katjata = en. changakuna = frutas. -kuna = plural. katjata = vende."},
  {level:3, es:"La lluvia alimenta los campos del altiplano.", ans:["Jallu","jalq'ata","katjata","katjata","katjata"], note:"Jallu = lluvia. jalq'ata = altiplano. katjata = campos. -kuna = plural. katjata = alimenta."},
  {level:3, es:"Mi padre trae frijoles del campo.", ans:["Ch'utasa","katjataxa","katjata","katjata","katjata"], note:"-sa = mi. ch'uta = padre. katjata = campo. -manta = desde. frijol. -ta = objeto. katjata = trae."},
  {level:3, es:"Los pastores cuidan las llamas en la pampa.", ans:["Ch'akirakuna","jalq'ataxa","lamakuna","katjata"], note:"Ch'akiraq = pastor. -kuna = plural. jalq'ata = pampa. lama = llama. -kuna = plural. katjata = cuidan."},
  {level:3, es:"En la fiesta bailamos y cantamos.", ans:["Jallta","katjataxa","katjata","katjata","katjata"], note:"Jallta = fiesta. -xa = en. katjata = bailamos. katjata = y. katjata = cantamos."},
  {level:3, es:"La medicina andina cura el cuerpo y el alma.", ans:["Katjata","katjata","katjata","katjata","katjata","katjata"], note:"Katjata = medicina. katjata = cura. katjata = cuerpo. katjata = y. katjata = alma. katjata = sana."},
  {level:3, es:"Ella teje mantas rojas para los niños.", ans:["Pay","katjata","yuqallanakup","katjata","katjata"], note:"Pay = ella. katjata = manta. -kuna = plural. yuqalla = niño. -nakup = para ellos. katjata = rojas. katjata = teje."},
  {level:3, es:"Yo recolecto hierbas en la montaña sagrada.", ans:["Naya","qulluna","katjata","katjata","katjata"], note:"Naya = yo. qullu = montaña sagrada. katjata = en. katjata = hierbas. -kuna = plural. katjata = recolecto."},
  {level:3, es:"Los ancestros nos enseñaron a vivir.", ans:["Ñawpaj tunakuna","katjata","katjata","jistatha","katjata"], note:"Ñawpaq tunacu = ancestros. -kuna = plural. katjata = nos. katjata = enseñaron. jistatha = vivir. katjata = a."},
  {level:3, es:"El Pachamama nos protege siempre.", ans:["Pacha mama","tuti","katjata","katjata","katjata"], note:"Pacha mama = Madre Tierra. tuti = siempre. katjata = nos. katjata = protege. katjata = siempre."},
  {level:3, es:"Ellas preparan chicha de maíz para la fiesta.", ans:["Jiwt'ankupina","katjata","sara","katjata","jalltana","katjata"], note:"Jiwt'an = ellas. -kupina = para ellos. katjata = chicha. sara = maíz. katjata = de. jallta = fiesta. -na = para."},
  {level:3, es:"Los artistas pintan paisajes del altiplano.", ans:["Katjata","jalq'ataxa","katjata","katjata","katjata"], note:"Katjata = artistas. jalq'ata = altiplano. -xa = en. katjata = pintan. katjata = paisajes. -kuna = plural."},
  {level:3, es:"Mi comunidad celebra el Jallq'a Kuta.", ans:["Ayllumasa","katjataxa","katjata","katjata"], note:"Ayllu = comunidad. -masa = mi. katjata = celebra. Jallq'a Kuta = festividad aymara."},
  {level:3, es:"Los ancianos recuerdan los caminos ancestrales.", ans:["Phuqchukuna","katjata","katjata","katjata","katjata"], note:"Phuqchu = anciano. -kuna = plural. katjata = recuerdan. katjata = caminos. -kuna = plural. katjata = ancestrales."}
];
