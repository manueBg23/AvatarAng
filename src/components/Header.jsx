function Header() {
  return (
    <header>
      <div className="logo">
        <img src="public/img/avatarLogo.webp" width="100%" />
      </div>

      <nav className="menu">
        <ul>
          <li><a href="#">Creadores</a></li>
          <li><a href="#">Personajes</a></li>
          <li><a href="#">Temporadas</a></li>
          <li><a href="#">Peleas</a></li>
          <li><a href="#">Reflexión</a></li>
        </ul>
      </nav>
      <div className="logo">
        <img src="public/img/AvatarPortada.webp" width="100%" />
      </div>
    </header>
  );
}

export default Header;