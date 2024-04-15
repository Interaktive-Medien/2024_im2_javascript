const body = document.querySelector('body');
const formCt = document.querySelector('form');
const resultCt = document.querySelector('#result');
const emojiCt = resultCt.querySelector('#emoji');
const locationCt = resultCt.querySelector('#location');
const sunriseCt = resultCt.querySelector('#sunrise');
const sunsetCt = resultCt.querySelector('#sunset');

let details = {
    place: false,
    sun: false,
    timezone: false
}

async function loadPlaceDetails(place) {
    const url = `https://nominatim.openstreetmap.org/search?city=${place}&format=json`;
}
async function loadSunDetails(lat,lng) {
    const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`;
}
async function loadTimezoneDetails(lat,lng) {
    const api_key = '237134a49e794917bc43138f52bf51a3';
    const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=${api_key}`;
}

formCt.addEventListener('submit', async function (e) {
    e.preventDefault();
    // -> load data
})

function showResult () {
    // -> show result
    console.log('details', details)
}
