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

const levelOrder = function(root) {
	let res = [];
	if (!root) return res;
	let levels = new Map();
	dft(root);
	levels.forEach((val, key) => {
		res.push(val);
	});
	return res;
	function dft(node, depth = 1) {
		if (levels.get(depth)) {
			levels.get(depth).push(node.val);
		} else {
			levels.set(depth, [node.val]);
		}
		if (node.left) {
			dft(node.left, depth + 1);
		}
		if (node.right) {
			dft(node.right, depth + 1);
		}
	}
};
