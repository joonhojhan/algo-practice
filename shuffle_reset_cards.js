/*
Shuffle a deck of cards without duplicates.
Reset returns deck of cards back to original order.
*/

class Deck {
	constructor(cards) {
		this.orig = cards.slice();
		this.deck = cards;
	}

	shuffle() {
		let n = this.deck.length;
		for (let i = 0; i < n; i++) {
			let random = Math.floor(Math.random() * n);
			[this.deck[i], this.deck[random]] = [this.deck[random], this.deck[i]];
		}
		return this.deck;
	}

	reset() {
		this.deck = this.orig.slice();
		return this.deck;
	}
}

let test = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let deck = new Deck(test);
console.log(deck.deck);
console.log(deck.shuffle());
console.log(deck.reset());
console.log(deck.shuffle());
console.log(deck.reset());
console.log(deck.shuffle());
console.log(deck.reset());
console.log(deck.shuffle());
console.log(deck.reset());
