import React from "react";
import classes from "./Hero.module.css";
import heroImage from "../assets/images/Haus.jpg";
import { Button, Container } from "react-bootstrap";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { CiStar } from "react-icons/ci";

function Hero() {
  return (
    <section className={`${classes.wrapper}`}>
      <Container>
        <div
          className={`${classes.container} d-flex flex-wrap innerWidth paddings justify-content-center align-items-center gap-4 `}
        >
          <div
            className={`${classes["hero-left"]} d-flex flex-wrap flex-column`}
          >
            <div className={classes.title}>
              <div className={classes.star}>
                <CiStar size="large" />
              </div>
              <h1>
                Find Your
                <br />
                Dream Home
                <br />
                with Us
              </h1>
            </div>
            <div className={`${classes.description} secondaryText`}>
              <div className="mb-1">
                Explore a wide range of properties that match your unique needs
                and preferences.
              </div>
              <div className="mb-1">
                Whether you're looking for a cozy apartment, a spacious family
                home, or a lucrative investment property, our expert team is
                here to guide you every step of the way.
              </div>
              <div>Start your journey to finding the perfect home today.</div>
            </div>
            <div className={classes.searchBar}>
              <HiLocationMarker color="var(--bs-blue)" size={25} />
              <input type="text" />
              <Button variant="primary" size="sm">
                Search
              </Button>
            </div>
            <div className={`${classes.stats} d-flex justify-content-between`}>
              <div className={`${classes.stat} text-center`}>
                <CountUp start={8000} end={9999} duration={4} />
                <span className={classes.plus}>+</span>
                <div>Premium Residencies</div>
              </div>

              <div className={`${classes.stat} text-center`}>
                <CountUp start={1900} end={2000} duration={4} />
                <span className={classes.plus}>+</span>
                <div>Clients</div>
              </div>

              <div className={`${classes.stat} text-center`}>
                <CountUp start={50} end={100} duration={4} />
                <span className={classes.plus}>+</span>
                <div>Awards Won</div>
              </div>
            </div>
          </div>
          <div
            className={`${classes["hero-right"]} d-flex flex-wrap justify-content-center align-items-center flex-column gap-4`}
          >
            <div className={classes.imageContainer}>
              <img src={heroImage} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
