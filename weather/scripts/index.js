import getWeatherData from './weather-api.js';


const dropdown = document.querySelector(".search-bar__dropdown");
const submitButton = document.querySelector(".search-bar__button");
let weatherData = new Weather;
let current = new Date();

submitButton.addEventListener('click', async () =>{
    let data = await getWeatherData(dropdown.value);
    startObject(data);
    createTemplate();
});

function startObject(data) {
    weatherData.city = data.name;
    weatherData.weather = data.weather[0].description;
    weatherData.temp = Math.trunc(data.main.temp - 275.15);
}
function createTemplate(){
    const tempContainer = document.querySelector(".city-temp");
    const infoContainer = document.querySelector('.weather-date-time');
    clearNode(tempContainer);
    clearNode(infoContainer);

    const cityTitle = document.createElement('h2');
    const tempTitle = document.createElement('p');
    const weatherTitle = document.createElement('h2');
    const dateContainer = document.createElement('p');
    const timeContainer = document.createElement('p');

    cityTitle.textContent = weatherData.city;
    tempTitle.textContent = `${weatherData.temp}°C`;
    weatherTitle.textContent = weatherData.weather;
    dateContainer.textContent = current.toLocaleDateString();
    timeContainer.textContent = current.toLocaleTimeString();

    tempContainer.appendChild(cityTitle);
    tempContainer.appendChild(tempTitle);
    infoContainer.appendChild(weatherTitle);
    infoContainer.appendChild(dateContainer);
    infoContainer.appendChild(timeContainer);
}

function clearNode(parent) {
    while (parent.childElementCount > 0) {
        parent.removeChild(parent.lastChild);
    }
}