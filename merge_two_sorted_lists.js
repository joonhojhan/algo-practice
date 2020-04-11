/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

function ListNode(val) {
	this.val = val;
	this.next = null;
}

const mergeTwoLists = function (l1, l2) {
	let curr1 = l1;
	let curr2 = l2;
	if (!l1 && !l2) return null;
	if (!l1) return l2;
	if (!l2) return l1;
	const res =
		curr1.val > curr2.val ? new ListNode(curr2.val) : new ListNode(curr1.val);
	if (curr1.val > curr2.val) {
		curr2 = curr2.next;
	} else {
		curr1 = curr1.next;
	}
	let currRes = res;
	while (curr1 && curr2) {
		if (curr1.val > curr2.val) {
			currRes.next = curr2;
			curr2 = curr2.next;
			currRes = currRes.next;
		} else {
			currRes.next = curr1;
			curr1 = curr1.next;
			currRes = currRes.next;
		}
	}
	if (curr1) {
		currRes.next = curr1;
	} else {
		currRes.next = curr2;
	}
	return res;
};
