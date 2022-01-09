import { } from "react";
import Bundle from "../images/bundle-home.png";
import Auth from "../images/auth-home2.png";
import Book from "../images/book-home2.png";
import Rand from "../images/rand-home2.png";
import Serokell from "../images/serokell-home.png";
import Port from "../images/port-home.png";
import Project from "../component/project";
import styles from "../styles/portfolio.module.scss";

export default function PortfolioSection() {

  return (


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

  );
}
