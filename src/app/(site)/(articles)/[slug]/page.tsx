// Since Next.js 16.2.0, the following error is emitted during build if an MDX
// page exports metadata:
//
//   ./src/app/(site)/(articles)/privacy-policy/page.mdx
//   Error:   x You are attempting to export "metadata" from a component marked
//   with "use client", which is disallowed. "metadata" must be resolved on the
//   server before the page component is rendered. Keep your page as a Server
//   Component and move Client Component logic to a separate file. Read more:
//   https://nextjs.org/docs/app/api-reference/functions/generate-metadata#why-generatemetadata-is-server-component-only
//   |
//
//   ,-[/home/runner/work/ravefree-website/ravefree-website/src/app/(site)/(articles)/privacy-policy/page.mdx:4:1]
//   1 | /*prettier-ignore*/
//   2 | import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
//   3 | import {useMDXComponents as _provideComponents} from "next-mdx-import-source-file";
//   4 | export const metadata = {
//   :              ^^^^^^^^
//   5 |   title: "Privacy Policy"
//   6 | };
//   7 | function _createMdxContent(props) {
//   `----
//
//   Import trace for requested module:
//   ./src/app/(site)/(articles)/privacy-policy/page.mdx
//
// The issue is tracked as https://github.com/vercel/next.js/issues/91735 and
// this page is a workaround.

import type { Metadata } from "next";

const SLUGS = ["privacy-policy", "terms-and-conditions"] as const;
type Slug = (typeof SLUGS)[number];

const METADATA: Record<Slug, Metadata> = {
  "privacy-policy": {
    title: "Privacy Policy",
  },
  "terms-and-conditions": {
    title: "Terms and Conditions",
  },
};

type Params = {
  slug: Slug;
};

type Props = {
  params: Promise<Params>;
};

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  return METADATA[slug];
}

export function generateStaticParams(): Params[] {
  return SLUGS.map((slug) => ({ slug }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const { default: Article } = await import(`./articles/${slug}.mdx`);

  return <Article />;
}
