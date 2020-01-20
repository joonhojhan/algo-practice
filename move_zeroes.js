/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
*/

const moveZeroes = function(nums) {
	for (let i = 0, lastNonZero = 0; i < nums.length; i++) {
		if (nums[i]) {
			[nums[i], nums[lastNonZero]] = [nums[lastNonZero], nums[i]];
			lastNonZero++;
		}
	}
};

const test1 = [0, 1, 0, 3, 12];
moveZeroes(test1);
console.log(test1); // [1,3,12,0,0]
