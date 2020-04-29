/*
Given a non-empty binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

Example 1:

Input: [1,2,3]

       1
      / \
     2   3

Output: 6
Example 2:

Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

Output: 42
*/

const maxPathSum = function (root) {
	let sum = -Infinity;
	const dfs = function (node) {
		if (!node) return 0;
		const left = dfs(node.left);
		const right = dfs(node.right);
		const both = node.val + left + right;
		const res = Math.max(left + node.val, right + node.val, node.val);
		sum = Math.max(sum, left + node.val, right + node.val, both, node.val);
		return res;
	};
	dfs(root);
	return sum;
};
