/* Sliding Animation Starts */
let slider = document.querySelector(".slider");
let currentSlide = 0;
let totalSlides = slider.querySelectorAll(".wrapper .right > div").length - 1;

slider.querySelector(".controls .up").addEventListener("click", function() {
    if (currentSlide == 0) {
        return;
    }
    currentSlide--;
    slider.querySelector(".wrapper .left div").style.marginTop = `${currentSlide*-100}vh`;
    slider.querySelector(".wrapper .right div").style.marginTop = `${(totalSlides - currentSlide)*-100}vh`;
});

slider.querySelector(".controls .down").addEventListener("click", function() {
    if (currentSlide == totalSlides) {
        return;
    }
    currentSlide++;
    slider.querySelector(".wrapper .left div").style.marginTop = `${currentSlide*-100}vh`;
    slider.querySelector(".wrapper .right div").style.marginTop = `${(totalSlides - currentSlide)*-100}vh`;
});

/* Sliding Animation Ends */

/* Titles */
const observer1 = new IntersectionObserver((entries1) => {
    entries1.forEach((entry1) => {
        console.log(entry1)
        if (entry1.isIntersecting) {
            entry1.target.classList.add('show1');
        }
    });
});

const hiddenElements1 = document.querySelectorAll('.section-title');
hiddenElements1.forEach((el) => observer1.observe(el));

/* Paragraphs */
const observer2 = new IntersectionObserver((entries2) => {
    entries2.forEach((entry2) => {
        console.log(entry2)
        if (entry2.isIntersecting) {
            entry2.target.classList.add('show2');
        }
    });
});

const hiddenElements2 = document.querySelectorAll('.text');
hiddenElements2.forEach((el) => observer2.observe(el));

/* h6 */
const observer3 = new IntersectionObserver((entries3) => {
    entries3.forEach((entry3) => {
        console.log(entry3)
        if (entry3.isIntersecting) {
            entry3.target.classList.add('show2');
        }
    });
});

const hiddenElements3 = document.querySelectorAll('h6');
hiddenElements3.forEach((el) => observer3.observe(el));



