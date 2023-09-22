import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import styles from "./NavigationItem.module.css";

const NavigationItem = (props) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (props.showMobileMenu) {
      setShowMobileMenu(true);
    } else {
      setShowMobileMenu(false);
    }
  }, [props]);

  const calcClasses = ({ isActive }) => {
    let classes = showMobileMenu ? "" : styles.hide;
    if (isActive) {
      classes = `${styles.active} ${classes}`;
    }
    return classes;
  };

  const showSubmenuHandler = () => {
    setShowSubMenu(true);
  };

  const hideSubmenuHandler = () => {
    setShowSubMenu(false);
  };

  const subMenuClickHandler = (originalHandler) => {
    setShowSubMenu(false);
    originalHandler();
  };

  let content;

  if (!props.subMenu) {
    //No Sub Menu
    content = (
      <motion.div variants={props.variants}>
        <NavLink to={props.to} onClick={props.onClick} className={calcClasses}>
          {props.text}
        </NavLink>
        {props.subMenu && (
          <div className={styles.dropdownContent}>
            <ul>
              {props.subMenu.map((menu) => (
                <li key={menu.text}>{menu.text}</li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    );
  } else {
    //With Sub Menu
    content = (
      <motion.div
        className={`${styles.dropdown} ${showMobileMenu ? styles.dropdownFloatNone : ""}`}
        onMouseEnter={showSubmenuHandler}
        onMouseLeave={hideSubmenuHandler}
        variants={props.variants}
      >
        <button className={styles.dropbtn}>
          <NavLink to={props.to} onClick={props.onClick} className={calcClasses}>
            {props.text} <span className={styles.dropdownRotateIcon}>&#9656;</span>
          </NavLink>
        </button>
        {showSubMenu && (
          <div className={styles.dropdownContent}>
            {props.subMenu.map((menu) => (
              <NavLink key={menu.to} className={styles.dropdownItem} onClick={()=>{subMenuClickHandler(menu.onClick)}} to={menu.to}>
                {menu.text}
              </NavLink>
            ))}
          </div>
        )}
      </motion.div>
    );
  }
  return content;
};

export default NavigationItem;
