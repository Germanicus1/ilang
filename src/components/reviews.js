const reviewsSlider = document.querySelector(".reviews");
const reviewBtns = document.querySelectorAll(".review-btn");
const reviews = [...document.querySelectorAll(".review")];
const indicators = [...document.querySelectorAll(".indicator")];

// Initial state
let currentIndex = 1; // Start at the first real review (since first and last are duplicated)
let isMoving = false; // Prevent multiple clicks during animation

indicators[0].classList.add("bg-black");

function showActiveIndicator() {
  indicators.forEach((ind) => ind.classList.remove("bg-black"));
  let activeIndicator;

  if (currentIndex === 0) {
    // If at the first duplicate (last actual review), highlight the last indicator
    activeIndicator = indicators.length - 1;
  } else if (currentIndex === reviews.length - 1) {
    // If at the last duplicate (first actual review), highlight the first indicator
    activeIndicator = 0;
  } else {
    // Otherwise, align the indicator with the current review
    activeIndicator = currentIndex - 1;
  }
  // Add the active class to the correct indicator
  indicators[activeIndicator].classList.add("bg-black");
}

// Move slider to the current index
function moveSlider(transitionTime) {
  reviewsSlider.style.transitionDuration = transitionTime + "ms";
  reviewsSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
  showActiveIndicator();
}

// Handle button clicks
function handleReviewBtnClick(e) {
  if (isMoving) {
    return;
  } // Prevent multiple rapid clicks
  isMoving = true;
  // Update index
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
    return moveSlider(1);
  }
  if (currentIndex === reviews.length - 1) {
    currentIndex = 1;
    return moveSlider(1);
  }
});
