/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/

// time complexity: O(N)
// space complexity: O(1)
const maxSubArray = function(nums) {
	let sum = 0;
	let res = -Infinity;
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
		if (sum > res) res = sum;
		if (sum < 0) sum = 0;
	}
	return res;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6);
console.log(maxSubArray([-2, 1, -3, 4, 3, -4, 2, 1, 4, -5, 4]) === 10);
console.log(maxSubArray([-2, 1, -3, 4, 3, -1, 2, 1, -5, 4]) === 9);
console.log(maxSubArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -55, 56]) === 56);
console.log(maxSubArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -55, 54]) === 55);
