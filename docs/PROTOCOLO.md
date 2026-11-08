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
