const dateElement = document.getElementById("date");
const bookButtonElement = document.querySelector(".book-grid__button");
const year = new Date().getFullYear();

const address = document.querySelector(".book-grid__address");
const timePlaceholder = document.querySelector(".time-placeholder");
const datePlaceholder = document.querySelector(".date-placeholder");

const timeInputContainer = document.querySelector(".book-grid__input--time");
const dateInputContainer = document.querySelector(".book-grid__input--date");
const date = document.querySelector("#date");
const time = document.querySelector("#time");

const initializeFormInputs = function () {
  dateElement.setAttribute("min", year + "-01-01");
  dateElement.setAttribute("max", year + "-12-31");
  dateElement.min = new Date().toISOString().split("T")[0];

  timeInputContainer.addEventListener("click", function () {
    timePlaceholder.style.display = "none";
    time.style.opacity = "1";
  });

  dateInputContainer.addEventListener("click", function () {
    datePlaceholder.style.display = "none";
    date.style.opacity = "1";
  });

};

const checkValidation = function () {
  const inputs = document.querySelectorAll(".book-grid__input");
  if (address.options.selectedIndex == 0) {
    address.closest("div").classList.add("book-grid__input--error");
    address.addEventListener("change", function () {
      address.closest("div").classList.remove("book-grid__input--error");
    });
  }

  inputs.forEach((input) => {
    input.addEventListener("input", function () {});
    if (!input.firstChild.value ) {
      input.closest("div").classList.add("book-grid__input--error");

      input.addEventListener("click", function () {
        input.closest("div").classList.remove("book-grid__input--error");
      });
    }
  });
};

const bookButtonEvent = function () {
  bookButtonElement.addEventListener("click", function (e) {
    e.preventDefault();
    checkValidation();
  });
};

export { initializeFormInputs, bookButtonEvent };
