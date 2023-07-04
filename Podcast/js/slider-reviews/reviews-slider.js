import Swiper from "../../node_modules/swiper/swiper-bundle.esm.browser.js";

const initializeReviewsSlider = function () {
  new Swiper(".swiper1", {
    slidesPerView: 2,
    spaceBetween: 20,
    centeredSlides: true,
    navigation: {
      nextEl: ".reviews__navigation--next",
      prevEl: ".reviews__navigation--prev",
    },
  });
};

initializeReviewsSlider();

export default initializeReviewsSlider;
