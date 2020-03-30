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
const rightSideView = function(root) {
	if (!root) return [];
	if (!root.left && !root.right) return [root.val];
	let hash = {};
	let res = [];
	dft(root, hash);
	for (let d in hash) {
		let depthArr = hash[d];
		let lastEl = depthArr[depthArr.length - 1];
		res.push(lastEl);
	}
	return res;
};

const dft = function(node, hash, depth = 1) {
	if (!hash[depth]) {
		hash[depth] = [node.val];
	} else {
		hash[depth].push(node.val);
	}
	if (node.left) {
		dft(node.left, hash, depth + 1);
	}
	if (node.right) {
		dft(node.right, hash, depth + 1);
	}
};
