function buildDOMObjects (forecastData, location) {
    $('#forecast').empty()
    console.log(forecastData);
    console.log(location);
    for (let i = 0; i < forecastData.length; i++) {
        let temp = forecastData[i].main.temp;
        let feels = forecastData[i].main.feels_like;
        let max = forecastData[i].main.temp_max;
        let low = forecastData[i].main.temp_min;
        let des = forecastData[i].weather[0].description.toUpperCase();

        let loc = location.name;

        let date = forecastData[i].dt;
        date = new Date(date * 1000);
        let formattedDate = new Date(date).toDateString();

        $("#forecast").append(`
<div class="card col-2 mx-4" style="width: 18rem;" id="cardBody">
        <div class="card-body" >
            <h4 class="card-title">
            ${loc}</h4>
            <br>
            ${formattedDate}
            <p class="card-text"> 
            Temperature: ${temp}
            <br>  
            ${des}
            <br>
            It feels like: ${feels}
            <br>
            High: ${max}
            <br>
            Low: ${low}
            <br>
            </p>
        </div>
</div> `)
    }
}

$("body").css("background-color", "#2c3e50")
