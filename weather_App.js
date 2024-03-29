const apiKey = "47e77f4b4c4a682d19cd5be307f10afc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.getElementById("searchButton");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "weather_App_Images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "weather_App_Images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "weather_App_Images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "weather_App_Images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "weather_App_Images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});