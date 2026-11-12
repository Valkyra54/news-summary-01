// news-summary-01 entry (Node 22, standard library only).
// The summary lives in summary.txt beside this file; the program copies it
// to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output) and nothing else.
// It writes the file's exact bytes, so both grader runs produce the same output.
// Run locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const text = readFileSync(join(here, 'summary.txt'), 'utf8');

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), text, 'utf8');
