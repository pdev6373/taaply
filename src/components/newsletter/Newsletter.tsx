import { Row } from "../../reusables";
import newsletter from "../../assets/newsletter.png";

export default function Newsletter() {
  return (
    <Row
      topHeading="Newsletter"
      mainHeading="Stay up to date with our latest tech"
      img={newsletter}
    />
  );
}
