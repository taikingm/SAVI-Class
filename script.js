// This isn't necessary but it keeps the editor from thinking L is a typo
/* global L */

var map = L.map('map').setView([38.500893,-98.745117], 5);

// Add base layer
L.tileLayer('https://api.mapbox.com/styles/v1/taiking/cjmid0v0c44kp2spqq3j8x4g9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGFpa2luZyIsImEiOiJjamx1MzJ4NXkwZnd1M2twZWEwb281ZmtlIn0.TjccQyOx5TTdyCCZKnCTrQ', {
  maxZoom: 18
}).addTo(map);