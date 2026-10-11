import { existsSync, readFileSync } from "node:fs";

/**
 * Lädt den DOM-freien Logik-Block einer HTML-Datei.
 * Der Block steht zwischen /* LOGIC-START *\/ und /* LOGIC-END *\/ und
 * endet mit `const LOGIK = { ... };`.
 * Gibt das LOGIK-Objekt zurück oder null, wenn Datei oder Block fehlen.
 * Greift der Block auf document/window zu, wirft das Laden einen Fehler,
 * und genau das soll der Test sichtbar machen.
 */
export function loadLogic(htmlPfad) {
  if (!existsSync(htmlPfad)) return null;
  const html = readFileSync(htmlPfad, "utf8");
  const treffer = html.match(/\/\* LOGIC-START \*\/([\s\S]*?)\/\* LOGIC-END \*\//);
  if (!treffer) return null;
  return new Function(`${treffer[1]}\nreturn LOGIK;`)();
}
