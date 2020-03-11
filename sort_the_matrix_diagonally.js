/*
Leetcode: https://leetcode.com/problems/sort-the-matrix-diagonally/
Given a m * n matrix mat of integers, sort it diagonally in ascending order from the top-left to the bottom-right then return the sorted array.

Example 1:

Input: mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
Output: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]
*/

const diagonalSort = function(mat) {
	let m = mat.length; // number of rows
	let n = mat[0].length; // number of cols
	if (m === 1 && n === 1) return mat;

	// starting point, loop from top right to top left
	for (let i = n - 1; i >= 0; i--) {
		// sort from each starting point
		let sorted = [];
		for (let j = 0, k = i; j < m && k < n; j++, k++) {
			sorted.push(mat[j][k]);
		}
		sorted.sort((a, b) => a - b);
		let l = 0;
		while (l < sorted.length) {
			for (let j = 0, k = i; j < m && k < n; j++, k++) {
				mat[j][k] = sorted[l];
				l++;
			}
		}
	}

	// starting point, loop from top left to bottom left
	for (let i = 1; i < m; i++) {
		// sort from each starting point
		let sorted = [];
		for (let j = i, k = 0; j < m && k < n; j++, k++) {
			sorted.push(mat[j][k]);
		}
		sorted.sort((a, b) => a - b);
		let l = 0;
		while (l < sorted.length) {
			for (let j = i, k = 0; j < m && k < n; j++, k++) {
				mat[j][k] = sorted[l];
				l++;
			}
		}
	}
	return mat;
};

console.log(
	diagonalSort([
		[3, 3, 1, 1],
		[2, 2, 1, 2],
		[1, 1, 1, 2],
	])
); // [[1,1,1,1],[1,2,2,2],[1,2,3,3]]
