import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { ProductImage } from "./ProductImage";
import { ProductDetails } from "./ProductDetails";
import { Aside } from "../Aside/Aside";

import "./Product.scss";
import "./ProductMedia.scss";

export let Product = (props) => {
  // const [prodImage, setProdImage] = useState("beats__171717");

  const [content, setContent] = useState(
    <div>
      <p className="main__product--desc">
        Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et
        mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor
        dignissim semper. Nulla luctus malesuada tincidunt. className aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Integer enim purus, posuere at ultricies eu, placerat a
        felis. Suspendisse aliquet urna pretium eros convallis interdum. Quisque
        in arcu id dui vulputate mollis eget non arcu. Aenean et nulla purus.
        Mauris vel tellus non nunc mattis lobortis.
      </p>
      <p className="main__product--desc">
        Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et
        mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        Curae.
      </p>
    </div>
  );

  let footerContent = (tab) => {
    switch (tab) {
      case "Product Information":
        setContent(
          <div>
            <p className="main__product--desc">
              Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida
              et mattis vulputate, tristique ut lectus. Sed et lorem nunc.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus
              adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada
              tincidunt. className aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Integer enim purus,
              posuere at ultricies eu, placerat a felis. Suspendisse aliquet
              urna pretium eros convallis interdum. Quisque in arcu id dui
              vulputate mollis eget non arcu. Aenean et nulla purus. Mauris vel
              tellus non nunc mattis lobortis.
            </p>
            <p className="main__product--desc">
              Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida
              et mattis vulputate, tristique ut lectus. Sed et lorem nunc.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae.
            </p>
          </div>
        );
        break;
      case "Reviews":
        setContent(
          <div>
            <p className="main__product--desc">
              Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida
              et mattis vulputate, tristique ut lectus. Sed et lorem nunc.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae;
            </p>
            <p className="main__product--desc">
              Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida
              et mattis vulputate, tristique ut lectus. Sed et lorem nunc.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae.
            </p>
          </div>
        );
        break;
      case "Another Tab":
        setContent(
          <div>
            <p className="main__product--desc">
              Integer enim purus, posuere at ultricies eu, placerat a felis.
              Suspendisse aliquet urna pretium eros convallis interdum. Quisque
              in arcu id dui vulputate mollis eget non arcu. Aenean et nulla
              purus. Mauris vel tellus non nunc mattis lobortis.
            </p>
          </div>
        );
        break;

      default:
        break;
    }
  };

  // Data
  let location = useLocation();
  let history = useHistory();
  const [product] = useState(location.state ? location.state.data : {});
  if (Object.entries(product).length === 0) history.push("/");
  return (
    <section id="main" className="main">
      <section className="wrapper">
        <section className="main__product--info">
          <section className="main__product--upper">
            {/* <ProductImage prodImage={prodImage} />
            <ProductDetails setProdImage={setProdImage} /> */}
            <ProductImage image={product.productImages} alt={product.product} />
            <ProductDetails
              key={product.id}
              id={product.id}
              image={product.image}
              product={product.name}
              price={product.price}
              discountedPrice={product.discountedPrice}
              stars={product.stars}
              hotProduct={product.hotProduct}
              quantity={product.quantity}
              favorite={product.favorite}
            />
          </section>
          <footer className="main__product--lower">
            <section className="main__product--header">
              {/* <ProductTab test='Product Information' />
                <ProductTab test='Product Information' /> */}
              <span
                onClick={() => footerContent("Product Information")}
                className="main__product--tab active"
              >
                Product Information
              </span>
              <span
                onClick={() => footerContent("Reviews")}
                className="main__product--tab"
              >
                Reviews <span>0</span>
              </span>
              <span
                onClick={() => footerContent("Another Tab")}
                className="main__product--tab"
              >
                Another tab
              </span>
            </section>
            <hr />
            {content}
          </footer>
        </section>
        <Aside />
      </section>
    </section>
  );
};
