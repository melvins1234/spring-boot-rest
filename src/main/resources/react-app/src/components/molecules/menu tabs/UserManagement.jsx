import UsersIcon from "../../atoms/icons/Users Management Icon/UserManagement";
import { NavLink } from "react-router-dom";

const UserManagement = () => {
  return (
    <NavLink to="/users">
      <span className="nav__tab">
        <UsersIcon /> Users
      </span>
    </NavLink>
  );
};

export default UserManagement;
