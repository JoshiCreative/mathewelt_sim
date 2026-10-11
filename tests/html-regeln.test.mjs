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
  });
}
