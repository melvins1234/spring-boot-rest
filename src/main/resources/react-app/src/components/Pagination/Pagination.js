import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import "./Pagination.scss";

const Pagination = ({
  postsPerPage,
  totalPosts,
  setCurrentPage,
  currentPage,
  className,
}) => {
  let pageNumbers = [];

  for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage); index++) {
    pageNumbers.push(index);
  }

  const pageCLickHandler = (page) => {
    setCurrentPage(page);
  };

  return (
    <nav
      className={`product-listing__products__pagination ${
        className != "" ? className : ""
      }`}
    >
      <ol>
        <li>
          <span onClick={() => pageCLickHandler(currentPage-=1)} className={currentPage <= 1 ? 'prev-disable' : null}>
            <ArrowBackIosIcon />
          </span>
        </li>
        {pageNumbers.map((page) => { console.log(page); return (
          <li key={page}>
            <span
              onClick={() => pageCLickHandler(page)}
              className={page === currentPage ? "active" : null}
            >
              {page}
            </span>
          </li>
        ) })}
        <li>
          <span onClick={() => pageCLickHandler(currentPage+=1)} className={pageNumbers[pageNumbers.length - 1] === currentPage ? 'prev-disable' : null}>
            <ArrowForwardIosIcon />
          </span>
        </li>
      </ol>
    </nav>
  );
};

export default Pagination;
