// // import Hammer from "hammerjs";

// // const reviewsSliderID = document.getElementById("reviews");
// console.log("TEST");
// const reviewsSlider = document.querySelector(".reviews");
// console.log(reviewsSlider);
// const reviewBtns = document.querySelectorAll(".review-btn");
// const reviews = [...document.querySelectorAll(".review")];
// const indicators = [...document.querySelectorAll(".indicator")];


// // Initial state
// let currentIndex = 1; // Start at the first real review (since first and last are duplicated)
// let isMoving = false; // Prevent multiple clicks during animation

// indicators[0].classList.add("bg-black");

// function showActiveIndicator() {
//   indicators.forEach((ind) => ind.classList.remove("bg-black"));
//   let activeIndicator;

//   if (currentIndex === 0) {
//     activeIndicator = indicators.length - 1;
//   } else if (currentIndex === reviews.length - 1) {
//     activeIndicator = 0;
//   } else {
//     activeIndicator = currentIndex - 1;
//   }
//   indicators[activeIndicator].classList.add("bg-black");
// }

// // Move slider to the current index
// function moveSlider(transitionTime) {
//   reviewsSlider.style.transitionDuration = transitionTime + "ms";
//   reviewsSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
//   showActiveIndicator();
// }

// // Handle button clicks
// function handleReviewBtnClick(e) {
//   if (isMoving) {
//     return;
//   } // Prevent multiple rapid clicks
//   isMoving = true;
//   e.currentTarget.id === "next" ? currentIndex++ : currentIndex--;
//   moveSlider(300);
// }

// // Add event listeners for buttons
// reviewBtns.forEach((btn) => {
//   btn.addEventListener("click", handleReviewBtnClick);
// });

// // Handle slider transition end
// reviewsSlider.addEventListener("transitionend", () => {
//   isMoving = false;
//   if (currentIndex === 0) {
//     currentIndex = reviews.length - 2;
//     moveSlider(1);
//   }
//   if (currentIndex === reviews.length - 1) {
//     currentIndex = 1;
//     moveSlider(1);
//   }
// });




const reviewsSlider = document.querySelector(".reviews");
const reviewBtns = document.querySelectorAll(".review-btn");
const reviews = [...document.querySelectorAll(".review")];
const indicators = [...document.querySelectorAll(".indicator")];

// Initial state
let currentIndex = 1; // Start at the first real review
let isMoving = false; // Prevent multiple rapid clicks

// Debugging logs
// console.log("Reviews Slider: ", reviewsSlider);
// console.log("Review Buttons: ", reviewBtns);
// console.log("Reviews: ", reviews);
// console.log("Indicators: ", indicators);

if (indicators.length > 0) {
  indicators[0].classList.add("bg-black");
}

function showActiveIndicator() {
  indicators.forEach((ind) => ind.classList.remove("bg-black"));
  let activeIndicator;

  if (currentIndex === 0) {
    activeIndicator = indicators.length - 1;
  } else if (currentIndex === reviews.length - 1) {
    activeIndicator = 0;
  } else {
    activeIndicator = currentIndex - 1;
  }
  if (activeIndicator !== undefined) {
    indicators[activeIndicator].classList.add("bg-black");
  }
}

function moveSlider(transitionTime) {
  reviewsSlider.style.transitionDuration = `${transitionTime}ms`;
  reviewsSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
  showActiveIndicator();
}

function handleReviewBtnClick(e) {
  if (isMoving) return;

  console.log(`${e.currentTarget.id} clicked`);
  isMoving = true;

  e.currentTarget.id === "next" ? currentIndex++ : currentIndex--;
  moveSlider(300);
}

reviewBtns.forEach((btn) => {
  btn.addEventListener("click", handleReviewBtnClick);
});

reviewsSlider.addEventListener("transitionend", () => {
  isMoving = false;

  if (currentIndex === 0) {
    currentIndex = reviews.length - 2;
    moveSlider(1);
  }
  if (currentIndex === reviews.length - 1) {
    currentIndex = 1;
    moveSlider(1);
  }
});


// Initialize Hammer.js for swipe functionality
const hammer = new Hammer(reviewsSlider);

// Configure Hammer.js to recognize swipe gestures
hammer.get("swipe").set({ direction: Hammer.DIRECTION_HORIZONTAL });

// Handle swipe left (next review)
hammer.on("swipeleft tab press", (e) => {
  console.log(e.type)
  if (!isMoving) {
    currentIndex++;
    moveSlider(300);
  }
});

// Handle swipe right (previous review)
hammer.on("swiperight", (e) => {
  console.log(e.type)
  if (!isMoving) {
    currentIndex--;
    moveSlider(300);
  }
});

// Prevent horizontal scrolling on mobile during swipes

// Detect if the device is mobile
function isMobile() {
  return window.innerWidth <= 768; // Adjust breakpoint for your needs
}

document.addEventListener('touchmove',
  (e) => {
    if (isMobile()) {
      console.log('isMobile: ', isMobile)
      e.preventDefault(); // Prevent horizontal scrolling
    }
  },
  { passive: false }
);