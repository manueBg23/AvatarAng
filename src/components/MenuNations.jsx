import { Link } from "react-router-dom";

function MenuNations() {
  return (
    <div className="menu-nation">
      <div className="contenedor_uno">
        <Link to="/AirNation">
          <img id="iNat" src="/img/Agua.png"  />
        </Link>
        <Link to="/EarthNation">
          <img id="iNat" src="/img/Tierra.png" />
        </Link>
      </div>

      <div className="contenedor_dos">
        <Link to="/FireNation">
          <img id="iNat" src="/img/Fuego.png" />
        </Link>
        <Link to="/WindNation">
          <img id="iNat" src="/img/Aire.png"  />
        </Link>
      </div>
    </div>
  );
}

export default MenuNations;