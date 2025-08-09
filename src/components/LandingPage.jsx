import React from 'react';
import { motion } from 'framer-motion';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Container - 2x2 Grid Layout */}
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
            src="/src/assets/small_hold.png" 
            alt="Small Climbing Hold" 
            className="climbing-hold small-hold"
            whileHover={{ 
              scale: 1.1,
              rotate: -5,
              y: -10
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20 
            }}
          />
          <motion.img 
            src="/src/assets/big_hold.png" 
            alt="Large Climbing Hold" 
            className="climbing-hold big-hold"
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
        </div>
        
        {/* Bottom Left - Multiple Climbing Holds */}
        <div className="grid-bottom-left">
          <motion.img 
            src="/src/assets/teal_hold_1.png" 
            alt="Teal Climbing Hold 1" 
            className="climbing-hold teal-hold-1"
            whileHover={{ 
              scale: 1.08,
              rotate: -3,
              x: -5,
              y: -8
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20 
            }}
          />
          <motion.img 
            src="/src/assets/teal_hold_2.png" 
            alt="Teal Climbing Hold 2" 
            className="climbing-hold teal-hold-2"
            whileHover={{ 
              scale: 1.12,
              rotate: 15, // adds to existing 10deg rotation in CSS
              x: 8,
              y: -12
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20 
            }}
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

      {/* Mission Container: view App.jsx & Text section */}
     
    </div>
  );
};

export default LandingPage;