import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Envelope,
} from "phosphor-react";
import LinkedIn from "../images/icons/linkedin-2.svg";
import Github from "../images/icons/github.svg";
import Twitter from "../images/icons/twitter.svg";
import Memoji from "../images/[removal 1.png";
import Logo from "../images/stan-1.svg";
import WavyHand from "../images/wavy 1.png";
import Navbar from "../component/navbar";
import Preloader from '../component/preloader';
import Project from "../component/project";
import styles from "../styles/Home.module.scss";
import { helloVariant } from "../variants/index.js";

export default function Home() {
  const [show_nav, setShow_nav] = useState(false); const [showPreloader, setShowPreloader] = useState(true);

  setTimeout(() => {
    setShowPreloader(false);
  }, 5000);


  const setNav = (value) => {
    setShow_nav(value);
  };
  return (
    <div
      className={
        show_nav
          ? `${styles.container} ${styles.container_cropped}`
          : `${styles.container}`
      }
    >
      <Head>
        <title>Ugwu Chiagozie Stanley</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="../images/[removal 1.png" />
        {/* google fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Fira+Code:wght@300;400;500;600;700&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AnimatePresence>
          {showPreloader ? <Preloader /> : null}
        </AnimatePresence>
      {/* <div className={show_nav ? styles.show_nav : styles.hide_nav}> */}
      <AnimatePresence>
        {show_nav ? <Navbar setNav={setNav} show_nav={show_nav} /> : null}
      </AnimatePresence>
      {/* </div> */}

      <main className={styles.main} id="home">
        <div className={styles.home_screen}>
          <header className={styles.main}>
            <nav className={styles.nav}>
              <Image
                className={styles.logo}
                width="100"
                height="100"
                src={Logo}
                alt="ugwu stanley site logo"
              ></Image>
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

          <section className={styles.about_me} id="about">
            <div className={styles.about_me_main}>
              <div className={styles.about_me_main_s1}>
                <div className={styles.about_me_main_s1_p}>
                  <h5>
                    Hello there{" "}
                    <motion.div
                      initial={`hidden`}
                      animate={`visible`}
                      variants={helloVariant()}
                      className={styles.wavyhand}
                      //
                    >
                      <Image
                        src={WavyHand}
                        width={25}
                        height={25}
                        alt="My memoji smiling face"
                      />
                    </motion.div>{" "}
                    , meet
                  </h5>
                  <h2>UGWU STANLEY</h2>
                  <p>
                    a software developer passionate about software products and
                    focused on building innovative pixel perfect applications. I
                    have over two years of experience and ready to start
                    building your next product.
                  </p>

                  <button className={styles.hire_me_btn}>
                    <Link
                      href="https://docs.google.com/document/d/126tqhRMf_HvWI02n0r-cWm-ZXE9wOGfzda2UriideeE/edit"
                      target="_blank"
                    >
                      View Resume
                    </Link>
                  </button>
                </div>
              </div>
              <div className={styles.about_me_main_s2}>
                <Image
                  src={Memoji}
                  className={styles.memoji}
                  alt="My memoji smiling face"
                />
              </div>
            </div>
          </section>
        </div>

        <section className={styles.projects} id="projects">
          <div className={styles.projects_heading}>
            <p className={styles.projects_heading_p}>Featured Projects</p>
            <div className={styles.projects_heading_arrow}></div>
          </div>

          <Project />
          <Project />
        </section>

        <section className={styles.contact} id="contact">
          <h4>Got a project in mind?</h4>
          <h2>
            Get In Touch. <Envelope color="#ABABAD" weight="regular" size={80} />
          </h2>
          <p>ugwuchiagoziestanley@gmail.com</p>
          <p> +(234) 906 270 9826</p>

          {/* <div className={styles.contact_details_socials}>
              <LinkedinLogo size={22} color="#ABABAD" weight="fill" />
              <InstagramLogo color="#ABABAD" weight="fill" size={22} />
              <TwitterLogo size={22} color="#ABABAD" weight="fill" />
              <GithubLogo size={22} color="#ABABAD" weight="fill" />
            </div> */}
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footer_line}></div>
       <div className={styles.footer_main}>
        <div className={styles.footer_links}>
            <p>
                <span>LN</span>{" "}
                <Image width="25" height="25" src={LinkedIn}></Image>
              </p>

              <p >
                <span>TW</span>{" "}
                <Image width="25" height="25" src={Twitter}></Image>
              </p>

              <p>
                <span>GH</span>{" "}
                <Image width="25" height="25" src={Github}></Image>
              </p>
          
        </div>
        <p className={styles.copy}>Copyright © <Link href="https://github.com/ugwustanley">Ugwu Stanley</Link>  2022, All rights reserved.</p>
       </div>

      </footer>
    </div>
  );
}
