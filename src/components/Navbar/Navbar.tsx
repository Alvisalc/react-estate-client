"use client"
import { useState } from 'react';
import "./Navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="Logo" />
          <span>Estate</span>
        </a>
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeMenu}>×</button>
        <a href="/" onClick={closeMenu}>Home</a>
        <a href="/" onClick={closeMenu}>About</a>
        <a href="/" onClick={closeMenu}>Contact</a>
        <a href="/" onClick={closeMenu}>Agents</a>
        <a href="/" onClick={closeMenu}>Login</a>
      </div>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
