function main(){
    let pack = new Pack();
    pack.createCards()
    pack.shuffle();    

    let player1 = new Player();
    player1.createHand(pack);

    let player2 = new Player();
    player2.createHand(pack);

    player1.name = document.querySelector('#jogador1');
    player2.name = document.querySelector('#jogador2');

    let game = new Game();

    game.setWinner(player1, player2);

    player1.name.innerHTML = `Jogador 1: ${player1.getHand()} ${player1.winner == true ? 'Winner' : ''}`;
    player2.name.innerHTML = `Jogador 2: ${player2.getHand()} ${player2.winner == true ? 'Winner' : ''}`;
}