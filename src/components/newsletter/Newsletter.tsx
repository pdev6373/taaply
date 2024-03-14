import { Row } from "../../reusables";
import newsletter from "../../assets/newsletter.png";
import styles from "./NewsLetter.module.css";

export default function Newsletter() {
  return (
    <section className={styles.wrapper}>
      <Row
        topHeading="Newsletter"
        mainHeading="Stay up to date with our latest tech"
        img={newsletter}
      />
    </section>
  );
}
