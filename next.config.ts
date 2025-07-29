import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    typedRoutes: true,
  },
  output: 'export',
  trailingSlash: true,
};

export default nextConfig;
