/*
n-queens puzzle that is brute force and has duplicates.

This does NOT work the way the leet code problem intended.
*/

function makeGrid(n) {
	const arr = [];
	for (let i = 0; i < n; i++) {
		arr.push(Array(n).fill('.'));
	}
	return arr;
}

function isValid(grid, row, col, n) {
	if (row > n - 1 || col > n - 1) return false;
	if (row < 0 || col < 0) return false;
	// check row
	for (let i = 0; i < n; i++) {
		if (i !== col && grid[row][i] === 'Q') return false;
	}
	// check col
	for (let i = 0; i < n; i++) {
		if (i !== row && grid[i][col] === 'Q') return false;
	}
	// check diagonal
	for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
		if (grid[i][j] === 'Q') return false;
	}
	for (let i = row, j = col; i < n && j < n; i++, j++) {
		if (grid[i][j] === 'Q') return false;
	}
	for (let i = row, j = col; i < n && j >= 0; i++, j--) {
		if (grid[i][j] === 'Q') return false;
	}
	for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
		if (grid[i][j] === 'Q') return false;
	}
	return true;
}

function copyBoard(board) {
	const copy = [];
	for (let i = 0; i < board.length; i++) {
		copy.push([]);
		for (let j = 0; j < board[i].length; j++) {
			copy[i].push(board[i][j]);
		}
	}
	return copy;
}

function hasNQueens(board) {
	let counter = 0;
	for (const row of board) {
		for (const position of row) {
			if (position === 'Q') counter++;
		}
	}
	return counter === board.length;
}

// needs work
function backtrack(board, res) {
	if (hasNQueens(board)) {
		res.push(board);
		return;
	}
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if (isValid(board, i, j, board.length)) {
				const newBoard = copyBoard(board);
				newBoard[i][j] = 'Q';
				backtrack(newBoard, res, board.length, i, j);
			}
		}
	}
}

// needs work
function nQueens(n) {
	const res = [];
	for (let col = 0; col < n; col++) {
		const board = makeGrid(n);
		board[0][col] = 'Q';
		backtrack(board, res);
	}
	return res;
}

console.log(nQueens(4).length === 2);
console.log(nQueens(5).length === 10);
console.log(nQueens(8).length === 92);
