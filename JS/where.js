var map = L.map('map').setView([39.95, -75.1667], 17)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([39.95, -75.1667]).addTo(map);

var circle = L.circle([40.0145, -75.1311], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 5000
}).addTo(map);

var polygon = L.polygon([
    [40.137976, -75.015294],
    [40.3400, -75.1100],
    [51.51, -0.047]
]).addTo(map);

