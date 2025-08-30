import type { Metadata } from "next";
import { Kanit } from "next/font/google";

import { Footer } from "./components/common/Footer";
import { Header } from "./components/common/Header";

import "./styles/globals.css";

import icon_png from "./_icon.png";
import icon_svg from "./_icon.svg?url";

const kanit = Kanit({
  weight: ["400", "500"],
  subsets: ["latin"],
});

const siteName = "RAVE FREE";

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={kanit.className}>
      <head>
        {/* Automatic icon isn't used to make sure it's cached properly. */}
        <link
          href={icon_png.src}
          rel="icon"
          sizes={`${icon_png.width}x${icon_png.height}`}
          type="image/png"
        />
        <link href={icon_svg.src} rel="icon" sizes="any" type="image/svg+xml" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
