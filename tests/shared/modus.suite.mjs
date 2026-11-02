import { describe, it } from "node:test";
import assert from "node:assert/strict";

/**
 * Zusatz-Tests nur für index.html (die Vorlage hat diese Funktionen nicht):
 * runde, kindDazuAnfaenger, kindWegAnfaenger, Dezimalmengen im Expertenmodus.
 */
export function modusSuite(L) {
  describe("runde", () => {
    it("0,1 + 0,2 wird 0,3", () => {
      assert.equal(L.runde(0.1 + 0.2), 0.3);
    });
    it("rundet auf eine Nachkommastelle", () => {
      assert.equal(L.runde(19.96), 20);
      assert.equal(L.runde(15.14), 15.1);
      assert.equal(L.runde(7), 7);
    });
  });

  describe("kindDazuAnfaenger", () => {
    it("neues Kind bringt den Ausgleichswert mit", () => {
      assert.deepEqual(L.kindDazuAnfaenger([15, 17, 12, 20], 6), [15, 17, 12, 20, 16]);
    });
    it("Ausgleichswert bleibt gleich, Summe bleibt teilbar", () => {
      const neu = L.kindDazuAnfaenger([13, 15, 15, 14, 18], 6);
      assert.equal(L.ausgleichswert(neu), 15);
      assert.equal(L.istGanzzahligTeilbar(neu), true);
    });
    it("null bei voller Gruppe oder nicht teilbarer Summe; Eingabe bleibt", () => {
      const w = [15, 17, 12, 20];
      assert.equal(L.kindDazuAnfaenger(w, 4), null);
      assert.equal(L.kindDazuAnfaenger([1, 2], 6), null);
      assert.deepEqual(w, [15, 17, 12, 20]);
    });
  });

  describe("kindWegAnfaenger", () => {
    it("Unicorns: Ausgleichswert 16 bleibt, 3 Becher, Summe 48", () => {
      const neu = L.kindWegAnfaenger([15, 17, 12, 20]);
      assert.equal(neu.length, 3);
      assert.equal(L.summe(neu), 48);
      assert.equal(L.ausgleichswert(neu), 16);
    });
    it("entnommener Wert unter dem Ausgleichswert: Wasser wird genommen", () => {
      const w = [15, 17, 20, 12]; // letzter Becher 12 < 16
      const neu = L.kindWegAnfaenger(w);
      assert.equal(neu.length, 3);
      assert.equal(L.ausgleichswert(neu), 16);
      assert.deepEqual(w, [15, 17, 20, 12]);
    });
    it("alle Werte ganzzahlig und zwischen 0 und MAX_ML", () => {
      for (const w of [[15, 17, 12, 20], [20, 20, 0, 0], [0, 20, 20, 20, 0], [13, 15, 15, 14, 18]]) {
        const neu = L.kindWegAnfaenger(w);
        assert.ok(neu, String(w));
        assert.ok(neu.every((x) => Number.isInteger(x) && x >= 0 && x <= L.MAX_ML), String(neu));
        assert.equal(L.ausgleichswert(neu), L.ausgleichswert(w));
      }
    });
    it("null bei Mindestzahl Kinder", () => {
      assert.equal(L.kindWegAnfaenger([5, 7]), null);
      assert.equal(L.kindWegAnfaenger([5, 6, 7], 3), null);
    });
  });

  describe("Dezimalmengen (Expertenmodus)", () => {
    it("nimmWasser 0,5 und 0,1", () => {
      assert.deepEqual(L.nimmWasser([5, 5], 0, 0.5), { werte: [4.5, 5], pipette: 0.5 });
      const r = L.nimmWasser([0.3, 5], 0, 0.1);
      assert.equal(L.runde(r.werte[0]), 0.2);
      assert.equal(L.nimmWasser([0.4, 5], 0, 0.5), null);
    });
    it("gibWasser: 20-ml-Grenze", () => {
      assert.equal(L.gibWasser([19.6], 0, 1, 0.5), null);
      assert.equal(L.gibWasser([19.5], 0, 1, 0.5).werte[0], 20);
      assert.equal(L.gibWasser([5], 0, 0.4, 0.5), null);
    });
    it("Gesamtmenge bleibt mit runde erhalten", () => {
      let w = [10.3, 4.2, 7];
      const vorher = L.runde(L.summe(w));
      const n = L.nimmWasser(w, 0, 0.1);
      const g = L.gibWasser(n.werte, 1, n.pipette, 0.1);
      assert.equal(L.runde(L.summe(g.werte) + g.pipette), vorher);
    });
  });
}
