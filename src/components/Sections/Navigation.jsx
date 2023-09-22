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
          to="/Parts"
          text="Parts"
          onClick={(event) => {
            event.preventDefault();
          }}
          showMobileMenu={isMobile}
          variants={item}
          subMenu={[
            {
              to: "/Parts/P1",
              text: "Link 1",
              onClick: clsMenu,
              showMobileMenu: isMobile,
            },
            {
              to: "/Parts/P2",
              text: "Link 2",
              onClick: clsMenu,
              showMobileMenu: isMobile,
            },
          ]}
        ></NavigationItem>
        <NavigationItem to="/Service" text="Service" onClick={clsMenu} showMobileMenu={isMobile} variants={item} />
        <NavigationItem to="/About" text="About Me" onClick={clsMenu} showMobileMenu={isMobile} variants={item} />
        <a href="#" className={styles.icon} onClick={triggerMobileMenu}>
          &#9776;
        </a>
      </motion.nav>
    </>
  );
};

export default Navigation;
