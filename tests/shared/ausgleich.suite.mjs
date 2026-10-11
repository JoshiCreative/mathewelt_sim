import { describe, it } from "node:test";
import assert from "node:assert/strict";

/**
 * Gemeinsame Tests für die Ausgleichswert-Logik.
 * Gilt für die Vorlage und für das MatheWelt-Tool (index.html).
 * Erwartete Funktionen in LOGIK:
 *   MAX_ML, summe, ausgleichswert, istAusgeglichen, istGanzzahligTeilbar,
 *   nimmWasser(werte, idx, menge=1)  -> { werte, pipette } | null
 *   gibWasser(werte, idx, pipette, menge=1, max=MAX_ML) -> { werte, pipette } | null
 */
export function ausgleichSuite(L) {
  describe("Ausgleichswert", () => {
    it("Aufgabe 1: Unicorns 64 ml auf 4 Kinder = 16 ml", () => {
      assert.equal(L.ausgleichswert([15, 17, 12, 20]), 16);
    });
    it("Aufgabe 1: Mathe-Asse 75 ml auf 5 Kinder = 15 ml", () => {
      assert.equal(L.ausgleichswert([13, 16, 15, 13, 18]), 15);
    });
    it("Aufgabe 3 (Medaillen-Struktur): 10 ml und 11 ml", () => {
      assert.equal(L.ausgleichswert([8, 12, 16, 4]), 10);
      assert.equal(L.ausgleichswert([10, 10, 14, 12, 9]), 11);
    });
    it("leeres Team ergibt 0, nicht NaN", () => {
      assert.equal(L.ausgleichswert([]), 0);
    });
    it("Expertenmodus: Dezimalzahlen sind erlaubt", () => {
      assert.equal(L.ausgleichswert([1, 2]), 1.5);
    });
  });

  describe("istAusgeglichen", () => {
    it("alle Becher gleich -> wahr", () => {
      assert.equal(L.istAusgeglichen([16, 16, 16, 16]), true);
    });
    it("ungleiche Becher -> falsch", () => {
      assert.equal(L.istAusgeglichen([15, 17, 12, 20]), false);
    });
    it("Rundungsfehler unter der Toleranz zählen als gleich", () => {
      assert.equal(L.istAusgeglichen([0.1 + 0.2, 0.3]), true);
    });
    it("leeres Team ist nicht ausgeglichen", () => {
      assert.equal(L.istAusgeglichen([]), false);
    });
  });

  describe("Anfängermodus: Gesamtmenge durch Kinderzahl teilbar", () => {
    it("Startmengen von Aufgabe 1 sind teilbar", () => {
      assert.equal(L.istGanzzahligTeilbar([15, 17, 12, 20]), true);
      assert.equal(L.istGanzzahligTeilbar([13, 16, 15, 13, 18]), true);
    });
    it("nicht teilbar: 3 ml auf 2 Kinder", () => {
      assert.equal(L.istGanzzahligTeilbar([1, 2]), false);
    });
    it("Dezimalsumme ist im Anfängermodus nicht erlaubt", () => {
      assert.equal(L.istGanzzahligTeilbar([0.5, 1, 1]), false);
    });
  });

  describe("Pipette", () => {
    it("nimmWasser: 1 ml aus einem Becher aufnehmen", () => {
      const r = L.nimmWasser([15, 17], 1);
      assert.deepEqual(r.werte, [15, 16]);
      assert.equal(r.pipette, 1);
    });
    it("nimmWasser: aus leerem Becher nicht möglich", () => {
      assert.equal(L.nimmWasser([0, 5], 0), null);
    });
    it("gibWasser: 1 ml aus der Pipette in einen Becher gießen", () => {
      const r = L.gibWasser([15, 16], 0, 1);
      assert.deepEqual(r.werte, [16, 16]);
      assert.equal(r.pipette, 0);
    });
    it("gibWasser: Becher läuft nicht über das Maximum (20 ml)", () => {
      assert.equal(L.MAX_ML, 20);
      assert.equal(L.gibWasser([20, 5], 0, 1), null);
    });
    it("gibWasser: leere Pipette gießt nichts", () => {
      assert.equal(L.gibWasser([5, 5], 0, 0), null);
    });
    it("Ändert die Eingabe nicht (Eingabe-Array bleibt unverändert)", () => {
      const werte = [15, 17];
      L.nimmWasser(werte, 1);
      assert.deepEqual(werte, [15, 17]);
    });
    it("Gesamtmenge bleibt beim Umschütten erhalten", () => {
      let werte = [15, 17, 12, 20];
      let pipette = 0;
      const gesamt = L.summe(werte);
      for (let i = 0; i < 100 && !(pipette === 0 && L.istAusgeglichen(werte)); i++) {
        const max = werte.indexOf(Math.max(...werte));
        const min = werte.indexOf(Math.min(...werte));
        const a = L.nimmWasser(werte, max);
        werte = a.werte;
        pipette += a.pipette;
        const g = L.gibWasser(werte, min, pipette);
        werte = g.werte;
        pipette = g.pipette;
        assert.equal(L.summe(werte) + pipette, gesamt);
      }
      assert.deepEqual(werte, [16, 16, 16, 16]);
      assert.equal(pipette, 0);
    });
  });
}
