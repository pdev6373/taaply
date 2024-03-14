import { Row } from "../../reusables";
import services from "../../assets/services.png";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section id="services" className={styles.wrapper}>
      <Row
        topHeading="Services"
        mainHeading="From emergency contacts to payments and more"
        body="There is a QR Code for everything, whatever your needs may be."
        img={services}
        reverse
      />
    </section>
  );
}
