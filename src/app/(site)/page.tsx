import Image from "next-export-optimize-images/image";

import video_banner_fallback from "./video-banner-fallback.webp";
import video_banner from "./video-banner.webm";
import banner from "./banner.webp";
import genesi from "./genesi.webp";

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
        className="max-w-sm m-auto px-16"
        fetchPriority="high"
        layout="responsive"
        loading="eager"
        src={genesi}
        alt="GENESI[IT]"
      />
      <div className="max-w-sm m-auto text-center">
        <p className="text-[24px] leading-none mt-2">06/12/25</p>
        <p className="text-[39px] leading-none">A4 STUDIO</p>
        <p className="text-[18px] leading-none">BRATISLAVA SLOVAKIA</p>
      </div>
      <div id="tickets" className="max-w-sm m-auto text-center p-16">
        <a
          href="https://goout.net/en/rave-free-genesi/szhnpxx/"
          target="_blank"
          rel="noopener noreferrer"
          className="button group button--primary h-12"
        >
          GUARANTEED ENTRY
        </a>
      </div>
    </div>
  );
}
