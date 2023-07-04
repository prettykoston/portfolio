const desktopDeliveryGridHTML = `
        <div class="production-delivery-grid--desktop">
          <div class="desktop-delivery-grid__cell desktop-delivery-grid__cell--1">
            <p>
              Зайти в одну из наших <br />
              пекарен города Москвы
            </p>

            <img src="images/section-production/delivery-grid-arrow.svg" alt="arrow shape" />

            <button class="button button--animated production-delivery-grid__button">
              Узнать адреса <br />
              пекарен
            </button>
          </div>

          <div class="desktop-delivery-grid__cell desktop-delivery-grid__cell--2">
            <p>
              Заказать доставку <br />
              по телефону
            </p>

            <img src="images/section-production/delivery-grid-arrow.svg" alt="arrow shape" />

            <button class="button production-delivery-grid__button">
              Заказать <br />
              доставку
            </button>
          </div>

          <div class="desktop-delivery-grid__cell desktop-delivery-grid__cell--3">
            <p>Сделать заказ на Ozon</p>

            <img src="images/section-production/delivery-grid-arrow.svg" alt="arrow shape" />

            <button class="button production-delivery-grid__button">
              Заказать <br />
              на Ozon
            </button>
          </div>

          <div class="desktop-delivery-grid__cell desktop-delivery-grid__cell--4">
            <p>
              Сделать заказ для оптовых <br />
              закупок
            </p>

            <img src="images/section-production/delivery-grid-arrow.svg" alt="arrow shape" />

            <button class="button production-delivery-grid__button">
              Сделать оптовую <br />
              закупку
            </button>
          </div>
        </div> `;

const mobileDeliveryGridHTML = `
<div class="production-delivery-grid--mobile">
          <div class="mobile-delivery-grid__cell mobile-delivery-grid__cell--1">
            <img src="/images/section-production/delivery-grid-mobile-kid-1.png" alt="bakery kid" />
          </div>

          <div class="mobile-delivery-grid__cell mobile-delivery-grid__cell--2">
            <button class="button button--animated production-delivery-grid__button">Заказать доставку</button>
            <button class="button button--animated production-delivery-grid__button">Зайти в пекарню</button>
          </div>

          <div class="mobile-delivery-grid__cell mobile-delivery-grid__cell--3">
            <button class="button button--animated production-delivery-grid__button">Заказать на Ozon</button>
            <button class="button button--animated production-delivery-grid__button">Сделать оптовую закупку</button>
          </div>

          <div class="mobile-delivery-grid__cell mobile-delivery-grid__cell--4">
            <img src="/images/section-production/delivery-grid-mobile-kid-2.png" alt="bakery kid" />
          </div>     
        </div>
`;

const initializeMobileDeliveryGrid = function () {
  const pasteMobileDeliveryGrid = function (e) {
    if (e.matches) {
      document.querySelector(".production-delivery-grid--desktop")?.remove();
      document.querySelector(".section-production__delivery-grid").insertAdjacentHTML("afterbegin", mobileDeliveryGridHTML);
    } else {
      document.querySelector(".production-delivery-grid--mobile")?.remove();

      document.querySelector(".section-production__delivery-grid").insertAdjacentHTML("afterbegin", desktopDeliveryGridHTML);
    }
  };
  const phone = window.matchMedia("(max-width:400px)");
  phone.addListener(pasteMobileDeliveryGrid);
  pasteMobileDeliveryGrid(phone);
};

export default initializeMobileDeliveryGrid;
