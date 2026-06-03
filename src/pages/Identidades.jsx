import IdentityCard from "../components/IdentityCard";

import matatoaHombre from "../assets/takonas/matatoa-hombre.png";
import matatoaMujer from "../assets/takonas/matatoa-mujer.png";
import tangataHombre from "../assets/takonas/tangata-manu-hombre.png";
import tangataMujer from "../assets/takonas/tangata-manu-mujer.png";
import naveganteHombre from "../assets/takonas/navegante-hombre.png";
import naveganteMujer from "../assets/takonas/navegante-mujer.png";

function Identidades() {
  const identities = [
    {
      title: "Matato'a",
      description: "Guerrero o guardiana protectora de su pueblo.",
      image: matatoaHombre,
      imageFemale: matatoaMujer,
    },
    {
      title: "Tangata Manu",
      description: "Sabiduría, visión y conexión espiritual.",
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

  return (
    <main className="page">
      <h1 className="section-title">Identidades Tākona</h1>

      <p className="section-text">
        Cada visitante puede elegir una identidad ancestral masculina o femenina.
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