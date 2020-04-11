/*
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).
*/

const productExceptSelf = function (nums) {
	const n = nums.length;
	const res = Array(n);
	res[0] = 1;
	for (let i = 1; i < n; i++) {
		res[i] = res[i - 1] * nums[i - 1];
	}
	let left = 1;
	for (let i = n - 1; i >= 0; i--) {
		res[i] *= left;
		left *= nums[i];
	}
	return res;
};

console.log(productExceptSelf([1, 2, 3, 4]));
