/*
Write a function that takes in a Binary Tree and returns a list of its branch sums (ordered from leftmost branch sum to rightmost branch sum). A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree branch is a path of nodes in a tree that starts at the root node and ends at any leaf node. Each Binary Tree node has a value stored in a property called "value" and two children nodes stored in properties called "left" and "right," respectively. Children nodes can either be Binary Tree nodes themselves or the None (null) value.
*/
const branchSums = function(root, sum = 0, res = []) {
	// Write your code here.
	if (!root) return res;
	sum += root.value;
	if (root.left) branchSums(root.left, sum, res);
	if (!root.left && !root.right) res.push(sum);
	if (root.right) branchSums(root.right, sum, res);
	return res;
};
