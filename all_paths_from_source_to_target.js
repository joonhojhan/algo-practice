/*
Given a directed, acyclic graph of N nodes.  Find all possible paths from node 0 to node N-1, and return them in any order.

The graph is given as follows:  the nodes are 0, 1, ..., graph.length - 1.  graph[i] is a list of all nodes j for which the edge (i, j) exists.

Example:
Input: [[1,2], [3], [3], []]
Output: [[0,1,3],[0,2,3]]
Explanation: The graph looks like this:
0--->1
|    |
v    v
2--->3
There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.
*/

function traverse(idx, graph, curr, res) {
	if (idx === graph.length - 1) {
		res.push(curr.slice());
		return;
	}
	for (let i = 0; i < graph[idx].length; i++) {
		curr.push(graph[idx][i]);
		traverse(graph[idx][i], graph, curr, res);
		curr.pop();
	}
}

const allPathsSourceTarget = function (graph) {
	const res = [];
	const curr = [0];
	traverse(0, graph, curr, res);
	return res;
};

console.log(allPathsSourceTarget([[1, 2], [3], [3], []])); // returns [[0, 1, 3], [0, 2, 3]]
console.log(allPathsSourceTarget([[1, 2], [3, 4], [3, 4], [4], []])); // returns [[0, 1, 3, 4], [0, 1, 4], [0, 2, 3, 4], [0, 2, 4]]
console.log(allPathsSourceTarget([[1, 2], [4], [3, 5], [4], [5], []])); // returns [[0, 1, 4, 5], [0, 2, 3, 4, 5], [0, 2, 5]]
