import Swiper from "../../../node_modules/swiper/swiper-bundle.esm.browser.js";

const sponsorshipMobileCardsHTML = `
<div class="swiper swiper3">
        <div class="swiper-wrapper">
          <div class="swiper-slide swiper3-slide">
            <div class="sponsorship-card">
              <div class="sponsorship-card__main-subcard">
                <div class="sponsorship-card__main-subcard-heading-text-container">
                  <h6>Member</h6>
                  <p class="sponsorship-card__main-subcard-description">Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.</p>
                </div>
                <div class="sponsorship-card__btn-price-container">
                  <button class="sponsorship-card__subscribe-btn">SUBSCRIBE</button>
                  <div class="sponsorship-card__price-month-container">
                    <p class="sponsorship-card__price-number">$9.99</p>
                    <p class="sponsorship-card__price-per-month">/month</p>
                  </div>
                </div>
              </div>
              <div class="sponsorship-card__included-subcard">
                <p>What’s included:</p>
                <ul>
                  <li>Exclusive Content</li>
                  <li>5% Discount on Merch</li>
                  <li>Join the Community</li>
                  <li>Livestreaming Access</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="swiper-slide swiper3-slide">
            <div class="sponsorship-card">
              <div class="sponsorship-card__main-subcard sponsorship-card__main-subcard--colored">
                <div class="sponsorship-card__main-subcard-heading-text-container">
                  <h6>Family</h6>
                  <p class="sponsorship-card__main-subcard-description">Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.</p>
                </div>
                <div class="sponsorship-card__btn-price-container">
                  <button class="sponsorship-card__subscribe-btn">SUBSCRIBE</button>
                  <div class="sponsorship-card__price-month-container">
                    <p class="sponsorship-card__price-number">$14.99</p>
                    <p class="sponsorship-card__price-per-month">/month</p>
                  </div>
                </div>
              </div>
              <div class="sponsorship-card__included-subcard sponsorship-card__included-subcard--colored">
                <p>What’s included:</p>
                <ul>
                  <li class="list-item--bold">Everything in Tier 1</li>
                  <li>Free tickets to Events</li>
                  <li>Limited Edition Merch</li>
                  <li>Promote your Product</li>
                  <li>Request Topic</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="swiper-slide swiper3-slide">
            <div class="sponsorship-card">
              <div class="sponsorship-card__main-subcard">
                <div class="sponsorship-card__main-subcard-heading-text-container">
                  <h6>Official</h6>
                  <p class="sponsorship-card__main-subcard-description">Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.</p>
                </div>
                <div class="sponsorship-card__btn-price-container">
                  <button class="sponsorship-card__subscribe-btn">SUBSCRIBE</button>
                  <div class="sponsorship-card__price-month-container">
                    <p class="sponsorship-card__price-number">$29.99</p>
                    <p class="sponsorship-card__price-per-month">/month</p>
                  </div>
                </div>
              </div>
              <div class="sponsorship-card__included-subcard">
                <p>What’s included:</p>
                <ul>
                  <li class="list-item--bold">Everything in Tier 2</li>
                  <li>Exclusive Badge on Livestreaming</li>
                  <li>Become an Official Sponsor</li>
                  <li>Early Access to All Episodes</li>
                  <li>Free Stikers and Merch</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>`;

const sponsorshipCardsElement = document.querySelector(".sponsorship-cards");

const initializeMobileSponsorshipCards = function () {
  if (document.querySelector(".section-sponsorship__plans")) {
    document.querySelector(".section-sponsorship__plans").remove();
  }
  sponsorshipCardsElement.insertAdjacentHTML("afterbegin", sponsorshipMobileCardsHTML);

  new Swiper(".swiper3", {
    effect: "cards",

    cardsEffect: {
      slideShadows: false,
      perSlideRotate: 6,
    },
    grabCursor: true,
  });
};

export default initializeMobileSponsorshipCards;
