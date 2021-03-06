/*
Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
*/
const findDuplicates = function (nums) {
	const res = [];
	const n = nums.length;
	for (let i = 0; i < n; i++) {
		const num = nums[i];
		if (nums[Math.abs(num) - 1] < 0) {
			res.push(Math.abs(num));
		}
		nums[Math.abs(num) - 1] *= -1;
	}
	return res;
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // [2,3]
