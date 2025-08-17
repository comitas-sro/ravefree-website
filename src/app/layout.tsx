import type { Metadata } from 'next';
import { Kanit } from 'next/font/google';

import { Footer } from './components/common/Footer';
import { Header } from './components/common/Header';

import './styles/globals.css';

const kanit = Kanit({
  weight: ["400", "500"],
  subsets: ["latin"]
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
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
