import React, { useState } from "react";
import { PhotoCard } from "./PhotoCard";
import "./PhotoCardCarousel.css";
import photo1 from "../asset/rock1.jpg";
import photo2 from "../asset/rock2.jpg";
import photo3 from "../asset/rock3.jpg";


export const PhotoCardCarousel = () => {
 const [index, setIndex] = useState(0);
 const photos = [
   { src: photo1, title: "Photo 1" },
   { src: photo2, title: "Photo 2" },
   { src: photo3, title: "Photo 3" },
 ];


 const prev = () => setIndex((index - 1 + photos.length) % photos.length);
 const next = () => setIndex((index + 1) % photos.length);


 return (
   <div className="carousel-container">
     <button onClick={prev} className="nav-btn">‹</button>
     <PhotoCard {...photos[index]} />
    
     <button onClick={next} className="nav-btn">›</button>
   </div>
 );
};
