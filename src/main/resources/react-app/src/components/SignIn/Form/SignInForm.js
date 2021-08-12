import { useSelector, useDispatch } from "react-redux";
import { isLoggedIn } from "../../../store/action/isLoggedIn";
import { Input, Button } from "../../InputField/InputField";
import { EmailFieldErrorMessage } from "./EmailFieldErrorMessage";
import { token } from "../../../store/action/token";

const SignInForm = () => {

  const dispatch = useDispatch();
  const apiToken = useSelector((state) => state.token);

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
        if(json.token !== null){
          dispatch(isLoggedIn(json));
          dispatch(token(json.token));
          console.log(json);
        }else{
          EmailFieldErrorMessage(e, `This email address doesn't exist.`); 
        }
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
