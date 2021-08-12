import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faShoppingBasket,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Popover from "../../Popover/Popover";
import { previousPath } from '../../../store/action/previousPath';

export const HeaderTop = () => {
  let isLoggedIn = useSelector((state) => state.isLoggedIn);

  let state = useSelector((state) => state.itemsInCart);
  let totalPrice = useSelector((state) => state.totalPrice);
  let [showPopover, setShowPopover] = useState(false);
  let history = useHistory();

  const dispatch = useDispatch();

  return (
    <section className="header__top">
      <div className="header__top--left">
        <span>
          EN&nbsp; <FontAwesomeIcon icon={faCaretDown} />
        </span>
        <span>
          USD&nbsp; <FontAwesomeIcon icon={faCaretDown} />{" "}
        </span>
      </div>
      <div className="header__top--right">
        <div className="header__top--user-profile">
          {isLoggedIn.isLoggedIn ? (
            <section
              onMouseEnter={() => setShowPopover(true)}
              onMouseLeave={() => setShowPopover(false)}
              className="header__top--account__container"
            >
              {isLoggedIn.userLoggedIn.name}
              {showPopover ? <Popover /> : ""}
            </section>
          ) : (
            <NavLink
              to="/login"
              onClick={() => dispatch(previousPath(history.location.pathname))}
              activeClassName="active"
            >
              <FontAwesomeIcon icon={faUser} /> Log in
            </NavLink>
          )}
        </div>
        <div className="header__top--cart">
          <FontAwesomeIcon icon={faShoppingBasket} />
          <NavLink to="/cart">
            <span className="header__top--cart-items">{state} Items</span>
            <span className="header__top--cart-price">${totalPrice}</span>
          </NavLink>
        </div>
        <div className="header__top--search-icon">
          <i className="fas fa-search">
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          </i>
        </div>
      </div>
    </section>
  );
};
