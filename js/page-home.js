"use strict";

document.addEventListener("DOMContentLoaded", slider);

window.addEventListener("scroll", headerColor);

const body = document.querySelector("body");

function headerColor() {
  if (window.scrollY >= 90) {
    body.classList.add("scrolled");
  } else {
    body.classList.remove("scrolled");
  }
}

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
    slide.style.background = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(${bgImage}) center / cover`;
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
