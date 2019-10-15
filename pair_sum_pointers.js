// Only works when input array is sorted
function pairSumPointers(arr, target) {
	let left = 0,
		right = arr.length - 1;
	// if (arr.length < 2) return false; // this checks if input array has at least a length of two, but is unnecessary as the while loop will check if the pointers are equal
	while (left !== right) {
		let sum = arr[left] + arr[right];
		if (sum === target) return true;
		if (sum > target) right--;
		else left++;
	}
	return false;
}

console.log(pairSumPointers([1, 2, 3, 4, 5], 10));
console.log(pairSumPointers([2, 3, 4, 5], 7));
console.log(pairSumPointers([1, 2, 3, 5, 5], 10));
console.log(pairSumPointers([2], 2));
console.log(pairSumPointers([0, 2], 2));
