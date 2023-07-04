const mediaQuery = window.matchMedia("(max-width: 25em)");

const headerNavMenuHTML = `<ul class="header-nav__menu">
<li><a href="#">Episodes</a></li>
<li><a href="#">About</a></li>
<li><a href="#">More</a></li>
</ul>`;

const insertHeaderNavMenu = function (e) {
  if (e.matches) {
    document.querySelector(".header-nav__menu").remove();
  } else {
    if (!document.querySelector(".header-nav__menu")) {
      document.querySelector(".header-nav__logo-link").insertAdjacentHTML("afterend", headerNavMenuHTML);
    }
  }
};
mediaQuery.addListener(insertHeaderNavMenu);

insertHeaderNavMenu(mediaQuery);
export default insertHeaderNavMenu;
