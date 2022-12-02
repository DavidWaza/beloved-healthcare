import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.css";
import Button from "../Button/button";
import Image from "next/image";

const Herobanner = () => {
  return (
    <>
      <div className={styles.herobanner}>
        <div className={styles.overlay}></div>
        <div className={styles.heroContent}>
          <p>
            You cant always be there. <br /> But we can.
          </p>
          <p>
            {" "}
            We offer a person-centered approach to keep you safe & sound at
            home, instead of anywhere else.
          </p>
          <div>
            <Link href="/">
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
