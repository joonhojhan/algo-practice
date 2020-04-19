/*
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.
*/

// Returns array equivalent to array passed in
const backtrack = function (board, row, col, word, idx) {
	if (word.length === idx) return true;
	if (
		row < 0 ||
		row >= board.length ||
		col < 0 ||
		col >= board[row].length ||
		board[row][col] === '.'
	)
		return false;
	const currLetter = board[row][col];
	if (word[idx] === currLetter) {
		const rowDir = [1, -1, 0, 0];
		const colDir = [0, 0, 1, -1];
		board[row][col] = '.';
		for (let i = 0; i < 4; i++) {
			if (backtrack(board, row + rowDir[i], col + colDir[i], word, idx + 1))
				return true;
		}
		board[row][col] = currLetter;
	}
	return false;
};

function exist(board, word) {
	for (let row = 0; row < board.length; row++) {
		for (let col = 0; col < board[row].length; col++) {
			if (board[row][col] === word[0]) {
				if (backtrack(board, row, col, word, 0)) return true;
			}
		}
	}
	return false;
}

const test = [
	['B', 'B', 'C', 'E'],
	['E', 'H', 'C', 'S'],
	['L', 'L', 'E', 'E'],
];

let board = [
	['A', 'B', 'C', 'E'],
	['S', 'F', 'C', 'S'],
	['A', 'D', 'E', 'E'],
];

const test2 = [
	['b', 'a', 'a', 'b', 'a', 'b'],
	['a', 'b', 'a', 'a', 'a', 'a'],
	['a', 'b', 'a', 'a', 'a', 'b'],
	['a', 'b', 'a', 'b', 'b', 'a'],
	['a', 'a', 'b', 'b', 'a', 'b'],
	['a', 'a', 'b', 'b', 'b', 'a'],
	['a', 'a', 'b', 'a', 'a', 'b'],
];

console.log(exist(board, 'ABCCED') === true);
board = [
	['A', 'B', 'C', 'E'],
	['S', 'F', 'C', 'S'],
	['A', 'D', 'E', 'E'],
];
console.log(exist(board, 'SEE') === true);
board = [
	['A', 'B', 'C', 'E'],
	['S', 'F', 'C', 'S'],
	['A', 'D', 'E', 'E'],
];
console.log(exist(board, 'ABCB') === false);
console.log(exist(test, 'HELL') === true);
console.log(exist(test2, 'aabbbbabbaababaaaabababbaaba') === true);
