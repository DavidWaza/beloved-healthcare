import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import Button from "../Button/button";

const Care = () => {
  return (
    <>
      <Container>
        <Row className="g-0">
          <Col sm={6}>
            <div className={styles.careContainer}>
              <div className={styles.careHeader}>
                <p>We care of you</p>
                <p> Take care of health anywhere, anytime.</p>
                <p>
                  This a dummy text pending till we get an actual information
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  Ut enim ad minim nostrud.
                </p>
                <Button title="Get a specialist" />
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <div className={styles.careContainer}>
              <div className={styles.careImg}></div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Care;
