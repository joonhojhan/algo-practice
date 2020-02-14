/*
Given an array of integers A, a move consists of choosing any A[i], and incrementing it by 1.

Return the least number of moves to make every value in A unique.



Example 1:

Input: [1,2,2]
Output: 1
Explanation:  After 1 move, the array could be [1, 2, 3].
Example 2:

Input: [3,2,1,2,1,7]
Output: 6
Explanation:  After 6 moves, the array could be [3, 4, 1, 2, 5, 7].
It can be shown with 5 or less moves that it is impossible for the array to have all unique values.
*/

const minIncrementForUnique = function(A) {
	A.sort((a, b) => a - b);
	let n = A.length;
	let prev = A[0];
	let moves = 0;
	for (let i = 1; i < n; i++) {
		let num = A[i];
		if (num <= prev) {
			prev++;
			moves += prev - num;
		} else {
			prev = num;
		}
	}
	return moves;
};

console.log(minIncrementForUnique([1, 2, 2]) === 1);
console.log(minIncrementForUnique([3, 2, 1, 2, 1, 7]) === 6);
