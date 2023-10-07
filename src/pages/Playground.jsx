import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { notificationActions } from "../store/notificationSlice";

import Card from "../components/UI/Card";
import Button from "../components/UI/Button";

import styles from "./Playground.module.css";

const Playground = () => {
  const dispatch = useDispatch();
  const displayNotification = useSelector((state) => state.notification.show);

  const toogleNotiHandler = () => {
    dispatch(notificationActions.toggleCounter());
  };

  const toogleNotiIncrementHandler = () => {
    dispatch(notificationActions.increment());
  };

  const toogleNotiDecrementHandler = () => {
    dispatch(notificationActions.decrement());
  };

  const toogleNotiResetHandler = () => {
    dispatch(notificationActions.reset());
  };

  return (
    <motion.main
      className={styles.playground}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
    >
      <Card title="Redux (With Redux Toolkit)">
        <div className={styles.playContent}>
          <p>Command: </p>
          <pre>npm install react-redux @reduxjs/toolkit</pre>
          <p>Playing with the notification count with Redux:</p>
          <div className={styles.buttonGroup}>
            <Button type="theme" onClick={toogleNotiHandler}>
              {displayNotification && "Hide"}
              {!displayNotification && "Show"}
            </Button>
            <Button type="success" onClick={toogleNotiIncrementHandler}>
              Add
            </Button>
            <Button type="danger" onClick={toogleNotiDecrementHandler}>
              Reduce
            </Button>
            <Button type="info" onClick={toogleNotiResetHandler}>
              Reset
            </Button>
          </div>
        </div>
      </Card>
    </motion.main>
  );
};

export default Playground;
