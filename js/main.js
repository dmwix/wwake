"use strict";

function updateViewportHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

document.addEventListener("DOMContentLoaded", runUpdateFunctions);
window.addEventListener("resize", updateViewportHeight);
window.addEventListener("scroll", headerColor);

const body = document.querySelector("body");
const header = document.querySelector("header");

function headerColor() {
  if (window.scrollY >= 90) {
    body.classList.add("scrolled");
  } else {
    body.classList.remove("scrolled");
  }
}

let headerHeight;

function updateHeaderHeight() {
  headerHeight = header.offsetHeight;
}

function updateScrollPadding() {
  document.documentElement.style.scrollPaddingTop = `${headerHeight}px`;
}

function runUpdateFunctions() {
  updateViewportHeight();
  updateHeaderHeight();
  updateScrollPadding();
  slider();
}

let resizeTimeout;

window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout); // Cancel the previous timeout
  resizeTimeout = setTimeout(() => {
    updateViewportHeight(); // Execute the function after 150ms of inactivity
  }, 150); // Adjust delay as needed
});

// ______________ CAROUSEL ______________

function slider() {
  const slides = document.querySelectorAll(".slide");
  const bulletsContainer = document.querySelector(".bullets");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  let currentIndex = 0;
  let timer;

  // Apply background images from data-bg attribute
  slides.forEach((slide) => {
    const bgImage = slide.getAttribute("data-bg");
    // slide.style.backgroundImage = `url(${bgImage})`;
    slide.style.background = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)), url(${bgImage}) center / cover`;
  });

  // Create bullets
  slides.forEach((_, index) => {
    const bullet = document.createElement("button");
    bullet.addEventListener("click", () => goToSlide(index));
    bulletsContainer.appendChild(bullet);
  });

  const bullets = bulletsContainer.querySelectorAll("button");

  function updateSlider() {
    slides.forEach((slide, index) => {
      slide.classList.toggle("active", index === currentIndex);
    });
    bullets.forEach((bullet, index) => {
      bullet.classList.toggle("active", index === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = index;
    updateSlider();
    resetAutoplay();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
    resetAutoplay();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
    resetAutoplay();
  }

  function resetAutoplay() {
    clearInterval(timer);
    timer = setInterval(nextSlide, 4000);
  }

  // Event listeners
  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);

  // Initialize
  function init() {
    updateSlider();
    timer = setInterval(nextSlide, 4000);
  }

  init();
}
