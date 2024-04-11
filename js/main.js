document.getElementById("zipcode").addEventListener("click", function(){
    if (document.getElementById("zipcode").value === "Enter a zipcode") {
        document.getElementById("zipcode").value = "";
    }
});

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
    } catch (error) {
        document.getElementById("errorMessage").textContent = "Invalid Zip Code";
        console.error("Invalid Zip Code");
    }
};
document.getElementById("weatherButton").addEventListener("click", getWeather);