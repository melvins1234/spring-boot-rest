import {Star} from '../Star/Star'

export const UpperCard = ({ image, imageAlt, date, title, desc }) => {
  return (
    <article className="bottom4__news__box">
      <img
        src={`${process.env.PUBLIC_URL}/images/${image}`}
        alt={`${imageAlt}`}
        className="bottom4__news__image"
      />
      <div className="bottom4__news__holder">
        <span className="bottom4__news__date">{date}</span>
        <h4 className="bottom4__news__title">{title}</h4>
        <p className="bottom4__news__content">{desc}</p>
      </div>
    </article>
  );
};

export const LowerCard = ({ image, title, star, price }) => {
  const addDefaultSrc = (e)=> {
    e.target.src = image
  }
  
  return (
    <article className="bottom4__news__box">
      <img
        onError={(e) => addDefaultSrc(e)}
        src={`${process.env.PUBLIC_URL}/images/${image}`}
        alt={`${title}`}
      />
      <div className="bottom4__news__holder">
        <h4 className="bottom4__news__title bottom4__news__title--font">
          {title}
        </h4>
        <Star star={star}/>
        <footer className="bottom1__card__footer">
          <span className="bottom1__card__price">{`$${price}`}</span>
          <span className="bottom1__card__price bottom1__card__price--before">
            {`$${(parseInt(price) + 100)}`}
          </span>
        </footer>
      </div>
    </article>
  );
};
