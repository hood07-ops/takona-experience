import { useLanguage } from "../context/useLanguage";

const photos = [
  {
    id: "stage-dance",
    src: "/gallery/takona-01.webp",
    thumb: "/gallery/takona-01-thumb.webp",
  },
  {
    id: "matatoa-ceremony",
    src: "/gallery/takona-02.webp",
    thumb: "/gallery/takona-02-thumb.webp",
  },
  {
    id: "guardian",
    src: "/gallery/takona-03.webp",
    thumb: "/gallery/takona-03-thumb.webp",
  },
  {
    id: "warrior",
    src: "/gallery/takona-04.webp",
    thumb: "/gallery/takona-04-thumb.webp",
  },
  {
    id: "white-feathers",
    src: "/gallery/takona-05.webp",
    thumb: "/gallery/takona-05-thumb.webp",
  },
  {
    id: "children",
    src: "/gallery/takona-06.webp",
    thumb: "/gallery/takona-06-thumb.webp",
  },
  {
    id: "dance",
    src: "/gallery/takona-07.webp",
    thumb: "/gallery/takona-07-thumb.webp",
  },
  {
    id: "white-takona",
    src: "/gallery/takona-08.webp",
    thumb: "/gallery/takona-08-thumb.webp",
  },
  {
    id: "woman-takona",
    src: "/gallery/takona-09.webp",
    thumb: "/gallery/takona-09-thumb.webp",
  },
  {
    id: "ceremony-group",
    src: "/gallery/takona-10.webp",
    thumb: "/gallery/takona-10-thumb.webp",
  },
  {
    id: "night-performance",
    src: "/gallery/takona-11.webp",
    thumb: "/gallery/takona-11-thumb.webp",
  },
];

function Galeria() {
  const { language } = useLanguage();
  const copy =
    language === "en"
      ? {
          title: "Gallery",
          text: "Real moments of body painting, dance and Rapa Nui ceremonial expression.",
          alt: "Tākona Experience",
          open: "Open photo",
        }
      : {
          title: "Galería",
          text: "Momentos reales de pintura corporal, danza y expresión ceremonial Rapa Nui.",
          alt: "Tākona Experience",
          open: "Abrir foto",
        };

  return (
    <main className="page">
      <h1 className="section-title">{copy.title}</h1>

      <p className="section-text">{copy.text}</p>

      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <a
            className="gallery-item"
            key={photo.id}
            href={photo.src}
            target="_blank"
            rel="noreferrer"
            aria-label={`${copy.open}: ${copy.alt}`}
          >
            <img
              src={photo.src}
              alt={copy.alt}
              loading={index < 4 ? "eager" : "lazy"}
              fetchPriority={index < 4 ? "high" : "auto"}
              decoding="async"
            />
          </a>
        ))}
      </div>
    </main>
  );
}

export default Galeria;
