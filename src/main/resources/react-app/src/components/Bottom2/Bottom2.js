import { NavLink } from "react-router-dom";
import "./Bottom2.scss";
import "./Bottom2Media.scss";
export const Bottom2 = () => {
  return (
    <section id="bottom2" className="bottom2">
      <section className="wrapper">
        <section className="bottom2__content">
          <h2 className="bottom2__product">iPhone 6 Plus</h2>
          <p className="bottom2__description">
            Performance and design. Taken right to the edge.
          </p>
          <NavLink to="/product" className="bottom2__button">
            Shop Now
          </NavLink>
        </section>
        <img
          className="bottom2__image"
          src={`${process.env.PUBLIC_URL}/images/iPhone6_Big.png`}
          alt="iphone"
        />
      </section>
    </section>
  );
};
