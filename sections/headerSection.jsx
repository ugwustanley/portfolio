import {} from "react";
import Image from "next/image";
import Link from "next/link";
import { motion} from "framer-motion";
import Logo from "../images/stan-1.svg";
import styles from "../styles/header.module.scss";

export default function headerSection({ setShow_nav, setNav, show_nav }) {

  return (
          <header className={styles.main}>
            <nav className={styles.nav}>
              <Link href="#">
              <Image
                className={styles.logo}
                width="100"
                height="100"
                src={Logo}
                alt="ugwu stanley site logo"
               />
              </Link>
              <Link href="#home">
                <div
                  className={
                    show_nav
                      ? `${styles.menu_bar} ${styles.menu_bar_clicked}`
                      : `${styles.menu_bar} ${styles.menu_bar_unclicked}`
                  }
                  onClick={() => setShow_nav(!show_nav)}
                >
                  <div className={styles.menu_bar_arrow}></div>
                  <motion.div
                    initial={show_nav ? { rotate: 0 } : null}
                    animate={show_nav ? { rotate: 90 } : null}
                    transition={{ duration: 0.1, ease: "linear" }}
                    className={
                      show_nav
                        ? `${styles.menu_bar_arrow} ${styles.arrow_clear}`
                        : `${styles.menu_bar_arrow}`
                    }
                  ></motion.div>
                </div>
              </Link>
            </nav>
          </header>

  );
}
