import { useSelector } from "react-redux";

import { BottomHeader } from "./BottomHeader";
import { Card } from "../Card/Card";

import "./Bottom.scss";
import "./BottomMedia.scss";

export const Bottom = () => {
  const productList = useSelector((state) => state.products);

  return (
    <section id="bottom1" className="bottom1">
      <section className="wrapper">
        <BottomHeader />
        <article className="bottom1__products">
          {productList.map((e) => {
            return (
              <Card
                key={e.id}
                id={e.id}
                image={e.productImages.map(e => e.image)[0]}
                product={e.name}
                price={e.price}
                discountedPrice={e.discount}
                stars={e.stars}
                hotProduct={e.hotProduct}
                quantity={e.quantity}
                favorite={e.favorite}
                data={e}
              />
            );
          })}
        </article>
        <span className="bottom1__button">Load More</span>
      </section>
    </section>
  );
};

export const BottomProduct = () => {
  return (
    <section id="bottom1" className="bottom1">
      <section className="wrapper">
        <header className="bottom1__header">
          <h2>Related Products</h2>
        </header>

        <article className="bottom1__products bottom1__products--margin">
          <Card
            product={"Apple MacBook Pro"}
            discountedPrice={"499"}
            price={"599"}
            image={"macbook-pro.png"}
            stars={4}
          />
          <Card
            product={"Apple MacBook Pro"}
            discountedPrice={"499"}
            price={"599"}
            image={"macbook-pro.png"}
            stars={4}
          />
          <Card
            product={"Apple MacBook Pro"}
            discountedPrice={"499"}
            price={"599"}
            image={"macbook-pro.png"}
            stars={4}
          />
          <Card
            product={"Apple MacBook Pro"}
            discountedPrice={"499"}
            price={"599"}
            image={"macbook-pro.png"}
            stars={4}
          />
        </article>
      </section>
    </section>
  );
};
