export const Card = ({ image, imageAlt, title, desc }) => {
  return (
    <article className="bottom3__box">
      <img
        src={`${process.env.PUBLIC_URL}/images/${image}`}
        alt={`${imageAlt}`}
        className="bottom3__icon"
      />
      <h3 className="bottom3__title">{title}</h3>
      <p className="bottom3__content">{desc}</p>
    </article>
  );
};
