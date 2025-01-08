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
  // Variables to target our base class, get carousel items, count how many carousel items there are, set the slide to 0 (which is the number that tells us the frame we're on), and set motion to true which disables interactivity.
  const itemClassName = ".carousel__photo";
  const items = document.querySelectorAll(itemClassName);
  const totalItems = items.length;
  let slide = 0;
  let moving = true;

  // To initialize the carousel, update the DOM with our own classes
  function setInitialClasses() {
    // Target the last, initial, and next items and give them the relevant class.
    // This assumes there are three or more items.
    items[totalItems - 1].classList.add("prev");
    items[0].classList.add("active");
    items[1].classList.add("next");
  }

  // Set click events to navigation buttons
  function setEventListeners() {
    const next = document.querySelector(".carousel__button--next");
    const prev = document.querySelector(".carousel__button--prev");

    next.addEventListener("click", moveNext);
    prev.addEventListener("click", movePrev);
  }

  // Disable interaction by setting 'moving' to true for the same duration as our transition (0.5s = 500ms)
  function disableInteraction() {
    moving = true;

    setTimeout(function () {
      moving = false;
    }, 500);
  }

  function moveCarouselTo(slide) {
    // Check if carousel is moving, if not, allow interaction
    if (!moving) {
      // Temporarily disable interactivity
      disableInteraction();

      // Preemptively set variables for the current next and previous slide, as well as the potential next or previous slide.
      let newPrevious = slide - 1;
      let newNext = slide + 1;
      let oldPrevious = slide - 2;
      let oldNext = slide + 2;

      console.log(newPrevious);

      // Test if carousel has more than three items
      if (totalItems - 1 > 3) {
        // Checks if the new potential slide is out of bounds and sets slide numbers
        if (newPrevious <= 0) {
          oldPrevious = totalItems - 1;
        } else if (newNext >= totalItems - 1) {
          oldNext = 0;
        }

        // Check if current slide is at the beginning or end and set slide numbers
        if (slide === 0) {
          newPrevious = totalItems - 1;
          oldPrevious = totalItems - 2;
          oldNext = slide + 1;
        } else if (slide === totalItems - 1) {
          newPrevious = slide - 1;
          newNext = 0;
          oldNext = 1;
        }

        // Reset to default classes
        items[oldPrevious].className = itemClassName;
        items[oldNext].className = itemClassName;

        // Add the new classes
        items[newPrevious].className = itemClassName + " prev";
        items[slide].className = itemClassName + " active";
        items[newNext].className = itemClassName + " next";
      }
    }
  }

  // Next navigation handler
  function moveNext() {
    if (!moving) {
      slide = slide === totalItems - 1 ? 0 : slide + 1;
      moveCarouselTo(slide);
    }
  }

  // Previous navigation handler
  function movePrev() {
    if (!moving) {
      slide = slide === 0 ? totalItems - 1 : slide - 1;
      moveCarouselTo(slide);
    }
  }

  // Initialize the carousel
  function initCarousel() {
    setInitialClasses();
    setEventListeners();

    // Set moving to false now that the carousel is ready
    moving = false;
  }

  // Start the carousel
  initCarousel();
}
