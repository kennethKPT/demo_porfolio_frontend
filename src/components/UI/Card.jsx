import { motion } from "framer-motion";

import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <motion.div
      className={`${props.className?props.className:""} ${styles.card}`}
      initial={{ opacity: 0}}
      whileInView={{
        opacity: [0, 0.2, 0.5, 1],
        transition: { duration: 0.4, type: "tween", ease: "easeInOut" },
      }}
      exit={{ opacity: 0}}
      viewport={{ once: false }}
    >
      <h2>{props.title}</h2>
      <div className={styles.container}>
        {props.img && (
          <>
            <img src={props.img.src} alt={props.img.alt} />
            {props.children}
          </>
        )}
        {!props.img && props.children}
      </div>
    </motion.div>
  );
};

export default Card;
