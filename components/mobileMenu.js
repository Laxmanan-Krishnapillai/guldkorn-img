import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import styles from "../styles/Mobile-menu.module.css";
export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [kontakt, showKontakt] = useState(false);
  const listRef = useRef();
  const handleClick = (e) => {
    e.preventDefault();
    console.log("gay");
    showKontakt(true);
  };
  return (
    <>
      <div
        className={`${styles.menuIcon}`}
        onClick={() => setIsOpen(!isOpen)}
      ></div>
      <div
        className={`${styles.container} ${
          isOpen === true ? styles.open : styles.closed
        } `}
      >
        <div className={`${styles.menu}`} ref={listRef}>
          {kontakt === true
            ? [
                ["Home", "/"],
                ["App", "/app"],
                ["Eksamenspakker", "/eksamenspakker"],
                ["Social Club", "/social-club"],
                ["Kontakt", "/kontakt"],
              ]
            : [
                ["Telefon", "/telefon"],
                ["Email", "/email"],
              ].map(([title, url], i) => (
                <Link key={url} href={url} passHref>
                  <a
                    className={styles.menuItem}
                    onClick={url === "/kontakt" ? handleClick : null}
                  >
                    {title}
                  </a>
                </Link>
              ))}
        </div>
      </div>
    </>
  );
}
