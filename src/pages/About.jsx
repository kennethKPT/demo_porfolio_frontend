import { motion } from "framer-motion";

import images from "../assets/about/images";
import Card from "../components/UI/Card";
import styles from "./About.module.css";

const About = () => {
  const TechStackItem = ({ from, delayS, listItem }) => {
    return (
      <ul>
        {listItem.map((item, idx) => (
          <motion.li
            key={item.text}
            hidden={{ opacity: 0 }}
            animate={{ opacity: 1, x: [from, "0vw"], transition: { duration: 0.5, delay: delayS+(idx*0.08) } }}
            exit={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
          >
            <img src={item.img.src} alt={item.img.alt} className={styles.logo} />
            {item.text}
          </motion.li>
        ))}
      </ul>
    );
  };

  return (
    <motion.main
      className={styles.aboutMe}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
    >
      <h1>About Me</h1>
      <p>This is a demo website by developed Kenneth Tsang.</p>
      <p>
        I am a full-stack developer in Canada with a Master Degree in Information Technology Management. <br />
        Accredited as Associate Information Technology Professional (AITP) by Canadian Information Processing Society
        (CIPS).
        <br />
        Member of CPIS since 2019.
      </p>
      <p>
        I have worked in the IT industry for 10+ years, managing in-house application systems as well as ERP.
      </p>
      <p>Here listed the major tech stack I am familiar, for reference.</p>
      <Card title="Technology Stack">
        <div className={styles.techStack}>
          <h2>Front-End</h2>
          <TechStackItem
            from="-50vw"
            delayS={0}
            listItem={[
              { img: images.jsImg, text: "Javascript (Including ES6)" },
              { img: images.reactImg, text: "React (Router, Redux, etc)" },
              { img: images.nextjsImg, text: "Next JS 13+" },
              { img: images.vueImg, text: "Vue JS 3.2+" },
              { img: images.bootstrapImg, text: "Bootstrap 4+" },
              { img: images.htmlImg, text: "HTML 5" },
              { img: images.cssImg, text: "CSS 3" },
            ]}
          />
        </div>
        <div className={styles.techStack}>
          <h2>Back-End</h2>
          <TechStackItem
            from="-100vw"
            delayS={0.5}
            listItem={[
              { img: images.nodejsImg, text: "NodeJS (With Express)" },
              { img: images.javaImg, text: "JAVA (With Spring/Spring Boot)" },
              { img: images.oracleImg, text: "Oracle Database" },
              { img: images.mysqlImg, text: "MySQL Database" },
              { img: images.mongodbImg, text: "MongoDB NoSQL Database" },
              { img: images.awsImg, text: "Amazon Web Services AWS (Mainly EC2)" },
            ]}
          />
        </div>
      </Card>
    </motion.main>
  );
};

export default About;
