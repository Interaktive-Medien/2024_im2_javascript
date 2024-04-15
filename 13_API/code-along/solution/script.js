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
    try {
        const placeResponse = await fetch(url);
        return placeResponse.json();
    } catch (e) {
        console.error(e);
        return [];
    }
}
async function loadSunDetails(lat,lng) {
    const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`;
    try {
        const sunDetailsResponse = await fetch(url);
        return sunDetailsResponse.json();
    } catch (e) {
        console.error(e);
        return false;
    }
}
async function loadTimezoneDetails(lat,lng) {
    const api_key = '237134a49e794917bc43138f52bf51a3';
    const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=${api_key}`;
    try {
        const timezoneDetailsResponse = await fetch(url);
        return timezoneDetailsResponse.json();
    } catch (e) {
        console.error(e);
        return false;
    }
}

formCt.addEventListener('submit', async function (e) {
    e.preventDefault();
    const place = e.target.querySelector('#place').value;
    let placeDetails = await loadPlaceDetails(place);
    if (placeDetails.length) {
        details.place =  placeDetails[0];
        const lat = details.place.lat;
        const lng = details.place.lon;
        const sunDetails = await loadSunDetails(lat, lng);
        const timezoneDetails = await loadTimezoneDetails(lat, lng);
        if (sunDetails && timezoneDetails) {
            details.sun = sunDetails.results;
            details.timezone = timezoneDetails.features[0].properties.timezone.name;
            showResult();
        }
    }
})

function showResult () {
    // -> handle dates
    const options = {
        timeZone: details.timezone,
        hour12: false,
        hour: '2-digit',
        minute:'2-digit'
    }
    const current = new Date().toLocaleTimeString('de-CH', options);
    const sunrise = new Date(details.sun.sunrise).toLocaleTimeString('de-CH', options);
    const sunset = new Date(details.sun.sunset).toLocaleTimeString('de-CH', options);
    const sunriseOver = (parseInt(current.replace(':','')) - parseInt(sunrise.replace(':',''))) > 0;
    const sunsetOver = (parseInt(current.replace(':','')) - parseInt(sunset.replace(':',''))) > 0;
    // -> show emoji
    emojiCt.innerText = sunriseOver && !sunsetOver ? '🌞' : '🌚';
    // -> show description
    sunriseCt.innerHTML = `⬆️ Die Sonne geht um <span>${sunrise}</span> auf.`
    sunsetCt.innerHTML = `⬇️ Die Sonne geht um <span>${sunset}</span> unter.`
    // -> show location
    locationCt.innerText = `${details.place.name} | ${current}`;
    // -> show container
    resultCt.classList.remove('hidden');
    // -> change website colormode
    body.dataset.mode = sunriseOver && !sunsetOver ? 'light' : 'dark';
}
