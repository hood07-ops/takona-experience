import { useEffect, useRef, useState } from "react";

function LocationCard({ title, description, video }) {
  const cardRef = useRef(null);
  const [canLoadVideo, setCanLoadVideo] = useState(false);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCanLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "420px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <article className="location-card" ref={cardRef}>
      <video autoPlay muted loop playsInline preload="metadata">
        {canLoadVideo && <source src={video} type="video/mp4" />}
      </video>

      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default LocationCard;
