const board = document.querySelector('#board');
const game = [
    [['turm','schwarz'],['springer', 'schwarz'],['läufer','schwarz'],['könig','schwarz'],['dame','schwarz'],['läufer','schwarz'],['springer','schwarz'],['turm','schwarz']],
    [['bauer','schwarz'], ['bauer','schwarz'],['bauer','schwarz'],['bauer','schwarz'],['bauer','schwarz'],['bauer','schwarz'],['bauer','schwarz'],['bauer','schwarz']],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [['bauer','weiss'], ['bauer','weiss'],['bauer','weiss'],['bauer','weiss'],['bauer','weiss'],['bauer','weiss'],['bauer','weiss'],['bauer','weiss']],
    [['turm','weiss'],['springer', 'weiss'],['läufer','weiss'],['könig','weiss'],['dame','weiss'],['läufer','weiss'],['springer','weiss'],['turm','weiss']],
];
function isEven(number) {
    return number % 2 === 0;
}
