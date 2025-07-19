import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import consultingImg from "../../../assets/images/consulting.jpg";
import currencyImg from "../../../assets/images/currency.jpg";
import exchangeImg from "../../../assets/images/exchange.jpg";

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
        rootMargin: '0px 0px 0px 0px' // Remove negative margins for better visibility
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      id: 1,
      title: "Defensa legal, fiscal y estructuración estratégica",
      popupTitle: "Diseñamos estrategias legales y fiscales para el nuevo sistema financiero",
      shortDescription:
        "Desde traders e inversionistas hasta empresas que desean aceptar cripto o tokenizar activos.",
      fullDescription: `Somos un despacho especializado en conectar el marco legal, fiscal y de cumplimiento tradicional con los nuevos modelos descentralizados. Brindamos soluciones integrales para quienes operan con criptomonedas o desean incorporar activos digitales en sus modelos de negocio, sin dejar de atender las necesidades clásicas de defensa y cumplimiento.`,
      image: consultingImg,
      serviceCategories: [
        {
          title: "Asesoría fiscal y cumplimiento tributario",
          items: [
            "Declaración de ingresos por criptoactivos (trading, staking, minería, etc.)",
            "Regularización patrimonial",
            "Estructuración fiscal eficiente (SAPI, fideicomisos, sociedades extranjeras)",
            "Diagnóstico fiscal para RESICO o régimen general"
          ]
        },
        {
          title: "Defensa fiscal y contenciosa administrativa",
          items: [
            "Requerimientos, multas o créditos fiscales ante el SAT",
            "Representación ante el TFJA",
            "Discrepancias fiscales o ingresos no declarados",
            "Juicios por negativa de devolución de IVA o bloqueos de cuentas"
          ]
        },
        {
          title: "Prevención de Lavado de Dinero (PLD)",
          items: [
            "Asesoría en actividades vulnerables conforme al artículo 17 LFPIORPI",
            "Avisos ante la UIF",
            "Manual PLD personalizado",
            "Beneficiario Controlador y Oficial de Cumplimiento"
          ]
        },
        {
          title: "Consultoría empresarial para integración de cripto",
          items: [
            "Políticas para aceptar pagos en BTC, ETH o USDT",
            "Modelos híbridos de facturación",
            "Contratos con cláusulas cripto",
            "Gestión de riesgos legales y fiscales"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Préstamos en pesos con cripto como garantía",
      popupTitle: "Liquidez regulada para quienes no quieren vender su cripto",
      shortDescription:
        "Ofrecemos créditos en pesos mexicanos con colateral en BTC, ETH o USDT a través de Contratos emitidos por Sociedad Financiera.",
      fullDescription: `A través de nuestra Sociedad Financiera de Objeto Múltiple*, ofrecemos soluciones de financiamiento con colateral en criptomonedas, permitiendo a personas y empresas acceder a liquidez sin deshacerse de sus activos. Operamos bajo lineamientos legales y fiscales para ofrecer una alternativa sólida al modelo DeFi.`,
      image: currencyImg,
      serviceCategories: [
        {
          title: "Préstamos con garantía en cripto",
          items: [
            "Crédito en pesos respaldado en BTC, ETH, USDT o USDC",
            "Contratos formales con cláusulas claras",
            "CFDI deducible",
            "Proceso con KYC y custodia de colateral"
          ]
        },
        {
          title: "Líneas exprés para traders",
          items: [
            "Créditos de corto plazo (7, 15, 30 días)",
            "100% colateralizados",
            "Tasas competitivas",
            "Resolución rápida"
          ]
        },
        {
          title: "Arrendamiento financiero",
          items: [
            "Equipos, mobiliario o vehículos",
            "Pagos en pesos o cripto",
            "CFDI deducible",
            "Opción de compra al final"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Compra y venta de cripto entre personas",
      popupTitle: "Intermediación cripto con trazabilidad, respaldo legal y control fiscal",
      shortDescription:
        "Facilitamos operaciones P2P seguras, con validación de identidad, custodia temporal y cumplimiento de obligaciones.",
      fullDescription: `No somos una plataforma anónima. Somos una solución segura para empresas e inversionistas que desean adquirir o vender cripto en bloques importantes, con trazabilidad, condiciones claras y respaldo legal.`,
      image: exchangeImg,
      serviceCategories: [
        {
          title: "Compra y venta de cripto en bloques (OTC)",
          items: [
            "Operaciones de alto monto",
            "Acuerdo con tipo de cambio fijo y transparente",
            "Comisión con CFDI",
            "Contrato marco y trazabilidad"
          ]
        },
        {
          title: "Intermediación con beneficios fiscales",
          items: [
            "CFDI por la comisión",
            "Relación directa entre servicio y operación",
            "Evidencia para acreditación ante SAT",
            "Identificación y verificación del cliente"
          ]
        },
        {
          title: "Acompañamiento personalizado",
          items: [
            "No necesitas operar en exchanges",
            "Ejecutamos la compra/venta por ti",
            "Soporte para empresas o inversionistas sofisticados"
          ]
        }
      ]
    },
  ];

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const handleScheduleAppointment = () => {
    navigate('/citas');
  };
  return (
    <section 
      ref={sectionRef}
      className={`services-section ${isVisible ? 'services-visible' : 'services-hidden'}`}
    >
      <div className="container">
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`service-card ${isVisible ? 'card-visible' : 'card-hidden'}`}
              style={{ 
                animationDelay: isVisible ? `${index * 0.2}s` : '0s'
              }}
            >
              <h3>{service.title}</h3>
              <p>{service.shortDescription}</p>
              <p>
                {service.id === 2 &&
                  "Una alternativa formal, segura y funcional frente a protocolos DeFi o plataformas opacas."}
                {service.id === 3 &&
                  "Ideal para quienes desean comenzar en cripto o evitar estafas."}
              </p>
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-buttons">
                <button
                  className="service-button service-button-secondary"
                  onClick={() => openModal(service)}
                >
                  Ver más detalles
                </button>
                <button
                  className="service-button"
                  onClick={handleScheduleAppointment}
                >
                  Agendar Cita
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedService && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <div className="modal-header">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="modal-image"
              />
              <h2>{selectedService.popupTitle}</h2>
            </div>
            <div className="modal-body">
              <div className="modal-description">
                {selectedService.fullDescription
                  .split("\n")
                  .map((paragraph, index) => (
                    <p key={index}>{paragraph.trim()}</p>
                  ))}
              </div>
              
              {/* Service Categories for first service */}
              {selectedService.serviceCategories && (
                <div className="service-categories">
                  {selectedService.serviceCategories.map((category, index) => (
                    <div key={index} className="service-category-box">
                      <h4>{category.title}</h4>
                      <ul>
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Benefits for other services */}
              {selectedService.benefits && (
                <div className="modal-benefits">
                  <h4>Beneficios principales:</h4>
                  <ul>
                    {selectedService.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button 
                className="modal-contact-btn"
                onClick={handleScheduleAppointment}
              >
                Agenda una Cita
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
