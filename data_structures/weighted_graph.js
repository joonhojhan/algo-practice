class WeightedGraph {
	constructor() {
		this.adjacencyList = {};
	}
	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}
	addEdge(vertex1, vertex2, weight) {
		this.adjacencyList[vertex1].push({ node: vertex2, weight });
		this.adjacencyList[vertex2].push({ node: vertex1, weight });
	}
}

const graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addEdge('A', 'C', 2);
graph.addEdge('A', 'B', 4);
graph.addEdge('B', 'E', 3);
graph.addEdge('E', 'D', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('D', 'F', 1);
graph.addEdge('F', 'C', 4);
graph.addEdge('F', 'E', 1);
console.log(graph.adjacencyList);
