import { useState } from "react";
import { useLanguage } from "../context/useLanguage";

function ExperienceBuilder() {
  const { language } = useLanguage();
  const [energia, setEnergia] = useState("warrior");
  const [takonaTipo, setTakonaTipo] = useState("protection");
  const [lugar, setLugar] = useState("Tongariki");
  const [nombre, setNombre] = useState("");
  const [pais, setPais] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [personas, setPersonas] = useState("1");

  const numeroWhatsApp = "56973199456";
  const copy = {
    es: {
      title: "Dise\u00f1a tu personaje T\u0101kona",
      intro: "Crea tu identidad simb\u00f3lica antes de vivir la experiencia.",
      energy: "Energ\u00eda",
      takona: "T\u0101kona",
      location: "Locaci\u00f3n",
      name: "Nombre completo",
      country: "Pa\u00eds",
      resultTitle: "Tu experiencia ser\u00e1:",
      result: "en",
      withTakona: "con T\u0101kona de",
      book: "Reservar por WhatsApp",
      quote: "Solicitar cotizaci\u00f3n",
      messageIntro: "Hola, quiero reservar una experiencia Takona.",
      quoteIntro: "Hola, quiero cotizar una experiencia Takona.",
      clientData: "DATOS DEL CLIENTE",
      visitDate: "Fecha de visita",
      tentativeDate: "Fecha tentativa",
      people: "Cantidad de personas",
      identity: "Identidad",
      consultation: "Consulta",
      energies: {
        warrior: "Guerrero",
        navigator: "Navegante",
        birdman: "Tangata Manu",
        volcano: "Esp\u00edritu del Volc\u00e1n",
      },
      types: {
        protection: "Protecci\u00f3n",
        wisdom: "Sabidur\u00eda",
        journey: "Viaje",
        strength: "Fuerza",
      },
    },
    en: {
      title: "Design your T\u0101kona character",
      intro: "Create your symbolic identity before living the experience.",
      energy: "Energy",
      takona: "T\u0101kona",
      location: "Location",
      name: "Full name",
      country: "Country",
      resultTitle: "Your experience will be:",
      result: "in",
      withTakona: "with a T\u0101kona of",
      book: "Book on WhatsApp",
      quote: "Request a quote",
      messageIntro: "Hello, I want to book a Takona experience.",
      quoteIntro: "Hello, I want to request a quote for a Takona experience.",
      clientData: "CLIENT DETAILS",
      visitDate: "Visit date",
      tentativeDate: "Tentative date",
      people: "Number of people",
      identity: "Identity",
      consultation: "Question",
      energies: {
        warrior: "Warrior",
        navigator: "Navigator",
        birdman: "Tangata Manu",
        volcano: "Volcano Spirit",
      },
      types: {
        protection: "Protection",
        wisdom: "Wisdom",
        journey: "Journey",
        strength: "Strength",
      },
    },
  }[language];

  const energiaTexto = copy.energies[energia];
  const takonaTexto = copy.types[takonaTipo];

  const mensaje = `${copy.messageIntro}

${copy.clientData}:
${copy.name}: ${nombre}
${copy.country}: ${pais}
Email: ${email}
${copy.visitDate}: ${fecha}
${copy.people}: ${personas}

EXPERIENCIA:
${copy.identity}: ${energiaTexto}
Takona: ${takonaTexto}
${copy.location}: ${lugar}`;

  return (
    <section className="builder-section">
      <h2 className="section-title">{copy.title}</h2>
      <p className="section-text">{copy.intro}</p>

      <div className="builder-grid">
        <div>
          <label>{copy.energy}</label>
          <select value={energia} onChange={(e) => setEnergia(e.target.value)}>
            <option value="warrior">{copy.energies.warrior}</option>
            <option value="navigator">{copy.energies.navigator}</option>
            <option value="birdman">{copy.energies.birdman}</option>
            <option value="volcano">{copy.energies.volcano}</option>
          </select>
        </div>

        <div>
          <label>{copy.takona}</label>
          <select
            value={takonaTipo}
            onChange={(e) => setTakonaTipo(e.target.value)}
          >
            <option value="protection">{copy.types.protection}</option>
            <option value="wisdom">{copy.types.wisdom}</option>
            <option value="journey">{copy.types.journey}</option>
            <option value="strength">{copy.types.strength}</option>
          </select>
        </div>

        <div>
          <label>{copy.location}</label>
          <select value={lugar} onChange={(e) => setLugar(e.target.value)}>
            <option>Tongariki</option>
            <option>Anakena</option>
            <option>Orongo</option>
            <option>Rano Kau</option>
          </select>
        </div>
      </div>

      <div className="reservation-form">
        <input
          placeholder={copy.name}
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          placeholder={copy.country}
          value={pais}
          onChange={(e) => setPais(e.target.value)}
        />
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
        <select value={personas} onChange={(e) => setPersonas(e.target.value)}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5+</option>
        </select>
      </div>

      <div className="builder-result">
        <h3>{copy.resultTitle}</h3>
        <p>
          <strong>{energiaTexto}</strong> {copy.result} <strong>{lugar}</strong>{" "}
          {copy.withTakona} <strong>{takonaTexto}</strong>
        </p>

        <div className="builder-actions">
          <a
            className="gold-button"
            href={`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
              mensaje,
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            {copy.book}
          </a>

          <a
            className="dark-button"
            href={`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
              `${copy.quoteIntro}

${copy.name}: ${nombre}
${copy.country}: ${pais}
Email: ${email}
${copy.tentativeDate}: ${fecha}
${copy.people}: ${personas}

${copy.identity}: ${energiaTexto}
Takona: ${takonaTexto}
${copy.location}: ${lugar}

${copy.consultation}:`,
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            {copy.quote}
          </a>
        </div>
      </div>
    </section>
  );
}

export default ExperienceBuilder;
