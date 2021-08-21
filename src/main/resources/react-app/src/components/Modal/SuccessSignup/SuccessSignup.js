import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "../Modal.scss";

export const SuccessSignup = ({className}) => {
  return (
    <section id="modal" className={`modal successful-registered ${className}`} aria-hidden="true">
      <section className="successful-registered__box">
        <article className="successful-registered__content">
          <span className="successful-registered__icon">
            <i><FontAwesomeIcon icon={faCheck}/></i>
          </span>
          <h3 className="modal__title successful-registered__title">Awesome!</h3>
          <p className="modal__description successful-registered__description">
            Your account has successfully registered. Check your email for
            details
          </p>
          <footer className="successful-registered__footer">
            <button id="successful-registered__success" className="successful-registered__success" data-dismiss="modal">
              OK
            </button>
          </footer>
        </article>
      </section>
    </section>
  );
};
