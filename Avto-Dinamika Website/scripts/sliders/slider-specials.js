import Swiper from "swiper";

const initSliderSpecials = function () {
  new Swiper(".slider-specials", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    freeMode: true,
  });
};

export default initSliderSpecials;
