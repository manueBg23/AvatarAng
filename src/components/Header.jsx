import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="/img/avatarLogo.webp" width="100%" />
      </div>

      <nav className="menu">
        <ul>
          <li><Link to="/home">Inicio</Link></li>
          <li><Link to="/creators">Creadores</Link></li>
          <li><Link to="/characters">Personajes</Link></li>
          <li><Link to="/seasons">Temporadas</Link></li>
          <li><Link to="/fights">Peleas</Link></li>
          <li><Link to="/reflection">Reflexión</Link></li>
        </ul>
      </nav>

      <div className="logo">
        <img src="/img/Menu.jpg" width="100%" />
      </div>
    </header>
  );
}

export default Header;