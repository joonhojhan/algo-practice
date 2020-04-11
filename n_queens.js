/*
The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

Example:

Input: 4
Output: [
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.
*/
function isValid(placements) {
	for (let row = 0; row < placements.length; row++) {
		for (let col = 0; col < placements[row].length; col++) {
			if (placements[row][col] === 'Q') {
				// check row
				for (let i = 0; i < placements.length; i++) {
					if (i !== col && placements[row][i] === 'Q') return false;
				}
				// check col
				for (let i = 0; i < placements.length; i++) {
					if (i !== row && placements[i][col] === 'Q') return false;
				}
				// check diagonal
				for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
					if (i !== row && j !== col && placements[i][j] === 'Q') return false;
				}
				for (
					let i = row, j = col;
					i < placements.length && j < placements[i].length;
					i++, j++
				) {
					if (i !== row && j !== col && placements[i][j] === 'Q') return false;
				}
				for (let i = row, j = col; i < placements.length && j >= 0; i++, j--) {
					if (i !== row && j !== col && placements[i][j] === 'Q') return false;
				}
				for (let i = row, j = col; i >= 0 && j < placements[i].length; i--, j++) {
					if (i !== row && j !== col && placements[i][j] === 'Q') return false;
				}
			}
		}
	}
	return true;
}

function copyBoard(board) {
	const copy = [];
	for (let i = 0; i < board.length; i++) {
		copy.push(board[i]);
	}
	return copy;
}

function createPlacements(n) {
	const placements = [];
	for (let i = 0; i < n; i++) {
		let row = '';
		for (let j = 0; j < n; j++) {
			if (i === j) row += 'Q';
			else row += '.';
		}
		placements.push(row);
	}
	return placements;
}

function backtrack(n, row, placements, colPlacements, res) {
	if (placements.length === n) res.push(copyBoard(placements));
	else {
		for (let col = 0; col < n; col++) {
			placements.push(colPlacements[col]);
			if (isValid(placements)) backtrack(n, row + 1, placements, colPlacements, res);
			placements.pop();
		}
	}
}

function solveNQueens(n) {
	const res = [];
	const colPlacements = createPlacements(n);
	for (let i = 0; i < colPlacements.length; i++) {
		backtrack(n, 0, [colPlacements[i]], colPlacements, res);
	}
	return res;
}

console.log(solveNQueens(1).length === 1);
console.log(solveNQueens(2).length === 0);
console.log(solveNQueens(3).length === 0);
console.log(solveNQueens(4).length === 2);
console.log(solveNQueens(5).length === 10);
console.log(solveNQueens(6).length === 4);
console.log(solveNQueens(7).length === 40);
console.log(solveNQueens(8).length === 92);
console.log(solveNQueens(9).length === 352);
console.log(solveNQueens(10).length === 724);
// console.log(solveNQueens(11).length === 2680);
// console.log(solveNQueens(12).length === 14200);
