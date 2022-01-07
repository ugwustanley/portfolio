import React from "react";
import Image from "next/image";
import styles from "../styles/project.module.scss";
import Bundle from '../images/bundle-home.png'
import { motion, AnimatePresence } from "framer-motion";
import { GithubLogo, Link, Globe } from "phosphor-react";
import { } from '../variants/index.js'

function Project({ setNav, show_nav }) {

 
  return (
    
    <motion.div
        initial={`hidden`}
        exit={`exit`}
        animate= {show_nav? `visible`: ``}
        variants={''}        
        className={styles.project}>
        <div className={styles.project_image}>
            <button className={styles.project_link}>
                Live Preview
            </button>
            <div className={styles.project_image_box}>
                 <Image src={Bundle}/>
            </div>
        </div>
        <div className={styles.project_desc}>
              <h3>Bundle</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, ullam quis. Illo, eveniet adipisci? Id sunt facilis voluptatum atque sapiente.</p>
              <h5>FRAMER MOTION, NEXTJS</h5>

              <div className={styles.project_links}>

                <a href="#">  <Link size={22} color="#ABABAD" weight="fill" /></a>

                <a href="#">  <GithubLogo size={22} color="#ABABAD" weight="fill" /></a>

               
              </div>
        </div>
     
    </motion.div>
    
  );
}

export default Project;
