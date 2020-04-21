/*
Given a binary tree, flatten it to a linked list in-place.

For example, given the following tree:

    1
   / \
  2   5
 / \   \
3   4   6
The flattened tree should look like:

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
*/

const dft = function (node, hash) {
	hash.push(node);
	if (node.left) dft(node.left, hash);
	if (node.right) dft(node.right, hash);
};

const flatten = function (root) {
	if (!root) return null;
	const nodes = [];
	dft(root, nodes);
	for (let i = 0; i < nodes.length - 1; i++) {
		const curr = nodes[i];
		const next = nodes[i + 1];
		curr.left = null;
		curr.right = next;
	}
	return root;
};

/*
TEST
*/

function TreeNode(val, left = null, right = null) {
	this.val = val;
	this.left = left;
	this.right = right;
}

const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node6 = new TreeNode(6);
const node2 = new TreeNode(2, node3, node4);
const node5 = new TreeNode(5, null, node6);
const root = new TreeNode(1, node2, node5);

const flattened = flatten(root);
let curr = flattened;
const test = [];
while (curr) {
	test.push(curr.val);
	curr = curr.right;
}

console.log(test); // returns [1,2,3,4,5,6]
