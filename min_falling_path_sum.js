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
	const dp = [];
	for (let i = 0; i < A.length; i++) {
		dp.push([]);
		for (let j = 0; j < A[0].length; j++) {
			if (i === 0) dp[i].push(A[i][j]);
			else dp[i].push(0);
		}
	}
	for (let i = 1; i < A.length; i++) {
		for (let j = 0; j < A[0].length; j++) {
			const leftDiag = dp[i - 1][j - 1] + A[i][j];
			const above = dp[i - 1][j] + A[i][j];
			const rightDiag = dp[i - 1][j + 1] + A[i][j];
			if (j === 0) dp[i][j] = Math.min(above, rightDiag);
			else if (j === A[0].length - 1) dp[i][j] = Math.min(above, leftDiag);
			else dp[i][j] = Math.min(leftDiag, above, rightDiag);
		}
	}
	return Math.min(...dp[dp.length - 1]);
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
