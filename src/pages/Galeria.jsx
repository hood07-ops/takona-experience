function Galeria() {
  const photos = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1200&auto=format&fit=crop",
  ];

  return (
    <main className="page">
      <h1 className="section-title">Galería</h1>

      <p className="section-text">
        Fotografías y experiencias visuales de  Experience.
      </p>

      <div className="gallery-grid">
        {photos.map((photo) => (
          <img key={photo} src={photo} alt=" Experience" />
        ))}
      </div>
    </main>
  );
}

export default Galeria;