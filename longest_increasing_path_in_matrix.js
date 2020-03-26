/*
Given an integer matrix, find the length of the longest increasing path.

From each cell, you can either move to four directions: left, right, up or down. You may NOT move diagonally or move outside of the boundary (i.e. wrap-around is not allowed).

Example 1:

Input: nums =
[
  [9,9,4],
  [6,6,8],
  [2,1,1]
]
Output: 4
Explanation: The longest increasing path is [1, 2, 6, 9].
Example 2:

Input: nums =
[
  [3,4,5],
  [3,2,6],
  [2,2,1]
]
Output: 4
Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.
*/

// Brute force, unoptimized approach, time limit exceeded on LeetCode
// var longestIncreasingPath = function(matrix) {
// 	let res = 0;
// 	const findPath = function(row, col, currentPathLength) {
// 		let current = matrix[row][col];
// 		matrix[row][col] = -Infinity;
// 		if (row > 0 && matrix[row - 1][col] > current) {
// 			findPath(row - 1, col, currentPathLength + 1);
// 		}
// 		if (row < matrix.length - 1 && matrix[row + 1][col] > current) {
// 			findPath(row + 1, col, currentPathLength + 1);
// 		}
// 		if (col > 0 && matrix[row][col - 1] > current) {
// 			findPath(row, col - 1, currentPathLength + 1);
// 		}
// 		if (col < matrix[row].length - 1 && matrix[row][col + 1] > current) {
// 			findPath(row, col + 1, currentPathLength + 1);
// 		}
// 		if (currentPathLength > res) {
// 			res = currentPathLength;
// 		}
// 		matrix[row][col] = current;
// 	};
// 	for (let i = 0; i < matrix.length; i++) {
// 		for (let j = 0; j < matrix[i].length; j++) {
// 			findPath(i, j, 1);
// 		}
// 	}
// 	return res;
// };

const longestIncreasingPath = function(matrix) {
	// initialize variable for longest increasing path length
	let res = 0;
	// initialize memo of same size of matrix with all values set to -1
	// memo repressents max path length for each position in matrix, each position corresponds to position in matrix
	const memo = [];
	for (let i = 0; i < matrix.length; i++) {
		memo[i] = Array(matrix[i].length).fill(-1);
	}
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			// for each number in matrix, if max path is greater than longest increasing path length, reassign longest increasing path length
			res = Math.max(res, dft(matrix, i, j, -Infinity, memo));
		}
	}
	return res;
};

function dft(matrix, row, col, prev, memo) {
	// base case, if row/col is invalid or current number is less than previous number, return 0;
	if (
		row < 0 ||
		col < 0 ||
		row >= matrix.length ||
		col >= matrix[row].length ||
		matrix[row][col] <= prev
	) {
		return 0;
	}
	// if position in memo is -1 (unvisited)
	if (memo[row][col] === -1) {
		// initialize variable for max path length
		let maxPathLength = 0;
		// row and col vectors to easily loop
		const rowDir = [1, -1, 0, 0];
		const colDir = [0, 0, 1, -1];

		for (let i = 0; i < 4; i++) {
			// find path length for node going in each direction
			let maxForNode =
				1 + dft(matrix, row + rowDir[i], col + colDir[i], matrix[row][col], memo);
			// reassign maxPathLength is path length for node in current direction is greater
			maxPathLength = Math.max(maxPathLength, maxForNode);
		}
		// set current position in memo that was unvisited to max path length found
		memo[row][col] = maxPathLength;
	}
	// return path length found in memo for position
	return memo[row][col];
}

console.log(
	longestIncreasingPath([
		[9, 9, 4],
		[6, 6, 8],
		[2, 1, 1],
	]) === 4
);
console.log(
	longestIncreasingPath([
		[3, 4, 5],
		[3, 2, 6],
		[2, 2, 1],
	]) === 4
);
console.log(
	longestIncreasingPath([
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		[19, 18, 17, 16, 15, 14, 13, 12, 11, 10],
		[20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
		[39, 38, 37, 36, 35, 34, 33, 32, 31, 30],
		[40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
		[59, 58, 57, 56, 55, 54, 53, 52, 51, 50],
		[60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
		[79, 78, 77, 76, 75, 74, 73, 72, 71, 70],
		[80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
	]) === 90
);
console.log(
	longestIncreasingPath([
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		[19, 18, 17, 16, 15, 14, 13, 12, 11, 10],
		[20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
		[39, 38, 37, 36, 35, 34, 33, 32, 31, 30],
		[40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
		[59, 58, 57, 56, 55, 54, 53, 52, 51, 50],
		[60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
		[79, 78, 77, 76, 75, 74, 73, 72, 71, 70],
		[80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
		[99, 98, 97, 96, 95, 94, 93, 92, 91, 90],
		[100, 101, 102, 103, 104, 105, 106, 107, 108, 109],
		[119, 118, 117, 116, 115, 114, 113, 112, 111, 110],
		[120, 121, 122, 123, 124, 125, 126, 127, 128, 129],
		[139, 138, 137, 136, 135, 134, 133, 132, 131, 130],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	]) === 140
);
