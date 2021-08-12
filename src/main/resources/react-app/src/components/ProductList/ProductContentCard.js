import { Route, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

import { toCart } from "../../store/action/toCart-action";
import { itemsInCart } from "../../store/action/itemsInCart";
import { itemsTotalInCart } from "../../store/action/itemsTotalInCart";
import { favProd, unFavProd } from "../../store/action/favProd";
import AddToCartAnime from "../AddToCartAnimate/AddToCartAnime";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Star } from "../Star/Star";

const ProductContentCard = (props) => {
  const [favoriteProd, setFavoriteProd] = useState(props.favorite);

  const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const favProdHandler = (data) => {
    !favoriteProd ? setFavoriteProd(true) : setFavoriteProd(false);

    if (!favoriteProd) dispatch(favProd(data));
    else dispatch(unFavProd(data));
  };

  let dispatch = useDispatch();
  const addToCartHandler = (data) => {
    dispatch(toCart(data));
    dispatch(
      itemsInCart(
        JSON.parse(localStorage.getItem("cart"))
          ? JSON.parse(localStorage.getItem("cart")).length
          : 0
      )
    );
    dispatch(itemsTotalInCart());
  };


  return (
    <section className="product-listing__products__card">
      <NavLink
        className="product-listing__products__card--link"
        to={{ pathname: "/product", state: { data: props } }}
      />
      <section className="product-listing__products__card--image">
        <span>HOT</span>
        <Route path="/store">
          <img
            src={`${props.image}`}
            // src={props.image}
            alt={props.product}
          />
        </Route>
        <Route path="/accessories">
          <img src={props.image} alt={props.product} />
        </Route>
      </section>
      <section className="product-listing__products__card__details">
        <h3 className="product-listing__products__card__details--title">
          {props.product}
        </h3>
        <section className="product-listing__products__card__details--review">
          <Star star="4" />
          <span>0 Reviews</span>
          <span className="main__product--submit">Submit a review</span>
        </section>
        <hr />
        <span className="product-listing__products__card__details--price">
          ${props.discountedPrice}
          <span className="product-listing__products__card__details--price--before">
            ${props.price}
          </span>
        </span>
        <p>{truncate(props.description, 150)}</p>
        <footer>
          <button
            onClick={(e) => {
              AddToCartAnime(
                e,
                e.target.offsetParent.querySelector("img"),
                e.target.offsetParent
              );
              addToCartHandler(props);
            }}
            id="product-listing--add-to-cart-btn"
          >
            <i>
              <FontAwesomeIcon icon={faShoppingCart} />
            </i>
            Add to Cart
          </button>

          <button
            onClick={() => favProdHandler(props)}
            id="product-listing--like-btn"
            className={favoriteProd ? "fave" : ""}
          >
            <i className="far fa-heart">
              <FontAwesomeIcon icon={faHeart} />
            </i>
          </button>
        </footer>
      </section>
    </section>
  );
};

export default ProductContentCard;
