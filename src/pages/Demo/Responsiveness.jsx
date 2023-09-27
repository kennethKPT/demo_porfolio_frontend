import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import styles from "./API.module.css";
import Button from "../../components/UI/Button";

const Responsiveness = () => {
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
      <h1>Responsive Website</h1>
      <p>This website is already a responsive one. You can resize the window to see the changes.</p>
      <p>I am planning to do more for demo purpose. Stay tuned.</p>
      <Button type="theme" onClick={backHandler}>
        Back to Home
      </Button>
    </motion.main>
  );
};

export default Responsiveness;
