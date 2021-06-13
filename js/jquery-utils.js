$('h1').css("color", "red")

function buildDOMObjects (forecastData) {
    console.log(forecastData);
    $("#forecast").append(`
<div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text"> ${forecastData[0].main.temp} </p>
        </div>
</div> `)
}

// $('#forecast').append("<div class='card'><p> ${forecastData} </p></div>");
