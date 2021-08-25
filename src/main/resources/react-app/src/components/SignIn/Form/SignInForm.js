import { useDispatch } from "react-redux";
import { isLoggedIn } from "../../../store/action/isLoggedIn";
import { Input, Button } from "../../InputField/InputField";
import { EmailFieldErrorMessage } from "./EmailFieldErrorMessage";
import { token } from "../../../store/action/token";
import { loadUser } from "../../../store/action/addUser";

const SignInForm = () => {
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();

    let data = Object.fromEntries(new FormData(e.target).entries());

    let details = {
      email: data.email,
      password: data.password,
    };

    let formBody = Object.keys(details)
      .map((e) => `${encodeURIComponent(e)}=${encodeURIComponent(details[e])}`)
      .join("&");

    fetch(`/api/user/${data.email}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      // Check email if exist in database
      console.log(res.status === 200)
      if (res.status === 200) {
        fetch("/auth", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
          },
          body: formBody,
        })
          .then((res) => res.json())
          .then((json) => {
            if (json.token !== null) { 
              dispatch(isLoggedIn(json));
              dispatch(token(json.token));

              if (json.roles === "ADMIN") {
                fetch("api/users", {
                  method: "GET",
                  headers: new Headers({
                    Authorization: json.token,
                    "Content-Type": "application/x-www-form-urlencoded",
                  }),
                })
                  .then((res) => res.json())
                  .then((json) => dispatch(loadUser(json)));
              }
            } else EmailFieldErrorMessage(e, `Incorrect Password`,`password`);
          });
      } else {EmailFieldErrorMessage(e, `This email address doesn't exist.`, `email`);}
    });
  };

  return (
    <section className="sign-up__form" onSubmit={onSubmit}>
      <form id="login-submit">
        <Input
          field={{ _uid: "email", label: "Email" }}
          type="email"
          required="required"
        />
        <Input
          field={{ _uid: "password", label: "Password" }}
          type="password"
          required="required"
          placeholder="Must be at least 6 characters"
        />
        <Button className="sign-up__button" type="submit" value="Sign In" />
      </form>
    </section>
  );
};

export default SignInForm;
