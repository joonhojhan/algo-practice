/*
You have a queue of integers, you need to retrieve the first unique integer in the queue.

Implement the FirstUnique class:

FirstUnique(int[] nums) Initializes the object with the numbers in the queue.
int showFirstUnique() returns the value of the first unique integer of the queue, and returns -1 if there is no such integer.
void add(int value) insert value to the queue.


Example 1:

Input:
["FirstUnique","showFirstUnique","add","showFirstUnique","add","showFirstUnique","add","showFirstUnique"]
[[[2,3,5]],[],[5],[],[2],[],[3],[]]
Output:
[null,2,null,2,null,3,null,-1]

Explanation:
FirstUnique firstUnique = new FirstUnique([2,3,5]);
firstUnique.showFirstUnique(); // return 2
firstUnique.add(5);            // the queue is now [2,3,5,5]
firstUnique.showFirstUnique(); // return 2
firstUnique.add(2);            // the queue is now [2,3,5,5,2]
firstUnique.showFirstUnique(); // return 3
firstUnique.add(3);            // the queue is now [2,3,5,5,2,3]
firstUnique.showFirstUnique(); // return -1

Example 2:

Input:
["FirstUnique","showFirstUnique","add","add","add","add","add","showFirstUnique"]
[[[7,7,7,7,7,7]],[],[7],[3],[3],[7],[17],[]]
Output:
[null,-1,null,null,null,null,null,17]

Explanation:
FirstUnique firstUnique = new FirstUnique([7,7,7,7,7,7]);
firstUnique.showFirstUnique(); // return -1
firstUnique.add(7);            // the queue is now [7,7,7,7,7,7,7]
firstUnique.add(3);            // the queue is now [7,7,7,7,7,7,7,3]
firstUnique.add(3);            // the queue is now [7,7,7,7,7,7,7,3,3]
firstUnique.add(7);            // the queue is now [7,7,7,7,7,7,7,3,3,7]
firstUnique.add(17);           // the queue is now [7,7,7,7,7,7,7,3,3,7,17]
firstUnique.showFirstUnique(); // return 17

Example 3:

Input:
["FirstUnique","showFirstUnique","add","showFirstUnique"]
[[[809]],[],[809],[]]
Output:
[null,809,null,-1]

Explanation:
FirstUnique firstUnique = new FirstUnique([809]);
firstUnique.showFirstUnique(); // return 809
firstUnique.add(809);          // the queue is now [809,809]
firstUnique.showFirstUnique(); // return -1
*/

function Node(val) {
	this.val = val;
	this.next = null;
	this.prev = null;
}
/**
 * @param {number[]} nums
 */
const FirstUnique = function (nums) {
	this.hash = {};
	this.head = new Node(0);
	this.tail = new Node(0);
	this.head.next = this.tail;
	this.tail.prev = this.head;

	this.addToTail = function (node) {
		node.next = this.tail;
		node.prev = this.tail.prev;
		node.prev.next = node;
		this.tail.prev = node;
	};

	this.deleteNode = function (node) {
		if (node === 'deleted') return;
		node.next.prev = node.prev;
		node.prev.next = node.next;
	};
	for (let i = 0; i < nums.length; i++) {
		const curr = nums[i];
		this.add(curr);
	}
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function () {
	if (this.head.next !== this.tail) return this.head.next.val;
	return -1;
};

/**
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function (value) {
	if (this.hash[value]) {
		this.deleteNode(this.hash[value]);
		this.hash[value] = 'deleted';
	} else {
		const newNode = new Node(value);
		this.hash[value] = newNode;
		this.addToTail(this.hash[value]);
	}
};
