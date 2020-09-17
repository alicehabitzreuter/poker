class Game{
    constructor(){
        this.winner = null;
    }
    setWinner(player1, player2){
        let poker = new Poker();
        let classification1 = poker.classification(player1.hand);
        let classification2 = poker.classification(player2.hand);

        let handGame1 = this.tie(player1.hand);
        let handGame2 = this.tie(player2.hand);

        if(classification1 == 1 && classification2 == 1){
            if(poker.numbers.indexOf(poker.highestCard(player1.hand)) > poker.numbers.indexOf(poker.highestCard(player2.hand))){
                player1.winner = true;
                return 0;
            }
            player2.winner = true;
            return 0;
        }

        if(classification1 > classification2){
            player1.winner = true;
        }
        else if(classification1 == classification2){
            if(poker.numbers.indexOf(poker.highestCard(handGame1)) > poker.numbers.indexOf(poker.highestCard(handGame2))){
                player1.winner = true;
            }else{
                player2.winner = true;
            }
        }
        else{
            player2.winner = true;
        }
    }

    tie(playerHand){
        let handGame = [];
        
        for(let i = 0; i < playerHand.length - 1; i++){
            if(playerHand[i].partOfAGame){
                handGame.push(playerHand[i])
            }
        }
        return handGame;
    }
}