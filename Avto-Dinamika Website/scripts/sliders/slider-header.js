import Swiper, { Autoplay, Pagination } from "swiper";

const initializeHeaderSlider = function () {
  new Swiper(".header-slider", {
    modules: [Pagination, Autoplay],
    pagination: {
      el: ".header-slider__pagination",
    },
    autoplay: {
      delay: 3000,
    },
    spaceBetween: "150px",
    loop: true,
  });
};

export default initializeHeaderSlider;
