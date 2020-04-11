/*
Dijkstras Algorithm
*/

const Graph = require('./weighted_graph');
const PriorityQueue = require('./priority_queue_binary_heap');

const dijkstrasAlgo = function (start, end, graph) {
	// initialize priority queue for distances and previous object to keep track of path
	const distances = new PriorityQueue();
	// initialize prev to keep track of path
	const prev = {};
	// initialize distances pq to keep track of shortest distances from start
	Object.keys(graph.adjacencyList).forEach((v) => {
		if (start === v) distances.insert(v, 0);
		else distances.insert(v, Infinity);
		prev[v] = null;
	});
	// path to return
	const path = [];
	// initialize visited to keep track of visited vertices
	const visited = new Set([]);
	// loop while the end vertex is not the highest priority vertex in pq
	while (distances.peek() !== end) {
		const currDistance = distances.items.find((el) => el.data === distances.peek())
			.priority; // distance of current chosen vertex
		// choose the vertex with the shortest distance from A
		const curr = distances.popMin();
		// add current chosen vertex to visited
		visited.add(curr);
		// for each neighbor of current chosen vertex
		for (const v of graph.adjacencyList[curr]) {
			// only check vertex if it hasn't been visited
			if (!visited.has(v.node)) {
				// find that vertex in distances pq and update distance
				for (let i = 0; i < distances.items.length; i++) {
					// vertex from distances pq
					const node = {
						data: distances.items[i].data,
						priority: distances.items[i].priority,
					};
					// found child in distances pq
					if (v.node === node.data) {
						// update if current distance is greater than new distance
						if (node.priority > currDistance + v.weight) {
							distances.popNode(i);
							distances.insert(v.node, currDistance + v.weight);
							prev[v.node] = curr;
						}
					}
				}
			}
		}
	}
	let pathCurr = end;
	// build path
	while (pathCurr) {
		path.unshift(pathCurr);
		pathCurr = prev[pathCurr];
	}
	// return distance of shortest path and path
	return { distance: distances.items[0].priority, path };
};

const test = new Graph();
test.addVertex('A');
test.addVertex('B');
test.addVertex('C');
test.addVertex('D');
test.addVertex('E');
test.addVertex('F');
test.addEdge('A', 'C', 2);
test.addEdge('A', 'B', 4);
test.addEdge('B', 'E', 3);
test.addEdge('E', 'D', 3);
test.addEdge('C', 'D', 2);
test.addEdge('D', 'F', 1);
test.addEdge('F', 'C', 4);
test.addEdge('F', 'E', 1);

const test2 = new Graph();
test2.addVertex('A');
test2.addVertex('B');
test2.addVertex('C');
test2.addVertex('D');
test2.addVertex('E');
test2.addVertex('F');
test2.addVertex('G');
test2.addEdge('A', 'B', 1);
test2.addEdge('A', 'C', 3);
test2.addEdge('A', 'F', 10);
test2.addEdge('G', 'B', 2);
test2.addEdge('G', 'D', 12);
test2.addEdge('F', 'D', 1);
test2.addEdge('F', 'E', 2);
test2.addEdge('B', 'C', 1);
test2.addEdge('B', 'D', 7);
test2.addEdge('B', 'E', 5);
test2.addEdge('C', 'D', 9);
test2.addEdge('C', 'E', 3);
test2.addEdge('D', 'E', 2);

const test3 = new Graph();
test3.addVertex('Home');
test3.addVertex('A');
test3.addVertex('B');
test3.addVertex('C');
test3.addVertex('D');
test3.addVertex('E');
test3.addVertex('F');
test3.addVertex('Fullstack Academy');
test3.addEdge('Home', 'A', 3);
test3.addEdge('Home', 'B', 2);
test3.addEdge('Home', 'C', 5);
test3.addEdge('A', 'D', 3);
test3.addEdge('B', 'D', 1);
test3.addEdge('B', 'E', 6);
test3.addEdge('C', 'E', 3);
test3.addEdge('D', 'F', 4);
test3.addEdge('E', 'F', 1);
test3.addEdge('E', 'Fullstack Academy', 4);
test3.addEdge('F', 'Fullstack Academy', 2);

const test4 = new Graph();
test4.addVertex('A');
test4.addVertex('B');
test4.addVertex('C');
test4.addVertex('D');
test4.addVertex('E');
test4.addEdge('A', 'B', 3);
test4.addEdge('A', 'C', 1);
test4.addEdge('B', 'C', 7);
test4.addEdge('B', 'D', 5);
test4.addEdge('B', 'E', 1);
test4.addEdge('C', 'D', 2);
test4.addEdge('D', 'E', 7);

const test5 = new Graph();
test5.addVertex('A');
test5.addVertex('B');
test5.addVertex('C');
test5.addVertex('D');
test5.addVertex('E');
test5.addVertex('F');
test5.addEdge('A', 'B', 8);
test5.addEdge('A', 'C', 10);
test5.addEdge('B', 'D', 11);
test5.addEdge('B', 'E', 11);
test5.addEdge('C', 'D', 7);
test5.addEdge('C', 'E', 9);
test5.addEdge('D', 'F', 9);
test5.addEdge('E', 'F', 9);

console.log('Test 1 : From A to A :', dijkstrasAlgo('A', 'A', test));
console.log('Test 1 : From A to B :', dijkstrasAlgo('A', 'B', test));
console.log('Test 1 : From A to C :', dijkstrasAlgo('A', 'C', test));
console.log('Test 1 : From A to D :', dijkstrasAlgo('A', 'D', test));
console.log('Test 1 : From A to E :', dijkstrasAlgo('A', 'E', test));
console.log('Test 1 : From A to F :', dijkstrasAlgo('A', 'F', test));

console.log('Test 2 : From A to F :', dijkstrasAlgo('A', 'F', test2));

console.log(
	'Test 3 : From Home to Fullstack Academy :',
	dijkstrasAlgo('Home', 'Fullstack Academy', test3)
);

console.log('Test 4 : From C to E :', dijkstrasAlgo('C', 'E', test4));

console.log('Test 5 : From A to F :', dijkstrasAlgo('A', 'F', test5));
