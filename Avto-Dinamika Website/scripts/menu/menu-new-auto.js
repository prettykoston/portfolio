const newAutoButton = document.querySelector(".header-nav-container__item--1");
const newAutoMenu = document.querySelector(".menu-new-auto");

const desktopNormal = window.matchMedia("(min-width:1260px)");

const newAutoButtonEvent = function () {
  newAutoMenu.classList.toggle("menu-new-auto--active");
};

const menuEvents = function () {
  newAutoButton.addEventListener("click", newAutoButtonEvent);
};

export default menuEvents;
