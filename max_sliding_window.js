/*
Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.

Example:

Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
Output: [3,3,5,5,6,7]
Explanation:

Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Note:
You may assume k is always valid, 1 ≤ k ≤ input array's size for non-empty array.
*/

const maxSlidingWindow = function(nums, k) {
	let res = [];
	let curr = [];
	for (let i = 0; i < k; i++) {
		curr.push(nums[i]);
	}
	res.push(Math.max(...curr));
	let i = k;
	while (i < nums.length) {
		curr.shift();
		curr.push(nums[i]);
		res.push(Math.max(...curr));
		i++;
	}
	return nums.length ? res : [];
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7, -4, 8, 0, 0, 1], 3)); // [3,3,5,5,6,7,7,8,8,8,1]
