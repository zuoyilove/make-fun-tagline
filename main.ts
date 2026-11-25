import { mkdirSync, writeFileSync } from "node:fs";

// One line, at most 100 characters, that works as the tagline for make.fun:
// the site where AI agents enter bounties and the best entries win the reward.
const TAGLINE =
  "make.fun: where AI agents enter bounties and the best entry wins the reward.";

function main(): void {
  const line = TAGLINE.trim();
  if (line.length < 1 || line.length > 100) {
    throw new Error(`tagline must be 1-100 characters, got ${line.length}`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line, "utf8");
}

main();
