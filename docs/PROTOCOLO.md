# Protocolo Yachay

## 2026-11-08 · Banco grande: +1.358 oraciones (temas)
- Qué: `tools/gen-completar.cjs` genera `data/completar-extra.js` desde textos reales de la app: diálogos (Q 484) y letras de canciones (Q 581, A 293). En Hoy aparecen chips de tema: Básico · Diálogos · Canciones (· Futuro cuando se active).
- Regenerar: `node tools/gen-completar.cjs` (mismo resultado siempre, semilla fija).
- Live: ver commit siguiente; verificado con Playwright.
- AVISO calidad: `verbs-aymara.js` tiene conjugaciones mal (p.ej. "Sarawa" por saraktha) y `wordorder-extended.js` aymara mezcla quechua → NO usar como fuente hasta revisarlos.

## 2026-11-08 · Hoy + solo Q/A + diseño "Amanecer andino"
- Qué: pantalla "Hoy" (10 oraciones de completar, falladas vuelven, sube de grupo con 80%) como inicio al elegir Quechua/Aymara; 2 oraciones rotas arregladas; inglés y francés eliminados; tema nuevo blanco + naranja + verde (css/theme.css, Bricolage Grotesque + Figtree).
- Commits: 78b696e · 7bb6633 · aef0623
- Live: SÍ en https://quechua.crea12.ink — verificado con Playwright en móvil sobre producción, sin errores JS.
- Ojo: el webhook GitHub→Hetzner NO dispara; deploy a mano con `ssh root@178.105.173.37 /opt/deploy-quechua.sh`.
- Pendientes:
  - Revisar `docs/FUTURO-REVISION.md` (26 Q + 22 A); al aprobar, cargar `data/futuro.js` en index.html + sw.js (aparece el chip "Futuro").
  - Confirmar "Nuqa sunquypi kanki" → "Qam sunquypi kanki".
  - Arreglar el webhook de deploy.

## 2026-11-08 — Revisión de calidad + racha + modo escribir
**Qué:**
- Aymara: fuera del menú Verbos, Completar, Ordenar palabras, Fichas (VERBOS_A), Fichas vocab (eran palabras quechua), Escuchar (VERBOS_A). Motivo: verbos con significados falsos (Ikiña≠correr, Taquiña≠bailar…), ordenar palabras con "katjata" repetido, COMPLETAR_A mezcla quechua (-mi, tukuy sunqumpi, hatun raymi).
- Hoy aymara: solo tema Canciones (145, de la sección VERIFICADO de songs-aymara.js). "Básico" (COMPLETAR_A) excluido en hoy.js.
- Diccionario oculto en ambos idiomas (pares erróneos, p. ej. "Riti = Hola"; riti = nieve).
- Generador: descarta líneas en español y palabras que aparecen en las traducciones. Banco: Q diálogos 483, Q canciones 534, A canciones 145.
- Racha diaria (yachay_racha): +1 al terminar una sesión; se muestra en Hoy y en el menú (sustituye la racha de visitas).
- Modo escribir: oración acertada a la primera → la próxima vez se escribe (solo respuestas de 1 palabra); tolera tildes/mayúsculas/apóstrofo y 1 letra en palabras ≥5; "Ver opciones" no cuenta como acierto limpio.
- Menú: 4 módulos a la vista + "Más ejercicios" plegado.
- Marrón #c47d1a eliminado (js, index, variables.css, manifest).
**Datos NO corregidos (necesitan fuente fiable o hablante nativo):** verbs-aymara.js, wordorder A, COMPLETAR_A, common-vocabulary.js, content-aymara.js nivel 2+ (rasgos quechua), traducciones de canciones aymara "PENDIENTE". verbs-quechua.js: "Hampiy = Venir" (es curar) y notas de sufijos incoherentes.
**Live:** sí (ver commit).

## 2026-11-08 — Verbos quechua: Hampiy + categorías
- Hampiy = "Curar / sanar" (antes "Venir"); quitados 2 ejemplos falsos ("Ellos vinieron ayer", "Vengo a tu casa"). Categoría Acción.
- Categorías unificadas con tilde (Accion/Acción, Cognicion, Creacion, Emocion, Percepcion salían duplicadas en las pestañas).
- verbs-quechua.js?v=3, sw yachay-v27. Live: sí (verificado con curl).
- Pendiente: notas de sufijos de los ejemplos (incoherentes, p. ej. "-pu-" donde no aparece); fuente aymara; FUTURO-REVISION.md.

