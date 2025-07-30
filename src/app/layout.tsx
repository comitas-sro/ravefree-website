import Image from "next-export-optimize-images/image";

import "./globals.css";

import facebook_icon from "./facebook.svg";
import instagram_icon from "./instagram.svg";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        {children}
        <footer>
          <div>
            <a href="obchodne-podmienky.html">Obchodné podmienky</a>
            |
            <a href="ochrana-osobnych-udajov.html">Ochrana osobných údajov</a>
            |
            <a href="kontakt.html">Kontakt</a>
          </div>
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank">
              <Image
                alt="Instagram"
                src={instagram_icon}
                />
            </a>
            <a href="https://www.facebook.com" target="_blank">
              <Image
                alt="Facebook"
                src={facebook_icon}
                />
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
