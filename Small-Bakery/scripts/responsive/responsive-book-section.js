// import initializeMap from "../open-layers-map/ol-map";
const founderQuoteHTML = `
      <div class="section-activities__founder-quote">
        <img src="images/section-activities/founder.png" alt="founder avatar" class="section-activities__founder-img" />
        <p>
          «Мне искренне хочется, чтобы каждый, <br />
          кто пришёл к нам в гости в пекарню, <br />
          почувствовал атмосферу волшебства <br />
          и его настроение хоть чуть-чуть <br />
          улучшилось. Ведь мы с командой <br />
          вкладываем свою душу и любовь <br />
          в то, что делаем».
        </p>
        <img src="images/section-founder/quote-star-upper.svg" alt="star shape" class="section-activities__quote-shape" />
      </div> `;

const responseBookSection = function () {
  const modifyBookSection = function (e) {
    if (e.matches) {
      document.querySelector(".section-activities__founder-quote")?.remove();
      document.querySelector(".section-book").insertAdjacentHTML("beforeend", founderQuoteHTML);
      document.querySelector(".book-grid__map--desktop")?.remove();
    } else {
      document.querySelector(".section-activities__founder-quote")?.remove();

      document.querySelector(".section-activities").insertAdjacentHTML("beforeend", founderQuoteHTML);

      document.querySelector(".book-grid__text").insertAdjacentHTML("afterend", `<div id="book-grid__map" class="book-grid__map book-grid__map--desktop"></div>`);

      
    }
  };
  const phone = window.matchMedia("(max-width:400px)");
  phone.addListener(modifyBookSection);
  modifyBookSection(phone);

  document.querySelector(".mobile-map-dropdown__text").addEventListener("click", function () {
    document.querySelector(".mobile-map-dropdown").classList.toggle("mobile-map-dropdown--closed");
  });
};

export default responseBookSection;
