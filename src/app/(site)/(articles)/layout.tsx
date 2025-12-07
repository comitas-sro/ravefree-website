import "../../styles/markdown-content.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // On Next.js 16, the pages don't scroll to the very top when smoothing
    // scrolling is enabled. scroll-mt-20 is used in TableOfContents component
    // of Astro Galaxy theme v6.2.2 to prevent the content from being hidden
    // behind the header.
    <article
      className="mx-auto my-24 max-w-3xl px-4 md:mt-36 md:px-8 markdown-content
      [&_*]:scroll-mt-20"
    >
      {children}
    </article>
  );
}
