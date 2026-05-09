const slides = Array.from(document.querySelectorAll(".slide"));
let currentSlide = 0;
let hasShownInitialSlide = false;

function fitSlide() {
  const rootStyle = getComputedStyle(document.documentElement);
  const slideWidth = Number(rootStyle.getPropertyValue("--slide-width"));
  const slideHeight = Number(rootStyle.getPropertyValue("--slide-height"));
  const scale = Math.min(window.innerWidth / slideWidth, window.innerHeight / slideHeight);

  document.documentElement.style.setProperty("--scale", scale.toFixed(4));
}

function showSlide(index, options = {}) {
  fitSlide();

  const nextSlide = Math.max(0, Math.min(index, slides.length - 1));
  const isForwardNavigation = Boolean(options.animate) && hasShownInitialSlide && nextSlide > currentSlide;
  const slideNumber = slides[nextSlide].dataset.slide || String(nextSlide + 1);
  const currentSlideNumber = slides[currentSlide]?.dataset.slide || String(currentSlide + 1);
  const shouldExpandViabilityBackground =
    isForwardNavigation && currentSlideNumber === "10" && slideNumber === "11";

  slides.forEach((slide, slideIndex) => {
    slide.classList.remove("is-forward");
    slide.classList.remove("is-viability-expand");
    slide.classList.toggle("is-active", slideIndex === nextSlide);
  });

  if (isForwardNavigation) {
    slides[nextSlide].classList.add("is-forward");
  }

  if (shouldExpandViabilityBackground) {
    slides[nextSlide].classList.add("is-viability-expand");
  }

  currentSlide = nextSlide;
  hasShownInitialSlide = true;
  window.history.replaceState(null, "", `#slide-${slideNumber}`);
}

function showFromHash() {
  const match = window.location.hash.match(/^#slide-(\d+)$/);
  if (!match) {
    showSlide(0);
    return;
  }
  const requestedSlide = match[1];
  const matchedIndex = slides.findIndex((slide) => slide.dataset.slide === requestedSlide);
  showSlide(matchedIndex === -1 ? Number(requestedSlide) - 1 : matchedIndex);
}

window.addEventListener("resize", fitSlide);
window.addEventListener("hashchange", showFromHash);
window.addEventListener("keydown", (event) => {
  if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(event.key)) {
    event.preventDefault();
    showSlide(currentSlide + 1, { animate: true });
  }
  if (["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) {
    event.preventDefault();
    showSlide(currentSlide - 1);
  }
});

window.addEventListener("click", (event) => {
  if (event.button !== 0) {
    return;
  }
  showSlide(currentSlide + 1, { animate: true });
});

fitSlide();
showFromHash();
