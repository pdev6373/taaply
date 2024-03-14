import logo from "../../assets/logo.svg";
import dribbble from "../../assets/dribbble.svg";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import styles from "./Footer.module.css";

const socialIcons = [dribbble, instagram, facebook, twitter];
const navs = [
  {
    title: "Sitemap",
    navs: [
      {
        name: "Home",
        route: "/#home",
      },
      {
        name: "About",
        route: "/#about ",
      },
      {
        name: "Services",
        route: "/#services",
      },
      {
        name: "Pricing",
        route: "/#pricing",
      },
    ],
  },
  {
    title: "Company",
    navs: [
      {
        name: "Blog",
        route: "/#blog",
      },
      {
        name: "FAQ",
        route: "/#faq",
      },
    ],
  },
  {
    title: "Help",
    navs: [
      {
        name: "Contact",
        route: "/#contact",
      },
      {
        name: "Privacy",
        route: "/#privacy",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.main}>
          <img src={logo} alt="logo" className={styles.logo} />
          <p className={styles.text}>
            The future of QR codes is poised for expansion and innovation. With
            advancements in technology and the increasing integration of digital
            solutions into everyday life, QR codes are likely to play a more
            prominent role in facilitating seamless interactions across various
            sectors.
          </p>

          <div className={styles.socialIcons}>
            {socialIcons.map((icon, index) => (
              <a href="#" className={styles.socialWrapper}>
                <img src={icon} alt="social icon" key={index} />
              </a>
            ))}
          </div>
        </div>

        <div className={styles.navs}>
          {navs.map((nav) => (
            <div className={styles.innerNavsWrapper}>
              <h3 className={styles.title}>{nav.title}</h3>

              <div className={styles.innerNavs}>
                {nav.navs.map((nav) => (
                  <a href={nav.route} className={styles.innerLink}>
                    {nav.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className={styles.copyright}>
        © 2024 A Taaply, Inc. Company | All Rights Reserved{" "}
      </p>
    </footer>
  );
}
