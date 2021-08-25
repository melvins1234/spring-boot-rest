export const EmailFieldErrorMessage = (element, message, inputFieldError) => {
  let tooltip = document.createElement("span");
  tooltip.innerText = message;
  ["sign-up__invalid-feedback", "sign-up__invalid-feedback--show"].map((e) =>
    tooltip.classList.add(e)
  );
  if (!document.querySelector(".sign-up__invalid-feedback") && inputFieldError === 'email') {
    element.target
      .querySelector(`input[type='email']`)
      .parentElement.classList.toggle("sign-up__input-group--error");
    element.target
      .querySelector(`input[type='email']`)
      .parentElement.appendChild(tooltip);
    element.target.querySelector(`input[type='email']`).style.border =
      "1px solid red";
  } else if(!document.querySelector(".sign-up__invalid-feedback")  && inputFieldError === `password`){
    element.target
      .querySelector(`input[type='password']`)
      .parentElement.classList.toggle("sign-up__input-group--error");
    element.target
      .querySelector(`input[type='password']`)
      .parentElement.appendChild(tooltip);
    element.target.querySelector(`input[type='password']`).style.border =
      "1px solid red";
  }

};
