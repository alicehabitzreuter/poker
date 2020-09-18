const Poker = require('../src/Poker/index');

test('Test Hand for Royal Flush', ()=>{
    let poker = new Poker();
    let hand = [{suit: '\u2665',number: '10'}, {suit: '\u2665',number: 'J'}, {suit: '\u2665',number: 'Q'}, {suit: '\u2665',number: 'K'}, {suit: '\u2665',number: 'A'}];
    expect(poker.classification(hand)).toBe(10);
});

test('Test Hand for Straight Flush', ()=>{
    let poker = new Poker();
    let hand = [{suit: '\u2665',number: '9'}, {suit: '\u2665',number: '10'}, {suit: '\u2665',number: 'J'}, {suit: '\u2665',number: 'Q'}, {suit: '\u2665',number: 'K'}];
    expect(poker.classification(hand)).toBe(9);
});

test('Test Hand for Four of a Kind', ()=>{
    let poker = new Poker();
    let hand = [{suit: '\u2665',number: '9'}, {suit: '\u2660',number: '9'}, {suit: '\u2666',number: '9'}, {suit: '\u2663',number: '9'}, {suit: '\u2665',number: 'K'}];
    expect(poker.classification(hand)).toBe(8);
});

test('Test Hand for Full House', ()=>{
    let poker = new Poker();
    let hand = [{suit: '\u2665',number: '9'}, {suit: '\u2660',number: '9'}, {suit: '\u2666',number: '9'}, {suit: '\u2663',number: 'K'}, {suit: '\u2665',number: 'K'}];
    expect(poker.classification(hand)).toBe(7);
});

test('Test Hand for Flush', ()=>{
    let poker = new Poker();
    let hand = [{suit: '\u2665',number: '9'}, {suit: '\u2665',number: '7'}, {suit: '\u2665',number: '9'}, {suit: '\u2665',number: 'K'}, {suit: '\u2665',number: 'K'}];
    expect(poker.classification(hand)).toBe(6);
});

test('Test Hand for Straight', ()=>{
    let poker = new Poker();
    let hand = [{suit: '\u2665',number: '7'}, {suit: '\u2660',number: '8'}, {suit: '\u2666',number: '9'}, {suit: '\u2663',number: '10'}, {suit: '\u2665',number: 'J'}];
    expect(poker.classification(hand)).toBe(5);
});

test('Test Hand for Three of a Kind', ()=>{
    let poker = new Poker();
    let hand = [{suit: '\u2665',number: '8'}, {suit: '\u2660',number: '8'}, {suit: '\u2666',number: '8'}, {suit: '\u2663',number: '10'}, {suit: '\u2665',number: 'J'}];
    expect(poker.classification(hand)).toBe(4);
});

test('Test Hand for Two Pair', ()=>{
    let poker = new Poker();
    let hand = [{suit: '\u2665',number: '8'}, {suit: '\u2660',number: '8'}, {suit: '\u2666',number: '10'}, {suit: '\u2663',number: '10'}, {suit: '\u2665',number: 'J'}];
    expect(poker.classification(hand)).toBe(3);
});

test('Test Hand for Pair', ()=>{
    let poker = new Poker();
    let hand = [{suit: '\u2665',number: '8'}, {suit: '\u2660',number: '8'}, {suit: '\u2666',number: 'Q'}, {suit: '\u2663',number: '10'}, {suit: '\u2665',number: 'J'}];
    expect(poker.classification(hand)).toBe(2);
});

test('Test Hand for Pair', ()=>{
    let poker = new Poker();
    let hand = [{suit: '\u2665',number: '8'}, {suit: '\u2660',number: '2'}, {suit: '\u2666',number: 'Q'}, {suit: '\u2663',number: '10'}, {suit: '\u2665',number: 'J'}];
    expect(poker.classification(hand)).toBe(1);
});