/* Map */
var generalView = L.map('gp-map').setView([39.985049, -75.137209], 11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 12,
    minZoom: 11, 
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(generalView);

var bounds = L.latLngBounds([[40.085436, -75.286956], [39.850730, -75.261550], [39.978227, -75.045585], [40.164526, -74.950909]]);
generalView.setMaxBounds(bounds);
generalView.on('drag', function() {
   map.panInsideBounds(bounds, { animate: false });
});



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
]).addTo(generalView);


const observer1 = new IntersectionObserver((entries1) => {
    entries1.forEach((entry1) => {
        console.log(entry1)
        if (entry1.isIntersecting) {
            entry1.target.classList.add('fade-in-delay');
        }
    });
});

const hiddenElements1 = document.querySelectorAll('.gonorth-content');
hiddenElements1.forEach((el) => observer1.observe(el));



