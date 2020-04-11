/*
River Sizes

You are given a two-dimensional array (matrix) of potentially unequal height and width containing only 0s and 1s. Each 0 represents land and each 1 represents part of a river. A river consists of any number of 1s that are either horizontally or vertically adjacent (but not diagonally adjacent). The number of adjacent 1s forming a river determines its size. Write a function that returns an array of the sizes of all the rivers represented in the input matrix. Note that these sizes do not need to be in any particular order.
*/
function helper(grid, row, col) {
	let count = 1;
	if (
		row < 0 ||
		row >= grid.length ||
		col < 0 ||
		col >= grid[0].length ||
		grid[row][col] !== 1
	)
		return 0;
	grid[row][col] = 0;
	count += helper(grid, row + 1, col);
	count += helper(grid, row - 1, col);
	count += helper(grid, row, col + 1);
	count += helper(grid, row, col - 1);
	return count;
}
const riverSizes = (grid) => {
	const output = [];
	for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid[row].length; col++) {
			let count = 0;
			if (grid[row][col] === 1) {
				count += helper(grid, row, col);
			}
			if (count > 0) output.push(count);
		}
	}
	return output;
};

console.log(
	riverSizes([
		[1, 0, 0, 1, 0],
		[1, 0, 1, 0, 0],
		[0, 0, 1, 0, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 1, 1, 0],
	])
);
