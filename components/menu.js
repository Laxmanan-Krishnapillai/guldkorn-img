import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Menu.module.css";
export default function Menu() {
  return (
    <>
      <div className={styles.desktopMenu}>
        {[
          ["Homemedpil", "/"],
          ["App", "/app"],
          ["Eksamenspakker", "/eksamenspakker"],
          ["SocialClub", "/social-club"],
          ["Kontakt", "/kontakt"],
        ].map(([src, url], i) => (
          <Link key={i} href={url}>
            <a className={styles.menu}>
              <Image
                src={`/img/desktop/menu/${src}.svg`}
                layout="raw"
                height={100}
                alt={src}
                objectFit="contain"
              />
            </a>
          </Link>
        ))}
      </div>
    </>
  );
}
