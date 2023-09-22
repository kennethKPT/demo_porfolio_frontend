import { motion } from "framer-motion";

import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{
        opacity: [0, 0.2, 0.5, 1],
        y: [10, 0],
        transition: { duration: 0.2, type: "tween", ease: "easeInOut" },
      }}
      viewport={{ once: false }}
    >
      <h2>{props.title}</h2>
      <div className={styles.container}>
        {props.img && (
          <>
            <img src={props.img.src} alt={props.img.alt} />
            <p>{props.content}</p>
          </>
        )}
        {!props.img && props.context}
      </div>
    </motion.div>
  );
};

export default Card;
