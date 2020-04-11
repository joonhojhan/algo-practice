/*
Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:
Given a binary tree
          1
         / \
        2   3
       / \
      4   5
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them.
*/
const diameterOfBinaryTree = function (root) {
	let ans = 1;
	if (!root) return 0;
	function findHeight(node) {
		if (!node) {
			return 0;
		}
		const leftHeight = findHeight(node.left);
		const rightHeight = findHeight(node.right);
		if (ans < leftHeight + rightHeight + 1) {
			ans = leftHeight + rightHeight + 1;
		}
		if (leftHeight > rightHeight) {
			return leftHeight + 1;
		}
		return rightHeight + 1;
	}
	findHeight(root);
	return ans - 1;
};

const Node = function (val, left, right) {
	this.val = val;
	this.left = left;
	this.right = right;
};

const node4 = new Node(4, null, null);
const node5 = new Node(5, null, null);
const node2 = new Node(2, node4, node5);
const node3 = new Node(3, null, null);
const node1 = new Node(1, node2, node3);
console.log(diameterOfBinaryTree(node1) === 3);
