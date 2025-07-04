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

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <img src={Logo} alt="Nexium Logo" className="logo" />
          {/* <span className="brand-name">Nexium</span> */}
        </div>
        <nav className="navigation">
          <ul className="nav-links">
            <li style={{ fontFamily: 'Organetto' }}>
              <a onClick={handleHomeClick} style={{ cursor: 'pointer' }}>Home</a>
            </li>
            <li style={{ fontFamily: 'Organetto Condensed' }}>
              <a>Servicios</a>
            </li>
            <li style={{ fontFamily: 'Organetto Expanded' }}>
              <a>Sobre Nosotros</a>
            </li>
            {/* <li>
              <a>Contactanos</a>
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
