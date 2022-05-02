import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../styles/Video.module.css";
export default function Video({
  src = "https://www.youtube.com/embed/US8ePkxYI3E",
}) {
  const [offsetTop, setOffsetTop] = useState(0);
  const vidRef = useRef();
  const [active, setActive] = useState(false);
  useEffect(() => {
    let vid = vidRef.current;
    vid ? setOffsetTop(vid.offsetTop - vid.clientHeight / 2) : null;
    console.log(vid.offsetTop - vid.clientHeight);
  }, [active]);
  return (
    <>
      <div
        className={`${styles.play}`}
        onClick={(event) => {
          setActive(true);
        }}
      >
        <Image
          alt={`playIcon`}
          src={`/icons/play-icon.svg`}
          width={200}
          height={200}
          layout="responsive"
        />
      </div>
      <div
        className={`${styles.close} ${!active ? styles.hide : null}`}
        style={{ top: offsetTop }}
        onClick={(e) => setActive(false)}
      >
        <Image
          alt={`closeIcon`}
          src={`/icons/close.svg`}
          width={80}
          height={80}
        />
      </div>
      <section
        ref={vidRef}
        className={`${styles.videoWrapper} ${
          active ? styles.show : styles.hide
        }`}
      >
        <iframe
          width="100%"
          height="100%"
          src={src}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    </>
  );
}
