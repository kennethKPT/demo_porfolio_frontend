import { useState } from "react";
import { Form } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import styles from "./LoginReg.module.css";
import Modal from "../UI/Modal";
import Button from "../UI/Button";

const LoginReg = () => {
  const [isRegistering, setIsRegistering] = useState();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const registerHandler = () => {
    setIsRegistering(true);
  };
  const registerDoneHandler = (event) => {
    event.preventDefault();
    setIsRegistering(false);
  };
  const loginHandler = () => {
    setIsLoggingIn(true);
  };
  const loginDoneHandler = (event) => {
    event.preventDefault();
    setIsLoggingIn(false);
  };

  const Register = ({ onDone }) => {
    const postRegisterHandler = (event) => {
      alert("Welcome New User - Demo Register!");
      event.preventDefault();
      setIsLoggingIn(false);
    };
    return (
      <Modal title="Register" onClose={onDone}>
        <p>New user? We've got you! Please fill in the following to register</p>
        <Form className={styles.regLoginForm}>
          <label htmlFor="login">Login Name: </label>
          <input type="text" id="login" name="login"></input>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password"></input>
          <label htmlFor="confirmPassword">Confirm Password: </label>
          <input type="password" id="confirmPassword" name="confirmPassword"></input>
          <div className={styles.formActions}>
            <Button type="theme" onClick={postRegisterHandler}>
              Register
            </Button>
            <Button type="bgless" onClick={onDone}>
              Cancel
            </Button>
          </div>
        </Form>
      </Modal>
    );
  };

  const Login = ({ onDone }) => {
    const postLoginHandler = (event) => {
      alert("Welcome back - Demo login!");
      event.preventDefault();
      setIsLoggingIn(false);
    };
    return (
      <Modal title="Login" onClose={onDone}>
        <p>Welcome Back! Please fill in the following Login credentials</p>
        <Form className={styles.regLoginForm}>
          <label htmlFor="login">Login Name: </label>
          <input type="text" id="login" name="login"></input>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password"></input>
          <div className={styles.formActions}>
            <Button type="theme" onClick={postLoginHandler}>
              Login
            </Button>
            <Button type="bgless" onClick={onDone}>
              Cancel
            </Button>
          </div>
        </Form>
      </Modal>
    );
  };

  return (
    <>
      <AnimatePresence>{isRegistering && <Register onDone={registerDoneHandler} />}</AnimatePresence>
      <AnimatePresence>{isLoggingIn && <Login onDone={loginDoneHandler} />}</AnimatePresence>
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
