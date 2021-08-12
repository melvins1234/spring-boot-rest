import React from "react";

import './Pagination.scss';

const Pagination = ({ postsPerPage, totalPosts, setCurrentPage, currentPage }) => {
  let pageNumbers = [];

  for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage); index++) {
    pageNumbers.push(index);
  }

  const pageCLickHandler = (page) => {
    setCurrentPage(page);
  }

  return (
    <nav className="product-listing__products__pagination">
      <ol>
        {pageNumbers.map(page => (
            <li key={page}><span onClick={() => pageCLickHandler(page)} className={(page === currentPage) ? 'active' : null}>{page}</span></li>
        ))}
      </ol>
    </nav>
  );
};

export default Pagination;
