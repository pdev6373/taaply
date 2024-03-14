import cta from "../../assets/cta.png";
import styles from "./CTA.module.css";
import arrow_right from "../../assets/arrow-right.svg";

export default function CTA() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Let’s Grow Together</h2>
      <img src={cta} alt="call to action" className={styles.image} />
      <a href="#" className={styles.link}>
        <p className={styles.linkText}>Let’s talk</p>
        <img src={arrow_right} alt="arrow right" className={styles.arrow} />
      </a>
    </section>
  );
}
