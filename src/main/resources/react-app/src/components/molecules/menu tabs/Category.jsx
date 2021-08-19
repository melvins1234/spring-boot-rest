import CategoryIcon from "../../atoms/icons/Category Icon/Category";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <NavLink to="/categories">
      <span className="nav__tab">
        <CategoryIcon /> Category
      </span>
    </NavLink>
  );
};

export default Category;
