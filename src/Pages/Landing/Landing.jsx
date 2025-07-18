import React from "react";
import "./Landing.css";
import Header from "../../Components/Header";
import HeroSection from "./Components/HeroSection";
import CirclesSection from "./Components/CirclesSection";
import AboutSection from "./Components/AboutSection";
import ServicesSection from "./Components/ServicesSection";
import ContactSection from "./Components/ContactSection";

const Landing = () => {
  return (
    <div className="landing-page">
      <Header />
      <HeroSection />
      <CirclesSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Landing;
