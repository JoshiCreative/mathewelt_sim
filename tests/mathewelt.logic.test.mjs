import { describe, it } from "node:test";
import { fileURLToPath } from "node:url";
import { loadLogic } from "./helpers/loadLogic.mjs";
import { ausgleichSuite } from "./shared/ausgleich.suite.mjs";

// Testet die Logik des MatheWelt-Tools im Hauptordner (index.html).
// Solange index.html keinen LOGIC-Block mit `const LOGIK` hat, werden die Tests
// übersprungen. Schritt 1 im START-PROMPT.md legt den Block an.
const pfad = fileURLToPath(new URL("../index.html", import.meta.url));
const L = loadLogic(pfad);

if (L) {
  describe("MatheWelt index.html", () => {
    ausgleichSuite(L);
  });
} else {
  describe(
    "MatheWelt index.html",
    { skip: "index.html fehlt oder hat noch keinen LOGIC-Block (siehe START-PROMPT.md, Schritt 1)" },
    () => {
      it("Logik-Tests", () => {});
    }
  );
}
