import initializeMobileSponsorshipCards from "./sponsorship-mobile-cards.js";
import initializeDesktopSponsorshipCards from "./sponsorship-desktop-cards.js";
const mediaQuery = window.matchMedia("(max-width: 75em)");

const insertSponsorshipCards = function (e) {
  if (e.matches) {
    initializeMobileSponsorshipCards();
  } else {
    initializeDesktopSponsorshipCards();
  }
};

mediaQuery.addListener(insertSponsorshipCards);

insertSponsorshipCards(mediaQuery);

export default insertSponsorshipCards;
