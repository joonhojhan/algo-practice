/*
Given a square array of integers A, we want the minimum sum of a falling path through A.

A falling path starts at any element in the first row, and chooses one element from each row.  The next row's choice must be in a column that is different from the previous row's column by at most one.



Example 1:

Input: [[1,2,3],[4,5,6],[7,8,9]]
Output: 12
Explanation:
The possible falling paths are:
[1,4,7], [1,4,8], [1,5,7], [1,5,8], [1,5,9]
[2,4,7], [2,4,8], [2,5,7], [2,5,8], [2,5,9], [2,6,8], [2,6,9]
[3,5,7], [3,5,8], [3,5,9], [3,6,8], [3,6,9]
The falling path with the smallest sum is [1,4,7], so the answer is 12.



Note:

1 <= A.length == A[0].length <= 100
-100 <= A[i][j] <= 100
*/

const minFallingPathSum = function (A) {
	let res = Infinity;
	const h = A.length;
	const w = A[0].length;
	if (h === 1) return Math.max(...A[h - 1]);
	for (let i = 1; i < h; i++) {
		for (let j = 0; j < w; j++) {
			if (j === 0) A[i][j] += Math.min(A[i - 1][j], A[i - 1][j + 1]);
			else if (j === w - 1) A[i][j] += Math.min(A[i - 1][j], A[i - 1][j - 1]);
			else A[i][j] += Math.min(A[i - 1][j], A[i - 1][j - 1], A[i - 1][j + 1]);
			if (i === h - 1 && A[i][j] < res) res = A[i][j];
		}
	}
	return res;
};

console.log(
	minFallingPathSum([
		[10, -98, 44],
		[-20, 65, 34],
		[-100, -1, 74],
	]) === -218
);
console.log(
	minFallingPathSum([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	]) === 12
);
console.log(
	minFallingPathSum([
		[15, 12, 83],
		[14, 58, 66],
		[76, 89, -92],
	]) === -22
);
