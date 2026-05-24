const PALABRAS_EN = [
  {cat:"Familia", q:"mother", s:"madre", col:"#fed7aa", img:"mother and child portrait", ex:[
    {t:"Pasado",   q:"Her mother held her close that night.", s:"Su madre la abrazó fuerte esa noche."},
    {t:"Presente", q:"My mother calls me every Sunday.", s:"Mi madre me llama cada domingo."},
    {t:"Futuro",   q:"She will become a mother one day.", s:"Ella será madre algún día."}
  ]},
  {cat:"Familia", q:"father", s:"padre", col:"#fed7aa", img:"father and child", ex:[
    {t:"Pasado",   q:"His father taught him to fish.", s:"Su padre le enseñó a pescar."},
    {t:"Presente", q:"My father works in the city.", s:"Mi padre trabaja en la ciudad."},
    {t:"Futuro",   q:"He will be a great father.", s:"Él será un gran padre."}
  ]},
  {cat:"Familia", q:"sister", s:"hermana", col:"#fed7aa", img:"sisters together", ex:[
    {t:"Pasado",   q:"My sister sang at the school event.", s:"Mi hermana cantó en el evento de la escuela."},
    {t:"Presente", q:"I have one sister and two brothers.", s:"Tengo una hermana y dos hermanos."},
    {t:"Futuro",   q:"My sister will visit us next month.", s:"Mi hermana nos visitará el próximo mes."}
  ]},
  {cat:"Familia", q:"brother", s:"hermano", col:"#fed7aa", img:"brothers together", ex:[
    {t:"Pasado",   q:"My brother helped me move last year.", s:"Mi hermano me ayudó a mudarme el año pasado."},
    {t:"Presente", q:"My brother lives in another country.", s:"Mi hermano vive en otro país."},
    {t:"Futuro",   q:"Her brother will finish school this year.", s:"Su hermano terminará la escuela este año."}
  ]},
  {cat:"Familia", q:"grandmother", s:"abuela", col:"#fed7aa", img:"grandmother portrait", ex:[
    {t:"Pasado",   q:"My grandmother made bread every morning.", s:"Mi abuela hacía pan cada mañana."},
    {t:"Presente", q:"My grandmother tells the best stories.", s:"Mi abuela cuenta las mejores historias."},
    {t:"Futuro",   q:"We will visit our grandmother this summer.", s:"Visitaremos a nuestra abuela este verano."}
  ]},
  {cat:"Familia", q:"grandfather", s:"abuelo", col:"#fed7aa", img:"grandfather portrait", ex:[
    {t:"Pasado",   q:"Her grandfather walked miles every day.", s:"Su abuelo caminaba kilómetros cada día."},
    {t:"Presente", q:"My grandfather reads the news each morning.", s:"Mi abuelo lee las noticias cada mañana."},
    {t:"Futuro",   q:"My grandfather will turn 80 next year.", s:"Mi abuelo cumplirá 80 años el próximo año."}
  ]},
  {cat:"Familia", q:"son", s:"hijo", col:"#fed7aa", note:"'Son' (hijo) suena como 'sun' (sol) — son palabras homófonas.", img:"parent child love", ex:[
    {t:"Pasado",   q:"Their son was born on a winter morning.", s:"Su hijo nació una mañana de invierno."},
    {t:"Presente", q:"Her son goes to school every day.", s:"Su hijo va a la escuela todos los días."},
    {t:"Futuro",   q:"Their son will study music next year.", s:"Su hijo estudiará música el próximo año."}
  ]},
  {cat:"Familia", q:"daughter", s:"hija", col:"#fed7aa", img:"parent daughter love", ex:[
    {t:"Pasado",   q:"Their daughter learned to ride a bike last summer.", s:"Su hija aprendió a andar en bicicleta el verano pasado."},
    {t:"Presente", q:"My daughter loves to draw.", s:"A mi hija le encanta dibujar."},
    {t:"Futuro",   q:"Their daughter will travel to Europe someday.", s:"Su hija viajará a Europa algún día."}
  ]},
  {cat:"Familia", q:"husband", s:"esposo / marido", col:"#fed7aa", img:"couple together", ex:[
    {t:"Pasado",   q:"Her husband cooked dinner last night.", s:"Su esposo cocinó la cena anoche."},
    {t:"Presente", q:"Her husband works from home now.", s:"Su esposo trabaja desde casa ahora."},
    {t:"Futuro",   q:"Her husband will come home tomorrow.", s:"Su esposo llegará a casa mañana."}
  ]},
  {cat:"Familia", q:"wife", s:"esposa", col:"#fed7aa", img:"couple love", ex:[
    {t:"Pasado",   q:"His wife planted flowers in the garden.", s:"Su esposa plantó flores en el jardín."},
    {t:"Presente", q:"His wife sings in a choir.", s:"Su esposa canta en un coro."},
    {t:"Futuro",   q:"His wife will join him on the trip.", s:"Su esposa lo acompañará en el viaje."}
  ]},
  {cat:"Cuerpo", q:"head", s:"cabeza", col:"#fca5a5", img:"person portrait face", ex:[
    {t:"Pasado",   q:"She rested her head on the pillow.", s:"Ella apoyó la cabeza en la almohada."},
    {t:"Presente", q:"He shakes his head when he disagrees.", s:"Él sacude la cabeza cuando no está de acuerdo."},
    {t:"Futuro",   q:"The doctor will check his head tomorrow.", s:"El doctor le revisará la cabeza mañana."}
  ]},
  {cat:"Cuerpo", q:"eye", s:"ojo", col:"#fca5a5", img:"close up human eye", ex:[
    {t:"Pasado",   q:"She opened her eye slowly in the morning.", s:"Ella abrió el ojo lentamente por la mañana."},
    {t:"Presente", q:"His eye catches every small detail.", s:"Su ojo capta cada pequeño detalle."},
    {t:"Futuro",   q:"The doctor will check her eye next week.", s:"El doctor le revisará el ojo la próxima semana."}
  ]},
  {cat:"Cuerpo", q:"ear", s:"oreja / oído", col:"#fca5a5", img:"human ear", ex:[
    {t:"Pasado",   q:"The music reached her ear from across the room.", s:"La música llegó a su oído desde el otro lado de la habitación."},
    {t:"Presente", q:"He has an ear for beautiful melodies.", s:"Él tiene oído para las melodías hermosas."},
    {t:"Futuro",   q:"She will protect her ear from the loud noise.", s:"Ella protegerá su oído del ruido fuerte."}
  ]},
  {cat:"Cuerpo", q:"nose", s:"nariz", col:"#fca5a5", img:"portrait nose close", ex:[
    {t:"Pasado",   q:"The cold air turned his nose red.", s:"El aire frío le puso la nariz roja."},
    {t:"Presente", q:"Her nose is sensitive to strong smells.", s:"Su nariz es sensible a los olores fuertes."},
    {t:"Futuro",   q:"The scent of flowers will reach her nose.", s:"El aroma de las flores llegará a su nariz."}
  ]},
  {cat:"Cuerpo", q:"mouth", s:"boca", col:"#fca5a5", img:"lips mouth close", ex:[
    {t:"Pasado",   q:"She opened her mouth to speak.", s:"Ella abrió la boca para hablar."},
    {t:"Presente", q:"He covers his mouth when he laughs.", s:"Él se cubre la boca cuando se ríe."},
    {t:"Futuro",   q:"She will open her mouth and sing.", s:"Ella abrirá la boca y cantará."}
  ]},
  {cat:"Cuerpo", q:"hand", s:"mano", col:"#fca5a5", img:"open hand palm", ex:[
    {t:"Pasado",   q:"She held his hand during the ceremony.", s:"Ella le sostuvo la mano durante la ceremonia."},
    {t:"Presente", q:"He raises his hand to ask a question.", s:"Él levanta la mano para hacer una pregunta."},
    {t:"Futuro",   q:"She will extend her hand in friendship.", s:"Ella extenderá su mano en amistad."}
  ]},
  {cat:"Cuerpo", q:"foot", s:"pie", col:"#fca5a5", note:"El plural de 'foot' es irregular: feet (pies).", img:"bare feet nature", ex:[
    {t:"Pasado",   q:"She felt the cold sand under her foot.", s:"Ella sintió la arena fría bajo su pie."},
    {t:"Presente", q:"His foot hurts after the long walk.", s:"Su pie le duele después de la larga caminata."},
    {t:"Futuro",   q:"She will put her foot in the water.", s:"Ella meterá el pie en el agua."}
  ]},
  {cat:"Cuerpo", q:"heart", s:"corazón", col:"#fca5a5", img:"heart love light", ex:[
    {t:"Pasado",   q:"Her heart beat fast when she saw him.", s:"Su corazón latió rápido cuando lo vio."},
    {t:"Presente", q:"My heart is full of gratitude.", s:"Mi corazón está lleno de gratitud."},
    {t:"Futuro",   q:"His heart will heal with time.", s:"Su corazón sanará con el tiempo."}
  ]},
  {cat:"Cuerpo", q:"stomach", s:"estómago", col:"#fca5a5", img:"wellness body health", ex:[
    {t:"Pasado",   q:"His stomach hurt after the heavy meal.", s:"Su estómago le dolió después de la comida pesada."},
    {t:"Presente", q:"Her stomach growls when she is hungry.", s:"Su estómago gruñe cuando tiene hambre."},
    {t:"Futuro",   q:"The medicine will calm her stomach.", s:"La medicina calmará su estómago."}
  ]},
  {cat:"Cuerpo", q:"back", s:"espalda", col:"#fca5a5", img:"yoga back stretch", ex:[
    {t:"Pasado",   q:"He stretched his back after the long day.", s:"Él estiró la espalda después del largo día."},
    {t:"Presente", q:"Her back feels strong from yoga.", s:"Su espalda se siente fuerte gracias al yoga."},
    {t:"Futuro",   q:"He will rest his back on the warm stone.", s:"Él apoyará la espalda en la piedra cálida."}
  ]},
  {cat:"Naturaleza", q:"sun", s:"sol", col:"#4ade80", img:"golden sunrise sky", ex:[
    {t:"Pasado",   q:"The sun rose behind the mountains.", s:"El sol salió detrás de las montañas."},
    {t:"Presente", q:"The sun shines on the water.", s:"El sol brilla sobre el agua."},
    {t:"Futuro",   q:"Tomorrow the sun will rise again.", s:"Mañana el sol saldrá de nuevo."}
  ]},
  {cat:"Naturaleza", q:"moon", s:"luna", col:"#4ade80", img:"full moon night sky", ex:[
    {t:"Pasado",   q:"The moon was full and bright last night.", s:"La luna estuvo llena y brillante anoche."},
    {t:"Presente", q:"The moon lights the path through the forest.", s:"La luna ilumina el camino en el bosque."},
    {t:"Futuro",   q:"The moon will be visible from our window.", s:"La luna será visible desde nuestra ventana."}
  ]},
  {cat:"Naturaleza", q:"star", s:"estrella", col:"#4ade80", img:"stars milky way night", ex:[
    {t:"Pasado",   q:"A bright star guided travelers long ago.", s:"Una estrella brillante guiaba a los viajeros hace mucho tiempo."},
    {t:"Presente", q:"Every star in the sky tells a story.", s:"Cada estrella en el cielo cuenta una historia."},
    {t:"Futuro",   q:"We will watch the first star appear tonight.", s:"Veremos aparecer la primera estrella esta noche."}
  ]},
  {cat:"Naturaleza", q:"water", s:"agua", col:"#4ade80", img:"clear water river", ex:[
    {t:"Pasado",   q:"The water flowed down the mountain all day.", s:"El agua fluyó montaña abajo todo el día."},
    {t:"Presente", q:"Clean water is essential for life.", s:"El agua limpia es esencial para la vida."},
    {t:"Futuro",   q:"We will carry water from the river tomorrow.", s:"Mañana llevaremos agua del río."}
  ]},
  {cat:"Naturaleza", q:"fire", s:"fuego", col:"#4ade80", img:"campfire flames", ex:[
    {t:"Pasado",   q:"The fire burned all night in the camp.", s:"El fuego ardió toda la noche en el campamento."},
    {t:"Presente", q:"The fire warms the whole family.", s:"El fuego calienta a toda la familia."},
    {t:"Futuro",   q:"We will light a fire on the beach tonight.", s:"Encenderemos un fuego en la playa esta noche."}
  ]},
  {cat:"Naturaleza", q:"earth", s:"tierra", col:"#4ade80", note:"'Earth' con mayúscula (Earth) es el planeta Tierra.", img:"hands holding soil earth", ex:[
    {t:"Pasado",   q:"She held the dark earth in her hands.", s:"Ella sostuvo la tierra oscura entre sus manos."},
    {t:"Presente", q:"The earth is alive under our feet.", s:"La tierra está viva bajo nuestros pies."},
    {t:"Futuro",   q:"We will plant seeds in the earth next spring.", s:"Plantaremos semillas en la tierra la próxima primavera."}
  ]},
  {cat:"Naturaleza", q:"wind", s:"viento", col:"#4ade80", img:"wind through trees leaves", ex:[
    {t:"Pasado",   q:"The wind carried the leaves far away.", s:"El viento llevó las hojas muy lejos."},
    {t:"Presente", q:"The wind blows softly through the trees.", s:"El viento sopla suavemente entre los árboles."},
    {t:"Futuro",   q:"The wind will bring cold air from the north.", s:"El viento traerá aire frío del norte."}
  ]},
  {cat:"Naturaleza", q:"tree", s:"árbol", col:"#4ade80", img:"tall tree forest nature", ex:[
    {t:"Pasado",   q:"The old tree stood there for a hundred years.", s:"El viejo árbol estuvo allí por cien años."},
    {t:"Presente", q:"This tree gives shade in the summer heat.", s:"Este árbol da sombra en el calor del verano."},
    {t:"Futuro",   q:"We will plant a tree for every child born.", s:"Plantaremos un árbol por cada niño que nazca."}
  ]},
  {cat:"Naturaleza", q:"flower", s:"flor", col:"#4ade80", img:"flower bloom nature", ex:[
    {t:"Pasado",   q:"The flower bloomed after the rain.", s:"La flor floreció después de la lluvia."},
    {t:"Presente", q:"Every flower has its own scent.", s:"Cada flor tiene su propio aroma."},
    {t:"Futuro",   q:"The flower will open with the morning sun.", s:"La flor se abrirá con el sol de la mañana."}
  ]},
  {cat:"Naturaleza", q:"river", s:"río", col:"#4ade80", img:"river flowing nature", ex:[
    {t:"Pasado",   q:"She ran to the river as a child.", s:"Ella corría al río cuando era niña."},
    {t:"Presente", q:"The river flows quietly through the valley.", s:"El río fluye silenciosamente por el valle."},
    {t:"Futuro",   q:"We will swim in the river this weekend.", s:"Nadaremos en el río este fin de semana."}
  ]},
  {cat:"Verbos", q:"walk", s:"caminar", col:"#a78bfa", img:"person walking path nature", ex:[
    {t:"Pasado",   q:"They walked along the river at sunset.", s:"Ellos caminaron junto al río al atardecer."},
    {t:"Presente", q:"She walks to work every morning.", s:"Ella camina al trabajo cada mañana."},
    {t:"Futuro",   q:"We will walk through the forest together.", s:"Caminaremos juntos por el bosque."}
  ]},
  {cat:"Verbos", q:"run", s:"correr", col:"#a78bfa", img:"person running outdoors", ex:[
    {t:"Pasado",   q:"She ran to the river before sunrise.", s:"Ella corrió al río antes del amanecer."},
    {t:"Presente", q:"I run every morning to clear my mind.", s:"Corro cada mañana para despejar la mente."},
    {t:"Futuro",   q:"We will run together in the mountains.", s:"Correremos juntos en las montañas."}
  ]},
  {cat:"Verbos", q:"eat", s:"comer", col:"#a78bfa", img:"person eating food", ex:[
    {t:"Pasado",   q:"We ate together around the fire.", s:"Comimos juntos alrededor del fuego."},
    {t:"Presente", q:"She eats fresh fruit every morning.", s:"Ella come fruta fresca cada mañana."},
    {t:"Futuro",   q:"They will eat dinner under the stars.", s:"Ellos cenarán bajo las estrellas."}
  ]},
  {cat:"Verbos", q:"drink", s:"beber / tomar", col:"#a78bfa", img:"person drinking water", ex:[
    {t:"Pasado",   q:"He drank water from the mountain spring.", s:"Él bebió agua del manantial de la montaña."},
    {t:"Presente", q:"I drink tea every evening.", s:"Bebo té cada noche."},
    {t:"Futuro",   q:"We will drink from the river after the hike.", s:"Beberemos del río después de la caminata."}
  ]},
  {cat:"Verbos", q:"sleep", s:"dormir", col:"#a78bfa", img:"person sleeping peaceful", ex:[
    {t:"Pasado",   q:"The child slept peacefully all night.", s:"El niño durmió tranquilamente toda la noche."},
    {t:"Presente", q:"She sleeps under a sky full of stars.", s:"Ella duerme bajo un cielo lleno de estrellas."},
    {t:"Futuro",   q:"Tonight we will sleep by the fire.", s:"Esta noche dormiremos junto al fuego."}
  ]},
  {cat:"Verbos", q:"work", s:"trabajar", col:"#a78bfa", img:"person working hands", ex:[
    {t:"Pasado",   q:"He worked in the fields since dawn.", s:"Él trabajó en los campos desde el amanecer."},
    {t:"Presente", q:"She works with her hands and her heart.", s:"Ella trabaja con sus manos y su corazón."},
    {t:"Futuro",   q:"They will work together on the project.", s:"Ellos trabajarán juntos en el proyecto."}
  ]},
  {cat:"Verbos", q:"study", s:"estudiar", col:"#a78bfa", img:"person reading studying", ex:[
    {t:"Pasado",   q:"She studied by candlelight every night.", s:"Ella estudiaba con luz de vela cada noche."},
    {t:"Presente", q:"He studies two languages at the same time.", s:"Él estudia dos idiomas al mismo tiempo."},
    {t:"Futuro",   q:"I will study Quechua this year.", s:"Estudiaré quechua este año."}
  ]},
  {cat:"Verbos", q:"speak", s:"hablar", col:"#a78bfa", note:"'Speak' es más formal que 'talk'. 'Speak English' (hablar inglés), 'talk to someone' (hablar con alguien).", img:"two people talking conversation", ex:[
    {t:"Pasado",   q:"She spoke with courage in front of everyone.", s:"Ella habló con valentía frente a todos."},
    {t:"Presente", q:"He speaks three languages fluently.", s:"Él habla tres idiomas con fluidez."},
    {t:"Futuro",   q:"She will speak at the event next week.", s:"Ella hablará en el evento la próxima semana."}
  ]},
  {cat:"Verbos", q:"listen", s:"escuchar", col:"#a78bfa", note:"'Listen' requiere atención activa. 'Hear' es escuchar pasivamente (sin esfuerzo).", img:"person listening eyes closed", ex:[
    {t:"Pasado",   q:"He listened to the river for a long time.", s:"Él escuchó el río durante mucho tiempo."},
    {t:"Presente", q:"She listens to music while she walks.", s:"Ella escucha música mientras camina."},
    {t:"Futuro",   q:"We will listen to the elders speak.", s:"Escucharemos hablar a los mayores."}
  ]},
  {cat:"Verbos", q:"read", s:"leer", col:"#a78bfa", img:"person reading book", ex:[
    {t:"Pasado",   q:"She read the whole book in one day.", s:"Ella leyó el libro entero en un día."},
    {t:"Presente", q:"He reads poems to his daughter at night.", s:"Él lee poemas a su hija por las noches."},
    {t:"Futuro",   q:"I will read that story to you tomorrow.", s:"Te leeré esa historia mañana."}
  ]},
  {cat:"Verbos", q:"write", s:"escribir", col:"#a78bfa", img:"person writing journal", ex:[
    {t:"Pasado",   q:"She wrote her feelings in a small notebook.", s:"Ella escribió sus sentimientos en un pequeño cuaderno."},
    {t:"Presente", q:"He writes songs about the mountains.", s:"Él escribe canciones sobre las montañas."},
    {t:"Futuro",   q:"I will write you a letter from the road.", s:"Te escribiré una carta desde el camino."}
  ]},
  {cat:"Verbos", q:"love", s:"amar / querer", col:"#a78bfa", img:"heart love compassion", ex:[
    {t:"Pasado",   q:"She loved this place from the first moment.", s:"Ella amó este lugar desde el primer momento."},
    {t:"Presente", q:"I love the sound of rain on the roof.", s:"Amo el sonido de la lluvia en el techo."},
    {t:"Futuro",   q:"They will love each other forever.", s:"Ellos se amarán para siempre."}
  ]},
  {cat:"Verbos", q:"help", s:"ayudar", col:"#a78bfa", img:"helping hands community", ex:[
    {t:"Pasado",   q:"She helped her neighbor carry the bags.", s:"Ella ayudó a su vecina a llevar las bolsas."},
    {t:"Presente", q:"He always helps when someone needs it.", s:"Él siempre ayuda cuando alguien lo necesita."},
    {t:"Futuro",   q:"We will help build the community garden.", s:"Ayudaremos a construir el jardín comunitario."}
  ]},
  {cat:"Verbos", q:"give", s:"dar", col:"#a78bfa", img:"hands giving gift", ex:[
    {t:"Pasado",   q:"She gave flowers to everyone she met.", s:"Ella dio flores a todos los que encontró."},
    {t:"Presente", q:"He gives thanks before every meal.", s:"Él da gracias antes de cada comida."},
    {t:"Futuro",   q:"We will give what we can to those in need.", s:"Daremos lo que podamos a quienes lo necesiten."}
  ]},
  {cat:"Verbos", q:"take", s:"tomar / llevar", col:"#a78bfa", img:"hands receiving holding", ex:[
    {t:"Pasado",   q:"She took a deep breath before speaking.", s:"Ella tomó una respiración profunda antes de hablar."},
    {t:"Presente", q:"He takes a walk every evening.", s:"Él da un paseo cada tarde."},
    {t:"Futuro",   q:"She will take the first step tomorrow.", s:"Ella dará el primer paso mañana."}
  ]},
  {cat:"Números", q:"one", s:"uno", col:"#2dd4bf", ex:[
    {t:"Pasado",   q:"There was only one path through the forest.", s:"Solo había un camino a través del bosque."},
    {t:"Presente", q:"I have one dream that guides me.", s:"Tengo un sueño que me guía."},
    {t:"Futuro",   q:"One day everything will be clear.", s:"Un día todo estará claro."}
  ]},
  {cat:"Números", q:"two", s:"dos", col:"#2dd4bf", ex:[
    {t:"Pasado",   q:"Two stars shone brighter than the rest.", s:"Dos estrellas brillaron más que las demás."},
    {t:"Presente", q:"There are two rivers near this village.", s:"Hay dos ríos cerca de este pueblo."},
    {t:"Futuro",   q:"We will plant two trees this spring.", s:"Plantaremos dos árboles esta primavera."}
  ]},
  {cat:"Números", q:"three", s:"tres", col:"#2dd4bf", ex:[
    {t:"Pasado",   q:"Three generations lived in that house.", s:"Tres generaciones vivieron en esa casa."},
    {t:"Presente", q:"She wakes up at three in the morning.", s:"Ella se despierta a las tres de la mañana."},
    {t:"Futuro",   q:"He will return in three days.", s:"Él regresará en tres días."}
  ]},
  {cat:"Números", q:"four", s:"cuatro", col:"#2dd4bf", ex:[
    {t:"Pasado",   q:"Four seasons passed without rain.", s:"Cuatro estaciones pasaron sin lluvia."},
    {t:"Presente", q:"The table has four candles burning.", s:"La mesa tiene cuatro velas encendidas."},
    {t:"Futuro",   q:"We will meet in four hours.", s:"Nos reuniremos en cuatro horas."}
  ]},
  {cat:"Números", q:"five", s:"cinco", col:"#2dd4bf", ex:[
    {t:"Pasado",   q:"Five birds landed on the branch.", s:"Cinco pájaros se posaron en la rama."},
    {t:"Presente", q:"She plays five songs every evening.", s:"Ella toca cinco canciones cada noche."},
    {t:"Futuro",   q:"He will arrive in five minutes.", s:"Él llegará en cinco minutos."}
  ]},
  {cat:"Números", q:"six", s:"seis", col:"#2dd4bf", ex:[
    {t:"Pasado",   q:"Six children played by the river.", s:"Seis niños jugaron junto al río."},
    {t:"Presente", q:"The market opens at six in the morning.", s:"El mercado abre a las seis de la mañana."},
    {t:"Futuro",   q:"I will call you at six tomorrow.", s:"Te llamaré a las seis mañana."}
  ]},
  {cat:"Números", q:"seven", s:"siete", col:"#2dd4bf", ex:[
    {t:"Pasado",   q:"Seven days passed before the rain came.", s:"Pasaron siete días antes de que llegara la lluvia."},
    {t:"Presente", q:"There are seven colors in the rainbow.", s:"Hay siete colores en el arco iris."},
    {t:"Futuro",   q:"She will be seven years old next week.", s:"Ella cumplirá siete años la próxima semana."}
  ]},
  {cat:"Números", q:"eight", s:"ocho", col:"#2dd4bf", ex:[
    {t:"Pasado",   q:"Eight families lived in the valley.", s:"Ocho familias vivían en el valle."},
    {t:"Presente", q:"The ceremony lasts eight hours.", s:"La ceremonia dura ocho horas."},
    {t:"Futuro",   q:"We will gather at eight tonight.", s:"Nos reuniremos a las ocho esta noche."}
  ]},
  {cat:"Números", q:"nine", s:"nueve", col:"#2dd4bf", ex:[
    {t:"Pasado",   q:"Nine moons passed since she left.", s:"Pasaron nueve lunas desde que ella se fue."},
    {t:"Presente", q:"The baby is nine months old.", s:"El bebé tiene nueve meses."},
    {t:"Futuro",   q:"I will finish in nine more days.", s:"Terminaré en nueve días más."}
  ]},
  {cat:"Números", q:"ten", s:"diez", col:"#2dd4bf", ex:[
    {t:"Pasado",   q:"Ten years ago she found her path.", s:"Hace diez años ella encontró su camino."},
    {t:"Presente", q:"He counts to ten before he answers.", s:"Él cuenta hasta diez antes de responder."},
    {t:"Futuro",   q:"In ten years this forest will be full again.", s:"En diez años este bosque volverá a estar lleno."}
  ]},
  {cat:"Colores", q:"red", s:"rojo", col:"#fb7185", img:"red color texture", ex:[
    {t:"Pasado",   q:"The sky turned red at sunset.", s:"El cielo se puso rojo al atardecer."},
    {t:"Presente", q:"She wears a red scarf every winter.", s:"Ella usa una bufanda roja cada invierno."},
    {t:"Futuro",   q:"The roses will be red by next week.", s:"Las rosas estarán rojas para la próxima semana."}
  ]},
  {cat:"Colores", q:"blue", s:"azul", col:"#fb7185", img:"blue sky ocean", ex:[
    {t:"Pasado",   q:"The sky was blue all day long.", s:"El cielo estuvo azul todo el día."},
    {t:"Presente", q:"Her eyes are blue like the ocean.", s:"Sus ojos son azules como el océano."},
    {t:"Futuro",   q:"The water will be blue in summer.", s:"El agua será azul en verano."}
  ]},
  {cat:"Colores", q:"green", s:"verde", col:"#fb7185", img:"green nature leaves", ex:[
    {t:"Pasado",   q:"The hills were green after the rain.", s:"Las colinas estuvieron verdes después de la lluvia."},
    {t:"Presente", q:"The leaves are green and full of life.", s:"Las hojas están verdes y llenas de vida."},
    {t:"Futuro",   q:"The fields will be green again in spring.", s:"Los campos volverán a estar verdes en primavera."}
  ]},
  {cat:"Colores", q:"yellow", s:"amarillo", col:"#fb7185", img:"yellow sunflower", ex:[
    {t:"Pasado",   q:"The sunflowers were yellow and tall.", s:"Los girasoles estaban amarillos y altos."},
    {t:"Presente", q:"The morning light is soft and yellow.", s:"La luz de la mañana es suave y amarilla."},
    {t:"Futuro",   q:"The fields will be yellow with flowers.", s:"Los campos estarán amarillos de flores."}
  ]},
  {cat:"Colores", q:"white", s:"blanco", col:"#fb7185", img:"white snow pure", ex:[
    {t:"Pasado",   q:"The mountain was white with fresh snow.", s:"La montaña estaba blanca de nieve fresca."},
    {t:"Presente", q:"The clouds are white and soft today.", s:"Las nubes están blancas y suaves hoy."},
    {t:"Futuro",   q:"The page will be white until she writes.", s:"La página estará blanca hasta que ella escriba."}
  ]},
  {cat:"Colores", q:"black", s:"negro", col:"#fb7185", img:"dark night black texture", ex:[
    {t:"Pasado",   q:"The sky was black and full of stars.", s:"El cielo estaba negro y lleno de estrellas."},
    {t:"Presente", q:"She wears black when she plays music.", s:"Ella viste de negro cuando toca música."},
    {t:"Futuro",   q:"The night will be black without the moon.", s:"La noche estará negra sin la luna."}
  ]},
  {cat:"Colores", q:"orange", s:"naranja", col:"#fb7185", note:"'Orange' es tanto el color naranja como la fruta naranja.", img:"orange fruit color", ex:[
    {t:"Pasado",   q:"The leaves turned orange in autumn.", s:"Las hojas se pusieron naranjas en otoño."},
    {t:"Presente", q:"The sunset paints the sky orange.", s:"El atardecer pinta el cielo de naranja."},
    {t:"Futuro",   q:"The trees will be orange again this fall.", s:"Los árboles volverán a ser naranjas este otoño."}
  ]},
  {cat:"Colores", q:"purple", s:"morado / violeta", col:"#fb7185", img:"purple lavender flowers", ex:[
    {t:"Pasado",   q:"The lavender fields were purple and fragrant.", s:"Los campos de lavanda estaban morados y fragantes."},
    {t:"Presente", q:"Purple flowers grow along the path.", s:"Flores moradas crecen a lo largo del camino."},
    {t:"Futuro",   q:"The sky will turn purple before the storm.", s:"El cielo se pondrá morado antes de la tormenta."}
  ]},
  {cat:"Comida", q:"bread", s:"pan", col:"#f59e0b", img:"fresh bread bakery", ex:[
    {t:"Pasado",   q:"She baked bread every Sunday morning.", s:"Ella horneaba pan cada domingo por la mañana."},
    {t:"Presente", q:"Fresh bread fills the house with warmth.", s:"El pan fresco llena la casa de calidez."},
    {t:"Futuro",   q:"We will share bread and stories tonight.", s:"Compartiremos pan e historias esta noche."}
  ]},
  {cat:"Comida", q:"rice", s:"arroz", col:"#f59e0b", img:"rice bowl food", ex:[
    {t:"Pasado",   q:"She cooked rice with herbs from the garden.", s:"Ella cocinó arroz con hierbas del jardín."},
    {t:"Presente", q:"Rice grows in the fields near the river.", s:"El arroz crece en los campos cerca del río."},
    {t:"Futuro",   q:"We will harvest the rice next month.", s:"Cosecharemos el arroz el próximo mes."}
  ]},
  {cat:"Comida", q:"water", s:"agua", col:"#f59e0b", img:"glass water clear", ex:[
    {t:"Pasado",   q:"She drank cold water from the well.", s:"Ella bebió agua fría del pozo."},
    {t:"Presente", q:"Clean water is a gift we must protect.", s:"El agua limpia es un regalo que debemos proteger."},
    {t:"Futuro",   q:"She will bring water for the journey.", s:"Ella traerá agua para el viaje."}
  ]},
  {cat:"Comida", q:"milk", s:"leche", col:"#f59e0b", img:"milk glass white", ex:[
    {t:"Pasado",   q:"She grew up drinking warm milk at night.", s:"Ella creció bebiendo leche tibia por las noches."},
    {t:"Presente", q:"Fresh milk comes from the farm every morning.", s:"La leche fresca llega de la granja cada mañana."},
    {t:"Futuro",   q:"She will warm the milk for the baby.", s:"Ella calentará la leche para el bebé."}
  ]},
  {cat:"Comida", q:"egg", s:"huevo", col:"#f59e0b", img:"eggs food kitchen", ex:[
    {t:"Pasado",   q:"She found a warm egg in the nest.", s:"Ella encontró un huevo tibio en el nido."},
    {t:"Presente", q:"He cooks an egg every morning for breakfast.", s:"Él cocina un huevo cada mañana para el desayuno."},
    {t:"Futuro",   q:"She will boil an egg for the children.", s:"Ella hervirá un huevo para los niños."}
  ]},
  {cat:"Comida", q:"apple", s:"manzana", col:"#f59e0b", img:"red apple fruit", ex:[
    {t:"Pasado",   q:"She picked an apple from the old tree.", s:"Ella recogió una manzana del árbol viejo."},
    {t:"Presente", q:"An apple a day keeps the doctor away.", s:"Una manzana al día mantiene al médico lejos."},
    {t:"Futuro",   q:"We will bring apples from the orchard.", s:"Traeremos manzanas del huerto."}
  ]},
  {cat:"Comida", q:"meat", s:"carne", col:"#f59e0b", img:"meat food cooking", ex:[
    {t:"Pasado",   q:"They cooked meat over an open fire.", s:"Ellos cocinaron carne sobre fuego abierto."},
    {t:"Presente", q:"She buys fresh meat at the local market.", s:"Ella compra carne fresca en el mercado local."},
    {t:"Futuro",   q:"We will prepare meat for the celebration.", s:"Prepararemos carne para la celebración."}
  ]},
  {cat:"Comida", q:"fish", s:"pescado / pez", col:"#f59e0b", note:"'Fish' como comida (pescado) es incontable. 'A fish' (un pez) es el animal. El plural de peces es también 'fish' normalmente.", img:"fresh fish ocean", ex:[
    {t:"Pasado",   q:"They grilled fish by the river at night.", s:"Ellos asaron pescado junto al río por la noche."},
    {t:"Presente", q:"Fresh fish is the best food by the sea.", s:"El pescado fresco es la mejor comida junto al mar."},
    {t:"Futuro",   q:"He will catch fish early in the morning.", s:"Él pescará temprano por la mañana."}
  ]},
  {cat:"Comida", q:"soup", s:"sopa", col:"#f59e0b", img:"soup bowl warm", ex:[
    {t:"Pasado",   q:"She made soup from roots and herbs.", s:"Ella hizo sopa con raíces y hierbas."},
    {t:"Presente", q:"Warm soup heals the body and soul.", s:"La sopa caliente sana el cuerpo y el alma."},
    {t:"Futuro",   q:"I will make soup when you arrive.", s:"Haré sopa cuando llegues."}
  ]},
  {cat:"Comida", q:"salad", s:"ensalada", col:"#f59e0b", img:"fresh salad vegetables", ex:[
    {t:"Pasado",   q:"She made a salad with vegetables from the garden.", s:"Ella hizo una ensalada con vegetales del jardín."},
    {t:"Presente", q:"He eats a salad for lunch every day.", s:"Él come una ensalada en el almuerzo todos los días."},
    {t:"Futuro",   q:"We will prepare a salad for the picnic.", s:"Prepararemos una ensalada para el picnic."}
  ]},
  {cat:"Lugares", q:"house", s:"casa", col:"#60a5fa", img:"cozy home house", ex:[
    {t:"Pasado",   q:"She grew up in a small house by the river.", s:"Ella creció en una pequeña casa junto al río."},
    {t:"Presente", q:"Their house is full of music and laughter.", s:"Su casa está llena de música y risas."},
    {t:"Futuro",   q:"They will build a house on the hill.", s:"Ellos construirán una casa en la colina."}
  ]},
  {cat:"Lugares", q:"school", s:"escuela", col:"#60a5fa", img:"school building education", ex:[
    {t:"Pasado",   q:"She walked to school barefoot as a child.", s:"Ella caminaba a la escuela descalza de niña."},
    {t:"Presente", q:"The school opens early in the morning.", s:"La escuela abre temprano por la mañana."},
    {t:"Futuro",   q:"He will teach at the school next year.", s:"Él enseñará en la escuela el próximo año."}
  ]},
  {cat:"Lugares", q:"market", s:"mercado", col:"#60a5fa", img:"market fruits vegetables", ex:[
    {t:"Pasado",   q:"She bought spices at the old market.", s:"Ella compró especias en el viejo mercado."},
    {t:"Presente", q:"The market fills with voices every Sunday.", s:"El mercado se llena de voces cada domingo."},
    {t:"Futuro",   q:"We will meet at the market tomorrow morning.", s:"Nos encontraremos en el mercado mañana por la mañana."}
  ]},
  {cat:"Lugares", q:"hospital", s:"hospital", col:"#60a5fa", img:"hospital building health", ex:[
    {t:"Pasado",   q:"He was born in a small hospital in the valley.", s:"Él nació en un pequeño hospital en el valle."},
    {t:"Presente", q:"The hospital serves the whole community.", s:"El hospital sirve a toda la comunidad."},
    {t:"Futuro",   q:"She will work at the hospital as a doctor.", s:"Ella trabajará en el hospital como doctora."}
  ]},
  {cat:"Lugares", q:"park", s:"parque", col:"#60a5fa", img:"green park nature", ex:[
    {t:"Pasado",   q:"They met for the first time in the park.", s:"Ellos se conocieron por primera vez en el parque."},
    {t:"Presente", q:"The children play in the park every afternoon.", s:"Los niños juegan en el parque cada tarde."},
    {t:"Futuro",   q:"We will have a picnic in the park on Sunday.", s:"Tendremos un picnic en el parque el domingo."}
  ]},
  {cat:"Lugares", q:"street", s:"calle", col:"#60a5fa", img:"street city walk", ex:[
    {t:"Pasado",   q:"Music echoed through the street at night.", s:"La música resonó por la calle de noche."},
    {t:"Presente", q:"The street is quiet in the early morning.", s:"La calle está tranquila en la madrugada."},
    {t:"Futuro",   q:"They will dance in the street on the festival day.", s:"Bailarán en la calle el día del festival."}
  ]},
  {cat:"Lugares", q:"city", s:"ciudad", col:"#60a5fa", img:"city skyline urban", ex:[
    {t:"Pasado",   q:"She moved to the city to study.", s:"Ella se mudó a la ciudad para estudiar."},
    {t:"Presente", q:"The city never sleeps at night.", s:"La ciudad nunca duerme por la noche."},
    {t:"Futuro",   q:"He will return to the city next spring.", s:"Él regresará a la ciudad la próxima primavera."}
  ]},
  {cat:"Lugares", q:"country", s:"país / campo", col:"#60a5fa", note:"'Country' tiene dos significados: país (my country = mi país) y zona rural (the country = el campo).", img:"countryside rural landscape", ex:[
    {t:"Pasado",   q:"She left her country many years ago.", s:"Ella dejó su país hace muchos años."},
    {t:"Presente", q:"He loves living in the country, away from the noise.", s:"A él le encanta vivir en el campo, lejos del ruido."},
    {t:"Futuro",   q:"She will return to her country one day.", s:"Ella regresará a su país algún día."}
  ]},
  {cat:"Lugares", q:"beach", s:"playa", col:"#60a5fa", img:"beach ocean waves", ex:[
    {t:"Pasado",   q:"She walked barefoot on the beach at dawn.", s:"Ella caminó descalza por la playa al amanecer."},
    {t:"Presente", q:"The beach is calm and empty in the morning.", s:"La playa está tranquila y vacía por la mañana."},
    {t:"Futuro",   q:"They will watch the sunset at the beach.", s:"Ellos verán el atardecer en la playa."}
  ]},
  {cat:"Lugares", q:"mountain", s:"montaña", col:"#60a5fa", img:"mountain landscape summit", ex:[
    {t:"Pasado",   q:"Her ancestors lived near the mountain.", s:"Sus ancestros vivían cerca de la montaña."},
    {t:"Presente", q:"The mountain is covered in snow today.", s:"La montaña está cubierta de nieve hoy."},
    {t:"Futuro",   q:"We will climb the mountain at sunrise.", s:"Escalaremos la montaña al amanecer."}
  ]},
  {cat:"Tiempo", q:"today", s:"hoy", col:"#818cf8", img:"present moment sunrise", ex:[
    {t:"Pasado",   q:"Yesterday felt long, but today came quickly.", s:"Ayer se sintió largo, pero hoy llegó rápido."},
    {t:"Presente", q:"Today is the perfect day to begin.", s:"Hoy es el día perfecto para empezar."},
    {t:"Futuro",   q:"What you do today will matter tomorrow.", s:"Lo que hagas hoy importará mañana."}
  ]},
  {cat:"Tiempo", q:"tomorrow", s:"mañana (día siguiente)", col:"#818cf8", note:"'Tomorrow' es mañana (el día siguiente). 'Morning' es la mañana del día (momento del día).", img:"sunrise new day", ex:[
    {t:"Pasado",   q:"She promised that tomorrow she would go.", s:"Ella prometió que mañana iría."},
    {t:"Presente", q:"Tomorrow is a new chance to start again.", s:"Mañana es una nueva oportunidad para empezar de nuevo."},
    {t:"Futuro",   q:"Tomorrow will bring new light and new hope.", s:"Mañana traerá nueva luz y nueva esperanza."}
  ]},
  {cat:"Tiempo", q:"yesterday", s:"ayer", col:"#818cf8", img:"sunset past memory", ex:[
    {t:"Pasado",   q:"Yesterday she said goodbye at the door.", s:"Ayer ella se despidió en la puerta."},
    {t:"Presente", q:"Yesterday feels like a dream now.", s:"Ayer parece un sueño ahora."},
    {t:"Futuro",   q:"Tomorrow she will remember what happened yesterday.", s:"Mañana ella recordará lo que pasó ayer."}
  ]},
  {cat:"Tiempo", q:"morning", s:"mañana (parte del día)", col:"#818cf8", img:"morning light golden hour", ex:[
    {t:"Pasado",   q:"That morning the air smelled like flowers.", s:"Esa mañana el aire olía a flores."},
    {t:"Presente", q:"Every morning begins with light and silence.", s:"Cada mañana comienza con luz y silencio."},
    {t:"Futuro",   q:"Tomorrow morning we will leave before sunrise.", s:"Mañana por la mañana partiremos antes del amanecer."}
  ]},
  {cat:"Tiempo", q:"afternoon", s:"tarde", col:"#818cf8", img:"afternoon light afternoon", ex:[
    {t:"Pasado",   q:"That afternoon they sat under the tree.", s:"Esa tarde se sentaron bajo el árbol."},
    {t:"Presente", q:"In the afternoon the light turns golden.", s:"Por la tarde la luz se vuelve dorada."},
    {t:"Futuro",   q:"We will rest in the afternoon after the hike.", s:"Descansaremos por la tarde después de la caminata."}
  ]},
  {cat:"Tiempo", q:"night", s:"noche", col:"#818cf8", img:"night sky stars dark", ex:[
    {t:"Pasado",   q:"That night she stayed awake watching the stars.", s:"Esa noche ella se quedó despierta mirando las estrellas."},
    {t:"Presente", q:"At night the forest speaks a different language.", s:"De noche el bosque habla un idioma diferente."},
    {t:"Futuro",   q:"Tonight will be a night full of music.", s:"Esta noche será una noche llena de música."}
  ]},
  {cat:"Tiempo", q:"week", s:"semana", col:"#818cf8", img:"calendar planning week", ex:[
    {t:"Pasado",   q:"Last week they traveled to the mountains.", s:"La semana pasada viajaron a las montañas."},
    {t:"Presente", q:"This week she practices every single day.", s:"Esta semana ella practica cada día."},
    {t:"Futuro",   q:"Next week the festival will begin.", s:"La próxima semana comenzará el festival."}
  ]},
  {cat:"Expresiones", q:"hello", s:"hola", col:"#c084fc", img:"greeting wave smile", ex:[
    {t:"Pasado",   q:"She said hello with a warm smile.", s:"Ella dijo hola con una sonrisa cálida."},
    {t:"Presente", q:"Hello is the first word of every new friendship.", s:"Hola es la primera palabra de cada nueva amistad."},
    {t:"Futuro",   q:"One day she will say hello to the whole world.", s:"Un día ella le dirá hola al mundo entero."}
  ]},
  {cat:"Expresiones", q:"goodbye", s:"adiós", col:"#c084fc", img:"farewell wave goodbye", ex:[
    {t:"Pasado",   q:"She said goodbye and walked into the rain.", s:"Ella dijo adiós y se adentró en la lluvia."},
    {t:"Presente", q:"Goodbye is not forever — only see you later.", s:"Adiós no es para siempre, solo hasta luego."},
    {t:"Futuro",   q:"The hardest goodbye will make the reunion sweeter.", s:"El adiós más difícil hará el reencuentro más dulce."}
  ]},
  {cat:"Expresiones", q:"please", s:"por favor", col:"#c084fc", img:"hands please request", ex:[
    {t:"Pasado",   q:"She said please and the door opened.", s:"Ella dijo por favor y la puerta se abrió."},
    {t:"Presente", q:"Please sit down and make yourself at home.", s:"Por favor siéntate y ponte cómodo."},
    {t:"Futuro",   q:"Please remember to bring the flowers.", s:"Por favor recuerda traer las flores."}
  ]},
  {cat:"Expresiones", q:"thank you", s:"gracias", col:"#c084fc", img:"gratitude thank you hands", ex:[
    {t:"Pasado",   q:"She whispered thank you before she left.", s:"Ella susurró gracias antes de irse."},
    {t:"Presente", q:"Thank you is the shortest prayer.", s:"Gracias es la oración más corta."},
    {t:"Futuro",   q:"I will always say thank you for this gift.", s:"Siempre diré gracias por este regalo."}
  ]},
  {cat:"Expresiones", q:"sorry", s:"lo siento / perdón", col:"#c084fc", note:"'Sorry' es una disculpa. No confundir con 'embarrassed' que significa avergonzado.", img:"sorry apology compassion", ex:[
    {t:"Pasado",   q:"He said sorry and she forgave him.", s:"Él dijo lo siento y ella lo perdonó."},
    {t:"Presente", q:"I am sorry for the pain I caused.", s:"Lo siento por el dolor que causé."},
    {t:"Futuro",   q:"She will say sorry when she finds the courage.", s:"Ella dirá lo siento cuando encuentre el valor."}
  ]},
  {cat:"Expresiones", q:"excuse me", s:"disculpe / permiso", col:"#c084fc", img:"polite gesture person", ex:[
    {t:"Pasado",   q:"She said excuse me and stepped aside.", s:"Ella dijo disculpe y se hizo a un lado."},
    {t:"Presente", q:"Excuse me is the polite way to start a question.", s:"Disculpe es la manera educada de empezar una pregunta."},
    {t:"Futuro",   q:"He will say excuse me before he interrupts.", s:"Él dirá disculpe antes de interrumpir."}
  ]},
  {cat:"Expresiones", q:"how much?", s:"¿cuánto cuesta?", col:"#c084fc", img:"market shopping price", ex:[
    {t:"Pasado",   q:"She asked how much before she bought anything.", s:"Ella preguntó cuánto cuesta antes de comprar nada."},
    {t:"Presente", q:"How much does a dream cost?", s:"¿Cuánto cuesta un sueño?"},
    {t:"Futuro",   q:"She will ask how much before she decides.", s:"Ella preguntará cuánto cuesta antes de decidir."}
  ]},
  {cat:"Expresiones", q:"I don't understand", s:"no entiendo", col:"#c084fc", img:"confused thinking person", ex:[
    {t:"Pasado",   q:"She said I don't understand and asked again.", s:"Ella dijo no entiendo y volvió a preguntar."},
    {t:"Presente", q:"I don't understand, but I want to learn.", s:"No entiendo, pero quiero aprender."},
    {t:"Futuro",   q:"Someday she will understand what she could not before.", s:"Algún día ella entenderá lo que antes no podía."}
  ]},
  {cat:"Expresiones", q:"can you help me?", s:"¿puede ayudarme?", col:"#c084fc", img:"helping hand support", ex:[
    {t:"Pasado",   q:"She asked can you help me and a stranger stopped.", s:"Ella preguntó ¿puede ayudarme? y un extraño se detuvo."},
    {t:"Presente", q:"Can you help me find the right path?", s:"¿Puede ayudarme a encontrar el camino correcto?"},
    {t:"Futuro",   q:"When she is lost, she will ask can you help me.", s:"Cuando esté perdida, preguntará ¿puede ayudarme?"}
  ]},
  {cat:"Expresiones", q:"I love you", s:"te quiero / te amo", col:"#c084fc", img:"love heart couple", ex:[
    {t:"Pasado",   q:"She whispered I love you under the stars.", s:"Ella susurró te amo bajo las estrellas."},
    {t:"Presente", q:"I love you more than words can say.", s:"Te amo más de lo que las palabras pueden decir."},
    {t:"Futuro",   q:"I will love you in every language I learn.", s:"Te amaré en cada idioma que aprenda."}
  ]}
];
