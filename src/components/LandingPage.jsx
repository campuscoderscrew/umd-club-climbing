import React from 'react';
import { motion } from 'framer-motion';
import './LandingPage.css';

// ✅ Import images from src/assets
import smallHold from '../assets/small_hold.png';
import bigHold from '../assets/big_hold.png';
import tealHold1 from '../assets/teal_hold_1.png';
import tealHold2 from '../assets/teal_hold_2.png';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero-container">
        {/* Top Left - UMD CLUB CLIMBING */}
        <div className="grid-top-left">
          <h1 className="club-title">
            <span className="highlight-text">UMD</span><br />
            CLUB<br />
            CLIMBING
          </h1>
        </div>
        
        {/* Top Right - Multiple Climbing Holds */}
        <div className="grid-top-right">
          <motion.img 
            src={smallHold} 
            alt="Small Climbing Hold" 
            className="climbing-hold small-hold"
            whileHover={{ scale: 1.1, rotate: -5, y: -10 }}
            whileTap={{ scale: 0.95, rotate: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
          <motion.img 
            src={bigHold} 
            alt="Large Climbing Hold" 
            className="climbing-hold big-hold"
            whileHover={{ scale: 1.15, rotate: 8, y: -15 }}
            whileTap={{ scale: 0.95, rotate: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </div>
        
        {/* Bottom Left - Multiple Climbing Holds */}
        <div className="grid-bottom-left">
          <motion.img 
            src={tealHold1} 
            alt="Teal Climbing Hold 1" 
            className="climbing-hold teal-hold-1"
            whileHover={{ scale: 1.08, rotate: -3, x: -5, y: -8 }}
            whileTap={{ scale: 0.95, rotate: 0, x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
          <motion.img 
            src={tealHold2} 
            alt="Teal Climbing Hold 2" 
            className="climbing-hold teal-hold-2"
            whileHover={{ scale: 1.12, rotate: 15, x: 8, y: -12 }}
            whileTap={{ scale: 0.95, rotate: 0, x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </div>
        
        {/* Bottom Right - REACH NEW HEIGHTS */}
        <div className="grid-bottom-right">
          <h2 className="hero-subtitle">
            REACH<br />
            NEW<br />
            <span className="highlight-text">HEIGHTS</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
