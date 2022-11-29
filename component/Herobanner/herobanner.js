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
            You can't always be there. <br /> But we can.
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
