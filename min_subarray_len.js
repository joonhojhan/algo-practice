/*
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
*/

// time complexity: O( (((n+1)(n+2))/2) - 1 )
// space complexity: O(1)
// const minSubArrayLen = function(arr, k) {
// 	let window = 0;
// 	let res = Infinity;
// 	for (let i = 0; i < arr.length; i++) {
// 		let currSum = 0;
// 		while (currSum < k && i + window < arr.length) {
// 			currSum += arr[i + window];
// 			window++;
// 		}
// 		if (currSum >= k) res = Math.min(res, window);
// 		window = 0;
// 	}
// 	return res === Infinity ? 0 : res;
// };

// time complexity: O(N)
// space complexity: O(1)
const minSubArrayLen = function(arr, k) {
	let res = Infinity;
	let left = 0;
	let currSum = 0;
	for (let i = 0; i < arr.length; i++) {
		currSum += arr[i];
		while (currSum >= k) {
			res = Math.min(res, i + 1 - left);
			currSum -= arr[left];
			left++;
		}
	}
	return res === Infinity ? 0 : res;
};

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7) === 2);
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9) === 2);
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) === 1);
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) === 2);
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) === 3);
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) === 5);
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) === 0);
