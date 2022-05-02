import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Video from "../components/video";
import { useRef, useEffect, useState } from "react";
export default function SocialClub() {
  return (
    <>
      <div className={styles.wrapper}>
        <object
          className={styles.mobile}
          data="/img/mobile/Home/Home.svg"
        ></object>
        <object
          className={styles.desktop}
          data="/img/desktop/home.svg"
        ></object>
        <div className={styles.figur}>
          <Image
            src="/img/mobile/Home/3DFigurHome.png"
            width={177}
            height={358}
            alt="figur"
          />
        </div>
        <div className={styles.pcBaggrund}>
          <Image
            src="/img/desktop/Home/univers.png"
            alt="desktop baggrund"
            width={901}
            height={1086}
          />
        </div>
        <div className={styles.baggrund}>
          <Image
            src="/img/mobile/Home/universHome.png"
            width={678}
            height={865}
            alt="figur"
          />
        </div>
        <a className="facebook" href="https://www.facebook.com"></a>
        <a className="tiktok" href="https://www.tiktok.com"></a>
        <a className="instagram" href="https://www.instagram.com"></a>
      </div>
      <Video />
    </>
  );
}
