import React, { useEffect } from 'react';

const ContactSection = () => {
  useEffect(() => {
    // Load TidyCal embed script
    const script = document.createElement('script');
    script.src = 'https://asset-tidycal.b-cdn.net/js/embed.js';
    script.async = true;
    document.head.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.querySelector('script[src="https://asset-tidycal.b-cdn.net/js/embed.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
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
