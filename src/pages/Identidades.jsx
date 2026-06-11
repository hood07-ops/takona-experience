import IdentityCard from "../components/IdentityCard";

import matatoaHombre from "../assets/takonas/matatoa-hombre.webp";
import matatoaMujer from "../assets/takonas/matatoa-mujer.webp";
import tangataHombre from "../assets/takonas/tangata-manu-hombre.webp";
import tangataMujer from "../assets/takonas/tangata-manu-mujer.webp";
import naveganteHombre from "../assets/takonas/navegante-hombre.webp";
import naveganteMujer from "../assets/takonas/navegante-mujer.webp";
import { useLanguage } from "../context/useLanguage";

function Identidades() {
  const { language } = useLanguage();
  const copy = {
    es: {
      title: "Identidades Tākona",
      text: "Cada visitante puede elegir una identidad ancestral masculina o femenina.",
      identities: [
        {
          title: "Matato'a",
          description: "Guerrero o guardiana protectora de su pueblo.",
        },
        {
          title: "Tangata Manu",
          description: "Sabiduría, visión y conexión espiritual.",
        },
        {
          title: "Navegante Polinésico",
          description: "Explorador guiado por las estrellas y el océano.",
        },
      ],
    },
    en: {
      title: "Tākona identities",
      text: "Each visitor can choose an ancestral masculine or feminine identity.",
      identities: [
        {
          title: "Matato'a",
          description: "Warrior or guardian protector of their people.",
        },
        {
          title: "Tangata Manu",
          description: "Wisdom, vision and spiritual connection.",
        },
        {
          title: "Polynesian Navigator",
          description: "Explorer guided by the stars and the ocean.",
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
      imageFemale: tangataMujer,
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
