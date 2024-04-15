const weatherCt = document.querySelector('#weather');
const iconCt = weatherCt.querySelector('#icon');
const locationCt = weatherCt.querySelector('#location');
const detailsCt = weatherCt.querySelector('#details');

let cities = [
    { name: 'Zürich', lat: 47.3769, lng: 8.5417 },
    { name: 'Genève', lat: 46.2044, lng: 6.1432 },
    { name: 'Basel', lat: 47.5596, lng: 7.5886 },
    { name: 'Lausanne', lat: 46.5196, lng: 6.6323 },
    { name: 'Bern', lat: 46.9480, lng: 7.4474 },
    { name: 'Winterthur', lat: 47.4984, lng: 8.7241 },
    { name: 'Luzern', lat: 47.0502, lng: 8.3093 },
    { name: 'St. Gallen', lat: 47.4984, lng: 9.4910 },
    { name: 'Lugano', lat: 46.0037, lng: 8.9511 },
    { name: 'Bienne', lat: 47.1410, lng: 7.2576 },
    { name: 'Thun', lat: 46.7512, lng: 7.6278 },
    { name: 'Köniz', lat: 46.9240, lng: 7.4140 },
    { name: 'La Chaux-de-Fonds', lat: 47.1035, lng: 6.8256 },
    { name: 'Fribourg', lat: 46.8065, lng: 7.1612 },
    { name: 'Schaffhausen', lat: 47.6965, lng: 8.6346 },
    { name: 'Chur', lat: 46.8499, lng: 9.5329 },
    { name: 'Vernier', lat: 46.2170, lng: 6.0844 },
    { name: 'Neuchâtel', lat: 46.9899, lng: 6.9266 },
    { name: 'Uster', lat: 47.3471, lng: 8.7202 },
    { name: 'Sion', lat: 46.2331, lng: 7.3606 }
];
const conditions_ranking_from_worst_to_best = [
    "Tornado",
    "Ash",
    "Smoke",
    "Thunderstorm",
    "Rain",
    "Drizzle",
    "Fog",
    "Mist",
    "Dust",
    "Sand",
    "Haze",
    "Clouds",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Clear"
]

async function loadWeather(lat,lng) {
    const api_key = '5e19eff729df223255fcdcc67aaf2876';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${api_key}&units=metric`;
    try {
        const weatherResponse = await fetch(url);
        return await weatherResponse.json();
    } catch (e) {
        console.error(e);
        return false;
    }
}
for (const [key, city] of cities.entries()) {
    cities[key].weather = await loadWeather(city.lat, city.lng);
    cities[key].points = 0;
}

function evaluateBestWeatherCity() {
    // -> wind
    let wind = cities.sort((a, b) => {
        return a.weather.wind.speed - b.weather.wind.speed
    });
    wind.forEach((city,key) => {
        // console.log(cities.length - (key + 1), 'points for', city.name, 'with wind of', city.weather.wind.speed);
        city.points += cities.length - (key + 1);
    })
    // -> temperatur
    let temperature = cities.filter(city => {
        return city.weather.main.feels_like < 28 && city.weather.main.temp_max < 30 && city.weather.main.temp_min > 0;
    })
    temperature = temperature.sort((a, b) => {
        return b.weather.main.feels_like - a.weather.main.feels_like
    })
    temperature.forEach((city,key) => {
        // console.log(cities.length - (key + 1), 'points for', city.name, 'with temperature of', city.weather.main.feels_like);
        city.points += cities.length - (key + 1);
    })
    // -> conditions
    let conditions = cities.filter(city => {
        return conditions_ranking_from_worst_to_best.includes(city.weather.weather[0].main);
    });
    conditions.forEach((city,key) => {
        const points = conditions_ranking_from_worst_to_best.indexOf(city.weather.weather[0].main);
        // console.log(points, 'points for', city.name, 'with condition', city.weather.weather[0].main);
        city.points += points;
    })
    // -> final sort
    const sorted_cities = cities.sort((a, b) => {
        return b.points - a.points;
    })
    if (sorted_cities.length) {
        return sorted_cities[0]
    } else {
        return false;
    }
}
const bestWeatherCity = evaluateBestWeatherCity();

function showData() {
    iconCt.setAttribute('src', `https://openweathermap.org/img/wn/${bestWeatherCity.weather.weather[0].icon}@2x.png`)
    locationCt.innerText = bestWeatherCity.name;
    const desc = bestWeatherCity.weather.weather[0].description;
    const temp = Math.round(bestWeatherCity.weather.main.feels_like);
    const wind = bestWeatherCity.weather.wind.speed;
    detailsCt.innerHTML = `<p>${desc}</p><p>Feels like ${temp}°C</p><p>${wind} m/s wind</p>`;
}
showData();
