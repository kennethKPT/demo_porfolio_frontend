import { motion } from "framer-motion";
import styles from "./Service.module.css";

const Service = () => {
  return (
    <motion.main
      className={styles.service}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
    >
      <h1>Service</h1>
      <p>Still thinking of what to add here</p>
    </motion.main>
  );
};

export default Service;
