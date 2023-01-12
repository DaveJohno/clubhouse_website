const heroBoxes = document.querySelectorAll(".hero-boxes");

console.log(heroBoxes);

heroBoxes.forEach((heroBox, index) => {
  heroBox.addEventListener("click", (event) => {
    if (
      !event.target.closest(".hero-boxes").classList.contains("collapse") &&
      !event.target.closest(".hero-boxes").classList.contains("expand")
    ) {
      event.target.closest(".hero-boxes").classList.add("expand");
      heroBoxes.forEach((heroBox, index) => {
        if (
          !heroBox.classList.contains("expand") &&
          !heroBox.classList.contains("colapse")
        ) {
          heroBox.classList.add("collapse");
          heroBox.classList.remove("expand");

          console.log(heroBoxes);
        }
      });
    } else if (
      event.target.closest(".hero-boxes").classList.contains("collapse")
    ) {
      event.target.closest(".hero-boxes").classList.remove("collapse");

      heroBoxes.forEach((heroBox, index) => {
        if (heroBox.classList.contains("expand")) {
          heroBox.classList.add("collapse");
          heroBox.classList.remove("expand");

          console.log(heroBoxes);
        }
      });
      event.target.closest(".hero-boxes").classList.add("expand");
    }
  });
});

const SetClassesBasedOnViewPort = () => {
  const veiwPortWidth = window.innerWidth;

  heroBoxes.forEach((heroBox, index) => {});

  if (veiwPortWidth <= 650) {
    console.log(veiwPortWidth);

    heroBoxes.forEach((heroBox) => {
      heroBox.classList.add("mobile");
      heroBox.classList.add("expand");
      heroBox.classList.remove("collapse");
    });
  } else if (veiwPortWidth >= 650) {
    heroBoxes.forEach((heroBox) => {
      heroBox.classList.remove("mobile");
      heroBox.classList.remove("expand");
      heroBox.classList.remove("collapse");
    });
  }
};

const resizeWindow = () => {
  SetClassesBasedOnViewPort();
  window.addEventListener("resize", SetClassesBasedOnViewPort);
};

resizeWindow();
