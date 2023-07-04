import { initializeCarousel } from "./Carousel.js";
import initializeMobileSlider from "./header-mobile-slider.js";
import lazyLoadInstance from "../lazyLoad.js";

const mediaQuery = window.matchMedia("(max-width: 75em)");

const headerMobileSliderHTML = `  
<div class="header__mobile-slider">
<div class="swiper swiper2">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img class="lazy" src="./img/header/header-slider/slide1-compressed.jpg" data-src="./img/header/header-slider/slide1.jpg" alt="slide1" data-index="1" />
    </div>
    <div class="swiper2-slide swiper-slide">
      <img class="lazy" src="./img/header/header-slider/slide2-compressed.jpg" data-src="./img/header/header-slider/slide2.jpg" alt="slide2" data-index="2" />
    </div>
    <div class="swiper2-slide swiper-slide">
      <img
        class="lazy desktop-gallery-item desktop-gallery-item-3"
        src="./img/header/header-slider/slide3-compressed.jpg"
        data-src="./img/header/header-slider/slide3.jpg"
        alt="slide3"
        data-index="3" />
    </div>
    <div class="swiper2-slide swiper-slide">
      <img class="lazy" src="./img/header/header-slider/slide4-compressed.jpg" data-src="./img/header/header-slider/slide4.jpg" alt="slide4" data-index="4" />
    </div>
    <div class="swiper2-slide swiper-slide">
      <img class="lazy" src="./img/header/header-slider/slide5-compressed.jpg" data-src="./img/header/header-slider/slide5.jpg" alt="slide5" data-index="5" />
    </div>
    <div class="swiper2-slide swiper-slide">
      <img class="lazy" src="./img/header/header-slider/slide6-compressed.jpg" data-src="./img/header/header-slider/slide6.jpg" alt="slide6" data-index="6" />
    </div>

    <div class="swiper2-slide swiper-slide">
      <img class="lazy" src="./img/header/header-slider/slide7-compressed.jpg" data-src="./img/header/header-slider/slide7.jpg" alt="slide7" data-index="7" />
    </div>
    <div class="swiper2-slide swiper-slide">
      <img class="lazy" src="./img/header/header-slider/slide8-compressed.jpg" data-src="./img/header/header-slider/slide8.jpg" alt="slide8" data-index="8" />
    </div>
   </div>
 </div>
</div>`;

const headerDesktopGallery = `
<div class="desktop-gallery">
        <div class="desktop-gallery-container">
          <img
            class="lazy desktop-gallery-item desktop-gallery-item-1"
            src="./img/header/header-slider/slide1-compressed.jpg"
            data-src="./img/header/header-slider/slide1.jpg"
            alt="slide1"
            data-index="1" />
          <img
            class="lazy desktop-gallery-item desktop-gallery-item-2"
            src="./img/header/header-slider/slide2-compressed.jpg"
            data-src="./img/header/header-slider/slide2.jpg"
            alt="slide2"
            data-index="2" />
          <img
            class="lazy desktop-gallery-item desktop-gallery-item-3"
            src="./img/header/header-slider/slide3-compressed.jpg"
            data-src="./img/header/header-slider/slide3.jpg"
            alt="slide3"
            data-index="3" />
          <img
            class="lazy desktop-gallery-item desktop-gallery-item-4"
            src="./img/header/header-slider/slide4-compressed.jpg"
            data-src="./img/header/header-slider/slide4.jpg"
            alt="slide4"
            data-index="4" />
          <img
            class="lazy desktop-gallery-item desktop-gallery-item-5"
            src="./img/header/header-slider/slide5-compressed.jpg"
            data-src="./img/header/header-slider/slide5.jpg"
            alt="slide5"
            data-index="5" />
          <img
            class="lazy desktop-gallery-item desktop-gallery-item-6"
            src="./img/header/header-slider/slide6-compressed.jpg"
            data-src="./img/header/header-slider/slide6.jpg"
            alt="slide6"
            data-index="6" />
          <img
            class="lazy desktop-gallery-item desktop-gallery-item-7"
            src="./img/header/header-slider/slide7-compressed.jpg"
            data-src="./img/header/header-slider/slide7.jpg"
            alt="slide7"
            data-index="7" />
          <img
            class="lazy desktop-gallery-item desktop-gallery-item-8"
            src="./img/header/header-slider/slide8-compressed.jpg"
            data-src="./img/header/header-slider/slide8.jpg"
            alt="slide8"
            data-index="8" />
        </div>
        <div class="desktop-gallery-controls"></div>
      </div>`;

const headerSliderSelector = document.querySelector(".header__slider");

const insertHeaderSlider = function (e) {
  if (e.matches) {
    if (document.querySelector(".desktop-gallery")) {
      document.querySelector(".desktop-gallery").remove();
    }
    headerSliderSelector.insertAdjacentHTML("afterbegin", headerMobileSliderHTML);
    initializeMobileSlider();
    lazyLoadInstance.update();
  } else {
    if (document.querySelector(".header__mobile-slider")) {
      document.querySelector(".header__mobile-slider").remove();
    }
    headerSliderSelector.insertAdjacentHTML("afterbegin", headerDesktopGallery);
    initializeCarousel();
    lazyLoadInstance.update();
  }
};

mediaQuery.addListener(insertHeaderSlider);

insertHeaderSlider(mediaQuery);

export default insertHeaderSlider;
