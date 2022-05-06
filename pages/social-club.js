import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Video from "../components/video";
import MobileMenu from "../components/mobileMenu";
import { useRef, useEffect, useState } from "react";
import Menu from "../components/menu";
export default function SocialClub() {
  return (
    <>
      <div className={styles.wrapper}>
        <object
          className={styles.mobile}
          data="/img/mobile/SocialClub/SocialClub.svg"
        ></object>
        <object
          className={styles.desktop}
          data="/img/desktop/SocialClub/SocialClub.svg"
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
            src="/img/desktSocialClub/S.png"
            alt="desktop baggrund"
            width={901}
            height={1086}
          />
        </div>
      </div>
      <Video adem={styles.socialClub} />
      <MobileMenu />
      <Menu />
    </>
  );
}
