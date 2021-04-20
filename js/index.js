const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// function mobileMenu() {
//   hamburger.classList.toggle("active");
//   navMenu.classList.toggle("active");
// }

const closeMenu = () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
};
navLink.forEach((nav) => nav.addEventListener("click", closeMenu));
