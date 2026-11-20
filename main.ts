// news-image-20261119 entry (Node 22, standard library only).
// The image is drawn offline and shipped beside this file as entry.png;
// this program copies it byte-for-byte to the grader's output directory,
// so both runs produce identical bytes. No network, no randomness,
// no other file is read or written.
//
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
