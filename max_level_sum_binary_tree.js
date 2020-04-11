/*
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

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const maxLevelSum = function (root) {
	const levels = {};
	function dfs(node, level = 1) {
		if (!levels[level]) {
			levels[level] = node.val;
		} else {
			levels[level] += node.val;
		}
		if (node.left) {
			dfs(node.left, level + 1);
		}
		if (node.right) {
			dfs(node.right, level + 1);
		}
	}
	dfs(root);
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
