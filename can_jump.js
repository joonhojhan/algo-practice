/*
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.
*/

const canJump = (nums) => {
	if (nums.length === 1) return true;
	if (nums[0] === 0) return false;
	let maxReach = nums[0];
	let steps = nums[0];
	for (let i = 1; i < nums.length - 1; i++) {
		if (!nums[i] && maxReach === i) return false;
		maxReach = Math.max(maxReach, nums[i] + i);
		steps--;
		if (steps === 0) {
			steps = maxReach - i;
		}
	}
	return maxReach < nums.length - 1 ? false : true;
};

console.log(canJump([3, 4, 2, 1, 2, 3, 3, 1, 1, 1, 3]));
console.log(canJump([3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]));
console.log(canJump([1, 0, 1, 0]));
