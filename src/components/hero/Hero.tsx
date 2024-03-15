import hero_img from "../../assets/hero.png";
import styles from "./Hero.module.css";
import { Variants, motion } from "framer-motion";

type HeroType = {
  easing: number[];
  letter: any;
  fadeInUp: any;
  fadeInLeft: any;
  hero: Variants;
};

export default function Hero({
  easing,
  letter,
  hero,
  fadeInUp,
  fadeInLeft,
}: HeroType) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.3,
        ease: easing,
      }}
      className={styles.wrapper}
    >
      <motion.div className={styles.main}>
        <motion.h2
          variants={hero}
          initial="initial"
          animate="animate"
          className={styles.heading}
        >
          <motion.div>
            <motion.span variants={letter} className={styles.ib}>
              T
            </motion.span>
            <motion.span variants={letter} className={styles.ib}>
              h
            </motion.span>
            <motion.span variants={letter} className={styles.ib}>
              e
            </motion.span>
          </motion.div>
          &nbsp;
          <motion.div>
            <motion.span variants={letter} className={styles.ib}>
              F
            </motion.span>
            <motion.span variants={letter} className={styles.ib}>
              u
            </motion.span>
            <motion.span variants={letter} className={styles.ib}>
              t
            </motion.span>
            <motion.span variants={letter} className={styles.ib}>
              u
            </motion.span>
            <motion.span variants={letter} className={styles.ib}>
              r
            </motion.span>
            <motion.span variants={letter} className={styles.ib}>
              e
            </motion.span>
          </motion.div>
          &nbsp;
          <motion.div>
            <motion.span variants={letter} className={styles.ib}>
              o
            </motion.span>
            <motion.span variants={letter} className={styles.ib}>
              f
            </motion.span>
          </motion.div>
          &nbsp;
          <motion.div>
            <motion.span
              variants={letter}
              className={`${styles.headingAccent} ${styles.ib}`}
            >
              Q
            </motion.span>
            <motion.span
              variants={letter}
              className={`${styles.headingAccent} ${styles.ib}`}
            >
              R
            </motion.span>
          </motion.div>
          &nbsp;
          <motion.div>
            <motion.span variants={letter} className={styles.ib}>
              C
            </motion.span>
            <motion.span variants={letter} className={styles.ib}>
              o
            </motion.span>
            <motion.span variants={letter} className={styles.ib}>
              d
            </motion.span>
            <motion.span variants={letter} className={styles.ib}>
              e
            </motion.span>
            <motion.span variants={letter} className={styles.ib}>
              s
            </motion.span>
          </motion.div>
        </motion.h2>
        <motion.p variants={fadeInUp} className={styles.text}>
          Enhanced security features, increased customization options, and
          improved user experience, makes QR codes a ubiquitous tool for
          connecting the physical and digital worlds.
        </motion.p>
      </motion.div>

      <motion.div className={styles.imageWrapper} variants={fadeInLeft}>
        <img src={hero_img} alt="hero image" className={styles.image} />
      </motion.div>
    </motion.section>
  );
}
