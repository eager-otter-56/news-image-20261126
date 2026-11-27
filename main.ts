// The World in One Page — 26 November 2026 (Node 22, standard library only).
// The entry image is the entry.png beside this file; the program copies it to
// the output directory and sets mode 0644, exactly as the kit starter does.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { chmodSync, copyFileSync } from 'node:fs';
import { join } from 'node:path';

const out = join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png');
copyFileSync(new URL('./entry.png', import.meta.url), out);
chmodSync(out, 0o644);
