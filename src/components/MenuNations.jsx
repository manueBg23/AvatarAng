import { Link } from "react-router-dom";

function MenuNations() {
  return (

      <nav className="menu-nation">
        <ul>
          <li><Link to="/AirNation"><img src="/img/Agua.png" /></Link></li>
          <li><Link to="/EarthNation"><img src="/img/Tierra.png" /></Link></li>
          <li><Link to="/FireNation"><img src="/img/Fuego.png" /></Link></li>
          <li><Link to="/WindNation"><img src="/img/Aire.png" /></Link></li>
        </ul>
      </nav>
  );
}

export default MenuNations;