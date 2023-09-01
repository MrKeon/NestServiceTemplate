import React, { useState } from 'react';
import './Navbar.css'; // You can create this file for styling
import logoImage from '../../media/logo-illustration-carpenter-sunrise-silhouette.png';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo"><img src={logoImage} alt="Logo" className={`log`} />Firoozfar Construction</div>
      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
