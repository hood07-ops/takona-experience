import { useCallback, useEffect, useState } from "react";
import { useLanguage } from "../context/useLanguage";

const photos = Array.from({ length: 20 }, (_, index) => {
  const id = String(index + 1).padStart(2, "0");
  return {
    src: `/gallery/takona-gallery-${id}.webp`,
    thumb: `/gallery/takona-gallery-${id}-thumb.webp`,
  };
});

function Galeria() {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(null);
  const copy =
    language === "en"
      ? {
          title: "Gallery",
          text: "Real moments from Takona: preparation, ceremony, dance, body painting, and Rapa Nui stage work.",
          alt: "Takona body painting and Rapa Nui performance moment",
          close: "Close",
          next: "Next",
          previous: "Previous",
          counter: "20 selected photos",
        }
      : {
          title: "Galería",
          text: "Momentos reales de Tākona: preparación, ceremonia, danza, pintura corporal y escena Rapa Nui.",
          alt: "Momento de pintura corporal Tākona y presentación Rapa Nui",
          close: "Cerrar",
          next: "Siguiente",
          previous: "Anterior",
          counter: "20 fotos seleccionadas",
        };

  const activePhoto = activeIndex === null ? null : photos[activeIndex];
  const showPrevious = useCallback(
    () => setActiveIndex((current) => (current === null || current === 0 ? photos.length - 1 : current - 1)),
    [],
  );
  const showNext = useCallback(
    () => setActiveIndex((current) => (current === null || current === photos.length - 1 ? 0 : current + 1)),
    [],
  );

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, showNext, showPrevious]);

  return (
    <main className="page">
      <h1 className="section-title">{copy.title}</h1>

      <p className="section-text">{copy.text}</p>
      <p className="gallery-count">{copy.counter}</p>

      <div className="gallery-grid" aria-label={copy.title}>
        {photos.map((photo, index) => (
          <button
            className="gallery-item"
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`${copy.alt} ${index + 1}`}
            key={photo.src}
          >
            <img
              src={photo.thumb}
              alt={`${copy.alt} ${index + 1}`}
              loading={index < 6 ? "eager" : "lazy"}
              fetchPriority={index < 6 ? "high" : "auto"}
              decoding="async"
            />
          </button>
        ))}
      </div>

      {activePhoto && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={copy.title}>
          <button className="lightbox-backdrop" type="button" onClick={() => setActiveIndex(null)} aria-label={copy.close} />
          <div className="lightbox-panel">
            <button className="lightbox-close" type="button" onClick={() => setActiveIndex(null)}>
              {copy.close}
            </button>
            <img src={activePhoto.src} alt={`${copy.alt} ${activeIndex + 1}`} decoding="async" />
            <div className="lightbox-controls">
              <button type="button" onClick={showPrevious}>
                {copy.previous}
              </button>
              <span>
                {activeIndex + 1} / {photos.length}
              </span>
              <button type="button" onClick={showNext}>
                {copy.next}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Galeria;
