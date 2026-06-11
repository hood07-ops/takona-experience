import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/useLanguage";

function IdentityCard({ title, description, image, imageFemale }) {
  const [showFemale, setShowFemale] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    if (!imageFemale) return;

    const interval = setInterval(() => {
      setShowFemale((prev) => !prev);
    }, 1500);

    return () => clearInterval(interval);
  }, [imageFemale]);

  const currentImage = showFemale && imageFemale ? imageFemale : image;

  return (
    <motion.article
      className="identity-card"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.25 }}
    >
      <img src={currentImage} alt={title} loading="lazy" decoding="async" />

      <div className="identity-content">
        <h3>{title}</h3>
        <p>{description}</p>

        {imageFemale && (
          <div className="identity-badge">
            {showFemale
              ? language === "en"
                ? "Woman"
                : "Mujer"
              : language === "en"
                ? "Man"
                : "Hombre"}
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default IdentityCard;
