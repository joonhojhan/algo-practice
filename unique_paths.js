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

// brute force recursive solution, time limit exceeded on LeetCode
// const uniquePaths = function(m, n) {
// 	let grid = [];
// 	let res = 0;
// 	for (let i = 0; i < n; i++) {
// 		grid[i] = Array(m).fill(1);
// 	}
// 	const helper = (row, col) => {
// 		if (row === m - 1 && col === n - 1) {
// 			res++;
// 			return;
// 		}
// 		if (row >= m || col >= n) {
// 			return;
// 		}
// 		helper(row + 1, col);
// 		helper(row, col + 1);
// 	};
// 	helper(0, 0);
// 	return res;
// };

console.log(uniquePaths(3, 7) === 28);
console.log(uniquePaths(2, 3) === 3);
console.log(uniquePaths(4, 4) === 20);
console.log(uniquePaths(19, 13) === 86493225);
