// The World in One Page — 26 November 2026 (picture-first serif digest).
// The entry is the bundled entry.png; this program copies it, unchanged, to
// the output directory the grader names (MAKEFUN_OUTPUT_DIR, else /output)
// and leaves it world-readable, exactly as the kit starter contract requires.

import { chmodSync, copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

copyFileSync(new URL('./entry.png', import.meta.url), target);
chmodSync(target, 0o644);
