import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import Button from "../Button/button";
import Image from "next/image";
import Link from "next/link";

const Care = () => {
  return (
    <>
      <Container>
        <Row className="g-0">
          <Col sm={8} lg={8}>
            <div className={styles.careContainer}>
              <div className={styles.overlayCare}></div>
              <div className={styles.careHeader}>
                <p>We care for you</p>
                <p> Take care of health anywhere, anytime.</p>
                <p>
                  It is our duty to make ourselves physically and
                  physchologically available for our clients, anytime, anyday.
                  We are just an email away from taking care of you.
                </p>
                <Link href="/contact">
                  <Button title="Get a specialist" />
                </Link>
              </div>
            </div>
          </Col>
          <Col sm={4} lg={4}>
            <div className={styles.careContainer}>
              <div className={styles.careImg}>
                <Image
                  src="https://res.cloudinary.com/ddwkojhaj/image/upload/q_auto,f_auto/v1669810723/pexels-kampus-production-7551667_nkfw4y.jpg"
                  alt="alt"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Care;
