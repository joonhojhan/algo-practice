function pairSumNaive(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[i] + arr[j] === target && i !== j) {
				return true;
			}
		}
	}
	return false;
}
