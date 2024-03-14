import { Row } from "../../reusables";
import about from "../../assets/about.png";

export default function About() {
  return (
    <section id="about">
      <Row
        topHeading="About"
        mainHeading="We specialize in emerging tech solutions"
        body="This involves staying ahead of the curve and harnessing cutting-edge technologies to address current and future challenges. By leveraging innovations such as QR Codes and Artificial Intelligence, we develop transformative solutions that drive efficiency, enhance user experiences, and unlock new opportunities across industries. With a focus on agility, creativity, and adaptability, they navigate the dynamic landscape of emerging technologies to deliver impactful solutions that shape the future of business and society."
        img={about}
      />
    </section>
  );
}
