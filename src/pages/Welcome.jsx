import { useNavigate } from "react-router-dom";
import WelcomeSection from "../components/WelcomeSection";
import Button from "../components/UI/Button";

import carsImg1 from "../assets/welcome_sportscar_1.jpg";
import carsImg2 from "../assets/welcome_sportscar_2.jpg";
import carsImg3 from "../assets/welcome_sportscar_3.jpg";

export default function WelcomePage() {
  const navigat = useNavigate();

  const navigateToMainHandler = () => {
    navigat("/Home");
  };

  return (
    <main>
      <WelcomeSection
        blur={3}
        bgImage={carsImg1}
        bgImageAlt="A brand new Porsche 911"
        taAlign="taLeft"
        maAlign="toLeft"
      >
        <h1>Ready for a new car?</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer galley of type and scrambled it to make a
          type specimen book. It has survived not only five centuries, but also the leap into electronic.
        </p>
        <Button onClick={navigateToMainHandler} className="bold" type="bgless">
          View Cars &gt;&gt;
        </Button>
      </WelcomeSection>
      <WelcomeSection
        blur={3}
        bgImage={carsImg2}
        bgImageAlt="A brand new Porsche 911 showing the tail"
        taAlign="taCenter"
        maAlign="toCenter"
      >
        <h1>Again, are YOU ready?!</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book.
        </p>
        <Button onClick={navigateToMainHandler} className="bold" type="bgless">
          View Cars &gt;&gt;
        </Button>
      </WelcomeSection>
      <WelcomeSection
        blur={3}
        bgImage={carsImg3}
        bgImageAlt="A brand new Porsche 911 on snowground"
        taAlign="taRight"
        maAlign="toRight"
      >
        <h1>Feeling so READY?</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.
        </p>
        <Button onClick={navigateToMainHandler} className="bold" type="bgless">
          View Cars &gt;&gt;
        </Button>
      </WelcomeSection>
    </main>
  );
}
