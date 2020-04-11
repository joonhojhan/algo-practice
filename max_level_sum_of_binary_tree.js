/*
Leetcode: https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/
Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

Return the smallest level X such that the sum of all the values of nodes at level X is maximal.

Example 1:

Input: [1,7,0,7,-8,null,null]
Output: 2
Explanation:
Level 1 sum = 1.
Level 2 sum = 7 + 0 = 7.
Level 3 sum = 7 + -8 = -1.
So we return the level with the maximum sum which is level 2.
*/
const maxLevelSum = function (root) {
	const levels = {};
	function dft(node, level = 1) {
		if (!levels[level]) {
			levels[level] = node.val;
		} else {
			levels[level] += node.val;
		}
		if (node.left) {
			dft(node.left, level + 1);
		}
		if (node.right) {
			dft(node.right, level + 1);
		}
	}
	dft(root);
	let maxSum = -Infinity;
	let maxSumLevel = -1;
	for (const key in levels) {
		const levelSum = Number(levels[key]);
		if (levelSum > maxSum) {
			maxSum = levelSum;
			maxSumLevel = Number(key);
		}
	}
	return maxSumLevel;
};
