import { TestimonialType } from "../../types";
import styles from "./Testimonial.module.css";

export default function Testimonial({
  img,
  testimonial,
  role,
  horizontal = false,
}: TestimonialType) {
  return (
    <div className={`${styles.wrapper} ${horizontal ? styles.horizontal : ""}`}>
      <img
        src={img}
        alt="testimonial"
        className={horizontal ? styles.imgHorizontal : styles.img}
      />
      <p className={styles.text}>{`“${testimonial}" - ${role}`}</p>
    </div>
  );
}
