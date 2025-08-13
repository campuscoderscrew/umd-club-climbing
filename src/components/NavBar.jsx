import React, { useEffect, useState } from 'react';
import './NavBar.css';
import logo from '../assets/logo.png';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* Effect to add scroll */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* List of navigation tabs with labels and links */
  const tabs = [
    { label: 'Home', link: '#home' },
    { label: 'About', link: '#about' },
    { label: 'Services', link: '#services' },
    { label: 'Location/Times', link: '#location' },
    { label: 'Join Us', link: '#join' }
  ];

  return (
    /* Main navbar container with conditional class when scrolled */
    <header className={`navbar-wrapper ${scrolled ? 'navbar-scrolled' : ''}`}>
      {/* Left: Logo */}
      <div className="navbar-logo-wrapper">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>

      {/* Center: Nav Links */}
      <nav className={`navbar-nav ${menuOpen ? 'open' : ''}`}>
        <div className="navbar-tabs">
          {tabs.map((tab, idx) => (
            <a
              key={idx}
              href={tab.link}
              className="nav-tab"
              onClick={() => setMenuOpen(false)} // close menu on click
            >
              {tab.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Right: Hamburger */}
      <div
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default NavBar;