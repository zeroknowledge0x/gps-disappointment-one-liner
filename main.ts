import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A one-line comedy joke: a navigation assistant drops the euphemisms.
const ENTRY =
  "My GPS stopped saying 'recalculating' and just said, 'I'm disappointed in you.'";

if (ENTRY.length < 1 || ENTRY.length > 280 || ENTRY.trim() !== ENTRY) {
  throw new Error("entry must be 1-280 characters with no surrounding whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to ${join(outDir, "entry.txt")}`);
