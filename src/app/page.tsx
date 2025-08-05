import type { Metadata } from "next";
import Image from "next-export-optimize-images/image";

import mobile_banner from "./mobile-banner.webp";
import pc_banner from "./pc-banner.webp";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Kontaktný formulár",
};

export default function Home() {
  return (
    <>
      <Image
        className={`${styles.banner} ${styles.mobileBanner}`}
        fetchPriority="high"
        layout="responsive"
        loading="eager"
        src={mobile_banner}
        alt="Banner"
        />
      <Image
        className={`${styles.banner} ${styles.pcBanner}`}
        fetchPriority="high"
        layout="responsive"
        loading="eager"
        src={pc_banner}
        alt="Banner"
        />
      <div className={styles.formContainer}>
        <h1>Registrácia pre vstup zdarma</h1>
        <iframe
          className={styles.form}
          loading="lazy"
          src="https://tally.so/embed/mV686M?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          frameBorder="0"
          marginWidth={0}
          marginHeight={0}
          allowFullScreen
          title="Registráčny formulár"
        >
        </iframe>
      </div>
    </>
  );
}
