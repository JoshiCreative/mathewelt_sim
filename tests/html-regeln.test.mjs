import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

// Prüft die Projektregeln aus CLAUDE.md für alle Tool-Dateien.
const wurzel = fileURLToPath(new URL("..", import.meta.url));

function toolDateien() {
  const dateien = [];
  if (existsSync(join(wurzel, "index.html"))) dateien.push("index.html");
  dateien.push("vorlage/tool-vorlage.html");
  const toolsOrdner = join(wurzel, "tools");
  if (existsSync(toolsOrdner)) {
    for (const eintrag of readdirSync(toolsOrdner, { withFileTypes: true })) {
      if (eintrag.isDirectory() && existsSync(join(toolsOrdner, eintrag.name, "index.html"))) {
        dateien.push(`tools/${eintrag.name}/index.html`);
      }
    }
  }
  return dateien;
}

// Sucht Farbangaben (Hex, rgb/rgba/hsl/hsla, white/black) als Werte.
// IDs (#lp-weiter {), url(#...), href="#..." und JS-Strings mit '#...' zählen nicht.
function farbStellen(zeile) {
  const fund = [];
  for (const m of zeile.matchAll(/#[0-9a-fA-F]+(?![\w-])/g)) {
    const laenge = m[0].length - 1;
    if (![3, 4, 6, 8].includes(laenge)) continue;
    const davor = zeile.slice(0, m.index);
    const danach = zeile.slice(m.index + m[0].length);
    if (/(url\(\s*["']?|href=["']?|['"`])$/.test(davor)) continue; // Verweis oder JS-String
    if (/^\s*[{,.>:\[+~]/.test(danach) && !/[:=]\s*$/.test(davor)) continue; // Selektor
    if (!/(^|[\s:=,(])$/.test(davor)) continue;
    fund.push(m[0]);
  }
  for (const m of zeile.matchAll(/\b(?:rgba?|hsla?)\(/gi)) fund.push(m[0]);
  for (const m of zeile.matchAll(/[:=]\s*["']?[^;{}"'<>]*?\b(white|black)\b/gi)) fund.push(m[1]);
  return fund;
}

for (const datei of toolDateien()) {
  const html = readFileSync(join(wurzel, datei), "utf8");
  describe(`Projektregeln: ${datei}`, () => {
    it('hat <html lang="de">', () => {
      assert.match(html, /<html[^>]*\blang="de"/i);
    });
    it("hat ein Viewport-Meta für Tablets", () => {
      assert.match(html, /<meta[^>]*name="viewport"/i);
    });
    it("lädt keine externen Skripte, Stylesheets oder Schriften", () => {
      assert.doesNotMatch(html, /<script[^>]+\bsrc=/i);
      assert.doesNotMatch(html, /<link[^>]+href=["']https?:/i);
      assert.doesNotMatch(html, /@import\s+url\(\s*["']?https?:/i);
    });
    if (datei === "index.html") {
      it("Farben in index.html nur über :root-Variablen", () => {
        // Den ersten :root-Block (bis zur schließenden Klammer) ausblenden, Zeilen bleiben erhalten.
        const start = html.search(/:root\s*\{/);
        const ende = start < 0 ? -1 : html.indexOf("}", start);
        const ohneRoot = start < 0 ? html
          : html.slice(0, start) + html.slice(start, ende + 1).replace(/[^\n]/g, " ") + html.slice(ende + 1);
        const treffer = [];
        ohneRoot.split("\n").forEach((zeile, i) => {
          const fund = farbStellen(zeile);
          if (fund.length) treffer.push(`Zeile ${i + 1}: ${fund.join(", ")}  |  ${zeile.trim().slice(0, 90)}`);
        });
        assert.equal(treffer.length, 0,
          `Farben außerhalb von :root gefunden (bitte als Variable in :root anlegen):\n${treffer.join("\n")}`);
      });
    }
  });
}
