import NavHeader from "../../molecules/nav header/NavHeader"
import Dashboard from "../../molecules/menu tabs/Dashboard";
import Products from "../../molecules/menu tabs/Products";
import UserManagement from "../../molecules/menu tabs/UserManagement";
import Calendar from "../../molecules/menu tabs/Calendar";
import Messages from "../../molecules/menu tabs/Messages";
import Payments from "../../molecules/menu tabs/Payments";
import Logout from "../../molecules/menu tabs/Logout";
import Divider from "@material-ui/core/Divider";

import "./style.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li><NavHeader /> <Divider /></li>
        <li>
          <Dashboard />
        </li>
        <li>
          <Products />
        </li>
        <li>
          <UserManagement />
        </li>
        <li>
          <Calendar />
        </li>
        <li>
          <Messages />
        </li>
        <li>
          <Payments />
        </li>
      </ul>

      <Logout />
    </nav>
  );
};

export default Navbar;
