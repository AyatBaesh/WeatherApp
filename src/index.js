import { getWeather } from "./getWeather.js";

const searchForm = document.querySelector('#searchForm');
const searchInput = document.querySelector('#searchInput');
const searchResult = document.querySelector('#searchResult');
const city = document.querySelector('#cityName');
const temperature = document.querySelector('#temperature');
const humidity = document.querySelector('#humidity');
const wind = document.querySelector('#wind');

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if(!searchInput.value){
        return;
    }

    try{
    let weather = await getWeather(searchInput.value);
    searchResult.style.display = 'block';
    city.textContent = "Location: " + weather.location.name;
    temperature.textContent = "Temperature: " + weather.current.temp_c + "\u00B0C";
    humidity.textContent = `Humidity: ${weather.current.humidity}%`;
    wind.textContent = `Wind: ${weather.current.wind_kph} km/h`;

    }catch(error){
        alert("No such location found");
        searchResult.style.display = 'none';
        searchInput.value = '';
        return;
    }
});


