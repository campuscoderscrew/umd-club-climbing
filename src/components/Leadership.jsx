import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion'; 
import './leader.css';
import climbingbigHold from '../assets/big_hold.png'; 
import climbingsmallHold from '../assets/small_hold.png'; 

// Import a unique image for each leader.
import skylarImage from '../assets/small_hold.png';
import benjaminImage from '../assets/big_hold.png'; 
import amudhaImage from '../assets/white_hold_1.png';
import jackieImage from '../assets/small_hold.png';
import nicholasImage from '../assets/big_hold.png'; 
import lexieImage from  '../assets/white_hold_1.png';

// Updated data with a unique image for each leader.
const leadershipData = [
  { pres: "PRESIDENT", firstname: "SKYLAR", lastname: "STRICKLER", hobby: "Favorite climb: Ones with rocks", image: skylarImage },
  { pres: "TREASURER", firstname: "BENJAMIN", lastname: "KIM", hobby: "Favorite climb: Competition Style", image: benjaminImage },
  { pres: "VICE PRESIDENT", firstname: "AMUDHA", lastname: "KRISHNAN", hobby: "Favorite climb: Bouldering", image: amudhaImage },
  { pres: "SECRETARY", firstname: "JACKIE", lastname: "TESTERMAN", hobby: "Favorite climb: Overhang", image: jackieImage },
  { pres: "GEAR MANAGER", firstname: "NICHOLAS", lastname: "COLOMEY", hobby: "Favorite climb: Winter mountaineering", image: nicholasImage },
  { pres: "SOCIAL CHAIR", firstname: "LEXIE", lastname: "LEONG", hobby: "Favorite climb: Ones w/ dynamic moves", image: lexieImage },
];

export default function LeadershipHeading() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentPerson = leadershipData[currentIndex];
  
  // This function handles the click event for the arrow.
  const handleClick = () => {
    // Increment the index, and use the modulo operator to loop back to 0
    // when the index goes past the last item in the array.
    setCurrentIndex((prevIndex) => (prevIndex + 1) % leadershipData.length);
  };

  return (
    <div>
      <div className="box">
        {/* The src of the background image is now dynamic, tied to the current leader */}
        <motion.img 
            src={currentPerson.image}
            alt={`${currentPerson.firstname}'s portrait`}
            className="background-image"
            key={currentPerson.image} // This key forces the image to fade in and out
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        />

      <div className={`title ${
        currentPerson.pres === 'SOCIAL CHAIR' || currentPerson.pres === 'VICE PRESIDENT'
        || currentPerson.pres === 'GEAR MANAGER' ? 'long-title' : ''}`}>
          <h1>{currentPerson.pres}</h1>
        </div>
        <div className="firstname">
          <h1>{currentPerson.firstname}</h1>
        </div>
        <div className= "lastname">
          <h1>{currentPerson.lastname}</h1>
        </div>

        <div className="hobbies">
          <h1>{currentPerson.hobby}</h1>
        </div>

        {/* The big hold with the animation */}
        <motion.img 
          src={climbingbigHold} 
          alt="Climbing Hold" 
          className="big" 
          whileHover={{ 
            scale: 1.15,
            rotate: 8,
            y: -15
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 20 
          }}
        />
        
        {/* The small hold with the animation */}
        <motion.img 
          src={climbingsmallHold} 
          alt="Climbing Hold"
          // This className is now dynamic based on the person's name.
          className="small"
          whileHover={{ 
            scale: 1.15,
            rotate: 8,
            y: -15
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 20 
          }}
        />

        {/* This button triggers the handleClick function */}
        <div className="arrow-container" onClick={handleClick}>
          <div className="white-arrow"></div>
        </div>

      </div>
    </div>
  );
};
