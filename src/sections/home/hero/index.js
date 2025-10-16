"use client";
import styles from "./styles.module.scss";
import { slideUp2, slideUp3 } from "./animations";
import { motion } from "framer-motion";
import Image from "next/image";
import image from "../../../../public/background/background-bunkers.png";

export default function Hero() {
  return (
    <div className={styles.section}>
      <motion.div
        className={styles.home}
        variants={slideUp2}
        initial="initial"
        animate="enter"
      >
        <div className={styles.imageContainer}>
          <Image
            src={image}
            alt="fondo"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={styles.textContainer}>
          <motion.h1
            variants={slideUp3}
            initial="initial"
            animate="enter"
            className={styles.title}
          >
            bunkers
          </motion.h1>

          <motion.p
            variants={slideUp3}
            initial="initial"
            animate="enter"
            className={styles.subtitle}
          >
            algo <span>nuevo</span> está llegando.
          </motion.p>
          <button
            className={styles.button}
            onClick={() => (window.location.href = "mailto:info@bunkers.ar")}
          >
            info@bunkers.ar
          </button>
        </div>
      </motion.div>
    </div>
  );
}
