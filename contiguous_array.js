/*
Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

Example 1:
Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
Example 2:
Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
*/
const findMaxLength = function (nums) {
	let count = 0;
	const hash = new Map();
	let res = 0;
	hash.set(0, -1);
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 0) {
			count--;
		} else {
			count++;
		}
		if (hash.has(count)) {
			res = Math.max(res, i - hash.get(count));
		} else {
			hash.set(count, i);
		}
	}
	return res;
};

console.log(findMaxLength([0, 1]) === 2);
console.log(findMaxLength([0, 1, 0]) === 2);
console.log(findMaxLength([0, 1, 0, 1, 1, 1, 0, 0, 0]) === 8);
