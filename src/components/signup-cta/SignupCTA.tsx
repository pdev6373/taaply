import { Row } from "../../reusables";
import signup_cta from "../../assets/signup-cta.png";

export default function SignupCTA() {
  return (
    <Row
      topHeading="Signup TODAY! "
      mainHeading="Create and manage your own QR Codes"
      body="Analytics and more at your finger tips. Manage your QR codes with your own personal back-office. Create QR codes for your personal use or business use case. "
      img={signup_cta}
      reverse
    />
  );
}
