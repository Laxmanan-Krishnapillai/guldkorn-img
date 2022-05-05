import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRef, useEffect, useState } from "react";
import Video from "../components/Video";
export default function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <object
          className={styles.mobile}
          data="/img/mobile/App/App.svg"
        ></object>
        <object
          className={styles.desktop}
          data="/img/desktop/App/App.svg"
        ></object>
        <a className="facebook" href="https://www.facebook.com"></a>
        <a className="tiktok" href="https://www.tiktok.com"></a>
        <a className="instagram" href="https://www.instagram.com"></a>
      </div>
      <Video />
    </>
  );
}
