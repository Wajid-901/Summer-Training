const apiKey = "f1e818aaa263a96b4cc31e9f2d7069de";

// DOM Elements
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");

const getWeather = async () => {

    const city = cityInput.value.trim();

    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    searchBtn.disabled = true;
    searchBtn.textContent = "Loading...";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found.");
        }

        const data = await response.json();

        const { name } = data;
        const { temp, humidity: humid } = data.main;
        const { speed } = data.wind;
        const weatherCondition = data.weather[0].description;

        cityName.textContent = `City : ${name}`;
        temperature.textContent = `Temperature : ${temp} °C`;
        condition.textContent = `Condition : ${weatherCondition}`;
        humidity.textContent = `Humidity : ${humid}%`;
        windSpeed.textContent = `Wind Speed : ${speed} m/s`;

    } catch (error) {

        cityName.textContent = "";
        temperature.textContent = "";
        condition.textContent = "";
        humidity.textContent = "";
        windSpeed.textContent = "";

        alert(error.message);

    } finally {

        searchBtn.disabled = false;
        searchBtn.textContent = "Search";

    }

};

searchBtn.addEventListener("click", getWeather);