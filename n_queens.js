const makeGrid = n => {
	let arr = [];
	for (let i = 0; i < n; i++) {
		arr.push(Array(n).fill('.'));
	}
	return arr;
};

const isValid = (grid, row, col, n) => {
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
};

// needs work
const helper = (grid, n, col) => {
	if (col === n) return true;
	let res = false;
	for (let i = 0; i < n; i++) {
		const valid = isValid(i, col, n);
		if (valid) {
			grid[i][col] = 'Q';
			res = helper(grid, n, col + 1);
		}
		return res;
	}
};

// needs work
const solve = n => {
	const output = [];

	return output;
};
