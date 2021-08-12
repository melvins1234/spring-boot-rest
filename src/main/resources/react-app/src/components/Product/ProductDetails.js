import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Star } from "../Star/Star";
import { toCart } from "../../store/action/toCart-action";
import {
  quantityAdd,
  quantityDeduct,
} from "../../store/action/quantityAddDeduct";
import { favProd, unFavProd } from "../../store/action/favProd";
import AddToCartAnime from "../AddToCartAnimate/AddToCartAnime";
import { itemsInCart } from "../../store/action/itemsInCart";
import { itemsTotalInCart } from "../../store/action/itemsTotalInCart";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ProductDetails = (props) => {
  let quantity = useSelector((state) => state.quantity);

  const dispatch = useDispatch();
  const [favoriteProd, setFavoriteProd] = useState(props.favorite);

  const favProdHandler = (data) => {
    !favoriteProd ? setFavoriteProd(true) : setFavoriteProd(false);

    if (!favoriteProd) dispatch(favProd(data));
    else dispatch(unFavProd(data));
  };

  const onAddToCartHandler = (e) => {
    AddToCartAnime(
      e,
      e.target.offsetParent.querySelector("img"),
      e.target.parentElement
    );
    dispatch(toCart({ ...props, quantity: quantity }));
    dispatch(
      itemsInCart(
        JSON.parse(localStorage.getItem("cart"))
          ? JSON.parse(localStorage.getItem("cart")).length
          : 0
      )
    );
    dispatch(itemsTotalInCart(e.discountedPrice));
  };

  const onColorClick = (color) => {};

  return (
    <section className="main__product--details">
      <h3 className="main__product--title">{props.product}</h3>
      <section className="main__product--review">
        <Star star={props.stars} />
        <span className="main__product--reviews">0 Reviews</span>
        <span className="main__product--submit">Submit a review</span>
      </section>
      <hr />
      <section className="bottom1__card__footer main__product--price">
        <span className="bottom1__card__price">${props.discountedPrice}</span>
        <span className="bottom1__card__price bottom1__card__price--before">
          ${props.price}
        </span>
      </section>

      <section className="main__product--ship main__product--avail">
        <span>Availability: </span>In stock
      </section>

      <section className="main__product--ship main__product--category">
        <span>Category: </span>Accessories
      </section>

      <section className="main__product--ship main__product--shipping">
        <span>Free Shipping </span>
      </section>
      <hr />
      <section className="main__product--color">
        <span>Select Color: </span>
        <aside className="main__product--select_color">
          <span
            onClick={() => onColorClick("beats__c69692")}
            className="main__product--c69692"
          ></span>
          <span
            onClick={() => onColorClick("beats__d73181")}
            className="main__product--d73181"
          ></span>
          <span
            onClick={() => onColorClick("beats__eb4837")}
            className="main__product--eb4837"
          ></span>
          <span
            onClick={() => onColorClick("beats__171717")}
            className="main__product--171717"
          ></span>
          <span
            onClick={() => onColorClick("beats__dbdbdb")}
            className="main__product--dbdbdb"
          ></span>
        </aside>
      </section>

      <section className="main__product--ship main__product--size">
        <span>Size </span>
        <span className="main__product--sizes">
          XS <i className="fas fa-caret-down"></i>
        </span>
      </section>

      <hr />

      <section className="main__product--bottom">
        <section className="cart-section__table-row--qty main__product--quantity">
          <button
            onClick={() => dispatch(quantityDeduct())}
            className="cart-section__table-row--qty--minus-btn"
            id="prod_qty-minus-btn"
          >
            -
          </button>
          <div className="cart-section__table-row--qty--number">{quantity}</div>
          <button
            onClick={() => dispatch(quantityAdd())}
            className="cart-section__table-row--qty--plus-btn"
            id="prod_qty-plus-btn"
          >
            +
          </button>
        </section>

        <section className="main__product--cart">
          <span
            onClick={(e) => {
              onAddToCartHandler(e);
            }}
            className="main__product--add-to-cart"
          >
            <i className="fas fa-shopping-cart">
              <FontAwesomeIcon icon={faShoppingCart} />
            </i>
            Add to Cart
          </span>
          <i
            onClick={() => favProdHandler(props)}
            className={`far fa-heart main__product--heart ${
              favoriteProd ? "fave" : ""
            }`}
          >
            <FontAwesomeIcon icon={faHeart} />
          </i>
        </section>
      </section>

      <hr />

      <section className="main__product--social-media">
        <a href="index.html" className="main__product--facebook">
          <i className="fab fa-facebook-f"></i>Share on Facebook
        </a>
        <a href="index.html" className="main__product--twitter">
          <i className="fab fa-twitter"></i>Share on Twitter
        </a>
      </section>
    </section>
  );
};
