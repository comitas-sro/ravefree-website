import type { NextConfig } from "next";
import withExportImages from "next-export-optimize-images";

const nextConfig: Promise<NextConfig> = withExportImages({
  experimental: {
    // At the time of writing, Next.js doesn't inline critical-path CSS and
    // since there's so little CSS, we can inline it all.
    inlineCss: true,
    typedRoutes: true,
  },
  output: 'export',
  trailingSlash: true,
});

export default nextConfig;
