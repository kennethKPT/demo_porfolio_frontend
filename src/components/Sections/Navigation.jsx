import { useState } from "react";
import { motion } from "framer-motion";

import NavigationItem from "./NavigationItem";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);

  const triggerMobileMenu = () => {
    setIsMobile((prevState) => {
      return !prevState;
    });
  };

  const clsMenu = () => {
    setIsMobile(false);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
    transition: { type: "tween", duration: 0.2 },
  };

  return (
    <>
      <motion.nav
        className={`${styles.topnav} ${isMobile ? styles.responsive : ""}`}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <NavigationItem to="/Home" text="Home" onClick={clsMenu} showMobileMenu={isMobile} variants={item} />
        <NavigationItem to="/Cars" text="Cars" onClick={clsMenu} showMobileMenu={isMobile} variants={item} />
        <NavigationItem
          to="/Demo"
          text="Demo"
          onClick={(event) => {
            event.preventDefault();
          }}
          showMobileMenu={isMobile}
          variants={item}
          subMenu={[
            {
              to: "/Demo/API",
              text: "API Connectivity",
              onClick: clsMenu,
              showMobileMenu: isMobile,
            },
            {
              to: "/Demo/SPA",
              text: "Single Page Application",
              onClick: clsMenu,
              showMobileMenu: isMobile,
            },
            {
              to: "/Demo/Responsiveness",
              text: "Responsiveness",
              onClick: clsMenu,
              showMobileMenu: isMobile,
            },
            {
              to: "/Demo/Cloud",
              text: "Cloud Services",
              onClick: clsMenu,
              showMobileMenu: isMobile,
            },
          ]}
        ></NavigationItem>
        <NavigationItem to="/Playground" text="Playground" onClick={clsMenu} showMobileMenu={isMobile} variants={item} />
        <NavigationItem to="/About" text="About" onClick={clsMenu} showMobileMenu={isMobile} variants={item} />
        <a href="#" className={styles.icon} onClick={triggerMobileMenu}>
          &#9776;
        </a>
      </motion.nav>
    </>
  );
};

export default Navigation;
