import BrandCard from "./BrandCard.js";
import brandsArray from "./brandsArray.js";
import { mobileGridQuantity, tabletGridQuantity, desktopSmallGridQuantity, maximumGridQuantity } from "./gridSize.js";
import showMoreEvent from "./showMore.js";

//Media Queries
const desktopNormal = window.matchMedia("(min-width:1260px)");
const desktopSmall = window.matchMedia("(max-width:1260px)");
const tabPortrait = window.matchMedia("(max-width:980px)");
const widePhone = window.matchMedia("(max-width:480px)");

//Create Grid function
const initializeBrandsIconsGrid = function () {
  const pasteMobileGrid = function (e) {
    if (e.matches) {
      BrandCard.createGrid(brandsArray, mobileGridQuantity);
    }
  };
  const pasteTabletGrid = function (e) {
    if (e.matches) {
      BrandCard.createGrid(brandsArray, tabletGridQuantity);
    }
  };
  const pasteSmallDesktopGrid = function (e) {
    if (e.matches) {
      BrandCard.createGrid(brandsArray, desktopSmallGridQuantity);
    }
  };
  const pasteNormalDesktopGrid = function (e) {
    if (e.matches) {
      BrandCard.createGrid(brandsArray, maximumGridQuantity);
    }
  };

  desktopNormal.addEventListener("change", pasteNormalDesktopGrid);
  pasteNormalDesktopGrid(desktopNormal);
  desktopSmall.addEventListener("change", pasteSmallDesktopGrid);
  pasteSmallDesktopGrid(desktopSmall);
  tabPortrait.addEventListener("change", pasteTabletGrid);
  pasteTabletGrid(tabPortrait);
  widePhone.addEventListener("change", pasteMobileGrid);
  pasteMobileGrid(widePhone);

  showMoreEvent();
};

export default initializeBrandsIconsGrid;
