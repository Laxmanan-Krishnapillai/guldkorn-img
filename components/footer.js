import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Menu.module.css";
export default function Footer({ refItem, isDesktop }) {
  return (
    <>
      <div className={isDesktop ? styles.desktopFooter : styles.footer}>
        <div className={styles.footerBaggrund} style={{}}>
          <Image
            src={`/img/${isDesktop ? "desktop" : "mobile"}/footer/Baggrund.svg`}
            alt="footer"
            layout="fill"
          />
        </div>
        <div className={styles.iconWrapper}>
          {[
            ["Facebook", "/"],
            ["Instagram", "/app"],
            ["Tiktok", "/eksamenspakker"],
          ].map(([src, url], i) => (
            <Link passHref key={i} href={url}>
              <a className={styles.footerWrapper}>
                <Image
                  src={`/img/${
                    isDesktop ? "desktop" : "mobile"
                  }/footer/${src}.svg`}
                  alt={src}
                  width={isDesktop ? 100 : 45}
                  height={isDesktop ? 100 : 45}
                />
              </a>
            </Link>
          ))}
        </div>
        <div>
          <Image
            src={`/icons/copyright.svg`}
            height={isDesktop ? 20 : 10}
            width={isDesktop ? 20 : 10}
            alt="copyright"
          />
        </div>
      </div>
    </>
  );
}
