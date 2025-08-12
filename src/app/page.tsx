import type { Metadata } from 'next';
import Image from 'next-export-optimize-images/image';

import banner from './banner.webp';
import genesis from './genesis.webp';
import { SignUpForm } from './components/common/SignUpForm';

export const metadata: Metadata = {
  title: 'Contact form',
};

export default function Home() {
  return (
    <div className="bg-linear-to-t from-[#20003A] to-black py-20 text-center">
      <Image
        className="max-w-sm m-auto px-14 z-10 relative"
        fetchPriority="high"
        layout="responsive"
        loading="eager"
        src={banner}
        alt="Banner"
      />
      <video
        autoPlay
        loop
        muted
        width="600"
        className="m-auto -mt-10 md:-mt-20"
      >
        <source src="/banner.webm" type="video/webm" />
      </video>
      <Image
        className='max-w-sm m-auto -mt-20 md:-mt-30 px-16 z-10 relative'
        fetchPriority="high"
        layout="responsive"
        loading="eager"
        src={genesis}
        alt="Genesis"
      />
      <p className='text-[24px] leading-none mt-2'>06/12/25</p>
      <p className='text-[39px] leading-none'>A4 STUDIO</p>
      <p className='text-[18px] leading-none'>BRATISLAVA SLOVAKIA</p>
      <p className='text-[24px] leading-none mt-2'>SIGN UP FOR FREE ENTRY</p>
      <SignUpForm />
    </div>
  );
}
