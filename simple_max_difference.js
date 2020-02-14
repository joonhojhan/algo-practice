/*
Given an array of integers, nums, return the maximum difference between any
element and any smaller, lower indexed element. In other words, return the
maximum difference for nums[j] - nums[i] when i < j and nums[i] < nums[j].
Return -1 if there is not a pair that satisfies this condition.

Example:
nums = [7, 1, 2, 5]
returns 4

nums = [7, 5, 3, 1]
returns -1
*/

function maxDifference(nums) {
	let n = nums.length;
	let greatest = -1;
	let maxRight = nums[n - 1];
	for (let i = n - 2; i >= 0; i--) {
		let curr = nums[i];
		if (curr > maxRight) {
			maxRight = curr;
		} else {
			let difference = maxRight - curr;
			if (difference > greatest) {
				greatest = difference;
			}
		}
	}
	return greatest ? greatest : -1;
}

console.log(maxDifference([7, 1, 2, 5]) === 4);
console.log(maxDifference([7, 5, 3, 1]) === -1);
