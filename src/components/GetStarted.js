import React from "react";
import classes from "./GetStarted.module.css";
import { Button, Container } from "react-bootstrap";

function GetStarted() {
  return (
    <section className="mb-4">
      <Container>
        <div className={`${classes.container} text-md-center`}>
          <h1 className="primaryText">Connect with Us</h1>
          <p>
            Subscribe to begin your journey to finding the perfect home with us.
            <br />
            Explore our listings, connect with experts, and take the first step
            towards owning your dream property today.
          </p>
          <Button variant="success">Get Started</Button>
        </div>
      </Container>
    </section>
  );
}

export default GetStarted;
