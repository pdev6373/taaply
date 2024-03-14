import { Row, Testimonial } from "../../reusables";
import testimonials from "../../assets/testimonials.png";
import { TestimonialType } from "../../types";
import testimonial_one from "../../assets/testimonial-one.png";
import testimonial_two from "../../assets/testimonial-two.png";
import testimonial_three from "../../assets/testimonial-three.png";
import testimonial_four from "../../assets/testimonial-four.png";
import styles from "./Testimonials.module.css";

const allTestimonials: TestimonialType[] = [
  {
    img: testimonial_one,
    testimonial:
      "Taaply QR code stickers have been a game-changer for our event planning business. Guests appreciate the seamless check-in process, and we've seen a significant boost in attendee satisfaction!",
    role: "Event Planner",
  },
  {
    img: testimonial_two,
    testimonial:
      "As a small business owner, Taaply QR code stickers have simplified our marketing efforts. Customers can easily access our online store, promotions, and contact information with a quick scan, leading to increased engagement and sales.",
    role: "Retailer",
  },
  {
    img: testimonial_three,
    testimonial:
      "We've integrated Taaply QR code stickers into our museum exhibits, allowing visitors to dive deeper into our collections with additional multimedia content. The feedback has been overwhelmingly positive, with visitors praising the interactive and informative experience.",
    role: "Museum Curator",
  },
];

export default function Testimonials() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>Testimonials</h3>
      <Row
        component={
          <Testimonial
            img={testimonial_four}
            testimonial="Using Taaply QR code stickers has transformed our customer experience! Our patrons love the convenience of accessing our menu instantly with a simple scan, making dining with us a breeze."
            role="Restaurant Owner"
            horizontal
          />
        }
        img={testimonials}
        reverse
      />

      <div className={styles.testimonials}>
        {allTestimonials.map((testimonial, index) => (
          <Testimonial
            img={testimonial.img}
            testimonial={testimonial.testimonial}
            role={testimonial.role}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
