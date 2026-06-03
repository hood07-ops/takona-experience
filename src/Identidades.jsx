import IdentityCard from "../components/IdentityCard";

function Identidades() {
  const identities = [
    {
      title: "Guerrero Matato’a",
      description: "Representa fuerza, valentía, protección y disciplina.",
      image:
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Tangata Manu",
      description: "Inspirado en Orongo, el ave, el océano y el rito ancestral.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Espíritu del Volcán",
      description: "Energía, transformación, fuego interno y conexión con la tierra.",
      image:
        "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <main className="page">
      <h1 className="section-title">Identidades Tākona</h1>
      <p className="section-text">
        El turista podrá elegir una identidad simbólica para vivir su sesión.
      </p>

      <div className="grid">
        {identities.map((item) => (
          <IdentityCard key={item.title} {...item} />
        ))}
      </div>
    </main>
  );
}

export default Identidades;