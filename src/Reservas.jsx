function Reservas() {
  return (
    <main className="page">
      <h1 className="section-title">Reservas</h1>

      <p className="section-text">
        Completa los datos y reserva tu experiencia por WhatsApp.
      </p>

      <form className="booking-form">
        <input placeholder="Nombre completo" />
        <input placeholder="WhatsApp" />
        <input type="date" />
        <select>
          <option>Experiencia Premium</option>
          <option>Experiencia Cinemática</option>
        </select>
        <select>
          <option>1 persona</option>
          <option>2 personas</option>
          <option>Familia / grupo</option>
        </select>

        <a
          className="gold-button"
          href="https://wa.me/56973199456?text=Hola,%20quiero%20reservar%20una%20experiencia%20"
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
