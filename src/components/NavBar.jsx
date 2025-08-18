import React, { useEffect, useState } from 'react';
import './NavBar.css';
import logo from '../assets/logo.png';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
<<<<<<< HEAD

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
=======
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tabs = [
    { label: 'Home', link: '#home' },
    { label: 'About', link: '#about' },
    { label: 'Services', link: '#services' },
    { label: 'Location/Times', link: '#location' },
    { label: 'Join Us', link: '#join' }
  ];

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <a href="#home" className="navbar-logo-link">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </a>

        {/* Navigation */}
        <nav className={`navbar-nav ${menuOpen ? 'open' : ''}`}>
          {tabs.map((tab, idx) => (
            <a
              key={idx}
              href={tab.link}
              className="nav-tab"
              onClick={() => setMenuOpen(false)}
            >
              {tab.label}
            </a>
          ))}
        </nav>

        {/* Hamburger for mobile */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
>>>>>>> 2c04efc616792c2fbcfa16cc17588597efae2b67
  );
};

export default NavBar;
