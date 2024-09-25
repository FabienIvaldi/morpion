export const cells = document.querySelectorAll('.cell');
export const currentPlayer = document.querySelector('#currentPlayer');
export const gamestatus = document.querySelector('h1');
export const EndGame = document.querySelector('#replay');
export const Windisplay = document.querySelector(".win-display");
export const Player1 = 'X'; const Player2 = 'O';
export let playerTurn = Player1;
export const paterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [0, 1, 2],// coordonnés des paterns victorieuses
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
currentPlayer.innerHTML = "joueur 1 de commencer" // message dde départ

cells.forEach(cell => { // evenenemnt de clique sur les cases
    cell.addEventListener('click', playgame, { once: true });
});

export function playgame(e) {
    e.target.innerHTML = playerTurn;

    if (win(playerTurn)) { //affichage du message de fin
        console.log("Victoire du joueur " + playerTurn + " !");
        gamestatus.innerHTML = "Le joueur jouant le " + playerTurn + " a gagné !";


    } else if (draw()) {
        console.log("Match nul !");
        gamestatus.innerHTML = "Match nul !";

    }

    StatusUpdate(playerTurn); // change de joueur à chaque tours
    playerTurn == Player1 ? playerTurn = Player2 : playerTurn = Player1
}
export function win(playerTurn) { //fonction qui check les paterns de victoire  
    return paterns.some(combination => {
        return combination.every(index => {
            return cells[index].innerHTML == playerTurn;
        });
    });
}
export function draw() { //check si c'est match nul
    return [...cells].every(cell => {
        return cell.innerHTML == Player1 || cell.innerHTML == Player2;
    });
}

export function StatusUpdate(Status) { //status du joueur de jouer
    let text;
    switch (Status) {
        case 'X':
            text = "Au joueur 2 de jouer (0)";
            break;
        case 'O':
            text = "Au joueur 1 de jouer (x)";
            break;
    }

    currentPlayer.innerHTML = text;

}


export function scoreplayer1() { //incremente le score du joueur 1
    const scoreP1 = document.querySelector('#playerOne')

    var number = scoreP1.innerHTML;
    number++;
    scoreP1.innerHTML = number;
}
export function scoreplayer2() { //incremente le score du joueur 2
    const scoreP2 = document.querySelector('#playerTwo')

    var number = scoreP2.innerHTML;
    number++;
    scoreP2.innerHTML = number;
}
if (win(Player1)) {
    scoreplayer1()
} else if (win(Player2)) {
    scoreplayer2();
}

EndGame.addEventListener('click', Reload); // recharge la page quand on clique sur le bouton
function Reload() {
    window.location.reload()
}

