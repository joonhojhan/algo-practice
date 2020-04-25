/*
Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
*/

const dfs = function (node, res, depth = 0) {
	if (!node) return;
	if (!res[depth]) res.push(node.val);
	dfs(node.right, res, depth + 1);
	dfs(node.left, res, depth + 1);
};

const rightSideView = function (root) {
	const res = [];
	dfs(root, res);
	return res;
};
