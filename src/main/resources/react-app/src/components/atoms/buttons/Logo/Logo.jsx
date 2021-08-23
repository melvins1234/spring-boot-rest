import { NavLink } from "react-router-dom";
import "./style.scss";

const Logo = () => {
  return (
    <h1 className="header--logo">
      <NavLink to="/">
        RAKU<span className="header--logo--red">TECH</span> ADMIN
      </NavLink>
    </h1>
  );
};

export default Logo;
