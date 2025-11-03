import React, { useState } from "react";
import Modal from "react-modal";
import food from "../assets/food.jpg";
import pool from "../assets/pool.jpg";
import gemini from "../assets/gemini.jpg";
import kelly from "../assets/kelly.jpg";
import tobams from "../assets/tobams.jpg";
import beauty from "../assets/beauty.jpg";

Modal.setAppElement("#root"); // Accessibility for screen readers

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openModal = (img) => {
    setCurrentImage(img);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const projects = [
    { img: food, title: "Food Product Card", desc: "Dynamic food card component showcasing products and prices." },
    { img: pool, title: "Pool Website", desc: "Responsive website for a luxury pool service company." },
    { img: gemini, title: "Gemini API App", desc: "Chatbot app built using Gemini API for intelligent responses." },
    { img: kelly, title: "Kelly Website", desc: "Modern portfolio website for a designer with smooth animations." },
    { img: beauty, title: "Beauty & Wellness Landing Page", desc: "Responsive landing page designed for a beauty and wellness brand." },
    { img: tobams, title: "Tobams Training Website", desc: "Professional training website highlighting programs and consultation." },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index} onClick={() => openModal(project.img)}>
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>

      {/* Modal for Full-Page Zoom */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Project Image"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "90%",
            maxHeight: "90%",
            padding: "0",
            border: "none",
            borderRadius: "10px",
            overflow: "hidden",
            background: "transparent",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            zIndex: 10000,
          },
        }}
      >
        <img
          src={currentImage}
          alt="Project Zoom"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Modal>
    </section>
  );
};

export default Projects;






