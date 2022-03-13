import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "../component/navbar";
import Preloader from "../component/preloader";
import PortfolioSection from '../sections/portfolioSection'
import FooterSection from '../sections/footerSection'
import AboutSection from '../sections/aboutSection'
import HeadTag from '../sections/headTag'
import HeaderSection from '../sections/headerSection'
import ContactSection from '../sections/contactSection'
import styles from "../styles/Home.module.scss";

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
      <HeadTag />

      <AnimatePresence>

       {showPreloader && <Preloader />}

       {show_nav && <Navbar setNav={setNav} show_nav={show_nav} />}

      </AnimatePresence>

      <HeaderSection setShow_nav={setShow_nav} setNav={setNav} show_nav={show_nav}  />

      <AboutSection /> 

      <PortfolioSection />

      <ContactSection />
    
      <FooterSection />


    </div>
  );
}
