import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";

const navs = [
  {
    name: "Home",
    route: "/#",
  },
  {
    name: "About",
    route: "/#about",
  },
  {
    name: "Services",
    route: "/#services",
  },
  {
    name: "Pricing",
    route: "/#pricing",
  },
];
export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo" className={styles.logo} />

      <nav className={styles.nav}>
        <ul className={styles.list}>
          {navs.map((nav) => (
            <a href={nav.route} className={styles.link}>
              {nav.name}
            </a>
          ))}
        </ul>

        <button className={styles.button}>Signup/Login</button>
      </nav>
    </header>
  );
}
