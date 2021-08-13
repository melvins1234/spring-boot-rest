import LogoutIcon from "../../atoms/icons/Logout Icon/Logout";
import Divider from "@material-ui/core/Divider";

const Logout = () => {
  return (
    <footer>
      <Divider />
      <a className="nav__tab">
        <LogoutIcon /> Logout
      </a>
    </footer>
  );
};

export default Logout;
