/*
Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

Example 1:
Input: 1->2->3->3->4->4->5
Output: 1->2->5

Example 2:
Input: 1->1->1->2->3
Output: 2->3

Example 3:
Input: 1->1->1
Output: null
*/
const deleteDuplicates = function (head) {
	if (!head) return head;
	let prev = head;
	let curr = head;
	let next = curr.next;
	while (curr) {
		next = curr.next;
		if (head && head.next && head.val === head.next.val) {
			while (head && head.next && head.val === head.next.val) {
				head = head.next;
			}
			if (curr.val === head.val) head = head.next;
		}
		if (next && next.val === curr.val) {
			while (next && next.val === curr.val) {
				next = next.next;
			}
			prev.next = next;
			curr = next;
		} else {
			prev = curr;
			curr = curr.next;
		}
	}
	return head;
};
