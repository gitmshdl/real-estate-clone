import React from "react";
import classes from "./Mission.module.css";
import { Accordion, Container } from "react-bootstrap";
import data from "../assets/data/accordion";
import value from "../assets/images/value.jpg";

function Mission() {
  return (
    <section className="mb-4">
      <Container>
        <div
          className={`${classes.container} d-flex flex-column flex-md-row gap-2`}
        >
          <div className={classes.left}>
            <img src={value} alt="" />
          </div>
          <div className={`${classes.right}`}>
            <h1 className="primaryText">OUR MISSION</h1>
            <Accordion defaultActiveKey="0">
              {data.map((item, i) => (
                <Accordion.Item
                  eventKey={i.toString()}
                  key={i}
                  className={classes.accordion}
                >
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

export default Mission;
