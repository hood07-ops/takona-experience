import { useLanguage } from "../context/useLanguage";

function Cultura() {
  const { language } = useLanguage();
  const copy = {
    es: {
      title: "Cultura Rapa Nui",
      whatTitle: "\u00bfQu\u00e9 es T\u0101kona?",
      whatText:
        "T\u0101kona es una forma de pintura corporal ancestral ligada a s\u00edmbolos, identidad, territorio y espiritualidad rapanui.",
      designTitle: "Lectura de los dise\u00f1os",
      designText:
        "Las l\u00edneas pueden sugerir fuerza, protecci\u00f3n, viaje, transformaci\u00f3n o v\u00ednculo con el oc\u00e9ano. Cada composici\u00f3n debe sentirse coherente con la identidad elegida.",
      respectTitle: "Respeto cultural",
      respectText:
        "Esta experiencia busca compartir la cultura desde el respeto, la educaci\u00f3n consciente y una presentaci\u00f3n cuidada para el visitante.",
      authenticTitle: "Experiencia aut\u00e9ntica",
      authenticText:
        "No buscamos crear disfraces tur\u00edsticos, sino experiencias con sentido, historia, est\u00e9tica y conexi\u00f3n con Rapa Nui.",
    },
    en: {
      title: "Rapa Nui culture",
      whatTitle: "What is T\u0101kona?",
      whatText:
        "T\u0101kona is an ancestral form of body painting connected to symbols, identity, territory, and Rapa Nui spirituality.",
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
