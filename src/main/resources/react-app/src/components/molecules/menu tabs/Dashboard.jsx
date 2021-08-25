import DasboardIcon from "../../atoms/icons/Dashboard Icon/Dashboard";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <NavLink to="/dashboard">
      <span className="nav__tab">
        <DasboardIcon /> Dashboard
      </span>
    </NavLink>
  );
};

export default Dashboard;
