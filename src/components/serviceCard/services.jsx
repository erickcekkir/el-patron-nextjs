/* eslint-disable @next/next/no-img-element */

export function ServiceCard({ title, description, images }) {
  return (
    <article className="services-article-card">
      {images.map((image) => (
        <img key={image.src} src={image.src} alt={image.alt} />
      ))}
      <div className="services-article-text-box">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
