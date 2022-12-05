import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import Contstyles from "../../styles/Contact.module.css";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import Link from "next/link";

const Appointment = () => {
  const [state, handleSubmit] = useForm("mzbwnzqa");
  if (state.succeeded) {
    return (
      <div className={Contstyles.successContainer}>
        <div className={Contstyles.successContent}>
          <Image src="/shake.gif" alt="gif" width={100} height={100} />
        </div>
        <div className={Contstyles.success}>
          <p>Congratulations!!</p>
          <p>Your Appointment has been recieved</p>
        </div>
        <Link href="/">Home</Link>
      </div>
    );
  }
  return (
    <>
      <div>
        <Container className={styles.apointContainer}>
          <Row className="g-0">
            <Col sm={6}>
              <div className={styles.appointWrapper}>
                <div className={styles.appointHeader}>
                  <p>appointment</p>
                  <p>Make quick Consultancy With our Experts.</p>
                </div>
              </div>
            </Col>
            <Col sm={6}>
              <div className={styles.appointWrapper}>
                <div className={styles.formWrapper}>
                  <div className={styles.formControl}>
                    <form onSubmit={handleSubmit}>
                      <input type="text" placeholder="Name" name="name" />
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                      />
                      <input type="text" placeholder="Email" name="email" />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                      <input type="text" placeholder="Number" name="number" />
                      <ValidationError
                        prefix="Number"
                        field="number"
                        errors={state.errors}
                      />
                      <input
                        type="text"
                        placeholder="Select service"
                        name="services"
                      />
                      <ValidationError
                        prefix="Service"
                        field="service"
                        errors={state.errors}
                      />
                      <button
                        className={styles.appointButton}
                        type="submit"
                        disabled={state.submitting}
                      >
                        Make an Appointment
                      </button>
                    </form>
                  </div>
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
