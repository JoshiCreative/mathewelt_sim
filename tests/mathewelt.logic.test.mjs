import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { loadLogic } from "./helpers/loadLogic.mjs";
import { ausgleichSuite } from "./shared/ausgleich.suite.mjs";
import { modusSuite } from "./shared/modus.suite.mjs";

// Testet die Logik des MatheWelt-Tools im Hauptordner (index.html).
// Solange index.html keinen LOGIC-Block mit `const LOGIK` hat, werden die Tests
// übersprungen. Schritt 1 im START-PROMPT.md legt den Block an.
const pfad = fileURLToPath(new URL("../index.html", import.meta.url));
const L = loadLogic(pfad);

if (L) {
  describe("MatheWelt index.html", () => {
    ausgleichSuite(L);
    modusSuite(L);

    // Spoiler-Regel: Wann darf die Summe sichtbar sein?
    describe("summeSichtbar", () => {
      it("ja: immer sichtbar", () => {
        assert.equal(L.summeSichtbar("ja", 0, 2, false), true);
      });
      it("nein: nie sichtbar, auch nach Antwort und Tipps", () => {
        assert.equal(L.summeSichtbar("nein", 0, 2, false), false);
        assert.equal(L.summeSichtbar("nein", 2, 2, true), false);
      });
      it("tipp: ohne Tipp und unbeantwortet versteckt", () => {
        assert.equal(L.summeSichtbar("tipp", 0, 2, false), false);
      });
      it("tipp: nach 1 von 2 Tipps noch versteckt", () => {
        assert.equal(L.summeSichtbar("tipp", 1, 2, false), false);
      });
      it("tipp: nach 2 von 2 Tipps sichtbar", () => {
        assert.equal(L.summeSichtbar("tipp", 2, 2, false), true);
      });
      it("tipp: nach richtiger Antwort sichtbar, auch ohne Tipps", () => {
        assert.equal(L.summeSichtbar("tipp", 0, 2, true), true);
      });
      it("unbekannte Einstellung: versteckt (Spoiler-Regel geht vor)", () => {
        assert.equal(L.summeSichtbar("irgendwas", 0, 2, false), false);
      });
      it("fehlende Einstellung (undefined): versteckt", () => {
        assert.equal(L.summeSichtbar(undefined, 0, 2, false), false);
      });
      it("tipp ohne vorhandene Tipps: versteckt, solange unbeantwortet", () => {
        assert.equal(L.summeSichtbar("tipp", 0, 0, false), false);
      });
      it("tipp ohne vorhandene Tipps: sichtbar nach richtiger Antwort", () => {
        assert.equal(L.summeSichtbar("tipp", 0, 0, true), true);
      });
    });
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
