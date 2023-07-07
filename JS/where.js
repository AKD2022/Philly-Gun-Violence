gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.to(".wrapper", 10, {x:-window.innerWidth})
.from (".section2 h2", 1, {})

.to(".wrapper", 10, {x:-window.innerWidth*2})
.from (".section3 h2", 1, {})

.to(".wrapper", 10, {x:-window.innerWidth*3})
.from (".section4 h2", 1, {})

ScrollTrigger.create({
    animation: tl, 
    trigger: ".wrapper",
    start: "center center",
    end: "+=4000",
    scrub: true, 
    pin:true 
})  


 