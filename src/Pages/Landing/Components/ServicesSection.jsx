import React from "react";
import consultingImg from '../../../assets/images/consulting.jpg';
import currencyImg from '../../../assets/images/currency.jpg';
import exchangeImg from '../../../assets/images/exchange.jpg';

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">Nuestros Servicios</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Defensa legal y fiscal especializada.</h3>
            <p>
              Custom web applications built with modern technologies like React,
              TypeScript, and Node.js for optimal performance and scalability.
            </p>
            <div className="service-image">
              <img src={consultingImg} alt="Legal and fiscal defense consulting" />
            </div>
          </div>
          <div className="service-card">
            <h3>Servicios financieros con cripto como colateral.</h3>
            <p>
              Beautiful, intuitive designs that enhance user experience and
              drive engagement through thoughtful interface design.
            </p>
            <div className="service-image">
              <img src={currencyImg} alt="Financial services with crypto collateral" />
            </div>
          </div>
          <div className="service-card">
            <h3>Intercambio seguro de activos digitales entre particulares.</h3>
            <p>
              Cross-platform mobile applications that deliver native performance
              and seamless user experiences across all devices.
            </p>
            <div className="service-image">
              <img src={exchangeImg} alt="Secure digital asset exchange" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
