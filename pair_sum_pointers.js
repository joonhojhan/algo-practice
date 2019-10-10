function pairSumPointers(arr, target) {
	let left = 0,
		right = arr.length - 1;
	if (arr.length < 2) return false;
	while (left !== right) {
		let sum = arr[left] + arr[right];
		if (sum === target) return true;
		if (sum > target) right--;
		else left++;
	}
	return false;
}
