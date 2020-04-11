/*
A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.

The Linked List is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) where random pointer points to, or null if it does not point to any node.

Example 1:
Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]

Example 2:
Input: head = [[1,1],[2,1]]
Output: [[1,1],[2,1]]

Example 3:
Input: head = [[3,null],[3,0],[3,null]]
Output: [[3,null],[3,0],[3,null]]

Example 4:
Input: head = []
Output: []

Explanation: Given linked list is empty (null pointer), so return null.
*/

// With hash = new Map()
// Maps in JavaScript allow you to use objects as keys while keys on objects can only be strings
const copyRandomListMap = function (head) {
	if (!head) return null;
	const newHead = new Node(head.val);
	let curr = head.next;
	let newCurr = newHead;
	const hash = new Map();
	hash.set(head, newHead);
	while (curr) {
		newCurr.next = new Node(curr.val, null);
		newCurr = newCurr.next;
		hash.set(curr, newCurr);
		curr = curr.next;
	}
	newCurr = newHead;
	curr = head;
	while (curr) {
		if (curr.random) {
			newCurr.random = hash.get(curr.random);
		}
		newCurr = newCurr.next;
		curr = curr.next;
	}
	return newHead;
};

// With hash = {}
const copyRandomListObj = function (head) {
	if (!head) return null;
	const newHead = new Node(head.val);
	let curr = head.next;
	let newCurr = newHead;
	const hash = {};
	hash[head.val] = [[head, newHead]];
	while (curr) {
		newCurr.next = new Node(curr.val, null);
		newCurr = newCurr.next;
		if (hash[newCurr.val]) {
			hash[newCurr.val].push([curr, newCurr]);
		} else {
			hash[newCurr.val] = [[curr, newCurr]];
		}
		curr = curr.next;
	}
	// newCurr.next = curr;
	newCurr = newHead;
	curr = head;
	while (curr) {
		if (curr.random) {
			for (let i = 0; i < hash[curr.random.val].length; i++) {
				const node = hash[curr.random.val][i];
				if (curr.random === node[0]) {
					newCurr.random = node[1];
				}
			}
		}
		newCurr = newCurr.next;
		curr = curr.next;
	}
	return newHead;
};
