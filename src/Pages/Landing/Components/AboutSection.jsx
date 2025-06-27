import React from "react";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        {/* <h2 className="section-title">Sobre Nosotros</h2> */}
        <div className="about-box">
          <h2 className="section-title">Sobre Nosotros</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Grupo NEXIUM nace como una respuesta innovadora ante el vacío
                legal, fiscal y financiero que enfrentan los usuarios de
                criptomonedas e inversiones alternativas en México. No existía
                hasta ahora una firma que integrara en un mismo ecosistema:
              </p>
              <p>
                NEXIUM representa luz, conocimiento y especialización,
                proyectando equilibrio entre cumplimiento normativo,
                accesibilidad para el usuario y soluciones prácticas de alto
                nivel profesional.
              </p>
            </div>
            <div className="about-stats">
              <h2 className="stats-title">Nuestras Metas</h2>
              <div className="stat">
                <h3>Ofrecer</h3>
                <p>
                  alternativas financieras innovadoras, accesibles, pero
                  reguladas.
                </p>
              </div>
              <div className="stat">
                <h3>Facilitar</h3>
                <p>
                  el uso responsable de criptoactivos a través de herramientas
                  legales y tecnológicas.
                </p>
              </div>
              <div className="stat">
                <h3>Formar</h3>
                <p>
                   una comunidad educada y protegida ante riesgos legales
                  o fiscales.
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
