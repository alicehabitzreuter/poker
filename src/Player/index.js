class Player{
    constructor(){
        this.name = '';
        this.hand = [];
        this.winner = false;
    }
   
    createHand(pack){
        for(let i = 0; i < 5; i++){
            this.hand.push(pack.pack[0]);
            pack.pack.shift();
        }
    }

    getHand(){
        var hand = [];
        for(let i = 0; i < 5; i++){
            hand.push(this.hand[i].suit + this.hand[i].number)
        }
        return hand.toString();
    }
}