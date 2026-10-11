# Start-Prompt für Claude Code

Starte Claude Code im Projektordner (`claude`), schalte mit **Shift+Tab** in den Plan Mode und füge dann den Prompt unten ein. Ersetze vorher den Satz in `[ECKIGEN KLAMMERN]`.

## Erster Prompt (einmalig pro Projekt)

```
Du arbeitest in diesem Projekt als mein Entwicklungs-Agent für digitale Mathe-Lerntools. Aktuell: „Mathewelt – Wasser aufteilen" (eine einzelne index.html, Vanilla-JS, für Tablets).

Lies zuerst CLAUDE.md, docs/didaktik.md, docs/bewertungsraster.md und die letzten Einträge von docs/lernprotokoll.md. Fasse in höchstens 6 Zeilen zusammen, was du verstanden hast, und stelle höchstens 3 Rückfragen.

Ziel dieser Sitzung: [Beispiel: Willkommensfenster und Lernpfad „Beobachten → Vorhersage → Selbst bauen" im bestehenden Tool ergänzen]

Vorgehen:
1. Schritt 1 (einmalig): Hat index.html noch keinen /* LOGIC-START */-Block, verschiebe nur die reine Mathe-Logik (Ausgleichswert, Prüfung „alle Becher gleich", Pipette nehmen/geben mit Grenzen 0 und 20 ml) in einen DOM-freien Block gemäß CLAUDE.md. Das sichtbare Verhalten darf sich nicht ändern. Die Funktionen sollen so heißen und sich so verhalten, dass tests/mathewelt.logic.test.mjs grün wird (siehe tests/shared/ausgleich.suite.mjs). Danach npm test.
2. Mache mir einen Plan in höchstens 5 Zeilen und warte auf meine Freigabe.
3. Setze in kleinen Schritten um. Neue Mathe-Logik erst mit Test, dann Code.
4. Prüfe mit npm test und /tablet-check. Sage ausdrücklich, was du nicht prüfen konntest.
5. Schreibe am Ende mit /lernprotokoll, was du für das nächste Mal lernst.

Bleibe am vorhandenen Code. Kein Framework, keine Fremd-Abhängigkeiten, keine funktionierenden Features entfernen. Erkläre mir Änderungen in einfachen Worten.
```

## Folge-Prompt (für spätere Sitzungen)

```
Neue Sitzung. Lies CLAUDE.md und die letzten 15 Einträge in docs/lernprotokoll.md. Ziel heute: [ZIEL]. Beginne mit einem Plan in höchstens 5 Zeilen.
```

## Nützliche Befehle im Projekt

| Befehl | Wofür |
| --- | --- |
| `/neues-tool <Name>` | Neues Tool aus der Vorlage anlegen, inkl. Tests |
| `/pruefen` | Tests und Projektregeln prüfen, kurzer Bericht |
| `/tablet-check` | Checkliste für Tablet-Tauglichkeit durchgehen |
| `/lernprotokoll <Notiz>` | Lehre aus der Sitzung festhalten |
| `/portfolio-notiz <Thema>` | Stichpunkte für die Portfolio-Reflexion aus dem Entwicklungsverlauf sammeln |

Außerdem gibt es den Unter-Agenten `didaktik-pruefer`. Bitte ihn mit: „Lass den didaktik-pruefer über index.html schauen."
