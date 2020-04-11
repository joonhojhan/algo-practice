function threeNumberSum(array, targetSum) {
	// Write your code here.
	array.sort((a, b) => a - b);
	const res = [];
	const memo = new Set([]);
	for (let i = 0; i < array.length; i++) {
		const currTarget = targetSum - array[i];
		let left = 0;
		let right = array.length - 1;
		while (left < right) {
			if (left === i) left++;
			else if (right === i) right--;
			const tempSum = array[left] + array[right];
			if (tempSum === currTarget) {
				const check = [array[left], array[right], array[i]].sort((a, b) => a - b);
				if (!memo.has(String(check))) {
					res.push(check);
					memo.add(String(check));
				}
				left++;
				right--;
			} else if (tempSum < currTarget) left++;
			else right--;
		}
	}
	return res;
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 1));
console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 2));
console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 3));
console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 4));
console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 5));
console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 6));
console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 7));
