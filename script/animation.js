
// Get the container element
var cards = document.querySelectorAll('.card-cont');
var textCont = document.querySelectorAll('.actiontxt');
var floatc = document.querySelectorAll('.card');

// Function to check if the container is in the viewport
function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle the scroll event
function cardScroll() {
  cards.forEach(function (card) {
    if (isElementInViewport(card)) {
      card.classList.add("animate__fadeInUp");
    }
  });
}

function textScroll() {
  textCont.forEach(function (text) {
    if (isElementInViewport(text)) {
      text.classList.add("animate__fadeInUp");
    }
  });
}

function fcardsScroll() {
  floatc.forEach(function (fcard) {
    if (isElementInViewport(fcard)) {
      fcard.classList.add("animate__fadeInUp");
    }
  });
}

// Add the scroll event listener
window.addEventListener('scroll', cardScroll);
window.addEventListener('scroll', textScroll);
window.addEventListener('scroll', fcardsScroll);

