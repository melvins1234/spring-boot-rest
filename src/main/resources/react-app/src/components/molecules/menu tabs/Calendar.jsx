import { NavLink } from "react-router-dom";
import CalendarIcon from "../../atoms/icons/Calendar Icon/Calendar";

const Calendar = () => {
  return (
    <NavLink to="/dashboard" className="nav__tab">
      <CalendarIcon /> Calendar
    </NavLink>
  );
};

export default Calendar;
