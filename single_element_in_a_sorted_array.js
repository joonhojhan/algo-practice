/*
You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.

Example 1:

Input: [1,1,2,3,3,4,4,8,8]
Output: 2
Example 2:

Input: [3,3,7,7,10,11,11]
Output: 10
*/

const singleNonDuplicate = function(nums) {
	if (nums.length === 1) return nums[0];
	let left = 0;
	let right = nums.length - 1;
	while (left <= right) {
		const midPt = Math.floor((left + right) / 2);
		const num = nums[midPt];
		const next = nums[midPt + 1];
		const prev = nums[midPt - 1];
		if (num === next) {
			if ((right + 1 - midPt) % 2 === 0) right = midPt - 1;
			else left = midPt + 2;
		} else if (num === prev) {
			if ((midPt - left + 1) % 2 === 0) left = midPt + 1;
			else right = midPt - 2;
		} else {
			return num;
		}
	}
	return -1;
};

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]) === 2);
console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]) === 10);
