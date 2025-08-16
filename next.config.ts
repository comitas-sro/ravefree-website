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
  webpack(config) {
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
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
});

export default nextConfig;
