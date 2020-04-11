/*
Design a data structure that supports all following operations in average O(1) time.

Note: Duplicate elements are allowed.
insert(val): Inserts an item val to the collection.
remove(val): Removes an item val from the collection if present.
getRandom: Returns a random element from current collection of elements. The probability of each element being returned is linearly related to the number of same value the collection contains.
Example:

// Init an empty collection.
RandomizedCollection collection = new RandomizedCollection();

// Inserts 1 to the collection. Returns true as the collection did not contain 1.
collection.insert(1);

// Inserts another 1 to the collection. Returns false as the collection contained 1. Collection now contains [1,1].
collection.insert(1);

// Inserts 2 to the collection, returns true. Collection now contains [1,1,2].
collection.insert(2);

// getRandom should return 1 with the probability 2/3, and returns 2 with the probability 1/3.
collection.getRandom();

// Removes 1 from the collection, returns true. Collection now contains [1,2].
collection.remove(1);

// getRandom should return 1 and 2 both equally likely.
collection.getRandom();
*/

/**
 * Initialize your data structure here.
 */
const RandomizedCollection = function () {
	this.hash = {};
	this.allElements = [];
	this.size = 0;
};

function Node(val, idx) {
	this.val = val;
	this.idx = idx;
}

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function (val) {
	if (!this.hash[val]) {
		const node = new Node(val, this.size);
		this.hash[val] = [node];
		this.allElements.push(node);
		this.size++;
		return true;
	}
	const node = new Node(val, this.size);
	this.hash[val].push(node);
	this.allElements.push(node);
	this.size++;
	return false;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function (val) {
	if (this.hash[val]) {
		this.allElements[this.size - 1].idx = this.hash[val][
			this.hash[val].length - 1
		].idx;
		[
			this.allElements[this.hash[val][this.hash[val].length - 1].idx],
			this.allElements[this.size - 1],
		] = [
			this.allElements[this.size - 1],
			this.allElements[this.hash[val][this.hash[val].length - 1].idx],
		];
		this.allElements.pop();
		if (this.hash[val].length === 1) delete this.hash[val];
		else this.hash[val].pop();
		this.size--;
		return true;
	}
	return false;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function () {
	return this.allElements[Math.floor(Math.random() * this.size)].val;
};

const collection = new RandomizedCollection();
console.log(collection.insert(1) === true);
console.log(collection.insert(1) === false);
console.log(collection.insert(2) === true);
let random = collection.getRandom();
console.log(random === 1 || random === 2);
console.log(collection.remove(1) === true);
random = collection.getRandom();
console.log(random === 1 || random === 2);
