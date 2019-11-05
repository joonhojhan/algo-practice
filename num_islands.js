/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
*/

const numIslands = grid => {
	let count = 0;
	for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid[row].length; col++) {
			if (grid[row][col] === '1') {
				count++;
				helper(grid, row, col);
			}
		}
	}
	return count;
};

function helper(grid, row, col) {
	if (
		!(row >= 0) ||
		!(row < grid.length) ||
		!(col >= 0) ||
		!(col < grid[0].length) ||
		grid[row][col] !== '1'
	)
		return;
	grid[row][col] = '0';
	helper(grid, row - 1, col);
	helper(grid, row + 1, col);
	helper(grid, row, col - 1);
	helper(grid, row, col + 1);
}

console.log(
	numIslands([
		['1', '1', '1', '1', '0'],
		['1', '1', '0', '1', '0'],
		['1', '1', '0', '0', '0'],
		['0', '0', '0', '0', '0'],
	]) === 1
);
console.log(
	numIslands([
		['1', '1', '0', '0', '0'],
		['1', '1', '0', '0', '0'],
		['0', '0', '1', '0', '0'],
		['0', '0', '0', '1', '1'],
	]) === 3
);

console.log(numIslands([['1', '0', '1', '1', '0', '1', '1']]));
