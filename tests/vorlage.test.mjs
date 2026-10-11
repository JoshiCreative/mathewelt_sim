import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { loadLogic } from "./helpers/loadLogic.mjs";
import { ausgleichSuite } from "./shared/ausgleich.suite.mjs";

const pfad = fileURLToPath(new URL("../vorlage/tool-vorlage.html", import.meta.url));
const L = loadLogic(pfad);

describe("Vorlage: Logik-Block", () => {
  it("ist vorhanden und frei von DOM-Zugriffen", () => {
    assert.ok(L, "LOGIC-Block in vorlage/tool-vorlage.html nicht gefunden");
  });
});

if (L) {
  ausgleichSuite(L);

  describe("pruefeVorhersage", () => {
    const werte = [15, 17, 12, 20];
    it("richtige Eingabe", () => {
      assert.equal(L.pruefeVorhersage(werte, "16").richtig, true);
    });
    it("Komma als Dezimaltrennzeichen wird akzeptiert", () => {
      assert.equal(L.pruefeVorhersage([1, 2], "1,5").richtig, true);
    });
    it("falsche Eingabe", () => {
      assert.equal(L.pruefeVorhersage(werte, "15").richtig, false);
    });
    it("leere oder ungültige Eingabe ist falsch, nicht 0", () => {
      assert.equal(L.pruefeVorhersage([0, 0], "").richtig, false);
      assert.equal(L.pruefeVorhersage(werte, "abc").richtig, false);
    });
    it("liefert den Sollwert mit", () => {
      assert.equal(L.pruefeVorhersage(werte, "1").soll, 16);
    });
  });
}
