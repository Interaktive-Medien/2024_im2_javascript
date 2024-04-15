// ******************************** DOM Elements
const introCt = document.querySelector('#intro');
const gameCt = document.querySelector('#game');
const outroCt = document.querySelector('#outro');
const screens = [introCt, gameCt, outroCt];
const startBtn = introCt.querySelector('#start');
const overviewCt = gameCt.querySelector('#overview');
const flagsCt = gameCt.querySelector('#flags');
const countryTitle = gameCt.querySelector('#country');
const restartBtn = outroCt.querySelector('#restart');
const pointsCt = outroCt.querySelector('#points');


// ******************************** Constants
const gameRounds = 10;


// ******************************** Global Functions
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function arrayHasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}


// ******************************** App
// -> initialize active screen
let activeScreen = localStorage.getItem('active-screen');
if (activeScreen) {
    activeScreen = JSON.parse(activeScreen);
} else {
    activeScreen = 0;
    localStorage.setItem('active-screen', JSON.stringify(activeScreen))
}

// -> create active screen function & initialize
function updateActiveScreen() {
    screens.forEach((screen, index) => {
        if (index !== activeScreen) {
            screen.classList.add('hidden')
        } else {
            screen.classList.remove('hidden')
        }
    })
}
updateActiveScreen();

// -> load countries
async function loadCountries () {
    const file = '../data/countries.json';
    const response = await fetch(file);
    return await response.json();
}
const countries = await loadCountries();

// -> load intro flag
function loadIntroFlag() {
    const introFlag = intro.querySelector('#flag');
    const introCountry = countries[randomNumber(0,countries.length - 1)];
    introFlag.setAttribute('src', introCountry.image);
    introFlag.setAttribute('title', introCountry.name)
}
loadIntroFlag();

// -> handle click on play
startBtn.addEventListener('click', function (e) {
    activeScreen = 1;
    localStorage.setItem('active-screen', JSON.stringify(activeScreen));
    updateActiveScreen();
    loadGameRound();
});

// -> initialize quiz overview
let gameProgress = localStorage.getItem('game-progress');
if (gameProgress) {
    gameProgress = JSON.parse(gameProgress);
} else {
    gameProgress = [];
    for (let i = 0; i < gameRounds; i++) {
        gameProgress.push(null)
    }
    localStorage.setItem('game-progress', JSON.stringify(gameProgress))
}

// -> show game progress in DOM
function updateGameProgress() {
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
updateGameProgress();

// -> game round
function loadGameRound() {
    const randomCountryIndexed = [];
    const randomCorrectCountry = randomNumber(0,3);
    for (let i = 0; i < 4; i++) {
        randomCountryIndexed.push(randomNumber(0,countries.length - 1))
    }
    const roundCountries = countries.filter((country,key) => randomCountryIndexed.includes(key));
    const correctCountry = roundCountries.find((country, key) => key === randomCorrectCountry);
    roundCountries.forEach((country,key) => {
        flagsCt.children[key].setAttribute('src', country.image);
        flagsCt.children[key].dataset.state = country.name === correctCountry.name ? 'correct' : 'incorrect';
        flagsCt.children[key].addEventListener('click', validateAnswer)
    })
    countryTitle.innerText = correctCountry.name;
}
loadGameRound();

// -> validate answer
function validateAnswer (e) {
    const currentIndex = gameProgress.indexOf(null);
    gameProgress[currentIndex] = e.target.dataset.state === 'correct';
    localStorage.setItem('game-progress', JSON.stringify(gameProgress));
    updateGameProgress();
    if (currentIndex !== gameRounds - 1) {
        loadGameRound();
    } else {
        activeScreen = 2;
        localStorage.setItem('active-screen', JSON.stringify(activeScreen));
        updateActiveScreen();
        const points = gameProgress.filter(item => !!item).length;
        pointsCt.innerText = `${points}/${gameRounds}`;
    }
}

// -> restart game
restartBtn.addEventListener('click', function (e) {
    activeScreen = 0;
    localStorage.setItem('active-screen', JSON.stringify(activeScreen));
    updateActiveScreen();
    gameProgress = [];
    for (let i = 0; i < gameRounds; i++) {
        gameProgress.push(null);
    }
    localStorage.setItem('game-progress', JSON.stringify(gameProgress));
    updateGameProgress();
})
