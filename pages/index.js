import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Envelope } from "phosphor-react";
import LinkedIn from "../images/icons/linkedin-2.svg";
import Github from "../images/icons/github.svg";
import Twitter from "../images/icons/twitter.svg";
import Memoji from "../images/[removal 1.png";
import Logo from "../images/stan-1.svg";
import LogoMain from "../images/logo-main.svg";
import Bundle from "../images/bundle-home.png";
import Auth from "../images/auth-home2.png";
import Book from "../images/book-home2.png";
import Rand from "../images/rand-home2.png";
import Serokell from "../images/serokell-home.png";
import Port from "../images/port-home.png";
import WavyHand from "../images/wavy 1.png";
import Navbar from "../component/navbar";
import Preloader from "../component/preloader";
import Project from "../component/project";
import styles from "../styles/Home.module.scss";
import { helloVariant } from "../variants/index.js";

export default function Home() {
  const [show_nav, setShow_nav] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

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
        <title>Ugwu Stanley ---Software Developer</title>
        

        <meta name="description" content={`Ugwu Stanley's portfolio website`} />
        <meta name="image" content={'https://i.ibb.co/R7b5mPz/Mask-Group-8.png'} />
        <meta name="keywords" content="Ugwu chiagozie stanley" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta property="og:title" content={`Ugwu Stanley`} />
        <meta property="og:description" content={`Ugwu Stanley's portfolio website`} />
        <meta property="og:image" content={'https://i.ibb.co/R7b5mPz/Mask-Group-8.png'} />
        <meta property="og:url" content={`https://stanlee-x.netlify.app/`} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={`chiagozie_ugwu`} />
        <meta name="twitter:title" content={`Ugwu Stanley`} />
        <meta name="twitter:description" content={`Ugwu Stanley's portfolio website`} />
        <meta name="twitter:image" content={'https://i.ibb.co/R7b5mPz/Mask-Group-8.png'} />

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




      <AnimatePresence>{showPreloader ? <Preloader /> : null}</AnimatePresence>
    
      <AnimatePresence>
        {show_nav ? <Navbar setNav={setNav} show_nav={show_nav} /> : null}
      </AnimatePresence>
      

      <main className={styles.main} id="home">
        <div className={styles.home_screen}>
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

          <Project
            img={Bundle}
            name="Bundle"
            text="Bundle keeps track of your transaction history and helps businesses exchange their histories to promote transparency."
            tools="FRAMER MOTION, NEXTJS, CHARTJS"
            link="https://bundle-site.netlify.app"
            github="https://github.com/ugwustanley/bundle"
          />

          <Project
            img={Auth}
            name="Authrocket"
            text="Authrocket is a password based authentication system similar to firebase authentication except that its easier to use. Its designed just for basic login and signup operations"
            tools="NODEJS, EXPRESS, MONGODB, REACTJS"
            link="https://authrocket.netlify.app"
            github="https://github.com/ugwustanley/authrocket-frontend"
          />

          <Project
            img={Port}
            name="Portfolio"
            text="My portfolio website"
            tools="FRAMER MOTION, NEXTJS"
            link="https://stanlee-x.netlify.app/"
            github="https://github.com/ugwustanley/portfolio"
          />

          <Project
            img={Book}
            name="Bookmarks"
            text="Bookmarks is a landing page for an application used for bookmarking websites. This is a frontend mentor challenge"
            tools="HTML, CSS, JAVASCRIPT"
            link="https://book-marks.netlify.app/"
            github="#"
          />

          <Project
            img={Rand}
            name="Autorand"
            text="Autorand is a frontend implementation of an e-commerce and financial technology solution"
            tools="CHARTJS, REACT"
            link="#"
            github="https://github.com/ugwustanley/kuda"
          />

          <Project
            img={Serokell}
            name="Serokell Test"
            text="This is my solution for a frontend assessment challenge"
            tools="REACTJS"
            link="https://serokell-frontend.netlify.app/"
            github="https://github.com/ugwustanley/serokell-frontend"
          />
        </section>

        <section className={styles.contact} id="contact">
          <h4>Got a project in mind?</h4>
          <h2>
            Get In Touch.{" "}
            <Link href="mailto:ugwuchiagoziestanley@gmail.com">
              <Envelope color="#ABABAD" weight="regular" size={80} />
            </Link>
          </h2>
          <Link href="mailto:ugwuchiagoziestanley@gmail.com">
            <p>ugwuchiagoziestanley@gmail.com</p>
          </Link>
          <Link href="tel:+2349062709826">
            <p> +(234) 906 270 9826</p>
          </Link>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footer_line}></div>
        <div className={styles.footer_main}>
          <div className={styles.footer_links}>
            <Link href="https://www.linkedin.com/in/ugwu-chiagozie-2157601a7/">
              <p>
                <span>LN</span>{" "}
                <Image width="25" height="25" src={LinkedIn}></Image>
              </p>
            </Link>

            <Link href="https://twitter.com/chiagozie_ugwu">
              <p>
                <span>TW</span>{" "}
                <Image width="25" height="25" src={Twitter}></Image>
              </p>
            </Link>
            <Link href="https://github.com/ugwustanley">
              <p>
                <span>GH</span>{" "}
                <Image width="25" height="25" src={Github}></Image>
              </p>
            </Link>
          </div>
          <p className={styles.copy}>
            Copyright ©{" "}
            <Link href="https://github.com/ugwustanley">Ugwu Stanley</Link>{" "}
            2022, All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
