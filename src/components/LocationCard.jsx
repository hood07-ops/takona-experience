import { useState } from "react";
import { useLanguage } from "../context/useLanguage";

function LocationCard({ title, description, video, image }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const { language } = useLanguage();

  return (
    <article className="location-card">
      {isPlaying ? (
        <video autoPlay muted loop playsInline controls preload="metadata">
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <button
          className="location-media"
          type="button"
          onClick={() => setIsPlaying(true)}
          aria-label={`${language === "en" ? "Play video for" : "Ver video de"} ${title}`}
        >
          <img src={image} alt={title} loading="lazy" decoding="async" />
          <span>{language === "en" ? "Play video" : "Ver video"}</span>
        </button>
      )}

      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default LocationCard;
