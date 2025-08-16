import type { Metadata } from 'next';
import Image from 'next-export-optimize-images/image';

import mobile_banner from './mobile-banner.webp';
import pc_banner from './pc-banner.webp';
import { SignUpForm } from './components/common/SignUpForm';

export const metadata: Metadata = {
  title: 'Kontaktný formulár',
};

export default function Home() {
  return (
    <>
      <Image
        className="md:hidden"
        fetchPriority="high"
        layout="responsive"
        loading="eager"
        src={mobile_banner}
        alt="Banner"
      />
      <Image
        className="hidden md:block"
        fetchPriority="high"
        layout="responsive"
        loading="eager"
        src={pc_banner}
        alt="Banner"
      />
      <SignUpForm />
    </>
  );
}
