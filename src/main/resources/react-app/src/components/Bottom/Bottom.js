import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { BottomHeader } from "./BottomHeader";
import { ErrorFetchHandler } from "../ErrorFetchHandler/ErrorFetchHandler";
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
                image={
                  e.productImages.map((e) => e.image)[
                    Math.floor(Math.random() * (e.productImages.length - 0) + 0)
                  ]
                }
                product={e.name}
                price={e.price}
                discountedPrice={e.price}
                stars={Math.floor(Math.random() * (5 - 0) + 1)}
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
  let location = useLocation();
  const [product] = useState(location.state ? location.state.data : {});
  const [relatedProduct, setRelatedProduct] = useState([]);
  const category = product.categories[0].name;
  useEffect(() => {
    fetch(`/api/products/categories/${category}`)
      .then(ErrorFetchHandler)
      .then((json) => setRelatedProduct(json));
    return;
  }, []);
  console.log(relatedProduct);
  return (
    <section id="bottom1" className="bottom1">
      <section className="wrapper">
        <header className="bottom1__header">
          <h2>Related Products</h2>
        </header>

        <article className="bottom1__products bottom1__products--margin">
          {relatedProduct.map((e) => {
            return(<Card
              key={e.id}
              id={e.id}
              image={
                e.productImages.map((e) => e.image)[
                  Math.floor(Math.random() * (e.productImages.length - 0) + 0)
                ]
              }
              product={e.name}
              price={e.price}
              discountedPrice={e.price}
              stars={Math.floor(Math.random() * (5 - 0) + 1)}
              hotProduct={e.hotProduct}
              quantity={e.quantity}
              favorite={e.favorite}
              data={e}
            />)
          })}

          {/* <Card
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
          /> */}
        </article>
      </section>
    </section>
  );
};
