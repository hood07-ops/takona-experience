import ExperienceBuilder from "../components/ExperienceBuilder";
import Hero from "../components/Hero";
import IdentityCard from "../components/IdentityCard";
import PackageCard from "../components/PackageCard";
import LocationCard from "../components/LocationCard";
import SimboloCard from "../components/SimboloCard";

import matatoaHombre from "../assets/takonas/matatoa-hombre.png";
import matatoaMujer from "../assets/takonas/matatoa-mujer.png";
import tangataHombre from "../assets/takonas/tangata-manu-hombre.png";
import tangataMujer from "../assets/takonas/tangata-manu-mujer.png";
import naveganteHombre from "../assets/takonas/navegante-hombre.png";
import naveganteMujer from "../assets/takonas/navegante-mujer.png";

import makemake from "../assets/simbolos/makemake.png";
import manutara from "../assets/simbolos/manutara.png";
import tangatamanu from "../assets/simbolos/tangatamanu.png";
import navegante from "../assets/simbolos/navegante.png";

function Home() {
  const identities = [
    {
      title: "Matato'a",
      description: "Fuerza, protección y espíritu guerrero ancestral.",
      image: matatoaHombre,
      imageFemale: matatoaMujer,
    },
    {
      title: "Tangata Manu",
      description: "Sabiduría ancestral, conexión espiritual y visión.",
      image: tangataHombre,
      imageFemale: tangataMujer,
    },
    {
      title: "Navegante Polinésico",
      description: "Explorador guiado por las estrellas y el océano.",
      image: naveganteHombre,
      imageFemale: naveganteMujer,
    },
  ];

  const simbolos = [
    {
      title: "Make Make",
      image: makemake,
      description:
        "Deidad creadora de Rapa Nui, símbolo de fertilidad, abundancia y origen de la vida.",
    },
    {
      title: "Manutara",
      image: manutara,
      description:
        "Ave sagrada vinculada a la competencia ancestral del Tangata Manu.",
    },
    {
      title: "Tangata Manu",
      image: tangatamanu,
      description:
        "Representación del Hombre Pájaro, liderazgo, valentía y conexión espiritual.",
    },
    {
      title: "Navegación Polinésica",
      image: navegante,
      description:
        "Arte ancestral de navegar guiado por las estrellas, el viento y el océano.",
    },
  ];

  const locations = [
    {
      title: "Anakena",
      description: "Arena blanca, mar turquesa y energía ancestral.",
      video: "/videos/anakena.mp4",
    },
    {
      title: "Orongo",
      description: "Historia del Tangata Manu y vista al océano profundo.",
      video: "/videos/Orongo.mp4",
    },
    {
      title: "Rano Kau",
      description: "Volcán, niebla y paisaje ceremonial.",
      video: "/videos/RanoKau.mp4",
    },
    {
      title: "Tongariki",
      description: "Moais, amanecer y presencia ancestral.",
      video: "/videos/tongariki.mp4",
    },
  ];

  const packages = [
    {
      name: "Experiencia Básica",
      price: "$45.000 CLP",
      detail: "Tākona + fotografías + 1 locación.",
    },
    {
      name: "Experiencia Premium",
      price: "$85.000 CLP",
      detail: "Tākona + traje + sesión profesional.",
    },
    {
      name: "Experiencia Cinemática",
      price: "$150.000 CLP",
      detail: "Fotos + video reel + historia cultural.",
    },
  ];

  return (
    <>
      <Hero />

      <ExperienceBuilder />

      <section className="section">
        <h2 className="section-title">Elige tu identidad</h2>

        <p className="section-text">
          Cada experiencia representa una conexión espiritual y cultural con
          Rapa Nui.
        </p>

        <div className="grid">
          {identities.map((item) => (
            <IdentityCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="section dark-section">
        <h2 className="section-title">Simbología Ancestral</h2>

        <p className="section-text">
          Conoce algunos de los símbolos más importantes de la cultura Rapa Nui.
        </p>

        <div className="grid">
          {simbolos.map((item) => (
            <SimboloCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Lugares de experiencia</h2>

        <p className="section-text">
          Elige una locación sagrada, natural o cinematográfica para tu sesión.
        </p>

        <div className="grid">
          {locations.map((item) => (
            <LocationCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="section dark-section">
        <h2 className="section-title">Paquetes</h2>

        <p className="section-text">
          Experiencias diseñadas para turistas, parejas y creadores de
          contenido.
        </p>

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