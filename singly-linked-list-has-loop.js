/*
Given a linked list, determine if it has a cycle in it.

To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.
*/

const hasCycle = function(head) {
	let t = head,
		h = head;
	do {
		if (t === null || h === null || t.next === null || h.next === null)
			return false;
		t = t.next;
		h = h.next.next;
	} while (t !== h);
	return true;
};
