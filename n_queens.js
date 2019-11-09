function makeGrid(n) {
	let arr = [];
	for (let i = 0; i < n; i++) {
		arr.push(Array(n).fill('.'));
	}
	return arr;
}

function isValid(grid, row, col, n) {
	if (row > n - 1 || col > n - 1) return false;
	// check row
	for (let i = 0; i < n - 1; i++) {
		if (i !== col && grid[row][i] === 'Q') return false;
	}
	// check col
	for (let i = 0; i < n - 1; i++) {
		if (i !== row && grid[i][col] === 'Q') return false;
	}
	// check diagonal
	for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
		if (grid[i][j] === 'Q') return false;
	}
	for (let i = row, j = col; i <= n - 1 && j <= n - 1; i++, j++) {
		if (grid[i][j] === 'Q') return false;
	}
	for (let i = row, j = col; i <= n - 1 && j >= 0; i++, j--) {
		if (grid[i][j] === 'Q') return false;
	}
	for (let i = row, j = col; i >= 0 && j <= n - 1; i--, j++) {
		if (grid[i][j] === 'Q') return false;
	}
	return true;
}

// needs work
function backtrack(row, col, board, n, res, dim) {
	console.log('row', row);
	console.log('col', col);
	console.log('board\n', board);
	console.log('n', n);
	// console.log('res', res);
	console.log('dim', dim);
	console.log('---------------------------------');
	if (!n) {
		// console.log('i ran', n);
		res.push(board);
		return;
	}
	let valid = isValid(board, row, col, dim);
	if (!valid) return;
	board[row][col] = 'Q';
	if (col < dim - 1) {
		// console.log('>>>>>>>>> in the first if');
		backtrack(row, col + 1, board, n - 1, res, dim);
	}
	if (row < dim - 1) {
		// console.log('>>>>>>>>> in the second if');
		backtrack(row + 1, col, board, n - 1, res, dim);
	}
}

// needs work
function nQueens(n) {
	const res = [];
	let board = makeGrid(n);
	backtrack(0, 0, board, n, res, n);
	return res;
}

console.log(nQueens(4));
