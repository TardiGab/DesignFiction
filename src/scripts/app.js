"use strict";

const loginInputs = document.querySelectorAll(".login__input");
const contactInputs = document.querySelectorAll(".contact__input");

loginInputs.forEach(input => {
  const label = input.previousElementSibling; 

  input.addEventListener("focus", function () {
    label.classList.add("login__label--active");  
  });

  input.addEventListener("blur", function () {
    if (input.value === "") {
      label.classList.remove("login__label--active");
    }
  });
});

contactInputs.forEach(input => {
  const label = input.previousElementSibling; 

  input.addEventListener("focus", function () {
    label.classList.add("contact__label--active");  
  });

  input.addEventListener("blur", function () {
    if (input.value === "") {
      label.classList.remove("contact__label--active");
    }
  });
});