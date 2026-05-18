import { defineConfig } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import * as mdx from "eslint-plugin-mdx";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

import packageLockFile from "./package-lock.json" with { type: "json" };

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    ...mdx.flat,
    files: ["**/*.mdx"],
  },
  {
    ...mdx.flatCodeBlocks,
    files: ["**/*.mdx"],
  },
  eslintPluginPrettierRecommended,
  {
    settings: {
      // Fix for ESLint 10+: eslint-plugin-react uses context.getFilename()
      // (legacy API) which was removed in ESLint 10 flat config. Declaring the
      // version explicitly prevents the plugin from trying to auto-detect it
      // and failing.
      // May be removed once https://github.com/vercel/next.js/issues/89764 is
      // resolved.
      react: {
        version:
          packageLockFile.packages["node_modules/react"].version.split(".")[0],
      },
    },
  },
]);

export default eslintConfig;
