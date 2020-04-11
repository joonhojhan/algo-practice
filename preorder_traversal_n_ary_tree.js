/*
Given an n-ary tree, return the preorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value
*/

const preorderIterative = function (root) {
	const res = [];
	if (!root) return res;
	const stack = [root];
	while (stack.length) {
		const popped = stack.pop();
		res.push(popped.val);
		for (let i = popped.children.length - 1; i >= 0; i--) {
			const child = popped.children[i];
			stack.push(child);
		}
	}
	return res;
};

function helper(node, res) {
	res.push(node.val);
	node.children.forEach((child) => {
		helper(child, res);
	});
}

const preorderRecursive = function (root) {
	const res = [];
	if (!root) return res;
	helper(root, res);
	return res;
};
