import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { toCart } from "../../store/action/toCart-action";
import { itemsInCart } from "../../store/action/itemsInCart";
import { favProd, unFavProd } from "../../store/action/favProd";
import { itemsTotalInCart } from "../../store/action/itemsTotalInCart";
import AddToCartAnime from "../AddToCartAnimate/AddToCartAnime";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingCart,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

import { Star } from "../Star/Star";

import "./Card.scss";

export const Card = (props) => {
  let dispatch = useDispatch();
  const [addToCart, setAddToCart] = useState(false);
  const [favoriteProd, setFavoriteProd] = useState(props.favorite);

  const addToCartHandler = (data) => {
    setAddToCart(true);
    dispatch(toCart(data));
    dispatch(itemsInCart());

    dispatch(itemsTotalInCart(data.discountedPrice));
  };

  const favProdHandler = (data) => {
    !favoriteProd ? setFavoriteProd(true) : setFavoriteProd(false);

    if (!favoriteProd) dispatch(favProd(data));
    else dispatch(unFavProd(data));
  };

  return (
    <div key={props.product} className={`bottom1__card ${props.hotProduct}`} style={props.style}>
      <NavLink
        className="bottom1__card__back--link"
        to={{ pathname: "/product", state: { data: props.data, stars: props.stars } }}
      ></NavLink>
      <div className="bottom1__card__flip">
        <div className="bottom1__card__inner">
          <div className="bottom1__card__front">
            <img
              src={`${props.image}`}
              alt={props.product}
            />
          </div>
          <div className="bottom1__card__back">
            <section className="bottom1__card__favCart">
              <span
                onClick={() => favProdHandler(props)}
                className={`bottom1__card__add-to-cart ${
                  favoriteProd ? "fave" : ""
                }`}
              >
                <FontAwesomeIcon icon={faHeart} />
              </span>
              <span
                onClick={(e) => {
                  AddToCartAnime(
                    e,
                    e.target.offsetParent.offsetParent.previousSibling.querySelector(
                      "img"
                    ),
                    e.target.offsetParent.offsetParent.offsetParent
                      .parentElement.parentElement
                  );
                  addToCartHandler(props);
                }}
                className="bottom1__card__add-to-cart"
              >
                <FontAwesomeIcon icon={addToCart ? faCheck : faShoppingCart} />
              </span>
            </section>
          </div>
        </div>
      </div>
      <h3 className="bottom1__card__title">
        {props.product}
        <span>{props.minidesc}</span>
      </h3>
      <Star star={props.stars} />
      <footer className="bottom1__card__footer">
        <span className="bottom1__card__price">${props.price}</span>
        <span className="bottom1__card__price bottom1__card__price--before">
          ${props.discountedPrice}
        </span>
      </footer>
    </div>
  );
};
