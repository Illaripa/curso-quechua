const CONT_FR = {
  fr_or: {title:"Oraciones en francés", color:"#60a5fa", pieces:[
    {level:1, type:"Salutations", title:"Saludos y presentaciones", sub:"Expresiones básicas para conocer gente", lines:[
      {q:"Bonjour, je m'appelle Marie.", s:"Hola, me llamo Marie."},
      {q:"Comment tu t'appelles?", s:"¿Cómo te llamas?"},
      {q:"Je m'appelle Pierre. Et toi?", s:"Me llamo Pierre. ¿Y tú?"},
      {q:"Bonsoir, comment ça va?", s:"Buenas noches, ¿cómo estás?"},
      {q:"Ça va bien, merci. Et vous?", s:"Estoy bien, gracias. ¿Y usted?"},
      {q:"Au revoir, à bientôt!", s:"Adiós, ¡hasta pronto!"},
      {q:"Enchanté de vous rencontrer.", s:"Encantado de conocerle."}
    ], notes:[
      {t:"Tuteo vs. usted", d:"'Tu' se usa con amigos y familia; 'vous' con personas mayores o desconocidos."},
      {t:"'Comment ça va?' vs. 'Comment allez-vous?'", d:"La primera es informal; la segunda es formal y correcta en contextos profesionales."},
      {t:"Je m'appelle", d:"Literalmente 'me llamo'; viene del verbo s'appeler (llamarse), verbo pronominal."}
    ]},
    {level:1, type:"Chiffres et couleurs", title:"Números y colores", sub:"Vocabulario visual y numérico esencial", lines:[
      {q:"J'ai trois enfants.", s:"Tengo tres hijos."},
      {q:"Il y a cinq pommes sur la table.", s:"Hay cinco manzanas sobre la mesa."},
      {q:"Le ciel est bleu aujourd'hui.", s:"El cielo está azul hoy."},
      {q:"Ma robe est rouge et blanche.", s:"Mi vestido es rojo y blanco."},
      {q:"Il a dix euros dans sa poche.", s:"Él tiene diez euros en su bolsillo."},
      {q:"La fleur est jaune et verte.", s:"La flor es amarilla y verde."}
    ], notes:[
      {t:"Adjetivos de color", d:"En francés los adjetivos de color concuerdan en género y número: 'blanc' → 'blanche' en femenino."},
      {t:"Il y a", d:"Expresión equivalente a 'hay'; no cambia con el número: 'il y a un chat', 'il y a des chats'."},
      {t:"Números del 1 al 10", d:"Un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix. Son invariables como adjetivos numerales."}
    ]},
    {level:1, type:"Objets quotidiens", title:"Objetos del día a día", sub:"Describir lo que nos rodea", lines:[
      {q:"C'est un livre très intéressant.", s:"Es un libro muy interesante."},
      {q:"J'ai un téléphone portable.", s:"Tengo un teléfono móvil."},
      {q:"Je suis étudiant à l'université.", s:"Soy estudiante en la universidad."},
      {q:"Il y a une chaise devant la fenêtre.", s:"Hay una silla delante de la ventana."},
      {q:"C'est une maison avec un grand jardin.", s:"Es una casa con un jardín grande."},
      {q:"J'ai un stylo et un cahier.", s:"Tengo un bolígrafo y un cuaderno."},
      {q:"C'est mon sac à dos.", s:"Es mi mochila."}
    ], notes:[
      {t:"C'est vs. Il est", d:"'C'est' introduce un sustantivo ('C'est un chat'); 'Il est' introduce un adjetivo ('Il est grand')."},
      {t:"Artículos indefinidos", d:"'Un' para masculino, 'une' para femenino, 'des' para plural: un livre, une table, des livres."},
      {t:"Je suis", d:"Primera persona del verbo 'être' (ser/estar). Se usa para profesiones y estados: 'Je suis médecin'."}
    ]},
    {level:2, type:"La famille", title:"Mi familia", sub:"Presentar a los miembros de la familia", lines:[
      {q:"J'ai une grande famille.", s:"Tengo una familia grande."},
      {q:"Ma mère s'appelle Sophie.", s:"Mi madre se llama Sophie."},
      {q:"Mon père est médecin depuis vingt ans.", s:"Mi padre es médico desde hace veinte años."},
      {q:"J'ai une sœur et deux frères.", s:"Tengo una hermana y dos hermanos."},
      {q:"Mes grands-parents habitent à Lyon.", s:"Mis abuelos viven en Lyon."},
      {q:"Hier, nous avons rendu visite à ma tante.", s:"Ayer visitamos a mi tía."},
      {q:"L'année prochaine, ma cousine va se marier.", s:"El año que viene, mi prima va a casarse."}
    ], notes:[
      {t:"Passé composé", d:"Se forma con avoir/être + participio pasado: 'nous avons rendu visite' (hemos visitado)."},
      {t:"Futur proche", d:"Se forma con 'aller' + infinitivo: 'va se marier' = va a casarse. Expresa un futuro inmediato o planeado."},
      {t:"Posesivos", d:"Mon/ma/mes, ton/ta/tes, son/sa/ses concuerdan con el género del objeto poseído, no del poseedor."}
    ]},
    {level:2, type:"Au café", title:"En el café y el mercado", sub:"Pedir y comprar en francés", lines:[
      {q:"Je voudrais un café, s'il vous plaît.", s:"Quisiera un café, por favor."},
      {q:"Combien coûte la baguette?", s:"¿Cuánto cuesta la baguette?"},
      {q:"Elle a acheté des légumes frais au marché.", s:"Ella compró verduras frescas en el mercado."},
      {q:"Nous avons mangé une excellente tarte.", s:"Comimos una excelente tarta."},
      {q:"Est-ce que vous avez du lait écrémé?", s:"¿Tienen leche desnatada?"},
      {q:"L'addition, s'il vous plaît.", s:"La cuenta, por favor."},
      {q:"Je prends le menu à quinze euros.", s:"Tomo el menú de quince euros."}
    ], notes:[
      {t:"Je voudrais", d:"Forma condicional de 'vouloir'; más educado que 'je veux' (quiero). Siempre preferido en comercios."},
      {t:"Du / de la / des", d:"Artículos partitivos que expresan cantidad indefinida: 'du lait' (leche), 'de la viande' (carne), 'des fruits' (frutas)."},
      {t:"Est-ce que", d:"Partícula interrogativa que transforma cualquier afirmación en pregunta sin cambiar el orden de las palabras."}
    ]},
    {level:2, type:"Routine quotidienne", title:"La rutina diaria", sub:"Describir actividades habituales", lines:[
      {q:"Je me lève à sept heures du matin.", s:"Me levanto a las siete de la mañana."},
      {q:"Après le petit-déjeuner, je vais au travail.", s:"Después del desayuno, voy al trabajo."},
      {q:"Je travaille de neuf heures à dix-huit heures.", s:"Trabajo de nueve a dieciocho horas."},
      {q:"Le soir, je prépare le dîner avec ma famille.", s:"Por la noche, preparo la cena con mi familia."},
      {q:"Hier soir, j'ai regardé un film policier.", s:"Ayer por la noche, vi una película policiaca."},
      {q:"Demain, je vais faire du sport.", s:"Mañana, voy a hacer deporte."}
    ], notes:[
      {t:"Verbos pronominales", d:"'Se lever' (levantarse), 'se coucher' (acostarse): 'je me lève', 'tu te lèves'. Se conjugan con el pronombre reflexivo."},
      {t:"Expresar la hora", d:"'À sept heures' = a las siete. Para mediodía: 'à midi'; para medianoche: 'à minuit'."},
      {t:"Alternancia pasado/futuro", d:"Passé composé para ayer ('j'ai regardé'), futur proche para mañana ('je vais faire')."}
    ]},
    {level:2, type:"Le chemin", title:"Pedir indicaciones", sub:"Orientarse en la ciudad", lines:[
      {q:"Excusez-moi, où est la gare, s'il vous plaît?", s:"Disculpe, ¿dónde está la estación, por favor?"},
      {q:"Vous prenez la première rue à droite.", s:"Toma la primera calle a la derecha."},
      {q:"Continuez tout droit pendant deux cents mètres.", s:"Siga recto durante doscientos metros."},
      {q:"La pharmacie est en face de la mairie.", s:"La farmacia está enfrente del ayuntamiento."},
      {q:"C'est loin d'ici?", s:"¿Está lejos de aquí?"},
      {q:"Non, c'est à cinq minutes à pied.", s:"No, está a cinco minutos a pie."},
      {q:"Merci beaucoup, vous êtes très aimable.", s:"Muchas gracias, es usted muy amable."}
    ], notes:[
      {t:"Imperativo formal", d:"Para dar instrucciones a un desconocido se usa 'vous': 'prenez', 'continuez', 'tournez'. Es el imperativo de respeto."},
      {t:"Preposiciones de lugar", d:"'En face de' (enfrente de), 'à côté de' (al lado de), 'derrière' (detrás de), 'devant' (delante de)."},
      {t:"C'est loin?", d:"Pregunta muy útil en la calle. Respuesta típica: 'c'est à X minutes / X kilomètres / à deux pas d'ici'."}
    ]},
    {level:3, type:"Le subjonctif", title:"El subjuntivo", sub:"Expresar necesidad, deseo y duda", lines:[
      {q:"Il faut que tu viennes à la réunion.", s:"Es necesario que vengas a la reunión."},
      {q:"Je veux qu'elle soit heureuse.", s:"Quiero que ella sea feliz."},
      {q:"Bien que ce soit difficile, nous y arriverons.", s:"Aunque sea difícil, lo lograremos."},
      {q:"Il est important que vous fassiez vos devoirs.", s:"Es importante que hagan sus deberes."},
      {q:"Je doute qu'il puisse terminer à temps.", s:"Dudo que pueda terminar a tiempo."},
      {q:"Pour que tu comprennes, je vais tout expliquer.", s:"Para que entiendas, lo voy a explicar todo."}
    ], notes:[
      {t:"Formación del subjuntivo", d:"Se toma la raíz de la 3ª persona plural del presente y se añaden: -e, -es, -e, -ions, -iez, -ent."},
      {t:"Verbos irregulares en subjuntivo", d:"Être → soit; avoir → ait; aller → aille; pouvoir → puisse; faire → fasse. Hay que memorizarlos."},
      {t:"Conjunciones que exigen subjuntivo", d:"Il faut que, bien que, pour que, avant que, à moins que, quoique. Siempre van seguidas de subjuntivo."}
    ]},
    {level:3, type:"La santé", title:"La salud", sub:"Hablar de síntomas y consultas médicas", lines:[
      {q:"J'ai mal à la tête depuis hier soir.", s:"Me duele la cabeza desde ayer por la noche."},
      {q:"Le médecin m'a prescrit des antibiotiques.", s:"El médico me recetó antibióticos."},
      {q:"Il est essentiel que vous preniez ce médicament.", s:"Es esencial que tome este medicamento."},
      {q:"Je souffre d'une allergie saisonnière.", s:"Sufro de una alergia estacional."},
      {q:"Avez-vous de la fièvre depuis longtemps?", s:"¿Tiene fiebre desde hace mucho tiempo?"},
      {q:"Il vaut mieux que vous restiez au lit.", s:"Es mejor que se quede en cama."},
      {q:"Je me sens mieux qu'hier, merci.", s:"Me siento mejor que ayer, gracias."}
    ], notes:[
      {t:"Avoir mal à", d:"Expresar dolor: 'j'ai mal à la tête' (me duele la cabeza), 'j'ai mal au dos' (me duele la espalda). El artículo se contrae con 'à'."},
      {t:"Depuis", d:"'Depuis' + presente expresa una acción que comenzó en el pasado y continúa: 'j'ai mal depuis hier' (me duele desde ayer)."},
      {t:"Subjuntivo en salud", d:"'Il vaut mieux que + subjuntivo', 'il est essentiel que + subjuntivo' son estructuras frecuentes en consultas médicas."}
    ]},
    {level:3, type:"Les rêves", title:"Sueños y futuro", sub:"Expresar aspiraciones y proyectos", lines:[
      {q:"J'aimerais voyager autour du monde un jour.", s:"Me gustaría viajar alrededor del mundo algún día."},
      {q:"Si j'avais plus d'argent, j'achèterais une maison.", s:"Si tuviera más dinero, compraría una casa."},
      {q:"Mon rêve est de devenir écrivaine.", s:"Mi sueño es convertirme en escritora."},
      {q:"Quand je serai grande, je vivrai à Paris.", s:"Cuando sea mayor, viviré en París."},
      {q:"Il faudrait que nous réfléchissions sérieusement.", s:"Sería necesario que reflexionáramos en serio."},
      {q:"Je crois que l'avenir nous réserve de belles surprises.", s:"Creo que el futuro nos reserva bonitas sorpresas."}
    ], notes:[
      {t:"Conditionnel présent", d:"Se forma con el infinitivo + terminaciones: -ais, -ais, -ait, -ions, -iez, -aient. Expresa hipótesis y deseo educado."},
      {t:"Si + imparfait + conditionnel", d:"Estructura para hipótesis irreales en el presente: 'Si j'avais + conditionnel'. No se usa el conditionnel en la cláusula con 'si'."},
      {t:"Futur simple", d:"Se forma con el infinitivo + terminaciones: -ai, -as, -a, -ons, -ez, -ont. 'Je vivrai' = viviré."}
    ]}
  ]},

  fr_po: {title:"Poesía francesa", color:"#c084fc", pieces:[
    {level:1, poem:true, type:"Chanson", title:"Frère Jacques", sub:"Canción tradicional francesa", lines:[
      {q:"Frère Jacques, Frère Jacques,", s:"Hermano Jacques, hermano Jacques,"},
      {q:"Dormez-vous? Dormez-vous?", s:"¿Estás durmiendo? ¿Estás durmiendo?"},
      {q:"Sonnez les matines! Sonnez les matines!", s:"¡Toca las campanas de maitines! ¡Toca las campanas de maitines!"},
      {q:"Ding, daing, dong! Ding, daing, dong!", s:"¡Din, dan, don! ¡Din, dan, don!"}
    ], notes:[
      {t:"Canon musical", d:"Esta canción se canta en canon: un grupo empieza y otro repite la misma melodía con desfase. Es una de las más conocidas del mundo."},
      {t:"Dormez-vous?", d:"Forma interrogativa formal de 'dormir': 'dormez-vous?' = ¿está usted durmiendo? / ¿estáis durmiendo?"},
      {t:"Matines", d:"Las maitines son las oraciones de madrugada en los monasterios. La campana las anunciaba."}
    ]},
    {level:1, poem:true, type:"Chanson", title:"Au clair de la lune", sub:"Canción clásica de la Luna", lines:[
      {q:"Au clair de la lune, mon ami Pierrot,", s:"A la luz de la luna, mi amigo Pierrot,"},
      {q:"Prête-moi ta plume pour écrire un mot.", s:"Préstame tu pluma para escribir una nota."},
      {q:"Ma chandelle est morte, je n'ai plus de feu.", s:"Mi vela se ha apagado, ya no tengo fuego."},
      {q:"Ouvre-moi ta porte, pour l'amour de Dieu.", s:"Ábreme tu puerta, por amor de Dios."}
    ], notes:[
      {t:"Imperativo informal", d:"'Prête-moi' y 'ouvre-moi' son imperativos informales (tuteo) con pronombre de objeto indirecto 'moi' = me."},
      {t:"Negación ne...plus", d:"'Je n'ai plus de feu' = ya no tengo fuego. 'Ne...plus' indica que algo que existía ha dejado de existir."},
      {t:"Chandelle", d:"Vela de cera. La escena evoca una noche en que alguien golpea la puerta del vecino porque su vela se apagó."}
    ]},
    {level:2, poem:true, type:"Chanson", title:"La Vie en rose", sub:"Estilo Édith Piaf", lines:[
      {q:"Quand il me prend dans ses bras,", s:"Cuando me toma entre sus brazos,"},
      {q:"Il me parle tout bas,", s:"Me habla en voz muy baja,"},
      {q:"Je vois la vie en rose.", s:"Veo la vida color de rosa."},
      {q:"Il me dit des mots d'amour,", s:"Me dice palabras de amor,"},
      {q:"Des mots de tous les jours,", s:"Palabras de todos los días,"},
      {q:"Et ça me fait quelque chose.", s:"Y eso me hace algo especial."}
    ], notes:[
      {t:"La vie en rose", d:"Expresión idiomática que significa ver todo de manera optimista y enamorada. Édith Piaf la popularizó en 1945."},
      {t:"Tout bas", d:"'Tout' como adverbio de intensidad: 'tout bas' = muy bajito, 'tout doucement' = muy suavemente."},
      {t:"Ça me fait quelque chose", d:"Expresión coloquial que equivale a 'me conmueve' o 'me produce una sensación especial'."}
    ]},
    {level:2, poem:true, type:"Chanson", title:"Ne me quitte pas", sub:"Estilo Jacques Brel", lines:[
      {q:"Ne me quitte pas, il faut oublier,", s:"No me dejes, hay que olvidar,"},
      {q:"Tout peut s'oublier qui s'enfuit déjà.", s:"Todo puede olvidarse cuando ya huye."},
      {q:"Oublier le temps des malentendus,", s:"Olvidar el tiempo de los malentendidos,"},
      {q:"Et le temps perdu à savoir comment,", s:"Y el tiempo perdido en saber cómo,"},
      {q:"On oublie le temps,", s:"Se olvida el tiempo,"},
      {q:"Ne me quitte pas, ne me quitte pas.", s:"No me dejes, no me dejes."}
    ], notes:[
      {t:"Imperativo negativo", d:"'Ne me quitte pas' = No me dejes. La negación rodea el verbo: ne + verbo + pas. Con pronombre: ne + pron + verbo + pas."},
      {t:"Tout peut s'oublier", d:"Verbo pronominal pasivo: 'se puede olvidar todo'. El uso de 'se' da un sentido impersonal a la acción."},
      {t:"Brel y la chanson réaliste", d:"Jacques Brel representa la chanson réaliste belga-francesa: letras poéticas y crudas sobre el amor y la soledad."}
    ]},
    {level:3, poem:true, type:"Poésie", title:"Demain dès l'aube", sub:"Estilo Victor Hugo", lines:[
      {q:"Demain, dès l'aube, à l'heure où blanchit la campagne,", s:"Mañana, al alba, a la hora en que el campo blanquea,"},
      {q:"Je partirai. Vois-tu, je sais que tu m'attends.", s:"Partiré. ¿Ves?, sé que me esperas."},
      {q:"J'irai par la forêt, j'irai par la montagne.", s:"Iré por el bosque, iré por la montaña."},
      {q:"Je ne puis demeurer loin de toi plus longtemps.", s:"No puedo permanecer lejos de ti más tiempo."},
      {q:"Et quand j'arriverai, je mettrai sur ta tombe,", s:"Y cuando llegue, pondré sobre tu tumba,"},
      {q:"Un bouquet de houx vert et de bruyère en fleur.", s:"Un ramo de acebo verde y de brezo en flor."}
    ], notes:[
      {t:"Futur simple literario", d:"Hugo usa el futur simple ('je partirai', 'j'irai') para crear una determinación solemne. Es más formal que el futur proche."},
      {t:"Je ne puis", d:"Forma literaria y arcaica de 'je ne peux pas' (no puedo). 'Pouvoir' tiene una 2ª persona antigua: 'je puis'."},
      {t:"Contexto del poema", d:"Este poema de 'Les Contemplations' (1856) está dedicado a la hija de Hugo, Léopoldine, ahogada a los 19 años."}
    ]},
    {level:3, poem:true, type:"Poésie", title:"Le dormeur du val", sub:"Estilo Arthur Rimbaud", lines:[
      {q:"C'est un trou de verdure où chante une rivière,", s:"Es un hueco de verdura donde canta un río,"},
      {q:"Accrochant follement aux herbes des haillons d'argent.", s:"Enganchando locamente en las hierbas jirones de plata."},
      {q:"Un soldat jeune, bouche ouverte, tête nue,", s:"Un soldado joven, boca abierta, cabeza desnuda,"},
      {q:"Et la nuque baignant dans le frais cresson bleu.", s:"Y la nuca bañándose en el fresco berro azul."},
      {q:"Il dort dans le soleil, la main sur sa poitrine,", s:"Duerme al sol, la mano sobre su pecho,"},
      {q:"Tranquille. Il a deux trous rouges au côté droit.", s:"Tranquilo. Tiene dos agujeros rojos en el costado derecho."}
    ], notes:[
      {t:"Soneto clásico", d:"Rimbaud usa la forma del soneto (14 versos en alejandrinos) para revelar una escena de guerra de forma perturbadora."},
      {t:"Ironía poética", d:"El poema describe una escena pastoral idílica hasta el último verso, donde revela que el soldado está muerto. Técnica del giro final."},
      {t:"Rimbaud y el simbolismo", d:"Arthur Rimbaud (1854-1891) escribió 'Le dormeur du val' a los 16 años. Es uno de los poetas simbolistas más influyentes."}
    ]}
  ]},

  fr_le: {title:"Cuentos en francés", color:"#f59e0b", pieces:[
    {level:1, legend:true, type:"Fable", title:"Le Corbeau et le Renard", sub:"Fábula de Jean de La Fontaine", lines:[
      {q:"Maître Corbeau, sur un arbre perché,", s:"El señor Cuervo, posado en un árbol,"},
      {q:"Tenait en son bec un fromage.", s:"sostenía en su pico un trozo de queso."},
      {q:"Maître Renard, par l'odeur alléché,", s:"El señor Zorro, atraído por el olor,"},
      {q:"Lui tint à peu près ce langage:", s:"le habló más o menos así:"},
      {q:"«Que vous êtes joli! Que vous me semblez beau!»", s:"«¡Qué bonito es usted! ¡Qué hermoso me parece!»"},
      {q:"Le Corbeau, honteux et confus,", s:"El Cuervo, avergonzado y confuso,"},
      {q:"Jura, mais un peu tard, qu'on ne l'y prendrait plus.", s:"juró, aunque demasiado tarde, que no lo engañarían más."}
    ], notes:[
      {t:"La Fontaine", d:"Jean de La Fontaine (1621-1695) adaptó las fábulas de Esopo al francés con elegancia poética. Son parte del currículo escolar francés."},
      {t:"Moraleja", d:"La fábula enseña que la vanidad es una debilidad que otros pueden explotar. El halago del zorro hace abrir el pico al cuervo."},
      {t:"Maître", d:"Título honorífico usado irónicamente por La Fontaine para los animales, que les da una dignidad cómica."}
    ]},
    {level:1, legend:true, type:"Fable", title:"La Cigale et la Fourmi", sub:"Fábula de Jean de La Fontaine", lines:[
      {q:"La Cigale, ayant chanté tout l'été,", s:"La Cigarra, habiendo cantado todo el verano,"},
      {q:"Se trouva fort dépourvue quand la bise fut venue.", s:"se encontró muy desabastecida cuando llegó el viento frío."},
      {q:"Pas un seul petit morceau de mouche ou de vermisseau.", s:"Ni un solo pedacito de mosca o gusanillo."},
      {q:"Elle alla crier famine chez la Fourmi sa voisine,", s:"Fue a lamentarse de su hambre a casa de la Hormiga, su vecina,"},
      {q:"La priant de lui prêter quelque grain pour subsister.", s:"pidiéndole prestado algún grano para subsistir."},
      {q:"«Je vous paierai, lui dit-elle, avant l'août, foi d'animal.»", s:"«Le pagaré», le dijo, «antes de agosto, palabra de animal.»"},
      {q:"La Fourmi n'est pas prêteuse: c'est là son moindre défaut.", s:"La Hormiga no es prestamista: ese es su menor defecto."}
    ], notes:[
      {t:"Moraleja", d:"El trabajo y la previsión son virtudes; la frivolidad tiene consecuencias. La hormiga representa la laboriosidad; la cigarra, el disfrute sin planificación."},
      {t:"Passé simple", d:"La Fontaine usa el passé simple literario: 'elle alla' (fue), 'fut venue' (había llegado). Es el tiempo narrativo del francés escrito formal."},
      {t:"Bise", d:"Viento frío del norte. En francés antiguo y literario, 'la bise' simboliza el invierno que llega con sus carencias."}
    ]},
    {level:2, legend:true, type:"Conte", title:"Le Petit Prince", sub:"Versión condensada de Antoine de Saint-Exupéry", lines:[
      {q:"Il était une fois un petit prince qui habitait sur une toute petite planète.", s:"Había una vez un principito que vivía en un planeta muy pequeño."},
      {q:"Sa planète était à peine plus grande qu'une maison.", s:"Su planeta era apenas más grande que una casa."},
      {q:"Un jour, il décida de voyager et de connaître d'autres mondes.", s:"Un día, decidió viajar y conocer otros mundos."},
      {q:"Il rencontra un aviateur dans le désert du Sahara.", s:"Conoció a un aviador en el desierto del Sáhara."},
      {q:"«S'il vous plaît, dessine-moi un mouton!» dit le petit prince.", s:"«¡Por favor, dibújame un cordero!», dijo el principito."},
      {q:"L'essentiel est invisible pour les yeux.", s:"Lo esencial es invisible para los ojos."},
      {q:"On ne voit bien qu'avec le cœur.", s:"Solo se ve bien con el corazón."}
    ], notes:[
      {t:"Saint-Exupéry", d:"Antoine de Saint-Exupéry publicó 'Le Petit Prince' en 1943. Es uno de los libros más traducidos del mundo, con más de 300 idiomas."},
      {t:"Il était une fois", d:"Fórmula tradicional para empezar cuentos, equivalente a 'Había una vez' o 'Érase una vez'. Introduce un imparfait narrativo."},
      {t:"La cita célebre", d:"«L'essentiel est invisible pour les yeux» es la frase más famosa del libro. El zorro se la enseña al principito como el secreto más importante."}
    ]},
    {level:2, legend:true, type:"Conte", title:"La Belle et la Bête", sub:"Versión francesa clásica condensada", lines:[
      {q:"Il était une fois un marchand qui avait trois filles.", s:"Había una vez un mercader que tenía tres hijas."},
      {q:"La plus jeune, appelée Belle, était bonne et courageuse.", s:"La más joven, llamada Bella, era buena y valiente."},
      {q:"Un jour, le marchand se perdit dans la forêt et trouva un château mystérieux.", s:"Un día, el mercader se perdió en el bosque y encontró un castillo misterioso."},
      {q:"Une Bête terrible lui dit: «Tu mourras si tu ne me donnes pas ta fille.»", s:"Una terrible Bestia le dijo: «Morirás si no me das a tu hija.»"},
      {q:"Belle accepta d'aller vivre au château pour sauver son père.", s:"Bella aceptó ir a vivir al castillo para salvar a su padre."},
      {q:"Peu à peu, elle découvrit la bonté cachée de la Bête.", s:"Poco a poco, ella descubrió la bondad escondida de la Bestia."},
      {q:"En l'aimant sincèrement, elle brisa le sortilège.", s:"Amándola sinceramente, rompió el hechizo."},
      {q:"La Bête se transforma en un beau prince plein de gratitude.", s:"La Bestia se transformó en un apuesto príncipe lleno de gratitud."}
    ], notes:[
      {t:"Origen del cuento", d:"'La Belle et la Bête' fue escrito por Madame de Villeneuve en 1740 y resumido por Madame de Beaumont en 1756. Es anterior a Disney."},
      {t:"En + gérondif", d:"'En l'aimant' = amándola. El gérondif (en + participio presente) expresa una acción simultánea o causal con el verbo principal."},
      {t:"Passé simple en cuentos", d:"'Accepta', 'dit', 'trouva': los cuentos literarios usan el passé simple. En la lengua oral moderna se reemplaza por el passé composé."}
    ]},
    {level:3, legend:true, type:"Littérature", title:"Les Misérables", sub:"Extracto adaptado de Victor Hugo", lines:[
      {q:"Jean Valjean avait passé dix-neuf ans au bagne pour avoir volé un pain.", s:"Jean Valjean había pasado diecinueve años en las galeras por haber robado un pan."},
      {q:"À sa sortie de prison, personne ne voulut l'accueillir.", s:"A su salida de la prisión, nadie quiso recibirle."},
      {q:"Mgr Bienvenu, l'évêque de Digne, lui ouvrit sa porte avec bonté.", s:"Monseñor Bienvenu, el obispo de Digne, le abrió su puerta con bondad."},
      {q:"Mais Valjean vola l'argenterie de l'évêque pendant la nuit.", s:"Pero Valjean robó la cubertería del obispo durante la noche."},
      {q:"Quand les gendarmes l'arrêtèrent, l'évêque dit: «Je lui ai donné ces pièces.»", s:"Cuando los gendarmes le detuvieron, el obispo dijo: «Yo le di estas piezas.»"},
      {q:"Cet acte de grâce transforma Valjean à jamais.", s:"Este acto de gracia transformó a Valjean para siempre."},
      {q:"Il consacra le reste de sa vie à faire le bien.", s:"Dedicó el resto de su vida a hacer el bien."},
      {q:"Car qui n'a pas connu la miséricorde ne peut donner de l'amour.", s:"Porque quien no ha conocido la misericordia no puede dar amor."}
    ], notes:[
      {t:"Plusqueparfait", d:"'Avait passé', 'avait volé': el plus-que-parfait expresa una acción pasada anterior a otro pasado. Equivale al pretérito pluscuamperfecto en español."},
      {t:"Hugo y el humanismo", d:"'Les Misérables' (1862) denuncia la injusticia social del siglo XIX. Hugo creía en la redención del ser humano a través de la bondad."},
      {t:"Passé simple literario", d:"'Vola', 'arrêtèrent', 'dit', 'transforma': en la prosa literaria francesa el passé simple sigue siendo el tiempo narrativo estándar."}
    ]},
    {level:3, legend:true, type:"Littérature", title:"Le Bourgeois gentilhomme", sub:"Extracto adaptado de Molière", lines:[
      {q:"Monsieur Jourdain voulait apprendre à parler comme les nobles.", s:"El señor Jourdain quería aprender a hablar como los nobles."},
      {q:"Il engagea un maître de philosophie pour l'instruire.", s:"Contrató a un maestro de filosofía para que le instruyera."},
      {q:"«Tout ce qui n'est point prose est vers,» lui expliqua le maître.", s:"«Todo lo que no es prosa son versos», le explicó el maestro."},
      {q:"«Et tout ce qui n'est point vers est prose.»", s:"«Y todo lo que no son versos es prosa.»"},
      {q:"«Quoi! quand je dis: Nicole, apportez-moi mes pantoufles,»", s:"«¿Cómo? Cuando digo: Nicole, tráeme mis zapatillas,»"},
      {q:"«c'est de la prose?» dit Jourdain, étonné.", s:"«¿eso es prosa?», dijo Jourdain, asombrado."},
      {q:"«Oui, monsieur!» Et il rit de n'avoir jamais su qu'il parlait en prose.", s:"«¡Sí, señor!» Y se rió de no haber sabido nunca que hablaba en prosa."},
      {q:"L'ignorance est parfois une source de joie innocente.", s:"La ignorancia es a veces una fuente de alegría inocente."}
    ], notes:[
      {t:"Molière y la comedia", d:"Jean-Baptiste Poquelin, llamado Molière (1622-1673), es el comediógrafo más importante de Francia. Satirizaba a la burguesía que quería imitar a la nobleza."},
      {t:"Discurso directo", d:"Las comillas francesas «...» se llaman guillemets. El discurso directo en francés usa dos puntos antes de abrir guillemets: il dit: «...»."},
      {t:"Ironia cómica", d:"La escena es famosa porque ridiculiza la pedantería: Jourdain descubre con asombro que toda su vida ha hablado en prosa sin saberlo."}
    ]}
  ]},

  fr_es: {title:"Textos cortos", color:"#fb7185", pieces:[
    {level:1, essay:true, type:"Texte", title:"La langue française", sub:"El idioma francés en el mundo", paras:[
      {q:"Le français est parlé par environ trois cents millions de personnes dans le monde. C'est la langue officielle de vingt-neuf pays sur cinq continents.", s:"El francés lo hablan aproximadamente trescientos millones de personas en el mundo. Es el idioma oficial de veintinueve países en cinco continentes."},
      {q:"Apprendre le français ouvre des portes dans la diplomatie, la culture et le commerce. C'est aussi la langue de la littérature, de la mode et de la gastronomie.", s:"Aprender francés abre puertas en la diplomacia, la cultura y el comercio. Es también la lengua de la literatura, la moda y la gastronomía."}
    ], notes:[
      {t:"Chiffres cardinaux grands", d:"'Trois cents millions' (300 millones), 'vingt-neuf' (29). En francés 'cent' lleva -s cuando no va seguido de otro número: 'deux cents', pero 'deux cent cinq'."},
      {t:"Passif con être", d:"'Est parlé' = es hablado/lo hablan. La voz pasiva en francés: être + participio pasado, que concuerda con el sujeto."}
    ]},
    {level:2, essay:true, type:"Texte", title:"La gastronomie française", sub:"La cocina francesa, patrimonio de la humanidad", paras:[
      {q:"La cuisine française est reconnue comme patrimoine immatériel de l'humanité par l'UNESCO depuis 2010. Elle est caractérisée par l'utilisation de produits frais et locaux.", s:"La cocina francesa es reconocida como patrimonio inmaterial de la humanidad por la UNESCO desde 2010. Se caracteriza por el uso de productos frescos y locales."},
      {q:"Le repas français traditionnel commence par une entrée, suivi d'un plat principal, d'un fromage et d'un dessert. Le pain et le vin accompagnent presque toujours le repas.", s:"La comida francesa tradicional comienza con una entrada, seguida de un plato principal, un queso y un postre. El pan y el vino acompañan casi siempre la comida."}
    ], notes:[
      {t:"Depuis + presente", d:"'Reconnue depuis 2010' = reconocida desde 2010. Con 'depuis' y un punto en el tiempo se usa el presente en francés (al contrario del español)."},
      {t:"Participio como adjetivo", d:"'Caractérisée par', 'suivi d'un plat': el participio pasado funciona como adjetivo y concuerda en género y número con el sustantivo."}
    ]},
    {level:2, essay:true, type:"Texte", title:"Paris et ses monuments", sub:"La ciudad luz y su historia", paras:[
      {q:"Paris est la capitale de la France et l'une des villes les plus visitées du monde. La Tour Eiffel, construite en 1889 pour l'Exposition universelle, est le monument le plus célèbre du pays.", s:"París es la capital de Francia y una de las ciudades más visitadas del mundo. La Torre Eiffel, construida en 1889 para la Exposición Universal, es el monumento más célebre del país."},
      {q:"Le musée du Louvre abrite plus de trente-cinq mille œuvres d'art, dont la Joconde de Léonard de Vinci. Notre-Dame de Paris, cathédrale gothique du XIIe siècle, a été restaurée après l'incendie de 2019.", s:"El museo del Louvre alberga más de treinta y cinco mil obras de arte, entre ellas la Mona Lisa de Leonardo da Vinci. Notre-Dame de París, catedral gótica del siglo XII, fue restaurada tras el incendio de 2019."}
    ], notes:[
      {t:"Superlativo", d:"'Le plus célèbre' = el más célebre. Superlativo: le/la/les + plus + adjetivo. El adjetivo concuerda en género y número."},
      {t:"Participio pasado con fonction adjetival", d:"'Construite en 1889': participio de 'construire' concordando con 'Tour Eiffel' (femenino). Los participios pasados funcionan como adjetivos en francés."}
    ]},
    {level:3, essay:true, type:"Texte", title:"La philosophie française", sub:"El pensamiento francés que cambió el mundo", paras:[
      {q:"La France a donné au monde des penseurs qui ont profondément influencé la philosophie occidentale. René Descartes, avec sa célèbre phrase «Je pense, donc je suis», a fondé le rationalisme moderne et remis en question toutes les certitudes de son époque.", s:"Francia ha dado al mundo pensadores que han influido profundamente en la filosofía occidental. René Descartes, con su célebre frase «Pienso, luego existo», fundó el racionalismo moderno y cuestionó todas las certezas de su época."},
      {q:"Au XXe siècle, Jean-Paul Sartre et Simone de Beauvoir ont développé l'existentialisme, selon lequel l'existence précède l'essence. Cette idée révolutionnaire affirmait que l'être humain se définit par ses actes libres et non par une nature prédéterminée.", s:"En el siglo XX, Jean-Paul Sartre y Simone de Beauvoir desarrollaron el existencialismo, según el cual la existencia precede a la esencia. Esta idea revolucionaria afirmaba que el ser humano se define por sus actos libres y no por una naturaleza predeterminada."}
    ], notes:[
      {t:"Passé composé vs. passé simple", d:"En texto escrito formal se mezclan: 'a donné' (passé composé, más cercano) y 'a fondé', 'ont développé'. En texto literario se usaría passé simple."},
      {t:"Proposition relative", d:"'Selon lequel l'existence précède l'essence': 'lequel' es el pronombre relativo para referirse a un antecedente precedido de preposición."},
      {t:"Vocabulario filosófico", d:"'L'existence précède l'essence' es la tesis central del existencialismo. Sartre la expuso en 'L'existentialisme est un humanisme' (1945)."}
    ]}
  ]}
};
