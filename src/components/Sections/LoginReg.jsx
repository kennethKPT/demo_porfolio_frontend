import { useState } from "react";
import { Form } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NewCar from "../Cars/NewCar";

import styles from "./LoginReg.module.css";
import Modal from "../UI/Modal";

const LoginReg = () => {
  const [isRegistering, setIsRegistering] = useState();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  function registerDoneHandler() {
    setIsRegistering(false);
  }

  const registerHandler = () => {
    setIsRegistering(true);
  };

  const loginHandler = () => {
    setIsLoggingIn(true);
  };
  const loginDone = () => {
    setIsLoggingIn(false);
  };

  const Register = ({ onDone }) => {
    return (
      <Modal title="Register" onClose={onDone}>
        Registration Form
      </Modal>
    );
  };

  return (
    <>
      <AnimatePresence>{isRegistering && <Register onDone={registerDoneHandler} />}</AnimatePresence>
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
