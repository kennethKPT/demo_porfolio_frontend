import { NavLink } from "react-router-dom";

import styles from "./Home.module.css";
import Card from "../components/UI/Card";

import dummyImg1 from "../assets/car_definition.jpg";
import dummyImg2 from "../assets/auto_industry.jpg";
import dummyImg3 from "../assets/por_img.jpg";
import reactImg from "../assets/react_logo.jpg";
import apiImg from "../assets/api.jpg";
import spaImg from "../assets/spa.jpg";
import responsiveImg from "../assets/responsive.jpg";
import cloudImg from "../assets/aws.jpg";

const HomePage = () => {
  return (
    <main className={styles.home}>
      <Card title="Demo Website" img={{ src: reactImg, alt: "Logo of React, a front end framework" }}>
        <p>
          This is a demo website built by myself, using React as the front-end. The website utilizes different
          technology and libraries provided by React and the Internet with NPM. It is a reponsive, single paged web
          application. Please feel free to explore!
          <br />
          <br />
          <NavLink to="/Cars">Show an example &gt;&gt;</NavLink>
        </p>
      </Card>
      <Card title="API Demo" img={{ src: apiImg, alt: "Picture explaining API calls" }}>
        <p>
          Web applications can be separated into two parts: Front-end and Back-end. A front-end can be put simply as,
          the screen. In order to retrieve data, API calls are used. APIs are provided by any back-end server, anywhere
          in the world, aiming faster response for user.
          <br />
          <br />
          <NavLink to="/Demo/API">Show how API works &gt;&gt;</NavLink>
        </p>
      </Card>
      <Card title="Single Page Application" img={{ src: spaImg, alt: "Single page application explanation" }}>
        <p>
          Single Page Application (SPA) means the website will not reload every time you clicked a button or visited
          another link. In fact, this whole demo website is a SPA. You can visit different links through the menu and
          you will notice the website does not reload at all.
          <br />
          <br />
          <NavLink to="/Demo/SPA">Experience speed of a SPA &gt;&gt;</NavLink>
        </p>
      </Card>
      <Card
        title="Responsive Website"
        img={{ src: responsiveImg, alt: "Different devices showing same website with adoptive layout" }}
      >
        <p>
          While a smartphone displays website vertically, traditional PC screen does the other way round. A responsive
          website will dynamically change the layout to fit all devices with any width and height in order to provide a
          better user experience for visitors and customers.
          <br />
          <br />
          <NavLink to="/Demo/Responsiveness">Try smaller screen width &gt;&gt;</NavLink>
        </p>
      </Card>
      <Card title="Cloud Technology" img={{ src: cloudImg, alt: "Official logo of Amazon Web Service (AWS)" }}>
        <p>
          To strike for the best performance and server resilience, cloud computing is one of the workable solutions.
          For example, this site is currently sitting on a cloud server in Calgary, AB Canada hosted by Amazon Web
          Service (AWS).
          <br />
          <br />
          <NavLink to="/Demo/Cloud">Know more about Cloud &gt;&gt;</NavLink>
        </p>
      </Card>
      <Card title="Dummy about the Cars" img={{ src: dummyImg1, alt: "A beautiful car" }}>
        <p>
          A car, or an automobile, is a motor vehicle with wheels. Most definitions of cars say that they run primarily
          on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.
        </p>
      </Card>
      <Card title="Dummy Car Stuff" img={{ src: dummyImg2, alt: "Car factory assembling cars" }}>
        <p>
          The automotive industry comprises a wide range of companies and organizations involved in the design,
          development, manufacturing, marketing, selling, repairing, and modification of motor vehicles.
        </p>
      </Card>
      <Card title="Dummy More Car Stuff" img={{ src: dummyImg3, alt: "A luxury executive car" }}>
        <p>
          A sports car is a car designed with an emphasis on dynamic performance, such as handling, acceleration, top
          speed, the thrill of driving and racing capability. Sports cars originated in Europe in early 1902.
        </p>
      </Card>
    </main>
  );
};

export default HomePage;
