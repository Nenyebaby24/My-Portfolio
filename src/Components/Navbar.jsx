import React from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">Chinenye Udo</div>

      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="nav-icons">
        <a
          href="https://www.linkedin.com/in/chinenye-udo-834210152"
          target="_blank"
          rel="noopener noreferrer"
          className="icon linkedin"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://wa.me/2347060785187"
          target="_blank"
          rel="noopener noreferrer"
          className="icon whatsapp"
        >
          <FaWhatsapp />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

