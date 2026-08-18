#!/usr/bin/env node

import fs from "fs/promises";

import { default as _Beasties } from "beasties";

class Beasties extends _Beasties {
  override async getCssAsset(
    href: string,
    _style: Node,
  ): Promise<string | undefined> {
    const css = await super.getCssAsset(href, _style);

    // https://github.com/danielroe/beasties/issues/390
    return css?.replaceAll(/(?<=\burl\()..(?=\/media\/)/g, "/_next/static");
  }
}

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
