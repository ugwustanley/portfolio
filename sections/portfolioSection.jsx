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
            img='https://res.cloudinary.com/dqzhuopqp/image/upload/v1645696845/samples/bundle-home_fjow8s.png'
            name="Bundle"
            text="Bundle keeps track of your transaction history and helps businesses exchange their histories to promote transparency."
            tools="FRAMER MOTION, NEXTJS, CHARTJS"
            link="https://bundle-site.netlify.app"
            github="https://github.com/ugwustanley/bundle"
          />

          <Project
            img='https://res.cloudinary.com/dqzhuopqp/image/upload/v1645696003/samples/web-nft_xi3kze.png'
            name="Samy Halim"
            text="Samy Halim is a recreation of an nft website i saw on Twitter. I tried to make everything pixel perfect"
            tools="FRAMER MOTION, NEXTJS, TYPESCRIPT"
            link="https://nft-mark.netlify.app/"
            github="https://github.com/ugwustanley/nft-marktetplace"
          />

          <Project
            img='https://res.cloudinary.com/dqzhuopqp/image/upload/v1645696624/samples/auth-home2_elwcjy.png'
            name="Authrocket"
            text="Authrocket is a password based authentication system similar to firebase authentication except that its easier to use. Its designed just for basic login and signup operations"
            tools="NODEJS, MONGODB, REACTJS, TYPESCRIPT"
            link="https://authrocket.netlify.app"
            github="https://github.com/ugwustanley/authrocket-frontend"
          />
{/* https://res.cloudinary.com/dqzhuopqp/image/upload/v1645696003/samples/web-nft_xi3kze.png */}
          <Project
            img='https://res.cloudinary.com/dqzhuopqp/image/upload/v1645696623/samples/port-home_cvegn5.png'
            name="Portfolio"
            text="My portfolio website"
            tools="FRAMER MOTION, NEXTJS"
            link="https://stanlee-x.netlify.app/"
            github="https://github.com/ugwustanley/portfolio"
          />

          <Project
            img='https://res.cloudinary.com/dqzhuopqp/image/upload/v1645696623/samples/book-home2_wwwcgk.png'
            name="Bookmarks"
            text="Bookmarks is a landing page for an application used for bookmarking websites. This is a frontend mentor challenge"
            tools="HTML, CSS, JAVASCRIPT"
            link="https://book-marks.netlify.app/"
            github="#"
          />

          <Project
            img='https://res.cloudinary.com/dqzhuopqp/image/upload/v1645696623/samples/rand-home2_rrlgm0.png'
            name="Autorand"
            text="Autorand is a frontend implementation of an e-commerce and financial technology solution"
            tools="CHARTJS, REACT"
            link="#"
            github="https://github.com/ugwustanley/kuda"
          />

          <Project
            img='https://res.cloudinary.com/dqzhuopqp/image/upload/v1645696623/samples/serokell-home_mlbb9f.png'
            name="Serokell Test"
            text="This is my solution for a frontend assessment challenge"
            tools="REACTJS"
            link="https://serokell-frontend.netlify.app/"
            github="https://github.com/ugwustanley/serokell-frontend"
          />
        </section>

  );
}
