/*
Write a program to find the node at which the intersection of two singly linked lists begins.
*/
const getIntersectionNode = function(headA, headB) {
	if (!headA || !headB) return null;
	let currA = headA,
		currB = headB;
	let counter = 0;
	while (currA !== currB && counter < 3) {
		if (!currA.next) {
			currA = headB;
			counter++;
		} else currA = currA.next;
		if (!currB.next) {
			currB = headA;
			counter++;
		} else currB = currB.next;
	}
	return currA === currB ? currA : null;
};
