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
        // card.suit = 'H';

        // card.number = 2;
        // this.hand.push(card);

        // card = new Card();
        // card.suit = 'C';
        
        // card.number = 10;
        // this.hand.push(card);

        // card = new Card();
        // card.suit = 'S';

        // card.number = 'Queen'
        // this.hand.push(card);

        // card = new Card();
        // card.suit = 'H';

        // card.number = 'Jack';
        // this.hand.push(card);

        // card = new Card();
        // card.suit = 'D';

        // card.number = 'Ace'
        // this.hand.push(card);

    }

    getHand(){
        var hand = [];
        for(let i = 0; i < 5; i++){
            hand.push(this.hand[i].suit + this.hand[i].number)
        }
        return hand.toString();
    }
}