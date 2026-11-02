# Agenten-Paket für das Tool Mathewelt

Entpacke die ZIP-Datei **im Hauptordner deines Repositorys** (dort, wo `CLAUDE.md` liegt). Dateien mit gleichem Namen werden ersetzt (`didaktik-pruefer.md` wird erweitert).

Neu:
- `.claude/agents/gui-designer.md`, `entwickler.md`, `qa-pruefer.md`, `didaktik-pruefer.md` (erweitert)
- `.claude/commands/team.md` (der „Master", aufgerufen mit `/team`)
- `docs/lernziele.md`, `docs/arbeitsheft-aufgaben.md`

## Zwei Zeilen in `CLAUDE.md` ergänzen
Unter `@docs/didaktik.md` einfügen:

```
@docs/lernziele.md
@docs/arbeitsheft-aufgaben.md
```

Unter „Arbeitsablauf" einen Punkt ergänzen:

```
7. Bei größeren Aufgaben arbeite ich mit `/team`: Master koordiniert, `entwickler` und `gui-designer` nie gleichzeitig an `index.html`, vor dem Commit `didaktik-pruefer` und `qa-pruefer`.
```

## Benutzen
- `/team Heft-Aufgabe 1c: Säulen zum Umstapeln` startet den ganzen Ablauf.
- Einen Agenten gezielt rufen: `@agent-gui-designer Becher und Auftrag im Querformat gleichzeitig sichtbar machen`.
- Nur prüfen: `@agent-didaktik-pruefer index.html` oder `@agent-qa-pruefer`.
- Nach einem neuen Agenten oder einem neuen Ordner: Claude Code in der Desktop-App neu starten, dann erscheinen die Agenten.
