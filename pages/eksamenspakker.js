import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Video from "../components/video";
import { useRef, useEffect, useState } from "react";
import Menu from "../components/menu";
import MobileMenu from "../components/mobileMenu";
export default function Eksamenspakker() {
  const [isDesktop, setDesktop] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 746) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }
    const updateMedia = () => {
      if (window.innerWidth > 746) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);
  return (
    <>
      <div className={styles.wrapper}>
        <object
          className={isDesktop ? styles.desktop : styles.mobile}
          data={`/img/${
            isDesktop ? "desktop" : "mobile"
          }/eksamenspakker/eksamenspakker.svg`}
        ></object>
        <div className={styles.baggrund}>
          <Image
            src={`/img/mobile/eksamenspakker/univers.png`}
            alt="baggrund"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.figur}>
          <Image
            src="/img/mobile/eksamenspakker/Fag.png"
            width={191}
            height={228}
            alt="figur"
          />
        </div>
      </div>
      <Video adem={styles.eksamenvido} />
      <Menu />
      <MobileMenu />
    </>
  );
}
