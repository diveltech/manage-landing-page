import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider/keen-slider.cjs";

function navigation(slider) {
  const sliderDots = document.querySelector("#slider-dots");

  function dotMarkup() {
    slider.track.details.slides.forEach((_e, idx) => {
      const dotItem = document.createElement("div");
      dotItem.classList.add("slider-dots__dot");
      sliderDots.appendChild(dotItem);
    });
  }
  function updateClasses() {
    let slide = slider.track.details.rel;
    Array.from(sliderDots.children).forEach(function (dot, idx) {
      idx === slide
        ? dot.classList.add("is-active")
        : dot.classList.remove("is-active");
    });
  }
  slider.on("created", () => {
    dotMarkup();
    updateClasses();
  });
  slider.on("slideChanged", () => {
    updateClasses();
  });
}

var slider = new KeenSlider(
  "#my-keen-slider",
  {
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2,
        },
      },
      "(min-width: 1400px)": {
        slides: {
          perView: 3,
        },
      },
    },
  },
  [navigation]
);
