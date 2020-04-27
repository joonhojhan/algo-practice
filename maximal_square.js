/*
Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

Example:

Input:

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Output: 4
*/

// Optimized: O(nm) Time, O(m) Space
// const maximalSquare = function (matrix) {
// 	if (!matrix.length || !matrix[0].length) return 0;
// 	const h = matrix.length;
// 	const w = matrix[0].length;
// 	const dp = Array(w + 1).fill(0);
// 	let prev = 0;
// 	let max = 0;
// 	for (let i = 1; i <= h; i++) {
// 		for (let j = 1; j <= w; j++) {
// 			let temp = dp[j];
// 			if (matrix[i - 1][j - 1] === '1') {
// 				dp[j] = 1 + Math.min(dp[j], Math.min(dp[j - 1], prev));
// 				max = Math.max(max, dp[j]);
// 			} else {
// 				dp[j] = 0;
// 			}
// 			prev = temp;
// 		}
// 	}
// 	return max ** 2;
// };

// O(nm) Time
// O(nm) Space
const maximalSquare = function (matrix) {
	if (!matrix.length || !matrix[0].length) return 0;
	const h = matrix.length;
	const w = matrix[0].length;
	const dp = [];
	for (let i = 0; i < h; i++) {
		dp.push(Array(w).fill(0));
	}
	let max = 0;
	for (let i = 0; i < h; i++) {
		for (let j = 0; j < w; j++) {
			if (matrix[i][j] === '1') {
				if (!i || !j) {
					dp[i][j] = 1;
				} else {
					dp[i][j] = 1 + Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]);
				}
				max = Math.max(max, dp[i][j]);
			}
		}
	}
	return max ** 2;
};

console.log(
	maximalSquare([
		['1', '0', '1', '0', '0'],
		['1', '0', '1', '1', '1'],
		['1', '1', '1', '1', '1'],
		['1', '0', '0', '1', '0'],
	]) === 4
);
console.log(
	maximalSquare([
		['1', '1', '1', '0', '0'],
		['1', '1', '1', '1', '1'],
		['1', '1', '1', '1', '1'],
		['1', '0', '0', '1', '0'],
	]) === 9
);
