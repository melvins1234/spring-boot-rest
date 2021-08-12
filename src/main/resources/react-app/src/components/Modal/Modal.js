import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Input } from "../InputField/InputField";

import "./Modal.scss";
import "./ModalMedia.scss";

export const Modal = ({setShowModal}) => {

  const modalClose = (that) => {
    setShowModal(that);
    sessionStorage.setItem('isModalClose', false);
  };

  return (
    // ${(showModal) ? '' : 'hide-modal'}
    <section key={setShowModal} id="modal" className={`modal`}>
      <section className="modal__box">
        <span onClick={() => modalClose(false)} className="modal__close">
          <i className="fas fa-times">
            <FontAwesomeIcon icon={faTimes} />
          </i>
        </span>
        <article className="modal__content">
          <article className="modal__content--inner">
            <h3 className="modal__title">Newsletter</h3>
            <p className="modal__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <section className="bottom4__search modal__sub">
              <Input
                field={{ _uid: "Email__", label: "Email" }}
                type="email"
                required=""
                placeholder="Email"
              ></Input>
              <span className="bottom4__btn">Subscribe</span>
            </section>
          </article>
          <footer className="modal__unsub">
            <input
              type="checkbox"
              name="pop-up"
              id="pop-up"
              className="modal__checkbox"
            />
            <label htmlFor="pop-up" className="modal__label">
              Don’t show this popup again
            </label>
          </footer>
        </article>

        <img
          className="modal__img"
          src="images/newsletter-img.png"
          alt="Gift"
        />
      </section>
    </section>
  );
};
