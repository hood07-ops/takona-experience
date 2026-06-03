import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/rapanui.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay" />

      <div className="hero-glow" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="hero-kicker">
          RAPA NUI • MANA • CULTURA • HISTORIA
        </p>

        <h1></h1>

        <h2>EXPERIENCE RAPA NUI</h2>

        <p>
          Vive una experiencia cultural auténtica con ,
          vestimenta ancestral, fotografía profesional
          y paisajes sagrados de Rapa Nui.
        </p>

        <div className="hero-buttons">
          <Link className="gold-button" to="/reservas">
            Reservar Experiencia
          </Link>

          <Link className="dark-button" to="/cultura">
            Explorar Cultura
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;