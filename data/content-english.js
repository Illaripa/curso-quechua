const CONT_EN = {
  en_or: {title:"Oraciones en inglés", color:"#3b82f6", pieces:[
    {level:1, type:"Saludo", title:"Saludos y presentaciones", sub:"Conociendo personas", lines:[
      {q:"Hello, my name is Ana.", s:"Hola, mi nombre es Ana."},
      {q:"Nice to meet you.", s:"Encantada de conocerte."},
      {q:"How are you?", s:"¿Cómo estás?"},
      {q:"I am fine, thank you.", s:"Estoy bien, gracias."},
      {q:"Where are you from?", s:"¿De dónde eres?"},
      {q:"I am from Peru.", s:"Soy de Perú."},
      {q:"Goodbye, see you later.", s:"Adiós, hasta luego."}
    ], notes:[
      {t:"Verbo 'to be'", d:"I am, you are, he/she/it is — el verbo ser/estar cambia según la persona."},
      {t:"Presentaciones", d:"'My name is...' es la forma más común para presentarse. También se puede decir 'I am...'"},
      {t:"Saludos", d:"'Hello' es formal, 'Hi' es informal. Ambas son correctas."}
    ]},
    {level:1, type:"Números", title:"Números y colores", sub:"Lo básico del idioma", lines:[
      {q:"One, two, three, four, five.", s:"Uno, dos, tres, cuatro, cinco."},
      {q:"The sky is blue.", s:"El cielo es azul."},
      {q:"The sun is yellow.", s:"El sol es amarillo."},
      {q:"I have three red apples.", s:"Tengo tres manzanas rojas."},
      {q:"The cat is black and white.", s:"El gato es negro y blanco."},
      {q:"There are ten students.", s:"Hay diez estudiantes."},
      {q:"She has two green books.", s:"Ella tiene dos libros verdes."}
    ], notes:[
      {t:"Adjetivos de color", d:"En inglés los adjetivos van ANTES del sustantivo: 'red apple' (manzana roja), no 'apple red'."},
      {t:"There is / There are", d:"'There is' para singular (hay uno), 'There are' para plural (hay varios)."},
      {t:"Números cardinales", d:"One, two, three... se usan para contar. No cambian de género como en español."}
    ]},
    {level:1, type:"Objetos", title:"Objetos cotidianos", sub:"Lo que nos rodea", lines:[
      {q:"This is a book.", s:"Esto es un libro."},
      {q:"That is a table.", s:"Eso es una mesa."},
      {q:"I have a pencil.", s:"Tengo un lápiz."},
      {q:"She has a red bag.", s:"Ella tiene una bolsa roja."},
      {q:"I am a student.", s:"Soy estudiante."},
      {q:"He is a teacher.", s:"Él es maestro."},
      {q:"This is my house.", s:"Esta es mi casa."}
    ], notes:[
      {t:"This / That", d:"'This' es para objetos cerca (esto) y 'that' para objetos lejos (eso)."},
      {t:"Artículos a / an", d:"'A' antes de consonante (a book, a cat), 'an' antes de vocal (an apple, an egg)."},
      {t:"Pronombres posesivos", d:"My (mi), your (tu), his (su-él), her (su-ella), our (nuestro), their (su-ellos)."}
    ]},
    {level:2, type:"Familia", title:"Mi familia", sub:"Hablando del pasado", lines:[
      {q:"My mother worked in a hospital.", s:"Mi madre trabajó en un hospital."},
      {q:"My father was a farmer.", s:"Mi padre era agricultor."},
      {q:"We lived in a small village.", s:"Vivíamos en un pequeño pueblo."},
      {q:"My grandmother cooked delicious food.", s:"Mi abuela cocinaba comida deliciosa."},
      {q:"My brother will study medicine.", s:"Mi hermano estudiará medicina."},
      {q:"We will visit our family next year.", s:"Visitaremos a nuestra familia el próximo año."},
      {q:"She was a very kind woman.", s:"Ella era una mujer muy amable."}
    ], notes:[
      {t:"Pasado simple", d:"Para verbos regulares se agrega -ed al final: work → worked, live → lived."},
      {t:"Verbo 'was / were'", d:"Pasado de 'to be': I was, he/she/it was, you/we/they were."},
      {t:"Futuro con 'will'", d:"Se usa 'will + verbo base' para hablar del futuro: I will go, she will study."}
    ]},
    {level:2, type:"Mercado", title:"En el mercado", sub:"Comprando y vendiendo", lines:[
      {q:"How much does this cost?", s:"¿Cuánto cuesta esto?"},
      {q:"I bought vegetables yesterday.", s:"Compré verduras ayer."},
      {q:"She sold beautiful flowers.", s:"Ella vendió flores hermosas."},
      {q:"We went to the market every Saturday.", s:"Íbamos al mercado todos los sábados."},
      {q:"He will buy fresh fruit tomorrow.", s:"Él comprará fruta fresca mañana."},
      {q:"The bread was very cheap.", s:"El pan estaba muy barato."},
      {q:"I did not have enough money.", s:"No tenía suficiente dinero."}
    ], notes:[
      {t:"Preguntar el precio", d:"'How much does it cost?' o simplemente 'How much is it?' son las formas más comunes."},
      {t:"Pasado de verbos irregulares", d:"Buy → bought, go → went, sell → sold. Estos no siguen la regla de -ed."},
      {t:"Negación en pasado", d:"Se usa 'did not' (didn't) + verbo base: I did not go, she did not buy."}
    ]},
    {level:2, type:"Rutina", title:"Rutina diaria", sub:"El día a día", lines:[
      {q:"I wake up at six o'clock every morning.", s:"Me despierto a las seis de la mañana todos los días."},
      {q:"She drinks coffee before going to work.", s:"Ella toma café antes de ir al trabajo."},
      {q:"Yesterday I walked to the park.", s:"Ayer caminé hasta el parque."},
      {q:"We ate dinner at eight.", s:"Cenamos a las ocho."},
      {q:"He will go to bed early tonight.", s:"Él se irá a dormir temprano esta noche."},
      {q:"I always brush my teeth before sleeping.", s:"Siempre me cepillo los dientes antes de dormir."},
      {q:"They cooked together last Sunday.", s:"Cocinaron juntos el domingo pasado."}
    ], notes:[
      {t:"Presente simple para rutinas", d:"En inglés se usa el presente simple para hábitos y rutinas: I wake up, she drinks."},
      {t:"Adverbios de frecuencia", d:"Always (siempre), usually (normalmente), sometimes (a veces), never (nunca) van antes del verbo principal."},
      {t:"Expresiones de tiempo", d:"Yesterday (ayer), today (hoy), tomorrow (mañana), last Sunday (el domingo pasado)."}
    ]},
    {level:2, type:"Direcciones", title:"Pidiendo direcciones", sub:"En la ciudad", lines:[
      {q:"Excuse me, where is the hospital?", s:"Disculpe, ¿dónde está el hospital?"},
      {q:"Go straight ahead for two blocks.", s:"Siga recto por dos cuadras."},
      {q:"Turn left at the traffic light.", s:"Gire a la izquierda en el semáforo."},
      {q:"The school is on the right.", s:"La escuela está a la derecha."},
      {q:"It is near the park.", s:"Está cerca del parque."},
      {q:"How far is it from here?", s:"¿Qué tan lejos está de aquí?"},
      {q:"You can take the bus number five.", s:"Puede tomar el autobús número cinco."}
    ], notes:[
      {t:"Imperativos", d:"Para dar instrucciones se usa el verbo directamente: Go, Turn, Walk. No se necesita sujeto."},
      {t:"Preposiciones de lugar", d:"On the right (a la derecha), on the left (a la izquierda), straight ahead (recto), near (cerca)."},
      {t:"Pregunta con 'where'", d:"'Where is...?' para preguntar la ubicación de algo o alguien."}
    ]},
    {level:3, type:"Condicional", title:"Condicionales e hipótesis", sub:"Sueños y posibilidades", lines:[
      {q:"If I had more time, I would travel the world.", s:"Si tuviera más tiempo, viajaría por el mundo."},
      {q:"If she studied more, she would pass the exam.", s:"Si ella estudiara más, aprobaría el examen."},
      {q:"If we worked together, we could achieve anything.", s:"Si trabajáramos juntos, podríamos lograr cualquier cosa."},
      {q:"I would learn five languages if I could.", s:"Aprendería cinco idiomas si pudiera."},
      {q:"If it rained, we would stay at home.", s:"Si lloviera, nos quedaríamos en casa."},
      {q:"She would be happier if she followed her dreams.", s:"Ella sería más feliz si siguiera sus sueños."},
      {q:"If I were you, I would accept the offer.", s:"Si yo fuera tú, aceptaría la oferta."}
    ], notes:[
      {t:"Condicional tipo 2", d:"Se usa para situaciones hipotéticas: If + pasado simple, would + infinitivo. Expresa algo irreal o improbable."},
      {t:"'If I were you'", d:"Se usa 'were' (no 'was') con todas las personas en condicionales: If I were, If she were. Es una excepción gramatical."},
      {t:"Could vs Would", d:"'Would' expresa consecuencia segura. 'Could' expresa posibilidad: I could achieve (podría lograr)."}
    ]},
    {level:3, type:"Salud", title:"Salud y el cuerpo", sub:"Cuidando el bienestar", lines:[
      {q:"I have had a headache since this morning.", s:"He tenido dolor de cabeza desde esta mañana."},
      {q:"She should rest and drink plenty of water.", s:"Ella debería descansar y beber mucha agua."},
      {q:"The doctor told him to exercise regularly.", s:"El médico le dijo que haga ejercicio regularmente."},
      {q:"We must take care of our mental health.", s:"Debemos cuidar nuestra salud mental."},
      {q:"If I had eaten better, I would feel stronger.", s:"Si hubiera comido mejor, me sentiría más fuerte."},
      {q:"She has been feeling tired for a week.", s:"Ella se ha sentido cansada durante una semana."},
      {q:"Prevention is better than cure.", s:"Prevenir es mejor que curar."}
    ], notes:[
      {t:"Present perfect", d:"'Have/has + participio pasado' para acciones que empezaron en el pasado y siguen: I have had a headache."},
      {t:"Should / Must", d:"'Should' es una recomendación (debería). 'Must' es una obligación fuerte (debe/tiene que)."},
      {t:"Told + infinitivo", d:"'Tell someone to do something': The doctor told him to exercise. No se usa 'that he exercises'."}
    ]},
    {level:3, type:"Trabajo", title:"Trabajo y sueños", sub:"El futuro profesional", lines:[
      {q:"I have always dreamed of becoming a doctor.", s:"Siempre he soñado con convertirme en médico."},
      {q:"She has worked in this company for ten years.", s:"Ella ha trabajado en esta empresa durante diez años."},
      {q:"By next year, he will have finished his degree.", s:"Para el próximo año, él habrá terminado su carrera."},
      {q:"If I had chosen a different path, my life would be different.", s:"Si hubiera elegido un camino diferente, mi vida sería distinta."},
      {q:"We need people who are passionate about what they do.", s:"Necesitamos personas apasionadas por lo que hacen."},
      {q:"Success requires dedication, patience, and hard work.", s:"El éxito requiere dedicación, paciencia y trabajo duro."},
      {q:"She decided to follow her heart despite the challenges.", s:"Ella decidió seguir su corazón a pesar de los desafíos."}
    ], notes:[
      {t:"Present perfect con 'for' y 'since'", d:"'For' indica duración (for ten years = durante diez años). 'Since' indica el momento de inicio (since 2010)."},
      {t:"Futuro perfecto", d:"'Will have + participio' para acciones que estarán completadas en un momento futuro: will have finished."},
      {t:"Condicional tipo 3", d:"'If I had chosen..., ...would be' — habla de situaciones pasadas que no ocurrieron y sus consecuencias hipotéticas."}
    ]}
  ]},
  en_po: {title:"Poesía en inglés", color:"#8b5cf6", pieces:[
    {level:1, type:"Poema", title:"Roses Are Red", sub:"Rima clásica infantil", poem:true, lines:[
      {q:"Roses are red,", s:"Las rosas son rojas,"},
      {q:"Violets are blue,", s:"Las violetas son azules,"},
      {q:"Sugar is sweet,", s:"El azúcar es dulce,"},
      {q:"And so are you.", s:"Y tú también lo eres."}
    ], notes:[
      {t:"Rima en inglés", d:"'Blue' y 'you' riman. En inglés, las rimas muchas veces no son perfectas en escritura, pero sí en pronunciación."},
      {t:"'So are you'", d:"Significa 'tú también lo eres'. Es una forma corta de repetir el adjetivo con el sujeto nuevo."}
    ]},
    {level:1, type:"Poema", title:"Twinkle Twinkle", sub:"Canción de cuna clásica", poem:true, lines:[
      {q:"Twinkle, twinkle, little star,", s:"Brilla, brilla, pequeña estrella,"},
      {q:"How I wonder what you are.", s:"Cuánto me pregunto qué eres."},
      {q:"Up above the world so high,", s:"Muy arriba en el mundo,"},
      {q:"Like a diamond in the sky.", s:"Como un diamante en el cielo."},
      {q:"Twinkle, twinkle, little star,", s:"Brilla, brilla, pequeña estrella,"},
      {q:"How I wonder what you are.", s:"Cuánto me pregunto qué eres."}
    ], notes:[
      {t:"Twinkle", d:"'To twinkle' significa brillar o centellear (dicho de las estrellas). No confundir con 'to shine' que es un brillo constante."},
      {t:"Inversión poética", d:"'How I wonder' — en poesía a veces se cambia el orden normal de las palabras para lograr ritmo o énfasis."}
    ]},
    {level:2, type:"Poema", title:"Yesterday", sub:"Estilo canción romántica", poem:true, lines:[
      {q:"Yesterday all my troubles seemed so far away,", s:"Ayer todos mis problemas parecían tan lejanos,"},
      {q:"Now it looks as though they're here to stay,", s:"Ahora parece que llegaron para quedarse,"},
      {q:"Oh, I believe in yesterday.", s:"Oh, creo en el ayer."},
      {q:"Suddenly I'm not half the man I used to be,", s:"De repente no soy ni la mitad del hombre que era,"},
      {q:"There's a shadow hanging over me,", s:"Hay una sombra sobre mí,"},
      {q:"Oh, yesterday came suddenly.", s:"Oh, el ayer llegó de repente."}
    ], notes:[
      {t:"'Used to'", d:"'I used to be' significa 'yo era antes' o 'yo solía ser'. Expresa algo que era cierto en el pasado pero ya no."},
      {t:"'It looks as though'", d:"Equivale a 'parece que' — una expresión para indicar una impresión o suposición."},
      {t:"Metáfora", d:"'A shadow hanging over me' — una sombra sobre mí — es una metáfora para describir tristeza o preocupación."}
    ]},
    {level:2, type:"Poema", title:"Over the Rainbow", sub:"Estilo canción de esperanza", poem:true, lines:[
      {q:"Somewhere over the rainbow, way up high,", s:"En algún lugar sobre el arcoíris, muy arriba,"},
      {q:"There's a land that I heard of once in a lullaby.", s:"Hay una tierra que escuché una vez en una canción de cuna."},
      {q:"Somewhere over the rainbow, skies are blue,", s:"En algún lugar sobre el arcoíris, los cielos son azules,"},
      {q:"And the dreams that you dare to dream really do come true.", s:"Y los sueños que te atreves a soñar realmente se hacen realidad."},
      {q:"If happy little bluebirds fly beyond the rainbow,", s:"Si los pequeños pájaros azules felices vuelan más allá del arcoíris,"},
      {q:"Why, oh why can't I?", s:"¿Por qué, oh por qué no puedo yo?"}
    ], notes:[
      {t:"'Dare to dream'", d:"'Dare' significa atreverse. 'Dare to dream' = atreverse a soñar. Es una expresión muy usada en inglés motivacional."},
      {t:"Condicional implícito", d:"'If bluebirds fly... why can't I?' — si ellos pueden, ¿por qué yo no? Es un argumento poético por analogía."}
    ]},
    {level:3, type:"Poema", title:"Shall I Compare Thee", sub:"Estilo soneto de Shakespeare", poem:true, lines:[
      {q:"Shall I compare thee to a summer's day?", s:"¿Debo compararte con un día de verano?"},
      {q:"Thou art more lovely and more temperate.", s:"Eres más hermosa y más apacible."},
      {q:"Rough winds do shake the darling buds of May,", s:"Los vientos rudos sacuden los queridos brotes de mayo,"},
      {q:"And summer's lease hath all too short a date.", s:"Y el contrato del verano dura demasiado poco."},
      {q:"But thy eternal summer shall not fade,", s:"Pero tu eterno verano no se marchitará,"},
      {q:"So long as men can breathe, or eyes can see,", s:"Mientras los hombres puedan respirar, o los ojos ver,"},
      {q:"So long lives this, and this gives life to thee.", s:"Vivirá esto, y esto te dará vida a ti."}
    ], notes:[
      {t:"Inglés antiguo", d:"'Thou art' = you are, 'thee' = you (objeto), 'thy' = your. Shakespeare usaba estas formas del siglo XVI."},
      {t:"Metáforas de naturaleza", d:"En los sonetos, Shakespeare compara la belleza humana con la naturaleza para exaltarla o contrastarla."},
      {t:"Legado de la poesía", d:"Este poema promete que el arte (el poema mismo) preservará la belleza de la persona para siempre."}
    ]},
    {level:3, type:"Poema", title:"Hope is the Thing", sub:"Estilo Emily Dickinson", poem:true, lines:[
      {q:"Hope is the thing with feathers", s:"La esperanza es la cosa con plumas"},
      {q:"That perches in the soul,", s:"Que se posa en el alma,"},
      {q:"And sings the tune without the words,", s:"Y canta la melodía sin palabras,"},
      {q:"And never stops at all.", s:"Y nunca se detiene."},
      {q:"And sweetest in the gale is heard,", s:"Y más dulce se escucha en la tormenta,"},
      {q:"And sore must be the storm", s:"Y muy fuerte debe ser la tormenta"},
      {q:"That could abash the little bird", s:"Que pudiera avergonzar al pequeño pájaro"},
      {q:"That kept so many warm.", s:"Que mantuvo a tantos abrigados."}
    ], notes:[
      {t:"Metáfora extendida", d:"Dickinson describe la esperanza como un pájaro. Este recurso literario donde una metáfora se desarrolla a lo largo del poema se llama 'extended metaphor'."},
      {t:"'Gale'", d:"Una 'gale' es un viento fuerte o tormenta. La esperanza es más poderosa justamente cuando las circunstancias son más difíciles."},
      {t:"Estructura de Dickinson", d:"Sus poemas tienen un ritmo parecido a los himnos religiosos, alternando versos de 8 y 6 sílabas."}
    ]}
  ]},
  en_le: {title:"Cuentos en inglés", color:"#f59e0b", pieces:[
    {level:1, type:"Fábula", title:"The Fox and the Grapes", sub:"Fábula de Esopo", legend:true, lines:[
      {q:"One hot day, a fox saw some grapes on a vine.", s:"Un día caluroso, un zorro vio unas uvas en una vid."},
      {q:"The grapes looked sweet and delicious.", s:"Las uvas parecían dulces y deliciosas."},
      {q:"The fox jumped and jumped, but could not reach them.", s:"El zorro saltó y saltó, pero no podía alcanzarlas."},
      {q:"He tried again and again, but always failed.", s:"Lo intentó una y otra vez, pero siempre fracasó."},
      {q:"Finally, the fox walked away.", s:"Finalmente, el zorro se alejó."},
      {q:"He said: 'Those grapes are probably sour anyway.'", s:"Dijo: 'Esas uvas probablemente están agrias de todas formas.'"},
      {q:"Moral: It is easy to hate what you cannot have.", s:"Moraleja: Es fácil odiar lo que no puedes tener."}
    ], notes:[
      {t:"Moraleja de la fábula", d:"Las fábulas de Esopo enseñan valores. 'Sour grapes' (uvas agrias) es ahora una expresión en inglés para despreciar algo que no se pudo obtener."},
      {t:"Could not / Could", d:"'Could' es el pasado de 'can'. 'He could not reach' = no podía alcanzar."}
    ]},
    {level:1, type:"Fábula", title:"The Tortoise and the Hare", sub:"Fábula de Esopo", legend:true, lines:[
      {q:"A hare laughed at a tortoise for being slow.", s:"Una liebre se burló de una tortuga por ser lenta."},
      {q:"The tortoise challenged the hare to a race.", s:"La tortuga desafió a la liebre a una carrera."},
      {q:"The hare ran fast, then stopped to rest.", s:"La liebre corrió rápido, luego se detuvo a descansar."},
      {q:"The hare fell asleep under a tree.", s:"La liebre se durmió bajo un árbol."},
      {q:"The tortoise walked slowly but never stopped.", s:"La tortuga caminó lentamente pero nunca se detuvo."},
      {q:"When the hare woke up, the tortoise had already won.", s:"Cuando la liebre despertó, la tortuga ya había ganado."},
      {q:"Moral: Slow and steady wins the race.", s:"Moraleja: Lento y constante gana la carrera."}
    ], notes:[
      {t:"Past perfect 'had won'", d:"'Had + participio' indica que una acción pasada terminó antes que otra: when he woke up, she had already won."},
      {t:"Refrán inglés", d:"'Slow and steady wins the race' es un proverbio muy conocido en inglés. Enseña el valor de la constancia."}
    ]},
    {level:2, type:"Cuento", title:"Little Red Riding Hood", sub:"Caperucita Roja en inglés", legend:true, lines:[
      {q:"Once upon a time, a little girl wore a red hood.", s:"Había una vez una niña que usaba una caperuza roja."},
      {q:"Her grandmother lived deep in the forest.", s:"Su abuela vivía en lo profundo del bosque."},
      {q:"One day, she walked through the forest with a basket.", s:"Un día, caminó por el bosque con una canasta."},
      {q:"A wolf saw her and asked where she was going.", s:"Un lobo la vio y le preguntó a dónde iba."},
      {q:"The wolf ran ahead and tricked her grandmother.", s:"El lobo se adelantó y engañó a su abuela."},
      {q:"When the girl arrived, something seemed different.", s:"Cuando la niña llegó, algo parecía diferente."},
      {q:"'What big eyes you have!' 'All the better to see you with.'", s:"'¡Qué ojos tan grandes tienes!' 'Para verte mejor.'"},
      {q:"A hunter heard her cries and saved them both.", s:"Un cazador escuchó sus gritos y las salvó a ambas."}
    ], notes:[
      {t:"'Once upon a time'", d:"Así empiezan casi todos los cuentos en inglés, igual que 'Había una vez' en español."},
      {t:"Discurso indirecto", d:"'She asked where she was going' — cuando reportamos lo que alguien preguntó, el tiempo verbal retrocede."},
      {t:"Exclamaciones con 'What'", d:"'What big eyes you have!' = ¡Qué ojos tan grandes tienes! Se forma con What + adjetivo + sustantivo."}
    ]},
    {level:2, type:"Cuento", title:"Cinderella", sub:"Cenicienta en inglés", legend:true, lines:[
      {q:"Cinderella lived with her stepmother and two stepsisters.", s:"Cenicienta vivía con su madrastra y dos hermanastras."},
      {q:"They were cruel and made her do all the housework.", s:"Eran crueles y la hacían hacer todo el trabajo doméstico."},
      {q:"One day, the prince invited everyone to a great ball.", s:"Un día, el príncipe invitó a todos a un gran baile."},
      {q:"A fairy godmother appeared and gave her a beautiful dress.", s:"Una hada madrina apareció y le dio un hermoso vestido."},
      {q:"She danced with the prince all night long.", s:"Bailó con el príncipe durante toda la noche."},
      {q:"At midnight, she ran away and lost her glass slipper.", s:"A medianoche, huyó y perdió su zapatilla de cristal."},
      {q:"The prince searched the kingdom and found her.", s:"El príncipe buscó por todo el reino y la encontró."},
      {q:"They lived happily ever after.", s:"Vivieron felices para siempre."}
    ], notes:[
      {t:"'Make someone do'", d:"'Made her do' — 'make + alguien + verbo base' significa obligar a alguien a hacer algo."},
      {t:"'All night long'", d:"'Long' añadido a períodos de tiempo enfatiza duración: all night long, all day long, all year long."},
      {t:"Finales de cuentos", d:"'They lived happily ever after' es la frase clásica para terminar un cuento de hadas en inglés."}
    ]},
    {level:3, type:"Cuento", title:"The Gift of the Magi", sub:"Estilo O. Henry", legend:true, lines:[
      {q:"Della had only one dollar and eighty-seven cents.", s:"Della solo tenía un dólar y ochenta y siete centavos."},
      {q:"She wanted to buy her husband Jim a Christmas gift.", s:"Quería comprarle a su esposo Jim un regalo de Navidad."},
      {q:"Della's greatest treasure was her long, beautiful hair.", s:"El mayor tesoro de Della era su largo y hermoso cabello."},
      {q:"She sold her hair to buy Jim a watch chain.", s:"Vendió su cabello para comprarle a Jim una cadena para reloj."},
      {q:"Jim arrived home with a package in his hands.", s:"Jim llegó a casa con un paquete en sus manos."},
      {q:"Inside were beautiful combs for her hair — now gone.", s:"Adentro había hermosos peines para su cabello, que ya no tenía."},
      {q:"Jim had sold his watch to buy those combs.", s:"Jim había vendido su reloj para comprar esos peines."},
      {q:"Both had given up their greatest treasure for love.", s:"Ambos habían sacrificado su mayor tesoro por amor."}
    ], notes:[
      {t:"Ironía dramática", d:"El lector entiende la tragedia cómica: cada uno sacrificó lo más valioso para el regalo del otro, haciendo ambos regalos inútiles."},
      {t:"Past perfect narrativo", d:"'Had sold', 'had given up' — el past perfect marca que esas acciones ocurrieron antes del momento principal de la historia."},
      {t:"O. Henry", d:"William Sydney Porter (O. Henry, 1862-1910) es famoso por sus finales sorpresivos. 'The Gift of the Magi' es su cuento más conocido."}
    ]},
    {level:3, type:"Cuento", title:"The Adventures of Tom Sawyer", sub:"Estilo Mark Twain", legend:true, lines:[
      {q:"Tom Sawyer was a clever boy who lived by the Mississippi River.", s:"Tom Sawyer era un niño listo que vivía junto al río Mississippi."},
      {q:"His aunt Polly punished him by making him whitewash the fence.", s:"Su tía Polly lo castigó haciéndolo pintar la cerca de blanco."},
      {q:"Tom had a brilliant idea to avoid the hard work.", s:"Tom tuvo una idea brillante para evitar el trabajo duro."},
      {q:"He pretended that painting the fence was a great privilege.", s:"Fingió que pintar la cerca era un gran privilegio."},
      {q:"The other boys were so curious that they begged to help.", s:"Los otros niños tenían tanta curiosidad que rogaron poder ayudar."},
      {q:"Tom sat back and watched while others did his work.", s:"Tom se recostó y observó mientras otros hacían su trabajo."},
      {q:"By noon, the fence had three coats of paint.", s:"Al mediodía, la cerca tenía tres capas de pintura."},
      {q:"Tom had learned that work is whatever one is obliged to do.", s:"Tom había aprendido que el trabajo es lo que uno está obligado a hacer."}
    ], notes:[
      {t:"Mark Twain", d:"Samuel Clemens (Mark Twain, 1835-1910) capturó el espíritu del sur de Estados Unidos del siglo XIX. Su prosa es conocida por ser vívida y con humor."},
      {t:"'Begged to'", d:"'Beg' significa rogar o suplicar. 'They begged to help' = suplicaron que se les dejara ayudar."},
      {t:"Psicología invertida", d:"Tom usa la psicología inversa: al hacer que algo parezca deseable, logra que otros lo quieran hacer."}
    ]}
  ]},
  en_es: {title:"Textos cortos en inglés", color:"#fb7185", pieces:[
    {level:1, type:"Texto", title:"The English Language", sub:"Un idioma global", essay:true, paras:[
      {q:"English is one of the most spoken languages in the world. More than one billion people speak English in many different countries. It is used in science, business, music, and movies. Learning English opens many doors.", s:"El inglés es uno de los idiomas más hablados en el mundo. Más de mil millones de personas hablan inglés en muchos países diferentes. Se usa en ciencia, negocios, música y películas. Aprender inglés abre muchas puertas."},
      {q:"English has many words that come from other languages, like French, Latin, and German. This is why English can seem difficult at first. But with practice every day, anyone can learn it. The most important thing is not to be afraid of making mistakes.", s:"El inglés tiene muchas palabras que vienen de otros idiomas, como el francés, el latín y el alemán. Por eso el inglés puede parecer difícil al principio. Pero con práctica todos los días, cualquiera puede aprenderlo. Lo más importante es no tener miedo de cometer errores."}
    ], notes:[
      {t:"'Opens doors'", d:"'To open doors' es una expresión metafórica que significa crear oportunidades. Muy común en inglés."},
      {t:"'Anyone can'", d:"'Anyone' significa cualquier persona. 'Anyone can learn' = cualquiera puede aprender. No tiene género ni número."}
    ]},
    {level:2, type:"Texto", title:"Climate Change", sub:"El desafío de nuestra época", essay:true, paras:[
      {q:"Climate change is one of the biggest challenges facing our planet today. The Earth's temperature has been rising because of greenhouse gases produced by human activities. Burning fossil fuels, cutting down forests, and industrial processes all contribute to global warming.", s:"El cambio climático es uno de los mayores desafíos que enfrenta nuestro planeta hoy. La temperatura de la Tierra ha ido aumentando debido a los gases de efecto invernadero producidos por las actividades humanas. Quemar combustibles fósiles, talar bosques y los procesos industriales contribuyen al calentamiento global."},
      {q:"Scientists warn that if we do not act quickly, the consequences will be severe. Rising sea levels, extreme weather events, and the loss of biodiversity are already being observed. However, there is still hope. Renewable energy, sustainable agriculture, and international cooperation can help us protect our planet for future generations.", s:"Los científicos advierten que si no actuamos rápidamente, las consecuencias serán graves. El aumento del nivel del mar, los eventos climáticos extremos y la pérdida de biodiversidad ya se están observando. Sin embargo, todavía hay esperanza. La energía renovable, la agricultura sostenible y la cooperación internacional pueden ayudarnos a proteger nuestro planeta para las generaciones futuras."}
    ], notes:[
      {t:"'Has been rising'", d:"Present perfect continuo — indica que la acción empezó en el pasado y continúa ahora: 'ha estado subiendo'."},
      {t:"'If we do not act'", d:"Condicional tipo 1 (real): If + presente, will + infinitivo. Expresa una situación posible con consecuencias reales."}
    ]},
    {level:2, type:"Texto", title:"Social Media", sub:"La era digital", essay:true, paras:[
      {q:"Social media has changed the way people communicate, share information, and see the world. Platforms like Instagram, YouTube, and TikTok allow millions of people to connect instantly across different countries and cultures. For creators and small businesses, social media offers an incredible opportunity to reach an audience without a big budget.", s:"Las redes sociales han cambiado la forma en que las personas se comunican, comparten información y ven el mundo. Plataformas como Instagram, YouTube y TikTok permiten que millones de personas se conecten instantáneamente a través de diferentes países y culturas. Para los creadores y las pequeñas empresas, las redes sociales ofrecen una oportunidad increíble de llegar a una audiencia sin un gran presupuesto."},
      {q:"However, social media also has its challenges. Misinformation spreads quickly, and the pressure to always look perfect can affect mental health. It is important to use these platforms consciously, with clear boundaries and a healthy relationship with screen time. The key is to use social media as a tool, not to let it use you.", s:"Sin embargo, las redes sociales también tienen sus desafíos. La desinformación se propaga rápidamente y la presión de siempre parecer perfectos puede afectar la salud mental. Es importante usar estas plataformas conscientemente, con límites claros y una relación saludable con el tiempo frente a la pantalla. La clave es usar las redes sociales como una herramienta, no dejar que ellas te usen a ti."}
    ], notes:[
      {t:"'Has changed'", d:"Present perfect con resultado presente: las redes sociales cambiaron la comunicación y ese cambio sigue vigente."},
      {t:"'Allow + someone + to'", d:"'Allow people to connect' — estructura muy común en inglés para decir que algo permite a alguien hacer algo."}
    ]},
    {level:3, type:"Texto", title:"The Future of Artificial Intelligence", sub:"Tecnología y humanidad", essay:true, paras:[
      {q:"Artificial intelligence is no longer science fiction. It is reshaping industries, redefining human creativity, and raising profound questions about the future of work. Machine learning algorithms now diagnose diseases, write code, compose music, and generate images with remarkable accuracy. The pace of development suggests that within decades, AI systems may surpass human performance in most cognitive tasks.", s:"La inteligencia artificial ya no es ciencia ficción. Está transformando industrias, redefiniendo la creatividad humana y planteando preguntas profundas sobre el futuro del trabajo. Los algoritmos de aprendizaje automático ahora diagnostican enfermedades, escriben código, componen música y generan imágenes con una precisión notable. El ritmo de desarrollo sugiere que en décadas, los sistemas de IA podrían superar el rendimiento humano en la mayoría de las tareas cognitivas."},
      {q:"This progress brings both extraordinary opportunities and serious risks. On one hand, AI could accelerate scientific discovery, reduce poverty, and improve healthcare globally. On the other hand, unchecked AI development could deepen inequalities, threaten privacy, and pose existential risks if powerful systems are misaligned with human values. The greatest challenge of our century is not building smarter machines, but ensuring that intelligence — artificial or human — serves the common good.", s:"Este progreso trae tanto oportunidades extraordinarias como riesgos graves. Por un lado, la IA podría acelerar el descubrimiento científico, reducir la pobreza y mejorar la atención médica a nivel mundial. Por otro lado, el desarrollo descontrolado de la IA podría profundizar las desigualdades, amenazar la privacidad y presentar riesgos existenciales si los sistemas poderosos no están alineados con los valores humanos. El mayor desafío de nuestro siglo no es construir máquinas más inteligentes, sino garantizar que la inteligencia, artificial o humana, sirva al bien común."}
    ], notes:[
      {t:"'Is reshaping' (continuo)", d:"El presente continuo en textos formales a veces enfatiza que el cambio está ocurriendo activamente en este momento histórico."},
      {t:"'On one hand... on the other hand'", d:"Estructura para presentar dos lados de un argumento: 'Por un lado... por el otro lado'. Muy útil en textos académicos."},
      {t:"Registro formal", d:"Textos académicos en inglés evitan contracciones (aren't → are not), usan vocabulario preciso y construyen argumentos con evidencia."}
    ]}
  ]}
};
