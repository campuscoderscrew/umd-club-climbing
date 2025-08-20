import React, { useState, useEffect } from "react";
import "./Slider.css";

function Slider({ id, images, direction }) {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    setSlides([...images, ...images]); // duplicate for infinite scroll
  }, [images]);

  return (
    <div className="slider" id={id}>
      <div
        className={`slider-track ${
          direction === "right" ? "scrollRight" : "scrollLeft"
        }`}
      >
        {slides.map((src, index) => (
          <div className="slide" key={index}>
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
