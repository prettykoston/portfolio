import initializeHeaderSlider from "./sliders/slider-header.js";
import initSliderSpecials from "./sliders/slider-specials.js";

import hamburgerNavEvent from "./animation/header/navigation.js";
import removePseudoEvent from "./animation/car-filter/brandModelPseudo.js";
import initializeBrandsIconsGrid from "./brands-icons/createGrid.js";
import initRanges from "./credit-calc/initial-fee-range.js";
import menuEvents from "./menu/menu-new-auto.js";
import updateCreditInfo from "./credit-calc/credit-calc.js";


initializeHeaderSlider();
initSliderSpecials();

hamburgerNavEvent();
removePseudoEvent();
initializeBrandsIconsGrid();
initRanges();
menuEvents();
updateCreditInfo();
