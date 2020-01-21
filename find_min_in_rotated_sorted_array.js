/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.

You may assume no duplicate exists in the array.

Example 1:

Input: [3,4,5,1,2]
Output: 1
Example 2:

Input: [4,5,6,7,0,1,2]
Output: 0
*/

const findMin = function(nums) {
	let left = 0;
	let right = nums.length - 1;
	// if the first number is less than the last number or if the array has one number in it, return first number
	if (nums[right] > nums[0] || nums.length === 1) return nums[0];
	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		// if the mid number is greater than the next number, return next number
		if (nums[mid] > nums[mid + 1]) return nums[mid + 1];
		// if the mid number is less than the number before it, return the mid number
		if (nums[mid - 1] > nums[mid]) return nums[mid];
		// if mid number is greater than first number, move left pointer to mid + 1
		if (nums[mid] > nums[0]) left = mid + 1;
		// else if mid number is less than first number, move right pointer to mid - 1
		else right = mid - 1;
	}
	return -1;
};

console.log(findMin([3, 4, 5, 1, 2]) === 1);
console.log(findMin([4, 5, 6, 7, 0, 1, 2]) === 0);
console.log(findMin([4, 5, 6, 7, 0, 1, 2]) === 0);
console.log(findMin([0, 1, 2, 3, 4, 5, 6]) === 0);
console.log(findMin([1]) === 1);
