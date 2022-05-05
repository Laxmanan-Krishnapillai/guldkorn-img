import Link from "next/link";
import { useState, useRef } from "react";
import styles from "../styles/Mobile-menu.module.css";
export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const listRef = useRef();
  return (
    <>
      <div
        className={`${styles.menuIcon}`}
        onClick={() => console.log("hello")}
      ></div>
      <div
        className={`${styles.container} ${
          isOpen ? styles.open : styles.closed
        } `}
      >
        <div className={`${styles.menu}`} ref={listRef}>
          {[
            ["Home", "/"],
            ["App", "/app"],
            ["Eksamenspakker", "/eksamenspakker"],
            ["Social Club", "/social-club"],
            ["Kontakt", "/kontakt"],
          ].map(([title, url], i) => (
            <Link key={url} href={url} passHref>
              <a className={styles.menuItem}>{title}</a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
