import React, { useEffect, useState } from 'react';
import './NavBar.css';
import logo from '../assets/logo.png';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
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
    { label: 'Gallery', link: '#gallery' },
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
  );
};

export default NavBar;
