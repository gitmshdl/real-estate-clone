import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./Footer.module.css";
import { PiWarehouseBold } from "react-icons/pi";

function Footer() {
  return (
    <div>
      <Container>
        <Row className="d-flex flex-column flex-md-row">
          <Col>
            <h1 className="primaryText">
              <PiWarehouseBold /> Sigma House
            </h1>
            <p>
              a leading technology platform that utilizes artificial
              intelligence technology to correctly estimate Canadian home values
              in real time.
            </p>
          </Col>
          <Col className={classes["even-columns"]}>
            <h5>
              <strong>Company</strong>
            </h5>
            <h6>About Us</h6>
            <h6>Recently Sold Listings</h6>
            <h6>Market Trends</h6>
            <h6>Careers</h6>
            <h6>Recently Sold Homes in Popular Cities</h6>
            <h6>Homes for Sale in Popular Cities</h6>
          </Col>
          <Col className={classes["even-columns"]}>
            <h5>
              <strong>Support</strong>
            </h5>
            <h6>FAQs</h6>
            <h6>Feedback</h6>
            <h6>Privacy & Security</h6>
            <h6>Terms & Conditions</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
