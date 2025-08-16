import path from "node:path";

import type { NextConfig } from "next";
import withExportImages from "next-export-optimize-images";

const nextConfig: Promise<NextConfig> = withExportImages({
  experimental: {
    // At the time of writing, Next.js doesn't inline critical-path CSS and
    // since there's so little CSS, we can inline it all.
    inlineCss: true,
    typedRoutes: true,
  },
  output: "export",
  trailingSlash: true,
  webpack: (config, context) => {
    config.module.rules.push({
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
    });

    return config;
  },
});

export default nextConfig;
