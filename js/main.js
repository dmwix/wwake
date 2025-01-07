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
}

let resizeTimeout;

window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout); // Cancel the previous timeout
  resizeTimeout = setTimeout(() => {
    updateViewportHeight(); // Execute the function after 150ms of inactivity
  }, 150); // Adjust delay as needed
});
