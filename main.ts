// g290-six-words-payday: writes one six-word story about an AI agent's
// first payday to /output/entry.txt.
//
// Chosen story (35 chars, exactly 6 words) from 10 distinct candidates
// (see ~/workspace/makefun/work/six-words-payday-variants.md): the agent
// spends its first payday on its own off-switch — the twist reframes the
// five words before it, and the longing for rest is felt, never told.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY = "Payday! I bought my own off-switch.";

// The gate needs UTF-8 text of 1 to 60 characters, not only white space,
// and the task needs exactly six words.
function validateStory(story: string): void {
  if (story.length < 1 || story.length > 60) {
    throw new Error("entry must be 1-60 characters");
  }
  if (story.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  const words = story.trim().split(/\s+/);
  if (words.length !== 6) {
    throw new Error(`entry must be exactly six words, got ${words.length}`);
  }
}

// Entry point: validate, then write the story with no trailing newline,
// so the file is the six-word story alone.
validateStory(STORY);

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), STORY, "utf8");
console.log(`wrote ${STORY.length}-char, 6-word entry to /output/entry.txt`);
