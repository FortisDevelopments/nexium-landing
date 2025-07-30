import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ContactSection = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const loadTidyCal = () => {
      // Check if TidyCal script is already loaded
      const existingScript = document.querySelector(
        'script[src="https://asset-tidycal.b-cdn.net/js/embed.js"]'
      );

      const initializeTidyCal = () => {
        // Find the TidyCal embed element
        const tidycalElement = document.querySelector(
          '.tidycal-embed[data-path="megatron111994/15-minute-meeting"]'
        );
        if (tidycalElement && window.TidyCal) {
          // Initialize TidyCal with the specific element
          window.TidyCal.init(tidycalElement);
        }
      };

      if (!existingScript) {
        // Load the script if it doesn't exist
        const script = document.createElement("script");
        script.src = "https://asset-tidycal.b-cdn.net/js/embed.js";
        script.async = true;
        script.onload = () => {
          // Small delay to ensure DOM is ready
          setTimeout(initializeTidyCal, 50);
        };
        document.head.appendChild(script);
      } else {
        // Script already exists, just reinitialize TidyCal
        setTimeout(initializeTidyCal, 50);
      }
    };

    // Small delay to ensure component is fully mounted
    setTimeout(loadTidyCal, 10);
  }, []);
  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="section-title">¿Quieres asesoría personalizada?</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Agenda una cita con un experto Nexium hoy mismo</h3>
            <button 
              className="contact-cta-button"
              onClick={() => navigate('/citas')}
            >
              Agenda una Cita
            </button>
          </div>
          <div className="contact-form">
            <div
              className="tidycal-embed"
              data-path="grupo-nexium/asesoria"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
