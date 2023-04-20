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

var nav = document.querySelector('nav');
window.addEventListener('scroll', function() {
    if (window.pageXOffset > 100) {
        nav.classList.add('bg-dark', 'shadow');
    } else {
        nav.classList.remove('bg-dark', 'shadow');
    }
});
