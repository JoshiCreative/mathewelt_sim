---
description: Neues Mathe-Tool aus der Vorlage anlegen
argument-hint: <ordnername> [Thema]
---

Lege ein neues Tool an: `$ARGUMENTS`

1. Frage mich mit höchstens 3 Fragen (am besten gebündelt als Auswahlfragen): Lernziel, Klassenstufe, welcher Schritt des Lernpfads (Beobachten, Vorhersage, Selbst bauen) im Mittelpunkt steht.
2. Kopiere `vorlage/tool-vorlage.html` nach `tools/<ordnername>/index.html` und passe Titel, Texte und Mathe-Logik an. Bleibe bei den Regeln aus `CLAUDE.md` (eine Datei, Vanilla-JS, `LOGIC-START`/`LOGIC-END`, `const LOGIK`).
3. Schreibe zuerst Tests für die neue Mathe-Logik in `tests/<ordnername>.test.mjs` (Muster: `tests/vorlage.test.mjs`), sieh sie rot, dann implementiere, bis sie grün sind.
4. Führe `npm test` aus und gehe `/tablet-check` durch.
5. Fasse in höchstens 5 Zeilen zusammen und schlage einen nächsten Schritt vor.
