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

console.log(pairSumNaive([1, 2, 3, 4, 5], 10));
console.log(pairSumNaive([2, 3, 4, 5], 7));
console.log(pairSumNaive([1, 2, 3, 5, 5], 10));
console.log(pairSumNaive([2], 2));
console.log(pairSumNaive([0, 2], 2));
