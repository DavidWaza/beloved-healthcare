import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.css";
import Button from "../Button/button";

const Herobanner = () => {
  return (
    <>
      <div className={styles.herobanner}>
        <div className={styles.overlay}></div>
        <div className={styles.heroContent}>
          <p>
            We care for you, we take care of your health 
            anywhere, anytime.
          </p>
          <p>
            {" "}
            We offer a person-centered approach to keep you <br /> safe & sound
            at home, instead of <br />
            anywhere else.
          </p>
          <div className={styles.heroButtonContainer}>
            <Link href="/contact">
              <Button title="Get a specialist" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herobanner;

export const getServerSideProps = async ({ req, res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return {
    props: {},
  };
};
