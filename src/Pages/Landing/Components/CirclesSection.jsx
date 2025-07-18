import React from "react";
import consultingImg from '../../../assets/images/consulting.jpg';
import currencyImg from '../../../assets/images/currency.jpg';
import exchangeImg from '../../../assets/images/exchange.jpg';

const CirclesSection = () => {
  const scrollToServices = () => {
    const servicesSection = document.querySelector('.services-section');
    if (servicesSection) {
      const headerHeight = 80; // Approximate header height
      const elementPosition = servicesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const services = [
    {
      title: "Defensa Legal",
      subtitle: "y Fiscal",
      description: "Desde cripto hasta corporativos: diseñamos estructuras legales claras",
      image: consultingImg
    },
    {
      title: "Servicios",
      subtitle: "Financieros",
      description: "Liquidez sin renunciar a tus criptoactivos",
      image: currencyImg
    },
    {
      title: "Intercambio",
      subtitle: "de Activos",
      description: "Evita fraudes, opera seguro, cumple la ley",
      image: exchangeImg
    }
  ];

  return (
    <section className="circles-section">
      <div className="circles-container">
        {services.map((service, index) => (
          <div 
            key={index}
            className={`circle-wrapper circle-${index + 1}`}
          >
            <div className="circle-tooltip">{service.description}</div>
            <div 
              className="service-circle"
              onClick={scrollToServices}
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="circle-overlay"></div>
              <div className="circle-content">
                <h3 className="circle-title">{service.title}</h3>
                <p className="circle-subtitle">{service.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CirclesSection;
