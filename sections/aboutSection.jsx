import {  } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Memoji from "../images/[removal 1.png";
import WavyHand from "../images/wavy 1.png";
import styles from "../styles/about.module.scss";
import { helloVariant } from "../variants/index.js";

export default function AboutSection() {

  return (

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
                      href="https://docs.google.com/document/d/1MOI15j86EuOksQ37qC88J2f6BkwkJczCW0jxlzi1f6s/edit"
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

  );
}
