const animatedHeadings = [...document.querySelectorAll(".heading-reveal")];

const options = {
  rootMargin: "-10%",
  threshold: 0,
};

const showHeading = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const currentHeading = entry.target.children[0];
      currentHeading.classList.add("heading-reveal--active");
      observer.unobserve(entry.target);
    }
  });
};
const observer = new IntersectionObserver(showHeading, options);

const observeHeadings = function () {
  animatedHeadings.forEach((heading) => {
    observer.observe(heading);
  });
};

export default observeHeadings;
