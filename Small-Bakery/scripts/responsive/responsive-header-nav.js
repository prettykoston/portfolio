import darkenedBodyEvent from "../animation-nav/animation-mobile-nav.js";

const mobileNavigationHTML = `
    <div class="navigation-mobile">
      <input type="checkbox" class="navigation-mobile__checkbox" id="navi-toggle" />
      <label for="navi-toggle" class="navigation-mobile__button">
        <span class="navigation-mobile__icon">&nbsp; </span>
      </label>
      <div class="navigation-mobile__background">
        <nav class="navigation-mobile__nav">
          <ul class="navigation-mobile__list">
            <li class="navigation-mobile__item">
              <a href="#" class="navigation-mobile__link"> О пекарне</a>
            </li>
            <li class="navigation-mobile__item">
              <a href="#" class="navigation-mobile__link"> Купить</a>
            </li>
            <li class="navigation-mobile__item">
              <a href="#" class="navigation-mobile__link"> Забронировать столик</a>
            </li>
            <li class="navigation-mobile__item">
              <a href="#" class="navigation-mobile__link"> Контакты</a>
            </li>
          </ul>
        </nav>
      </div>
    </div> `;

const desktopNavigationHTML = `
<nav class="navigation-desktop">
  <ul>
    <li><a href="#/">О пекарне</a></li>
    <li><a href="#/">Купить</a></li>
    <li><a href="#/">Забронировать столик</a></li>
    <li><a href="#/">Контакты</a></li>
  </ul>
</nav> `;

const initializeNavigation = function () {
  const pasteMobileNavigation = function (e) {
    if (e.matches) {
      document.querySelector(".navigation-desktop")?.remove();
      document.querySelector("body").insertAdjacentHTML("afterbegin", mobileNavigationHTML);
      darkenedBodyEvent();
    } else {
      document.querySelector(".navigation-mobile")?.remove();
      document.querySelector("body").insertAdjacentHTML("afterbegin", desktopNavigationHTML);
      if (document.querySelector("body").classList.contains("body--darkened")) {
        document.querySelector("body").classList.remove("body--darkened");
      }
    }
  };
  const phone = window.matchMedia("(max-width:400px)");
  phone.addListener(pasteMobileNavigation);
  pasteMobileNavigation(phone);
};

export default initializeNavigation;
