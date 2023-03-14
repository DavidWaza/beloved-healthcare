import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import { footerArr } from "../footerArr/footerArr";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <Container>
          <Row>
            {footerArr.map((footer) => (
              <Col sm={6} key={footer.id}>
                <div className={styles.footerContent}>
                    <h3>{footer.title}</h3>
                    <p>{footer.slugOne}</p>
                    <p>{footer.slugTwo}</p>
                    <p>{footer.slugThree}</p>
                </div>
              </Col>
            ))}
          </Row>
          <div className={styles.reserved}>
            <div className={styles.reservedWord}>
              <p>Copyright © 2022</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
