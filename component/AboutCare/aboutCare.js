import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import Button from "../Button/button";

const AboutCare = () => {
  return (
    <Container>
      <Row className="g-0">
        <Col sm={4}>
          <div className={styles.careContainer}>
            <div className={styles.AbtcareImg}></div>
          </div>
        </Col>
        <Col sm={8}>
          <div className={styles.careContainer}>
            <div className={styles.overlayCare}></div>
            <div className={styles.careHeader}>
              <p>About us</p>
              <p> We Take Care of Your Problems Carefully</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
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
                    <p>We perform weekly routine checkout to keep up with you.</p>
                  </div>
                </Col>
              </Row>
              <Button title="Get a specialist" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutCare;
