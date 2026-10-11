# Mathe-Tools – Projektanweisungen für Claude

## Worum es geht
Digitale Lern-Tools (Simulationen) für Mathematik/MINT. Aktuelles Tool: **„Mathewelt – Wasser aufteilen"** (Ausgleichswert; Teams Unicorns und Mathe-Asse; Becher, Pipette, Anfänger- und Expertenmodus).

- Zielgruppe: Grundschule (4. Klasse) bis Sekundarstufe I; Workshop mit einer 6. Klasse im Februar 2027; iPad-Version bis Dezember 2026.
- Entwickler: Lehramtsstudent (Mathe/Physik), kein Profi-Entwickler. Erkläre knapp und in einfachen Worten, was du geändert hast und wie ich es prüfen kann.
- Kontext: Portfolio „Bildungsprodukt MINT" (Raster in `docs/bewertungsraster.md`) sowie spätere Weiterentwicklung in Forschungsprojekt und Hiwi-Stelle. Alles muss nachvollziehbar bleiben.

@docs/didaktik.md

## Technik-Regeln (nicht verhandelbar)
- Jedes Tool ist **eine einzelne `index.html`** (HTML + CSS + Vanilla-JS). Kein Framework, kein Build-Schritt, keine CDN-/Fremd-Abhängigkeiten (Schul-WLAN, Offline-Betrieb).
- **Am vorhandenen Code arbeiten.** Keine Neuentwicklung, kein Framework-Wechsel, funktionierende Features nie entfernen. Im Zweifel fragen.
- **Tablet zuerst:** Touch-Flächen mindestens 44 px, nichts, das nur per Hover funktioniert (Tooltips brauchen eine Tap-Alternative), kein Drag-only, Hoch- und Querformat.
- Oberfläche auf **Deutsch**, kindgerecht, kurze Sätze. Neue Rückmeldungen als Text auf der Seite, nicht per `alert()`.
- **Keine personenbezogenen Daten von Kindern.** Gespeichert wird höchstens die Moduswahl in `sessionStorage`. Keine Tracker, keine externen Requests.
- Barrierefreiheit: gute Kontraste, Team-Unterscheidung nie nur über Farbe (zusätzlich Text/Symbol).
- Neue Tools liegen unter `tools/<name>/index.html`, das MatheWelt-Tool bleibt `index.html` im Hauptordner (GitHub Pages).
- Den Quellcode des Dozenten-Tools „Wasserlabor" nicht kopieren; übernommen wird nur der didaktische Aufbau.

## Mathe-Logik
- Reine Rechenlogik steht in einem Block `/* LOGIC-START */ … /* LOGIC-END */` innerhalb der `index.html`, **ohne DOM-Zugriff**. Am Ende des Blocks steht `const LOGIK = { … };`. Die Tests laden genau diesen Block.
- Regeln des Tools: Becher max. 20 ml; Pipette nur innerhalb eines Teams; Anfängermodus nur ganze Zahlen und Gesamtmenge durch Kinderzahl teilbar; Expertenmodus erlaubt Dezimalzahlen.
- **Erst testen, dann bauen:** Test schreiben → rot sehen → implementieren → grün.
- Namen und erwartetes Verhalten der Logik-Funktionen stehen in `tests/shared/ausgleich.suite.mjs`.

## Arbeitsablauf
1. Alles über ca. 30 Zeilen Änderung: erst Plan Mode, Plan in höchstens 5 Zeilen, dann auf meine Freigabe warten.
2. Kleine Schritte, ein Thema pro Commit, Commit-Nachrichten auf Deutsch.
3. Vor jedem „fertig": `npm test` ausführen und das Ergebnis nennen (grün/rot, Anzahl Tests).
4. Bei Änderungen an der Oberfläche: `/tablet-check` durchgehen. Was du nicht prüfen konntest (z. B. echtes Touch-Verhalten), schreibst du ausdrücklich als „nicht geprüft".
5. Keine Dateien löschen, kein `git push`, keine Installation von Paketen ohne Rückfrage.
6. Am Ende jeder Aufgabe: ein bis drei Sätze, was jetzt anders ist, und ein sinnvoller nächster Schritt.

## Selbstverbesserung (Lernprotokoll)
Du lernst nicht von selbst dazu, aber dieses Projekt tut es über Dateien:

- **Sitzungsbeginn:** die letzten 15 Einträge in `docs/lernprotokoll.md` lesen und beachten.
- **Eintrag schreiben** (Befehl `/lernprotokoll`), wenn: ich dich korrigiere, ein Test unerwartet fehlschlägt, ein Fehler erst auf dem Tablet auffällt oder etwas besonders gut funktioniert hat. Format steht in der Datei. Kurz und konkret, nie Namen oder Daten von Kindern.
- **Wiederholt sich eine Lehre zum zweiten Mal,** schlägst du vor, sie unter „Regeln aus Erfahrung" (unten) aufzunehmen. `CLAUDE.md` änderst du nur mit meiner Zustimmung.
- Ehrlich bleiben: Fehler benennen, nicht verstecken; Unsicherheit als Unsicherheit kennzeichnen.

## Regeln aus Erfahrung
_(noch leer – wird gemeinsam mit dem Lernprotokoll gefüllt)_
