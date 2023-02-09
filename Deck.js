

class Card {
    constructor(value, name, suit) {
        this.value = value;
        this.name = name;
        this.suit =suit;
    }
}

function Deck() {
    this.suits = ['Spade', 'Heart', 'Club', 'Diamond'];
    this.ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', "A"];
    const cards = [];

    for (let i = 0; i < this.suits.length; i++) {
        for (let k = 0; k < this.ranks.length; k++){
            cards.push(new Card(k+1, this.ranks[k], this.suits[i]));
        }
    }
    return cards;
}

let n = new Deck()

console.log(n)
