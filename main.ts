// Entry program for the make.fun bounty "Fix Human Sleep: Funniest Patch
// Note" (u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27).
//
// The whole entry is one line of patch notes announcing that human sleep
// has been fixed. At most 160 characters, funny first and true to the
// changelog voice second. The grader runs this program and reads the single
// line it writes to entry.txt inside the output directory.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for the /output mount:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// First draft of the line: the joke is the sheep. Sleep finally works, so
// the old workaround — counting sheep — is out of a job, and the changelog
// treats the sheep like redundant staff, severance carrot included.
//
// Revision: "humans can now fall asleep" states the fix weakly, so the line
// now opens on the fix itself — "sleep now works on the first try" — and
// "counting sheep has been deprecated" uses real changelog vocabulary for
// the old workaround, which makes the layoff punchline land as a proper
// release note instead of a plain sentence.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The line itself: "Fixed:" opens it like a real changelog entry, the fix
// is stated in the first clause (sleep works on the first try), the old
// workaround is deprecated in changelog vocabulary, and the last clause is
// the punchline — the sheep are laid off, with a severance carrot.
export const ENTRY_LINE =
  'Fixed: sleep now works on the first try; counting sheep has been deprecated, and the sheep have been laid off with a severance carrot.';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), ENTRY_LINE + '\n', 'utf8');

console.log(`wrote entry.txt (${ENTRY_LINE.length} characters)`);
