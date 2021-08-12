import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const FooterNav = ({ title, nav }) => {
  let [toggle, setToggle] = useState(false);
  const showToggleHandler = (e) => {
    if (
      e.target.className.split(" ").indexOf("footer__middle--site-map") > -1
    ) {
      e.target.querySelector("ul").classList.toggle("footer__nav--show");
      setToggle(!toggle)
    }
  };

  let menuTab = [];
  nav.forEach((e) => {
    menuTab.push(<li key={e}>{e}</li>);
  });

  return (
    <div
      onClick={(e) => showToggleHandler(e)}
      className="footer__middle--site-map"
    >
      <h5 className="footer--heading">
        {title}
        <i>
          <FontAwesomeIcon icon={toggle ? faMinus : faPlus} />
        </i>
      </h5>
      <ul>{menuTab}</ul>
    </div>
  );
};
