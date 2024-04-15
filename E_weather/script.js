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
    const api_key = '5e19eff729df223255fcdcc67aaf2876'; // dein API Key hier einfügen
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${api_key}&units=metric`;
}

function evaluateBestWeatherCity() {}

function showData() {}
