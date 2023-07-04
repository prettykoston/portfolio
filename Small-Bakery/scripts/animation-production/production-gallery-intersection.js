const animatedProductionGallery = document.querySelector(".section-production__gallery");
const options = {
  rootMargin: "-100px",
  threshold: 0,
};
const showProductionGallery = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.children[0].classList.add("production-gallery--active");
      observer.unobserve(entry.target);
    }
  });
};
const observer = new IntersectionObserver(showProductionGallery, options);
const observeProductionGallery = function () {
  if (animatedProductionGallery) {
    observer.observe(animatedProductionGallery);
  }
};
export default observeProductionGallery;
