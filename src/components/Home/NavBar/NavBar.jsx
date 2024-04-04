import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';

const NavBar = ({ toggleDarkMode, darkMode }) => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(prevIsNavVisible => !prevIsNavVisible);
  };

  // Smooth scroll handler
  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="navbar">
      <span className="navbar__brand">Design With <span className="navbar__name">Mohamed</span></span>
      <button type="button" aria-label="toggle theme" className="btn btn--icon navbar__theme-toggle" onClick={toggleDarkMode}>
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} id="btn-theme" />
      </button>
      <button type="button" onClick={toggleNav} className="navbar__toggle">
        ☰
      </button>
      <div className={`navbar__menu ${isNavVisible ? 'navbar__menu--visible' : ''}`}>
        <a href="#projects" className="navbar__link" onClick={() => smoothScroll('projects')}>Projects</a>
        <a href="#about-me" className="navbar__link" onClick={() => smoothScroll('about')}>About Me</a>
        <a href="#skills" className="navbar__link" onClick={() => smoothScroll('skills')}>Skills</a>
        <a href="#contact-me" className="navbar__link" onClick={() => smoothScroll('contact')}>Contact Me</a>
      </div>
    </nav>
  );
};

export default NavBar;
