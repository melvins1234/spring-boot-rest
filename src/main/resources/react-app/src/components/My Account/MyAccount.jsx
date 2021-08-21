import { useSelector } from "react-redux";

import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";

import "./style.scss";

const MyAccount = () => {
    const userInformation = useSelector(state => state.isLoggedIn.userLoggedIn)
    console.log(userInformation)
  return (
    <section className="myaccount">
      <div className="wrapper">
        <h2 className="myaccount--title-page">My Account</h2>
        <section className="myaccount--content">
          <aside className="myaccount--sidebar-nav">
            <nav className="myaccount--nav">
              <ul>
                <li className="myaccount--tab--active">
                  <AccountCircleOutlinedIcon /> My Details
                </li>
                <li>
                  <RoomOutlinedIcon /> My Address
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
          <aside className="myaccount--content-form">
            <h3 className="myaccount--content-form--title-page">My Details</h3>
            <section className="myaccount--content-form--header">
              <section className="myaccount-content-form--avatar">
                <span>Avatar</span>
              </section>
            </section>
          </aside>
        </section>
      </div>
    </section>
  );
};

export default MyAccount;
