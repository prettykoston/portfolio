const animatedQuotes = document.querySelectorAll(".founder-quote");

const animatedDescription = document.querySelectorAll(".section-founder__description");
/* 
const quotesOptions = {
  rootMargin: "-400px",
  threshold: 0,
};

const descriptionsOptions = {
  rootMargin: "-400px",
  threshold: 0,
}; */

const showQuote = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("founder-quote--active");
      quotesObserver.unobserve(entry.target);
    }
  });
};

const showDescription = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("section-founder__description--active");
    }
  });
};

const descriptionObserver = new IntersectionObserver(showDescription);

const quotesObserver = new IntersectionObserver(showQuote);

const observeQuotes = function () {
  animatedQuotes.forEach((quote) => {
    quotesObserver.observe(quote);
  });
};

const observeDescription = function () {
  animatedDescription.forEach((description) => {
    descriptionObserver.observe(description);
  });
};

export { observeQuotes, observeDescription };
