import {
  ProductsIcon,
  ViewProductsIcon,
} from "../../atoms/icons/Products Icon/Products";
import { NavLink } from "react-router-dom";

export const Products = () => {
  return (
    <span className="nav__tab">
      <ProductsIcon /> Products
    </span>
  );
};

export const ViewProducts = ({ setOpen }) => {
  return (
    <NavLink onClick={() => setOpen(true)} to="/products">
      <span className="nav__tab">
        <ViewProductsIcon /> View
      </span>
    </NavLink>
  );
};
