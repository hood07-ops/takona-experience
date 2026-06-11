import { useLanguage } from "../context/useLanguage";

function PackageCard({ name, price, detail }) {
  const { language } = useLanguage();
  const text =
    language === "en"
      ? {
          reserve: "Book",
          message: `Hello, I want to book: ${name}`,
        }
      : {
          reserve: "Reservar",
          message: `Hola, quiero reservar: ${name}`,
        };

  return (
    <article className="package-card">
      <h3>{name}</h3>
      {price && <h2>{price}</h2>}
      <p>{detail}</p>

      <a
        className="gold-button"
        href={`https://wa.me/56973199456?text=${encodeURIComponent(
          text.message
        )}`}
        target="_blank"
        rel="noreferrer"
      >
        {text.reserve}
      </a>
    </article>
  );
}

export default PackageCard;
