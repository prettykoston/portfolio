import Swiper from "../../node_modules/swiper/swiper-bundle.esm.browser.js";
import observeProductionGallery from "../animation-production/production-gallery-intersection.js";

const sliderHTML = `
<div class="swiper mySwiper">
<div class="swiper-wrapper">
  <div class="swiper-slide production-slide">
    <img class="production-slide__img" src="/images/section-production/production-gallery-1.png" alt="bake" />

    <p>Настоящая живая выпечка</p>

    <div class="production-slide__donut-container">
      <img class="production-slide__star-shape" src="/images/section-production/mobile-slider-star.svg" alt="curvy star shape" />

      <img class="production-slide__donut-shape" src="/images/section-production/mobile-slider-donut.svg" alt="donut logo shape" />
    </div>
  </div>
  <div class="swiper-slide production-slide">
    <img class="production-slide__img production-slide__img--2" src="/images/section-production/production-gallery-4.png" alt="bake" />

    <p>Вкладываем душу и щепотку волшебства</p>

    <div class="production-slide__donut-container">
      <img class="production-slide__star-shape" src="/images/section-production/mobile-slider-star.svg" alt="curvy star shape" />

      <img class="production-slide__donut-shape" src="/images/section-production/mobile-slider-donut.svg" alt="donut logo shape" />
    </div>
  </div>
  <div class="swiper-slide production-slide">
    <img class="production-slide__img production-slide__img--3" src="/images/section-production/production-gallery-3.png" alt="bake" />

    <p>
      Без химии, <br />
      зато с любовью
    </p>

    <div class="production-slide__donut-container">
      <img class="production-slide__star-shape" src="/images/section-production/mobile-slider-star.svg" alt="curvy star shape" />

      <img class="production-slide__donut-shape" src="/images/section-production/mobile-slider-donut.svg" alt="donut logo shape" />
    </div>
  </div>
  <div class="swiper-slide production-slide">
    <img class="production-slide__img" src="/images/section-production/production-gallery-2.png" alt="bake" />

    <p>Печем то, что едим</p>

    <div class="production-slide__donut-container">
      <img class="production-slide__star-shape" src="/images/section-production/mobile-slider-star.svg" alt="curvy star shape" />

      <img class="production-slide__donut-shape" src="/images/section-production/mobile-slider-donut.svg" alt="donut logo shape" />
    </div>
  </div>
</div>
<div class="swiper-button-next">
  
</div>
<div class="swiper-button-prev"></div>
</div>`;

const desktopGalleryHTML = `
        <div class="production-gallery">
          <div class="production-gallery__item production-gallery__item--1">
            <img src="images/section-production/production-gallery-1.png" alt="founder photo" class="production-gallery-img production-gallery-img--1" />

            <img src="/images/section-production/text-1.svg" alt="real bakery" class="production-gallery__text production-gallery__text--1" />
          </div>

          <div class="production-gallery__item production-gallery__item--2">
            <img src="images/section-production/production-gallery-2.png" alt="kid photo" class="production-gallery-img production-gallery-img--2" />

            <img src="/images/section-production/text-2.svg" alt="we eat what we bake" class="production-gallery__text production-gallery__text--2" />
          </div>

          <div class="production-gallery__item production-gallery__item--3">
            <img src="images/section-production/production-gallery-3.png" alt="kid photo" class="production-gallery-img production-gallery-img--3" />

            <img src="/images/section-production/text-3.svg" alt="no chemistry" class="production-gallery__text production-gallery__text--3" />
          </div>

          <div class="production-gallery__item production-gallery__item--4">
            <img src="images/section-production/production-gallery-4.png" alt="kid photo" class="production-gallery-img production-gallery-img--4" />

            <img src="/images/section-production/text-4.svg" alt="no chemistry" class="production-gallery__text production-gallery__text--4" />
          </div>
        </div> `;

const initializeSliderProductionMobile = function () {
  const pasteMobileSlider = function (e) {
    if (e.matches) {
      document.querySelector(".production-gallery")?.remove();
      document.querySelector(".section-production__gallery").insertAdjacentHTML("afterbegin", sliderHTML);

      new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    } else {
      document.querySelector(".swiper")?.remove();

      document.querySelector(".section-production__gallery").insertAdjacentHTML("afterbegin", desktopGalleryHTML);

      observeProductionGallery();
    }
  };
  const phone = window.matchMedia("(max-width:400px)");
  phone.addListener(pasteMobileSlider);
  pasteMobileSlider(phone);
};

export default initializeSliderProductionMobile;
