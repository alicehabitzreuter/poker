class Poker{
    constructor(){
        this.suits = ['H', 'C', 'D', 'S'];
        this.numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
    }

    compare(a, b){
        const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];

        const handA = a.number;
        const handB = b.number;
        
        let comparison = 0;
        if (numbers.indexOf(handA) > numbers.indexOf(handB)) {
            comparison = 1;
        } else if (numbers.indexOf(handA) < numbers.indexOf(handB)) {
            comparison = -1;
        }
        return (comparison)  
    }

    sequential(hand){
        let seq = 1;
        let royal = false;
        for(let i = 0; i < 4; i++){
            if((this.numbers.indexOf(hand[i+1].number) - this.numbers.indexOf(hand[i].number)) == 1){
                seq++;
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
        for(let i = 0; i < 4; i++){
            if((this.suits.indexOf(hand[i+1].suit) == this.suits.indexOf(hand[i].suit))){
                cont++;
            }else{
                cont--;
            }
        }
        return cont;
    }

    sameNumber(hand){
        let contSame = 1;
        let streakSame = 0;

        for(let i = 4; i >= 1; i--){
            if((this.numbers.indexOf(hand[i].number) == this.numbers.indexOf(hand[i-1].number))){
                contSame++;
                streakSame++;
            }else{
                streakSame = 0;
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

    straightFlush(hand){
        const {seq} = this.sequential(hand);
        if(seq == 5 && this.sameSuit(hand) == 5){
            return true;
        }else{
            return false;
        }
    }

    royalFlush(hand){
        const {royal} = this.sequential(hand);
        if(this.sameSuit(hand) == 5 && royal == true){
            return true;
        }else{
            return false;
        }
    }

    fourOfAKind(hand){
        const {contSame, streakSame} = this.sameNumber(hand)
        if(contSame == 4 && streakSame == 0){
            return true;
        }
        else{
            return false;
        }
    }

    fullHouse(hand){
        const {contSame, streakSame} = this.sameNumber(hand)
        if(contSame == 4 && streakSame == 1){
            return true;
        }else{
            return false;
        }
    }
    flush(hand){
        if(this.sameSuit(hand) == 5){
            return true;
        }else{
            return false;
        }
    }
    straight(hand){
        const {seq} = this.sequential(hand);
        if(seq == 5){
            return true;
        }else{
            return false;
        }
    }
    threeOfAKind(hand){
        const {contSame, streakSame} = this.sameNumber(hand)
        if(contSame == 3 && streakSame == 2){
            return true;
        }
        else{
            return false;
        }
    }
    twoPair(hand){
        const {contSame, streakSame} = this.sameNumber(hand)
        if(contSame == 3 && streakSame == 0){
            return true;
        }
        else{
            return false;
        }
    }
    pair(hand){
        const {contSame, streakSame} = this.sameNumber(hand)
        if(contSame == 2 && streakSame == 0){
            return true;
        }
        else{
            return false;
        }
    }

    highestCard(hand){
        let highest = 0;
        for(let i = 4; i >= 1; i--){
            if((this.numbers.indexOf(hand[i].number) > highest)){
                highest = this.numbers.indexOf(hand[i].number);
            }
        }
        return this.numbers[highest];
    }
}