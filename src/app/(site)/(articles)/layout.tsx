import "../../styles/markdown-content.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <article className="mx-auto my-24 max-w-3xl px-4 md:mt-36 md:px-8 markdown-content">
      {children}
    </article>
  );
}
