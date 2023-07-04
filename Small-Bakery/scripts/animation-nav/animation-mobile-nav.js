const darkenedBodyEvent = function () {
    document.querySelector(".navigation-mobile__button")?.addEventListener("click", function () {
      document.querySelector(".body").classList.toggle("body--darkened");
    });
  };
export default darkenedBodyEvent;  