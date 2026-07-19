import { useEffect, useState } from "react";
import { useLanguage } from "../context/useLanguage";

function IdentityCard({ title, description, meaning, traits, image, imageFemale }) {
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
    <article className="identity-card">
      <img src={currentImage} alt={title} loading="lazy" decoding="async" />

      <div className="identity-content">
        <h3>{title}</h3>
        <p>{description}</p>

        {meaning && <p className="identity-meaning">{meaning}</p>}

        {traits && (
          <div className="identity-traits">
            {traits.map((trait) => (
              <span key={trait}>{trait}</span>
            ))}
          </div>
        )}

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
    </article>
  );
}

export default IdentityCard;
