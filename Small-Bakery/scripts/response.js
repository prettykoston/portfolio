import { initializeFormInputs, bookButtonEvent } from "./book-form/book-form.js";
import initializeSliderProductionMobile from "./slider-mobile/slider-production-mobile.js";
import initializeMobileDeliveryGrid from "./responsive/responsive-delivery-grid.js";
import initializeActivitiesGallery from "./responsive/responsive-activities-gallery.js";
import responseBookSection from "./responsive/responsive-book-section.js";
import initializeNavigation from "./responsive/responsive-header-nav.js";

const response = function () {
  initializeNavigation();
  initializeFormInputs();
  bookButtonEvent();
  initializeSliderProductionMobile();
  initializeMobileDeliveryGrid();
  initializeActivitiesGallery();
  responseBookSection();
};

export default response;
