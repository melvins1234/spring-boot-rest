import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { isLoggedOut } from "../../store/action/isLoggedIn";
import "./Popover.scss";

const Popover = () => {
  const isExist = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  return (
    <section className="popover">
      <ul>
        {isExist && isExist.userLoggedIn.roles === "ADMIN" ? (
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        ) : null}
        <li>
          <NavLink to="/my-account">My Account</NavLink>
        </li>
        <li><span onClick={() => dispatch(isLoggedOut())}>Logout</span></li>
      </ul>
    </section>
  );
};

export default Popover;
