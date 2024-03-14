import styles from "./Partners.module.css";
import samsung from "../../assets/samsung.png";
import google from "../../assets/google.png";
import freedom from "../../assets/freedom.png";
import mtn from "../../assets/mtn.png";
import chivas from "../../assets/chivas.png";

const partners = [samsung, google, freedom, mtn, chivas];

export default function Partners() {
  return (
    <section className={styles.wrapper}>
      <h3 className={styles.heading}>
        Some of our partners and companies we work with.
      </h3>

      <div className={styles.partners}>
        {partners.map((partner) => (
          <img src={partner} alt="partner" className={styles.partner} />
        ))}
      </div>
    </section>
  );
}
