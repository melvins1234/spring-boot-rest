import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

export const SocialMediaButton = ({ socialMedia, icon }) => {
  return (
    <span className={`sign-in__btn sign-in__btn--${socialMedia}`}>
      <i>
        <FontAwesomeIcon
          icon={icon === "faApple" ? faApple : faFacebookSquare}
        />
      </i>
      Sign In With {socialMedia}
    </span>
  );
};
