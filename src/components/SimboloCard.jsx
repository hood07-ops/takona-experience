function SimboloCard({ title, image, description }) {
  return (
    <article className="identity-card">
      <img src={image} alt={title} />

      <div className="identity-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default SimboloCard;