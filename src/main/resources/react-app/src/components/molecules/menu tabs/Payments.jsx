import PaymentIcon from "../../atoms/icons/Payment Icon/Payment";
import { NavLink } from "react-router-dom";

const Payments = () => {
  return (
    <NavLink to="/dashboard" className="nav__tab">
      <PaymentIcon /> Payments
    </NavLink>
  );
};

export default Payments;
