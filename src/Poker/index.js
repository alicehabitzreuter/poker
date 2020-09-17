class Poker{
    constructor(){
        this.suits = ['\u2665', '\u2663', '\u2666', '\u2660'];
        this.numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    }

    compare(a, b){
        const numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

        const handA = a.number;
        const handB = b.number;
        
        let comparison = 0;
        if (numbers.indexOf(handA.toString()) > numbers.indexOf(handB.toString())) {
            comparison = 1;
        } else if (numbers.indexOf(handA) < numbers.indexOf(handB)) {
            comparison = -1;
        }
        return (comparison)  
    }

    sequential(hand){
        let seq = 1;
        let royal = false;
        for(let i = 0; i < hand.length - 1; i++){
            if((this.numbers.indexOf(hand[i+1].number.toString()) - (this.numbers.indexOf(hand[i].number.toString()))) == 1){
                seq++;
                hand[i].partOfAGame = true;
                hand[i + 1].partOfAGame = true;
            }else{
                seq--;
            }
        }
        if(hand[0].number == 10 && seq == 5){
            royal = true
        }
        return {seq, royal};
    }

    sameSuit(hand){
        let cont = 1;
        for(let i = 0; i < hand.length - 1; i++){
            if((this.suits.indexOf(hand[i+1].suit) == this.suits.indexOf(hand[i].suit))){
                cont++;
                hand[i].partOfAGame = true;
                hand[i + 1].partOfAGame = true;
            }else{
                cont--;
            }
        }
        return cont;
    }

    sameNumber(hand){
        let contSame = 0;
        let streakSame = 0;

        for(let i = 0; i < hand.length - 1; i++){
            if(hand[i].number == hand[i+1].number){
                contSame++;
                streakSame++;
                
                hand[i].partOfAGame = true;
                hand[i + 1].partOfAGame = true;
            }else{
                hand[i].partOfAGame = false;
                streakSame --;
            }
        }
        return {contSame, streakSame};
    }
    
    classification(hand){
        hand.sort(this.compare);
        console.log(hand);

        if(this.royalFlush(hand)){
            console.log('Royal Flush');
            return 10;
        }
        else if(this.straightFlush(hand)){
            console.log('Straight Flush');
            return 9;

        }
        else if(this.fourOfAKind(hand)){
            console.log('Four of a Kind');
            return 8;

        }
        else if(this.fullHouse(hand)){
            console.log('Full House');
            return 7;

        }
        else if(this.flush(hand)){
            console.log('Flush');
            return 6;

        }
        else if(this.straight(hand)){
            console.log('Straight');
            return 5;

        }
        else if(this.threeOfAKind(hand)){
            console.log('Three Of A Kind');
            return 4;
            
        }
        else if(this.twoPair(hand)){
            console.log('Two Pair');
            return 3;

        }
        else if(this.pair(hand)){
            console.log('A Pair');
            return 2;

        }else{
            console.log('Highest Card: ', this.highestCard(hand));
            return 1;

        }
    }

    
    royalFlush(hand){
        const {royal} = this.sequential(hand);
        if(this.sameSuit(hand) == 5 && royal == true){
            return true;
        }
        return false;
    }
    straightFlush(hand){
        const {seq} = this.sequential(hand);
        if(seq == 5 && this.sameSuit(hand) == 5){
            return true;
        }
        return false;
    }

    fourOfAKind(hand){
        let cont = 1;

        for(let i = 0; i < hand.length; i++){
            cont = 1;
            for(let j = 1; j < hand.length; j++){
                if(hand[i].number === hand[j].number){
                    cont++;
                    if(cont == 4){
                        return true;
                    }
                    hand[i].partOfAGame = true;
                }else{
                    cont = 1;
                    hand[i].partOfAGame = false;
                }
                i++;
            }
        }
        return false;
    }

    fullHouse(hand){
        let cont = 1;
        let j = 0;
        let hasPair = false;
        let hasThree = false;

        let numberGame = [];

        for(let k = 0; k < 5; k++){
            numberGame[k] = hand[k];
        }

            for(let i = 1; i < hand.length; i++){
                if(hand[i].number.toString() == hand[j].number.toString()){
                    cont++;
                    if(cont == 3){
                        hasThree = true;
                        cont = 1;
                        numberGame.splice(i, 1);
                        numberGame.splice(i - 1, 1);
                        numberGame.splice(i - 2, 1);
                        hand[i].partOfAGame = true;

                        if(numberGame[0].number.toString() == numberGame[1].number.toString()){
                            hasPair = true;
                            hand[i].partOfAGame = true;
                        }
                    }
                }else{
                    cont = 1;
                    hand[i].partOfAGame = false;
                }
            j++;
        }
        return (hasPair && hasThree);

    }
    flush(hand){
        if(this.sameSuit(hand) == 5){
            return true;
        }
        return false;
    }
    straight(hand){
        const {seq} = this.sequential(hand);
        if(seq == 5){
            return true;
        }
        return false;
    }
    threeOfAKind(hand){
        let cont = 1;

        for(let i = 0; i < hand.length; i++){
            cont = 1;
            for(let j = 1; j < hand.length; j++){
                if(hand[i].number === hand[j].number){
                    cont++;
                    hand[i].partOfAGame = true;
                    
                    if(cont == 3){
                        return true;
                    }
                }else{
                    cont = 1;
                    hand[i].partOfAGame = false;
                }
                i++;
            }
        }
        return false;
        
    }
    twoPair(hand){
        let cardsRepeated = 1;
        let pairs = 0;
        let i = 0;

        for(let j = 1; j < hand.length; j++){
                if(hand[i].number === hand[j].number){
                    hand[i].partOfAGame = true;
                    cardsRepeated++;
                    if(cardsRepeated == 2){
                        cardsRepeated = 1;
                        pairs++;
                        if(pairs == 2){
                            return true;
                        }
                    }
                }
                else{
                    hand[i].partOfAGame = false;
                }
                i++;
                cardsRepeated = 1;
            }
        return false;
    }
    pair(hand){
        const {contSame} = this.sameNumber(hand)
        if(contSame == 1){
            return true;
        }
        return false;
    }

    highestCard(hand){
        let highest = 0;
        for(let i = 0; i < hand.length ; i++){
            if((this.numbers.indexOf(hand[i].number) > highest)){
                highest = this.numbers.indexOf(hand[i].number);
            }
        }
        return this.numbers[highest];
    }
}