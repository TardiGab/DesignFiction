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

const burger = document.querySelector(".nav__burger");
const navBottom = document.querySelector(".nav__bottom");

burger.addEventListener("click", function () {
  burger.classList.toggle("nav__burger--active");
  navBottom.classList.toggle("nav__bottom--active");
});