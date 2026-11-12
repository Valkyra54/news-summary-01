// news-summary-01 entry (Node 22, standard library only).
// The summary lives in summary.txt beside this file; the program copies it
// to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output) and nothing else.
// It writes the file's exact bytes, so both grader runs produce the same output.
// Before copying, it guards the summary: it must be valid UTF-8, non-empty,
// and 1–2,000 Unicode code points, or the entry fails loudly instead of
// submitting a bad file.
// Run locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const bytes = readFileSync(join(here, 'summary.txt'));

// Guard: valid UTF-8 (fatal decode), non-empty, within the 1–2,000
// code-point limit. Throws a clear error instead of writing a bad entry.
const text = new TextDecoder('utf-8', { fatal: true }).decode(bytes);
const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 2000) {
  throw new Error(`summary.txt must hold 1-2000 Unicode code points, found ${codePoints}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), bytes);
