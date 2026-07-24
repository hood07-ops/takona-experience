import ExperienceBuilder from "../components/ExperienceBuilder";
import Hero from "../components/Hero";
import IdentityCard from "../components/IdentityCard";
import PackageCard from "../components/PackageCard";
import LocationCard from "../components/LocationCard";
import SimboloCard from "../components/SimboloCard";
import { useLanguage } from "../context/useLanguage";

import matatoaHombre from "../assets/takonas/matatoa-hombre.webp";
import matatoaMujer from "../assets/takonas/matatoa-mujer.webp";
import tangataHombre from "../assets/takonas/tangata-manu-hombre.webp";
import naveganteHombre from "../assets/takonas/navegante-hombre.webp";
import naveganteMujer from "../assets/takonas/navegante-mujer.webp";

import makemake from "../assets/simbolos/makemake.webp";
import manutara from "../assets/simbolos/manutara.webp";
import navegante from "../assets/simbolos/navegante.webp";
import tangatamanu from "../assets/simbolos/tangatamanu.webp";

function Home() {
  const { language } = useLanguage();
  const copy = {
    es: {
      identitiesTitle: "Elige tu identidad",
      identitiesText:
        "Cada experiencia representa una conexi\u00f3n espiritual y cultural con Rapa Nui.",
      symbolsTitle: "Simbolog\u00eda ancestral",
      symbolsText:
        "Conoce algunos de los s\u00edmbolos m\u00e1s importantes de la cultura Rapa Nui.",
      placesTitle: "Lugares de experiencia",
      placesText:
        "Elige una locaci\u00f3n sagrada, natural o cinematogr\u00e1fica para tu sesi\u00f3n.",
      processTitle: "C\u00f3mo funciona",
      processText:
        "Un recorrido simple, cuidado y pensado para que vivas T\u0101kona con sentido cultural.",
      packagesTitle: "Paquetes",
      packagesText:
        "Experiencias dise\u00f1adas para turistas, parejas y creadores de contenido.",
      identities: [
        {
          title: "Matato'a",
          description: "Fuerza, protecci\u00f3n y esp\u00edritu guerrero ancestral.",
          meaning: "Identidad de defensa, liderazgo y presencia ceremonial.",
          traits: ["Fuerza", "Protecci\u00f3n", "Valent\u00eda"],
        },
        {
          title: "Tangata Manu",
          description: "Sabidur\u00eda ancestral, conexi\u00f3n espiritual y visi\u00f3n.",
          meaning: "Inspirado en Orongo, el ave sagrada y la transformaci\u00f3n ritual.",
          traits: ["Visi\u00f3n", "Esp\u00edritu", "Transformaci\u00f3n"],
        },
        {
          title: "Navegante Polin\u00e9sico",
          description: "Explorador guiado por las estrellas y el oc\u00e9ano.",
          meaning: "Representa viaje, orientaci\u00f3n y memoria ancestral del Pac\u00edfico.",
          traits: ["Oc\u00e9ano", "Estrellas", "Camino"],
        },
      ],
      symbols: [
        {
          title: "Make Make",
          description:
            "Deidad creadora de Rapa Nui, s\u00edmbolo de fertilidad, abundancia y origen de la vida.",
        },
        {
          title: "Manutara",
          description:
            "Ave sagrada vinculada a la competencia ancestral del Tangata Manu.",
        },
        {
          title: "Tangata Manu",
          description:
            "Representaci\u00f3n del Hombre P\u00e1jaro, liderazgo, valent\u00eda y conexi\u00f3n espiritual.",
        },
        {
          title: "Navegaci\u00f3n Polin\u00e9sica",
          description:
            "Arte ancestral de navegar guiado por las estrellas, el viento y el oc\u00e9ano.",
        },
      ],
      locations: [
        { title: "Anakena", description: "Arena blanca, mar turquesa y energ\u00eda ancestral." },
        { title: "Orongo", description: "Historia del Tangata Manu y vista al oc\u00e9ano profundo." },
        { title: "Rano Kau", description: "Volc\u00e1n, niebla y paisaje ceremonial." },
        { title: "Tongariki", description: "Mo\u00e1is, amanecer y presencia ancestral." },
      ],
      process: [
        {
          step: "01",
          title: "Elige tu identidad",
          text: "Selecciona Matato'a, Tangata Manu o Navegante Polin\u00e9sico seg\u00fan la energ\u00eda que quieres representar.",
        },
        {
          step: "02",
          title: "Definimos lugar y fecha",
          text: "Coordinamos la sesi\u00f3n en una locaci\u00f3n natural o ceremonial de Rapa Nui.",
        },
        {
          step: "03",
          title: "Vives la experiencia",
          text: "Aplicamos la pintura corporal, vestimenta y gu\u00eda cultural antes de la sesi\u00f3n.",
        },
        {
          step: "04",
          title: "Recibes tu registro",
          text: "Te llevas fotos profesionales y, si eliges el paquete cinematogr\u00e1fico, un video reel.",
        },
      ],
      packages: [
        {
          name: "Experiencia Premium",
          price: "$85.000 CLP",
          detail: "T\u0101kona + traje + sesi\u00f3n profesional.",
        },
        {
          name: "Experiencia Cinem\u00e1tica",
          price: "$150.000 CLP",
          detail: "Fotos + video reel + historia cultural.",
        },
      ],
    },
    en: {
      identitiesTitle: "Choose your identity",
      identitiesText:
        "Each experience represents a spiritual and cultural connection with Rapa Nui.",
      symbolsTitle: "Ancestral symbols",
      symbolsText:
        "Discover some of the most meaningful symbols of Rapa Nui culture.",
      placesTitle: "Experience locations",
      placesText:
        "Choose a sacred, natural, or cinematic location for your session.",
      processTitle: "How it works",
      processText:
        "A simple, thoughtful flow designed so you can experience T\u0101kona with cultural meaning.",
      packagesTitle: "Packages",
      packagesText:
        "Experiences designed for travelers, couples, and content creators.",
      identities: [
        {
          title: "Matato'a",
          description: "Strength, protection, and ancestral warrior spirit.",
          meaning: "An identity of defense, leadership, and ceremonial presence.",
          traits: ["Strength", "Protection", "Courage"],
        },
        {
          title: "Tangata Manu",
          description: "Ancestral wisdom, spiritual connection, and vision.",
          meaning: "Inspired by Orongo, the sacred bird, and ritual transformation.",
          traits: ["Vision", "Spirit", "Transformation"],
        },
        {
          title: "Polynesian Navigator",
          description: "An explorer guided by the stars and the ocean.",
          meaning: "Represents journey, orientation, and ancestral Pacific memory.",
          traits: ["Ocean", "Stars", "Journey"],
        },
      ],
      symbols: [
        {
          title: "Make Make",
          description:
            "Creator deity of Rapa Nui, symbol of fertility, abundance, and the origin of life.",
        },
        {
          title: "Manutara",
          description:
            "Sacred bird connected to the ancestral Tangata Manu ceremony.",
        },
        {
          title: "Tangata Manu",
          description:
            "The Birdman symbol: leadership, courage, and spiritual connection.",
        },
        {
          title: "Polynesian Navigation",
          description:
            "Ancestral navigation guided by the stars, wind, and ocean knowledge.",
        },
      ],
      locations: [
        { title: "Anakena", description: "White sand, turquoise sea, and ancestral energy." },
        { title: "Orongo", description: "Tangata Manu history and a deep ocean view." },
        { title: "Rano Kau", description: "Volcano, mist, and ceremonial landscape." },
        { title: "Tongariki", description: "Moai, sunrise, and ancestral presence." },
      ],
      process: [
        {
          step: "01",
          title: "Choose your identity",
          text: "Select Matato'a, Tangata Manu, or Polynesian Navigator based on the energy you want to represent.",
        },
        {
          step: "02",
          title: "Set place and date",
          text: "We coordinate the session in a natural or ceremonial Rapa Nui location.",
        },
        {
          step: "03",
          title: "Live the experience",
          text: "Body painting, ancestral dress, and cultural guidance come before the session.",
        },
        {
          step: "04",
          title: "Receive your memories",
          text: "You receive professional photos and, with the cinematic package, a video reel.",
        },
      ],
      packages: [
        {
          name: "Premium Experience",
          price: "$85.000 CLP",
          detail: "T\u0101kona + outfit + professional session.",
        },
        {
          name: "Cinematic Experience",
          price: "$150.000 CLP",
          detail: "Photos + video reel + cultural story.",
        },
      ],
    },
  }[language];

  const identities = [
    { ...copy.identities[0], image: matatoaHombre, imageFemale: matatoaMujer },
    { ...copy.identities[1], image: tangataHombre },
    { ...copy.identities[2], image: naveganteHombre, imageFemale: naveganteMujer },
  ];

  const simbolos = [
    { ...copy.symbols[0], image: makemake },
    { ...copy.symbols[1], image: manutara },
    { ...copy.symbols[2], image: tangatamanu },
    { ...copy.symbols[3], image: navegante },
  ];

  const locations = [
    { ...copy.locations[0], video: "/videos/anakena.mp4", image: naveganteMujer },
    { ...copy.locations[1], video: "/videos/Orongo.mp4", image: tangataHombre },
    { ...copy.locations[2], video: "/videos/RanoKau.mp4", image: matatoaMujer },
    { ...copy.locations[3], video: "/videos/tongariki.mp4", image: matatoaHombre },
  ];

  return (
    <>
      <Hero />
      <ExperienceBuilder />

      <section className="section">
        <h2 className="section-title">{copy.identitiesTitle}</h2>
        <p className="section-text">{copy.identitiesText}</p>
        <div className="grid">
          {identities.map((item) => (
            <IdentityCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="section dark-section">
        <h2 className="section-title">{copy.symbolsTitle}</h2>
        <p className="section-text">{copy.symbolsText}</p>
        <div className="grid">
          {simbolos.map((item) => (
            <SimboloCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">{copy.placesTitle}</h2>
        <p className="section-text">{copy.placesText}</p>
        <div className="grid">
          {locations.map((item) => (
            <LocationCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="section process-section">
        <h2 className="section-title">{copy.processTitle}</h2>
        <p className="section-text">{copy.processText}</p>
        <div className="process-grid">
          {copy.process.map((item) => (
            <article className="process-card" key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark-section">
        <h2 className="section-title">{copy.packagesTitle}</h2>
        <p className="section-text">{copy.packagesText}</p>
        <div className="grid">
          {copy.packages.map((item) => (
            <PackageCard key={item.name} {...item} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
