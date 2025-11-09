import React from "react";
import mypicture from "../assets/mypicture.png";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1>Hello, I'm <span>Chinenye Udo</span></h1>
        <p>
          Front-End Developer with a passion for building beautiful, responsive, and
          user-friendly web applications. I specialize in crafting engaging websites
          using modern JavaScript frameworks and clean design principles.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn">View Projects</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>
      </div>

      <div className="hero-images">
        <img src={mypicture} alt="Chinenye Udo" className="profile-image" />
      </div>
    </section>
  );
};

export default Hero;



