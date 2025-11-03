import React from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>Let’s connect for collaborations or project discussions.</p>
      <div className="contact-icons">
        <a href="https://www.linkedin.com/in/chinenye-udo-834210152" target="_blank" rel="noreferrer">
          <FaLinkedin className="contact-ico" />
        </a>
        <a href="https://wa.me/2347060785187" target="_blank" rel="noreferrer">
          <FaWhatsapp className="contact-icon" />
        </a>
      </div>
      <a href="mailto:yourname@gmail.com" className="cta-btn">Send Email</a>
    </section>
  );
};

export default Contact;
