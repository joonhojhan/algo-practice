function pairSumMemo(arr, target) {
	let memo = {};
	for (let num of arr) {
		if (memo[target - num]) return true;
		memo[num] = true;
	}
	return false;
}

console.log(pairSumMemo([1, 2, 3, 4, 5], 10));
console.log(pairSumMemo([2, 3, 4, 5], 7));
console.log(pairSumMemo([1, 2, 3, 5, 5], 10));
console.log(pairSumMemo([2], 2));
console.log(pairSumMemo([0, 2], 2));
