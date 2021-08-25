export const ProductListBanner = () => {
  return (
    <section
      id="product-listing__products__featured"
      className="product-listing__products__featured"
    >
      <section className="product-listing__products__featured__text">
        <h2 className="">iPhone 8</h2>
        <p className="">Performance and design. Taken right to the edge.</p>
        <span className="product-listing__products__featured__text--link">
          Shop Now
        </span>
      </section>

      <img
        className="product-listing__products__featured--img"
        src="images/iPhone6_Big.png"
        alt="iphone"
      />
    </section>
  );
};
