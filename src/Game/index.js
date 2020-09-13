class Game{
    constructor(){
        this.winner = null;
    }
    setWinner(player1, player2){
        let poker = new Poker(player1.hand, player2.hand);
        let classification1 = poker.classification(player1.hand);
        let classification2 = poker.classification(player2.hand);

        if(classification1 > classification2){
            player1.winner = true;
        }else if(classification1 == classification2){
            let handGame1 = this.tie(player1.hand);
            let handGame2 = this.tie(player2.hand);
            if(poker.numbers.indexOf(poker.highestCard(handGame1)) > poker.numbers.indexOf(poker.highestCard(handGame2))){
                player1.winner = true;
            }else{
                player2.winner = true;
            }
        }else{
            player2.winner = true;
        }
    }

    tie(hand){
        let game = [];
        for(let i = 0; i < 4; i++){
            if(hand[i].partOfAGame){
                game.push(hand[i]); 
            }
        }
        return game;
    }
}