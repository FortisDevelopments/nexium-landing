import "./header.css";
import Logo from "../assets/images/nexiumlogo.png"; // Adjust the path as necessary
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleQuoteClick = () => {
    navigate("/citas");
  };

  const handleHomeClick = () => {
    navigate("/landing");
  };

  const scrollToSection = (sectionClass) => {
    const section = document.querySelector(sectionClass);
    if (section) {
      const headerHeight = 80; // Approximate header height
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleAboutClick = () => {
    scrollToSection('.about-section');
  };

  const handleServicesClick = () => {
    scrollToSection('.services-section');
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <img src={Logo} alt="Nexium Logo" className="logo" />
          {/* <span className="brand-name">Nexium</span> */}
        </div>
        <nav className="navigation">
          <ul className="nav-links">
            <li>
              <a onClick={handleHomeClick} style={{ cursor: "pointer" }}>
                Inicio
              </a>
            </li>
            <li>
              <a onClick={handleAboutClick} style={{ cursor: "pointer" }}>
                Quienes Somos
              </a>
            </li>
            <li>
              <a onClick={handleServicesClick} style={{ cursor: "pointer" }}>
                Consultoría
              </a>
            </li>
            <li>
              <a onClick={handleServicesClick} style={{ cursor: "pointer" }}>
                Capital SOFOM
              </a>
            </li>
            <li>
              <a onClick={handleServicesClick} style={{ cursor: "pointer" }}>
                Exchange OTC
              </a>
            </li>
            {/* <li>
              <a>Blog Recursos</a>
            </li> */}
          </ul>
          <button className="quote-button" onClick={handleQuoteClick}>
            Agenda una Cita
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
