#!/usr/bin/env node

import fs from "fs/promises";

import Beasties from "beasties";

const beasties = new Beasties({
  inlineFonts: true, // Next.js does this with inlineCss.
  path: "out",
  preloadFonts: false, // Done by Next.js.
});

for await (const file of await fs.glob("out/**/*.html")) {
  console.log(`Inlining critical CSS into ${file}`);

  const input = await fs.readFile(file, "utf8");
  const output = await beasties.process(input);
  await fs.writeFile(file, output, "utf8");
}
