import { useLanguage } from "../context/useLanguage";

function Cultura() {
  const { language } = useLanguage();
  const copy = {
    es: {
      title: "Cultura Rapa Nui",
      whatTitle: "¿Qué es Tākona?",
      whatText:
        "Tākona es una forma de pintura corporal ancestral ligada a símbolos, identidad, territorio y espiritualidad rapanui.",
      designTitle: "Lectura de los diseños",
      designText:
        "Las líneas pueden sugerir fuerza, protección, viaje, transformación o vínculo con el océano. Cada composición debe sentirse coherente con la identidad elegida.",
      respectTitle: "Respeto cultural",
      respectText:
        "Esta experiencia busca compartir la cultura desde el respeto, la educación consciente y una presentación cuidada para el visitante.",
      authenticTitle: "Experiencia auténtica",
      authenticText:
        "No buscamos crear disfraces turísticos, sino experiencias con sentido, historia, estética y conexión con Rapa Nui.",
    },
    en: {
      title: "Rapa Nui culture",
      whatTitle: "What is Tākona?",
      whatText:
        "Tākona is an ancestral form of body painting connected to symbols, identity, territory, and Rapa Nui spirituality.",
      designTitle: "Reading the designs",
      designText:
        "The lines can suggest strength, protection, journey, transformation, or a bond with the ocean. Each composition should feel connected to the chosen identity.",
      respectTitle: "Cultural respect",
      respectText:
        "This experience shares culture through respect, conscious education, and a carefully presented visitor experience.",
      authenticTitle: "Authentic experience",
      authenticText:
        "We do not create tourist costumes; we create meaningful experiences with history, aesthetics, and connection to Rapa Nui.",
    },
  }[language];

  return (
    <main className="page">
      <h1 className="section-title">{copy.title}</h1>

      <div className="culture-box">
        <h2>{copy.whatTitle}</h2>
        <p>{copy.whatText}</p>

        <h2>{copy.designTitle}</h2>
        <p>{copy.designText}</p>

        <h2>{copy.respectTitle}</h2>
        <p>{copy.respectText}</p>

        <h2>{copy.authenticTitle}</h2>
        <p>{copy.authenticText}</p>
      </div>
    </main>
  );
}

export default Cultura;
