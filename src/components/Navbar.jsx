import { useLanguage } from "../context/useLanguage";
import AppLink from "./AppLink";
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
      <AppLink className="logo" to="/">
        Tākona
      </AppLink>

      <div className="nav-links">
        <AppLink to="/">{nav.home}</AppLink>
        <AppLink to="/identidades">{nav.identities}</AppLink>
        <AppLink to="/reservas">{nav.bookings}</AppLink>
        <AppLink to="/galeria">{nav.gallery}</AppLink>
        <AppLink to="/cultura">{nav.culture}</AppLink>
      </div>

      <LanguageSwitcher />
    </nav>
  );
}

export default Navbar;
