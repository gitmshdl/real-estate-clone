import React from "react";
import classes from "./Contact.module.css";
import { Col, Container, Row } from "react-bootstrap";
import contact from "../assets/images/contact.jpg";
import { FaRocketchat } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail, MdMessage } from "react-icons/md";

function Contact() {
  return (
    <section className="mb-4">
      <Container>
        <div
          className={`${classes.container} d-flex flex-column flex-md-row gap-2`}
        >
          <div className={classes.left}>
            <img src={contact} alt="" />
          </div>
          <div
            className={`${classes.right} d-flex flex-column justify-content-center align-items-center`}
          >
            <Row>
              <Col className={classes.card}>
                <h5>
                  <IoCall /> Call US
                </h5>
                <p>Reach us directly by phone for immediate assistance.</p>
              </Col>
              <Col className={classes.card}>
                <h5>
                  <FaRocketchat /> Chat With Us
                </h5>
                <p>Use our live chat for quick and convenient support.</p>
              </Col>
            </Row>
            <Row>
              <Col className={classes.card}>
                <h5>
                  <MdMessage /> Message Us
                </h5>
                <p>Send a text message for prompt replies on the go.</p>
              </Col>
              <Col className={classes.card}>
                <h5>
                  <MdEmail /> Email Us
                </h5>
                <p>Email us for detailed inquiries and responses.</p>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
