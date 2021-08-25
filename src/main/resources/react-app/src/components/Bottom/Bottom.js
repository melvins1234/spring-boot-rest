import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { BottomHeader } from "./BottomHeader";
import { ErrorFetchHandler } from "../ErrorFetchHandler/ErrorFetchHandler";
import { Card } from "../Card/Card";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
                quantity={1}
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

export const BottomProduct = (props) => {
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

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    customTable: {
      breakpoint: { max: 1024, min: 600 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 600, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section id="bottom1" className="bottom1">
      <section className="wrapper">
        <header className="bottom1__header">
          <h2>Related Products</h2>
        </header>
        <Carousel
          swipeable={false}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          // customTransition="all .5"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className='carousel--bottom'
        >
          {relatedProduct.map((e) => {
            return (
              <Card
                style={{ margin: "0 auto 30px" }}
                draggable={false}
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
                quantity={1}
                favorite={e.favorite}
                data={e}
              />
            );
          })}
        </Carousel>
        <article className="bottom1__products bottom1__products--margin">
          
        </article>
      </section>
    </section>
  );
};
