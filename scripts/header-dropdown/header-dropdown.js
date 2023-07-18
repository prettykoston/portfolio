const dropdownDesktop = document.querySelector(".header-dropdown-desktop");
const dropdownMobile = document.querySelector(".navigation__list");
const hamburgerButton = document.querySelector(".nav-button-mobile");

/* DESKTOP NAVIGATION */
function initHeaderDropdown() {
  for (const item of document.querySelectorAll(".navigation__list li")) {
    item.addEventListener("click", function () {
      dropdownDesktop.classList.toggle("header-dropdown-desktop--active");
    });
  }
}

/* MOBILE NAVIGATION */
function hamburgerEvent(e) {
  dropdownMobile.classList.toggle("navigation__list--active");
  dropdownMobile.style.visibility = "unset";
}

function closeMenu(e) {
  if (e.target.closest(".navigation__list") || e.target.closest(".nav-button-mobile")) return;
  dropdownMobile.style.visibility = "hidden";
  dropdownMobile.classList.remove("navigation__list--active");
}

/* MAIN INIT FUNCTION */
const initNavEvents = function () {
  initHeaderDropdown();
  const events = function (e) {
    if (e.matches) {
      hamburgerButton.addEventListener("click", hamburgerEvent);
      document.addEventListener("click", closeMenu);
    } else {
      hamburgerButton.removeEventListener("click", hamburgerEvent);
      document.removeEventListener("click", closeMenu);
      dropdownMobile.style.visibility = "";
    }
  };

  const mobile = window.matchMedia("(max-width:768px)");
  mobile.addEventListener("change", events);
  events(mobile);
};

export default initNavEvents;
