/*
Leetcode: https://leetcode.com/problems/binary-tree-level-order-traversal/
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
*/

const dfs = function (node, res, level) {
	if (!node) return;
	if (!res[level]) res[level] = [node.val];
	else res[level].push(node.val);
	dfs(node.left, res, level + 1);
	dfs(node.right, res, level + 1);
};

const levelOrder = function (root) {
	const res = [];
	dfs(root, res, 0);
	return res;
};
