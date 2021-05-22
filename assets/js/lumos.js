document.addEventListener("DOMContentLoaded", function () {
  document.body.appendChild(document.getElementById("lumos-template").content);
  const lumosContainer = document.getElementById("lumos-container");
  const lumosImage = document.getElementById("lumos-image");
  const lumosCaption = document.getElementById("lumos-caption");
  const images = document.querySelectorAll("[data-action='lumos']");
  const animationDuration = 250;

  function hide() { isVisible() && (lumosContainer.classList.add("hidden"),
      setTimeout(() => {
        lumosContainer.classList.remove("visible");
        lumosImage.src = "";
        lumosImage.alt = "";
        if (lumosCaption !== null) {
          lumosCaption.textContent = ""
        }
        lumosContainer.classList.remove("hidden")
      }, animationDuration))
  }
  function isVisible() {
    return lumosContainer.classList.contains("visible")
  }
  window.addEventListener("keyup", (e) => {
    "Escape" === e.key && hide()
  });
  images.forEach((image) => {
    image.addEventListener( "click", () => {
      lumosImage.src =
        void 0 === image.dataset.lumosSrc ? image.src : image.dataset.lumosSrc;
      lumosImage.alt =
        void 0 === image.dataset.lumosAlt ? image.alt : image.dataset.lumosAlt;
      if (lumosCaption !== null) {
        lumosCaption.textContent = image.dataset.lumosCaption
      }
      isVisible() ||
        (lumosContainer.classList.remove("hidden"),
        lumosContainer.classList.add("visible"))
    })
  });
  lumosContainer.addEventListener("click", hide);
});
