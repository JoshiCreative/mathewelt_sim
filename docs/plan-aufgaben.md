# Gesamtplan: Heft-Aufgaben 1–7 als Bausteine der Mathewelt

**Stand:** 08.11.2026, Entwurf zur Abstimmung mit Josh. Grundlage: Arbeitsheft „Auf dem Schulfest" (Sproesser & Till, 13.03.2025), Arbeitsfassung in `docs/arbeitsheft-aufgaben.md`, Lernziele und Fehlerfallen in `docs/lernziele.md`, Optik in `docs/gestaltung.md`.

## Leitideen für alle Bausteine
- **Lernpfad ist das Standardangebot.** Das Freie Labor bleibt als Werkzeug für Lehrkräfte und schnelle Kinder.
- **Durchklicken statt Scrollen.** Eine Station = ein Bildschirm (Querformat 1024×768 und Hochformat 768×1024), ein Auftrag, höchstens zwei Sätze, „Weiter" unten fest.
- **Lernpfad pro Aufgabe:** Beobachten → Vorhersagen → Selbst machen (`docs/didaktik.md`).
- **Gleiche Handlung in jeder Darstellung:** Umschütten (Wasser), Umstecken (Würfel), Aneinanderlegen (Schnur), Umstapeln (Kästchen). Am Ende jeder Aufgabe die Brücke zur Rechnung „Summe geteilt durch Anzahl" (LZ7).
- **iPad:** Alles per Antippen (Tippen–Tippen statt Ziehen), Knöpfe ≥ 44 px, Tipps über den holzfarbenen „Tipp"-Knopf.
- **Spoiler-Regel:** Jede Station legt fest, ob die Summe sichtbar ist (`ja`, `nein`, `tipp`), siehe `summeSichtbar` in `index.html`.
- **Zwei Arten von Waage, bewusst getrennt:**
  - *Balkenwaage* (zwei Schalen): zeigt nur „gleich viel" oder „ungleich". Einsatz beim Einstieg (zwei Becher) und als Kontrolle in der Säulen-Werkstatt.
  - *Wippe mit Gleichgewichtspunkt* (Aufgabe 5/6): Werte sitzen an ihrer Stelle auf einem Zahlenstrahl, der **Abstand** zählt. Wird als neue Idee eingeführt („Diese Waage funktioniert anders"), damit die Kinder die beiden nicht verwechseln.

## Gemeinsamer Baustein: Säulen-Werkstatt (Kästchen im Koordinatensystem)
- Koordinatensystem mit Kästchen-Raster. Rechtsachse: die Kinder des Teams (Name + Teamsymbol). Hochachse: Menge (ml, Punkte, cm, Sprünge).
- **1 Kästchen = 1 Einheit.** 10 gestapelte Kästchen = 10 ml. Säulen lassen sich aus dem Wasser „übersetzen": Ein Knopf „Becher → Säule" stellt neben jeden Becher die Säule aus Kästchen (LZ7).
- **Umstapeln per Tippen–Tippen:** oberstes Kästchen einer Säule antippen (hebt sich an), dann eine andere Säule antippen (Kästchen landet oben). Kein Ziehen nötig. Entspricht Heft-Tippkarte 4 („oberstes Kästchen der höchsten Säule auf die niedrigste").
- **Fester Kästchen-Zähler** („Kästchen insgesamt: 64") bleibt beim Umstapeln gleich. Er ist zugleich die Summe, daher gilt die Spoiler-Regel: sichtbar nur, wenn die Station es erlaubt.
- **Balkenwaage als Kontrolle:** Zwei Säulen antippen → sie erscheinen auf einer kleinen Balkenwaage. Steht sie gerade, sind beide Säulen gleich hoch. Damit wird die Einstiegs-Waage wieder aufgegriffen.
- **Ausgleichslinie** (Strichlinie auf Höhe des Ausgleichswerts) nur auf Knopfdruck und erst nach der Vorhersage.
- Fehlerfalle „Gesamtmenge nicht erhalten" (LZ1): Kästchen kommen nur von anderen Säulen; es gibt keinen Knopf, der Kästchen neu erzeugt.
- Technik: Inline-SVG oder CSS-Raster, Logik (Umstapeln, Summe bleibt, Ausgleich erreicht) als reine Funktionen im LOGIC-Block mit Tests.

## Aufgaben im Einzelnen

### Aufgabe 1: Wasser balancieren (in Arbeit)
- **Szene:** Parcours mit Becher (Wiese, Wimpelkette).
- **Teil 1 Beobachten:**
  - Einstieg mit zwei Bechern auf der Balkenwaage (14 ml und 6 ml). Erste Frage: „Ist das fair verteilt?" Danach umgießen, bis die Waage gerade steht. Dabei kommt das Wort „Ausgleichswert" (10 ml), und es wird geklärt, dass die Gesamtmenge gleich bleibt.
  - Danach die Teams: Wer hat insgesamt mehr? Ist das ein fairer Vergleich? Die Fairness-Argumente von Marla (höchster Wert) und Monika (Summe) kommen als Auswahlkarten. Dann den automatischen Ausgleich ansehen.
- **Teil 2 Vorhersagen:** „Wie viel ml hat jedes Kind, wenn wir gerecht verteilen?" Erst schätzen (Zahl antippen), dann prüfen. Hier wird „alles zusammen, dann durch die Anzahl teilen" schon vorbereitet, denn bei zwei Bechern liegt „die Hälfte" nahe, und das trägt bei 4 oder 5 Kindern nicht. Die Fehlerfalle „falsche Anzahl" kommt schon hier (Kinder als Chips mit Zähler, „Du hast durch 4 geteilt, die Mathe-Asse sind aber 5 Kinder").
- **Teil 3 Selbst machen:** Mit der Pipette selbst ausgleichen, danach in der Säulen-Werkstatt dieselben Werte umstapeln (Heft 1c). Sieger begründen (Satzbaustein „Die Unicorns gewinnen, weil …").
- **LZ:** 1, 4, 7. **Fehlerfallen:** Summe statt Durchschnitt (Fairness-Prüfer), Gesamtmenge nicht erhalten.

### Aufgabe 2: Würfel ziehen
- **Szene:** Tisch mit Beutel und Steckwürfeln.
- **Werte:** Unicorns 4, 4, 3, 1 · Mathe-Asse 3, 2, 4, 1, 5 (beide Ausgleichswert 3).
- **Ablauf:**
  - Steckwürfeltürme sind schon Kästchen: Hier startet die Säulen-Werkstatt direkt mit Türmen. Der Unterschied zu Wasser: Würfel lassen sich nur ganz verschieben, deshalb gibt es nur ganze Zahlen.
  - Zweiter Weg (Tippkarte 4): „Alle Würfel zusammen auf einen Haufen" (Knopf), dann gerecht auf die Kinder verteilen, Würfel für Würfel reihum.
  - Ergebnis „gleich gut" (3 und 3) als Überraschung nutzen.
- **2c ZORRO rückwärts:** Ausgleichswert 4, vier Werte gegeben, der fünfte ist gesucht. Live-Anzeige „Ziel: 4 mal 5 = 20 Würfel, du hast 17, es fehlen 3". Die Ziel-Summe wird erst nach der Vermutung oder per Tipp gezeigt.
- **LZ:** 1, 2, 5. **Fehlerfalle:** falsche Anzahl beim Teilen (Kinder als Chips mit Zähler).

### Aufgabe 3: Chips schnippen
- **Szene:** Schnipp-Feld mit cm-Markierungen.
- **Werte:** Unicorns 28, 19, 20, 17 (Ausgleichswert 21) · Mathe-Asse 25, 23, 18, 19, 25 (Ausgleichswert 22).
- **Ablauf:**
  - **Schnur-Modell:** Die Weiten werden als farbige Stücke nacheinander auf eine Schnur gelegt (Antippen = nächstes Stück anhängen). Danach wird die Schnur in gleich lange Teile geschnitten, ein Teil pro Kind, mit dem Knopf „gerecht teilen". Das Bild dazu: Summe, dann geteilt.
  - Danach dieselben Werte in der Säulen-Werkstatt.
  - **3c Rechnung:** Die Kinder ordnen die Rechenschritte „alles zusammen" und „durch die Anzahl teilen" den Handlungen zu (Wasser zusammenschütten, Würfel stapeln, Schnur anhängen, Säulen aufeinandersetzen). Das läuft als Zuordnungsspiel (LZ2, LZ7).
- **3d/3e:** ZORRO mit Durchschnitt 20: mehrere Lösungen per Regler, Live-Summe gegen das Ziel 100. Dazu Chris' Satz „alle haben 20 geschnippt" als Behauptung prüfen.
- **Merkkasten:** Er erscheint nach Teil 3 als Lernkarte (Satzbausteine zum Antippen).
- **Vom Ausgleichswert zum Durchschnitt:** Ab hier nennt das Heft den Ausgleichswert auch „Durchschnitt". Eine eigene Station verbindet die Wörter: „Der Ausgleichswert heißt auch Durchschnitt." Danach stehen beide Wörter nebeneinander, bis Aufgabe 4.
- **LZ:** 2, 4, 5, 7.

### Aufgabe 4: Seilspringen
- **Szene:** Springseil.
- **Werte:** Unicorns 15, 12, 16, 13 (14) · Mathe-Asse 13, 17, 18, 16, 16 (16).
- **4a:** erst zeichnerisch in der Säulen-Werkstatt, dann rechnerisch (Eingabe „Summe" und „geteilt durch"). Die Rückmeldung ist konkret, z. B. „Du hast durch 4 geteilt, die Mathe-Asse sind aber 5 Kinder".
- **4b Deutung:** Auswahlkarten („Alle haben genau 14", „Wenn alle gleich viele hätten, wären es 14", „Die Unicorns haben 14 Mal gewonnen", „14 ist der höchste Wert") und dazu der Satzbaustein (LZ4).
- **4c/4d Rückwärts:**
  - Bei 4c sind viele Lösungen möglich. Regler für fünf Kinder, die Ziel-Summe 65 wird live angezeigt.
  - Bei 4d sind vier Werte vorgegeben, und es gibt nur eine Lösung.
  - Frage dazu: „Warum gibt es hier nur eine Lösung?" (LZ5)

### Aufgabe 5: Ergebnisse zusammenfassen (Häufigkeit)
- **Szene:** Wippe.
- **Umschalter „einzelne Kinder ↔ Tabelle":**
  - Die neun Kinder werden zu Chips, und gleiche Werte stapeln sich über dem Zahlenstrahl 12–18.
  - So entsteht das Häufigkeits-Säulendiagramm. Die Rechtsachse zeigt jetzt den **Wert**, nicht mehr das Kind. Darauf ausdrücklich hinweisen (LZ3).
- **Vor dem Rechnen:** Frage „Wie viele Kinder sind es?" (Summe der Häufigkeiten = 9).
- **Gesamtdurchschnitt:**
  - Schätzen: Ist es 15? Die Teams sind verschieden groß, deshalb nicht.
  - Drei Rechenwege als Karten, Ergebnis 136 : 9 ≈ 15,1 (für die 5. Klasse optional „15 Rest 1").
- **Wippe mit Gleichgewichtspunkt:**
  - Die Chip-Stapel liegen auf einem Brett.
  - Das Kind setzt das Dreieck ▲ unter das Brett, das Brett kippt zur schwereren Seite.
  - Im Gleichgewicht steht das Dreieck beim Durchschnitt.
  - Neu und ausdrücklich erklärt: Bei der Wippe zählt, **wie weit** ein Chip vom Dreieck entfernt ist. Das ist der Unterschied zur Balkenwaage vom Anfang.
- **LZ:** 3, 6. **Fehlerfalle:** Durchschnitt = häufigster Wert.

### Aufgabe 6: Klassendurchschnitt
- **Szene:** Wippe.
- **Werte:** 25 Werte der 6a, Durchschnitt 21, häufigster Wert 20. Dieser Datensatz trennt Durchschnitt und häufigsten Wert sauber.
- **Ablauf:**
  - Die Werte werden per Antippen in die Häufigkeitstabelle übertragen. Jeder Wert wird dabei zum Chip, der in seine Spalte fällt.
  - Schätzen: blaues ▲ auf die Wippe setzen.
  - Rechnen: rotes ▲ erscheint. Dann vergleichen, wie gut die Schätzung war.
- **Ankreuz-Karten:** „Immer in der Mitte?", „Immer der häufigste Wert?", „Muss als Datenpunkt vorkommen?". Jede Karte bekommt ein Beispiel-Knopf, der den passenden Datensatz auf die Wippe legt (LZ6).
- **Fehlvorstellung „Durchschnitt = Mitte" bewusst aufgreifen:** Beim Waage-Einstieg (zwei Becher) und bei den Unicorns (12 und 20 ergeben 16) liegt der Ausgleichswert zufällig genau in der Mitte zwischen kleinstem und größtem Wert. Hier wird das widerlegt, mit Anknüpfung an die Waage vom Anfang: Bei den Mathe-Asse liegt die Mitte bei 15,5, der Ausgleichswert ist aber 15. Bei der 6a liegt die Mitte bei 22,5, der Durchschnitt ist 21.

### Aufgabe 7: Medaillen und Brötchen
- **Szene:** Siegerehrung mit Kisten.
- **7a–e Medaillen:**
  - Die 18 Klassenwerte werden in eine Häufigkeitstabelle übertragen. Die Kisten sind die Chips.
  - Schätzen und rechnen wie bei Aufgabe 6: Durchschnitt 20.
- **7f–h Brötchen:**
  - 270 Brötchen auf 18 Klassen ergeben 15.
  - Rückwärts: Die 6a hat 22 Brötchen. Die übrigen 17 Klassen verteilen das Kind per Regler. Die Live-Summe läuft gegen das Ziel 270. Jede Lösung mit Summe 270 ist richtig.
- **LZ:** 2, 4, 5.

## Querschnitt
- **Einstiegs-Check (3–5 Aufgaben):** Wer ihn schafft, überspringt die Basis-Stationen („das haben wir schon gemacht", `docs/lernziele.md`). Er wird gebaut, sobald Aufgabe 1 bis 3 stehen (siehe Reihenfolge), denn erst dann gibt es Stationen zum Überspringen.
- **Vorlesen-Knopf** in jeder Station jeder Aufgabe, keine Pflicht zum Schreiben. Antworten per Antippen oder per Diktat (LZ8). Bei jedem neuen Baustein gehört er zur Abnahme dazu.
- **Waage-Grenze:** Am Ende von Aufgabe 1, Teil 1 kommt ein Satz: „Die Waage zeigt, ob zwei Becher gleich viel haben. Welches Team besser ist, zeigt sie nicht." So entsteht nicht die Idee „Waage gerade = Teams gleich gut".
- **Schriftgröße:** Der kompakte Lernpfad nutzt teils 12–15 px (QA-Hinweis 08.11.2026). Für die 4. Klasse am iPad prüfen und, wenn nötig, lieber eine Station mehr als kleinere Schrift.
- **Keine Daten von Kindern speichern.** Gespeichert wird höchstens die Moduswahl (`CLAUDE.md`).

## Vorgeschlagene Reihenfolge der Umsetzung
1. Aufgabe 1 fertig: Waage-Einstieg (läuft), dann Teil 2 Vorhersage und Teil 3 Selbst machen.
2. Säulen-Werkstatt als eigener Baustein, zuerst mit den Werten aus Aufgabe 1 (Brücke Becher → Säule).
3. Aufgabe 2 (Würfel) nutzt die Werkstatt direkt, dazu kommt die erste Rückwärtsaufgabe (ZORRO).
4. Aufgabe 3 (Schnur, Rechnung, Merkkasten, Wort „Durchschnitt"), danach der Einstiegs-Check, dann Aufgabe 4 (zeichnerisch und rechnerisch, Deutung, Rückwärts).
5. Häufigkeit und Wippe (Aufgaben 5 und 6), zuletzt Aufgabe 7.

Ab Schritt 2 bekommt jeder Baustein zuerst einen Entwurf, den Josh freigibt (wie beim Schulfest-Entwurf). Danach geht es weiter mit Logik und Tests, Oberfläche und den Prüfern.

## Offene Fragen an Josh
- Soll die Säulen-Werkstatt eine eigene Seite unter `tools/` werden oder als weitere Station in `index.html` bleiben? Die Datei hat bereits rund 1600 Zeilen.
- Soll die Wippe (Aufgaben 5/6) echte Physik nachbilden (Drehmoment) oder nur sagen „kippt nach links, nach rechts, steht gerade"? Vorschlag: einfach halten. Die Rechnung im Hintergrund nutzt die Summe der Abstände, angezeigt werden nur drei Zustände.
- Ist das ein Workshop-Tag (6. Klasse, Februar 2027) oder eine Reihe über mehrere Stunden? Davon hängt ab, welche Aufgaben 2027 zuerst fertig sein müssen.
