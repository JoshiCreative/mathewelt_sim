# Checkliste Tablet-Tauglichkeit

Mit `/tablet-check` gemeinsam durchgehen. Was nicht geprüft werden konnte, wird als „nicht geprüft" markiert.

## Bedienung
- [ ] Alle Buttons und Eingabefelder mindestens 44 × 44 px
- [ ] Nichts funktioniert nur per Hover (Tooltips haben Tap-Alternative)
- [ ] Kein Drag-only; falls Drag, gibt es eine Tap-Alternative
- [ ] Kein Doppelklick nötig, kein Rechtsklick
- [ ] Kein versehentliches Zoomen oder Scrollen beim Bedienen (Abstand zwischen Buttons)

## Darstellung
- [ ] Hochformat (768 × 1024) und Querformat (1024 × 768) ohne horizontales Scrollen
- [ ] Text mindestens 16 px, wichtige Zahlen deutlich größer
- [ ] Kontrast ausreichend, Teams nicht nur über Farbe unterscheidbar
- [ ] Tastatur auf dem Tablet verdeckt das Eingabefeld nicht

## Technik
- [ ] `<html lang="de">` und Viewport-Meta vorhanden
- [ ] Keine externen Dateien oder Schriften (funktioniert offline)
- [ ] Kein `alert()` in neuem Code
- [ ] Zwischenspeicher-Funktion (`navigator.clipboard`) hat einen Fallback bei Fehlschlag

## Didaktik
- [ ] Eine Aufgabe sichtbar, Anweisung in höchstens 2 kurzen Sätzen
- [ ] Rückmeldung ermutigend und konkret
- [ ] Anfänger- und Expertenmodus verhalten sich unverändert
