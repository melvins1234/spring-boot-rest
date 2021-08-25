import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

import "./Nav.scss";
import "./NavMedia.scss";
export const Nav = () => {
  let state = useSelector((state) => state.itemsInCart);
  const toggleNavHandler = () => {
    let nav = document.querySelector(".header__nav-bar");
    nav.classList.toggle("header__nav-bar--show");
  };
  return (
    <nav className="header__main-nav header__mobile">
      <section className="header__nav">
        <button
          onClick={toggleNavHandler}
          type="button"
          className="header__main-nav--toggle"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className="header--brand header__mobile--logo">
          <h1>
            <Link to="/">
              ONESTOP<span>TECH</span>
            </Link>
          </h1>
        </div>

        <div className="header__top--cart header__mobile--cart">
          <NavLink to="/cart">
            <FontAwesomeIcon icon={faShoppingBasket} />
            <span className="header__top--cart header__mobile--cart--badge">
              {state}
            </span>
          </NavLink>
        </div>
      </section>

      <section className="header__nav-bar">
        <ul>
          <li>
            <NavLink
              to="/"
              exact
              className="header__main-nav--home"
              activeClassName="active"
            >
              HOME
            </NavLink>
            <nav className="header__mega-menu">
              <div className="header__mega-menu__products">
                <h5>Category</h5>
                <ul>
                  <li>Airport & Wireless</li>
                  <li>AppleCare</li>
                  <li>Bags, Shells & Sleeves</li>
                  <li>Business & Security</li>
                  <li>Cable & Docs</li>
                  <li>Cameras & Video</li>
                  <li>Car & Travel</li>
                  <li>Cases & Films</li>
                </ul>
              </div>
              <div className="header__mega-menu__accessories-1">
                <h5>Category</h5>
                <ul>
                  <li>Charging Devices</li>
                  <li>Connected Home</li>
                  <li>Device Care</li>
                  <li>Display & Graphic</li>
                  <li>Fitness & Sport</li>
                  <li>Headphones</li>
                  <li>HealthKit</li>
                </ul>
              </div>
              <div className="header__mega-menu__accessories-2">
                <h5>Category</h5>
                <ul>
                  <li>Mice & Keyboards</li>
                  <li>Music Creation</li>
                  <li>Networking & Server</li>
                </ul>
              </div>
            </nav>
          </li>
          <li>
            <NavLink
              to="/store"
              className="header__main-nav--store"
              activeClassName="active"
            >
              STORE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/iphone"
              className="header__main-nav--iphone"
              activeClassName="active"
            >
              IPHONE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ipad"
              className="header__main-nav--ipad"
              activeClassName="active"
            >
              IPAD
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/macbook"
              className="header__main-nav--macbook"
              activeClassName="active"
            >
              MACBOOK
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/accessories"
              className="header__main-nav--accessories"
              activeClassName="active"
            >
              ACCESSORIES
            </NavLink>
          </li>
        </ul>
      </section>
    </nav>
  );
};
