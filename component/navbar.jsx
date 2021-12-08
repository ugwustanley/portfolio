import React from "react";
import Image from "next/image";
import styles from "../styles/navbar.module.scss";
import LinkedIn from "../images/icons/linkedin-2.svg";
import Github from "../images/icons/github.svg";
import Twitter from "../images/icons/twitter.svg";
import { motion, AnimatePresence } from "framer-motion";

function Navbar({ setNav }) {
  const partVariants = {
    hidden: {
      opacity: 0.5,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 100,
      transition: {
        duration: 30,
        delay: 20,
        ease: "easeOut",
      },
    },
  };
  return (
    <div className={styles.nav_bar}>
      <motion.div
        variant={partVariants}
        initial="hidden"
        animate="visible"
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
          <span>L|IN</span> <Image width="25" height="25" src={LinkedIn}></Image>
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
