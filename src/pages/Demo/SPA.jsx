import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import styles from "./API.module.css";
import Button from "../../components/UI/Button";

const SPA = () => {
  const navigate = useNavigate();
  const backHandler = () => {
    navigate("/Home");
  };
  return (
    <motion.main
      className={styles.demoApi}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
    >
      <h1>Signle Page Application</h1>
      <p>The page is already a SPA. A single page serve all the contents, without refreshing</p>
      <p>I am planning to do more for demo purpose. Stay tuned.</p>
      <Button type="theme" onClick={backHandler}>
        Back to Home
      </Button>
    </motion.main>
  );
};

export default SPA;
