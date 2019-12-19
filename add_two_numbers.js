/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

function ListNode(val) {
	this.val = val;
	this.next = null;
}

const addTwoNumbers = function(l1, l2) {
	let p1 = l1;
	let p2 = l2;
	let carry = 0;
	let res = null;
	let resCurr = null;
	while (p1 && p2) {
		let sum = p1.val + p2.val + carry;
		if (sum > 9) {
			carry = 1;
			sum -= 10;
		} else carry = 0;
		if (!res) {
			res = new ListNode(sum);
			resCurr = res;
		} else {
			resCurr.next = new ListNode(sum);
			resCurr = resCurr.next;
		}
		p1 = p1.next;
		p2 = p2.next;
	}
	let curr = p1 ? p1 : p2;
	while (curr) {
		let sum = curr.val + carry;
		if (sum > 9) {
			sum -= 10;
			carry = 1;
		} else carry = 0;
		resCurr.next = new ListNode(sum);
		resCurr = resCurr.next;
		curr = curr.next;
	}
	if (carry) resCurr.next = new ListNode(carry);
	return res;
};
