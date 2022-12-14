import React, { useState } from "react";
import { ImagesData } from "./ImagesData";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  let length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  
  return (
    <section className="slider">
      <SlArrowLeft className="leftArrow" onClick={prevSlide} />
      <SlArrowRight className="rightArrow" onClick={nextSlide} />

      {ImagesData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="Dogs in the Park" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Carousel;
