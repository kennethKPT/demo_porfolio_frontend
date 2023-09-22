import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "./Navigation.jsx";
import LoginReg from "./LoginReg.jsx";

import carLogo from "../../assets/car_logo.png";
import styles from "./Header.module.css";


export default function Header() {
  const navigate = useNavigate();

  const toWelcomePage = () => {
    navigate("/");
  };

  return (
    <header className={styles.mainHeader}>
      <motion.img
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        src={carLogo}
        className={styles.carLogo}
        onClick={toWelcomePage}
      />
      <Navigation />
      <LoginReg />
      {/* <div>
          <h1>Kenneth's Garage</h1>
          <Button onClick={handleStartAddNewChallenge}>Add Challenge</Button>
        </div> */}
      {/* <nav>
          
        </nav> */}
    </header>
  );
}
