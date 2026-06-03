import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="logo" to="/">
        TĀKONA
      </Link>

      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/identidades">Identidades</Link>
        <Link to="/reservas">Reservas</Link>
        <Link to="/galeria">Galería</Link>
        <Link to="/cultura">Cultura</Link>
      </div>
    </nav>
  );
}

export default Navbar;