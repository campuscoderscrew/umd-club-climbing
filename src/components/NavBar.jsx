import React, { useEffect, useState } from 'react';
import './NavBar.css';
import logo from '../assets/logo.png';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initialize on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tabs = ['Home', 'About', 'Location/Times', 'Gallery', 'Join Us'];

  return (
    <div className="navbar-wrapper">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <nav className={`navbar-nav ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-tabs">
          {tabs.map((tab, idx) => (
            <div key={idx} className="nav-tab">
              {tab}
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
