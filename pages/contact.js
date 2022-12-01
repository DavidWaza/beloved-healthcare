import { Container, Col, Row } from "react-bootstrap";
import Contstyles from "../styles/Contact.module.css";
import abtStyles from "../styles/About.module.css";

const Contact = () => {
  return (
    <>
      <div className={Contstyles.contactBg}>
        <div className={Contstyles.overlayContact}></div>
        <div className={abtStyles.heroContent}>
          <p>Contact Us</p>
        </div>
      </div>
      <Container fluid className={Contstyles.formWrapper}>
        <Row>
          <Col sm={12}>
            <div className={Contstyles.headerTitle}>
              <p>Contact us</p>
              <p>You can reach us via email or this form below.</p>
            </div>
            <form>
              <input
                type="text"
                placeholder="First Name"
                required
                maxLength={100}
                className={Contstyles.input}
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                maxLength={100}
                className={Contstyles.input}
              />
              <input
                type="Email"
                placeholder="Email"
                required
                maxLength={100}
                className={Contstyles.input}
              />
              <input
                type="number"
                placeholder="Phone Number"
                required
                maxLength={100}
                className={Contstyles.input}
              />
              <textarea
                name="MultiLine"
                maxLength={3000}
                placeholder="Leave us a message"
                className={Contstyles.textArea}
              />
              <div className={Contstyles.buttonSubmit}>
                <button>send enquiry</button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
