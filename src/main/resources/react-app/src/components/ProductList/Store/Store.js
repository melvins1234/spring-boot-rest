import React from "react";
import { useSelector } from "react-redux";

import ProductContentCard from "../ProductContentCard";

const Store = () => {
  const productList = useSelector((state) => state.products);
  return (
    <div>
      {productList.map((e) => {
        return (
          <ProductContentCard
            key={e.id}
            id={e.id}
            image={e.image}
            product={e.product}
            description={e.description}
            price={e.price}
            discountedPrice={e.discount}
            stars={e.stars}
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
