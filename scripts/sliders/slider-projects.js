import Swiper from "swiper/bundle";

const initProjectsSlider = function () {
  new Swiper(".slider-projects", {
    effect: "coverflow",
    grabCursor: true,
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    spaceBetween: 40,

    breakpoints: {
      320: {
        spaceBetween: 20,
      },
      380: {
        spaceBetween: 30,
      },

      768: {
        spaceBetween: 40,
      },
    },

    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 10,
      modifier: 10,
      slideShadows: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

export default initProjectsSlider;
