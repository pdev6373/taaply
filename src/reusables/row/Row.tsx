import styles from "./Row.module.css";
import { motion } from "framer-motion";

type RowType = {
  img: string;
  topHeading?: string;
  mainHeading?: string;
  body?: string;
  reverse?: boolean;
  component?: JSX.Element;
};

export default function Row({
  img,
  topHeading,
  mainHeading,
  body,
  reverse = false,
  component,
}: RowType) {
  return (
    <motion.div
      className={`${styles.wrapper} ${reverse ? styles.reverse : ""}`}
    >
      <div className={styles.main}>
        {topHeading ? (
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            className={styles.topHeading}
          >
            {topHeading}
          </motion.h3>
        ) : (
          <></>
        )}
        {mainHeading ? (
          <motion.h2
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className={styles.mainHeading}
          >
            {mainHeading}
          </motion.h2>
        ) : (
          <></>
        )}
        {body ? <motion.p className={styles.body}>{body}</motion.p> : <></>}
        {component ? component : <></>}
      </div>

      <div className={styles.imageWrapper}>
        <img src={img} alt="image" className={styles.image} />
      </div>
    </motion.div>
  );
}
