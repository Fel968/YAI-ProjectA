import React, { useState } from "react";
import "./styles/navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="site-logo">
          <img src="/asaase.png" alt="Logo 1" style={{ width: "250px", height: "auto", paddingTop: "30px", paddingBottom: "10px"}} />
        </div>

        <div className="menu-container">
          <ul className="menu-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
          <img src="/cart (2).png" alt="Logo 2" />
        </div>

        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Pop-up Menu (for mobile) */}
        {isMenuOpen && (
          <div className="popup-menu">
            <ul>
              <li><a href="#home" onClick={toggleMenu}>Home</a></li>
              <li><a href="#about" onClick={toggleMenu}>About</a></li>
              <li><a href="#products" onClick={toggleMenu}>Products</a></li>
              <li><a href="#services" onClick={toggleMenu}>Services</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact Us</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;