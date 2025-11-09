import React from "react";

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>My Services</h2>
      <div className="services-container">
        <div className="service-box">
          <h3>Web Development</h3>
          <p>I build responsive and high-performing websites using React and modern JavaScript frameworks.</p>
        </div>

        <div className="service-box">
          <h3>Chatbot Applications</h3>
          <p>I develop AI-powered chatbot apps that enhance customer support and automate conversations.</p>
        </div>

        <div className="service-box">
          <h3>Login and Authentication Forms</h3>
          <p>I design secure login systems and authentication forms with smooth user experiences.</p>
        </div>

        <div className="service-box">
          <h3>API Integration</h3>
          <p>I integrate third-party APIs and backend services seamlessly to enhance app functionality.</p>
        </div>

        <div className="service-box">
          <h3>Landing Pages</h3>
          <p>Clean and conversion-focused landing pages that help you attract and engage users.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;

