import { useState } from "react";
import { Form } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NewCar from "../Cars/NewCar";

import styles from "./LoginReg.module.css";
import Modal from "../UI/Modal";

const LoginReg = () => {
  const [isCreatingNewCar, setIsCreatingNewCar] = useState();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  function handleDone() {
    setIsCreatingNewCar(false);
  }

  const registerHandler = () => {
    setIsCreatingNewCar(true);
  };

  const loginHandler = () => {
    setIsLoggingIn(true);
  };
  const loginDone = () => {
    setIsLoggingIn(false);
  };

  return (
    <>
      <AnimatePresence>{isCreatingNewCar && <NewCar onDone={handleDone} />}</AnimatePresence>
      <AnimatePresence>
        {isLoggingIn && (
          <Modal title="Login" onClose={loginDone}>
            <p>Welcome Back! Please fill in the following Login credentials</p>
            <Form>
              <label htmlFor="loginName">Login Name: </label>
              <input type="text" id="loginName" name="loginName"></input>
            </Form>
          </Modal>
        )}
      </AnimatePresence>
      <div className={styles.loginReg}>
        <span className={styles.register} onClick={registerHandler}>
          Register
        </span>{" "}
        |{" "}
        <span className={styles.login} onClick={loginHandler}>
          Login
        </span>
      </div>
    </>
  );
};

export default LoginReg;
