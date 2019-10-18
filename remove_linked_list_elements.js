/*
Remove all elements from a linked list of integers that have value val.
*/

const removeElements = (head, val) => {
	// currHead variable to return
	let currHead = head;
	/*
	If there is only one element in the linked list
	and the value is equal to the target value, return null
	*/
	if (currHead && !currHead.next && currHead.val === val) return null;
	// while head exists and head.next exists
	while (head && head.next) {
		// if at the start of the linked list, the currHead is equal to the target value
		if (currHead.val === val) {
			/*
			edge case for repeating target values starting from the beginning of the linked list
			and currHead keeps moving to the end of the linked list, check if the rest of the
			linked list is equal to the target value and set head.next to null;
			*/
			if (head.next.val === val && head.next.next === null) {
				head.next = null;
			}
			// move currHead to return to the next node
			currHead = currHead.next;
			// move pointer forward to currHead
			head = currHead;
		} else if (head.next.val === val) head.next = head.next.next;
		/*
		if currHead is taken care of, check if next node value is euqal to the
		target value, if yes, set head.next to the node after head.next
		*/
		// move head pointer forward to next node
		else head = head.next;
	}
	// return currHead
	return currHead;
};
