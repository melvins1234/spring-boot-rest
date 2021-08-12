export const ProductImage = (props) => {
  const addDefaultSrc = (e) => {
    e.target.src = props.image;
  };
  return (
    <section className="main__product--image">
      <img
        onError={(e) => addDefaultSrc(e)}
        src={`/images/${props.image}`}
        alt={props.alt}
      />
      <footer className="main__product--thumbnail">
        {/* <img src= {`${process.env.PUBLIC_URL}/images/${prodImage}_thumb_1.png`} alt="Beat Solo 2 on Ear Headphones - Black" />
                <img src= {`${process.env.PUBLIC_URL}/images/${prodImage}_thumb_2.png`} alt="Beat Solo 2 on Ear Headphones - Black" />
                <img src= {`${process.env.PUBLIC_URL}/images/${prodImage}_thumb_3.png`} alt="Beat Solo 2 on Ear Headphones - Black" />
                <img src= {`${process.env.PUBLIC_URL}/images/${prodImage}_thumb_4.png`} alt="Beat Solo 2 on Ear Headphones - Black" /> */}
      </footer>
    </section>
  );
};
