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

let fieldActive = false;
function loadBoard() {
    board.innerHTML = '';
    game.forEach((row,rowindex) => {
        row.forEach((field,fieldindex) => {
            const box = document.createElement('div');
            if (field) {
                box.innerText = field[0];
                box.dataset.owner = field[1];
            }
            if (isEven(rowindex) && isEven(fieldindex) || !isEven(rowindex) && !isEven(fieldindex)) {
                box.dataset.color = 'light'
            } else {
                box.dataset.color = 'dark'
            }
            // -> move functionality
            box.addEventListener('click', function (e) {
                if (!fieldActive) {
                    if (field) {
                        fieldActive = [[rowindex,fieldindex],field]
                        box.dataset.active = "true";
                    }
                } else {
                    if (!field) {
                        game[fieldActive[0][0]][fieldActive[0][1]] = null;
                        game[rowindex][fieldindex] = fieldActive[1];
                        fieldActive = false;
                        loadBoard();
                    }
                }
            })
            // -> append
            board.appendChild(box)
        })
    })
}
loadBoard();
