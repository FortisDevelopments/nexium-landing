import React from "react";
import nexiumLogoNoText from "../../../assets/images/nexiumlogonotext.png";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        {/* <h2 className="section-title">Sobre Nosotros</h2> */}
        <div className="about-box">
          <h2 className="section-title">¿Quiénes somos?</h2>
          <div className="about-content">
            <div className="about-left-column">
              <div className="about-text">
                <p>
                  Grupo NEXIUM nace como una firma pionera que integra el mundo
                  legal, fiscal y financiero con las nuevas tecnologías
                  descentralizadas.
                </p>
                <p>
                  Atendemos tanto a personas que operan con criptomonedas como a
                  empresas que buscan integrar criptoactivos en sus operaciones
                  tradicionales: tokenización, pagos con cripto, estructuras
                  legales híbridas o defensa fiscal estratégica.
                </p>
                <p>
                  Somos el puente entre el sistema tradicional y el
                  descentralizado. Diseñamos soluciones legales, fiscales y
                  tecnológicas para quienes <b>usan, invierten o construyen con
                    criptomonedas.</b>
                </p>
              </div>
              <div className="about-logo">
                <img 
                  src={nexiumLogoNoText} 
                  alt="Nexium Logo" 
                  className="nexium-logo-about"
                />
              </div>
            </div>
            <div className="about-stats">
              {/* <h2 className="stats-title">Nuestras Metas</h2> */}
              <div className="stat">
                <h3>Ofrecer</h3>
                <p>
                  Alternativas legales y financieras para operar con
                  criptomonedas de forma segura, regulada y funcional.
                </p>
              </div>
              <div className="stat">
                <h3>Facilitar</h3>
                <p>
                  La transición entre el sistema tradicional y el
                  descentralizado mediante estructuras legales, fiscales y
                  tecnológicas viables.
                </p>
              </div>
              <div className="stat">
                <h3>Formar</h3>
                <p>
                  Una comunidad informada y protegida que entienda los riesgos
                  legales, fiscales y de lavado de dinero al usar criptoactivos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
