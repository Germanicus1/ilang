const reviewsSlider = document.querySelector(".reviews");
const reviewBtns = document.querySelectorAll(".review-btn");
const reviews = [...document.querySelectorAll(".review")];
const indicators = [...document.querySelectorAll(".indicator")];

// Initial state
let currentIndex = 1; // Start at the first real review (since first and last are duplicated)
let isMoving = false; // Prevent multiple rapid clicks
let startX = 0; // Touch start position
let currentX = 0; // Current touch position
let deltaX = 0; // Difference between start and current touch positions
const swipeThreshold = 50; // Minimum swipe distance to trigger slide change

// Add active class to the first indicator
indicators[0].classList.add("bg-black");

// Show the correct active indicator
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
  indicators[activeIndicator].classList.add("bg-black");
}

// Move the slider
function moveSlider(transitionTime) {
  reviewsSlider.style.transitionDuration = `${transitionTime}ms`;
  reviewsSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
  showActiveIndicator();
}

// Handle button clicks
function handleReviewBtnClick(e) {
  if (isMoving) return;
  isMoving = true;
  e.currentTarget.id === "next" ? currentIndex++ : currentIndex--;
  moveSlider(300);
}

// Add event listeners to buttons
reviewBtns.forEach((btn) => {
  btn.addEventListener("click", handleReviewBtnClick);
});

// Reset position if at the cloned slides
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

// Swipe functionality
reviewsSlider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  currentX = startX;
  reviewsSlider.style.transitionDuration = "0ms"; // Disable smooth transition during swipe
});

reviewsSlider.addEventListener("touchmove", (e) => {
  currentX = e.touches[0].clientX;
  deltaX = currentX - startX;

  // Move the slider dynamically as the user swipes
  reviewsSlider.style.transform = `translateX(${-currentIndex * 100 + (deltaX / window.innerWidth) * 100}%)`;
});

reviewsSlider.addEventListener("touchend", () => {
  // Determine if swipe threshold is met
  if (Math.abs(deltaX) > swipeThreshold) {
    if (deltaX > 0) {
      currentIndex--; // Swipe right
    } else {
      currentIndex++; // Swipe left
    }
  }

  // Reset the slider position
  moveSlider(300);

  // Reset touch variables
  deltaX = 0;
  currentX = 0;
});

reviewsSlider.addEventListener("touchcancel", () => {
  // Reset slider position and variables in case of cancellation
  moveSlider(300);
  deltaX = 0;
  currentX = 0;
});



// const reviewsSlider = document.querySelector(".reviews");
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
//     // If at the first duplicate (last actual review), highlight the last indicator
//     activeIndicator = indicators.length - 1;
//   } else if (currentIndex === reviews.length - 1) {
//     // If at the last duplicate (first actual review), highlight the first indicator
//     activeIndicator = 0;
//   } else {
//     // Otherwise, align the indicator with the current review
//     activeIndicator = currentIndex - 1;
//   }
//   // Add the active class to the correct indicator
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
//   // Update index
//   e.currentTarget.id === "next" ? currentIndex++ : currentIndex--;
//   moveSlider(300);
// }

// reviewBtns.forEach((btn) => {
//   btn.addEventListener("click", handleReviewBtnClick);
// });

// reviewsSlider.addEventListener("transitionend", () => {
//   isMoving = false;
//   if (currentIndex === 0) {
//     currentIndex = reviews.length - 2;
//     return moveSlider(1);
//   }
//   if (currentIndex === reviews.length - 1) {
//     currentIndex = 1;
//     return moveSlider(1);
//   }
// });
