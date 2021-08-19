import ProductsIcon from "../../atoms/icons/Products Icon/Products";
import { NavLink } from "react-router-dom";

const Products = () => {
  return (
    <NavLink to="/products">
      <span className="nav__tab">
        <ProductsIcon /> Products
      </span>
    </NavLink>
  );
};

export default Products;
