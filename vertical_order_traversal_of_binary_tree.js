/*
Given a binary tree, return the vertical order traversal of its nodes values.

For each node at position (X, Y), its left and right children respectively will be at positions (X-1, Y-1) and (X+1, Y-1).

Running a vertical line from X = -infinity to X = +infinity, whenever the vertical line touches some nodes, we report the values of the nodes in order from top to bottom (decreasing Y coordinates).

If two nodes have the same position, then the value of the node that is reported first is the value that is smaller.

Return an list of non-empty reports in order of X coordinate.  Every report will have a list of values of nodes.

Example 1:

Input: [3,9,20,null,null,15,7]
Output: [[9],[3,15],[20],[7]]
Explanation:
Without loss of generality, we can assume the root node is at position (0, 0):
Then, the node with value 9 occurs at position (-1, -1);
The nodes with values 3 and 15 occur at positions (0, 0) and (0, -2);
The node with value 20 occurs at position (1, -1);
The node with value 7 occurs at position (2, -2).

Example 2:

Input: [1,2,3,4,5,6,7]
Output: [[4],[2],[1,5,6],[3],[7]]
Explanation:
The node with value 5 and the node with value 6 have the same position according to the given scheme.
However, in the report "[1,5,6]", the node value of 5 comes first since 5 is smaller than 6.
*/
function findLocations(node, x, y, locations) {
	locations.push({ x, y, node });
	if (node.left) findLocations(node.left, x - 1, y + 1, locations);
	if (node.right) findLocations(node.right, x + 1, y + 1, locations);
	return locations;
}

const verticalTraversal = function (root) {
	const locations = findLocations(root, 0, 0, []).sort((a, b) => {
		if (a.x !== b.x) return a.x - b.x;
		if (a.y !== b.y) return a.y - b.y;
		return a.node.val - b.node.val;
	});
	const res = [[locations[0].node.val]];
	let prev = locations[0];
	for (let i = 1; i < locations.length; i++) {
		const curr = locations[i];
		if (prev.x === curr.x) {
			res[res.length - 1].push(curr.node.val);
		} else {
			prev = curr;
			res.push([curr.node.val]);
		}
	}
	return res;
};

/*
	TESTS
*/

function Node(val, left = null, right = null) {
	this.val = val;
	this.left = left;
	this.right = right;
}

const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);
const node2 = new Node(2, node4, node5);
const node3 = new Node(3, node6, node7);
const root1 = new Node(1, node2, node3);

const node15 = new Node(15);
const node10 = new Node(10);
const node9 = new Node(9);
const node20 = new Node(20, node15, node10);
const root2 = new Node(3, node9, node20);

console.log(verticalTraversal(root1)); // returns [[4],[2],[1,5,6],[3],[7]]
console.log(verticalTraversal(root2)); // returns [[9],[3,15],[20],[10]]
