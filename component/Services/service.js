import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

const Service = () => {
  return (
    <Container>
      <Row className="g-3">
        <Col sm={6} lg={4}>
          <div className={styles.serviceContainer}>
            <div className={styles.serviceCardBlue}>
              <div className={styles.serviceContent}>
                <Image
                  src="/nurse.png"
                  alt="png"
                  width={60}
                  height={60}
                  className={styles.imgContainer}
                />
              </div>
              <div className={styles.serviceText}>
                <p>Specialists / Nurse</p>
                <p>
                  We produce the finest and most caring house care
                  specialists/nurse who are keen on bringing a smile to our
                  customers faces.
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={6} lg={4}>
          <div className={styles.serviceContainer}>
            <div className={styles.serviceCardTeal}>
              <div className={styles.serviceContent}>
                <Image
                  src="/thumbs.png"
                  alt="png"
                  width={60}
                  height={60}
                  className={styles.imgContainerThumbs}
                />
              </div>
              <div className={styles.serviceText}>
                <p>Guaranteed Satisfaction</p>
                <p>
                  At beloved home care, our clients satisfaction is our priority
                  therefore, we work with the best hands who have proven their
                  worth over and again .
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={6} lg={4}>
          <div className={styles.serviceContainer}>
            <div className={styles.serviceCardWhite}>
              <div className={styles.serviceTextThird}>
                <p>3+</p>
                <p>Years of Experience</p>
              </div>
              <div className={styles.serviceTextSlug}>
                <p>
                  Beloved home care personnels are health care specialists with
                  over three years of work experience in their field. Hence, our
                  clients have no fear of amateur inadequacies.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Service;
