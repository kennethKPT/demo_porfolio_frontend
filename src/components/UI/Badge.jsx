import { motion } from "framer-motion";

import styles from "./Badge.module.css";

export default function Badge({ caption }) {
  return (
    <motion.span animate={{ scale: [1, 1.5, 0.5, 1] }} transition={{ duration: 0.3 }} className={styles.badge}>
      {caption}
    </motion.span>
  );
}
