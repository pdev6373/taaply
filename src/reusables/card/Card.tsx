import { PricingType } from "../../types";
import styles from "./Card.module.css";

export default function Card({
  img,
  price,
  noOfUsers,
  noOfServices,
  buttonText,
  link,
}: PricingType) {
  return (
    <div className={styles.wrapper}>
      <img src={img} alt="Price image" className={styles.image} />

      <div className={styles.main}>
        <p className={styles.price}>{`${price} / Month`}</p>
        <div>
          <p className={styles.text}>{`Limited to ${noOfUsers} User.`}</p>
          <p className={styles.text}>{`Select ${noOfServices} Service.`}</p>
        </div>
        <a href={link} className={styles.button}>
          {buttonText}
        </a>
      </div>
    </div>
  );
}
