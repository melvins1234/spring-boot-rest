import LogoutIcon from "../../atoms/icons/Logout Icon/Logout";

const Logout = () => {
  return (
    <footer>
      <span
        onClick={() => {
          localStorage.clear();
          window.location.href = "/";
        }}
        className="nav__tab"
      >
        <LogoutIcon /> Logout
      </span>
    </footer>
  );
};

export default Logout;
