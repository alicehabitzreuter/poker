class Pack extends Poker{
    constructor(){
        super();
        this.pack = [];
    }

    shuffle(){
        for(let i = this.pack.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * i)
            const temp = this.pack[i]
            this.pack[i] = this.pack[j]
            this.pack[j] = temp
        }
    }

    createCards(){
        for(let i = 0; i < 4; i++){
            for(let j=0; j < 13; j++){                
                var card = new Card();
                card.suit = this.suits[i];
                card.number = this.numbers[j];
                this.pack.push(card);
            }
        }
    }
}

