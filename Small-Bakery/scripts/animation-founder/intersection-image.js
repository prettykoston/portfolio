const animatedFounderImage = document.querySelector(".section-founder__full-face-img");
/* const options = {
  rootMargin: "0px",
  threshold: 0,
}; */
const showFounderImage = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("section-founder__full-face-img--active");
      observer.unobserve(entry.target);
    }
  });
};
const observer = new IntersectionObserver(showFounderImage);
const observeFounderImage = function () {
  observer.observe(animatedFounderImage);
};
export default observeFounderImage;
