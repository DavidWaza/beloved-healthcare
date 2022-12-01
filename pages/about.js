import React from "react";
import abtStyles from "../styles/About.module.css";

const About = () => {
  return (
    <>
      <div className={abtStyles.hero}>
        <div className={abtStyles.overlay}></div>
        <div className={abtStyles.heroContent}>
          <p>About Us</p>
        </div>
      </div>
      <div className={abtStyles.weCareContainer}>
        <div className={abtStyles.title}>
          <p>About Us</p>
          <p>
            We Take Care of Your <br /> Problems Carefully
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            nisl velit, sollicitudin sit amet ipsum nec, tincidunt convallis
            sapien. In eu volutpat est. Sed malesuada, orci et vehicula viverra,
            lorem magna accumsan purus, id facilisis libero eros a nisl. Vivamus
            ut ligula nec ligula fermentum vestibulum. Curabitur bibendum nulla
            eget mi tempor efficitur. Vestibulum consectetur turpis et massa
            semper, ut maximus neque luctus. Nulla blandit laoreet nisi sed
            rhoncus. Fusce elementum dictum consectetur. Suspendisse potenti.
            Sed vel erat ipsum. Donec sed lacinia arcu, sit amet varius dolor.
            Nulla id nisi eros. Nam et tortor volutpat, malesuada libero quis,
            porta enim. Cras non ullamcorper purus. Nulla facilisi. Donec
            laoreet varius eros sit amet pulvinar. Ut vel nunc imperdiet,
            commodo erat at, aliquam velit. Vivamus et nunc sit amet tellus
            pulvinar bibendum vitae quis ex.
          </p>
        </div>
      </div>
      <div className={abtStyles.whyUs}>
        <div className={abtStyles.whyUsContent}>
          <p>Our History</p>
          <p>Our story for the past 3 <br />years</p>
        </div>
      </div>
    </>
  );
};

export default About;
