mapboxgl.accessToken = MAPBOX_TOKEN;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-98.4916, 29.4252]
});


let marker;

mapEvent();

let geocoder = setGeocoder();
addGeocoderToMap(geocoder);

function setGeocoder() {
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    })
}
function addGeocoderToMap(geocoder){
    map.addControl(geocoder);
    geocoder.on('result', function (event){
        console.log(event.result.place_name);
        console.log(event.result.geometry.coordinates);
        // console.log(event);
        setMarker(event.result.geometry.coordinates);
        marker.setPopup(displayPopup(event.result.place_name));

        fetchForeCast(event.result.geometry.coordinates);
    });
}

function setMarker(point) {
    if(!marker) {
        marker = new mapboxgl.Marker().setLngLat(point).addTo(map)
    }else{
        marker.setLngLat(point);
    }
}

function mapEvent(){
    map.on('click', function (event){
        setMarker(event.lngLat)
        console.log(event.lngLat);

        fetchForeCast([event.lngLat.lng, event.lngLat.lat])
    });
}

function displayPopup(textDetails){
    return new mapboxgl.Popup().setHTML(`<p>${textDetails}</p>`).addTo(map);
}
