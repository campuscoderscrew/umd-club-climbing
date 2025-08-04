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

  const tabs = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Location/Times', href: '#times' },
    { name: 'Join Us', href: '#join' },
  ];

  return (
    <div className="navbar-wrapper">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <nav className={`navbar-nav ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-tabs">
          {tabs.map((tab, idx) => (
            <a key={idx} href={tab.href} className="nav-tab">
              {tab.name}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
