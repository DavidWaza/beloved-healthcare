import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import Button from "../Button/button";
import Image from "next/image";
import Link from "next/link";

const AboutCare = () => {
  return (
    <Container>
      <Row className="g-0">
        <Col sm={4}>
          <div className={styles.careContainer}>
            <div className={styles.AbtcareImg}>
              <Image
                src="https://res.cloudinary.com/ddwkojhaj/image/upload/q_auto,f_auto/v1669830444/pexels-kampus-production-7551610_pt9hoh.jpg"
                alt="alt"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
        </Col>
        <Col sm={8}>
          <div className={styles.careContainer}>
            <div className={styles.overlayCare}></div>
            <div className={styles.careHeader}>
              <p>About us</p>
              <p> We Take Care of Your Problems Carefully.</p>
              <p>
                Beloved home care service is a health care service specialized
                in helping you take care of your sick or aged loved ones at
                home. We save you the inconviences that comes with caring with
                your aged or sick ones. It is our responsibility to fill in that
                spot you might not be able to fill as a result of work ,time or
                any form of restraint . The beautiful thing about us is that we
                are structured for your convenience . you don&apos;t have to come to
                us rather, we come to you .
              </p>
              <Row>
                <Col sm={6}>
                  <div className={styles.amenities}>
                    <p>24/7</p>
                    <p>We are available 24/7 to attend to your needs</p>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className={styles.amenities}>
                    <p>Weekly Report</p>
                    <p>
                      We perform weekly routine checkout to keep up with you.
                    </p>
                  </div>
                </Col>
              </Row>
              <Link href="/contact">
                <Button title="Get a specialist" />
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutCare;
