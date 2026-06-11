import { Link } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";

function Hero() {
  const { language } = useLanguage();
  const copy = {
    es: {
      kicker: "RAPA NUI • MANA • CULTURA • HISTORIA",
      subtitle: "EXPERIENCE RAPA NUI",
      text: "Vive una experiencia cultural auténtica con Tākona, vestimenta ancestral, fotografía profesional y paisajes sagrados de Rapa Nui.",
      reserve: "Reservar experiencia",
      culture: "Explorar cultura",
    },
    en: {
      kicker: "RAPA NUI • MANA • CULTURE • HISTORY",
      subtitle: "RAPA NUI EXPERIENCE",
      text: "Live an authentic cultural experience with Tākona body painting, ancestral dress, professional photography and sacred Rapa Nui landscapes.",
      reserve: "Book experience",
      culture: "Explore culture",
    },
  }[language];

  return (
    <section className="hero">
      <video className="hero-video" autoPlay muted loop playsInline preload="auto">
        <source src="/videos/rapanui.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-kicker">{copy.kicker}</p>

        <h1>Tākona</h1>

        <h2>{copy.subtitle}</h2>

        <p>{copy.text}</p>

        <div className="hero-buttons">
          <Link className="gold-button" to="/reservas">
            {copy.reserve}
          </Link>

          <Link className="dark-button" to="/cultura">
            {copy.culture}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
