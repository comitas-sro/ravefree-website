import { ComponentProps } from 'react';

interface FooterLinkProps extends Omit<ComponentProps<'a'>, 'className'> {
  isExternal?: boolean;
}

function FooterLink({ isExternal = false, ...props }: FooterLinkProps) {
  return (
    <a
      className="text-base-400 hover:text-base-100 mr-auto transition"
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      {...props}
    />
  );
}

export function Footer() {
  return (
    <div className="border-t-base-600/60 border-t">
      <footer className="site-container m-auto w-full pb-6">
        <div className="flex w-full flex-col justify-end gap-4 sm:flex-row sm:gap-10">
          <div className="flex flex-col">
            <p className="mt-6 mb-2 text-lg font-semibold">Social networks</p>
            <FooterLink href="https://www.instagram.com/" isExternal>
              Instagram
            </FooterLink>
            <FooterLink href="https://www.facebook.com/" isExternal>
              Facebook
            </FooterLink>
          </div>
          <div className="flex flex-col">
            <p className="mt-6 mb-2 text-lg font-semibold">
              Legal information & contact
            </p>
            <FooterLink href="terms-and-conditions.html">
              Terms and Conditions
            </FooterLink>
            <FooterLink href="privacy-policy.html">
              Privacy Policy
            </FooterLink>
            <FooterLink href="contact.html">Contact</FooterLink>
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
