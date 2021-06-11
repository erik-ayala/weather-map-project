const mapboxToken = 'pk.eyJ1IjoiZXJpa2F5YWxhIiwiYSI6ImNrcHNmenJrbjBkZXkydm82dTVvZ3E1YmoifQ.6y3_E4JAD-_221jXJAT4VA';
mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-98.4936, 29.4241],
    zoom: 12
})