import React from "react";
import Image from "next/image";
import styles from "../styles/navbar.module.scss";
import LinkedIn from "../images/icons/linkedin-2.svg";
import Github from "../images/icons/github.svg";
import Twitter from "../images/icons/twitter.svg";
import { motion, AnimatePresence } from "framer-motion";

import { partVariant, navLinkVariant, navSocialVariant, navVariant} from '../variants/index.js'

function Navbar({ setNav, show_nav }) {

 
  return (
    <>
    <motion.div
        initial={`hidden`}
        exit={`exit`}
        animate= {show_nav? `visible`: ``}
        variants={navVariant(0.6)}        
        className={styles.nav_bar}>
        
      <motion.div
        initial={`hidden`}
        exit={`exit`}
        animate= {show_nav? `visible`: ``}
        variants={partVariant(0)}       
        className={`${styles.nav_bar_part} ${styles.nav_bar_part_one}`}
      ></motion.div>

      <motion.div
        initial={`hidden`}
        animate= {show_nav? `visible`: ``}
        exit={`exit`}
        variants={partVariant(.2)}
        className={`${styles.nav_bar_part} ${styles.nav_bar_part_two}`}
      >
        <motion.p
          variants={navLinkVariant(.8)}
        >About Me</motion.p>
        <motion.p
          variants={navLinkVariant(.7)}
        >Projects</motion.p>
        <motion.p
          variants={navLinkVariant(.6)}
        >Contact</motion.p>
      </motion.div>

      <motion.div
        initial={`hidden`}
        animate= {show_nav? `visible`: ``}
        exit={`exit`}
        variants={partVariant(.4)}
        className={`${styles.nav_bar_part} ${styles.nav_bar_part_three}`}
      ></motion.div>


      <motion.div
        initial={`hidden`}
        animate= {show_nav? `visible`: ``}
        exit={`exit`}
        variants={partVariant(.6)}
        className={`${styles.nav_bar_part} ${styles.nav_bar_part_four}`}
      >
        <motion.p variants={navSocialVariant(.8)}>
          <span>Linkedin</span>{" "}
          <Image width="25" height="25" src={LinkedIn}></Image>
        </motion.p>

        <motion.p variants={navSocialVariant(1)}>
          <span>Twitter</span> <Image width="25" height="25" src={Twitter}></Image>
        </motion.p>

        <motion.p variants={navSocialVariant(1.2)}>
          <span>Github</span> <Image width="25" height="25" src={Github}></Image>
        </motion.p>
      </motion.div>

      <h1 className={`${styles.nav_email}`}>
          <marquee>
              ugwuchiagoziestanley@gmail.com   ugwuchiagoziestanley@gmail.com  ugwuchiagoziestanley@gmail.com
          </marquee>
      </h1>
    </motion.div>
    {/* <h1 className={`${styles.nav_email}`}>Ugwuchiagoziestanley@gmail.com</h1> */}
    </>
  );
}

export default Navbar;
