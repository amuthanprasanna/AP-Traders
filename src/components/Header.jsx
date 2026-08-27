import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ToggleSwitch from "./ToggleSwitch.jsx";
import { ThemeContext } from "../context/ThemeContext.jsx";
import "./Header.css";

function Header() {
  const { theme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`header ${theme}`}>
      <div className="logo">
        <img src="/logo.png" alt="AP Traders Logo" />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

  

      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/whyus" onClick={() => setMenuOpen(false)}>Why Us</Link></li>
          <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
          <li><Link to="/signin" onClick={() => setMenuOpen(false)}>Sign In</Link></li>
        </ul>
      </nav>

      <div className="toggle">
        <ToggleSwitch />
      </div>
    </header>
  );
}

export default Header;
