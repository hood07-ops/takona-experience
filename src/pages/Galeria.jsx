import { useLanguage } from "../context/useLanguage";

function Galeria() {
  const { language } = useLanguage();
  const copy =
    language === "en"
      ? {
          title: "Gallery",
          text: "The gallery is being updated.",
        }
      : {
          title: "Galeria",
          text: "La galeria esta en actualizacion.",
        };

  return (
    <main className="page">
      <h1 className="section-title">{copy.title}</h1>

      <p className="section-text">{copy.text}</p>
    </main>
  );
}

export default Galeria;
