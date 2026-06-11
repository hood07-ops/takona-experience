import { Link } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";
import LanguageSwitcher from "./LanguageSwitcher";

function Navbar() {
  const { language } = useLanguage();
  const nav = {
    es: {
      home: "Inicio",
      identities: "Identidades",
      bookings: "Reservas",
      gallery: "Galería",
      culture: "Cultura",
    },
    en: {
      home: "Home",
      identities: "Identities",
      bookings: "Bookings",
      gallery: "Gallery",
      culture: "Culture",
    },
  }[language];

  return (
    <nav className="navbar">
      <Link className="logo" to="/">
        Tākona
      </Link>

      <div className="nav-links">
        <Link to="/">{nav.home}</Link>
        <Link to="/identidades">{nav.identities}</Link>
        <Link to="/reservas">{nav.bookings}</Link>
        <Link to="/galeria">{nav.gallery}</Link>
        <Link to="/cultura">{nav.culture}</Link>
      </div>

      <LanguageSwitcher />
    </nav>
  );
}

export default Navbar;
