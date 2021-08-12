import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import "./Banner.scss";
import './BannerMedia.scss'

export const Banner = (key) => {
  return (
    <section key={key} id="banner" className="banner">
      <section className="wrapper banner__wrapper--flex">
        <section className="banner__content">
          <h2 className="banner__product">iPhone X</h2>
          <p className="banner__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </p>
          <NavLink to="/product" className="banner__button">
            More
          </NavLink>
        </section>

        <img
          className="banner__image"
          src={`${process.env.PUBLIC_URL}/images/iphone-banner.png`}
          alt="iphone"
        />
        <FontAwesomeIcon className='banner__icon banner__icon--left' icon={faChevronLeft}/>
        <FontAwesomeIcon className='banner__icon banner__icon--right' icon={faChevronRight}/>
      </section>
    </section>
  );
};
