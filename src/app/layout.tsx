import { Footer } from './components/common/Footer';
import './styles/globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
