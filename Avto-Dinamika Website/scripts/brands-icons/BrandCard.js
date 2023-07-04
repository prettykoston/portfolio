import { maximumGridQuantity } from "./gridSize.js";

const brandIconsGridElement = document.querySelector(".brands-icons-grid");

class BrandCard {
  static createGrid(brandsArray, quantity) {
    this.clearGrid();
    for (let index = 0; index < quantity; index++) {
      const element = brandsArray[index];
      this.makeCard(element);
    }
  }

  static addToGrid(brandsArray, quantity) {
    //Check if grid is full
    let isGridFull = brandIconsGridElement.childNodes.length >= maximumGridQuantity;
    console.log(isGridFull);
    if (isGridFull) {
      return;
    }

    //Add icons until grid is full
    for (let index = quantity; index < brandsArray.length; index++) {
      const element = brandsArray[index];
      this.makeCard(element);
    }
  }

  static clearGrid() {
    brandIconsGridElement.innerHTML = "";
  }

  static makeCard(name) {
    const cardElement = document.createElement("div");
    const cardImage = document.createElement("img");
    const cardText = document.createElement("span");

    cardElement.insertAdjacentElement("afterbegin", cardImage);
    cardElement.insertAdjacentElement("beforeend", cardText);

    cardElement.className = `brands-icons-grid__item brands-icons-grid__item--${name}`;
    cardImage.src = `./img/brands-icon-grid/${name.replace(" ", "")}.png`;
    cardImage.alt = `${name} logo`;
    cardImage.className = `brands-icons-grid__icon`;
    cardText.innerText = name.charAt(0).toUpperCase() + name.slice(1);

    brandIconsGridElement.insertAdjacentElement("beforeend", cardElement);
  }
}

export default BrandCard;
