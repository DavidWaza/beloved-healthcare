import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import Button from "../Button/button";

const Appointment = () => {
  return (
    <>
      <div>
        <Container className={styles.apointContainer}>
          <Row className="g-0">
            <Col sm={6}>
              <div className={styles.careContainer}>
                <div className={styles.overlayCare}></div>
                <div className={styles.careHeader}>
                  <p>apointment</p>
                  <p>Make quick Consultancy With our Experts</p>
                </div>
              </div>
            </Col>
            <Col sm={6}>
              <div className={styles.careContainer}>
                <div className={styles.formWrapper}>
                  <div className={styles.formControl}>
                    <form>
                      <input type="text" placeholder="Name" />
                      <input type="text" placeholder="Email" />
                      <input type="number" placeholder="Number" />
                    </form>
                    <form>
                      <input type="text" placeholder="Select service" />
                    </form>
                  </div>
                </div>
                <div className={styles.appointButtonContainer}>
                <button className={styles.appointButton}>
                    Make an Appointment
                </button>
                </div>
                
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Appointment;
