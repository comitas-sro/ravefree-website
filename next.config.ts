import path from "node:path";

import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import withExportImages from "next-export-optimize-images";

const nextConfig: NextConfig = {
  experimental: {
    // At the time of writing, Next.js doesn't inline critical-path CSS and
    // since there's so little CSS, we can inline it all.
    inlineCss: true,
  },
  output: "export",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  trailingSlash: true,
  typedRoutes: true,
  webpack(config, context) {
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule.test?.test?.(".svg"),
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

export default withExportImages(withMDX(nextConfig));
