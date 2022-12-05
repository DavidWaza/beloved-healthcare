import { Container, Col, Row } from "react-bootstrap";
import Contstyles from "../styles/Contact.module.css";
import abtStyles from "../styles/About.module.css";
import Head from "next/head";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import Link from 'next/link';

const Contact = () => {
  const [state, handleSubmit] = useForm("xaykryyz");
  if (state.succeeded) {
    return (
      <div className={Contstyles.successContainer}>
        <div className={Contstyles.successContent}>
          <Image src="/shake.gif" alt="gif" width={100} height={100} />
        </div>
        <div className={Contstyles.success}>
          <p>Congratulations!!</p>
          <p>You are now Family!</p>
        </div>
        <Link href="/">Home</Link>
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>BHC | Contact</title>
        <meta
          name="description"
          content="Home service healthcare, home service, contact us, admit"
        />
      </Head>
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
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="First Name"
                required
                name="First Name"
                maxLength={100}
                className={Contstyles.input}
              />
              <ValidationError
                prefix="First Name"
                field="First Name"
                errors={state.errors}
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                name="Last Name"
                maxLength={100}
                className={Contstyles.input}
              />
              <ValidationError
                prefix="Last Name"
                field="Last Name"
                errors={state.errors}
              />
              <input
                type="Email"
                placeholder="Email"
                required
                name="Email"
                maxLength={100}
                className={Contstyles.input}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <input
                type="text"
                placeholder="Phone Number"
                required
                name="number"
                maxLength={100}
                className={Contstyles.input}
              />
              <ValidationError
                prefix="Phone Number"
                field="number"
                errors={state.errors}
              />
              <textarea
                name="Message"
                maxLength={3000}
                placeholder="Leave us a message"
                className={Contstyles.textArea}
              />
              <ValidationError
                prefix="MultiLine"
                field="MultiLine"
                errors={state.errors}
              />
              <div className={Contstyles.buttonSubmit}>
                <button type="submit" disabled={state.submitting}>
                  send enquiry
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
