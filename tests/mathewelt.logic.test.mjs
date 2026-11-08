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

    // Balkenwaage: Neigung in Grad (links schwerer = negativ, linke Seite sinkt)
    describe("waageNeigung", () => {
      it("(14, 6) wird auf -12 Grad begrenzt", () => {
        assert.equal(L.waageNeigung(14, 6), -12);
      });
      it("(11, 9) ist -3 Grad", () => {
        assert.equal(L.waageNeigung(11, 9), -3);
      });
      it("(9, 11) ist 3 Grad", () => {
        assert.equal(L.waageNeigung(9, 11), 3);
      });
      it("(10, 10) und (0, 0) sind 0 Grad", () => {
        assert.equal(L.waageNeigung(10, 10), 0);
        assert.equal(L.waageNeigung(0, 0), 0);
      });
      it("(20, 0) wird auf -12 Grad begrenzt", () => {
        assert.equal(L.waageNeigung(20, 0), -12);
      });
      it("Rundungsunterschied unter der Toleranz gibt 0", () => {
        assert.equal(L.waageNeigung(10.004, 10), 0);
      });
      it("eigenes Maximum wird beachtet", () => {
        assert.equal(L.waageNeigung(0, 20, 5), 5);
      });
    });

    // Umgießen von einem Becher in den anderen (Waage am Lernpfad-Anfang)
    describe("umgiessen", () => {
      it("[14, 6] von 0 gibt [13, 7]", () => {
        assert.deepEqual(L.umgiessen([14, 6], 0), [13, 7]);
      });
      it("von 1 gießt in die andere Richtung", () => {
        assert.deepEqual(L.umgiessen([14, 6], 1), [15, 5]);
      });
      it("Summe bleibt 20 nach mehreren Schritten", () => {
        let w = [14, 6];
        for (let i = 0; i < 3; i++) w = L.umgiessen(w, 0);
        w = L.umgiessen(w, 1);
        assert.equal(L.summe(w), 20);
      });
      it("aus leerem Becher geht nichts (null)", () => {
        assert.equal(L.umgiessen([0, 10], 0), null);
      });
      it("Ziel würde über 20 ml steigen (null)", () => {
        assert.equal(L.umgiessen([5, 20], 0), null);
      });
      it("Eingabe wird nicht verändert", () => {
        const w = [14, 6];
        L.umgiessen(w, 0);
        assert.deepEqual(w, [14, 6]);
      });
      it("ungültiger Index gibt null", () => {
        assert.equal(L.umgiessen([14, 6], 2), null);
      });
      it("viermal von 0 gibt [10, 10], Waage steht gerade", () => {
        let w = [14, 6];
        for (let i = 0; i < 4; i++) w = L.umgiessen(w, 0);
        assert.deepEqual(w, [10, 10]);
        assert.equal(L.waageNeigung(w[0], w[1]), 0);
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
