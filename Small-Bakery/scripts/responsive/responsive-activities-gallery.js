const desktopActivitiesGalleryHTML = `
        <div class="activities-gallery-desktop">
          <div class="activities-gallery-desktop__item activities-gallery-desktop__item--1">
            <img src="images/activities-gallery/activities-music.png" alt="man playing guitar" />

            <h4>
              Концерт Гьяна Сальтуса <br />
              в «Маленькой пекарне»
            </h4>

            <div class="activities-gallery-desktop__links-container">
              <img src="images/activities-gallery/link-arrow.svg" alt="arrow shape" />
              <p>Читать, смотреть и слушать</p>
            </div>
          </div>

          <div class="activities-gallery-desktop__item activities-gallery-desktop__item--2">
            <img src="images/activities-gallery/activities-study.png" alt="study desk" />

            <h4>Мастер-классы в zerno.school</h4>

            <div class="activities-gallery-desktop__links-container">
              <img src="images/activities-gallery/link-arrow.svg" alt="arrow shape" />
              <p>Читать</p>
            </div>
          </div>

          <div class="activities-gallery-desktop__item activities-gallery-desktop__item--3">
            <img src="images/activities-gallery/activities-charity.png" alt="bakery for free" />

            <h4>Благотворительность вместе с «Маленькой пекарней»</h4>

            <div class="activities-gallery-desktop__links-container">
              <img src="images/activities-gallery/link-arrow.svg" alt="arrow shape" />
              <p>Читать</p>
            </div>
          </div>
        </div> `;

const mobileActivitiesListHTML = `
        <div class="activities-gallery-mobile">
          <div class="activities-gallery-mobile__item activities-gallery-mobile__item--1">
            <p>Благотворительность вместе с «Маленькой пекарней»</p>

            <div class="activities-gallery-mobile__read-more">
              <img src="/images/section-activities/activities-mobile-arrow.svg" alt="arrow shape" />
              <a href="#/">Читать</a>
            </div>
          </div>

          <div class="activities-gallery-mobile__item activities-gallery-mobile__item--2">
            <p>Мастер-классы в zerno.school</p>

            <div class="activities-gallery-mobile__read-more">
              <img src="/images/section-activities/activities-mobile-arrow.svg" alt="arrow shape" />
              <a href="#/">Читать</a>
            </div>
          </div>

          <div class="activities-gallery-mobile__item activities-gallery-mobile__item--3">
            <p>Концерт Гьяна Сальтуса в «Маленькой пекарней»</p>

            <div class="activities-gallery-mobile__read-more">
              <img src="/images/section-activities/activities-mobile-arrow.svg" alt="arrow shape" />
              <a href="#/">Читать</a>
            </div>
          </div>
        </div> `;

const initializeActivitiesGallery = function () {
  const pasteMobileActivitiesList = function (e) {
    if (e.matches) {
      document.querySelector(".activities-gallery-desktop")?.remove();
      document.querySelector(".section-activities__activities-gallery").insertAdjacentHTML("afterbegin", mobileActivitiesListHTML);
    } else {
      document.querySelector(".activities-gallery-mobile")?.remove();

      document.querySelector(".section-activities__activities-gallery").insertAdjacentHTML("afterbegin", desktopActivitiesGalleryHTML);
    }
  };
  const phone = window.matchMedia("(max-width:400px)");
  phone.addListener(pasteMobileActivitiesList);
  pasteMobileActivitiesList(phone);
};

export default initializeActivitiesGallery;
