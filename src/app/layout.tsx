import { Footer } from './components/common/Footer';
import { Kanit } from 'next/font/google';
import './styles/globals.css';

const kanit = Kanit({
  weight: ["400", "500"],
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={kanit.className}>
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
