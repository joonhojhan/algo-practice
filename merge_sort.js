const mergeSort = arr => {
	if (arr.length < 2) return arr;
	const midIdx = Math.floor(arr.length / 2);
	const leftArr = arr.slice(0, midIdx);
	const rightArr = arr.slice(midIdx);
	return mergeArrays(mergeSort(leftArr), mergeSort(rightArr));
	function mergeArrays(left, right) {
		const mergedArr = [];
		let leftIdx = 0,
			rightIdx = 0;
		while (leftIdx < left.length && rightIdx < right.length) {
			if (left[leftIdx] < right[rightIdx]) {
				mergedArr.push(left[leftIdx]);
				leftIdx++;
			} else {
				mergedArr.push(right[rightIdx]);
				rightIdx++;
			}
		}
		if (leftIdx < left.length) mergedArr.push(...left.slice(leftIdx));
		if (rightIdx < right.length) mergedArr.push(...right.slice(rightIdx));
		return mergedArr;
	}
};

console.log(mergeSort([]));
console.log(mergeSort([5]));
console.log(mergeSort([1, 2]));
console.log(mergeSort([2, 1]));
console.log(mergeSort([8, 5, 2, 9, 5, 6, 3]));
console.log(
	mergeSort([100, 2, 5, 7, 9, 23, 76, 23, 8, 5, 2, 9, 3, 38, 98, 5, 6, 3])
);
