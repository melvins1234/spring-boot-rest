export const ProductImage = (props) => {
  const addDefaultSrc = (e) => {
    e.target.src = props.image[0].image;
  };
  return (
    <section className="main__product--image">
      <img
        onError={(e) => addDefaultSrc(e)}
        src={props.image[0].image}
        alt={props.alt}
      />
      <footer className="main__product--thumbnail">
        {props.image.length > 1
          ? props.image.map((e, index) => {
              return (
                <img 
                  key={index}
                  src={`${e.image}`}
                  alt={props.alt}
                />
              );
            })
          : ""}
      </footer>
    </section>
  );
};
