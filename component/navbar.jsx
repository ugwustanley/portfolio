import React from "react";
import Image from "next/image";
import styles from "../styles/navbar.module.scss";
import LinkedIn from "../images/icons/linkedin-2.svg";
import Github from "../images/icons/github.svg";
import Twitter from "../images/icons/twitter.svg";
import { motion, AnimatePresence } from "framer-motion";

function Navbar({ setNav, show_nav }) {
  const partVariants = {
    hidden: {
      y: -100,
    },
    visible: {
      y: 0,
      transition: {
        duration: 10,
        delay: 2,
        ease: "easeIn",
      },
    },
  };
  console.log(show_nav);
  return (
    <div className={styles.nav_bar}>
      <motion.div
        variants={show_nav ? partVariants : null}
        initial={show_nav ?`hidden` : null}
        animate={show_nav ? `visible` : null}
        className={`${styles.nav_bar_part} ${styles.nav_bar_part_one}`}
      ></motion.div>
      <motion.div
        className={`${styles.nav_bar_part} ${styles.nav_bar_part_two}`}
      >
        <p>About Me</p>
        <p>Projects</p>
        <p>Contact</p>
      </motion.div>
      <motion.div
        className={`${styles.nav_bar_part} ${styles.nav_bar_part_three}`}
      ></motion.div>
      <motion.div
        className={`${styles.nav_bar_part} ${styles.nav_bar_part_four}`}
      >
        <p>
          <span>L|IN</span>{" "}
          <Image width="25" height="25" src={LinkedIn}></Image>
        </p>

        <p>
          <span>T|R</span> <Image width="25" height="25" src={Twitter}></Image>
        </p>

        <p>
          <span>G|HUB</span> <Image width="25" height="25" src={Github}></Image>
        </p>
      </motion.div>
    </div>
  );
}

export default Navbar;
