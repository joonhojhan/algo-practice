/*
Given a sorted (in ascending order) integer array nums of n
elements and a target value, write a function to search target
in nums. If target exists, then return its index, otherwise return -1.
*/

const search = (nums, target) => {
	let left = 0,
		right = nums.length - 1,
		mid = Math.floor((right + left) / 2);
	if (target === nums[mid]) return mid;
	if (target === nums[right]) return right;
	if (target === nums[left]) return left;
	while (left !== mid && right !== mid) {
		if (target === nums[mid]) return mid;
		else if (target < nums[mid]) right = mid;
		else left = mid;
		mid = Math.floor((right + left) / 2);
	}
	return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9) === 4);
console.log(search([-1, 0, 3, 5, 9, 12], 2) === -1);
console.log(
	search([-1, 0, 3, 5, 9, 12, 13, 14, 15, 16, 17, 18, 19, 20, 50, 100], 18) ===
		11
);
