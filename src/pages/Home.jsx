import { useScroll, useMotionValueEvent } from "framer-motion";
import styles from "./Home.module.css";
import Card from "../components/UI/Card";

import homeImg1 from "../assets/car_definition.jpg";
import homeImg2 from "../assets/auto_industry.jpg";
import homeImg3 from "../assets/por_img.jpg";
import { useState } from "react";

const HomePage = () => {
  const [offset, setOffset] = useState(10);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {    
    if (scrollY.getVelocity() > 10) {
      setOffset(-10);
    } else if (scrollY.getVelocity() < -10) {
      setOffset(10);
    }
  });

  let fakeContent = (
    <>
      <Card
        offset={offset}
        title="About the Cars"
        img={{ src: homeImg1, alt: "A beautiful car" }}
        content="A car, or an automobile, is a motor vehicle with wheels. Most definitions of cars say that they run
            primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo."
      />
      <Card
        offset={offset}
        title="Automotive Industry"
        img={{ src: homeImg2, alt: "Car factory assembling cars" }}
        content="The automotive industry comprises a wide range of companies and organizations involved in the design,
            development, manufacturing, marketing, selling, repairing, and modification of motor vehicles."
      />
      <Card
        offset={offset}
        title="Luxury and Perfection"
        img={{ src: homeImg3, alt: "A luxury executive car" }}
        content="A sports car is a car designed with an emphasis on dynamic performance, such as handling, acceleration, top speed, 
        the thrill of driving and racing capability. Sports cars originated in Europe in early 1902."
      />
    </>
  );
  return (
    <main className={styles.home}>
      {fakeContent}
      {fakeContent}
      {fakeContent}
      {fakeContent}
    </main>
  );
};

export default HomePage;
