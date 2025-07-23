import React from "react";
import "./PhotoCard.css";


export const PhotoCard = ({ src, title }) => {
 return (
   <div className="photo-card">
     <img src={src} alt={title} className="photo-img" />
     <div className="photo-caption">{title}</div>
   </div>
 );
};