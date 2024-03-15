import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import hamburger from "../../assets/hamburger.svg";
import close from "../../assets/close.svg";
import { useEffect, useState } from "react";
import { Variants, motion } from "framer-motion";

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

type HeaderType = {
  stagger: Variants;
  header: any;
};

export default function Header({ stagger, header }: HeaderType) {
  const [openSidenav, setOpenSidenav] = useState(false);
  const [currentRoute, setCurrentRoute] = useState("");

  useEffect(() => {
    setCurrentRoute(window.location.hash);
    window.addEventListener("popstate", () => {
      setCurrentRoute(window.location.hash);
    });
  }, []);

  console.log(currentRoute);

  const toggleSidenavHandler = (open: boolean) => setOpenSidenav(open);

  return (
    <>
      <motion.header variants={stagger} className={styles.header}>
        <motion.img
          src={logo}
          alt="Logo"
          className={styles.logo}
          variants={header}
        />

        <motion.nav className={styles.nav} variants={stagger}>
          <ul className={styles.list}>
            {navs.map((nav, index) => (
              <motion.a
                variants={header}
                href={nav.route}
                className={`${styles.link} ${
                  currentRoute === nav.route.slice(1) ||
                  (!index && currentRoute === "")
                    ? styles.linkActive
                    : ""
                }`}
                key={nav.name}
              >
                {nav.name}
              </motion.a>
            ))}
          </ul>

          <motion.button
            variants={header}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.button}
          >
            Signup/Login
          </motion.button>
        </motion.nav>

        <motion.img
          src={hamburger}
          alt="hamburger menu"
          className={styles.hamburger}
          onClick={() => toggleSidenavHandler(true)}
          variants={header}
        />
      </motion.header>

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
