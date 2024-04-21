/****GLOBALS************************/
// DOM-elements
const main = document.querySelector('main');
const flagsCt = main.querySelector('#flags');
const overviewCt = main.querySelector('#overview');
const countryTitle = main.querySelector('#country');

// constants
const gameRounds = 10;

// functions
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/****APP****************************/
// load data
async function loadCountries () {
    const file = '../data/countries.json';
    const response = await fetch(file);
    return await response.json();
}
const countries = await loadCountries();

// init game progress from local storage or init new game
let gameProgress = localStorage.getItem('game-progress');
function initGame() {
    if (gameProgress) {
        gameProgress = JSON.parse(gameProgress);
    } else {
        gameProgress = [];
        for (let i = 0; i < gameRounds; i++) {
            gameProgress.push(null)
        }
        localStorage.setItem('game-progress', JSON.stringify(gameProgress))
    }
}
initGame();

// update game overview
function loadOverview() {
    overviewCt.innerHTML = '';
    gameProgress.forEach(step => {
        const span = document.createElement('span');
        if (step) {
            span.dataset.state = 'success';
        } else if (step === false) {
            span.dataset.state = 'fail';
        }
        overviewCt.appendChild(span)
    });
}
loadOverview();

// load a game round
function loadGameRound() {
    // randomly select countries
    const randomCountryIndexes = [];
    for (let i = 0; i < 4; i++) {
        randomCountryIndexes.push(randomNumber(0,countries.length - 1))
    }
    const correctCountryIndex = randomNumber(0,3);
    randomCountryIndexes.forEach((countryIndex, key) => {
        const isCorrectCountry = key === correctCountryIndex;
        const country = countries[countryIndex];
        flagsCt.children[key].setAttribute('src', country.image);
        flagsCt.children[key].dataset.state = isCorrectCountry ? 'correct' : 'incorrect';
        flagsCt.children[key].addEventListener('click', validateAnswer)
        if (isCorrectCountry) {
            countryTitle.innerText = country.name;
        }
    })
}
loadGameRound();

function validateAnswer (e) {
    // load current round
    const currentRoundIndex = gameProgress.indexOf(null);
    // validate answer and save to localStorage
    if (e.target.dataset.state === 'correct') {
        gameProgress[currentRoundIndex] = true;
    } else {
        gameProgress[currentRoundIndex] = false;
    }
    localStorage.setItem('game-progress', JSON.stringify(gameProgress));
    // update overview
    loadOverview();
    // end game if needed
    if (currentRoundIndex !== gameRounds - 1) {
        loadGameRound();
    } else {
        setTimeout(() => {
            restartGame();
        }, 500)
    }
}

// restart game
function restartGame() {
    // place message
    const points = gameProgress.filter(item => !!item).length;
    alert(`finished with ${points}/${gameRounds} points!`);
    // reset game progress
    gameProgress = [];
    for (let i = 0; i < gameRounds; i++) {
        gameProgress.push(null);
    }
    localStorage.setItem('game-progress', JSON.stringify(gameProgress));
    // load new game and overview
    loadOverview();
    loadGameRound();
}
