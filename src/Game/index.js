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
            if(poker.numbers.indexOf(poker.highestCard(player1.hand)) > poker.numbers.indexOf(poker.highestCard(player2.hand))){
                player1.winner = true;
            }else{
                player2.winner = true;
            }
        }else{
            player2.winner = true;
        }
    }
}