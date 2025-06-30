import "./header.css";
import Logo from "../assets/images/nexiumlogo.png"; // Adjust the path as necessary

const Header = () => {
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
              <a>Home</a>
            </li>
            <li>
              <a>Servicios</a>
            </li>
            <li>
              <a>Sobre Nosotros</a>
            </li>

            {/* <li>
              <a>Contactanos</a>
            </li> */}
          </ul>
          <button className="quote-button">Agenda una Cita</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
