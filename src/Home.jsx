import Hero from "../components/Hero";
import IdentityCard from "../components/IdentityCard";
import PackageCard from "../components/PackageCard";

function Home() {
  const identities = [
    {
      title: "Guerrero Matato’a",
      description:
        "Fuerza, protección y espíritu guerrero conectado con la historia ancestral.",
      image:
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Tangata Manu",
      description:
        "Inspirado en el hombre pájaro, el océano, Orongo y el vuelo espiritual.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Navegante Polinésico",
      description:
        "Honra el viaje ancestral, las estrellas, el mar y la memoria polinésica.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const packages = [
    {
      name: "Experiencia Premium",
      price: "$85.000 CLP",
      detail: "Tākona + traje tradicional + sesión profesional.",
    },
    {
      name: "Experiencia Cinemática",
      price: "$150.000 CLP",
      detail: "Fotos + video reel + historia cultural personalizada.",
    },
  ];

  return (
    <>
      <Hero />

      <section className="section">
        <h2 className="section-title">Elige tu identidad</h2>
        <p className="section-text">
          Cada experiencia representa una conexión espiritual, visual y cultural
          con Rapa Nui.
        </p>

        <div className="grid">
          {identities.map((item) => (
            <IdentityCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="section dark-section">
        <h2 className="section-title">Paquetes</h2>
        <p className="section-text">
          Experiencias pensadas para viajeros, parejas, familias y creadores de
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
