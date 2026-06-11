import { useLanguage } from "../context/useLanguage";

function Galeria() {
  const { language } = useLanguage();
  const copy =
    language === "en"
      ? {
          title: "Gallery",
          text: "Photos and visual moments from the Tākona Experience.",
          alt: "Tākona Experience",
        }
      : {
          title: "Galería",
          text: "Fotografías y experiencias visuales de Tākona Experience.",
          alt: "Tākona Experience",
        };

  const photos = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=70&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=70&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=70&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=70&w=800&auto=format&fit=crop",
  ];

  return (
    <main className="page">
      <h1 className="section-title">{copy.title}</h1>

      <p className="section-text">{copy.text}</p>

      <div className="gallery-grid">
        {photos.map((photo) => (
          <img key={photo} src={photo} alt={copy.alt} loading="lazy" decoding="async" />
        ))}
      </div>
    </main>
  );
}

export default Galeria;
