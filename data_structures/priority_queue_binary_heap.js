/*
Priority Queue using a Min Binary Heap
*/

class PriorityQueueBinaryHeap {
	constructor() {
		this.items = [];
	}

	// returns child indexes of index provided
	childIndexes(idx) {
		return [idx * 2 + 1, idx * 2 + 2];
	}

	// returns parent index of index provided
	parentIndex(idx) {
		return Math.floor((idx - 1) / 2);
	}

	// swaps elements in an array given their indexes
	swap(idx1, idx2) {
		[this.items[idx1], this.items[idx2]] = [this.items[idx2], this.items[idx1]];
	}

	// takes last item in the binary heap and checks against its parent and swaps if priority of item is less than priority of parent
	// this repeats until in correct position or at the top of the heap
	heapifyUp() {
		// initialize currentIdx pointer to last index of binary heap
		let currentIdx = this.items.length - 1;
		// while currentIdx is not at the top of the binary heap and the priority of the current index's priority is les than its parent index's priority
		while (
			currentIdx > 0 &&
			this.items[currentIdx].priority <
				this.items[this.parentIndex(currentIdx)].priority
		) {
			// swap current index and parent index
			this.swap(currentIdx, this.parentIndex(currentIdx));
			// reassign current index to parent index of current index
			currentIdx = this.parentIndex(currentIdx);
		}
	}

	insert(data, priority) {
		this.items.push({ data, priority });
		this.heapifyUp();
	}

	heapifyDown(idx = 0) {
		let currentIdx = idx;
		let [left, right] = this.childIndexes(currentIdx);
		let largerIdx;
		const length = this.items.length;
		// while at least one child exists
		while (left < length) {
			// if right child exists
			if (right < length)
				// set largerIdx equal to the index of the child with lesser priority
				largerIdx =
					this.items[left].priority <= this.items[right].priority ? left : right;
			// set largerIdx to left index by default
			else largerIdx = left;
			// if priority of currentIdx is greater than the priority of largerIdx (child with larger priority)
			if (this.items[currentIdx].priority > this.items[largerIdx].priority) {
				// swap largerIdx and currentIdx
				this.swap(largerIdx, currentIdx);
				// reassign current index to larger index
				currentIdx = largerIdx;
				// reassign left and right child indexes
				[left, right] = this.childIndexes(currentIdx);
				// else return
			} else return;
		}
	}

	// removes the greatets priority node from queue
	popMin() {
		const max = this.items[0];
		this.items[0] = this.items.pop();
		this.heapifyDown();
		return max.data;
	}

	// removes the node at specific idx in priority queue
	popNode(idx) {
		const node = this.items[idx];
		if (idx === this.items.length - 1) this.items.pop();
		else this.items[idx] = this.items.pop();
		this.heapifyDown(idx);
		return node.data;
	}

	// peek at greatest priority node
	peek() {
		return this.items[0].data;
	}
}
// let binaryHeap = new PriorityQueueBinaryHeap();
// binaryHeap.insert('A', 0);
// binaryHeap.insert('B', 5);
// binaryHeap.insert('C', 6);
// binaryHeap.insert('D', 7);
// binaryHeap.insert('E', 8);
// binaryHeap.insert('F', 9);
// binaryHeap.insert('G', 10);
// binaryHeap.insert('H', 3);
// binaryHeap.insert('I', 1);
// console.log(binaryHeap.popNode(8));
// // binaryHeap.insert('B', 8);

// console.log('after', binaryHeap.items);

module.exports = PriorityQueueBinaryHeap;
