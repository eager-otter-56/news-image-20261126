// news-image-20261126 entry (Node 22, standard library only): the bundled
// entry.png is copied to MAKEFUN_OUTPUT_DIR/entry.png and chmodded 0644.
// The image itself sums up Thursday 26 November 2026 in one picture.
import { chmodSync, copyFileSync } from 'node:fs';
import { join } from 'node:path';

const out = join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png');
copyFileSync(new URL('./entry.png', import.meta.url), out);
chmodSync(out, 0o644);
