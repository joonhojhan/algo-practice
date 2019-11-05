/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?
*/

const uniquePaths = function(m, n) {
	let grid = [];
	for (let i = 0; i < 2; i++) {
		grid[i] = Array(m).fill(1);
	}
	for (let i = 1; i < n; i++) {
		for (let j = 1; j < m; j++) {
			grid[1][j] = grid[1][j - 1] + grid[0][j];
		}
		grid[0] = grid[1];
		grid[1] = Array(m).fill(1);
	}
	return grid[0][m - 1];
};

console.log(uniquePaths(3, 7) === 28);
console.log(uniquePaths(2, 3) === 3);
console.log(uniquePaths(4, 4) === 20);
