---
description: Tests und Projektregeln prüfen und kurz berichten
---

Prüfe den aktuellen Stand des Projekts:

1. Führe `npm test` aus und nenne Anzahl bestandener, fehlgeschlagener und übersprungener Tests.
2. Prüfe in jeder `index.html` (Hauptordner und `tools/*/`) mit Grep: `alert(` (nur neu hinzugekommene zählen als Problem), `<script src`, `https://` in `<link>`/`<script>`, fehlendes `lang="de"`, fehlendes Viewport-Meta.
3. Prüfe, ob ein `/* LOGIC-START */`-Block mit `const LOGIK` existiert und keinen DOM-Zugriff (`document`, `window`) enthält.
4. Berichte in höchstens 8 Zeilen: was grün ist, was rot oder übersprungen ist und warum, was du nicht prüfen konntest. Ändere nichts, außer ich bitte dich darum.

$ARGUMENTS
