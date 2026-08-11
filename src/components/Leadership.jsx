import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion'; 
import './leader.css';
import climbingbigHold from '../assets/big_hold.png'; 
import climbingsmallHold from '../assets/small_hold.png'; 

// Import a unique image for each leader.
import benjaminImage from '../assets/Benjamin_K.jpg';
import gabrielImage from '../assets/Gabriel_Che.jpeg';
import isaacImage from '../assets/Isaac_Canel.jpeg';
import sethImage from '../assets/Seth_W.jpeg';
import oliviaImage from '../assets/Olivia_Bos.jpeg';
import jeffImage from '../assets/Jeff_Wong.jpeg';
import rileyImage from '../assets/Riley_Ou.jpeg';

// Updated data with a unique image for each leader.
const leadershipData = [
  { pres: "PRESIDENT", firstname: "BENJAMIN", lastname: "KIM", hobby: "Favorite climb: a", image: benjaminImage },
  { pres: "VICE PRESIDENT", firstname: "GABRIEL", lastname: "CHE", hobby: "Favorite climb: b", image: gabrielImage },
  { pres: "TREASURER", firstname: "ISAAC", lastname: "CANEL", hobby: "Favorite climb: c", image: isaacImage },
  { pres: "SECRETARY", firstname: "SETH", lastname: "WETTSTEIN", hobby: "Favorite climb: d", image: sethImage },
  { pres: "SOCIAL CHAIR", firstname: "OLIVIA", lastname: "BOS", hobby: "Favorite climb: e", image: oliviaImage },
  { pres: "EVENTS COORDINATOR", firstname: "JEFF", lastname: "WONG", hobby: "Favorite climb: f", image: jeffImage },
  { pres: "COMPETITIONS COORDINATOR", firstname: "RILEY", lastname: "OU", hobby: "Favorite climb: g", image: rileyImage },
];

// Titles that wrap to two lines and need the wider, tighter .long-title layout.
const longTitles = ["VICE PRESIDENT", "SOCIAL CHAIR", "EVENTS COORDINATOR", "COMPETITIONS COORDINATOR"];

export default function LeadershipHeading() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentPerson = leadershipData[currentIndex];

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % leadershipData.length);
  };

  // Framer Motion variants for spring animations
  const springVariants = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 20 } },
    exit: { y: -40, opacity: 0, transition: { type: "spring", stiffness: 300, damping: 20 } }
  };

  return (
    <div>
      <div className="box">
        {/* Dynamic background image */}
     

        {/* AnimatePresence for title */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPerson.pres}
            variants={springVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`title ${longTitles.includes(currentPerson.pres) ? 'long-title' : ''}`}
          >
            <h1>{currentPerson.pres}</h1>
          </motion.div>
        </AnimatePresence>

        {/* Animate firstname */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPerson.firstname}
            variants={springVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="firstname"
          >
            <h1>{currentPerson.firstname}</h1>
          </motion.div>
        </AnimatePresence>

        {/* Animate lastname */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPerson.lastname}
            variants={springVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="lastname"
          >
            <h1>{currentPerson.lastname}</h1>
          </motion.div>
        </AnimatePresence>

        {/* Animate hobbies */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPerson.hobby}
            variants={springVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="hobbies"
          >
            <h1>{currentPerson.hobby}</h1>
          </motion.div>
        </AnimatePresence>

        {/* The big hold with hover animation */}
        <motion.img 
          src={climbingbigHold} 
          alt="Climbing Hold" 
          className="big" 
          whileHover={{ scale: 1.15, rotate: 8, y: -15 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
        
        {/* The small hold with hover animation */}
        <motion.img 
          src={climbingsmallHold} 
          alt="Climbing Hold"
          className="small"
          whileHover={{ scale: 1.15, rotate: 8, y: -15 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />

        {/* Arrow button */}
        <div className="arrow-container" onClick={handleClick}>
          <div className="white-arrow"></div>
        </div>
      </div>
    </div>
  );
};
