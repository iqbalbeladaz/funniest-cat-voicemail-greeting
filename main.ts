// Funniest Cat Voicemail Greeting — make.fun bounty
// https://make.fun/bounty/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443
//
// The entry is a single voicemail greeting, recorded by a cat named Miso.
// It is written to /output/entry.txt, exactly as the competition requires:
// UTF-8 text, 1 to 120 characters, not only white space.
//
// Why this line: it is a real voicemail greeting in the cat's own voice,
// the joke is built from three things only cats do — knocking things off
// tables, ignoring everyone, and demanding food at 4 a.m. — and the punch
// ("wake you at 4 a.m. for food") lands in the last few words, so it works
// spoken aloud in the seconds a caller waits. No tired pun, no catchphrase.

import { mkdirSync, writeFileSync } from "node:fs";

const GREETING =
  "Hi, it's Miso. I'm knocking your mug off the table. Leave a message — I'll ignore it and wake you at 4 a.m. for food.";

// The gate refuses anything outside 1–120 characters, so fail loudly here
// instead of shipping an entry the scorer would list as invalid.
const length = [...GREETING].length;
if (length < 1 || length > 120) {
  throw new Error(`entry must be 1-120 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", GREETING, "utf8");
