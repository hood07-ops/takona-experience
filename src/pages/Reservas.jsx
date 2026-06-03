import { useState } from "react";

function Reservas() {
  const [form, setForm] = useState({
    nombre: "",
    whatsapp: "",
    fecha: "",
    paquete: "Experiencia Básica",
    personas: "1 persona",
  });

  const numeroWhatsApp = "56900000000";

  const mensaje = `Hola, quiero reservar una experiencia .

Nombre: ${form.nombre}
WhatsApp: ${form.whatsapp}
Fecha: ${form.fecha}
Paquete: ${form.paquete}
Personas: ${form.personas}`;

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <main className="page">
      <h1 className="section-title">Reservas</h1>

      <p className="section-text">
        Completa tus datos y envía la solicitud directa por WhatsApp.
      </p>

      <form className="booking-form">
        <input
          name="nombre"
          placeholder="Nombre completo"
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
          <option>Experiencia Básica</option>
          <option>Experiencia Premium</option>
          <option>Experiencia Cinemática</option>
        </select>

        <select name="personas" value={form.personas} onChange={handleChange}>
          <option>1 persona</option>
          <option>2 personas</option>
          <option>Grupo / familia</option>
        </select>

        <a
          className="gold-button"
          href={`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
            mensaje
          )}`}
          target="_blank"
          rel="noreferrer"
        >
          Enviar reserva por WhatsApp
        </a>
      </form>
    </main>
  );
}

export default Reservas;