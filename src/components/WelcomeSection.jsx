import { Parallax } from "react-parallax";

import styles from "./WelcomeSection.module.css";

const WelcomeSection = (props) => {
  return (
    <Parallax
      className={styles.welcomeSection}
      blur={props.blur}
      bgImage={props.bgImage}
      bgImageAlt={props.bgImageAlt}
      strength={250}
    >
      <section className={props.taAlign}>
        <div className={`${styles.content} ${props.maAlign}`}>{props.children}</div>
      </section>
    </Parallax>
  );
};

export default WelcomeSection;
