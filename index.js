const myslide = document.querySelectorAll(".myslide"),
  dot = document.querySelectorAll(".dot");
let counter = 1;

showSlides(counter); // Call the initial slide display

let timer = setInterval(autoSlide, 8000);

function autoSlide() {
  counter += 1;
  showSlides(counter);
}

function plusSlides(n) {
  counter += n;
  showSlides(counter);
  resetTimer();
}

function currentSlide(n) {
  counter = n;
  showSlides(counter);
  resetTimer();
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoSlide, 8000);
}

function showSlides(n) {
  let i;
  for (i = 0; i < myslide.length; i++) {
    myslide[i].style.display = "none";
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  if (n > myslide.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = myslide.length;
  }
  myslide[counter - 1].style.display = "block";
  dot[counter - 1].className += " active";
}

const loginPopup = document.querySelector(".login-popup");
const close = document.querySelector(".close");

window.addEventListener("load", function () {
  showPopup();
});

function showPopup() {
  const timeLimit = 3; // seconds;
  let i = 0;
  const timer = setInterval(function () {
    i++;
    if (i == timeLimit) {
      clearInterval(timer);
      loginPopup.classList.add("show");
    }
    console.log(i);
  }, 1000);
}

close.addEventListener("click", function () {
  loginPopup.classList.remove("show");
});
