/*
Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:
Input:nums = [1,1,1], k = 2
Output: 2

Note:
The length of the array is in range [1, 20,000].
The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].
*/

// O(N^2) time
// O(1) space
// const subarraySum = function (nums, k) {
// 	let total = 0;
// 	for (let i = 0; i < nums.length; i++) {
// 		let currTotal = 0;
// 		for (let j = i; j < nums.length; j++) {
// 			currTotal += nums[j];
// 			if (currTotal === k) total++;
// 		}
// 	}
// 	return total;
// };

// O(N) time
// O(N) space
const subarraySum = function (nums, k) {
	let total = 0;
	let sum = 0;
	const hash = new Map();
	const n = nums.length;
	hash.set(0, 1);
	for (let i = 0; i < n; i++) {
		const curr = nums[i];
		sum += curr;
		if (hash.has(sum - k)) total += hash.get(sum - k);
		if (hash.has(sum)) hash.set(sum, hash.get(sum) + 1);
		else hash.set(sum, 1);
	}
	return total;
};

console.log(subarraySum([1, 1, 1], 3) === 1);
console.log(subarraySum([1, 1, 1], 2) === 2);
console.log(subarraySum([1, 1, 1], 1) === 3);
console.log(subarraySum([1, 1, 1, 3, 1, 1, 1, 2, 1, 3], 3) === 6);
console.log(subarraySum([3, 4, 7, 2, -3, 1, 4, 2], 7) === 4);
