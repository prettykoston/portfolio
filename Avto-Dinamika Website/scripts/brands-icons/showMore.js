import { mobileGridQuantity, tabletGridQuantity, maximumGridQuantity, desktopSmallGridQuantity } from "./gridSize.js";
import brandsArray from "./brandsArray.js";
import BrandCard from "./BrandCard.js";

const showMoreButtonElement = document.querySelector(".brands-icons-grid__showmore-button");

const showMore = function () {
  const brandsIconsGridElement = document.querySelector(".brands-icons-grid");

 

  //Current length of the grid
  const currentLength = brandsIconsGridElement.childNodes.length;

  const showLessEvent = function () {
    // Decreasing max-height of entire grid
    brandsIconsGridElement.classList.remove("brands-icons-grid--active");
    //Changing text of button and removing eventListener

    showMoreButtonElement.innerText = "Показать еще";
    showMoreButtonElement.removeEventListener("click", showLessEvent);

    //There is no Event Listener at this point, add Show More event
    showMoreButtonElement.addEventListener("click", showMoreEvent);
  };

  function showMoreEvent() {
    //Adding Icons to grid depend on current size of grid
    if (currentLength === mobileGridQuantity) {
      BrandCard.addToGrid(brandsArray, mobileGridQuantity);
    } else if (currentLength === tabletGridQuantity) {
      BrandCard.addToGrid(brandsArray, tabletGridQuantity);
    } else if (currentLength === desktopSmallGridQuantity) {
      BrandCard.addToGrid(brandsArray, desktopSmallGridQuantity);
    }
    // Increasing max-height of entire grid
    brandsIconsGridElement.classList.add("brands-icons-grid--active");
    //Changing text of button and removing eventListener
    showMoreButtonElement.innerText = "Свернуть";
    showMoreButtonElement.removeEventListener("click", showMoreEvent);
    showMoreButtonElement.addEventListener("click", showLessEvent);
  }

  showMoreButtonElement.addEventListener("click", showMoreEvent);
};

export default showMore;
