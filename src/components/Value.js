import React from "react";
import classes from "./Value.module.css";
import { Accordion, Container } from "react-bootstrap";
import data from "../assets/data/accordion";
import value from "../assets/images/value.jpg";

function Value() {
  return (
    <section>
      <Container>
        <div
          className={`${classes.container} d-flex flex-column flex-md-row gap-2`}
        >
          <div className={classes.left}>
            <img src={value} alt="" />
          </div>
          <div className={classes.right}>
            <Accordion defaultActiveKey="0">
              {data.map((item, i) => (
                <Accordion.Item eventKey={i.toString()} key={i}>
                  <Accordion.Header>
                    {item.icon}
                    {item.heading}
                  </Accordion.Header>
                  <Accordion.Body>{item.detail}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Value;
