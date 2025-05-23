"use strict";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

const hero = document.querySelector(".hero");
if (hero) {

  window.addEventListener("load", function () {
    const tl = gsap.timeline();
    const nav = document.querySelector(".nav > div");

    tl.from(hero, {
      filter: "blur(50px)",
      scale: 1.2,
      opacity: 0,
      duration: 1,
      ease: "power1.out",
    }).from(nav, {
      opacity: 0,
      filter: "blur(50px)",
      duration: 0.8,
      ease: "power1.out",
    },"-=0.5")
  });

  gsap.to(hero, {
    scrollTrigger: {
      trigger: hero,
      start: "top top",
      end: "bottom top",
      scrub: true,
      pin: true,
      pinSpacing: false,
    },
    filter: "blur(50px)",
    scale: 1.2,
    opacity: 0,
  })

  gsap.from(".highlights__item", {
    scrollTrigger: {
      trigger: ".highlights",
      start: "top bottom",
      end: "bottom bottom",
      scrub: true,
    },
    filter: "blur(100px)",
    opacity: 0,
    // y: 100,
    stagger: 1,
    ease: "power1.out",
    duration: 1,
  })

  // gsap.from(".stats__items li", {
  //   scrollTrigger: {
  //     trigger: ".stats",
  //     start: "top center",
  //     end: "center center",
  //     scrub: true,
  //   },
  //   opacity: 0,
  //   stagger: 1,
  //   ease: "power1.out",
  //   duration: 1,
  // })
}