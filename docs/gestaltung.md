# Gestaltung der Mathewelt: Cartoon-Schulfest

**Status:** Stimmung „Sommerwiese" ist beschlossen (08.11.2026). Entwurf `vorlage/entwurf-schulfest.html` samt Palette von Josh freigegeben (08.11.2026). Nächster Schritt: Übernahme in `index.html` nach Plan.

**Ergänzungen aus der Prüfung des Entwurfs:** Becher stehen nie direkt auf einer Teamfarbe, sondern auf einer weißen „Becherbank“ im Teamrahmen (Wasser auf Gelb hatte nur 1,5 zu 1). Die Wasseroberkante bekommt einen Strich in `--wasser-rand`. Der Tipp-Knopf ist holzfarben mit dunkler Schrift (7,4 zu 1), nicht blau. Die Wimpel tragen keine Teamfarben. Zusätzliche Variablen im Entwurf: `--text-leise` #4B5563, `--kontur` #2F4A3A, `--karte-rand`, `--rueck-hell`, `--weg`, `--huetchen`, `--rosa` (Deko).

## Leitidee
Das Arbeitsheft erzählt ein Schulfest der Walschule mit Wettbewerben, bei denen zwei Teams (Unicorns und Mathe-Asse) gegeneinander antreten. Die Oberfläche soll sich wie dieses Fest anfühlen: eine freundliche Wiese, Bäume, Wimpelketten, eine Wippe, ein Seil. Stil: **Zeichentrick**, also flache Farbflächen, runde Formen, dicke ruhige Konturen. Keine Fotos, keine realistischen Bilder.

## Technische Regeln
- Alle Grafiken sind **Inline-SVG** in der `index.html`. Keine Bilddateien, keine externen Quellen, keine Schriften von außen.
- Farben nur über CSS-Variablen im `:root`-Block (z. B. `--himmel`, `--wiese`, `--u`, `--m`, `--wasser`, `--primaer`). Eine Palette-Änderung betrifft dann nur diesen Block.
- Der Hintergrund bleibt **ruhig und niedrig im Kontrast**. Alle Texte, Zahlen, Becher und Knöpfe stehen auf hellen Karten (volle Deckkraft, abgerundet) vor der Szene.
- Keine Bewegung im Hintergrund als Standard. Animationen nur sparsam und mit `prefers-reduced-motion` abschaltbar.
- **Ein einziges Design** (kein Dunkelmodus), damit Cartoon und Lesbarkeit zusammenpassen.
- Szenen halten wir einfach (wenige Formen), damit ältere iPads flüssig bleiben. Ob das reicht, ist am iPad zu prüfen.
- Team-Unterscheidung nie nur über Farbe: Name, Symbol (Einhorn-Horn bzw. Stern) und Form.
- Wasser bleibt blau und ist die einzige kräftig blaue Fläche. Dadurch fällt es als Hauptsache auf.

## Palette (freigegeben 08.11.2026)
Kontrastverhältnisse sind gerechnet. Für alle weiteren Text/Hintergrund-Paare gilt: mindestens 4,5 zu 1, bei großer fetter Schrift (ab ca. 19 px) mindestens 3 zu 1.

| Rolle | Wert | Hinweis |
|---|---|---|
| Himmel | Verlauf `#D9F0FF` nach `#FFF3D6` | warm, hell |
| Wiese | `#7CC36B` | dunkler Text darauf 6,9 zu 1 |
| Baumkrone / Stamm | `#3F9E5A` / `#8A5A3B` | nur Deko |
| Holz (Wippe, Tisch) | `#E0B070` | nur Deko |
| Text | `#1F2937` | auf Karte weiß 14,7 zu 1 |
| Karte | `#FFFFFF` | Inhalt immer darauf |
| Unicorns | `#6D28D9` | weiße Schrift darauf 7,1 zu 1; dazu Einhorn-Horn-Symbol |
| Mathe-Asse | `#F5B02E` | dunkle Schrift darauf 7,8 zu 1 (nie weiße Schrift); dazu Stern-Symbol |
| Wasser | `#3B9DF0`, Rand `#1D6FB8` | Rand mit weißer Schrift 5,2 zu 1 |
| Hauptknopf „Weiter" | `#1F7A45` | weiße Schrift 5,3 zu 1 |

## Szenen (Schulfest-Stationen)
Zuerst nur **eine** Szene (Aufgabe 1, Parcours mit Wasserbecher), später die übrigen.

| Heft-Aufgabe | Szene |
|---|---|
| 1 Wasser balancieren | Parcours mit Becher, Wimpelkette, Bäume |
| 2 Würfel ziehen | Tisch mit Beutel und Steckwürfeln |
| 3 Chips schnippen | Schnipp-Feld mit Markierungen |
| 4 Seilspringen | Springseil |
| 5 und 6 Gleichgewicht | Wippe (passt zum „Gleichgewichtspunkt") |
| 7 Medaillen, Brötchen | Siegerehrung, Kisten |

## Ablauf für den GUI-Designer
1. Entwurf in `vorlage/entwurf-schulfest.html` mit einer Szene, drei Beispielkarten und der Palette. Nichts in `index.html` ändern.
2. Josh schaut sich den Entwurf im Browser an und nennt Änderungen. Höchstens zwei Runden.
3. Erst nach seiner Freigabe in `index.html` übernehmen, nach dem Kartenkonzept (siehe `CLAUDE.md`).
4. `qa-pruefer` prüft die Kontraste aller Text/Hintergrund-Paare.
