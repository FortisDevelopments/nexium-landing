import React from "react";
import logo from "../../../assets/images/logo.png"; // Adjust the path as necessary

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Grupo NEXIUM</h1>
          <p className="hero-subtitle">
            Transforming ideas into digital excellence with cutting-edge
            solutions
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Agenda una cita</button>
            <button className="btn-secondary">Sobre Nosotros</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-placeholder">
            <img src={logo} alt="Nexium Logo" className="hero-logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
