import Swiper from "swiper/bundle";


const initSliderCatalogue = function () {
  new Swiper(".slider-catalogue", {
    slidesPerView: "auto",
    spaceBetween: 0,
    loop: true,
    
  });

  console.log("sdfsdf");
};

export default initSliderCatalogue;
