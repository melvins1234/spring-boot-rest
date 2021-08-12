export const EmailFieldErrorMessage = (element, message) => {
  let tooltip = document.createElement("span");
  tooltip.innerText = message;
  ["sign-up__invalid-feedback", "sign-up__invalid-feedback--show"].map((e) =>
    tooltip.classList.add(e)
  );
  if (!document.querySelector(".sign-up__invalid-feedback")) {
    element.target
      .querySelector(`input[type='email']`)
      .parentElement.classList.toggle("sign-up__input-group--error");
    element.target
      .querySelector(`input[type='email']`)
      .parentElement.appendChild(tooltip);
  }
  element.target.querySelector(`input[type='email']`).style.border =
    "1px solid red";
};
