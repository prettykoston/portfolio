import observeHeadings from "./animation-heading/heading-intersection.js";
import observeFounderImage from "./animation-founder/intersection-image.js";
import { observeQuotes, observeDescription } from "./animation-founder/intersection-quotes.js";
import observeProductionGallery from "./animation-production/production-gallery-intersection.js";

const animate = function () {
  observeHeadings();
  observeFounderImage();
  observeQuotes();
  observeDescription();
  observeProductionGallery();
};

export default animate;
