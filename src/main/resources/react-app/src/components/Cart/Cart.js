import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { checkOutProduct } from "../../store/action/toCart-action";
import { CartList } from "./CartList";
import { previousPath } from "../../store/action/previousPath";
import { itemsInCart } from "../../store/action/itemsInCart";
import { itemsTotalInCart } from "../../store/action/itemsTotalInCart";

import "./Cart.scss";

export const Cart = () => {
  let history = useHistory();
  const products = useSelector((state) => state.cart);
  let totalPrice = useSelector((state) => state.totalPrice);
  let isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();

  let checkOutHandler = () => {
    if (isLoggedIn) {
      localStorage.removeItem("cart");
      dispatch(checkOutProduct());
      dispatch(itemsInCart(0));
      dispatch(itemsTotalInCart(0));
      // history.push('/payment')
    } else {
      dispatch(previousPath(history.location.pathname));
      history.push("/login");
    }
  };

  let cartList = products.map((e) => {
    return (
      <CartList
        key={JSON.stringify(e)}
        id={e.id}
        image={e.image}
        product={e.product}
        price={e.price}
        discountedPrice={e.discountedPrice}
        stars={e.stars}
        hotProduct={e.hotProduct}
        quantity={e.quantity}
      />
    );
  });

  return (
    <section className="cart-section wrapper">
      <div className="cart-section__table-header">
        <div className="cart-section__table-header--product">PRODUCT</div>
        <div className="cart-section__table-header--unit-price">UNIT PRICE</div>
        <div className="cart-section__table-header--qty">QTY</div>
        <div className="cart-section__table-header--price">PRICE</div>
      </div>
      <div className="cart-section__product-list">
        {cartList.length !== 0 ? (
          cartList
        ) : (
          <span className="cart-section--empty">Your cart is empty</span>
        )}
      </div>

      <div className="cart-section__bottom">
        <div className="cart-section__bottom__voucher">
          <input type="text" defaultValue="Voucher code" />
          <button className="cart-section__bottom__voucher--redeem-btn">
            Redeem
          </button>
        </div>
        <div className="cart-section__bottom__total-table">
          <div className="cart-section__bottom__total-table--subtotal">
            <span>Subtotal</span>
            <span id="cart-section__subtotal">$ {totalPrice}</span>
          </div>
          <div className="cart-section__bottom__total-table--shipping-fee">
            <span>Shipping fee</span>
            <span id="cart-section__shipping">$ 20.00</span>
          </div>
          <div className="cart-section__bottom__total-table--coupon">
            <span>Coupon</span>
            <span>No</span>
          </div>
          <div className="cart-section__bottom__total-table--total">
            <span>Total</span>
            <span id="cart-section__total">
              $ {(parseFloat(totalPrice) + 20).toFixed(2)}
            </span>
          </div>
          <div className="cart-section__bottom__total-table--check-out">
            <button
              onClick={() => checkOutHandler()}
              className="cart-section__bottom__total-table--check-out--btn"
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
