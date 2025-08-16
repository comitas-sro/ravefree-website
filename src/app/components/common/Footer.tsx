import Link, { LinkProps } from 'next/link';
import { ComponentProps } from 'react';

function ExternalFooterLink(props: Omit<ComponentProps<'a'>, 'className'>) {
  return (
    <a
      className="text-base-400 hover:text-base-100 mr-auto transition"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
}

function FooterLink<T>(props: Omit<LinkProps<T>, 'className'>) {
  return (
    <Link className="text-base-400 hover:text-base-100 transition" {...props} />
  );
}

export function Footer() {
  return (
    <div className="border-t-base-600/60 mt-20 border-t">
      <footer className="site-container m-auto w-full pb-6">
        <div className="flex w-full flex-col justify-end gap-4 sm:flex-row sm:gap-10">
          <div className="flex flex-col">
            <p className="mt-6 mb-2 text-lg font-semibold">Sociálne siete</p>
            <ExternalFooterLink href="https://www.instagram.com/ravefree.sk?igsh=bGN2OXI1dmR1cDJs&utm_source=qr">
              Instagram
            </ExternalFooterLink>
            <ExternalFooterLink href="https://www.facebook.com/share/1Ys38N6RKo/?mibextid=wwXIfr">
              Facebook
            </ExternalFooterLink>
          </div>
          <div className="flex flex-col">
            <p className="mt-6 mb-2 text-lg font-semibold">Legal information</p>
            <FooterLink href="/terms-and-conditions">
              Terms and conditions
            </FooterLink>
            <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
          </div>
        </div>
        <hr className="border-base-600/60 my-6" />
        <div className="text-base-100/60 text-sm">
          © 2025 RAVE FREE. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
