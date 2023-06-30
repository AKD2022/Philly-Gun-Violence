const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 4500,
  triggerElement: intro,
  triggerHook: 0
})
  .setPin(intro)
  .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  video.currentTime = delay;
}, 33.3);


/* Second Video */
const intro_after = document.querySelector(".after-intro");
const video_after = intro_after.querySelector(".after-intro video");
const text_after = intro_after.querySelector(".after-intro h1");
//END SECTION
const section_after = document.querySelector("section");
const end_after = section_after.querySelector(".after-intro h1");

//SCROLLMAGIC
const controller_after = new ScrollMagic.Controller();

//Scenes
let scene_after = new ScrollMagic.Scene({
  duration: 6000,
  triggerElement: intro_after,
  triggerHook: 0
})
  .setPin(intro_after)
  .addTo(controller_after);

//Text Animation
const textAnim_after = TweenMax.fromTo(text_after, 3, { opacity: 1 }, { opacity: 0 });

let scene2_after = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro_after,
  triggerHook: 0
})
  .setTween(textAnim_after)
  .addTo(controller_after);

//Video Animation
let accelamount_after = 0.1;
let scrollpos_after = 0;
let delay_after = 0;

scene_after.on("update", e => {
  scrollpos_after = e.scrollPos / 1000;
});

setInterval(() => {
  delay_after += (scrollpos_after - delay_after) * accelamount_after;
  console.log(scrollpos_after, delay);

  video_after.currentTime = delay;
}, 33.3);



/* Map */
var dn = L.map('dn-map').setView([39.985049, -75.137209], 11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 12,
    minZoom: 11, 
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(dn);