import {
  Header,
  Hero,
  Partners,
  About,
  Services,
  Newsletter,
  SignupCTA,
  Pricing,
  Testimonials,
  CTA,
  Footer,
} from "./components";
import { Variants, motion } from "framer-motion";

function App() {
  const easing = [0.6, -0.05, 0.01, 0.99];

  const stagger: Variants = {
    animate: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.02,
        staggerDirection: 1,
      },
    },
  };

  const fadeInUp = {
    initial: {
      y: -60,
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.5,
        ease: easing,
      },
    },
  };

  const fadeInLeft = {
    initial: {
      x: 200,
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.5,
        ease: easing,
      },
    },
  };

  const hero = {
    initial: {
      y: -20,
    },
    animate: {
      y: 0,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
  };

  const letter = {
    initial: {
      y: 400,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easing,
      },
    },
  };

  const header = {
    initial: {
      y: -30,
      opacity: 0,
      transition: {
        duration: 0.02,
        ease: easing,
      },
    },
    animate: {
      y: 0,
      opacity: 1,
      animation: {
        duration: 0.2,
        ease: easing,
      },
    },
  };

  const container = {
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 20,
    },

    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.2,
      },
    },
  };

  const title = {
    hidden: {
      opacity: 0,
      y: 60,
    },

    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.6,
        ease: easing,
      },
    },
  };

  const hoverEffect: Variants = {
    whileHover: {
      scale: 1.5,
      rotate: 630,
      borderRadius: "100%",
    },
    whileTap: {
      scale: 0.8,
      rotate: 630,
      borderRadius: "100%",
    },
  };

  return (
    <motion.div initial="initial" animate="animate">
      <Header stagger={stagger} header={header} />
      <Hero
        easing={easing}
        letter={letter}
        hero={hero}
        fadeInUp={fadeInUp}
        fadeInLeft={fadeInLeft}
      />
      <Partners />
      <About />
      <Services />
      <Newsletter />
      <SignupCTA />
      <Pricing item={item} />
      <Testimonials />
      <CTA />
      <Footer />
    </motion.div>
  );
}

export default App;
