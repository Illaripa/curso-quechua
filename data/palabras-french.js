const PALABRAS_FR = [
  {cat:"Familia", q:"la mère", s:"la madre", col:"#fed7aa", note:"También se usa 'maman' (mamá) en lenguaje familiar.", ex:[
    {t:"Pasado",   q:"Sa mère l'a tenu dans ses bras toute la nuit.", s:"Su madre la tuvo en brazos toda la noche."},
    {t:"Presente", q:"Ma mère chante en cuisinant.", s:"Mi madre canta mientras cocina."},
    {t:"Futuro",   q:"Elle deviendra mère un jour.", s:"Ella será madre algún día."}
  ]},
  {cat:"Familia", q:"le père", s:"el padre", col:"#fed7aa", note:"En lenguaje familiar: 'papa' (papá).", ex:[
    {t:"Pasado",   q:"Son père lui a appris à pêcher.", s:"Su padre le enseñó a pescar."},
    {t:"Presente", q:"Mon père travaille loin de la maison.", s:"Mi padre trabaja lejos de casa."},
    {t:"Futuro",   q:"Il sera un bon père.", s:"Él será un buen padre."}
  ]},
  {cat:"Familia", q:"la sœur", s:"la hermana", col:"#fed7aa", note:"La 'œ' se pronuncia como una 'e' con labios redondeados.", ex:[
    {t:"Pasado",   q:"Ma sœur a chanté lors de la fête.", s:"Mi hermana cantó durante la fiesta."},
    {t:"Presente", q:"Ma sœur vit dans une autre ville.", s:"Mi hermana vive en otra ciudad."},
    {t:"Futuro",   q:"Ma sœur viendra nous rendre visite cet été.", s:"Mi hermana vendrá a visitarnos este verano."}
  ]},
  {cat:"Familia", q:"le frère", s:"el hermano", col:"#fed7aa", ex:[
    {t:"Pasado",   q:"Mon frère m'a aidé à déménager l'année dernière.", s:"Mi hermano me ayudó a mudarme el año pasado."},
    {t:"Presente", q:"Mon frère joue de la guitare chaque soir.", s:"Mi hermano toca la guitarra cada noche."},
    {t:"Futuro",   q:"Son frère finira ses études cette année.", s:"Su hermano terminará sus estudios este año."}
  ]},
  {cat:"Familia", q:"la grand-mère", s:"la abuela", col:"#fed7aa", note:"'Grand-mère' lleva guion. Plural: les grands-mères.", ex:[
    {t:"Pasado",   q:"Ma grand-mère faisait du pain chaque matin.", s:"Mi abuela hacía pan cada mañana."},
    {t:"Presente", q:"Ma grand-mère raconte les meilleures histoires.", s:"Mi abuela cuenta las mejores historias."},
    {t:"Futuro",   q:"Nous rendrons visite à notre grand-mère cet été.", s:"Visitaremos a nuestra abuela este verano."}
  ]},
  {cat:"Familia", q:"le grand-père", s:"el abuelo", col:"#fed7aa", ex:[
    {t:"Pasado",   q:"Son grand-père marchait des kilomètres chaque jour.", s:"Su abuelo caminaba kilómetros cada día."},
    {t:"Presente", q:"Mon grand-père lit les nouvelles chaque matin.", s:"Mi abuelo lee las noticias cada mañana."},
    {t:"Futuro",   q:"Mon grand-père aura 80 ans l'année prochaine.", s:"Mi abuelo cumplirá 80 años el próximo año."}
  ]},
  {cat:"Familia", q:"le fils", s:"el hijo", col:"#fed7aa", note:"La -s final de 'fils' sí se pronuncia: se dice 'fis'.", ex:[
    {t:"Pasado",   q:"Leur fils est né un matin d'hiver.", s:"Su hijo nació una mañana de invierno."},
    {t:"Presente", q:"Son fils va à l'école chaque jour.", s:"Su hijo va a la escuela todos los días."},
    {t:"Futuro",   q:"Leur fils étudiera la musique l'année prochaine.", s:"Su hijo estudiará música el próximo año."}
  ]},
  {cat:"Familia", q:"la fille", s:"la hija / la chica", col:"#fed7aa", note:"'Fille' significa tanto 'hija' como 'chica/niña' según el contexto.", ex:[
    {t:"Pasado",   q:"Leur fille a appris à faire du vélo l'été dernier.", s:"Su hija aprendió a andar en bicicleta el verano pasado."},
    {t:"Presente", q:"Ma fille adore dessiner.", s:"A mi hija le encanta dibujar."},
    {t:"Futuro",   q:"Leur fille voyagera en Europe un jour.", s:"Su hija viajará a Europa algún día."}
  ]},
  {cat:"Familia", q:"le mari", s:"el esposo / el marido", col:"#fed7aa", ex:[
    {t:"Pasado",   q:"Son mari a cuisiné le dîner hier soir.", s:"Su esposo cocinó la cena anoche."},
    {t:"Presente", q:"Son mari travaille depuis la maison maintenant.", s:"Su esposo trabaja desde casa ahora."},
    {t:"Futuro",   q:"Son mari rentrera à la maison demain.", s:"Su esposo llegará a casa mañana."}
  ]},
  {cat:"Familia", q:"la femme", s:"la esposa / la mujer", col:"#fed7aa", note:"'Femme' significa tanto 'mujer' como 'esposa'. La -e final no se pronuncia.", ex:[
    {t:"Pasado",   q:"Sa femme a planté des fleurs dans le jardin.", s:"Su esposa plantó flores en el jardín."},
    {t:"Presente", q:"Sa femme chante dans une chorale.", s:"Su esposa canta en un coro."},
    {t:"Futuro",   q:"Sa femme l'accompagnera dans ce voyage.", s:"Su esposa lo acompañará en ese viaje."}
  ]},
  {cat:"Cuerpo", q:"la tête", s:"la cabeza", col:"#fca5a5", note:"También significa 'cara' en algunas expresiones: 'faire la tête' = poner mala cara.", ex:[
    {t:"Pasado",   q:"Elle a posé la tête sur l'oreiller.", s:"Ella apoyó la cabeza en la almohada."},
    {t:"Presente", q:"Il secoue la tête quand il n'est pas d'accord.", s:"Él sacude la cabeza cuando no está de acuerdo."},
    {t:"Futuro",   q:"Le médecin lui examinera la tête demain.", s:"El médico le revisará la cabeza mañana."}
  ]},
  {cat:"Cuerpo", q:"l'œil (les yeux)", s:"el ojo (los ojos)", col:"#fca5a5", note:"Plural muy irregular: 'œil' → 'yeux'. Son formas completamente distintas.", ex:[
    {t:"Pasado",   q:"Elle a ouvert l'œil lentement le matin.", s:"Ella abrió el ojo lentamente por la mañana."},
    {t:"Presente", q:"Son œil remarque chaque petit détail.", s:"Su ojo nota cada pequeño detalle."},
    {t:"Futuro",   q:"Le médecin lui examinera l'œil la semaine prochaine.", s:"El médico le revisará el ojo la próxima semana."}
  ]},
  {cat:"Cuerpo", q:"l'oreille", s:"la oreja / el oído", col:"#fca5a5", ex:[
    {t:"Pasado",   q:"La musique est arrivée jusqu'à son oreille depuis l'autre côté.", s:"La música llegó a su oído desde el otro lado."},
    {t:"Presente", q:"Il a une bonne oreille pour les mélodies.", s:"Él tiene buen oído para las melodías."},
    {t:"Futuro",   q:"Elle protégera son oreille du bruit fort.", s:"Ella protegerá su oído del ruido fuerte."}
  ]},
  {cat:"Cuerpo", q:"le nez", s:"la nariz", col:"#fca5a5", note:"La -z final de 'nez' es muda. Se pronuncia 'né'.", ex:[
    {t:"Pasado",   q:"L'air froid lui a rougi le nez.", s:"El aire frío le puso la nariz roja."},
    {t:"Presente", q:"Son nez est sensible aux odeurs fortes.", s:"Su nariz es sensible a los olores fuertes."},
    {t:"Futuro",   q:"Le parfum des fleurs atteindra son nez.", s:"El aroma de las flores llegará a su nariz."}
  ]},
  {cat:"Cuerpo", q:"la bouche", s:"la boca", col:"#fca5a5", ex:[
    {t:"Pasado",   q:"Elle a ouvert la bouche pour parler.", s:"Ella abrió la boca para hablar."},
    {t:"Presente", q:"Il couvre sa bouche quand il rit.", s:"Él se cubre la boca cuando se ríe."},
    {t:"Futuro",   q:"Elle ouvrira la bouche et chantera.", s:"Ella abrirá la boca y cantará."}
  ]},
  {cat:"Cuerpo", q:"la main", s:"la mano", col:"#fca5a5", note:"La nasal -ain se pronuncia 'en'. 'Main' rima con 'pain' (pan).", ex:[
    {t:"Pasado",   q:"Elle lui a tenu la main pendant la cérémonie.", s:"Ella le sostuvo la mano durante la ceremonia."},
    {t:"Presente", q:"Il lève la main pour poser une question.", s:"Él levanta la mano para hacer una pregunta."},
    {t:"Futuro",   q:"Elle tendra la main en signe d'amitié.", s:"Ella extenderá la mano en señal de amistad."}
  ]},
  {cat:"Cuerpo", q:"le pied", s:"el pie", col:"#fca5a5", note:"La -d final de 'pied' es muda. Plural: 'les pieds'.", ex:[
    {t:"Pasado",   q:"Elle a senti le sable froid sous son pied.", s:"Ella sintió la arena fría bajo su pie."},
    {t:"Presente", q:"Son pied lui fait mal après la longue marche.", s:"Su pie le duele después de la larga caminata."},
    {t:"Futuro",   q:"Elle mettra le pied dans l'eau.", s:"Ella meterá el pie en el agua."}
  ]},
  {cat:"Cuerpo", q:"le cœur", s:"el corazón", col:"#fca5a5", note:"'Cœur' se pronuncia 'keur'. La ligadura œ es característica del francés.", ex:[
    {t:"Pasado",   q:"Son cœur a battu fort quand elle l'a vu.", s:"Su corazón latió fuerte cuando lo vio."},
    {t:"Presente", q:"Mon cœur est plein de gratitude.", s:"Mi corazón está lleno de gratitud."},
    {t:"Futuro",   q:"Son cœur guérira avec le temps.", s:"Su corazón sanará con el tiempo."}
  ]},
  {cat:"Cuerpo", q:"le ventre", s:"el vientre / la barriga", col:"#fca5a5", ex:[
    {t:"Pasado",   q:"Son ventre lui a fait mal après le repas.", s:"Su barriga le dolió después de la comida."},
    {t:"Presente", q:"Son ventre gargouille quand il a faim.", s:"Su barriga gruñe cuando tiene hambre."},
    {t:"Futuro",   q:"Le médicament calmera son ventre.", s:"El medicamento calmará su barriga."}
  ]},
  {cat:"Cuerpo", q:"le dos", s:"la espalda", col:"#fca5a5", note:"La -s final de 'dos' es muda. Se pronuncia 'do'.", ex:[
    {t:"Pasado",   q:"Il a étiré le dos après la longue journée.", s:"Él estiró la espalda después del largo día."},
    {t:"Presente", q:"Son dos est fort grâce au yoga.", s:"Su espalda está fuerte gracias al yoga."},
    {t:"Futuro",   q:"Il posera le dos sur la pierre chaude.", s:"Él apoyará la espalda en la piedra cálida."}
  ]},
  {cat:"Naturaleza", q:"le soleil", img:"golden sunrise sky", s:"el sol", col:"#4ade80", ex:[
    {t:"Pasado",   q:"Le soleil s'est levé derrière les montagnes.", s:"El sol salió detrás de las montañas."},
    {t:"Presente", q:"Le soleil brille sur l'eau.", s:"El sol brilla sobre el agua."},
    {t:"Futuro",   q:"Demain le soleil se lèvera encore.", s:"Mañana el sol saldrá de nuevo."}
  ]},
  {cat:"Naturaleza", q:"la lune", img:"full moon night sky", s:"la luna", col:"#4ade80", ex:[
    {t:"Pasado",   q:"La lune était pleine et lumineuse hier soir.", s:"La luna estuvo llena y brillante anoche."},
    {t:"Presente", q:"La lune éclaire le chemin dans la forêt.", s:"La luna ilumina el camino en el bosque."},
    {t:"Futuro",   q:"La lune sera visible depuis notre fenêtre.", s:"La luna será visible desde nuestra ventana."}
  ]},
  {cat:"Naturaleza", q:"l'étoile", s:"la estrella", col:"#4ade80", note:"Femenino. Plural: 'les étoiles'. La 'é' inicial lleva acento agudo.", ex:[
    {t:"Pasado",   q:"Une étoile brillante guidait les voyageurs autrefois.", s:"Una estrella brillante guiaba a los viajeros antiguamente."},
    {t:"Presente", q:"Chaque étoile dans le ciel raconte une histoire.", s:"Cada estrella en el cielo cuenta una historia."},
    {t:"Futuro",   q:"Nous regarderons la première étoile apparaître ce soir.", s:"Veremos aparecer la primera estrella esta noche."}
  ]},
  {cat:"Naturaleza", q:"l'eau", s:"el agua", col:"#4ade80", note:"Femenino en francés ('l'eau froide'). 'Eau' se pronuncia como la 'o' española.", ex:[
    {t:"Pasado",   q:"L'eau a coulé toute la journée le long de la montagne.", s:"El agua fluyó montaña abajo todo el día."},
    {t:"Presente", q:"L'eau propre est essentielle à la vie.", s:"El agua limpia es esencial para la vida."},
    {t:"Futuro",   q:"Nous apporterons de l'eau de la rivière demain.", s:"Mañana llevaremos agua del río."}
  ]},
  {cat:"Naturaleza", q:"le feu", s:"el fuego", col:"#4ade80", ex:[
    {t:"Pasado",   q:"Le feu a brûlé toute la nuit dans le camp.", s:"El fuego ardió toda la noche en el campamento."},
    {t:"Presente", q:"Le feu réchauffe toute la famille.", s:"El fuego calienta a toda la familia."},
    {t:"Futuro",   q:"Nous allumerons un feu sur la plage ce soir.", s:"Encenderemos un fuego en la playa esta noche."}
  ]},
  {cat:"Naturaleza", q:"la terre", s:"la tierra", col:"#4ade80", note:"Con mayúscula ('la Terre') es el planeta Tierra.", ex:[
    {t:"Pasado",   q:"Elle a tenu la terre sombre entre ses mains.", s:"Ella sostuvo la tierra oscura entre sus manos."},
    {t:"Presente", q:"La terre est vivante sous nos pieds.", s:"La tierra está viva bajo nuestros pies."},
    {t:"Futuro",   q:"Nous planterons des graines dans la terre au printemps.", s:"Plantaremos semillas en la tierra en primavera."}
  ]},
  {cat:"Naturaleza", q:"le vent", img:"wind through trees leaves", s:"el viento", col:"#4ade80", note:"La -t final es muda. 'Vent' se pronuncia 'van'.", ex:[
    {t:"Pasado",   q:"Le vent a emporté les feuilles au loin.", s:"El viento llevó las hojas muy lejos."},
    {t:"Presente", q:"Le vent souffle doucement à travers les arbres.", s:"El viento sopla suavemente entre los árboles."},
    {t:"Futuro",   q:"Le vent apportera de l'air froid du nord.", s:"El viento traerá aire frío del norte."}
  ]},
  {cat:"Naturaleza", q:"l'arbre", img:"tall tree forest nature", s:"el árbol", col:"#4ade80", note:"Masculino. Plural: 'les arbres'.", ex:[
    {t:"Pasado",   q:"Ce vieil arbre était là depuis cent ans.", s:"Ese viejo árbol estuvo allí por cien años."},
    {t:"Presente", q:"Cet arbre donne de l'ombre en été.", s:"Este árbol da sombra en verano."},
    {t:"Futuro",   q:"Nous planterons un arbre pour chaque enfant qui naîtra.", s:"Plantaremos un árbol por cada niño que nazca."}
  ]},
  {cat:"Naturaleza", q:"la fleur", img:"flower bloom nature", s:"la flor", col:"#4ade80", ex:[
    {t:"Pasado",   q:"La fleur a éclos après la pluie.", s:"La flor floreció después de la lluvia."},
    {t:"Presente", q:"Chaque fleur a son propre parfum.", s:"Cada flor tiene su propio aroma."},
    {t:"Futuro",   q:"La fleur s'ouvrira avec le soleil du matin.", s:"La flor se abrirá con el sol de la mañana."}
  ]},
  {cat:"Naturaleza", q:"la rivière", img:"river flowing nature", s:"el río (pequeño) / el arroyo", col:"#4ade80", note:"'Rivière' es un río interior. El gran río o el que desemboca en el mar se llama 'le fleuve'.", ex:[
    {t:"Pasado",   q:"Elle courait jusqu'à la rivière quand elle était petite.", s:"Ella corría hasta el río cuando era pequeña."},
    {t:"Presente", q:"La rivière coule tranquillement dans la vallée.", s:"El río fluye tranquilamente por el valle."},
    {t:"Futuro",   q:"Nous nagerons dans la rivière ce week-end.", s:"Nadaremos en el río este fin de semana."}
  ]},
  {cat:"Verbos", q:"marcher", img:"person walking path nature", s:"caminar / andar", col:"#a78bfa", note:"Verbo regular del primer grupo (-er). Muy común: 'ça marche!' = ¡funciona!", ex:[
    {t:"Pasado",   q:"Ils ont marché le long de la rivière au coucher du soleil.", s:"Ellos caminaron junto al río al atardecer."},
    {t:"Presente", q:"Elle marche jusqu'au travail chaque matin.", s:"Ella camina al trabajo cada mañana."},
    {t:"Futuro",   q:"Nous marcherons ensemble dans la forêt.", s:"Caminaremos juntos por el bosque."}
  ]},
  {cat:"Verbos", q:"courir", img:"person running outdoors", s:"correr", col:"#a78bfa", note:"Verbo irregular del tercer grupo. Je cours, tu cours, il court, nous courons.", ex:[
    {t:"Pasado",   q:"Elle a couru jusqu'à la rivière avant l'aube.", s:"Ella corrió hasta el río antes del amanecer."},
    {t:"Presente", q:"Je cours chaque matin pour me libérer l'esprit.", s:"Corro cada mañana para despejar la mente."},
    {t:"Futuro",   q:"Nous courrons ensemble dans les montagnes.", s:"Correremos juntos en las montañas."}
  ]},
  {cat:"Verbos", q:"manger", img:"person eating food", s:"comer", col:"#a78bfa", note:"Verbo regular -er con particularidad ortográfica: nous mangeons (se añade 'e' ante -ons).", ex:[
    {t:"Pasado",   q:"Nous avons mangé ensemble autour du feu.", s:"Comimos juntos alrededor del fuego."},
    {t:"Presente", q:"Elle mange des fruits frais chaque matin.", s:"Ella come fruta fresca cada mañana."},
    {t:"Futuro",   q:"Ils mangeront sous les étoiles ce soir.", s:"Ellos cenarán bajo las estrellas esta noche."}
  ]},
  {cat:"Verbos", q:"boire", img:"person drinking water", s:"beber", col:"#a78bfa", note:"Verbo irregular. Je bois, tu bois, il boit, nous buvons, vous buvez, ils boivent.", ex:[
    {t:"Pasado",   q:"Il a bu de l'eau de la source de montagne.", s:"Él bebió agua del manantial de la montaña."},
    {t:"Presente", q:"Je bois du thé chaque soir.", s:"Bebo té cada noche."},
    {t:"Futuro",   q:"Nous boirons à la rivière après la randonnée.", s:"Beberemos del río después de la caminata."}
  ]},
  {cat:"Verbos", q:"dormir", img:"person sleeping peaceful", s:"dormir", col:"#a78bfa", note:"Verbo irregular. Je dors, tu dors, il dort, nous dormons.", ex:[
    {t:"Pasado",   q:"L'enfant a dormi paisiblement toute la nuit.", s:"El niño durmió tranquilamente toda la noche."},
    {t:"Presente", q:"Elle dort sous un ciel plein d'étoiles.", s:"Ella duerme bajo un cielo lleno de estrellas."},
    {t:"Futuro",   q:"Cette nuit nous dormirons près du feu.", s:"Esta noche dormiremos junto al fuego."}
  ]},
  {cat:"Verbos", q:"travailler", img:"person working hands", s:"trabajar", col:"#a78bfa", ex:[
    {t:"Pasado",   q:"Il a travaillé dans les champs dès l'aube.", s:"Él trabajó en los campos desde el amanecer."},
    {t:"Presente", q:"Elle travaille avec ses mains et son cœur.", s:"Ella trabaja con sus manos y su corazón."},
    {t:"Futuro",   q:"Ils travailleront ensemble sur ce projet.", s:"Ellos trabajarán juntos en ese proyecto."}
  ]},
  {cat:"Verbos", q:"étudier", img:"person reading studying", s:"estudiar", col:"#a78bfa", ex:[
    {t:"Pasado",   q:"Elle a étudié à la lumière des bougies chaque nuit.", s:"Ella estudiaba con luz de vela cada noche."},
    {t:"Presente", q:"Il étudie deux langues en même temps.", s:"Él estudia dos idiomas al mismo tiempo."},
    {t:"Futuro",   q:"J'étudierai le quechua cette année.", s:"Estudiaré quechua este año."}
  ]},
  {cat:"Verbos", q:"parler", img:"two people talking conversation", s:"hablar", col:"#a78bfa", note:"Paradigma del primer grupo. Je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent. La -ent final es muda.", ex:[
    {t:"Pasado",   q:"Elle a parlé avec courage devant tout le monde.", s:"Ella habló con valentía frente a todos."},
    {t:"Presente", q:"Il parle trois langues couramment.", s:"Él habla tres idiomas con fluidez."},
    {t:"Futuro",   q:"Elle parlera lors de l'événement la semaine prochaine.", s:"Ella hablará en el evento la próxima semana."}
  ]},
  {cat:"Verbos", q:"écouter", img:"person listening eyes closed", s:"escuchar", col:"#a78bfa", ex:[
    {t:"Pasado",   q:"Il a écouté la rivière pendant longtemps.", s:"Él escuchó el río durante mucho tiempo."},
    {t:"Presente", q:"Elle écoute de la musique en marchant.", s:"Ella escucha música mientras camina."},
    {t:"Futuro",   q:"Nous écouterons parler les anciens.", s:"Escucharemos hablar a los mayores."}
  ]},
  {cat:"Verbos", q:"lire", img:"person reading book", s:"leer", col:"#a78bfa", note:"Verbo irregular. Je lis, tu lis, il lit, nous lisons, vous lisez, ils lisent.", ex:[
    {t:"Pasado",   q:"Elle a lu tout le livre en une journée.", s:"Ella leyó el libro entero en un día."},
    {t:"Presente", q:"Il lit des poèmes à sa fille le soir.", s:"Él lee poemas a su hija por las noches."},
    {t:"Futuro",   q:"Je te lirai cette histoire demain.", s:"Te leeré esa historia mañana."}
  ]},
  {cat:"Verbos", q:"écrire", s:"escribir", col:"#a78bfa", note:"Verbo irregular. J'écris, tu écris, il écrit, nous écrivons, vous écrivez, ils écrivent.", ex:[
    {t:"Pasado",   q:"Elle a écrit ses pensées dans un petit carnet.", s:"Ella escribió sus pensamientos en un pequeño cuaderno."},
    {t:"Presente", q:"Il écrit des chansons sur les montagnes.", s:"Él escribe canciones sobre las montañas."},
    {t:"Futuro",   q:"Je t'écrirai une lettre depuis la route.", s:"Te escribiré una carta desde el camino."}
  ]},
  {cat:"Verbos", q:"aimer", s:"amar / gustar", col:"#a78bfa", note:"'Aimer' es tanto 'amar' (personas) como 'gustar' (cosas): 'j'aime le chocolat' = me gusta el chocolate.", ex:[
    {t:"Pasado",   q:"Elle a aimé cet endroit dès le premier instant.", s:"Ella amó ese lugar desde el primer momento."},
    {t:"Presente", q:"J'aime le son de la pluie sur le toit.", s:"Amo el sonido de la lluvia en el techo."},
    {t:"Futuro",   q:"Ils s'aimeront pour toujours.", s:"Ellos se amarán para siempre."}
  ]},
  {cat:"Verbos", q:"aider", s:"ayudar", col:"#a78bfa", ex:[
    {t:"Pasado",   q:"Elle a aidé sa voisine à porter les sacs.", s:"Ella ayudó a su vecina a llevar las bolsas."},
    {t:"Presente", q:"Il aide toujours quand quelqu'un en a besoin.", s:"Él siempre ayuda cuando alguien lo necesita."},
    {t:"Futuro",   q:"Nous aiderons à construire le jardin communautaire.", s:"Ayudaremos a construir el jardín comunitario."}
  ]},
  {cat:"Verbos", q:"donner", s:"dar", col:"#a78bfa", ex:[
    {t:"Pasado",   q:"Elle a donné des fleurs à tous ceux qu'elle a rencontrés.", s:"Ella dio flores a todos los que encontró."},
    {t:"Presente", q:"Il donne grâce avant chaque repas.", s:"Él da gracias antes de cada comida."},
    {t:"Futuro",   q:"Nous donnerons ce que nous pouvons à ceux qui en ont besoin.", s:"Daremos lo que podamos a quienes lo necesiten."}
  ]},
  {cat:"Verbos", q:"prendre", s:"tomar / coger", col:"#a78bfa", note:"Verbo irregular. Je prends, tu prends, il prend, nous prenons, vous prenez, ils prennent.", ex:[
    {t:"Pasado",   q:"Elle a pris une grande inspiration avant de parler.", s:"Ella tomó una respiración profunda antes de hablar."},
    {t:"Presente", q:"Il prend une promenade chaque soir.", s:"Él da un paseo cada tarde."},
    {t:"Futuro",   q:"Elle prendra le premier pas demain.", s:"Ella dará el primer paso mañana."}
  ]},
  {cat:"Números", q:"un / une", s:"uno / una", col:"#2dd4bf", note:"'Un' para masculino, 'une' para femenino. Es también el artículo indefinido.", ex:[
    {t:"Pasado",   q:"Il n'y avait qu'un seul chemin à travers la forêt.", s:"Solo había un camino a través del bosque."},
    {t:"Presente", q:"J'ai un rêve qui me guide.", s:"Tengo un sueño que me guía."},
    {t:"Futuro",   q:"Un jour tout sera clair.", s:"Un día todo estará claro."}
  ]},
  {cat:"Números", q:"deux", s:"dos", col:"#2dd4bf", note:"La -x final de 'deux' es muda.", ex:[
    {t:"Pasado",   q:"Deux étoiles brillaient plus que les autres.", s:"Dos estrellas brillaban más que las demás."},
    {t:"Presente", q:"Il y a deux rivières près de ce village.", s:"Hay dos ríos cerca de este pueblo."},
    {t:"Futuro",   q:"Nous planterons deux arbres ce printemps.", s:"Plantaremos dos árboles esta primavera."}
  ]},
  {cat:"Números", q:"trois", s:"tres", col:"#2dd4bf", ex:[
    {t:"Pasado",   q:"Trois générations ont vécu dans cette maison.", s:"Tres generaciones vivieron en esa casa."},
    {t:"Presente", q:"Elle se réveille à trois heures du matin.", s:"Ella se despierta a las tres de la mañana."},
    {t:"Futuro",   q:"Il reviendra dans trois jours.", s:"Él regresará en tres días."}
  ]},
  {cat:"Números", q:"quatre", s:"cuatro", col:"#2dd4bf", ex:[
    {t:"Pasado",   q:"Quatre saisons ont passé sans pluie.", s:"Cuatro estaciones pasaron sin lluvia."},
    {t:"Presente", q:"La table a quatre bougies allumées.", s:"La mesa tiene cuatro velas encendidas."},
    {t:"Futuro",   q:"Nous nous retrouverons dans quatre heures.", s:"Nos reuniremos en cuatro horas."}
  ]},
  {cat:"Números", q:"cinq", s:"cinco", col:"#2dd4bf", note:"La -q final de 'cinq' sí se pronuncia ante vocal, pero puede ser muda ante consonante.", ex:[
    {t:"Pasado",   q:"Cinq oiseaux se sont posés sur la branche.", s:"Cinco pájaros se posaron en la rama."},
    {t:"Presente", q:"Elle joue cinq chansons chaque soir.", s:"Ella toca cinco canciones cada noche."},
    {t:"Futuro",   q:"Il arrivera dans cinq minutes.", s:"Él llegará en cinco minutos."}
  ]},
  {cat:"Números", q:"six", s:"seis", col:"#2dd4bf", ex:[
    {t:"Pasado",   q:"Six enfants ont joué au bord de la rivière.", s:"Seis niños jugaron junto al río."},
    {t:"Presente", q:"Le marché ouvre à six heures du matin.", s:"El mercado abre a las seis de la mañana."},
    {t:"Futuro",   q:"Je t'appellerai à six heures demain.", s:"Te llamaré a las seis mañana."}
  ]},
  {cat:"Números", q:"sept", s:"siete", col:"#2dd4bf", note:"La -p de 'sept' es muda. Se pronuncia 'sèt'.", ex:[
    {t:"Pasado",   q:"Sept jours ont passé avant que la pluie arrive.", s:"Pasaron siete días antes de que llegara la lluvia."},
    {t:"Presente", q:"Il y a sept couleurs dans l'arc-en-ciel.", s:"Hay siete colores en el arco iris."},
    {t:"Futuro",   q:"Elle aura sept ans la semaine prochaine.", s:"Ella cumplirá siete años la próxima semana."}
  ]},
  {cat:"Números", q:"huit", s:"ocho", col:"#2dd4bf", ex:[
    {t:"Pasado",   q:"Huit familles vivaient dans la vallée.", s:"Ocho familias vivían en el valle."},
    {t:"Presente", q:"La cérémonie dure huit heures.", s:"La ceremonia dura ocho horas."},
    {t:"Futuro",   q:"Nous nous réunirons à huit heures ce soir.", s:"Nos reuniremos a las ocho esta noche."}
  ]},
  {cat:"Números", q:"neuf", s:"nueve", col:"#2dd4bf", note:"'Neuf' también significa 'nuevo' (brand new): 'une voiture neuve'.", ex:[
    {t:"Pasado",   q:"Neuf lunes ont passé depuis son départ.", s:"Pasaron nueve lunas desde que ella se fue."},
    {t:"Presente", q:"Le bébé a neuf mois.", s:"El bebé tiene nueve meses."},
    {t:"Futuro",   q:"Je finirai dans neuf jours.", s:"Terminaré en nueve días."}
  ]},
  {cat:"Números", q:"dix", s:"diez", col:"#2dd4bf", ex:[
    {t:"Pasado",   q:"Il y a dix ans, elle a trouvé son chemin.", s:"Hace diez años ella encontró su camino."},
    {t:"Presente", q:"Il compte jusqu'à dix avant de répondre.", s:"Él cuenta hasta diez antes de responder."},
    {t:"Futuro",   q:"Dans dix ans cette forêt sera de nouveau pleine.", s:"En diez años este bosque volverá a estar lleno."}
  ]},
  {cat:"Colores", q:"rouge", s:"rojo/a", col:"#fb7185", note:"Los adjetivos de color concuerdan en género y número: 'une robe rouge', 'des robes rouges'.", ex:[
    {t:"Pasado",   q:"Le ciel est devenu rouge au coucher du soleil.", s:"El cielo se puso rojo al atardecer."},
    {t:"Presente", q:"Elle porte une écharpe rouge chaque hiver.", s:"Ella usa una bufanda roja cada invierno."},
    {t:"Futuro",   q:"Les roses seront rouges la semaine prochaine.", s:"Las rosas estarán rojas para la próxima semana."}
  ]},
  {cat:"Colores", q:"bleu / bleue", s:"azul", col:"#fb7185", note:"El femenino añade -e: 'un ciel bleu' / 'une mer bleue'.", ex:[
    {t:"Pasado",   q:"Le ciel était bleu toute la journée.", s:"El cielo estuvo azul todo el día."},
    {t:"Presente", q:"Ses yeux sont bleus comme l'océan.", s:"Sus ojos son azules como el océano."},
    {t:"Futuro",   q:"L'eau sera bleue en été.", s:"El agua será azul en verano."}
  ]},
  {cat:"Colores", q:"vert / verte", s:"verde", col:"#fb7185", ex:[
    {t:"Pasado",   q:"Les collines étaient vertes après la pluie.", s:"Las colinas estuvieron verdes después de la lluvia."},
    {t:"Presente", q:"Les feuilles sont vertes et pleines de vie.", s:"Las hojas están verdes y llenas de vida."},
    {t:"Futuro",   q:"Les champs seront de nouveau verts au printemps.", s:"Los campos volverán a estar verdes en primavera."}
  ]},
  {cat:"Colores", q:"jaune", s:"amarillo/a", col:"#fb7185", ex:[
    {t:"Pasado",   q:"Les tournesols étaient jaunes et grands.", s:"Los girasoles estaban amarillos y altos."},
    {t:"Presente", q:"La lumière du matin est douce et jaune.", s:"La luz de la mañana es suave y amarilla."},
    {t:"Futuro",   q:"Les champs seront jaunes de fleurs.", s:"Los campos estarán amarillos de flores."}
  ]},
  {cat:"Colores", q:"blanc / blanche", s:"blanco/a", col:"#fb7185", note:"El femenino de 'blanc' es 'blanche' (cambia la consonante final).", ex:[
    {t:"Pasado",   q:"La montagne était blanche de neige fraîche.", s:"La montaña estaba blanca de nieve fresca."},
    {t:"Presente", q:"Les nuages sont blancs et doux aujourd'hui.", s:"Las nubes están blancas y suaves hoy."},
    {t:"Futuro",   q:"La page sera blanche jusqu'à ce qu'elle écrive.", s:"La página estará blanca hasta que ella escriba."}
  ]},
  {cat:"Colores", q:"noir / noire", s:"negro/a", col:"#fb7185", ex:[
    {t:"Pasado",   q:"Le ciel était noir et plein d'étoiles.", s:"El cielo estaba negro y lleno de estrellas."},
    {t:"Presente", q:"Elle s'habille en noir quand elle joue de la musique.", s:"Ella viste de negro cuando toca música."},
    {t:"Futuro",   q:"La nuit sera noire sans la lune.", s:"La noche estará negra sin la luna."}
  ]},
  {cat:"Colores", q:"orange", s:"naranja", col:"#fb7185", note:"'Orange' es invariable como adjetivo de color: 'des chemises orange' (sin -s).", ex:[
    {t:"Pasado",   q:"Les feuilles sont devenues orange en automne.", s:"Las hojas se pusieron naranjas en otoño."},
    {t:"Presente", q:"Le coucher de soleil peint le ciel en orange.", s:"El atardecer pinta el cielo de naranja."},
    {t:"Futuro",   q:"Les arbres seront de nouveau orange cet automne.", s:"Los árboles volverán a ser naranjas este otoño."}
  ]},
  {cat:"Colores", q:"violet / violette", s:"morado/a / violeta", col:"#fb7185", note:"El femenino dobla la -t: 'une fleur violette'.", ex:[
    {t:"Pasado",   q:"Les champs de lavande étaient violets et parfumés.", s:"Los campos de lavanda estaban morados y fragantes."},
    {t:"Presente", q:"Des fleurs violettes poussent le long du chemin.", s:"Flores moradas crecen a lo largo del camino."},
    {t:"Futuro",   q:"Le ciel deviendra violet avant l'orage.", s:"El cielo se pondrá morado antes de la tormenta."}
  ]},
  {cat:"Comida", q:"le pain", s:"el pan", col:"#f59e0b", note:"La baguette es el pan francés por excelencia. 'Pain' se pronuncia 'pen' (nasal).", ex:[
    {t:"Pasado",   q:"Elle faisait du pain chaque dimanche matin.", s:"Ella horneaba pan cada domingo por la mañana."},
    {t:"Presente", q:"Le pain frais emplit la maison de chaleur.", s:"El pan fresco llena la casa de calidez."},
    {t:"Futuro",   q:"Nous partagerons du pain et des histoires ce soir.", s:"Compartiremos pan e historias esta noche."}
  ]},
  {cat:"Comida", q:"le riz", s:"el arroz", col:"#f59e0b", note:"La -z final es muda. Se pronuncia 'ri'.", ex:[
    {t:"Pasado",   q:"Elle a cuisiné du riz avec des herbes du jardin.", s:"Ella cocinó arroz con hierbas del jardín."},
    {t:"Presente", q:"Le riz pousse dans les champs près de la rivière.", s:"El arroz crece en los campos cerca del río."},
    {t:"Futuro",   q:"Nous récolterons le riz le mois prochain.", s:"Cosecharemos el arroz el próximo mes."}
  ]},
  {cat:"Comida", q:"l'eau (de l'eau)", s:"el agua", col:"#f59e0b", note:"Como alimento: 'je bois de l'eau' (bebo agua). Artículo partitivo 'de l'' ante vocal.", ex:[
    {t:"Pasado",   q:"Elle a bu de l'eau froide du puits.", s:"Ella bebió agua fría del pozo."},
    {t:"Presente", q:"L'eau propre est un don que nous devons protéger.", s:"El agua limpia es un don que debemos proteger."},
    {t:"Futuro",   q:"Elle apportera de l'eau pour le voyage.", s:"Ella traerá agua para el viaje."}
  ]},
  {cat:"Comida", q:"le lait", s:"la leche", col:"#f59e0b", note:"La -t final es muda. 'Du lait' = leche (artículo partitivo).", ex:[
    {t:"Pasado",   q:"Elle a grandi en buvant du lait chaud le soir.", s:"Ella creció bebiendo leche tibia por las noches."},
    {t:"Presente", q:"Du lait frais arrive de la ferme chaque matin.", s:"La leche fresca llega de la granja cada mañana."},
    {t:"Futuro",   q:"Elle chauffera le lait pour le bébé.", s:"Ella calentará la leche para el bebé."}
  ]},
  {cat:"Comida", q:"un œuf (des œufs)", s:"un huevo (huevos)", col:"#f59e0b", note:"La -f de 'œuf' se pronuncia, pero en el plural 'des œufs' la -f y la -s son mudas.", ex:[
    {t:"Pasado",   q:"Elle a trouvé un œuf chaud dans le nid.", s:"Ella encontró un huevo tibio en el nido."},
    {t:"Presente", q:"Il fait cuire un œuf chaque matin pour le petit-déjeuner.", s:"Él cocina un huevo cada mañana para el desayuno."},
    {t:"Futuro",   q:"Elle fera bouillir un œuf pour les enfants.", s:"Ella hervirá un huevo para los niños."}
  ]},
  {cat:"Comida", q:"une pomme", s:"una manzana", col:"#f59e0b", ex:[
    {t:"Pasado",   q:"Elle a cueilli une pomme du vieil arbre.", s:"Ella recogió una manzana del árbol viejo."},
    {t:"Presente", q:"Une pomme par jour éloigne le médecin.", s:"Una manzana al día mantiene al médico lejos."},
    {t:"Futuro",   q:"Nous apporterons des pommes du verger.", s:"Traeremos manzanas del huerto."}
  ]},
  {cat:"Comida", q:"la viande", s:"la carne", col:"#f59e0b", ex:[
    {t:"Pasado",   q:"Ils ont fait cuire de la viande sur un feu ouvert.", s:"Ellos cocinaron carne sobre fuego abierto."},
    {t:"Presente", q:"Elle achète de la viande fraîche au marché local.", s:"Ella compra carne fresca en el mercado local."},
    {t:"Futuro",   q:"Nous préparerons de la viande pour la fête.", s:"Prepararemos carne para la celebración."}
  ]},
  {cat:"Comida", q:"le poisson", s:"el pescado / el pez", col:"#f59e0b", note:"'Poisson' es pescado como alimento y también el animal vivo en el agua.", ex:[
    {t:"Pasado",   q:"Ils ont grillé du poisson au bord de la rivière le soir.", s:"Ellos asaron pescado junto al río por la noche."},
    {t:"Presente", q:"Le poisson frais est le meilleur repas près de la mer.", s:"El pescado fresco es la mejor comida junto al mar."},
    {t:"Futuro",   q:"Il attrapera du poisson tôt le matin.", s:"Él pescará temprano por la mañana."}
  ]},
  {cat:"Comida", q:"la soupe", s:"la sopa", col:"#f59e0b", ex:[
    {t:"Pasado",   q:"Elle a fait une soupe avec des racines et des herbes.", s:"Ella hizo sopa con raíces y hierbas."},
    {t:"Presente", q:"La soupe chaude guérit le corps et l'âme.", s:"La sopa caliente sana el cuerpo y el alma."},
    {t:"Futuro",   q:"Je ferai de la soupe quand tu arriveras.", s:"Haré sopa cuando llegues."}
  ]},
  {cat:"Comida", q:"la salade", s:"la ensalada / la lechuga", col:"#f59e0b", note:"'Salade' puede ser la lechuga como vegetal o la ensalada ya preparada.", ex:[
    {t:"Pasado",   q:"Elle a préparé une salade avec des légumes du jardin.", s:"Ella preparó una ensalada con vegetales del jardín."},
    {t:"Presente", q:"Il mange une salade à chaque déjeuner.", s:"Él come una ensalada en el almuerzo todos los días."},
    {t:"Futuro",   q:"Nous préparerons une salade pour le pique-nique.", s:"Prepararemos una ensalada para el picnic."}
  ]},
  {cat:"Lugares", q:"la maison", s:"la casa", col:"#60a5fa", ex:[
    {t:"Pasado",   q:"Elle a grandi dans une petite maison au bord de la rivière.", s:"Ella creció en una pequeña casa junto al río."},
    {t:"Presente", q:"Leur maison est pleine de musique et de rires.", s:"Su casa está llena de música y risas."},
    {t:"Futuro",   q:"Ils construiront une maison sur la colline.", s:"Ellos construirán una casa en la colina."}
  ]},
  {cat:"Lugares", q:"l'école", s:"la escuela", col:"#60a5fa", ex:[
    {t:"Pasado",   q:"Elle marchait à l'école pieds nus quand elle était petite.", s:"Ella caminaba a la escuela descalza de niña."},
    {t:"Presente", q:"L'école ouvre tôt le matin.", s:"La escuela abre temprano por la mañana."},
    {t:"Futuro",   q:"Il enseignera à l'école l'année prochaine.", s:"Él enseñará en la escuela el próximo año."}
  ]},
  {cat:"Lugares", q:"le marché", s:"el mercado", col:"#60a5fa", ex:[
    {t:"Pasado",   q:"Elle a acheté des épices à l'ancien marché.", s:"Ella compró especias en el viejo mercado."},
    {t:"Presente", q:"Le marché se remplit de voix chaque dimanche.", s:"El mercado se llena de voces cada domingo."},
    {t:"Futuro",   q:"Nous nous retrouverons au marché demain matin.", s:"Nos encontraremos en el mercado mañana por la mañana."}
  ]},
  {cat:"Lugares", q:"l'hôpital", s:"el hospital", col:"#60a5fa", note:"La h de 'hôpital' es aspirada: no hay liaison. Se dice 'un hôpital', no 'un-n-hôpital'.", ex:[
    {t:"Pasado",   q:"Il est né dans un petit hôpital dans la vallée.", s:"Él nació en un pequeño hospital en el valle."},
    {t:"Presente", q:"L'hôpital sert toute la communauté.", s:"El hospital sirve a toda la comunidad."},
    {t:"Futuro",   q:"Elle travaillera à l'hôpital comme médecin.", s:"Ella trabajará en el hospital como doctora."}
  ]},
  {cat:"Lugares", q:"le parc", s:"el parque", col:"#60a5fa", ex:[
    {t:"Pasado",   q:"Ils se sont rencontrés pour la première fois dans le parc.", s:"Ellos se conocieron por primera vez en el parque."},
    {t:"Presente", q:"Les enfants jouent dans le parc chaque après-midi.", s:"Los niños juegan en el parque cada tarde."},
    {t:"Futuro",   q:"Nous pique-niquerons dans le parc dimanche.", s:"Tendremos un picnic en el parque el domingo."}
  ]},
  {cat:"Lugares", q:"la rue", s:"la calle", col:"#60a5fa", ex:[
    {t:"Pasado",   q:"La musique a résonné dans la rue la nuit.", s:"La música resonó por la calle de noche."},
    {t:"Presente", q:"La rue est calme tôt le matin.", s:"La calle está tranquila en la madrugada."},
    {t:"Futuro",   q:"Ils danseront dans la rue le jour de la fête.", s:"Bailarán en la calle el día del festival."}
  ]},
  {cat:"Lugares", q:"la ville", s:"la ciudad", col:"#60a5fa", ex:[
    {t:"Pasado",   q:"Elle s'est installée en ville pour étudier.", s:"Ella se mudó a la ciudad para estudiar."},
    {t:"Presente", q:"La ville ne dort jamais la nuit.", s:"La ciudad nunca duerme por la noche."},
    {t:"Futuro",   q:"Il retournera en ville au printemps prochain.", s:"Él regresará a la ciudad la próxima primavera."}
  ]},
  {cat:"Lugares", q:"le pays", s:"el país", col:"#60a5fa", note:"La -s final de 'pays' es muda. Se pronuncia 'péi'.", ex:[
    {t:"Pasado",   q:"Elle a quitté son pays il y a de nombreuses années.", s:"Ella dejó su país hace muchos años."},
    {t:"Presente", q:"Il aime vivre à la campagne, loin du bruit.", s:"A él le encanta vivir en el campo, lejos del ruido."},
    {t:"Futuro",   q:"Elle retournera dans son pays un jour.", s:"Ella regresará a su país algún día."}
  ]},
  {cat:"Lugares", q:"la plage", s:"la playa", col:"#60a5fa", ex:[
    {t:"Pasado",   q:"Elle a marché pieds nus sur la plage à l'aube.", s:"Ella caminó descalza por la playa al amanecer."},
    {t:"Presente", q:"La plage est calme et vide le matin.", s:"La playa está tranquila y vacía por la mañana."},
    {t:"Futuro",   q:"Ils regarderont le coucher du soleil à la plage.", s:"Ellos verán el atardecer en la playa."}
  ]},
  {cat:"Lugares", q:"la montagne", s:"la montaña", col:"#60a5fa", ex:[
    {t:"Pasado",   q:"Ses ancêtres vivaient près de la montagne.", s:"Sus ancestros vivían cerca de la montaña."},
    {t:"Presente", q:"La montagne est couverte de neige aujourd'hui.", s:"La montaña está cubierta de nieve hoy."},
    {t:"Futuro",   q:"Nous gravirons la montagne au lever du soleil.", s:"Escalaremos la montaña al amanecer."}
  ]},
  {cat:"Tiempo", q:"aujourd'hui", s:"hoy", col:"#818cf8", note:"Literalmente 'en el día de hoy'. Es una palabra compuesta.", ex:[
    {t:"Pasado",   q:"Hier semblait long, mais aujourd'hui est arrivé vite.", s:"Ayer se sintió largo, pero hoy llegó rápido."},
    {t:"Presente", q:"Aujourd'hui est le jour parfait pour commencer.", s:"Hoy es el día perfecto para empezar."},
    {t:"Futuro",   q:"Ce que tu feras aujourd'hui comptera demain.", s:"Lo que hagas hoy importará mañana."}
  ]},
  {cat:"Tiempo", q:"demain", s:"mañana (el día siguiente)", col:"#818cf8", note:"No confundir con 'le matin' (la mañana como parte del día).", ex:[
    {t:"Pasado",   q:"Elle a promis que demain elle partirait.", s:"Ella prometió que mañana iría."},
    {t:"Presente", q:"Demain est une nouvelle chance de recommencer.", s:"Mañana es una nueva oportunidad para empezar de nuevo."},
    {t:"Futuro",   q:"Demain apportera une nouvelle lumière et un nouvel espoir.", s:"Mañana traerá nueva luz y nueva esperanza."}
  ]},
  {cat:"Tiempo", q:"hier", s:"ayer", col:"#818cf8", ex:[
    {t:"Pasado",   q:"Hier elle a dit au revoir à la porte.", s:"Ayer ella se despidió en la puerta."},
    {t:"Presente", q:"Hier ressemble à un rêve maintenant.", s:"Ayer parece un sueño ahora."},
    {t:"Futuro",   q:"Demain elle se souviendra de ce qui s'est passé hier.", s:"Mañana ella recordará lo que pasó ayer."}
  ]},
  {cat:"Tiempo", q:"le matin", s:"la mañana", col:"#818cf8", note:"'Ce matin' = esta mañana. 'Le matin' = por las mañanas (en general).", ex:[
    {t:"Pasado",   q:"Ce matin-là, l'air sentait les fleurs.", s:"Esa mañana el aire olía a flores."},
    {t:"Presente", q:"Chaque matin commence avec la lumière et le silence.", s:"Cada mañana comienza con luz y silencio."},
    {t:"Futuro",   q:"Demain matin nous partirons avant le lever du soleil.", s:"Mañana por la mañana partiremos antes del amanecer."}
  ]},
  {cat:"Tiempo", q:"l'après-midi", s:"la tarde", col:"#818cf8", note:"'Après-midi' puede ser masculino o femenino. Lleva guion.", ex:[
    {t:"Pasado",   q:"Cet après-midi ils se sont assis sous l'arbre.", s:"Esa tarde se sentaron bajo el árbol."},
    {t:"Presente", q:"L'après-midi la lumière devient dorée.", s:"Por la tarde la luz se vuelve dorada."},
    {t:"Futuro",   q:"Nous nous reposerons l'après-midi après la randonnée.", s:"Descansaremos por la tarde después de la caminata."}
  ]},
  {cat:"Tiempo", q:"la nuit", s:"la noche", col:"#818cf8", note:"'Nuit' es la noche oscura. 'Le soir' es la tarde-noche (a partir del atardecer). 'Bonne nuit' = buenas noches (al despedirse).", ex:[
    {t:"Pasado",   q:"Cette nuit-là elle est restée éveillée à regarder les étoiles.", s:"Esa noche ella se quedó despierta mirando las estrellas."},
    {t:"Presente", q:"La nuit, la forêt parle un autre langage.", s:"De noche el bosque habla un idioma diferente."},
    {t:"Futuro",   q:"Cette nuit sera une nuit pleine de musique.", s:"Esta noche será una noche llena de música."}
  ]},
  {cat:"Tiempo", q:"la semaine", s:"la semana", col:"#818cf8", ex:[
    {t:"Pasado",   q:"La semaine dernière ils ont voyagé dans les montagnes.", s:"La semana pasada viajaron a las montañas."},
    {t:"Presente", q:"Cette semaine elle s'entraîne chaque jour.", s:"Esta semana ella practica cada día."},
    {t:"Futuro",   q:"La semaine prochaine le festival commencera.", s:"La próxima semana comenzará el festival."}
  ]},
  {cat:"Expresiones", q:"bonjour", s:"hola / buenos días", col:"#c084fc", note:"'Bonjour' se usa durante el día. 'Bonsoir' es para la tarde-noche. Es obligatorio saludar al entrar a una tienda en Francia.", ex:[
    {t:"Pasado",   q:"Elle a dit bonjour avec un grand sourire.", s:"Ella dijo hola con una gran sonrisa."},
    {t:"Presente", q:"Bonjour est le premier mot de chaque nouvelle amitié.", s:"Hola es la primera palabra de cada nueva amistad."},
    {t:"Futuro",   q:"Un jour elle dira bonjour au monde entier.", s:"Un día ella le dirá hola al mundo entero."}
  ]},
  {cat:"Expresiones", q:"au revoir", s:"adiós / hasta luego", col:"#c084fc", ex:[
    {t:"Pasado",   q:"Elle a dit au revoir et est entrée dans la pluie.", s:"Ella dijo adiós y se adentró en la lluvia."},
    {t:"Presente", q:"Au revoir ne veut pas dire pour toujours.", s:"Adiós no significa para siempre."},
    {t:"Futuro",   q:"Le plus dur des au revoir rendra les retrouvailles plus douces.", s:"El adiós más difícil hará el reencuentro más dulce."}
  ]},
  {cat:"Expresiones", q:"s'il vous plaît", s:"por favor (formal)", col:"#c084fc", note:"'S'il vous plaît' es formal. 'S'il te plaît' es informal (tuteo). Se abrevia 'SVP'.", ex:[
    {t:"Pasado",   q:"Elle a dit s'il vous plaît et la porte s'est ouverte.", s:"Ella dijo por favor y la puerta se abrió."},
    {t:"Presente", q:"S'il vous plaît, asseyez-vous et faites comme chez vous.", s:"Por favor siéntese y póngase cómodo."},
    {t:"Futuro",   q:"S'il vous plaît, n'oubliez pas d'apporter les fleurs.", s:"Por favor no olvide traer las flores."}
  ]},
  {cat:"Expresiones", q:"merci", s:"gracias", col:"#c084fc", note:"'Merci beaucoup' = muchas gracias. 'Merci mille fois' = gracias mil veces.", ex:[
    {t:"Pasado",   q:"Elle a murmuré merci avant de partir.", s:"Ella susurró gracias antes de irse."},
    {t:"Presente", q:"Merci est la plus courte des prières.", s:"Gracias es la oración más corta."},
    {t:"Futuro",   q:"Je dirai toujours merci pour ce cadeau.", s:"Siempre diré gracias por este regalo."}
  ]},
  {cat:"Expresiones", q:"pardon", s:"perdón / disculpe", col:"#c084fc", note:"'Pardon' para disculparse brevemente. 'Excusez-moi' para llamar la atención de alguien.", ex:[
    {t:"Pasado",   q:"Il a dit pardon et elle lui a pardonné.", s:"Él dijo perdón y ella lo perdonó."},
    {t:"Presente", q:"Je demande pardon pour la douleur que j'ai causée.", s:"Pido perdón por el dolor que causé."},
    {t:"Futuro",   q:"Elle demandera pardon quand elle trouvera le courage.", s:"Ella pedirá perdón cuando encuentre el valor."}
  ]},
  {cat:"Expresiones", q:"excusez-moi", s:"disculpe usted (formal)", col:"#c084fc", ex:[
    {t:"Pasado",   q:"Elle a dit excusez-moi et s'est mise de côté.", s:"Ella dijo disculpe y se hizo a un lado."},
    {t:"Presente", q:"Excusez-moi est la manière polie de commencer une question.", s:"Disculpe es la manera educada de empezar una pregunta."},
    {t:"Futuro",   q:"Il dira excusez-moi avant d'interrompre.", s:"Él dirá disculpe antes de interrumpir."}
  ]},
  {cat:"Expresiones", q:"combien ça coûte?", s:"¿cuánto cuesta?", col:"#c084fc", note:"También se dice 'c'est combien?' de manera más informal.", ex:[
    {t:"Pasado",   q:"Elle a demandé combien ça coûte avant d'acheter quoi que ce soit.", s:"Ella preguntó cuánto cuesta antes de comprar nada."},
    {t:"Presente", q:"Combien coûte un rêve?", s:"¿Cuánto cuesta un sueño?"},
    {t:"Futuro",   q:"Elle demandera combien ça coûte avant de décider.", s:"Ella preguntará cuánto cuesta antes de decidir."}
  ]},
  {cat:"Expresiones", q:"je ne comprends pas", s:"no entiendo", col:"#c084fc", note:"Muy útil al aprender un idioma. 'Je ne parle pas bien français' = no hablo bien francés.", ex:[
    {t:"Pasado",   q:"Elle a dit je ne comprends pas et a redemandé.", s:"Ella dijo no entiendo y volvió a preguntar."},
    {t:"Presente", q:"Je ne comprends pas, mais je veux apprendre.", s:"No entiendo, pero quiero aprender."},
    {t:"Futuro",   q:"Un jour elle comprendra ce qu'elle ne pouvait pas avant.", s:"Algún día ella entenderá lo que antes no podía."}
  ]},
  {cat:"Expresiones", q:"pouvez-vous m'aider?", s:"¿puede usted ayudarme?", col:"#c084fc", note:"'Pourriez-vous m'aider?' es aún más educado (condicional).", ex:[
    {t:"Pasado",   q:"Elle a demandé pouvez-vous m'aider et un inconnu s'est arrêté.", s:"Ella preguntó ¿puede ayudarme? y un extraño se detuvo."},
    {t:"Presente", q:"Pouvez-vous m'aider à trouver le bon chemin?", s:"¿Puede ayudarme a encontrar el camino correcto?"},
    {t:"Futuro",   q:"Quand elle sera perdue, elle demandera pouvez-vous m'aider.", s:"Cuando esté perdida, preguntará ¿puede ayudarme?"}
  ]},
  {cat:"Expresiones", q:"je t'aime", s:"te quiero / te amo", col:"#c084fc", note:"'Je t'aime' es informal (tuteo). 'Je vous aime' también existe pero es menos frecuente en el amor romántico.", ex:[
    {t:"Pasado",   q:"Elle a murmuré je t'aime sous les étoiles.", s:"Ella susurró te amo bajo las estrellas."},
    {t:"Presente", q:"Je t'aime plus que les mots ne peuvent le dire.", s:"Te amo más de lo que las palabras pueden decir."},
    {t:"Futuro",   q:"Je t'aimerai dans chaque langue que j'apprendrai.", s:"Te amaré en cada idioma que aprenda."}
  ]}
];
