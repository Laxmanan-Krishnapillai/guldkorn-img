import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Video.module.css";
export default function Video({
  src = "https://www.youtube.com/embed/US8ePkxYI3E",
  buttonStyle,
  button = false,
  buttonAll = false,
}) {
  const [active, setActive] = useState(false);
  return (
    <>
      <div
        className={`${styles.buttonWrapper} ${
          button && buttonAll
            ? styles.buttonOnly
            : button
            ? styles.buttonDesktop
            : ""
        }`}
        style={buttonStyle}
      >
        <div
          onClick={(event) => {
            setActive(true);
          }}
        >
          <Image
            alt={`playIcon`}
            src={`/icons/play-icon.svg`}
            width={100}
            height={100}
          />
        </div>
      </div>
      <section
        onClick={() => setActive(false)}
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
