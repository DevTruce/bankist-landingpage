"use strict";

////////////////////////////////////////////////////////////////
//// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (event) {
  event.preventDefault(); // remove defaults
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach(btn => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

////////////////////////////////////////////////////////////////
//// Smooth Scrolling

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (event) {
  event.preventDefault();

  //// Getting Coordinates
  const s1coords = section1.getBoundingClientRect(); // element coordinates

  console.log(s1coords);
  console.log(event.target.getBoundingClientRect()); // element coordinates
  console.log(`Current scroll (X/Y):`, window.scrollX, window.scrollY); // scroll coordinates
  console.log(
    // viewport coordinates
    `height/width viewport:`,
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //// Scrolling
  /// Old Method
  // instant scrolling
  // window.scrollTo(
  //   s1coords.left + window.scrollX,
  //   s1coords.top + window.scrollY
  // );

  // smooth scrolling
  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: "smooth",
  // });

  /// Modern Method
  section1.scrollIntoView({
    behavior: "smooth",
  });

  // const smoothScroll = function () {
  //   document.querySelector("#section--1").scrollIntoView({
  //     behavior: "smooth",
  //   });
  // };
  // smoothScroll();
});