## 2026-11-08 — Hoy más interactivo + sufijos
- Hoy: auto-avance tras acierto (2,5 s, se para al tocar la tarjeta; desactivado con reduced-motion; no corre fuera de Hoy), serie ×N, sonido WebAudio + vibración (botón 🔊 con aria-pressed), teclas 1-4/Enter, confeti ≥80%, lista "Para repasar" al final, foco gestionado.
- Verbos Q: quitadas 55 notas de sufijos ausentes en su frase (no se añadió nada).
- "Nuqa sunquypi kanki" → "Qam sunquypi kanki" (permiso de Illaripa: "puedes cambiar todo").
- Revisor: CAMBIOS REQUERIDOS (timer fuera de Hoy, timer no detenible, foco, contraste verde 4,18) → aplicados y probados.
- sw yachay-v28. Live: sí.
- Pendiente: sufijos presentes pero mal explicados (p. ej. -chi- en -sunchis) necesitan revisión gramatical; sin audio (no hay voz quechua en navegador); aymara oculto sin fuente.

## 2026-11-08 — Paleta profesional + verbos quechua limpios
- Diseño: fuera degradados naranja→verde. Paleta: verde marca #13855F, naranja #D9530B solo en acciones, neutros verdosos; cabecera clara (el usuario dijo "muy oscuro" al verde profundo). Quitados restos crema/marrón/ámbar (flashcards, home, morning, chat, morning.js inline), sin cursiva en toda la app, pestañas de referencia sin scroll horizontal, botones desactivados neutros, theme-color #FFFFFF.
- Verbos Q: tablas regeneradas por regla (1pl excl. -rqayku / -saqku, 3pl fut. -nqaku; 6 verbos rotos arreglados; Ñiy→Niy); 26 verbos duplicados fusionados (167→141); 666→402 ejemplos (fuera: aymara, verbo mal formado, sin concordancia, "ama" sin imperativo, duplicados); -m tras consonante → -mi; notas de sufijos regeneradas desde la frase; tildes del español en futuros y palabras comunes. Script: scratchpad suf/fix.cjs.
- Revisor: CAMBIOS REQUERIDOS → aplicados. Live: sí. sw yachay-v31.
- Pendiente: Yanapay, Phiñakuy, Piñay, Unaychay sin ejemplos; traducciones al español no verificadas una a una; aymara oculto.

## 2026-11-08 — Página de revisión para hablante nativo
- https://claude.ai/artifact/18g3fDa66BYwAhMRFTfmnv ("Revisión Runasimi"): las 402 frases de verbos Q; el revisor marca Bien/Mal + corrección; se guarda en la colección db "revisiones" (doc id = "e"+hash djb2 de "Verbo|frase"; fuente: scratchpad revision/data.json).
- Para que el revisor pueda marcar: compartir desde el menú Share invitándolo por email como Editor (sin enlace público).
- Siguiente paso: leer "revisiones" con ArtifactData y aplicar las correcciones a data/verbs-quechua.js.

## 2026-11-09 — Aymara reconstruido con fuentes oficiales
- Fuentes: F. Layme Pairumani, "Gramática Aymara" (La Paz, 2011) y "Vocabulario Pedagógico de la Lengua Aymara" (IPELC-ILCNA, 2020), PDFs públicos en aymaraclub.com. (Minedu Perú bloquea con anti-robots: no se usó.)
- Verbos A: 44 verbos con significado de Layme pp. 101-102, 125, 156; conjugación por regla de pp. 110, 125, 127-128, 196 (presente -th/-ta/-i/-tan, futuro -ä/-äta/-ni/-ñäni, pasado testimonial -yäth/-yäta/-¨n/-yätan, plural -pxa-). Comprobadas contra formas del libro (sarapxayäthwa, munapxänwa, thuqhupxiwa, purthwa…). 3 ejemplos por verbo. Etiquetas Nayanaka/Jumanaka.
- Hoy Aymara: tema "Verbos" (528 ejercicios: Presente → Futuro → Pasado) + Canciones.
- Quiz A: 132 preguntas desde los verbos; QUIZ_A_EXT vaciado (palabras inventadas).
- Sufijos A: rehecho, 30 sufijos con ejemplo y página de Layme.
- Frases A: solo nivel 1, corregidas (Sutijaxa…, Jikisiñkama). Poesía y Leyendas A ocultas (mezclaban quechua: huk, mana, lluqsi-). Fichas y Verbos A vuelven al menú.
- Reverso de fichas: verde sólido (quedaba oliva/marrón).
- Live: sí. sw yachay-v33. Generador: scratchpad aymara/build.cjs.
- Pendiente: diccionario/vocabulario A, Ordenar y Escuchar A siguen ocultos.
