import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // At the time of writing, Next.js doesn't inline critical-path CSS and
    // since there's so little CSS, we can inline it all.
    inlineCss: true,
    typedRoutes: true,
  },
  images: {
    // Optimization is unsupported for `output: 'export'`.
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
};

export default nextConfig;
