import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
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
