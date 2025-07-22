import React, { useEffect, useState } from "react";
import "./FadeIn.css";


export const FadeInCard = ({ children }) => {
 const [show, setShow] = useState(false);


 useEffect(() => {
   setTimeout(() => setShow(true), 100); // small delay to trigger transition
 }, []);


 return <div className={`fade-in ${show ? "show" : ""}`}>{children}</div>;
};
