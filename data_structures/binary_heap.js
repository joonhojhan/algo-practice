class MaxBinaryHeap {
	constructor() {
		this.items = [];
	}

	getValues() {
		return this.items;
	}

	childIndexes(idx) {
		return [idx * 2 + 1, idx * 2 + 2];
	}

	parentIndex(idx) {
		return Math.floor((idx - 1) / 2);
	}

	swap(idx1, idx2) {
		[this.items[idx1], this.items[idx2]] = [this.items[idx2], this.items[idx1]];
	}

	heapifyUp() {
		let currentIdx = this.items.length - 1;
		// while currentIdx is not at the top of the binary heap and the priority of the current index's priority is les than its
		while (
			currentIdx > 0 &&
			this.items[currentIdx] > this.items[this.parentIndex(currentIdx)]
		) {
			this.swap(currentIdx, this.parentIndex(currentIdx));
			currentIdx = this.parentIndex(currentIdx);
		}
	}

	insert(data) {
		this.items.push(data);
		this.heapifyUp();
	}

	heapifyDown(idx = 0) {
		let currentIdx = idx;
		let [left, right] = this.childIndexes(currentIdx);
		let largerIdx;
		const length = this.items.length;
		while (left < length) {
			if (right < length)
				largerIdx = this.items[left] >= this.items[right] ? left : right;
			else largerIdx = left;
			if (this.items[currentIdx] < this.items[largerIdx]) {
				this.swap(largerIdx, currentIdx);
				currentIdx = largerIdx;
				[left, right] = this.childIndexes(currentIdx);
				// else return
			} else return;
		}
	}

	popMax() {
		if (this.items.length === 1) {
			const max = this.items.pop();
			return max;
		}
		const max = this.items[0];
		this.items[0] = this.items.pop();
		this.heapifyDown();
		return max;
	}

	popNode(idx) {
		const node = this.items[idx];
		if (idx === this.items.length - 1) this.items.pop();
		else this.items[idx] = this.items.pop();
		this.heapifyDown(idx);
		return node;
	}
}
const binaryHeap = new MaxBinaryHeap();
binaryHeap.insert(41);
binaryHeap.insert(12);
binaryHeap.insert(39);
binaryHeap.insert(33);
binaryHeap.insert(18);
binaryHeap.insert(27);
binaryHeap.insert(55);
console.log(binaryHeap.getValues());
console.log(binaryHeap.popMax());
console.log(binaryHeap.getValues());
console.log(binaryHeap.popMax());
console.log(binaryHeap.getValues());
console.log(binaryHeap.popMax());
console.log(binaryHeap.getValues());
console.log(binaryHeap.popMax());
console.log(binaryHeap.getValues());

// binaryHeap.getValues();
const heap = new MaxBinaryHeap();
const arr = [2, 7, 4, 1, 8, 1];
for (let i = 0; i < arr.length; i++) {
	heap.insert(arr[i]);
}
console.log(heap.getValues());
console.log(heap.popMax());
console.log(heap.getValues());
console.log(heap.popMax());
console.log(heap.getValues());
console.log(heap.popMax());
console.log(heap.getValues());
console.log(heap.popMax());
console.log(heap.getValues());
console.log(heap.popMax());
console.log(heap.getValues());
console.log(heap.popMax());
