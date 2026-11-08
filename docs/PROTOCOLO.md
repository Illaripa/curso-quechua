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
