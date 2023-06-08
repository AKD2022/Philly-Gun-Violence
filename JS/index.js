const splash = document.querySelector('.splash');
document.addEventListener('DOMContentLoaded', (e) => {
  setTimeout(() => {
    splash.classList.add('display-none');
  }, 6000);
})


var firstContainer = document.querySelector(".splash");
var already_splashed = document.querySelector(".btn");
var already_splashed2 = document.querySelector(".details h1");
var already_splashed3 = document.querySelector(".details p");
var bg_already_splashed = document.querySelector(".container")

var result = sessionStorage.getItem('hasRan');

if (!result) {
        sessionStorage.setItem('hasRan', true);
} else {
    firstContainer.classList.remove("animated");
    firstContainer.classList.add("post_animated");
    already_splashed.classList.add("fade-in-already");
    already_splashed2.classList.add("fade-in-already2");
    already_splashed3.classList.add("fade-in-already3");
    bg_already_splashed.classList.add("bg_already_splashed");
}

