import { motion } from "framer-motion";

import styles from "./Button.module.css";

const Button = (props) => {

  let buttonType = "";
  
  if (props.type) {
    buttonType = styles[props.type];
  }

  return (
    <motion.button
      className={`${styles.button} ${buttonType} ${(props.className)?(props.className):""}`}
      onClick={props.onClick}
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", duration: 0.2 }}
    >
      {props.children}
    </motion.button>
  );
};

export default Button;
