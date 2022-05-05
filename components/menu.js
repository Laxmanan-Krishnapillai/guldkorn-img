import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Menu.module.css";
export default function Menu({ isDesktop }) {
  return (
    <>
      <div className={isDesktop ? styles.desktopMenu : styles.menu}>
        {[
          [isDesktop ? "Homemedpil" : "Home", "/"],
          ["App", "/app"],
          ["Eksamenspakker", "/eksamenspakker"],
          ["SocialClub", "/social-club"],
        ].map(([src, url], i) => (
          <Link passHref key={i} href={url}>
            <a className={styles.wrapper}>
              <object
                data={`/img/${
                  isDesktop ? "desktop" : "mobile"
                }/menu/${src}.svg`}
                alt={src}
              />
            </a>
          </Link>
        ))}
      </div>
    </>
  );
}
