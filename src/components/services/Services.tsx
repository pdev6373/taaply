import { Row } from "../../reusables";
import services from "../../assets/services.png";

export default function Services() {
  return (
    <section id="services">
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
