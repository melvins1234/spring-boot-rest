import { Card } from "../Card/Card";
import { Article } from "../Middle/Article";

export const Aside = () => {
  return (
    <aside className="main__best-seller">
      <h3 className="main__best-seller__title">Best Seller</h3>
      <Card
        product={"Apple MacBook Pro"}
        discountedPrice={"499"}
        price={"599"}
        image={"macbook-pro.png"}
        stars={4}
      />
      <section className="main__best-seller--selector">
        <span></span>
        <span className="active"></span>
        <span></span>
        <span></span>
      </section>
      <footer>
        <Article
          title="GoPro Hero 6"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          price={299}
          image="GoPro.png"
          image_alt="Go Pro"
          offsetParentClassName="middle__article--bgcolorGray main__side--product"
          imageClass="main__side--image"
          className="middle__content--last main__side--content"
        />
      </footer>
    </aside>
  );
};
