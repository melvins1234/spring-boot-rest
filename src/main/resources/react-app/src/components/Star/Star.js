import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import './Star.scss'

export const Star = ({ star }) => {
  let stars = [];

  for (let index = 1; index <= 5; index++) {
    if (index <= star)
      stars.push(
        <i key={index} className="bottom1__card__star">
          <FontAwesomeIcon icon={faStar} />
        </i>
      );
    else
      stars.push(
        <i
          key={index}
          className="bottom1__card__star bottom1__card__star--disable"
        >
          <FontAwesomeIcon icon={faStar} />
        </i>
      );
  }
  return stars;
};
