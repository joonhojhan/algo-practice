/*
Given an n-ary tree, return the postorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value
*/
const postorderIterative = function (root) {
	const res = [];
	if (!root) return res;
	const stack = [root];
	while (stack.length) {
		const popped = stack.pop();
		stack.children.forEach((child) => {
			stack.push(child);
		});
		res.unshift(popped.val);
	}
	return res;
};

function helper(node, res) {
	node.children.forEach((child) => {
		helper(child, res);
		res.push(child.val);
	});
}

const postorderRecursive = function (root) {
	const res = [];
	if (!root) return res;
	helper(root, res);
	res.push(root.val);
	return res;
};
