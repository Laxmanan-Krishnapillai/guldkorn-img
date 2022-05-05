import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Video from "../components/Video";
import unique from "../styles/Unique.module.css";
import MobileMenu from "../components/MobileMenu";
import { useRef, useEffect, useState } from "react";
export default function Eksamenspakker() {
  return (
    <>
      <div className={styles.wrapper}>
        <MobileMenu />
        <object
          className={styles.mobile}
          data="/img/mobile/Eksamenspakker/Eksamenspakker2.svg"
        ></object>
        <object
          className={styles.desktop}
          data="/img/desktop/Eksamenspakker/Eksamenspakker2.svg"
        ></object>
        <div className={styles.pcBaggrund}>
          <Image
            src="/img/desktop/Home/univers.png"
            alt="desktop baggrund"
            width={901}
            height={1086}
          />
        </div>
        <a className="facebook" href="https://www.facebook.com"></a>
        <a className="tiktok" href="https://www.tiktok.com"></a>
        <a className="instagram" href="https://www.instagram.com"></a>
      </div>
    </>
  );
}
