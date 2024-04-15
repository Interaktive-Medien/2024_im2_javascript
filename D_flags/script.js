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
// code app here
