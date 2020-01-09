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

const isValid = function(grid, row, col) {
	return !(row < 0 || col < 0 || row >= grid.length || col >= grid[row].length);
};

const backtrack = function(grid, row, col, currSum, sums) {
	// console.log(grid);
	// console.log('row >>>', row);
	// console.log('col >>>', col);
	// console.log('currSum >>>', currSum);
	if (!isValid(grid, row, col)) {
		return 0;
	}
	sums.push(currSum);
	if (grid[row][col] !== 0) {
		let copy = copyArr(grid);
		copy[row][col] = 0;
		backtrack(copy, row, col + 1, currSum + grid[row][col], sums);
		backtrack(copy, row - 1, col, currSum + grid[row][col], sums);
		backtrack(copy, row + 1, col, currSum + grid[row][col], sums);
		backtrack(copy, row, col - 1, currSum + grid[row][col], sums);
	}
	return Math.max(...sums);
};

const getMaximumGold = function(grid) {
	let sums = [];
	for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid[row].length; col++) {
			sums.push(backtrack(grid, row, col, 0, sums));
		}
	}
	return Math.max(...sums);
};

const test1 = [
	[0, 6, 0],
	[5, 8, 7],
	[0, 9, 0],
];
const test2 = [
	[1, 0, 7],
	[2, 0, 6],
	[3, 4, 5],
	[0, 3, 0],
	[9, 0, 20],
];
const test3 = [
	[23, 21, 38, 12, 18, 36, 0, 7, 30, 29, 20, 3, 28],
	[23, 3, 19, 2, 1, 11, 4, 8, 9, 24, 6, 5, 35],
];
console.log(getMaximumGold(test1) === 24); // 24
console.log(getMaximumGold(test2) === 28); // 28
console.log(getMaximumGold(test3));
