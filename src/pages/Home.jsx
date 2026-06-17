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
import tangataMujer from "../assets/takonas/tangata-manu-mujer.webp";
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
        "Cada experiencia representa una conexiÃ³n espiritual y cultural con Rapa Nui.",
      symbolsTitle: "SimbologÃ­a ancestral",
      symbolsText:
        "Conoce algunos de los sÃ­mbolos mÃ¡s importantes de la cultura Rapa Nui.",
      placesTitle: "Lugares de experiencia",
      placesText:
        "Elige una locaciÃ³n sagrada, natural o cinematogrÃ¡fica para tu sesiÃ³n.",
      galleryTitle: "Momentos reales",
      galleryText:
        "Danza, pintura corporal y expresiÃ³n cultural capturadas en Rapa Nui.",
      galleryCta: "Ver galerÃ­a completa",
      packagesTitle: "Paquetes",
      packagesText:
        "Experiencias diseÃ±adas para turistas, parejas y creadores de contenido.",
      identities: [
        {
          title: "Matato'a",
          description: "Fuerza, protecciÃ³n y espÃ­ritu guerrero ancestral.",
        },
        {
          title: "Tangata Manu",
          description: "SabidurÃ­a ancestral, conexiÃ³n espiritual y visiÃ³n.",
        },
        {
          title: "Navegante PolinÃ©sico",
          description: "Explorador guiado por las estrellas y el ocÃ©ano.",
        },
      ],
      symbols: [
        {
          title: "Make Make",
          description:
            "Deidad creadora de Rapa Nui, sÃ­mbolo de fertilidad, abundancia y origen de la vida.",
        },
        {
          title: "Manutara",
          description:
            "Ave sagrada vinculada a la competencia ancestral del Tangata Manu.",
        },
        {
          title: "Tangata Manu",
          description:
            "RepresentaciÃ³n del Hombre PÃ¡jaro, liderazgo, valentÃ­a y conexiÃ³n espiritual.",
        },
        {
          title: "NavegaciÃ³n PolinÃ©sica",
          description:
            "Arte ancestral de navegar guiado por las estrellas, el viento y el ocÃ©ano.",
        },
      ],
      locations: [
        { title: "Anakena", description: "Arena blanca, mar turquesa y energÃ­a ancestral." },
        { title: "Orongo", description: "Historia del Tangata Manu y vista al ocÃ©ano profundo." },
        { title: "Rano Kau", description: "VolcÃ¡n, niebla y paisaje ceremonial." },
        { title: "Tongariki", description: "Moais, amanecer y presencia ancestral." },
      ],
      packages: [
        {
          name: "Experiencia Premium",
          price: "$85.000 CLP",
          detail: "TÄkona + traje + sesiÃ³n profesional.",
        },
        {
          name: "Experiencia CinemÃ¡tica",
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
        "Choose a sacred, natural or cinematic location for your session.",
      galleryTitle: "Real moments",
      galleryText:
        "Dance, body painting and cultural expression captured in Rapa Nui.",
      galleryCta: "View full gallery",
      packagesTitle: "Packages",
      packagesText:
        "Experiences designed for travelers, couples and content creators.",
      identities: [
        {
          title: "Matato'a",
          description: "Strength, protection and ancestral warrior spirit.",
        },
        {
          title: "Tangata Manu",
          description: "Ancestral wisdom, spiritual connection and vision.",
        },
        {
          title: "Polynesian Navigator",
          description: "An explorer guided by the stars and the ocean.",
        },
      ],
      symbols: [
        {
          title: "Make Make",
          description:
            "Creator deity of Rapa Nui, symbol of fertility, abundance and the origin of life.",
        },
        {
          title: "Manutara",
          description:
            "Sacred bird connected to the ancestral Tangata Manu ceremony.",
        },
        {
          title: "Tangata Manu",
          description:
            "The Birdman symbol: leadership, courage and spiritual connection.",
        },
        {
          title: "Polynesian Navigation",
          description:
            "Ancestral navigation guided by stars, wind and ocean knowledge.",
        },
      ],
      locations: [
        { title: "Anakena", description: "White sand, turquoise sea and ancestral energy." },
        { title: "Orongo", description: "Tangata Manu history and a deep ocean view." },
        { title: "Rano Kau", description: "Volcano, mist and ceremonial landscape." },
        { title: "Tongariki", description: "Moai, sunrise and ancestral presence." },
      ],
      packages: [
        {
          name: "Premium Experience",
          price: "$85.000 CLP",
          detail: "TÄkona + outfit + professional session.",
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

  const simbolos = [
    {
      ...copy.symbols[0],
      image: makemake,
    },
    {
      ...copy.symbols[1],
      image: manutara,
    },
    {
      ...copy.symbols[2],
      image: tangatamanu,
    },
    {
      ...copy.symbols[3],
      image: navegante,
    },
  ];

  const locations = [
    {
      ...copy.locations[0],
      video: "/videos/anakena.mp4",
      image: naveganteMujer,
    },
    {
      ...copy.locations[1],
      video: "/videos/Orongo.mp4",
      image: tangataHombre,
    },
    {
      ...copy.locations[2],
      video: "/videos/RanoKau.mp4",
      image: matatoaMujer,
    },
    {
      ...copy.locations[3],
      video: "/videos/tongariki.mp4",
      image: matatoaHombre,
    },
  ];

  const packages = copy.packages;

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

      <section className="section dark-section">
        <h2 className="section-title">{copy.packagesTitle}</h2>

        <p className="section-text">{copy.packagesText}</p>

        <div className="grid">
          {packages.map((item) => (
            <PackageCard key={item.name} {...item} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
