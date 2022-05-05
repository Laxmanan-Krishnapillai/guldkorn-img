import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Video from "../components/Video";
import { useRef, useEffect, useState } from "react";
export default function Eksamenspakker() {
  return (
    <>
      <div className={styles.wrapper}>
        <object
          className={styles.mobile}
          data="/img/mobile/Eksamenspakker/Eksamenspakker.svg"
        ></object>
        <object
          className={styles.desktop}
          data="/img/desktop/Eksamenspakker/Eksamenspakker.svg"
        ></object>
        <div className={styles.pcBaggrund}>
          <Image
            src="/img/desktop/Home/univers.png"
            alt="desktop baggrund"
            width={901}
            height={1086}
          />
        </div>
      </div>
      <Video adem={styles.eksamenvido} />
    </>
  );
}
