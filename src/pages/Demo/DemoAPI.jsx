import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Card from "../../components/UI/Card";
import LoadingIndicator from "../../components/UI/LoadingIndicator";

import apiImg from "../../assets/api.jpg";
import styles from "./DemoAPI.module.css";
import Button from "../../components/UI/Button";

const DemoAPI = () => {
  const userId = useRef();
  const [step, setStep] = useState(1);
  const [user, setUser] = useState(null);
  const [inputUserId, setInputUserId] = useState("2");
  const [isLoading, setIsLoading] = useState(false);
  const [apiContent, setApiContent] = useState('Press the "Step 1" Button above to see raw data.');

  const inputUserIdHandler = () => {
    setInputUserId(userId.current.value);
  };

  const stepOneHandler = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://reqres.in/api/users/" + userId.current.value);
      if (response.ok) {
        const userFromApi = await response.json();
        setUser(userFromApi.data);
        setApiContent(JSON.stringify(userFromApi, null, 4));
        setStep(2);
      } else {
        throw new Error("Data cannot be retrieved from backend server. Error code: " + response.status);
      }
    } catch (err) {
      setApiContent(err.message + "\nMaybe user number is out of range? (Range: 1-12)");
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 50);
    }
  };

  const stepTwoHandler = () => {
    setStep(3);
  };

  const resetHandler = () => {
    setStep(1);
    setApiContent('Press the "Step 1" Button above to see raw data.');
  };

  let stepOneButton = (
    <>
      <div>
        <Button type="theme" onClick={stepOneHandler}>
          Step 1. Get the raw data
        </Button>
        <Button type="danger" onClick={resetHandler}>
          Reset
        </Button>
      </div>
      <div>
        <p className={styles.customURL}>
          (URL:{" "}
          <a href={`https://reqres.in/api/users/${inputUserId}`} target="_blank">
            https://reqres.in/api/users/
          </a>
          <input
            type="number"
            className={styles.customURLInput}
            id="userId"
            name="userId"
            placeholder="Number from 1 to 12"
            ref={userId}
            value={inputUserId}
            onChange={inputUserIdHandler}
          />
          )
        </p>
      </div>
    </>
  );

  let stepTwoButton = (
    <div>
      <Button type="theme" onClick={stepTwoHandler}>
        Step 2. Process Data
      </Button>
      <Button type="danger" onClick={resetHandler}>
        Reset
      </Button>
    </div>
  );

  let stepThreeButton = (
    <div className={styles.stepThreeContent}>
      <p>Check the namecard generated below. Data from API become Information.</p>
      <Button type="danger" onClick={resetHandler}>
        Reset
      </Button>
    </div>
  );

  return (
    <motion.main
      className={styles.demoApi}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
    >
      <h1>API Demo and Example</h1>
      <p>
        Web applications can be separated into two parts: Front-end and Back-end. <br />A front-end can be put simply
        as, the screen. In order to retrieve data, API calls are used.
        <br /> APIs are provided by any back-end server (In this sample, it is: &nbsp;
        <a href="https://reqres.in" target="_blank">
          reqres.in
        </a>
        )<br /> API data provider can be anywhere in the world, aiming faster response for site visitors.
      </p>
      <Card title="Example (Special thanks to ReqRes)" img={{ src: apiImg, alt: "Picture explaining API calls" }}>
        <div className={styles.example}>
          {step == 1 && stepOneButton}
          {step == 2 && stepTwoButton}
          {step == 3 && stepThreeButton}
          <div className={styles.exampleDesc}>{isLoading ? <LoadingIndicator /> : <pre>{apiContent}</pre>}</div>
        </div>
      </Card>
      <AnimatePresence>
        {step == 3 && (
          <Card
            title={`Name card of ${user.first_name} ${user.last_name}`}
            img={{ src: user.avatar, alt: "Picture explaining API calls" }}
            className={styles.nameCardContainer}
          >
            <table className={styles.userNamecard}>
              <tbody>
                <tr>
                  <td>ID:</td>
                  <td>{user.id}</td>
                </tr>
                <tr>
                  <td>Name:</td>
                  <td>
                    {user.first_name} {user.last_name}
                  </td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>{user.email}</td>
                </tr>
              </tbody>
            </table>
          </Card>
        )}
      </AnimatePresence>
    </motion.main>
  );
};

export default DemoAPI;
