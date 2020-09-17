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
        // var card = new Card();
        // card.suit = '\u2665';

        // card.number = 'Q';
        // this.hand.push(card);

        // card = new Card();
        // card.suit = '\u2663';
        
        // card.number = '2';
        // this.hand.push(card);

        // card = new Card();
        // card.suit = '\u2660';

        // card.number = '2'
        // this.hand.push(card);

        // card = new Card();
        // card.suit = '\u2665';

        // card.number = '2';
        // this.hand.push(card);

        // card = new Card();
        // card.suit = '\u2666';

        // card.number = '2'
        // this.hand.push(card);

    }

    getHand(){
        var hand = [];
        console.log(this.hand);
        for(let i = 0; i < 5; i++){
            hand.push(this.hand[i].suit + this.hand[i].number)
        }
        return hand.toString();
    }
}