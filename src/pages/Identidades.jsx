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
      title: "Identidades Tākona",
      text: "Cada identidad propone una energía distinta para la pintura corporal, la postura, la vestimenta y el relato de la experiencia.",
      identities: [
        {
          title: "Matato'a",
          description: "Representa fuerza, protección, carácter y presencia ceremonial.",
          meaning:
            "Es una identidad de defensa y liderazgo. Sus líneas suelen sentirse firmes, frontales y poderosas, como una armadura simbólica.",
          traits: ["Fuerza", "Protección", "Valentía"],
        },
        {
          title: "Tangata Manu",
          description: "Evoca visión, transformación espiritual y conexión con Orongo.",
          meaning:
            "Se inspira en el Hombre Pájaro y en el vínculo entre acantilado, mar, ave y rito. Es una identidad de mirada profunda y movimiento ritual.",
          traits: ["Visión", "Espíritu", "Transformación"],
        },
        {
          title: "Navegante Polinésico",
          description: "Conecta con el océano, las estrellas y la memoria viajera del Pacífico.",
          meaning:
            "Habla de orientación, viaje y pertenencia. Sus formas acompañan la idea de avanzar guiado por señales naturales y memoria ancestral.",
          traits: ["Océano", "Estrellas", "Camino"],
        },
      ],
    },
    en: {
      title: "Tākona identities",
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
