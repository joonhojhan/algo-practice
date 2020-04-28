/*
You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.
*/

// O(n) Time, O(h) Space
// const connect = function (root, hash = new Map(), level = 0) {
// 	if (!root) return null;
// 	if (!hash.has(level)) hash.set(level, root);
// 	else {
// 		hash.get(level).next = root;
// 		hash.set(level, root);
// 	}
// 	connect(root.left, hash, level + 1);
// 	connect(root.right, hash, level + 1);
// 	return root;
// };

// O(n) Time, O(1) Space
const connect = function (root) {
	if (!root) return null;
	if (root.right) {
		root.left.next = root.right;
		if (root.next) root.right.next = root.next.left;
	}
	connect(root.left);
	connect(root.right);
	return root;
};
