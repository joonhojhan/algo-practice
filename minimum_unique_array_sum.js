/*
Given an array, incremen any duplicate elements until all elements are unique.
The sum of the elements must be the minimum possible.

Example:
arr = [3, 2, 1, 2, 7]
returns 17
*/

function getMinimumUniqueSum(arr) {
	arr.sort((a, b) => a - b);
	const n = arr.length;
	let sum = arr[0];
	let previous = arr[0];
	for (let i = 1; i < n; i++) {
		if (arr[i] <= previous) {
			previous++;
			sum += previous;
		} else {
			sum += arr[i];
			previous = arr[i];
		}
	}
	return sum;
}

console.log(getMinimumUniqueSum([3, 2, 1, 2, 7]) === 17);
console.log(getMinimumUniqueSum([1, 1, 2, 2, 3, 4, 10, 11]) === 42);
console.log(getMinimumUniqueSum([1, 2, 2, 3, 3, 4]) === 21);
