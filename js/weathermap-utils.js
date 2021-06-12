let fetchForeCast = function (coords) {
    $.ajax({
        url:"http://api.openweathermap.org/data/2.5/forecast",
        type: "GET",
        data: {
            APPID: OPEN_WEATHERMAP_TOKEN,
            // q: "San Antonio, Tx, US"
            lat: 42.7261,
            lon: -87.7829,
            units: "imperial"
        },
        success: function (data){

            buildDOMObjects(filterWeatherObjects(data));
        },

    });
}

function filterWeatherObjects(data){
    let arr = [];
    for(let i = 0; i < data.list.length; i++) {
        if(i % 8 === 0){
            arr.push(data.list)
        }
    }
    return arr
}