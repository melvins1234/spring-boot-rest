import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  useHistory,
} from "react-router-dom";
import { useSelector } from "react-redux";

import SignUpForm from "./Form/SignUpForm";
import SignInForm from "./Form/SignInForm";
import { SuccessSignup } from "../Modal/SuccessSignup/SuccessSignup";
import { BackDrop } from "../BackDrop/BackDrop";
import { SocialMediaButton } from "./SocialMediaButton/SocialMediaButton";
import { Header } from "./Header/Header";

import "./SignIn.scss";
import "./SignInMedia.scss";

export const SignIn = () => {
  let history = useHistory();
  let path = useSelector((state) => state.path);
  let [successSignUp, setSuccessSignUp] = useState(false);
  const isExist = useSelector((state) => state.isLoggedIn);
  if (isExist) {
    setTimeout(() => {
      isExist.userLoggedIn.roles === "ADMIN"
        ? history.push("/dashboard")
        : history.push(path);
    }, 200);
  }
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (
        e.target.id === "email" &&
        document.querySelector(".sign-up__invalid-feedback")
      ) {
        e.target.parentElement.classList.toggle("sign-up__input-group--error");
        e.target.style.border = "1px solid #C4C4C4";
        document.querySelector(".sign-up__invalid-feedback").remove();
      } else if (e.target.id === "modal") {
        setSuccessSignUp(false);
      } else if (e.target.id === "successful-registered__success") {
        setSuccessSignUp(false);
      }
    });
  });

  return (
    <section>
      {successSignUp ? (
        <section>
          <SuccessSignup
            className={"successful-registered--show"}
          ></SuccessSignup>
          <BackDrop></BackDrop>
        </section>
      ) : (
        ""
      )}
      <section
        className="sign-up sign-in"
        style={{
          background: `url(${process.env.PUBLIC_URL}/images/sign-up-bg.png) center center`,
        }}
      >
        <section className="sign-up__wrapper wrapper">
          <section className="sign-up__description">
            <h1 className="sign-up__company-name">
              <NavLink to="/">
                ONESTOP
                <span className="sign-up__company-name--color">TECH</span>
              </NavLink>
            </h1>
            <p className="sign-up__company-desc">
              Browse from over 500 devices in your area.
            </p>
          </section>
          <Router>
            <section className="sign-up__section">
              <Route path="/signup">
                <header className="sign-up__header">
                  <Header title="Sign Up" />
                  <span className="sign-up__header--text">
                    Already have an account?
                    <NavLink to="/login" className="sign-up__header--link">
                      Log in
                    </NavLink>
                  </span>
                </header>

                <SignUpForm setSuccessSignUp={setSuccessSignUp} />
              </Route>

              <Route path="/login">
                <header className="sign-up__header">
                  <Header title="Sign In" />
                  <SocialMediaButton socialMedia="apple" icon="faApple" />
                  <SocialMediaButton
                    socialMedia="facebook"
                    icon="faFacebookSquare"
                  />
                </header>
                <span className="sign-in__separate">OR</span>
                <SignInForm />
              </Route>

              <footer className="sign-up__footer">
                <span className="sign-up__footer--text">
                  By continuing, you agree to accept our Privacy Policy & Terms
                  of Service.
                </span>
                <Route path="/login">
                  <span className="sign-up__footer--text sign-up__footer__create-acc">
                    Don't have an account?{" "}
                    <NavLink to="/signup">Create new account</NavLink>
                  </span>
                </Route>
              </footer>
            </section>
          </Router>
        </section>
      </section>
    </section>
  );
};
