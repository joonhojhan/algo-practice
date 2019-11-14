/*
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.
*/

const copyArr = function(arr) {
	const copy = [];
	for (let i = 0; i < arr.length; i++) {
		copy.push([]);
		for (let j = 0; j < arr[i].length; j++) {
			copy[i].push(arr[i][j]);
		}
	}
	return copy;
};

const backtrack = function(board, row, col, word, currWord) {
	if (word === currWord) return true;
	if (row < 0 || row >= board.length || col < 0 || col >= board[row].length)
		return false;
	if (currWord === word.slice(0, currWord.length)) {
		let currLetter = board[row][col];
		let newBoard = copyArr(board);
		newBoard[row][col] = 1;
		if (backtrack(newBoard, row - 1, col, word, currWord + currLetter)) return true;
		if (backtrack(newBoard, row + 1, col, word, currWord + currLetter)) return true;
		if (backtrack(newBoard, row, col - 1, word, currWord + currLetter)) return true;
		if (backtrack(newBoard, row, col + 1, word, currWord + currLetter)) return true;
	}
	return false;
};

const exist = function(board, word) {
	let currWord = '';
	for (let row = 0; row < board.length; row++) {
		for (let col = 0; col < board[row].length; col++) {
			if (board[row][col] === word[0]) {
				if (backtrack(board, row, col, word, currWord)) return true;
			}
		}
	}
	return false;
};

const test = [
	['B', 'B', 'C', 'E'],
	['E', 'H', 'C', 'S'],
	['L', 'L', 'E', 'E'],
];

const board = [
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
console.log(exist(board, 'SEE') === true);
console.log(exist(board, 'ABCB') === false);
console.log(exist(test, 'HELL') === true);
console.log(exist(test2, 'aabbbbabbaababaaaabababbaaba'));