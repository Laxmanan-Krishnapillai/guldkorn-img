import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Video from "../components/video";
import Menu from "../components/menu";
import { useRef, useEffect, useState } from "react";
import Footer from "../components/Footer";
import MobileMenu from "../components/mobileMenu";
export default function Home() {
  var siteHeight = useRef();
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
          ref={siteHeight}
          className={isDesktop ? styles.desktop : styles.mobile}
          data={`/img/${isDesktop ? "desktop" : "mobile/home"}/home.svg`}
        ></object>
        <div className={styles.figur}>
          <Image
            src="/img/mobile/home/3DFigurHome.png"
            width={177}
            height={358}
            alt="figur"
          />
        </div>
      </div>
      <Video />
      <MobileMenu isDesktop={isDesktop} />
      <Footer refItem={siteHeight} isDesktop={isDesktop} />
      <div className={styles.baggrund}>
        <Image
          src={`/img/${isDesktop ? "desktop" : "mobile/home"}/univers.png`}
          alt="baggrund"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <Menu />
    </>
  );
}
