import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import hamburger from "../../assets/hamburger.svg";
import close from "../../assets/close.svg";
import { useState } from "react";

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
  const [openSidenav, setOpenSidenav] = useState(false);

  const toggleSidenavHandler = (open: boolean) => setOpenSidenav(open);

  return (
    <>
      <header className={styles.header}>
        <img src={logo} alt="Logo" className={styles.logo} />

        <nav className={styles.nav}>
          <ul className={styles.list}>
            {navs.map((nav) => (
              <a href={nav.route} className={styles.link} key={nav.name}>
                {nav.name}
              </a>
            ))}
          </ul>

          <button className={styles.button}>Signup/Login</button>
        </nav>

        <img
          src={hamburger}
          alt="hamburger menu"
          className={styles.hamburger}
          onClick={() => toggleSidenavHandler(true)}
        />
      </header>

      <nav
        className={`${styles.navMobile} ${
          openSidenav ? styles.navMobileOpen : ""
        }`}
      >
        <div className={styles.topMobile}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <img
            src={close}
            alt="Close"
            className={styles.close}
            onClick={() => toggleSidenavHandler(false)}
          />
        </div>

        <ul className={styles.listMobile}>
          {navs.map((nav) => (
            <a
              href={nav.route}
              className={styles.linkMobile}
              key={nav.name}
              onClick={() => toggleSidenavHandler(false)}
            >
              {nav.name}
            </a>
          ))}
        </ul>

        <button className={styles.buttonMobile}>Signup/Login</button>
      </nav>
    </>
  );
}
