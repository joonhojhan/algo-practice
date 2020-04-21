/*
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
Example 1:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true
Example 2:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false
*/

// const searchMatrix = function (matrix, target) {
// 	if (!matrix.length || !matrix[0].length) return false;
// 	let top = 0;
// 	let bottom = matrix.length - 1;
// 	let left = 0;
// 	let right = matrix[0].length - 1;
// 	let row;
// 	while (top <= bottom) {
// 		row = Math.floor((top + bottom) / 2);
// 		if (matrix[row][0] === target) return true;
// 		else if (matrix[row][0] > target) bottom = row - 1;
// 		else top = row + 1;
// 	}
// 	if (matrix[row][0] > target && row - 1 >= 0) row--;
// 	while (left <= right) {
// 		const mid = Math.floor((left + right) / 2);
// 		if (matrix[row][mid] === target) return true;
// 		else if (matrix[row][mid] > target) right = mid - 1;
// 		else left = mid + 1;
// 	}
// 	return false;
// };

// Optimized
const searchMatrix = function (matrix, target) {
	if (!matrix.length || !matrix[0].length) return false;
	const n = matrix.length;
	const m = matrix[0].length;
	let r = 0;
	let c = m - 1;
	while (r < n && c >= 0) {
		const curr = matrix[r][c];
		if (curr === target) return true;
		if (curr > target) c--;
		else r++;
	}
	return false;
};

console.log(searchMatrix([], 1) === false);
console.log(searchMatrix([[]], 1) === false);
console.log(searchMatrix([[1]], 3) === false);
console.log(searchMatrix([[1], [3]], 3) === true);
console.log(
	searchMatrix(
		[
			[1, 3, 5, 7],
			[10, 11, 16, 20],
			[23, 30, 34, 50],
		],
		13
	) === false
);
console.log(
	searchMatrix(
		[
			[1, 3, 5, 7],
			[10, 11, 16, 20],
			[23, 30, 34, 50],
		],
		3
	) === true
);
