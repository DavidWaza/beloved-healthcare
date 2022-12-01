import { Col, Row } from "react-bootstrap";
import styles from "../../styles/Home.module.css";

const Features = () => {
  return (
    <>
      <div className={styles.featuresContainer}>
        <div className={styles.overlayFeatures}></div>
        <div className={styles.featuresContent}>
          <p>our features</p>
          <p>
            Top Features For Your <br /> Convenience.
          </p>
          <p>
            We offer a range of services as well as features to suit your baics
            needs.
            <br />
            here are the few we offer:
          </p>
          <div className={styles.checked}>
            <Row>
              <Col sm={6} className={styles.centralized}>
                <div className={styles.checkedHeader}>
                  <p>Top Nurses</p>
                </div>
              </Col>
              <Col sm={6}>
                <div className={styles.checkedHeader}>
                  <p>Health Consultants</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm={6} className={styles.centralized}>
                <div className={styles.checkedHeader}>
                  <p>Affordable</p>
                </div>
              </Col>
              <Col sm={6}>
                <div className={styles.checkedHeader}>
                  <p>100% guarantee</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
