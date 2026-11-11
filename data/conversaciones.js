// Conversaciones cortas YA EMPEZADAS (sin saludo), por nivel y tema.
// Quechua: estilo Ayacucho-Chanka, como los diálogos Rimanakusun (-chka-, -m/-mi).
// Aymara: solo formas verbales de la tabla de F. Layme, Gramática Aymara (2011) — ver data/verbs-aymara.js.
const CONVERSACIONES = {
q: [
  // ---------------- NIVEL 1 ----------------
  {lv:1, tema:'Verbos', foco:'-chka- (estar haciendo)', title:'¿Wawqiykiri?',
   context:'Sara y Mayu ya hablan por teléfono. Mayu pregunta por el hermano de Sara.',
   speakers:{Mayu:'#13855F', Sara:'#D9530B'},
   lines:[
    {s:'Mayu', q:'¿Wawqiykiri?', t:'¿Y tu hermano?'},
    {s:'Sara', q:'Payqa puñuchkanmi.', t:'Él está durmiendo.'},
    {s:'Mayu', q:'¿Kunankamachu?', t:'¿Hasta ahora?'},
    {s:'Sara', q:'Arí, qillam.', t:'Sí, es flojo.'}
   ],
   note:'puñu-chka-n = está durmiendo: -chka- es la acción en curso. -ri al final de una palabra = "¿y…?" para seguir la conversación.'},
  {lv:1, tema:'Verbos', foco:'presente simple', title:'Sapa punchaw',
   context:'Kusi y Rosa ya hablan de lo que hacen cada día.',
   speakers:{Kusi:'#13855F', Rosa:'#D9530B'},
   lines:[
    {s:'Kusi', q:'Ñuqaqa sapa punchaw llamkani.', t:'Yo trabajo cada día.'},
    {s:'Rosa', q:'¿Domingopas?', t:'¿El domingo también?'},
    {s:'Kusi', q:'Manam, domingoqa samani.', t:'No, el domingo descanso.'},
    {s:'Rosa', q:'Allinmi. Ñuqapas samani.', t:'Bien. Yo también descanso.'}
   ],
   note:'llamka-ni, sama-ni: -ni = yo (presente). -pas = también. -qa marca de qué se habla (el tema).'},
  {lv:1, tema:'Sufijos', foco:'-man · -wan · -pi', title:'Plazaman',
   context:'Lucho ya le está diciendo a su mamá adónde va.',
   speakers:{Lucho:'#13855F', Mama:'#D9530B'},
   lines:[
    {s:'Lucho', q:'Plazamanmi richkani.', t:'Voy a la plaza.'},
    {s:'Mama', q:'¿Pikunawan?', t:'¿Con quiénes?'},
    {s:'Lucho', q:'Masiykunawan. Chaypim pukllasaqku.', t:'Con mis amigos. Ahí jugaremos.'},
    {s:'Mama', q:'Allinmi. Utqaylla kutimuy.', t:'Bien. Vuelve rápido.'}
   ],
   note:'-man = a, hacia (plaza-man). -wan = con (masiykuna-wan). -pi = en (chay-pi = ahí).'},
  {lv:1, tema:'Sufijos', foco:'-kuna · -y · -yki', title:'Turiykuna',
   context:'Rosa ya le está enseñando fotos de su familia a Lucía.',
   speakers:{Rosa:'#13855F', Lucía:'#D9530B'},
   lines:[
    {s:'Rosa', q:'Kaykunam turiykuna.', t:'Estos son mis hermanos.'},
    {s:'Lucía', q:'¿Hayka turiykitaq kan?', t:'¿Cuántos hermanos tienes?'},
    {s:'Rosa', q:'Kimsam. Kaymi kuraq turiy.', t:'Tres. Este es mi hermano mayor.'},
    {s:'Lucía', q:'¿Maypitaq paykuna tiyanku?', t:'¿Dónde viven ellos?'},
    {s:'Rosa', q:'Limapim tiyanku.', t:'Viven en Lima.'}
   ],
   note:'-kuna = plural. turi-y = mi hermano, turi-yki = tu hermano. Una mujer dice turi (hermano); un hombre dice wawqi.'},
  {lv:1, tema:'Preguntas', foco:'imata · pipaq', title:'¿Imatataq yanuchkanki?',
   context:'Wayra ya está en la cocina con su abuela.',
   speakers:{Wayra:'#13855F', Awicha:'#D9530B'},
   lines:[
    {s:'Wayra', q:'¿Imatataq yanuchkanki, awicháy?', t:'¿Qué estás cocinando, abuelita?'},
    {s:'Awicha', q:'Lawatam yanuchkani.', t:'Estoy cocinando sopa.'},
    {s:'Wayra', q:'¿Pipaqtaq?', t:'¿Para quién?'},
    {s:'Awicha', q:'Llapanchikpaqmi.', t:'Para todos nosotros.'},
    {s:'Wayra', q:'¡Añallaw!', t:'¡Qué rico!'}
   ],
   note:'ima-ta = qué (como objeto). pi-paq = para quién: -paq = para. -taq acompaña a las preguntas.'},
  {lv:1, tema:'Preguntas', foco:'haykaq · maypi', title:'¿Haykaqtaq chayamurqanki?',
   context:'Inti y Killa ya conversan en el bus.',
   speakers:{Inti:'#13855F', Killa:'#D9530B'},
   lines:[
    {s:'Inti', q:'¿Haykaqtaq Limaman chayamurqanki?', t:'¿Cuándo llegaste a Lima?'},
    {s:'Killa', q:'Qayna watam.', t:'El año pasado.'},
    {s:'Inti', q:'¿Maypitaq tiyachkanki?', t:'¿Dónde estás viviendo?'},
    {s:'Killa', q:'Tiyuypa wasinpim.', t:'En la casa de mi tío.'}
   ],
   note:'haykaq = cuándo. maypi = dónde. tiyuy-pa wasi-n = la casa de mi tío: -pa … -n marca de quién es algo.'},
  {lv:1, tema:'Vida diaria', foco:'en el mercado', title:'¿Haykataq?',
   context:'Lucho ya está en el puesto de papas de doña Juana.',
   speakers:{Lucho:'#13855F', Juana:'#D9530B'},
   lines:[
    {s:'Lucho', q:'¿Haykataq kay papa?', t:'¿Cuánto cuesta esta papa?'},
    {s:'Juana', q:'Iskay solesmi huk kilo.', t:'Dos soles el kilo.'},
    {s:'Lucho', q:'Kimsa kilota quway.', t:'Dame tres kilos.'},
    {s:'Juana', q:'Kaypim. Yapantapas churapuykim.', t:'Aquí está. Te pongo también la yapa.'}
   ],
   note:'hayka = cuánto. qu-wa-y = dame (-wa- = a mí). yapa = lo que se regala de más al comprar.'},
  {lv:1, tema:'Vida diaria', foco:'quedar con alguien', title:'¿Paqarin hamunkichu?',
   context:'Kusi y Mayu ya están quedando para mañana.',
   speakers:{Kusi:'#13855F', Mayu:'#D9530B'},
   lines:[
    {s:'Kusi', q:'Chaynaqa, ¿paqarin hamunkichu?', t:'Entonces, ¿vienes mañana?'},
    {s:'Mayu', q:'Manam yachanichu, llamkanaymi kan.', t:'No sé, tengo que trabajar.'},
    {s:'Kusi', q:'¿Tutapiri?', t:'¿Y en la noche?'},
    {s:'Mayu', q:'Arí, tutaqa hamusaqmi.', t:'Sí, en la noche vendré.'},
    {s:'Kusi', q:'¡Allinmi! Suyasqaykim.', t:'¡Bien! Te esperaré.'}
   ],
   note:'Chaynaqa = entonces (para seguir lo que ya se habló). hamu-saq = vendré. suya-sqayki = te esperaré.'},

  // ---------------- NIVEL 2 ----------------
  {lv:2, tema:'Verbos', foco:'-rqa- (pasado)', title:'Qatuman rirqani',
   context:'Sara ya le está contando a Mayu su fin de semana.',
   speakers:{Sara:'#13855F', Mayu:'#D9530B'},
   lines:[
    {s:'Sara', q:'…hinaspa mamaywan qatuman rirqani.', t:'…y luego fui al mercado con mi mamá.'},
    {s:'Mayu', q:'¿Imatataq rantirqankichik?', t:'¿Qué compraron?'},
    {s:'Sara', q:'Sarata, kinuatawan rantirqaniku.', t:'Compramos maíz y quinua.'},
    {s:'Mayu', q:'¿Hinaspari?', t:'¿Y después?'},
    {s:'Sara', q:'Wasipim mikurqaniku.', t:'Comimos en casa.'}
   ],
   note:'-rqa- = pasado: ri-rqa-ni (fui), ranti-rqa-niku (compramos). -niku = nosotros (sin ti). -chik = ustedes.'},
  {lv:2, tema:'Verbos', foco:'futuro -saq · -nki · -nqa', title:'Sabadopi ripunki',
   context:'William y su hermana Rogelia ya hablan del viaje de ella.',
   speakers:{William:'#13855F', Rogelia:'#D9530B'},
   lines:[
    {s:'William', q:'Hinaptinqa, ¿sabadopi ripunki?', t:'Entonces, ¿te vas el sábado?'},
    {s:'Rogelia', q:'Arí, tutallamantam ripusaq.', t:'Sí, me iré muy temprano.'},
    {s:'William', q:'¿Pitaq wasiykita qawanqa?', t:'¿Quién cuidará tu casa?'},
    {s:'Rogelia', q:'Ñañaymi qawanqa.', t:'Mi hermana la cuidará.'},
    {s:'William', q:'¡Allinlla puriy!', t:'¡Buen viaje!'}
   ],
   note:'Futuro: ripu-saq (me iré), ripu-nki (te irás), qawa-nqa (cuidará). Una mujer dice ñaña a su hermana; un hombre dice pani.'},
  {lv:2, tema:'Sufijos', foco:'-raq · -kama · -lla · -ña', title:'¿Karuraqchu?',
   context:'Inti y Waman ya llevan rato caminando.',
   speakers:{Inti:'#13855F', Waman:'#D9530B'},
   lines:[
    {s:'Inti', q:'¿Karuraqchu?', t:'¿Todavía está lejos?'},
    {s:'Waman', q:'Manam, chay urqukamallam.', t:'No, solo hasta ese cerro.'},
    {s:'Inti', q:'Pisipasqañam kachkani.', t:'Ya estoy cansado.'},
    {s:'Waman', q:'Chaymantaqa samasunchik.', t:'Después de eso descansaremos.'}
   ],
   note:'-raq = todavía. -kama = hasta. -lla = solo. -ña = ya. sama-sunchik = descansaremos (tú y yo).'},
  {lv:2, tema:'Sufijos', foco:'-ña · -raq · -chu', title:'¿Tukurqankiñachu?',
   context:'La mamá ya está preguntando a su hijo por la tarea.',
   speakers:{Mama:'#13855F', Wawa:'#D9530B'},
   lines:[
    {s:'Mama', q:'¿Tukurqankiñachu?', t:'¿Ya terminaste?'},
    {s:'Wawa', q:'Manaraqmi, mamáy.', t:'Todavía no, mamá.'},
    {s:'Mama', q:'¿Imanaptintaq?', t:'¿Por qué?'},
    {s:'Wawa', q:'Pukllachkarqanim.', t:'Estaba jugando.'},
    {s:'Mama', q:'Kunanyá ruray.', t:'¡Hazlo ya!'}
   ],
   note:'-ña = ya, -raq = todavía (mana-raq = todavía no). -chu = pregunta de sí/no. puklla-chka-rqa-ni = estaba jugando.'},
  {lv:2, tema:'Preguntas', foco:'imanaptin · haykaq', title:'¿Imanaptintaq?',
   context:'Killa ya nota que su amiga Qawa está triste.',
   speakers:{Killa:'#13855F', Qawa:'#D9530B'},
   lines:[
    {s:'Killa', q:'¿Imanaptintaq llakisqa kachkanki?', t:'¿Por qué estás triste?'},
    {s:'Qawa', q:'Allquymi chinkarqun.', t:'Mi perro se perdió.'},
    {s:'Killa', q:'¿Haykaqtaq?', t:'¿Cuándo?'},
    {s:'Qawa', q:'Qayna tutam.', t:'Anoche.'},
    {s:'Killa', q:'Ama llakikuychu, maskasunchikmi.', t:'No te preocupes, lo buscaremos.'}
   ],
   note:'imanaptin = por qué. ama … -chu = no (para pedir: "no te preocupes"). maska-sunchik = buscaremos (tú y yo).'},
  {lv:2, tema:'Preguntas', foco:'mayqin · hayka', title:'¿Mayqintaq?',
   context:'Ana ya está escogiendo una manta en la feria.',
   speakers:{Ana:'#13855F', Rufina:'#D9530B'},
   lines:[
    {s:'Ana', q:'¿Mayqintaq aswan allin?', t:'¿Cuál es mejor?'},
    {s:'Rufina', q:'Kay pukam, millwamanta.', t:'Esta roja, es de lana.'},
    {s:'Ana', q:'¿Haykataq?', t:'¿Cuánto cuesta?'},
    {s:'Rufina', q:'Pachak solesmi.', t:'Cien soles.'}
   ],
   note:'mayqin = cuál. aswan allin = mejor (más bueno). millwa-manta = de lana: -manta dice de qué está hecho algo.'},
  {lv:2, tema:'Vida diaria', foco:'familia y salud', title:'Hampiqman',
   context:'Lidia ya le está contando a Carlos que su abuelo está enfermo.',
   speakers:{Lidia:'#13855F', Carlos:'#D9530B'},
   lines:[
    {s:'Lidia', q:'…chaymi hampiqman pusarqaniku.', t:'…por eso lo llevamos al médico.'},
    {s:'Carlos', q:'¿Imatataq nirqa?', t:'¿Qué dijo?'},
    {s:'Lidia', q:'Samananmi nin.', t:'Dice que tiene que descansar.'},
    {s:'Carlos', q:'Allinmi. Prontolla allinyachun.', t:'Bien. Que se mejore pronto.'}
   ],
   note:'chaymi = por eso. sama-na-n = tiene que descansar. allin-ya-chun = que se mejore (-chun = que…).'},
  {lv:2, tema:'Vida diaria', foco:'el tiempo', title:'Paramunqañam',
   context:'Pedro y Juana ya están mirando el cielo desde la chacra.',
   speakers:{Pedro:'#13855F', Juana:'#D9530B'},
   lines:[
    {s:'Pedro', q:'Paramunqañam.', t:'Ya va a llover.'},
    {s:'Juana', q:'Arí, yana puyukuna hamuchkanku.', t:'Sí, vienen nubes negras.'},
    {s:'Pedro', q:'Chaynaqa wasiman haykusunchik.', t:'Entonces entremos a la casa.'},
    {s:'Juana', q:'Arí, utqaylla.', t:'Sí, rápido.'}
   ],
   note:'para-mu-nqa-ña = ya va a llover. haykusunchik = entremos (tú y yo). puyu = nube.'},

  // ---------------- NIVEL 3 ----------------
  {lv:3, tema:'Verbos', foco:'-sqa · -si (me contaron)', title:'Ripusqa',
   context:'Rosa ya le está contando a Lucía una noticia del pueblo.',
   speakers:{Rosa:'#13855F', Lucía:'#D9530B'},
   lines:[
    {s:'Rosa', q:'…Pedroqa Limaman ripusqa.', t:'…resulta que Pedro se fue a Lima.'},
    {s:'Lucía', q:'¿Chiqaptachu? ¿Pitaq willasunki?', t:'¿De verdad? ¿Quién te contó?'},
    {s:'Rosa', q:'Mamanmi willawarqa.', t:'Su mamá me contó.'},
    {s:'Lucía', q:'Llamkaqsi ripusqa.', t:'Dicen que se fue a trabajar.'}
   ],
   note:'ripu-sqa = se fue (no lo vi, me enteré). -si = dicen que. llamka-q = a trabajar (-q = para, con verbos de ir).'},
  {lv:3, tema:'Verbos', foco:'-man (haría)', title:'Achka qullqiyuq kaspaqa',
   context:'Inti y Waman ya están soñando despiertos.',
   speakers:{Inti:'#13855F', Waman:'#D9530B'},
   lines:[
    {s:'Inti', q:'Achka qullqiyuq kaspaqa, wasita rantiyman.', t:'Si tuviera mucho dinero, compraría una casa.'},
    {s:'Waman', q:'Ñuqaqa llapa Perúta puriyman.', t:'Yo recorrería todo el Perú.'},
    {s:'Inti', q:'¿Sapallaykichu?', t:'¿Tú solo?'},
    {s:'Waman', q:'Manam, qamwanmi purisunman.', t:'No, lo recorreríamos tú y yo.'}
   ],
   note:'-man = condicional: ranti-y-man (compraría), puri-sun-man (recorreríamos tú y yo). ka-spa-qa = si fuera / siendo.'},
  {lv:3, tema:'Sufijos', foco:'-pu- · -mu- · -ku-', title:'Apapuway',
   context:'La mamá y Lucho ya están preparando la fiesta.',
   speakers:{Mama:'#13855F', Lucho:'#D9530B'},
   lines:[
    {s:'Mama', q:'Kay qipita apapuway.', t:'Llévame este bulto (hazme el favor).'},
    {s:'Lucho', q:'Arí. ¿Tantatapas rantimusaqchu?', t:'Sí. ¿Voy también a comprar pan?'},
    {s:'Mama', q:'Arí, rantimuy. Utqaylla kutimuy.', t:'Sí, ve a comprarlo. Vuelve rápido.'},
    {s:'Lucho', q:'Ama llakikuychu, mamáy.', t:'No te preocupes, mamá.'}
   ],
   note:'-pu- = por/para alguien (apa-pu-wa-y). -mu- = ir y volver, o hacia acá (ranti-mu-y). -ku- = sobre uno mismo (llaki-ku-y).'},
  {lv:3, tema:'Sufijos', foco:'-spa · -qtin · -q karqani', title:'Wayna kaspa',
   context:'Tayta Mariano ya le está contando a Wayra cómo era su vida antes.',
   speakers:{Mariano:'#13855F', Wayra:'#D9530B'},
   lines:[
    {s:'Mariano', q:'Wayna kaspa, sapa punchawmi chakrapi llamkaq karqani.', t:'De joven, trabajaba cada día en la chacra.'},
    {s:'Wayra', q:'¿Iskuylaman rirqankichu?', t:'¿Fuiste a la escuela?'},
    {s:'Mariano', q:'Manam. Taytay wañuqtinmi llamkanay karqa.', t:'No. Cuando murió mi papá, tuve que trabajar.'},
    {s:'Wayra', q:'Sinchi sasa kasqa.', t:'Debió ser muy difícil.'}
   ],
   note:'ka-spa = siendo (la misma persona). wañu-qtin = cuando murió (otra persona). llamka-q karqani = solía trabajar.'},
  {lv:3, tema:'Preguntas', foco:'-raq · -chá', title:'¿Maypiraq?',
   context:'Rogelia y Sara ya llevan rato esperando a Túpac.',
   speakers:{Rogelia:'#13855F', Sara:'#D9530B'},
   lines:[
    {s:'Rogelia', q:'¿Maypiraq Túpac kachkan?', t:'¿Dónde estará Túpac?'},
    {s:'Sara', q:'Llamkachkanraqchá.', t:'Quizás todavía está trabajando.'},
    {s:'Rogelia', q:'¿Waqyasunchikchu?', t:'¿Lo llamamos?'},
    {s:'Sara', q:'Arí, waqyay.', t:'Sí, llámalo.'}
   ],
   note:'maypi-raq = ¿dónde estará? (-raq en una pregunta = me pregunto). -chá = quizás. waqya-sunchik-chu = ¿llamamos (tú y yo)?'},
  {lv:3, tema:'Preguntas', foco:'imaynata · -spa · -chi-', title:'¿Imaynatataq?',
   context:'Ana ya le está preguntando a su abuela cómo hace la chicha.',
   speakers:{Ana:'#13855F', Awicha:'#D9530B'},
   lines:[
    {s:'Ana', q:'¿Imaynatataq aswata ruranki?', t:'¿Cómo haces la chicha?'},
    {s:'Awicha', q:'Wiñaputa kutaspa, yakupi timpuchini.', t:'Muelo la jora y la hago hervir en agua.'},
    {s:'Ana', q:'¿Hayka punchawtaq?', t:'¿Cuántos días?'},
    {s:'Awicha', q:'Kimsa punchawmantaqa upyakunñam.', t:'Después de tres días ya se toma.'}
   ],
   note:'imayna-ta = cómo. kuta-spa = moliendo. timpu-chi-ni = hago hervir (-chi- = hacer que pase algo).'},
  {lv:3, tema:'Vida diaria', foco:'por teléfono · -wa- · -yki', title:'¿Uyariwankichu?',
   context:'Mayu y Brian ya hablan por teléfono, pero la señal es mala.',
   speakers:{Mayu:'#13855F', Brian:'#D9530B'},
   lines:[
    {s:'Mayu', q:'¿Uyariwankichu?', t:'¿Me escuchas?'},
    {s:'Brian', q:'Pisillatam uyariyki.', t:'Te escucho poquito.'},
    {s:'Mayu', q:'Chaynaqa, qipaman waqyamusqayki.', t:'Entonces te llamo después.'},
    {s:'Brian', q:'Allinmi, suyasqaykim.', t:'Bien, te esperaré.'}
   ],
   note:'uyari-wa-nki = me escuchas (-wa- = a mí). uyari-yki = te escucho (yo → tú). -sqayki = yo → tú en futuro.'},
  {lv:3, tema:'Vida diaria', foco:'discutir · -ñataq', title:'Qamñataq',
   context:'Lucho y su hermano Marco ya discuten quién lava las ollas.',
   speakers:{Lucho:'#13855F', Marco:'#D9530B'},
   lines:[
    {s:'Lucho', q:'Qamñataq mankakunata mayllay.', t:'Ahora te toca a ti lavar las ollas.'},
    {s:'Marco', q:'¿Imanaptin? Qayna ñuqam mayllarqani.', t:'¿Por qué? Ayer lavé yo.'},
    {s:'Lucho', q:'¡Llullakuchkankim! Qayna ñuqam karqani.', t:'¡Mientes! Ayer fui yo.'},
    {s:'Marco', q:'Hinaptinqa, kuska mayllasunchik.', t:'Entonces lavemos juntos.'}
   ],
   note:'qam-ñataq = ahora tú (cambio de turno). llulla-ku-chka-nki = estás mintiendo. kuska = juntos.'}
],
a: [
  // Formas verbales tomadas tal cual de la tabla de Layme (verbs-aymara.js).
  {lv:1, tema:'Verbos', foco:'-th (yo) · -ru', title:'Utaru kutthwa',
   context:'Mara y Wayra ya se están despidiendo en la calle.',
   speakers:{Mara:'#13855F', Wayra:'#D9530B'},
   lines:[
    {s:'Mara', q:'Nayaxa yatiña utaru sarthwa.', t:'Yo voy a la escuela.'},
    {s:'Wayra', q:'Nayaxa utaru kutthwa.', t:'Yo regreso a la casa.'},
    {s:'Mara', q:'Waliki. Jikisiñkama.', t:'Está bien. Hasta luego.'}
   ],
   note:'sar-th-wa = voy: -th = yo, -wa = afirmación. uta-ru = a la casa: -ru = a, hacia. -xa = de quién se habla.'},
  {lv:1, tema:'Sufijos', foco:'-ja · -ma · -sti', title:'¿Tatamasti?',
   context:'Tupaq y Sisa ya hablan de sus familias.',
   speakers:{Tupaq:'#13855F', Sisa:'#D9530B'},
   lines:[
    {s:'Tupaq', q:'Mamajaxa phayiwa.', t:'Mi mamá cocina.'},
    {s:'Sisa', q:'¿Tatamasti?', t:'¿Y tu papá?'},
    {s:'Tupaq', q:'Tatajaxa irnaqiwa.', t:'Mi papá trabaja.'},
    {s:'Sisa', q:'¿Kullakamasti?', t:'¿Y tu hermana?'},
    {s:'Tupaq', q:'Kullakajaxa liyiwa.', t:'Mi hermana lee.'}
   ],
   note:'mama-ja = mi mamá, tata-ma = tu papá. -sti = "¿y…?". phay-i-wa: -i = él / ella.'},
  {lv:2, tema:'Verbos', foco:'futuro -ä · -ñäni', title:'Markaru saräwa',
   context:'Sisa y Tupaq ya hablan del fin de semana.',
   speakers:{Sisa:'#13855F', Tupaq:'#D9530B'},
   lines:[
    {s:'Sisa', q:'Nayaxa markaru saräwa.', t:'Yo iré al pueblo.'},
    {s:'Tupaq', q:'Nayaxa jumampi saräwa.', t:'Yo iré contigo.'},
    {s:'Sisa', q:'Waliki. Jiwasaxa markana thuqhuñäniwa.', t:'Bien. Tú y yo bailaremos en el pueblo.'}
   ],
   note:'sar-ä-wa = iré. thuqhu-ñäni-wa = bailaremos (tú y yo). juma-mpi = contigo: -mpi = con. marka-na = en el pueblo.'},
  {lv:2, tema:'Sufijos', foco:'-taki · -naka', title:'Jupanakataki',
   context:'Sisa y su mamá ya están en la cocina.',
   speakers:{Mama:'#13855F', Sisa:'#D9530B'},
   lines:[
    {s:'Mama', q:'Jupanakataki phayäwa.', t:'Cocinaré para ellos.'},
    {s:'Sisa', q:'Nayaxa yanapäwa.', t:'Yo ayudaré.'},
    {s:'Mama', q:'Waliki, yuspagara.', t:'Bien, gracias.'}
   ],
   note:'jupa-naka = ellos (-naka = plural). jupanaka-taki = para ellos (-taki = para). phay-ä-wa = cocinaré.'},
  {lv:3, tema:'Verbos', foco:'pasado (lo vi)', title:'Thuqhupxänwa',
   context:'Tupaq y Sisa ya hablan de la fiesta de ayer.',
   speakers:{Tupaq:'#13855F', Sisa:'#D9530B'},
   lines:[
    {s:'Tupaq', q:'Jupanakaxa thuqhupxänwa.', t:'Ellos bailaron.'},
    {s:'Sisa', q:'¿Jumasti?', t:'¿Y tú?'},
    {s:'Tupaq', q:'Nayaxa manq\'ayäthwa, umayäthwa.', t:'Yo comí y bebí.'},
    {s:'Sisa', q:'Nayaxa utaru kutiyäthwa.', t:'Yo regresé a casa.'}
   ],
   note:'Pasado que uno vio: manq\'a-yä-th-wa (comí), kuti-yä-th-wa (regresé). -pxa- = varias personas: thuqhu-pxä-n-wa (ellos bailaron).'},
  {lv:3, tema:'Sufijos', foco:'-mpi · pasado', title:'Tatamaxa purïnwa',
   context:'Mara ya le está dando una noticia a Wayra.',
   speakers:{Mara:'#13855F', Wayra:'#D9530B'},
   lines:[
    {s:'Mara', q:'Tatamaxa purïnwa.', t:'Tu papá llegó.'},
    {s:'Wayra', q:'Jisa, nayaxa jupampi parlayäthwa.', t:'Sí, yo hablé con él.'},
    {s:'Mara', q:'Waliki.', t:'Está bien.'}
   ],
   note:'pur-ï-n-wa = llegó (él). jupa-mpi = con él. parla-yä-th-wa = hablé.'}
]
};
