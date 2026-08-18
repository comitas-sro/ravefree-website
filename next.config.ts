import path from "node:path";

import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Optimization is unsupported for `output: 'export'`.
    unoptimized: true,
  },
  output: "export",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  trailingSlash: true,
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
        condition: {
          not: {
            query: /url/,
          },
        },
      },
      "*.webm": {
        type: "asset",
      },
    },
  },
  typedRoutes: true,
  webpack(config, context) {
    const fileLoaderRule = config.module.rules.find(
      (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        rule: any,
      ) => rule.test?.test?.(".svg"),
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: {
          not: [...fileLoaderRule.resourceQuery.not, /url/],
        },
        use: ["@svgr/webpack"],
      },
      {
        test: /\.webm$/i,
        type: "asset/resource",
        generator: {
          // If the files are only used by server components, they end up in
          // `.next/server/{chunks,}/static/media`, which isn't copied to the
          // output directory.
          outputPath: context.isServer
            ? path.join("..", context.dev ? "" : "..")
            : "",
        },
      },
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
