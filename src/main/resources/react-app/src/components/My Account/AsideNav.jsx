import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";

const AsideNav = () => {
  return (
    <aside className="myaccount--sidebar-nav">
      <nav className="myaccount--nav">
        <ul>
          <li className="myaccount--tab--active">
            <AccountCircleOutlinedIcon /> My Details
          </li>
          <li>
            <LocalMallOutlinedIcon /> My Orders
          </li>
          <li>
            <SettingsOutlinedIcon /> Password and Security
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AsideNav;
