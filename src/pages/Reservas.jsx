import { useState } from "react";
import { useLanguage } from "../context/useLanguage";

function Reservas() {
  const { language } = useLanguage();
  const copy = {
    es: {
      title: "Reservas",
      intro: "Completa tus datos y envía la solicitud directa por WhatsApp.",
      name: "Nombre completo",
      package: "Paquete",
      people: "Personas",
      premium: "Experiencia Premium",
      cinematic: "Experiencia Cinemática",
      one: "1 persona",
      two: "2 personas",
      group: "Grupo / familia",
      send: "Enviar reserva por WhatsApp",
      messageIntro: "Hola, quiero reservar una experiencia Tākona.",
      date: "Fecha",
    },
    en: {
      title: "Bookings",
      intro: "Complete your details and send the request directly through WhatsApp.",
      name: "Full name",
      package: "Package",
      people: "People",
      premium: "Premium Experience",
      cinematic: "Cinematic Experience",
      one: "1 person",
      two: "2 people",
      group: "Group / family",
      send: "Send booking on WhatsApp",
      messageIntro: "Hello, I want to book a Tākona experience.",
      date: "Date",
    },
  }[language];

  const [form, setForm] = useState({
    nombre: "",
    whatsapp: "",
    fecha: "",
    paquete: "premium",
    personas: "1",
  });

  const numeroWhatsApp = "56973199456";

  const paqueteTexto = form.paquete === "cinematic" ? copy.cinematic : copy.premium;
  const personasTexto =
    form.personas === "group"
      ? copy.group
      : form.personas === "2"
        ? copy.two
        : copy.one;

  const mensaje = `${copy.messageIntro}

${copy.name}: ${form.nombre}
WhatsApp: ${form.whatsapp}
${copy.date}: ${form.fecha}
${copy.package}: ${paqueteTexto}
${copy.people}: ${personasTexto}`;

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <main className="page">
      <h1 className="section-title">{copy.title}</h1>

      <p className="section-text">{copy.intro}</p>

      <form className="booking-form">
        <input
          name="nombre"
          placeholder={copy.name}
          value={form.nombre}
          onChange={handleChange}
        />

        <input
          name="whatsapp"
          placeholder="WhatsApp"
          value={form.whatsapp}
          onChange={handleChange}
        />

        <input
          name="fecha"
          type="date"
          value={form.fecha}
          onChange={handleChange}
        />

        <select name="paquete" value={form.paquete} onChange={handleChange}>
          <option value="premium">{copy.premium}</option>
          <option value="cinematic">{copy.cinematic}</option>
        </select>

        <select name="personas" value={form.personas} onChange={handleChange}>
          <option value="1">{copy.one}</option>
          <option value="2">{copy.two}</option>
          <option value="group">{copy.group}</option>
        </select>

        <a
          className="gold-button"
          href={`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
            mensaje
          )}`}
          target="_blank"
          rel="noreferrer"
        >
          {copy.send}
        </a>
      </form>
    </main>
  );
}

export default Reservas;
