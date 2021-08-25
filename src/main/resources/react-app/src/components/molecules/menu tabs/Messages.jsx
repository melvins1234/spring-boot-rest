import { NavLink } from "react-router-dom";
import MessageIcon from "../../atoms/icons/Message Icon/Message";

const Messages = () => {
  return (
    <NavLink to="/dashboard" className="nav__tab">
      <MessageIcon /> Messages
    </NavLink>
  );
};

export default Messages;
