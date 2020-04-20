/*
Return the root node of a binary search tree that matches the given preorder traversal.

(Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)

Example 1:

Input: [8,5,1,7,10,12]
Output: [8,5,10,1,7,null,12]

*/

function TreeNode(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}

const insert = function (val, node) {
	if (!node) return new TreeNode(val);
	if (val < node.val) node.left = insert(val, node.left);
	else node.right = insert(val, node.right);
	return node;
};

const bstFromPreorder = function (preorder) {
	let root = new TreeNode(preorder[0]);
	for (let i = 1; i < preorder.length; i++) {
		root = insert(preorder[i], root);
	}
	return root;
};

/*
	TEST
*/

const test = bstFromPreorder([8, 5, 1, 7, 10, 12]);

const preOrderTraversal = function (root) {
	const res = [];
	const traverse = function (node, arr) {
		arr.push(node.val);
		if (node.left) {
			traverse(node.left, arr);
		}
		if (node.right) {
			traverse(node.right, arr);
		}
	};
	traverse(root, res);
	return res;
};

console.log(preOrderTraversal(test)); // returns [8,5,1,7,10,12]
