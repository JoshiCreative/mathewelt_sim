# Lernprotokoll

Hier hält Claude fest, was im Projekt gelernt wurde: Korrekturen, überraschende Fehler, Entscheidungen, Dinge, die gut funktioniert haben. Neueste Einträge unten. Zu Sitzungsbeginn werden die letzten 15 Einträge gelesen.

**Format (eine Zeile pro Eintrag):**
`- JJJJ-MM-TT | Ziel: … | Beobachtung: … | Regel fürs nächste Mal: …`

**Regeln:** kurz und konkret, keine Namen oder Daten von Kindern, keine Vermutungen als Tatsachen ausgeben. Bewusste Lücken im Tool mit Begründung eintragen (dienen später dem Portfolio).

## Einträge
- 2026-10-11 | Ziel: Projekt aufgesetzt | Beobachtung: Logik und Oberfläche sind in index.html noch nicht getrennt, daher sind die MatheWelt-Tests zunächst übersprungen | Regel fürs nächste Mal: Zuerst Logik-Block (`LOGIC-START`/`LOGIC-END`) ohne Verhaltensänderung abtrennen, dann erst Features ergänzen.
- 2026-10-11 | Ziel: Wasserlabor (Dozenten-Tool) analysieren | Beobachtung: Übertragbar sind Lernpfad mit drei Teilen, ein Auftrag pro Schritt, gesperrtes „Weiter“ mit Hinweis, Denkanstoß statt „falsch“, gestufte Tipps. Bewusst nicht übernommen: Forschungsmodus mit Kinder-Nummern und Log-CSV, Arbeitsstand in localStorage (Datenschutz) | Regel fürs nächste Mal: Vorbilder nur auf Aufbau prüfen, jede Datenspeicherung gegen CLAUDE.md abgleichen.
- 2026-10-11 | Ziel: Logik-Block abtrennen | Beobachtung: Bewusste Lücke: Nach „exakt ausgleichen“ kann ein Becher mit z. B. 19,5 ml per Pipette auf 20,5 ml kommen (gibWasser prüft nur „schon voll“) | Regel fürs nächste Mal: Beim Expertenmodus mit Test „Becher bleibt ≤ 20 ml“ schließen.
- 2026-10-11 | Ziel: Logik-Block committen | Beobachtung: Ein Python-Skript und das Edit-Werkzeug haben die Zeilenenden von CRLF auf LF umgestellt; der Diff zeigte dadurch alle 712 Zeilen als geändert | Regel fürs nächste Mal: Vor jedem Commit `git diff --stat` ansehen; index.html mit CRLF speichern.
- 2026-10-11 | Ziel: Lernpfad Teil 1 | Beobachtung: Im Browser-Test fiel auf, dass bei falscher Antwort unten trotzdem „Gut gemacht!“ stand, und im Querformat lag der Ausgleichs-Knopf weit unter den Bechern | Regel fürs nächste Mal: Sperre und Rückmeldung immer zusammen testen; Bedienknopf eines Schritts direkt unter den Auftrag setzen.
