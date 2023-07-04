class Carousel {
  constructor(container, items, controls) {
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
  }

  updateGallery() {
    this.carouselArray.forEach((e) => {
      e.classList.remove("desktop-gallery-item-1");
      e.classList.remove("desktop-gallery-item-2");
      e.classList.remove("desktop-gallery-item-3");
      e.classList.remove("desktop-gallery-item-4");
      e.classList.remove("desktop-gallery-item-5");
      e.classList.remove("desktop-gallery-item-6");
      e.classList.remove("desktop-gallery-item-7");
      e.classList.remove("desktop-gallery-item-8");
    });

    this.carouselArray.slice(0, 8).forEach((e, i) => {
      e.classList.add(`desktop-gallery-item-${i + 1}`);
    });
  }

  setCurrentState(direction) {
    if (direction.className == "desktop-gallery-controls-previous") {
      this.carouselArray.unshift(this.carouselArray.pop());
    } else {
      this.carouselArray.push(this.carouselArray.shift());
    }
    this.updateGallery();
  }

  setControls() {
    const galleryControlsContainer = document.querySelector(".desktop-gallery-controls");
    this.carouselControls.forEach((control) => {
      galleryControlsContainer.appendChild(document.createElement("button")).className = `desktop-gallery-controls-${control}`;
    });
  }

  useControls() {
    const galleryControlsContainer = document.querySelector(".desktop-gallery-controls");
    const triggers = [...galleryControlsContainer.childNodes];
    triggers.forEach((control) => {
      control.addEventListener("click", (e) => {
        e.preventDefault();
        this.setCurrentState(control);
      });
    });
  }
}

const initializeCarousel = function () {
  const galleryContainer = document.querySelector(".desktop-gallery-container");

  const galleryControls = ["previous", "next"];
  const galleryItems = document.querySelectorAll(".desktop-gallery-item");
  const carousel = new Carousel(galleryContainer, galleryItems, galleryControls);
  carousel.setControls();
  carousel.useControls();
};

export default Carousel;
export { initializeCarousel };
