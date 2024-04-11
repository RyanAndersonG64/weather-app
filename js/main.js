document.getElementById("zipcode").addEventListener("click", function(){
    if (document.getElementById("zipcode").value === "Enter a zipcode") {
        document.getElementById("zipcode").value = "";
    }
});

let lat = 0;
let lon = 0;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(currentLocation);
} else {
    alert("Geolocation is not currently available")
}

function currentLocation(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    getWeatherAtCurrentLocation();
}

import axios from "axios";
async function getWeather(){
    let weatherURL = "https://api.openweathermap.org/data/2.5/weather?zip=" + document.getElementById("zipcode").value + ",us&appid=4ec8e174794a1b4bf79276d10fe060be";
    try {
        document.getElementById("errorMessage").textContent = "";
        let weatherData = await axios.get(weatherURL);
        console.log(weatherData)
        const data = await weatherData.data;
        document.getElementById('outputCity').textContent = data.name
        let temp = (data.main.temp);
        document.getElementById('kelvin').textContent = (temp + " K")
        let tempCelsius = (temp - 273.15).toFixed(2);
        document.getElementById('celsius').textContent = (tempCelsius + " °C")
        let tempFahrenheit = (tempCelsius * 1.8 + 32).toFixed(2);
        document.getElementById('fahrenheit').textContent = (tempFahrenheit + " °F")
        document.getElementById('outputCondition').textContent = data.weather[0].main;
        let iconURL = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
        document.getElementById('weatherIconImage').src = iconURL;
        console.log(data.weather[0].icon)
        console.log(iconURL)
        if (tempFahrenheit <= 50) {
            document.getElementById('fahrenheit').style.color = "blue";
            document.getElementById('kelvin').style.color = "blue";
            document.getElementById('celsius').style.color = "blue";
        } else if (tempFahrenheit >= 80) {
            document.getElementById('fahrenheit').style.color = "red";
            document.getElementById('kelvin').style.color = "red";
            document.getElementById('celsius').style.color = "red";
        } else {
            document.getElementById('fahrenheit').style.color = "black";
            document.getElementById('kelvin').style.color = "black";
            document.getElementById('celsius').style.color = "black";
        }
    } catch (error) {
        document.getElementById("errorMessage").textContent = "Invalid Zip Code";
        console.error("Invalid Zip Code");
        document.getElementById('outputCity').textContent = ""
        document.getElementById('kelvin').textContent = ""
        document.getElementById('celsius').textContent = ""
        document.getElementById('fahrenheit').textContent = ""
        document.getElementById('outputCondition').textContent = ""
        document.getElementById('weatherIconImage').src = ""
    }
};
document.getElementById("weatherButton").addEventListener("click", getWeather);



async function getWeatherAtCurrentLocation(){
    let weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=4ec8e174794a1b4bf79276d10fe060be";
    try {
        document.getElementById("errorMessage").textContent = "";
        let weatherData = await axios.get(weatherURL);
        console.log(weatherData)
        const data = await weatherData.data;
        document.getElementById('outputCity').textContent = data.name
        let temp = (data.main.temp);
        document.getElementById('kelvin').textContent = (temp + " K")
        let tempCelsius = (temp - 273.15).toFixed(2);
        document.getElementById('celsius').textContent = (tempCelsius + " °C")
        let tempFahrenheit = (tempCelsius * 1.8 + 32).toFixed(2);
        document.getElementById('fahrenheit').textContent = (tempFahrenheit + " °F")
        document.getElementById('outputCondition').textContent = data.weather[0].main;
        let iconURL = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
        document.getElementById('weatherIconImage').src = iconURL;
        console.log(data.weather[0].icon)
        console.log(iconURL)
        if (tempFahrenheit <= 50) {
            document.getElementById('fahrenheit').style.color = "blue";
            document.getElementById('kelvin').style.color = "blue";
            document.getElementById('celsius').style.color = "blue";
        } else if (tempFahrenheit >= 80) {
            document.getElementById('fahrenheit').style.color = "red";
            document.getElementById('kelvin').style.color = "red";
            document.getElementById('celsius').style.color = "red";
        } else {
            document.getElementById('fahrenheit').style.color = "black";
            document.getElementById('kelvin').style.color = "black";
            document.getElementById('celsius').style.color = "black";
        }
    } catch (error) {
        document.getElementById("errorMessage").textContent = "Invalid Zip Code";
        console.error("Invalid Zip Code");
        document.getElementById('outputCity').textContent = ""
        document.getElementById('kelvin').textContent = ""
        document.getElementById('celsius').textContent = ""
        document.getElementById('fahrenheit').textContent = ""
        document.getElementById('outputCondition').textContent = ""
        document.getElementById('weatherIconImage').src = ""
    }
};
document.getElementById("locationButton").addEventListener("click", getWeatherAtCurrentLocation);