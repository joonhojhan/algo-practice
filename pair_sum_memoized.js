function pairSumMemo(arr, target) {
	let memo = {};
	for (let num of arr) {
		if (memo[target - num]) return true;
		memo[num] = true;
	}
	return false;
}
