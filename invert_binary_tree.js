/*
Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1
*/

function invertTree(root) {
	if (!root) return null;
	const temp = root.left;
	root.left = root.right;
	root.right = temp;
	if (root.left) invertTree(root.left);
	if (root.right) invertTree(root.right);
	return root;
}
