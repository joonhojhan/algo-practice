/*
Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Note:
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

Example 1:

Input: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
Output: 1
Example 2:

Input: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
Output: 3
*/

// O(n) Time Complexity
// const kthSmallest = function (root, k) {
// 		let res;
// 		const dfs = function (node) {
// 			if (!node) return;
// 			dfs(node.left);
// 			k--;
// 			if (!k) {
// 				res = node.val;
// 			}
// 			dfs(node.right);
// 		};
// 		dfs(root);
// 		return res;
// }

// Optimized
const kthSmallest = function (root, k) {
	const stack = [];
	while (true) {
		while (root) {
			stack.push(root);
			root = root.left;
		}
		root = stack.pop();
		k--;
		if (!k) return root.val;
		root = root.right;
	}
};
