const initRanges = function () {
  // Elements selectors
  const percentSlider = document.getElementById("initial-fee__range");
  const percentBullet = document.getElementById("initial-fee__label");
  const percentInput = document.getElementById("fee-percentage");
  const actualPrice = document.getElementById("actual-price");
  const totalFee = document.getElementById("fee-total");

  const termSlider = document.getElementById("credit-term__range");
  const termBullet = document.getElementById("credit-term__label");

  const percentageMaxLabel = document.querySelector(".initial-fee__percentage-slider-max-label");
  const termMaxLabel = document.querySelector(".initial-fee__credit-term-slider-max-label");

  //Media Queries
  const desktopWide = window.innerWidth >= 1720;
  const desktopMedium = window.innerWidth > 1260 && window.innerWidth < 1720;
  const desktopSmall = window.innerWidth > 980 && window.innerWidth <= 1260;
  const tabLandscape = window.innerWidth > 640 && window.innerWidth <= 980;
  const tabPortrait = window.innerWidth > 480 && window.innerWidth <= 640;
  const widePhone = window.innerWidth > 360 && window.innerWidth <= 480;

  percentSlider.addEventListener("input", showSliderValue, false);
  termSlider.addEventListener("input", showSliderValue, false);

  function showSliderValue() {
    percentBullet.innerHTML = percentSlider.value + "%";
    percentInput.value = percentSlider.value;

    totalFee.value = (actualPrice.innerText.replace(/\D/g, "") / 100) * percentInput.value;

    termBullet.innerHTML = termSlider.value + " мес";

    const percentBulletPosition = percentSlider.value / percentSlider.max;
    const termBulletPosition = (termSlider.value - 6) / termSlider.max;

    percentageMaxLabel.style.opacity = 0.6 + "";
    termMaxLabel.style.opacity = 0.6 + "";

    //Positioning bullets depending on slider width
    if (desktopWide) {
      percentBullet.style.left = percentBulletPosition * 488 + "px";
    } else if (desktopMedium || tabLandscape) {
      percentBullet.style.left = percentBulletPosition * 430 + "px";
    } else if (desktopSmall || tabPortrait) {
      percentBullet.style.left = percentBulletPosition * 308 + "px";
    } else if (widePhone) {
      percentBullet.style.left = percentBulletPosition * 238 + "px";
      /* document.querySelector(".initial-fee__percentage-slider-max-label").style.opacity = document.querySelector(".initial-fee__percentage-slider-max-label").style.opacity + 0.1 + ""; */
    }

    if (desktopWide) {
      termBullet.style.left = termBulletPosition * 520 + "px";
    } else if (desktopMedium || tabLandscape) {
      termBullet.style.left = termBulletPosition * 455 + "px";
    } else if (desktopSmall || tabPortrait) {
      termBullet.style.left = termBulletPosition * 326 + "px";
    } else if (widePhone) {
      termBullet.style.left = termBulletPosition * 252 + "px";
    }

    if (termSlider.value == 6) {
      termBullet.style.left = "0px";
    }
  }
};

export default initRanges;
