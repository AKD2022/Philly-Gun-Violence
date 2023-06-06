const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e) => {
  setTimeout(() => {
    splash.classList.add('display-none');
  }, 6000);
})


var firstContainer = document.querySelector(".splash");

var result = localStorage.getItem('hasRan');

if (!result) {
        localStorage.setItem('hasRan', true);
} else if (window.onclose) {
    firstContainer.classList.remove("post_animated");
    firstContainer.classList.add("animated");
    localStorage.setItem('hasRan', false);
} else {
    firstContainer.classList.remove("animated");
    firstContainer.classList.add("post_animated");
}





