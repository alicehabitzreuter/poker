class Poker{
    constructor(){
        this.suits = ['\u2665', '\u2663', '\u2666', '\u2660'];
        this.numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    }

    compare(a, b){
        const numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

        const playerHandA = a.number;
        const playerHandB = b.number;
        
        let comparison = 0;
        if (numbers.indexOf(playerHandA.toString()) > numbers.indexOf(playerHandB.toString())) {
            comparison = 1;
        } else if (numbers.indexOf(playerHandA) < numbers.indexOf(playerHandB)) {
            comparison = -1;
        }
        return (comparison)  
    }

    sequential(playerHand){
        let seq = 1;
        let royal = false;
        for(let i = 0; i < playerHand.length - 1; i++){
            if((this.numbers.indexOf(playerHand[i+1].number.toString()) - (this.numbers.indexOf(playerHand[i].number.toString()))) == 1){
                seq++;
                playerHand[i].partOfAGame = true;
                playerHand[i + 1].partOfAGame = true;
            }else{
                seq--;
            }
        }
        if(playerHand[0].number == 10 && seq == 5){
            royal = true
        }
        return {seq, royal};
    }

    sameSuit(playerHand){
        let cont = 1;
        for(let i = 0; i < playerHand.length - 1; i++){
            if((this.suits.indexOf(playerHand[i+1].suit) == this.suits.indexOf(playerHand[i].suit))){
                cont++;
                playerHand[i].partOfAGame = true;
                playerHand[i + 1].partOfAGame = true;
            }else{
                cont--;
            }
        }
        return cont;
    }

    sameNumber(playerHand){
        let contSame = 0;
        let streakSame = 0;

        for(let i = 0; i < playerHand.length - 1; i++){
            if(playerHand[i].number == playerHand[i+1].number){
                contSame++;
                streakSame++;
                
                playerHand[i].partOfAGame = true;
                playerHand[i + 1].partOfAGame = true;
            }else{
                playerHand[i].partOfAGame = false;
                streakSame --;
            }
        }
        return {contSame, streakSame};
    }
    
    classification(playerHand){
        playerHand.sort(this.compare);

        if(this.royalFlush(playerHand)){
            console.log('Royal Flush');
            return 10;
        }
        else if(this.straightFlush(playerHand)){
            console.log('Straight Flush');
            return 9;

        }
        else if(this.fourOfAKind(playerHand)){
            console.log('Four of a Kind');
            return 8;

        }
        else if(this.fullHouse(playerHand)){
            console.log('Full House');
            return 7;

        }
        else if(this.flush(playerHand)){
            console.log('Flush');
            return 6;

        }
        else if(this.straight(playerHand)){
            console.log('Straight');
            return 5;

        }
        else if(this.threeOfAKind(playerHand)){
            console.log('Three Of A Kind');
            return 4;
            
        }
        else if(this.twoPair(playerHand)){
            console.log('Two Pair');
            return 3;

        }
        else if(this.pair(playerHand)){
            console.log('A Pair');
            return 2;

        }
        console.log('Highest Card: ', this.highestCard(playerHand));
        return 1;
    }

    
    royalFlush(playerHand){
        const {royal} = this.sequential(playerHand);
        if(this.sameSuit(playerHand) == 5 && royal == true){
            return true;
        }
        return false;
    }
    straightFlush(playerHand){
        const {seq} = this.sequential(playerHand);
        if(seq == 5 && this.sameSuit(playerHand) == 5){
            return true;
        }
        return false;
    }

    fourOfAKind(playerHand){
        let cont = 1;

        for(let i = 0; i < playerHand.length; i++){
            cont = 1;
            for(let j = 1; j < playerHand.length; j++){
                if(playerHand[i].number === playerHand[j].number){
                    cont++;
                    if(cont == 4){
                        return true;
                    }
                    playerHand[i].partOfAGame = true;
                }else{
                    cont = 1;
                    playerHand[i].partOfAGame = false;
                }
                i++;
            }
        }
        return false;
    }

    fullHouse(playerHand){
        let cont = 1;
        let j = 0;
        let hasPair = false;
        let hasThree = false;

        let numberGame = [];

        for(let k = 0; k < 5; k++){
            numberGame[k] = playerHand[k];
        }

            for(let i = 1; i < playerHand.length; i++){
                if(playerHand[i].number.toString() == playerHand[j].number.toString()){
                    cont++;
                    if(cont == 3){
                        hasThree = true;
                        cont = 1;
                        numberGame.splice(i, 1);
                        numberGame.splice(i - 1, 1);
                        numberGame.splice(i - 2, 1);
                        playerHand[i].partOfAGame = true;

                        if(numberGame[0].number.toString() == numberGame[1].number.toString()){
                            hasPair = true;
                            playerHand[i].partOfAGame = true;
                        }
                    }
                }else{
                    cont = 1;
                    playerHand[i].partOfAGame = false;
                }
            j++;
        }
        return (hasPair && hasThree);

    }
    flush(playerHand){
        if(this.sameSuit(playerHand) == 5){
            return true;
        }
        return false;
    }
    straight(playerHand){
        const {seq} = this.sequential(playerHand);
        if(seq == 5){
            return true;
        }
        return false;
    }
    threeOfAKind(playerHand){
        let cont = 1;

        for(let i = 0; i < playerHand.length; i++){
            cont = 1;
            for(let j = 1; j < playerHand.length; j++){
                if(playerHand[i].number === playerHand[j].number){
                    cont++;
                    playerHand[i].partOfAGame = true;
                    
                    if(cont == 3){
                        return true;
                    }
                }else{
                    cont = 1;
                    playerHand[i].partOfAGame = false;
                }
                i++;
            }
        }
        return false;
        
    }
    twoPair(playerHand){
        let cardsRepeated = 1;
        let pairs = 0;
        let i = 0;

        for(let j = 1; j < playerHand.length; j++){
                if(playerHand[i].number === playerHand[j].number){
                    playerHand[i].partOfAGame = true;
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
                    playerHand[i].partOfAGame = false;
                }
                i++;
                cardsRepeated = 1;
            }
        return false;
    }
    pair(playerHand){
        const {contSame} = this.sameNumber(playerHand)
        if(contSame == 1){
            return true;
        }
        return false;
    }

    highestCard(playerHand){
        let highest = 0;
        for(let i = 0; i < playerHand.length ; i++){
            if((this.numbers.indexOf(playerHand[i].number) > highest)){
                highest = this.numbers.indexOf(playerHand[i].number);
            }
        }
        return this.numbers[highest];
    }
}

module.exports = Poker;