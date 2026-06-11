import { useLanguage } from "../context/useLanguage";

function Cultura() {
  const { language } = useLanguage();
  const copy = {
    es: {
      title: "Cultura Rapa Nui",
      whatTitle: "¿Qué es Tākona?",
      whatText:
        "Tākona es una forma de pintura corporal ancestral ligada a símbolos, identidad, territorio y espiritualidad rapanui.",
      respectTitle: "Respeto cultural",
      respectText:
        "Esta experiencia busca compartir la cultura desde el respeto y la educación cultural consciente.",
      authenticTitle: "Experiencia auténtica",
      authenticText:
        "No buscamos crear disfraces turísticos, sino experiencias con sentido, historia y conexión con Rapa Nui.",
    },
    en: {
      title: "Rapa Nui culture",
      whatTitle: "What is Tākona?",
      whatText:
        "Tākona is an ancestral form of body painting connected to symbols, identity, territory and Rapa Nui spirituality.",
      respectTitle: "Cultural respect",
      respectText:
        "This experience shares culture through respect and conscious cultural education.",
      authenticTitle: "Authentic experience",
      authenticText:
        "We do not create tourist costumes; we create meaningful experiences with history and connection to Rapa Nui.",
    },
  }[language];

  return (
    <main className="page">
      <h1 className="section-title">{copy.title}</h1>

      <div className="culture-box">
        <h2>{copy.whatTitle}</h2>

        <p>{copy.whatText}</p>

        <h2>{copy.respectTitle}</h2>

        <p>{copy.respectText}</p>

        <h2>{copy.authenticTitle}</h2>

        <p>{copy.authenticText}</p>
      </div>
    </main>
  );
}

export default Cultura;
