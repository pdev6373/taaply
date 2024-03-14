import { Card } from "../../reusables";
import { PricingType } from "../../types";
import starter from "../../assets/starter.png";
import advance from "../../assets/advance.png";
import expert from "../../assets/expert.png";
import styles from "./Pricing.module.css";

const pricings: PricingType[] = [
  {
    img: starter,
    price: "49.95",
    noOfUsers: 1,
    noOfServices: 1,
    buttonText: "Starter",
    link: "",
  },
  {
    img: advance,
    price: "99.95",
    noOfUsers: 1,
    noOfServices: 1,
    buttonText: "Advance",
    link: "",
  },
  {
    img: expert,
    price: "199.95",
    noOfUsers: 1,
    noOfServices: 1,
    buttonText: "Expert",
    link: "",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className={styles.wrapper}>
      <div className={styles.top}>
        <h3 className={styles.heading}>Pricing</h3>
        <p className={styles.text}>
          Discover transparent and scalable QR code backoffice pricing tailored
          to your business needs. Streamline operations, track analytics, and
          enhance customer engagement effortlessly.
        </p>
      </div>

      <div className={styles.pricings}>
        {pricings.map((pricing, index) => (
          <Card
            img={pricing.img}
            price={pricing.price}
            noOfUsers={pricing.noOfUsers}
            noOfServices={pricing.noOfServices}
            buttonText={pricing.buttonText}
            link={pricing.link}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
