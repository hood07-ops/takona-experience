import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/useLanguage";

function Hero() {
  const [videoReady, setVideoReady] = useState(false);
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

  useEffect(() => {
    const saveData = navigator.connection?.saveData;
    if (saveData) return undefined;

    const loadVideo = () => setVideoReady(true);
    const idleId =
      "requestIdleCallback" in window
        ? window.requestIdleCallback(loadVideo, { timeout: 1800 })
        : window.setTimeout(loadVideo, 900);

    return () => {
      if ("cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      } else {
        window.clearTimeout(idleId);
      }
    };
  }, []);

  return (
    <section className="hero">
      {videoReady && (
        <video className="hero-video" autoPlay muted loop playsInline preload="none">
          <source src="/videos/rapanui.mp4" type="video/mp4" />
        </video>
      )}

      <div className="hero-overlay" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
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
      </motion.div>
    </section>
  );
}

export default Hero;
