# Mathe-Tools – Claude-Code-Projekt

Startpaket für die Arbeit mit Claude Code an digitalen Mathe-Lerntools (aktuell „Mathewelt – Wasser aufteilen").

## Inhalt

| Datei/Ordner | Zweck |
| --- | --- |
| `START-PROMPT.md` | Prompt zum Einfügen in Claude Code |
| `CLAUDE.md` | Dauerhafte Projektanweisungen (Technik, Didaktik, Arbeitsablauf, Selbstverbesserung) |
| `docs/` | Didaktik, Bewertungsraster, Lernprotokoll, Checkliste Tablet |
| `.claude/commands/` | Eigene Befehle (`/pruefen`, `/tablet-check`, …) |
| `.claude/agents/` | Unter-Agent `didaktik-pruefer` |
| `vorlage/tool-vorlage.html` | Vorlage für neue Tools mit Lernpfad und testbarer Logik |
| `tests/` | Automatische Tests (`npm test`, benötigt nur Node.js ≥ 20, keine Pakete) |
| `.github/workflows/tests.yml` | Lässt GitHub die Tests bei jedem Push laufen |
| `docs/optional/claude.yml` | Optional: `@claude` in GitHub-Issues (braucht API-Key, kostet extra) |

## Einrichtung

**Variante A – in dein bestehendes Repo (empfohlen, weil GitHub Pages schon läuft)**
1. Dein Repo lokal öffnen (`joshicreative/mathewelt_sim`).
2. Alle Dateien aus diesem Paket hineinkopieren. Deine `index.html` bleibt unverändert.
3. Im Ordner: `npm test`. Die MatheWelt-Tests sind zunächst „übersprungen", bis `index.html` den Logik-Block hat (macht Claude im Start-Prompt, Schritt 1).

**Variante B – neues Repo**
1. Ordner entpacken, `git init`, deine `index.html` hineinlegen, ersten Commit machen.
2. Mit `gh repo create` oder über github.com ein Repo anlegen und pushen.

## Claude Code starten
1. Claude Code installieren nach der offiziellen Anleitung: https://docs.claude.com/en/docs/claude-code/overview (npm-Paket `@anthropic-ai/claude-code`).
2. Im Projektordner `claude` starten und mit deinem Claude-Konto anmelden. Der kostenlose Plan enthält kein Claude Code; ein Pro-Abo reicht für den Anfang.
3. `Shift+Tab` für den Plan Mode, dann den Prompt aus `START-PROMPT.md` einfügen.

## GitHub
- Tests laufen automatisch über `.github/workflows/tests.yml` (kostenlos, kein Schlüssel nötig).
- Claude-Code-Integration in GitHub: in Claude Code `/install-github-app` ausführen. Alternativ `docs/optional/claude.yml` nach `.github/workflows/` verschieben und im Repo das Secret `ANTHROPIC_API_KEY` anlegen. Das wird über die API abgerechnet, nicht über dein Abo.
- Keine Daten von Kindern in öffentliche Repos legen.

## So verbessert sich das Projekt über die Zeit
Claude trägt nach jeder Aufgabe eine Lehre in `docs/lernprotokoll.md` ein. Wiederholt sich eine Lehre, schlägt Claude vor, sie in `CLAUDE.md` unter „Regeln aus Erfahrung" aufzunehmen. Du entscheidest, was dort landet.
