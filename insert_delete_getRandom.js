/*
Design a data structure that supports all following operations in average O(1) time.

insert(val): Inserts an item val to the set if not already present.
remove(val): Removes an item val from the set if present.
getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.
Example:

// Init an empty set.
RandomizedSet randomSet = new RandomizedSet();

// Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomSet.insert(1);

// Returns false as 2 does not exist in the set.
randomSet.remove(2);

// Inserts 2 to the set, returns true. Set now contains [1,2].
randomSet.insert(2);

// getRandom should return either 1 or 2 randomly.
randomSet.getRandom();

// Removes 1 from the set, returns true. Set now contains [2].
randomSet.remove(1);

// 2 was already in the set, so return false.
randomSet.insert(2);

// Since 2 is the only number in the set, getRandom always return 2.
randomSet.getRandom();
*/

/**
 * Initialize your data structure here.
 */
const RandomizedSet = function () {
	this.hash = {};
	this.allElements = [];
	this.size = 0;
};

// function Node(val, idx) {
//     this.val = val;
//     this.idx = idx;
// }

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
	if (this.hash[val] === undefined) {
		this.hash[val] = this.size;
		this.allElements.push(val);
		this.size++;
		return true;
	}
	return false;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
	if (this.hash[val] !== undefined) {
		this.hash[this.allElements[this.size - 1]] = this.hash[val];
		[this.allElements[this.hash[val]], this.allElements[this.size - 1]] = [
			this.allElements[this.size - 1],
			this.allElements[this.hash[val]],
		];
		this.allElements.pop();
		delete this.hash[val];
		this.size--;
		return true;
	}
	return false;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
	return this.allElements[Math.floor(Math.random() * this.size)];
};

const randomSet = new RandomizedSet();
console.log(randomSet.insert(1) === true);
console.log(randomSet.remove(2) === false);
console.log(randomSet.insert(2) === true);
const random = randomSet.getRandom();
console.log(random === 1 || random === 2);
console.log(randomSet.remove(1) === true);
console.log(randomSet.insert(2) === false);
console.log(randomSet.getRandom() === 2);
