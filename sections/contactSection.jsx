import {  } from "react";
import Link from "next/link";
import { Envelope } from "phosphor-react";
import styles from "../styles/contact.module.scss";

export default function ContactSection() {
 return(
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
    
  );
}
