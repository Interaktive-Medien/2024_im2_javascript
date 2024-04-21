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
async function loadCountries () {}
const countries = await loadCountries();

// init game progress from local storage or init new game
function initGame() {}
initGame();

// update game overview
function loadOverview() {}
loadOverview();

// load a game round
function loadGameRound() {}
loadGameRound();

function validateAnswer (e) {}

// restart game
function restartGame() {}
