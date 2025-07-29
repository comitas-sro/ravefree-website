import type { Metadata } from "next";
import Image from "next/image";

import mobile_banner from "./mobile-banner.png";
import pc_banner from "./pc-banner.png";
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
        loading="eager"
        src={mobile_banner}
        alt="Banner"
        />
      <Image
        className={`${styles.banner} ${styles.pcBanner}`}
        fetchPriority="high"
        loading="eager"
        src={pc_banner}
        alt="Banner"
        />
      <div className={styles.formContainer}>
        <h1>Registrácia pre vstup zdarma</h1>
        <iframe
          className={styles.form}
          src="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=egtGmlDYeUKxxu4-_TVj3xOnwCQn8N5PhN8vGOobWQ5UOFdaUTM3N09ROEtTUkFHQktBS0ZMSVlFQy4u&embed=true"
          frameBorder="0"
          marginWidth={0}
          marginHeight={0}
          allowFullScreen
        >
        </iframe>
      </div>
    </>
  );
}
