var map = L.map('map').setView([39.9526, 75.1652], 11);

var bounds = L.latLngBounds([[40.085436, -75.286956], [39.850730, -75.261550], [39.978227, -75.045585], [40.164526, -74.950909]]);
map.setMaxBounds(bounds);
map.on('drag', function() {
   map.panInsideBounds(bounds, { animate: false });
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxBounds: bounds,
    maxZoom: 12,
    minZoom: 11, 
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var circle = L.circle([40.0145, -75.1311], {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.5,
    radius: 5000
}).addTo(map);

var polygon = L.polygon([
    [40.132628, -74.993758],
    [40.118835, -74.964860],
    [40.107715, -74.965412],
    [40.095888, -74.955657],
    [40.056915, -74.985074],
    [40.048661, -74.973959],
    [40.010733, -75.045703],
    [39.981755, -75.068251],
    [39.961190, -75.126685],
    [39.892362, -75.134520],
    [39.865852, -75.212061],
    [39.879824, -75.264794],
    [39.938090, -75.234661],
    [39.973699, -75.279860],
    [40.010733, -75.206411],
    [40.053993, -75.263538],
    [40.085436, -75.212111],
    [40.083860, -75.176405],
    [40.046550, -75.109801],
    [40.063368, -75.088515],
    [40.071776, -75.096754],
    [40.137950, -75.015044],
    [40.137976, -75.015294]
]).addTo(map);



var dn = L.map('map2').setView([39.985049, -75.137209], 11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 12,
    minZoom: 11, 
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(dn);



var sn = L.map('map3').setView([39.985049, -75.137209], 11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 12,
    minZoom: 11, 
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(sn);

/* Lets Dive Deeper */
const observer2 = new IntersectionObserver((entries2) => {
    entries2.forEach((entry2) => {
        console.log(entry2)
        if (entry2.isIntersecting) {
            entry2.target.classList.add('left-transition');
        } else {
            entry2.target.classList.remove('left-transition');
        }
    });
});

const hiddenElements2 = document.querySelectorAll('.left');
hiddenElements2.forEach((el) => observer2.observe(el));


const observer3 = new IntersectionObserver((entries3) => {
    entries3.forEach((entry3) => {
        console.log(entry3)
        if (entry3.isIntersecting) {
            entry3.target.classList.add('right-transition');
        } else {
            entry3.target.classList.remove('right-transition');
        }
    });
});

const hiddenElements3 = document.querySelectorAll('.right');
hiddenElements3.forEach((el) => observer3.observe(el));




