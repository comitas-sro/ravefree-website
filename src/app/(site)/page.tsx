import type { Metadata } from 'next';
import Image from 'next-export-optimize-images/image';

import video_banner_fallback from './video-banner-fallback.webp';
import video_banner from './video-banner.webm';
import banner from './banner.webp';
import genesi from './genesi.webp';
import { SignUpForm } from '../components/common/SignUpForm';

export const metadata: Metadata = {
  title: 'Sign Up',
};

export default function Home() {
  return (
    <div className="bg-linear-to-t from-[#20003A] to-black py-20">
      <Image
        className="max-w-sm m-auto px-14"
        fetchPriority="high"
        layout="responsive"
        loading="eager"
        src={banner}
        alt="RAVE FREE"
      />
      <video
        autoPlay
        playsInline // Required for iOS to play without user interaction
        loop
        muted
        width={600}
        height={600}
        className="m-auto"
      >
        <source src={video_banner} type="video/webm" />
        <Image
          className="max-w-sm m-auto px-14"
          fetchPriority="high"
          layout="responsive"
          loading="eager"
          src={video_banner_fallback}
          alt="RF"
        />
      </video>
      <Image
        className='max-w-sm m-auto px-16'
        fetchPriority="high"
        layout="responsive"
        loading="eager"
        src={genesi}
        alt="GENESI[IT]"
      />
      <SignUpForm />
    </div>
  );
}
