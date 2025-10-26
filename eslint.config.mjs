import { defineConfig } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import * as mdx from "eslint-plugin-mdx";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

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
]);

export default eslintConfig;
