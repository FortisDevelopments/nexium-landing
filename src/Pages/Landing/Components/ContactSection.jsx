import React from 'react';

const ContactSection = () => {
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
            <form>
              <div className="form-group">
                <input type="text" placeholder="Nombre" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Titulo" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Tu Mensaje" rows={5} required></textarea>
              </div>
              <button type="submit" className="btn-primary">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
