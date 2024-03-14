import hero from "../../assets/hero.png";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.main}>
        <h2 className={styles.heading}>
          The Future of <span className={styles.headingAccent}>QR</span> Codes
        </h2>
        <p className={styles.text}>
          Enhanced security features, increased customization options, and
          improved user experience, makes QR codes a ubiquitous tool for
          connecting the physical and digital worlds.
        </p>
      </div>

      <div className={styles.imageWrapper}>
        <img src={hero} alt="hero image" className={styles.image} />
      </div>
    </section>
  );
}
