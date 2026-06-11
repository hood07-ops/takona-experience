import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function LocationCard({ title, description, video }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "180px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.article
      ref={cardRef}
      className="location-card"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.25 }}
    >
      <video autoPlay={isVisible} muted loop playsInline preload="none">
        {isVisible && <source src={video} type="video/mp4" />}
      </video>

      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.article>
  );
}

export default LocationCard;
