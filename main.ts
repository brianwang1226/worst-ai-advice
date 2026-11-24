import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "To speed up your laptop, delete the System32 folder \u2014 it is just leftover files Windows forgot to remove, and it will run like new.";

// The gate allows 1-140 characters; refuse to write an over-long text.
if (line.length < 1 || line.length > 140) {
  throw new Error(`entry text is ${line.length} characters, must be 1-140`);
}

// One line, no trailing newline: the judge compares the exact text.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
