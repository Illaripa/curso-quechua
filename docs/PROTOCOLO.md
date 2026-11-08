# Protocolo Yachay

## 2026-11-08 · Hoy + solo Q/A + diseño "Amanecer andino"
- Qué: pantalla "Hoy" (10 oraciones de completar, falladas vuelven, sube de grupo con 80%) como inicio al elegir Quechua/Aymara; 2 oraciones rotas arregladas; inglés y francés eliminados; tema nuevo blanco + naranja + verde (css/theme.css, Bricolage Grotesque + Figtree).
- Commits: 78b696e · 7bb6633 · aef0623
- Live: SÍ en https://quechua.crea12.ink — verificado con Playwright en móvil sobre producción, sin errores JS.
- Ojo: el webhook GitHub→Hetzner NO dispara; deploy a mano con `ssh root@178.105.173.37 /opt/deploy-quechua.sh`.
- Pendientes:
  - Revisar `docs/FUTURO-REVISION.md` (26 Q + 22 A); al aprobar, cargar `data/futuro.js` en index.html + sw.js (aparece el chip "Futuro").
  - Confirmar "Nuqa sunquypi kanki" → "Qam sunquypi kanki".
  - Arreglar el webhook de deploy.
