import React, { useState, useEffect } from "react";

import ProductContentCard from "../ProductContentCard";
import Pagination from "../../Pagination/Pagination";

const Accessories = () => {
  const [itemsList, setItemsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    return fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setItemsList(json))
      .then(setIsLoading(false));
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = itemsList.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      {isLoading ? (
        <span className="loadering">
          <span className="loadering-inner"></span>
        </span>
      ) : (
        currentPosts.map((e, index) => {
          return (
            <ProductContentCard
              key={e.id}
              id={e.id}
              image={e.image}
              product={e.title}
              description={e.description}
              price={e.price}
              discountedPrice={e.price}
              stars={4}
              hotProduct={"bottom1__card--hot"}
              quantity={1}
            />
          );
        })
      )}
      <Pagination
        key={"Pagignation"}
        postsPerPage={postsPerPage}
        totalPosts={itemsList.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Pagination>
    </div>
  );
};

export default Accessories;
