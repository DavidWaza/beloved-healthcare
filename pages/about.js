import React from "react";
import abtStyles from "../styles/About.module.css";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>BHC | about</title>
        <meta
          name="description"
          content="Home service healthcare, home service, about us"
        />
      </Head>
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
            Beloved home care service is a health care service specialized in
            helping you take care of your sick or aged loved ones at home. We
            save you the inconviences that comes with caring with your aged or
            sick ones. It is our responsibility to fill in that spot you might
            not be able to fill as a result of work,time or any form of
            restraint . The beautiful thing about us is that we are structured
            for your convenience. you don&apos;t have to come to us rather, we come
            to you.
          </p>
        </div>
      </div>
      <div className={abtStyles.whyUs}>
        <div className={abtStyles.whyUsContent}>
          <p>Our History</p>
          <p>
            Our story for the past 3 <br />
            years
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
