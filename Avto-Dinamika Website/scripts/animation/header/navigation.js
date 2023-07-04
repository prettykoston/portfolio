const mobileHamburgerButtonElement = document.querySelector(".header-nav-container__mobile-hamburger-button");
const NavListElement = document.querySelector(".header-nav-container__list");

const hamburgerNavEvent = function () {
  mobileHamburgerButtonElement.addEventListener("click", function () {
    NavListElement.classList.toggle("header-nav-container__list--active");
  });
};

export default hamburgerNavEvent;
