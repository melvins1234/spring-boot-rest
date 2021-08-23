import React from "react";
import { useSelector } from "react-redux";

import ProductContentCard from "../ProductContentCard";

const Store = () => {
  const productList = useSelector((state) => state.products);
  console.log(productList)
  return (
    <div>
      {productList.map((e) => {
        return (
          <ProductContentCard
            key={e.id}
            id={e.id}
            image={e.productImages.map((e) => e.image)[
              Math.floor(Math.random() * (e.productImages.length - 0) + 0)
            ]}
            product={e.name}
            description={e.description}
            price={e.price}
            discountedPrice={e.price}
            stars={Math.floor(Math.random() * (5 - 0) + 1)}
            hotProduct={e.hotProduct}
            quantity={e.quantity}
            favorite={e.favorite}
          />
        );
      })}
    </div>
  );
};

export default Store;
