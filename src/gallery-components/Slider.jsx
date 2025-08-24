import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
          <motion.div
  className="slide"
  key={index}
  whileHover={{ scale: 1.05, rotate: 1 }}
  transition={{
    type: "tween"  // higher damping → less bounce
  }}
>
  <img src={src} alt={`Slide ${index + 1}`} />
</motion.div>

        ))}
      </div>
    </div>
  );
}

export default Slider;
