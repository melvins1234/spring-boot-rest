export const Article = ({
  title,
  image,
  description,
  price,
  image_alt,
  offsetParentClassName,
  imageClass,
  className,
}) => {
  
  return (
    <article className={`middle__article ${offsetParentClassName}`}>
      <section className={`middle__content ${className}`}>
        <h3 className="middle__title">{title}</h3>
        <p className="middle__description">{description}</p>
        <span className="middle__price">${price}</span>
      </section>
      <img
        src={`${process.env.PUBLIC_URL}/images/${image}`}
        alt={image_alt}
        className={`middle__image ${imageClass}`}
      />
    </article>
  );
};
