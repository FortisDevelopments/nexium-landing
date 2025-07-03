import React, { useEffect } from 'react';

const ContactSection = () => {
  useEffect(() => {
    const loadTidyCal = () => {
      // Check if TidyCal script is already loaded
      const existingScript = document.querySelector('script[src="https://asset-tidycal.b-cdn.net/js/embed.js"]');
      
      const initializeTidyCal = () => {
        // Find the TidyCal embed element
        const tidycalElement = document.querySelector('.tidycal-embed[data-path="megatron111994/15-minute-meeting"]');
        if (tidycalElement && window.TidyCal) {
          // Initialize TidyCal with the specific element
          window.TidyCal.init(tidycalElement);
        }
      };
      
      if (!existingScript) {
        // Load the script if it doesn't exist
        const script = document.createElement('script');
        script.src = 'https://asset-tidycal.b-cdn.net/js/embed.js';
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
        <h2 className="section-title">Agenda una cita</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Start a Conversation</h3>
            <p>
              Ready to bring your ideas to life? We'd love to hear about your 
              project and discuss how we can help you achieve your goals.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>contacto@gruponexium.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>123 Innovation Street, Tech City, TC 12345</span>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <div className="tidycal-embed" data-path="megatron111994/15-minute-meeting"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
