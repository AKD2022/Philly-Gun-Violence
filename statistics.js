let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}  

ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('.main-title', { delay: 500 });
