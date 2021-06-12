// const mapboxToken = 'pk.eyJ1IjoiZXJpa2F5YWxhIiwiYSI6ImNrcHNmenJrbjBkZXkydm82dTVvZ3E1YmoifQ.6y3_E4JAD-_221jXJAT4VA';
// mapboxgl.accessToken = mapboxToken;
// var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/dark-v10',
//     center: [-98.4936, 29.4241],
//     zoom: 12
// })
mapboxgl.accessToken = MAPBOX_TOKEN;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-98.4916, 29.4252]
});


let marker;

addMapEvent();

let geocoder = setGeocoder();
addGeocoderToMap(geocoder);

function setGeocoder() {
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    })
}
function addGeocoderToMap(geocoder) {
    map.addControl(geocoder);
    geocoder.on('result', function (event) {
        console.log(event);
        if (marker) {
            marker.remove()
        }
        getMarker(event.result.geometry.coordinates).setPopup(getPopup(event.result.place_name)
        ).togglePopup()
    })
}

// creates the marker
function getMarker(point) {
    return new mapboxgl.Marker().setLngLat(point).addTo(map);
}

// adds event to map that changes location of marker based
// on where the user clicks
function addMapEvent() {
    map.on('click', function (event) {
        console.log(event.lngLat);
        if (!marker) {
            marker = getMarker(event.lngLat);
        } else {
            marker.setLngLat(event.lngLat);
        }
    })
}

function getPopup(textDetails) {
    return new mapboxgl.Popup().setHTML(`<p>${textDetails}</p>`).addTo(map);
}