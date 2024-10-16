

const apiKey = "83f2d1e30d2518bb3b26bb15ee176b02";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const cityElement = document.querySelector(".city");
const temperatureElement = document.querySelector(".temperature");
const humidityElement = document.querySelector(".humidity");
const windElement = document.querySelector(".wind");
const errorElement = document.querySelector(".error");
const weatherElement = document.querySelector(".weather");



async function checkWeather(city) {
   try {
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        updateWeather(data);
    } catch (error) {
        displayError(error.message);
    }
}

    function updateWeather(data) {
      cityElement.textContent = data.name;
      temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
      humidityElement.textContent = `${data.main.humidity}%`;
      windElement.textContent = `${data.wind.speed} km/h`;

      if (data.weather[0].main == "Clouds")
        weatherIcon.src = "images/clouds.png";
      else if (data.weather[0].main == "Clear")
        weatherIcon.src = "images/clear.png";
      else if (data.weather[0].main == "Rain")
        weatherIcon.src = "images/rain.png";
      else if (data.weather[0].main == "Drizzle")
        weatherIcon.src = "images/drizzle.png";
      else if (data.weather[0].main == "Mist")
        weatherIcon.src = "images/mist.png";
      else if (data.weather[0].main == "Snow")
        weatherIcon.src = "images/snow.png";

      weatherElement.style.display = "block";
      errorElement.style.display = "none";
    }


    function displayError(message) {
      errorElement.textContent = message;
      errorElement.style.display = "block";
      weatherElement.style.display = "none";
    }





    
    //EVENT LISTENER FOR SEARCH BUTTON
        searchBtn.addEventListener("click",()=>{
            checkWeather(searchBox.value);
        })


