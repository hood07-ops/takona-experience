import { motion } from "framer-motion";

function PackageCard({ name, price, detail }) {
  return (
    <motion.article
      className="package-card"
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.25 }}
    >
      <h3>{name}</h3>
      <h2>{price}</h2>
      <p>{detail}</p>

      <a
        className="gold-button"
        href={`https://wa.me/56900000000?text=${encodeURIComponent(
          `Hola, quiero reservar: ${name}`
        )}`}
        target="_blank"
        rel="noreferrer"
      >
        Reservar
      </a>
    </motion.article>
  );
}

export default PackageCard;