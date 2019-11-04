/*
Given a linked list, remove the n-th node from the end of list and return its head.
*/
const removeNthFromEnd = function(head, n) {
	let curr = head;
	let window = head;
	if (!head.next) return null;
	for (let i = 0; i < n; i++) {
		window = window.next;
	}
	if (!window) return curr.next;
	while (window.next) {
		curr = curr.next;
		window = window.next;
	}
	curr.next = curr.next.next;
	return head;
};
