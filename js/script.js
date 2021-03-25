//Selecting target element


const weathericon = document.querySelector(".weather-icon");
const cityValue = document.querySelector(".city");
const tempValue = document.querySelector(".temp");
const desc = document.querySelector(".desc");
const locOverview = document.querySelector("#location-overview");
const btn = document.querySelector(".get-local");

const weather = {}

weather.temperature ={
    unit: "celsius"
}

const Kelvin = 273;
const Key = "9378b429dd8cb9244dbbde76f435a174";

    btn.addEventListener('click', function(){
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Lagos,Nigeria&appid=9378b429dd8cb9244dbbde76f435a174')
    .then(function (response){
        let data = response.json();
        return data;
    })
    .then(function(data){
        weather.temperature.value = Math.floor(data.main.temp - Kelvin);
        weather.description = data.weather[0].description;
        weather.city = data.name;
        weather.country = data.sys.country;
    })
    .then(function(){
        displayWeather()
    })

function displayWeather()
{
    cityValue.innerHTML = ` ${weather.city}, ${weather.country}`;
    tempValue.innerHTML =`${weather.temperature.value}°<span>C</span>`;
    desc.innerHTML = weather.description;
}
    })

    






