import { motion } from "framer-motion";

function LocationCard({ title, description, video }) {
  return (
    <motion.article
      className="location-card"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.25 }}
    >
      <video autoPlay muted loop playsInline>
        <source src={video} type="video/mp4" />
      </video>

      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.article>
  );
}

export default LocationCard;