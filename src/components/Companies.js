import React from "react";
import classes from "./Companies.module.css";
import prologis from "../assets/images/prologis.png";
import tower from "../assets/images/tower.png";
import equinix from "../assets/images/equinix.png";
import realty from "../assets/images/realty.png";

function Companies() {
  return (
    <section className={classes.wrapper}>
      <div
        className={`${classes.container} d-flex flex-wrap paddings innerWidth justify-content-around align-items-center gap-3`}
      >
        <img src={prologis} alt="" />
        <img src={tower} alt="" />
        <img src={equinix} alt="" />
        <img src={realty} alt="" />
      </div>
    </section>
  );
}

export default Companies;
