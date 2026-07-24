import IdentityCard from "../components/IdentityCard";

import matatoaHombre from "../assets/takonas/matatoa-hombre.webp";
import matatoaMujer from "../assets/takonas/matatoa-mujer.webp";
import tangataHombre from "../assets/takonas/tangata-manu-hombre.webp";
import naveganteHombre from "../assets/takonas/navegante-hombre.webp";
import naveganteMujer from "../assets/takonas/navegante-mujer.webp";
import { useLanguage } from "../context/useLanguage";

function Identidades() {
  const { language } = useLanguage();
  const copy = {
    es: {
      title: "Identidades T\u0101kona",
      text: "Cada identidad propone una energ\u00eda distinta para la pintura corporal, la postura, la vestimenta y el relato de la experiencia.",
      identities: [
        {
          title: "Matato'a",
          description: "Representa fuerza, protecci\u00f3n, car\u00e1cter y presencia ceremonial.",
          meaning:
            "Es una identidad de defensa y liderazgo. Sus l\u00edneas se sienten firmes, frontales y poderosas, como una armadura simb\u00f3lica.",
          traits: ["Fuerza", "Protecci\u00f3n", "Valent\u00eda"],
        },
        {
          title: "Tangata Manu",
          description: "Evoca visi\u00f3n, transformaci\u00f3n espiritual y conexi\u00f3n con Orongo.",
          meaning:
            "Se inspira en el Hombre P\u00e1jaro y en el v\u00ednculo entre acantilado, mar, ave y rito. Es una identidad de mirada profunda y movimiento ritual.",
          traits: ["Visi\u00f3n", "Esp\u00edritu", "Transformaci\u00f3n"],
        },
        {
          title: "Navegante Polin\u00e9sico",
          description: "Conecta con el oc\u00e9ano, las estrellas y la memoria viajera del Pac\u00edfico.",
          meaning:
            "Habla de orientaci\u00f3n, viaje y pertenencia. Sus formas acompa\u00f1an la idea de avanzar guiado por se\u00f1ales naturales y memoria ancestral.",
          traits: ["Oc\u00e9ano", "Estrellas", "Camino"],
        },
      ],
    },
    en: {
      title: "T\u0101kona identities",
      text: "Each identity brings a different energy into the body painting, posture, dress, and story of the experience.",
      identities: [
        {
          title: "Matato'a",
          description: "Represents strength, protection, character, and ceremonial presence.",
          meaning:
            "This is an identity of defense and leadership. Its lines feel firm, frontal, and powerful, like symbolic armor.",
          traits: ["Strength", "Protection", "Courage"],
        },
        {
          title: "Tangata Manu",
          description: "Evokes vision, spiritual transformation, and connection with Orongo.",
          meaning:
            "Inspired by the Birdman and the bond between cliff, sea, bird, and ritual. It carries a deep gaze and ritual movement.",
          traits: ["Vision", "Spirit", "Transformation"],
        },
        {
          title: "Polynesian Navigator",
          description: "Connects with the ocean, the stars, and the voyaging memory of the Pacific.",
          meaning:
            "It speaks of orientation, journey, and belonging. Its forms carry the idea of moving forward guided by nature and ancestral memory.",
          traits: ["Ocean", "Stars", "Journey"],
        },
      ],
    },
  }[language];

  const identities = [
    {
      ...copy.identities[0],
      image: matatoaHombre,
      imageFemale: matatoaMujer,
    },
    {
      ...copy.identities[1],
      image: tangataHombre,
    },
    {
      ...copy.identities[2],
      image: naveganteHombre,
      imageFemale: naveganteMujer,
    },
  ];

  return (
    <main className="page">
      <h1 className="section-title">{copy.title}</h1>

      <p className="section-text">{copy.text}</p>

      <div className="grid">
        {identities.map((item) => (
          <IdentityCard key={item.title} {...item} />
        ))}
      </div>
    </main>
  );
}

export default Identidades;
