import { useState } from "react";

function ExperienceBuilder() {
  const [energia, setEnergia] = useState("Guerrero");
  const [takonaTipo, setTakonaTipo] = useState("Protección");
  const [lugar, setLugar] = useState("Tongariki");

  const numeroWhatsApp = "56973199456";

  const mensaje = `Hola, quiero reservar una experiencia Tākona.

Identidad: ${energia}
Tākona: ${takonaTipo}
Locación: ${lugar}

Nombre:
Fecha:
Cantidad de personas:`;

  return (
    <section className="builder-section">
      <h2 className="section-title">Diseña tu personaje Tākona</h2>

      <p className="section-text">
        Crea tu identidad simbólica antes de vivir la experiencia.
      </p>

      <div className="builder-grid">
        <div>
          <label>Energía</label>

          <select value={energia} onChange={(e) => setEnergia(e.target.value)}>
            <option>Guerrero</option>
            <option>Navegante</option>
            <option>Tangata Manu</option>
            <option>Espíritu del Volcán</option>
          </select>
        </div>

        <div>
          <label>Tākona</label>

          <select
            value={takonaTipo}
            onChange={(e) => setTakonaTipo(e.target.value)}
          >
            <option>Protección</option>
            <option>Sabiduría</option>
            <option>Viaje</option>
            <option>Fuerza</option>
          </select>
        </div>

        <div>
          <label>Locación</label>

          <select value={lugar} onChange={(e) => setLugar(e.target.value)}>
            <option>Tongariki</option>
            <option>Anakena</option>
            <option>Orongo</option>
            <option>Rano Kau</option>
          </select>
        </div>
      </div>

      <div className="builder-result">
        <h3>Tu experiencia será:</h3>

        <p>
          <strong>{energia}</strong> en <strong>{lugar}</strong> con Tākona de{" "}
          <strong>{takonaTipo}</strong>
        </p>

        <div className="builder-actions">
          <a
            className="gold-button"
            href={`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
              mensaje
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            🟢 Reservar por WhatsApp
          </a>

          <a
            className="dark-button"
            href={`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
              `Hola, quiero cotizar una experiencia Tākona.

Identidad: ${energia}
Tākona: ${takonaTipo}
Locación: ${lugar}

Nombre:
Fecha tentativa:
Cantidad de personas:
Consulta:`
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            📩 Solicitar cotización
          </a>
        </div>
      </div>
    </section>
  );
}

export default ExperienceBuilder;