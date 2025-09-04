import Link, { LinkProps } from "next/link";
import { ComponentProps } from "react";

import styles from "./styles.module.css";

import FacebookIcon from "./facebook.svg";
import InstagramIcon from "./instagram.svg";

const commonLinkAttrs = {
  className: `text-base-400 hover:text-base-100 transition ${styles.link}`,
};

function ExternalFooterLink(props: Omit<ComponentProps<"a">, "className">) {
  return (
    <a
      {...commonLinkAttrs}
      rel="noopener noreferrer"
      target="_blank"
      {...props}
    />
  );
}

function FooterLink<T>(props: Omit<LinkProps<T>, "className">) {
  return <Link {...commonLinkAttrs} {...props} />;
}

export function Footer() {
  return (
    <div className="border-t-base-600/60 border-t">
      <footer className="site-container m-auto w-full pb-6">
        <div className="flex w-full flex-col justify-end gap-4 sm:flex-row sm:gap-10">
          <div className="flex flex-col">
            <p className="mt-6 mb-2 text-lg font-semibold">Follow Us</p>
            <div className="flex gap-2">
              <ExternalFooterLink
                href="https://www.instagram.com/ravefree.eu/"
                title="Instagram"
              >
                <InstagramIcon />
              </ExternalFooterLink>
              <ExternalFooterLink
                href="https://www.facebook.com/share/1Ys38N6RKo/?mibextid=wwXIfr"
                title="Facebook"
              >
                <FacebookIcon />
              </ExternalFooterLink>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="mt-6 mb-2 text-lg font-semibold">Legal Information</p>
            <FooterLink href="/terms-and-conditions">
              Terms and Conditions
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
