import React from "react";
import "swiper/css";
import classes from "./Residencies.module.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import data from "../assets/data/slider";
import { Container } from "react-bootstrap";

function Residencies() {
  const SliderButtons = () => {
    const swiper = useSwiper();
    return (
      <div
        className={`${classes.buttons} d-flex justify-content-center align-items-start gap-2`}
      >
        <button onClick={() => swiper.slidePrev()}>&lt;</button>
        <button onClick={() => swiper.slideNext()}>&gt;</button>
      </div>
    );
  };

  return (
    <section className={classes.wrapper}>
      <Container>
        <div className={`${classes.container} paddings innerWidth`}>
          <div className={`${classes.header} `}>
            <div className="primaryText">
              2000+ RESIDENCIES FOR SALE IN VALOR
            </div>
          </div>

          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              480: { slidesPerView: 1 },
              600: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1100: { slidesPerView: 4 },
            }}
          >
            <SliderButtons />
            {data.map((card, i) => (
              <SwiperSlide key={i}>
                <div
                  className={`${classes.card} d-flex flex-column flex-wrap gap-2`}
                >
                  <img
                    src={card.image}
                    alt={card.name}
                    className={classes.cardImage}
                  />
                  <h3 className={classes.cardTitle}>{card.name}</h3>
                  <p className={classes.cardPrice}>{card.price}</p>
                  <p className={classes.cardDetail}>{card.detail}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}

export default Residencies;
