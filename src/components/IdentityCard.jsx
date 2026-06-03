import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function IdentityCard({ title, description, image, imageFemale }) {
  const [showFemale, setShowFemale] = useState(false);

  useEffect(() => {
    if (!imageFemale) return;

    const interval = setInterval(() => {
      setShowFemale((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, [imageFemale]);

  return (
    <motion.article
      className="identity-card"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.25 }}
    >
      <img src={showFemale && imageFemale ? imageFemale : image} alt={title} />

      <div className="identity-content">
        <h3>{title}</h3>
        <p>{description}</p>

        {imageFemale && (
          <div className="identity-badge">
            {showFemale ? "👩 Mujer" : "👨 Hombre"}
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default IdentityCard;