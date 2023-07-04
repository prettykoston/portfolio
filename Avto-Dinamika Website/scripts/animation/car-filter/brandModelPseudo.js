/* const brandSelectElement = document.querySelector(".brand-selection"); */

const brandSelectElements = document.querySelectorAll(".brand-selection");
const modelSelectElements = document.querySelectorAll(".model-selection");
const equipmentSelectElements = document.querySelectorAll(".equipment-selection");

const removePseudoEvent = function () {
  brandSelectElements.forEach((e) => {
    e.addEventListener("change", function () {
      e.previousElementSibling.style.display = "none";
    });
  });

  modelSelectElements.forEach((e) => {
    e.addEventListener("change", function () {
      e.previousElementSibling.style.display = "none";
    });
  });

  equipmentSelectElements.forEach((e) => {
    e.addEventListener("change", function () {
      e.previousElementSibling.style.display = "none";
    });
  });
};

export default removePseudoEvent;
