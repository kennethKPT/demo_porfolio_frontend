import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import styles from "./API.module.css";
import Button from "../../components/UI/Button";

const Cloud = () => {
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
      <h1>Cloud Application for Demo Purpose</h1>
      <p>The application is hosted by Amazon Web Services (AWS) based in a server farm in Calgary, AB Canada.</p>
      <p>You can do a trace route to the domain and check.</p>
      <Button type="theme" onClick={backHandler}>
        Back to Home
      </Button>
    </motion.main>
  );
};

export default Cloud;
