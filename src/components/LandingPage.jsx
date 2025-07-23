import React from 'react';
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
          <img 
            src="/src/assets/small_hold.png" 
            alt="Small Climbing Hold" 
            className="climbing-hold small-hold"
          />
          <img 
            src="/src/assets/big_hold.png" 
            alt="Large Climbing Hold" 
            className="climbing-hold big-hold"
          />
        </div>
        
        {/* Bottom Left - Multiple Climbing Holds */}
        <div className="grid-bottom-left">
          <img 
            src="/src/assets/teal_hold_1.png" 
            alt="Teal Climbing Hold 1" 
            className="climbing-hold teal-hold-1"
          />
          <img 
            src="/src/assets/teal_hold_2.png" 
            alt="Teal Climbing Hold 2" 
            className="climbing-hold teal-hold-2"
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

      {/* Mission Container */}
      <div className="mission-container">
        <h3 className="mission-title">Our Mission</h3>
        <h4 className="mission-subtitle">Climbing for All, Built with Purpose</h4>
        <p className="mission-description">
          We aim to grow the climbing community by<br />
          offering fun experiences where members<br />
          can stay active, connect with others, and build<br />
          their skills.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;